import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, LoadingController, PopoverController, ToastController, Platform } from 'ionic-angular';
import { ResultPage } from './result/result';
import { ModalAutocompleteItems } from './modal-autocomplete-items/modal-autocomplete-items';
import { HelpPage } from './help/help';
import { LookupService } from '../../providers/lookup-service';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder } from "@ionic-native/native-geocoder";
import { AdvancedOptionsPage } from "./advanced-options/advanced-options";
import { StatusBar } from "@ionic-native/status-bar";

declare const google: any;

@Component({
  selector: 'page-lookup',
  templateUrl: 'lookup.html',
  providers: [LookupService, Geolocation, NativeGeocoder]
})
export class LookupPage implements OnInit {

  private helpPage = HelpPage;
  private chosenDate: any;
  private minYear: number;
  private maxYear: number;
  private yearLimit: number = 20;
  private mm: number = 0;
  private optionsAvailable: boolean = true;
  private pastYears: number = 10;
  private niceLookingDate: string = 'No date';
  private loader: any;
  private toast: any;

  /* Map variables */
  private location: any = { address: 'No address', lat: null, lng: null, set: false };
  private placesService: any;
  private map: any;
  private pin: any;
  private marker: any;


  constructor(
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private lookupService: LookupService,
    private modalCtrl: ModalController,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private popoverCtrl: PopoverController,
    private toastCtrl: ToastController,
    private statusBar: StatusBar,
    private platform: Platform) {
  }

  async ngOnInit() {
    try {
      this.showLoading('Loading map...');
      this.setupDatePicker();
      await this.setCurrentCoordinates();
      this.initMap();
      this.setMapPin();
      this.createMapMarker({ lat: this.location.lat, lng: this.location.lng });
      this.setCurrentAddress();
      this.setNiceLookingDate();
      this.loader.dismiss();
    }
    catch (message) {
      this.showToast(message, 'error-toast');
    }
  }

  onShowAdvancedOptions(myEvent) {
    const popover = this.popoverCtrl.create(AdvancedOptionsPage, { mm: this.mm });
    popover.onDidDismiss(mm => {
      if (mm != null) this.mm = mm;
    });
    popover.present({ ev: myEvent });
  }

  async setCurrentCoordinates() {
    try {
      const position = await this.geolocation.getCurrentPosition();
      this.location.lat = position.coords.latitude;
      this.location.lng = position.coords.longitude;
      this.location.set = true;
    }
    catch (error) {
      throw 'An error occurred while trying to get your current coordinates.';
    }
  }

  async setCurrentAddress() {
    try {
      const address = await this.nativeGeocoder.reverseGeocode(this.location.lat, this.location.lng);
      this.location.address = `${address.street}, ${address.city}, ${address.countryName}`;
    }
    catch (error) {
      // Desktop developing purpose since this only works for iOS and Android.
      if (this.platform.is('ios') || this.platform.is('android')) {
        throw 'An error occurred while trying to get your current address.';
      }
    }
  }

  showToast(message: string, css: string) {
    this.statusBar.hide();
    this.toast = this.toastCtrl.create({
      message: message,
      position: 'top',
      cssClass: css,
      duration: 10000
    });
    this.toast.onDidDismiss(() => {
      this.statusBar.show();
    });
    this.toast.present();
  }

  onShowPlacesModal() {
    let modal = this.modalCtrl.create(ModalAutocompleteItems);
    modal.onDidDismiss(data => {
      if (data) {
        this.location.address = data.description;
        this.getPlaceDetail(data.place_id);
      }
    });
    modal.present();
  }

