'use strict';

/*  ==========  preparo elementi pagina  ==========*/
var listings = document.getElementById('listings');
var siblings;

/**
 * [setActive description]
 * @param {[type]} el [description]
 */
function setActive(el) {
  siblings = listings.getElementsByTagName('div');
  for (var i = 0; i < siblings.length; i++) {
    siblings[i].className = siblings[i].className
      .replace(/active/, '').replace(/\s\s*$/, '');
  }

  el.className += ' active';
}

/*  ==========  creo menu dinamicamente dal json  ==========*/
// array vuoti da riempire con tutti i valori di ogni propprieta
var country = [];
var zip = [];
var stateProvince = [];
var ressellerType = [];

// funzione che mi riempie l'array con la proppietà richiesta attraversando il geojson
/**
 * [fillArray description]
 * @param  {[type]} property    [description]
 * @param  {[type]} arrayToFill [description]
 * @return {[type]}             [description]
 */
function fillArray(property, arrayToFill) {
  for (var i = 0; i < geojsonFeature.features.length; i++) {
    var element = geojsonFeature.features;
    arrayToFill.push(element[i].properties[property]);
  }
  return arrayToFill;
}
// oggetto contenente label ed array delle proprietà
var propertiesObj = {
  country: {
    propertyName: 'country',
    arrayName: country,
    propertyClass: '.filter-country'
  },
  ressellerType: {
    propertyName: 'ressellerType',
    arrayName: ressellerType,
    propertyClass: '.filter-resseller'
  },
  stateProvince: {
    propertyName: 'stateProvince',
    arrayName: stateProvince,
    propertyClass: '.filter-state'
  },
  zip: {
    propertyName: 'zip',
    arrayName: zip,
    propertyClass: '.filter-zip'
  }
};

// With JavaScript 1.6 / ECMAScript 5 you can use the native filter method of an Array
// http://stackoverflow.com/questions/1960473/unique-values-in-an-array
// funzione che prende i valori univoci da un array
/**
 * [onlyUnique description]
 * @param  {[type]} value [description]
 * @param  {[type]} index [description]
 * @param  {[type]} self  [description]
 * @return {[type]}       [description]
 */
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

// filters to unique elements from arrays of properties
// and appends to the DOM a list with ul li of same names

/**
 * [listElementConstructor description]
 * @param  {[type]} propertyClass [description]
 * @param  {[type]} arrayName     [description]
 * @param  {[type]} propertyName  [description]
 */
function listElementConstructor(propertyClass, arrayName, propertyName) {
  var unique = arrayName.filter(onlyUnique);
  console.log(unique);
  for (var i = 0; i < unique.length; i++) {
    var appender = propertyClass.toString() + ' ul';
    // strano modo di passargli il valore..usa un oggetto con la proprietà html del nodo
    $('<li />', {html: unique[i]})
      .appendTo(appender)
      .addClass(unique[i])
      .attr({
        'data-filter': propertyName,
        'data-value': unique[i]
      });
  }
}

// riempo gli array vuoti per ogni proprietà
// filtro questi array per prendere proprietà uniche
// uso queste uniche propr per costruire elementi di lista del menu
var prop;
for (prop in propertiesObj) {
  if (propertiesObj.hasOwnProperty) {
    fillArray(propertiesObj[prop].propertyName, propertiesObj[prop].arrayName);
    listElementConstructor(propertiesObj[prop].propertyClass,
      propertiesObj[prop].arrayName, propertiesObj[prop].propertyName);
  }
}

/* ==========  preparo mappa  ==========*/
var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
});

var map = L.map('map', {
  scrollWheelZoom: false,
  center: [38.909671288923, -77.034084142948],
  zoom: 16
});

/* ==========  carico dati creando un geoJSON layer and GO!!!  ==========*/

var locations;

/**
 * [wholeMarkersLayer description]
 */
