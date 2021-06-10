
// Initialize and add the map
function initMap() {
  // The location of Uluru
  const danang1 = { lat: 16.0582771, lng: 108.2080973 };
  const danang2 = { lat: 16.0641, lng: 108.1873 };
  const danang3 = { lat: 16.0682771, lng: 108.2080973 };
  const danang4= { lat: 16.0639, lng: 108.2066 }; 
  const danang5 = { lat: 16.0692398, lng: 108.1825893 };
  // The map, centered at VietNam
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: danang1,
  });
  // The marker, positioned at Da Nang, Viet Nam

  const marker1 = new google.maps.Marker({
    position: danang1,
    map: map,
  });
  const marker2 = new google.maps.Marker({
    position: danang2,
    map: map,
  });
  const marker3 = new google.maps.Marker({
    position: danang3,
    map: map,
  });
 const marker4 = new google.maps.Marker({
    position: danang4,
   map: map,
 });
 const marker5 = new google.maps.Marker({
   position: danang5,
  map: map,
});


}