  getPlaceDetail(placeID: string): void {
    const self = this;
    const request = { placeId: placeID };
    this.placesService = new google.maps.places.PlacesService(this.map);
    this.placesService.getDetails(request, callback);

    function callback(place, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        self.location.address = place.formatted_address;
        const location = place.geometry.location;
        self.location.lat = location.lat();
        self.location.lng = location.lng();
        self.map.setCenter(location);
        self.createMapMarker(location);
      }
    }
  }

  initMap() {
    const point = { lat: this.location.lat, lng: this.location.lng };
    const divMap = (<HTMLInputElement>document.getElementById('map'));
    this.map = new google.maps.Map(divMap, {
      center: point,
      zoom: 12,
      styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#6195a0"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"lightness":"0"},{"saturation":"0"},{"color":"#f5f5f2"},{"gamma":"1"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"lightness":"-3"},{"gamma":"1.00"}]},{"featureType":"landscape.natural.terrain","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#bae5ce"},{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#fac9a9"},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"color":"#4e4e4e"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#787878"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"transit.station.airport","elementType":"labels.icon","stylers":[{"hue":"#0a00ff"},{"saturation":"-77"},{"gamma":"0.57"},{"lightness":"0"}]},{"featureType":"transit.station.rail","elementType":"labels.text.fill","stylers":[{"color":"#43321e"}]},{"featureType":"transit.station.rail","elementType":"labels.icon","stylers":[{"hue":"#ff6c00"},{"lightness":"4"},{"gamma":"0.75"},{"saturation":"-68"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#eaf6f8"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#c7eced"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"lightness":"-49"},{"saturation":"-53"},{"gamma":"0.79"}]}],
      disableDefaultUI: true,
      draggable: true,
      zoomControl: false
    });
  }

  onDateChange() {
    this.setNiceLookingDate();
    this.setOptionsAvailable();
  }

  setNiceLookingDate() {
    const date = new Date(this.chosenDate);
    let day = date.getDate().toString();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[date.getMonth()];
    this.niceLookingDate = `${day} ${month}`;
  }

  setOptionsAvailable() {
    const fromYear: number = parseInt(this.chosenDate.substring(0, 4)); // Get YYYY
    const toYear: number = new Date().getFullYear();
    this.pastYears = toYear - fromYear;

    // Disable advanced options. Weather data will be to insufficient for calculations.
    if (toYear - fromYear >= 11) this.optionsAvailable = false;
    else this.optionsAvailable = true;
  }

  async onFetchWeatherData() {
    try {
      // Show loading animation for user.
      this.showLoading('Loading...');

      const latitude: string = this.location.lat.toString();
      const longitude: string = this.location.lng.toString();
      const fromYear: number = new Date(this.chosenDate).getFullYear();
      const toYear: number = new Date().getFullYear();
      const yearsBack = toYear - fromYear;
      let precipDays: number = 0;

      for (let i = fromYear; i < toYear; i += 1) {
        const data = await this.lookupService.load(i, this.chosenDate, this.mm, latitude, longitude);
        if (this.wasRain(data)) precipDays += 1;
      }

      this.showResultPage(precipDays, yearsBack);
    }
    catch (error) {
      this.loader.dismiss();
      this.showToast('An error occurred while trying to fetch the weather data. Please make sure you have a network connection and try again.', 'error-toast');
    }
  }

  wasRain(data) {
    let rain: boolean = false;

    if (data.hasOwnProperty('precipType') && data['precipType'] == 'rain') {
      if (this.optionsAvailable && this.mm > 0) {
        if (data.hasOwnProperty('precipIntensity')) {
          if (data['precipIntensity'] * 24 >= this.mm) {
            rain = true;
          }
        }
      } else {
        rain = true;
      }
    }
    return rain;
  }

  showResultPage(precipDays: number, yearsBack: number) {
    const key: string = `${this.chosenDate.substring(0, 10)}-${this.mm}mm-${this.location.lat}-${this.location.lng}`;
    const parameters: any = {
      keyName: key,
      precipDays: precipDays,
      yearsBack: yearsBack,
      location: this.location,
      niceLookingDate: this.niceLookingDate
    };
    this.navCtrl.push(ResultPage, parameters);
  }

  showLoading(text: string) {
    this.loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: text,
      dismissOnPageChange: true,
      cssClass: 'loading-animation'
    });
    this.loader.present();
  }

  setupDatePicker() {
    const date = new Date();
    const year = date.getFullYear();
    const defaultYear = (year - this.pastYears).toString();
    const tzoffset = date.getTimezoneOffset() * 60000; // offset in milliseconds
    const localISOTime = (new Date(Date.now() - tzoffset)).toISOString();
    this.chosenDate = localISOTime.replace(/^\d{4}/, defaultYear);
    this.minYear = year - this.yearLimit;
    this.maxYear = year - 1;
  }

  setMapPin() {
    this.pin = {
      url: 'assets/img/pin.png',
      scaledSize : new google.maps.Size(32, 32)
    };
  }

  createMapMarker(place: any) {
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

}