function wholeMarkersLayer() {
  // carico geojson su geojson layer
  // var geojsonFeature = './sweetgreen.geojson';
  locations = L.geoJson(geojsonFeature, {
    pointToLayer: function(feature, latlng) {
      // creo variabili con icone da utilizzare dopo
      // utilizzo il plugin maki-icons per leaflet
      var purpleIcon = L.MakiMarkers.icon({
        icon: 'rocket',
        color: '#b0b',
        size: 'm'
      });
      // var blueIcon = L.MakiMarkers.icon({
      //   icon: "fast-food",
      //   color: "#2D3CCC",
      //   size: "m"
      // });
      // console.log(feature);

      // tentativo di filtro features
      // non mi serve più perchè ne implemento uno serio a seconda dei bottoni scelti dall'utente
      // if (feature.properties.state == 'PA')
      //   return L.marker(latlng, {icon: blueIcon});
      // else
      //   return L.marker(latlng, {icon: purpleIcon});
      return L.marker(latlng, {
        icon: purpleIcon
      });
    }
  }).addTo(map);
}

wholeMarkersLayer();

/* ==========  aggiungo funzionalità alle features create  ==========*/
// nota che rispetto ad altri esempi di mapbox devo farlo in due tempi
// visto che non ho le funzioni adeguate
// ora prima creo delle features
// e poi ciclando sul layer che le contiene gli aggiungo le funzionalità che voglio
locations.eachLayer(function(e) {
  // Shorten locale.feature.properties to just `prop` so we're not
  // writing this long form over and over again.
  var prop = e.feature.properties;

  // Each marker on the map.
  var popup = '<h3>Sweetgreen</h3><div>' + prop.address;

  var listing = listings.appendChild(document.createElement('div'));
  listing.className = 'item';

  var link = listing.appendChild(document.createElement('a'));
  link.href = '#';
  link.className = 'title';

  link.innerHTML = prop.address;
  if (prop.crossStreet) {
    link.innerHTML += '<br /><small class="quiet">' +
      prop.crossStreet +
      '</small>';
    popup += '<br /><small class="quiet">' + prop.crossStreet + '</small>';
  }

  var details = listing.appendChild(document.createElement('div'));
  details.innerHTML = prop.city;
  if (prop.phone) {
    details.innerHTML += ' &middot; ' + prop.phoneFormatted;
  }

  link.onclick = function() {
    setActive(listing);

    // When a menu item is clicked, animate the map to center
    // its associated locale and open its popup.
    map.setView(e.getLatLng(), 16);
    e.openPopup();
    return false;
  };

  // // Marker interaction
  e.on('click', function(a) {
    // 1. center the map on the selected marker.
    map.panTo([a.latlng.lat, a.latlng.lng]);
    map.panTo(e.getLatLng());
    // 2. Set active the markers associated listing.
    setActive(listing);
  });

  popup += '</div>';
  e.bindPopup(popup);
});

// sistemo il BBOX fittandolo all'estensione delle features
map.fitBounds(locations.getBounds());
// aggiungo la mappa di sfondo
map.addLayer(layer);

/* filtri */
//  console.log(document.getElementsByClassName('.filter-country'));
var filterPressed;
$('.filter-master ul li').click(function(event) {
  map.removeLayer(locations);
  filterPressed = event.target.dataset.filter;
  var prop = event.target.dataset.value;

  locations = L.geoJson(locations.toGeoJSON(), {
    pointToLayer: function(feature, latlng) {
      var blueIcon = L.MakiMarkers.icon({
        icon: 'fast-food',
        color: '#2D3CCC',
        size: 'm'
      });
      return L.marker(latlng, {
        icon: blueIcon
      });
    },
    filter: function(feature) {
      return feature.properties[filterPressed] === prop;
    }
  });

  map.addLayer(locations);
});

$('.filter-reset').click(function() {
  map.removeLayer(locations);
  console.log('poroc');
  // console.log($(event.target.parentElement).hasClass('filter-reset'));
  // if ($(event.target.parentElement).hasClass('filter-reset')){
  wholeMarkersLayer();
});

// L.geoJson(someFeatures, {
//     filter: function(feature, layer) {
//         return feature.properties.show_on_map;
//     }
// }).addTo(map);

// data filter tipo
// data filet value
