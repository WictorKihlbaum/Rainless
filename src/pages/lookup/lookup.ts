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
import { MapHandler } from "./map-handler";

declare const google: any;

@Component({
  selector: 'page-lookup',
  templateUrl: 'lookup.html',
  providers: [LookupService, Geolocation, NativeGeocoder, MapHandler]
})
export class LookupPage implements OnInit {

  private helpPage = HelpPage;

  private chosenDate: any;
  private minYear: number;
  private maxYear: number;
  private yearLimit: number = 20; // Max amount of past years
  private mm: number = 0; // Precipitation option
  private optionsAvailable: boolean = true;
  private pastYears: number = 10; // Default amount of past years
  private niceLookingDate: string = 'No date'; // Will be shown in view for user
  private loader: any;
  private toast: any;

  private mapIsSet: boolean = false;
  private location: any = { address: 'No address', lat: null, lng: null, set: false };
  private placesService: any;


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
    private platform: Platform,
    private mapHandler: MapHandler) {
  }

  async ngOnInit() {
    try {
      this.showLoading('Loading');
      this.setupDatePicker();
      await this.setCurrentCoordinates();
      this.setMap();
      this.mapHandler.createMapMarker({ lat: this.location.lat, lng: this.location.lng });
      //this.setCurrentAddress();
      this.setNiceLookingDate();
    }
    catch (message) {
      this.showToast(message, 'error-toast');
    }
  }

  onShowAdvancedOptions(myEvent) {
    const popover = this.popoverCtrl.create(AdvancedOptionsPage, {mm: this.mm});
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
      const locationData = await this.nativeGeocoder.reverseGeocode(this.location.lat, this.location.lng);

      this.location.address = `
        ${locationData['thoroughfare']}, 
        ${locationData['locality']}, 
        ${locationData['countryName']}
      `;
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

  /*
   * Present Google places view.
   */
  onShowPlacesModal() {
    const modal = this.modalCtrl.create(ModalAutocompleteItems);
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
    const map = this.mapHandler.getMap();
    this.placesService = new google.maps.places.PlacesService(map);
    this.placesService.getDetails(request, callback);

    function callback(place, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        // Update map marker and location data on location changes
        self.location.address = place.formatted_address;
        const location = place.geometry.location;
        self.location.lat = location.lat();
        self.location.lng = location.lng();
        self.mapHandler.setMapCenter(location);
        self.mapHandler.createMapMarker(location);
      }
    }
  }

  setMap() {
    const coordinates = { lat: this.location.lat, lng: this.location.lng };
    const divMap = (<HTMLInputElement>document.getElementById('map'));
    this.mapHandler.initMap(divMap, coordinates);
    this.mapHandler.setLoaderDismiss(this.loader);
    this.mapIsSet = true;
  }

  /*
   * Update view depending on chosen date and amount of past years.
   */
  onDateChange() {
    this.setNiceLookingDate();
    this.setOptionsAvailable();
  }

  /*
   * Set the date which will be shown for the user in the view.
   */
  setNiceLookingDate() {
    let day: string = this.chosenDate.substring(8, 10);
    if (day.charAt(0) == '0') day = day.charAt(1); // Remove 0 if any

    const months: any = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month: string = months[this.chosenDate.substring(5, 7) - 1];

    this.niceLookingDate = `${day} ${month}`;
  }

  setOptionsAvailable() {
    const fromYear: number = parseInt(this.chosenDate.substring(0, 4)); // Get YYYY
    const toYear: number = new Date().getFullYear();
    this.pastYears = toYear - fromYear;

    // Disable advanced options. Weather data is to insufficient.
    if (toYear - fromYear >= 11) this.optionsAvailable = false;
    else this.optionsAvailable = true;
  }

  async onFetchWeatherData() {
    try {
      // Show loading animation
      this.showLoading('Loading');

      // Assemble all necessary parameters for the weather data fetch
      const latitude: string = this.location.lat;
      const longitude: string = this.location.lng;
      const fromYear: number = new Date(this.chosenDate).getFullYear();
      const toYear: number = new Date().getFullYear();
      const years = toYear - fromYear;
      let precipDays: number = 0;

      // Fetch data and look for rain
      for (let i = fromYear; i < toYear; i += 1) {
        const data = await this.lookupService.load(i, this.chosenDate, latitude, longitude);
        if (this.wasRain(data)) precipDays += 1;
      }

      this.showResultPage(precipDays, years);
    }
    catch (error) {
      this.loader.dismiss();
      this.showToast('Weather data could not be fetched', 'error-toast');
    }
  }

  /*
   * Calculate if the day was rainy.
   */
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
    // Set database key
    const key: string = `${this.chosenDate.substring(0, 10)}-${this.mm}mm-${this.location.lat}-${this.location.lng}`;

    // Assemble all necessary data for result page
    const parameters: any = {
      keyName: key,
      precipDays: precipDays,
      yearsBack: yearsBack,
      location: this.location,
      niceLookingDate: this.niceLookingDate,
      mm: this.mm
    };

    // Present result page
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

  /*
   * Setup date picker and the range of years to choose.
   */
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

}
