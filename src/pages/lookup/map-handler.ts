import { Injectable } from '@angular/core';

declare const google: any;

@Injectable()
export class MapHandler {

  private pin: any;
  private marker: any;
  private map: any;


  constructor() {
    this.setMapPin();
  }

  initMap(divMap, coordinates) {
    this.map = new google.maps.Map(divMap, {
      center: coordinates,
      zoom: 12,
      styles: this.getMapStyle(),
      disableDefaultUI: true,
      draggable: true,
      zoomControl: false
    });
  }

  getMapStyle() {
    return [{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#5b6571"},{"lightness":"35"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"on"},{"color":"#f3f4f4"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"weight":0.9},{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#83cead"}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"on"},{"color":"#ffffff"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"on"},{"color":"#fee379"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway.controlled_access","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#7fc8ed"}]}];
  }

  /*
   * Set map marker image and size.
   */
  setMapPin() {
    this.pin = {
      url: 'assets/img/pin.png',
      scaledSize : new google.maps.Size(32, 32)
    };
  }

  /*
   * Show user location/chosen location marker on map.
   */
  createMapMarker(place) {
    // Remove current marker from map.
    if (this.marker) this.marker.setMap(null);

    // Set new marker on map.
    this.marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      icon: this.pin,
      position: place
    });
  }

  setMapCenter(location) {
    this.map.setCenter(location);
  }

  getMap() {
    return this.map;
  }

  /*
   * Remove loader animation when map tiles have loaded.
   */
  setLoaderDismiss(loader) {
    google.maps.event.addListenerOnce(this.map, 'tilesloaded', () => {
      loader.dismiss();
    });
  }

}
