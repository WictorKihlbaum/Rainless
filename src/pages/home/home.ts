import { Component, OnInit } from '@angular/core';
import { ContactPage } from "../contact/contact";
import { SavedResultsPage } from "../saved-results/saved-results";
import { AboutPage } from "../about/about";
import { LookupPage } from "../lookup/lookup";
import { SettingsPage } from "../settings/settings";
import { Network } from '@ionic-native/network';
import { NavController, ToastController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private lookupPage = LookupPage;
  private aboutPage = AboutPage;
  private savedResultsPage = SavedResultsPage;
  private contactPage = ContactPage;
  private settingsPage = SettingsPage;

  private isDisconnected: boolean = false;
  private errorToast: any;
  private successToast: any;


  constructor(
    private network: Network,
    private toastCtrl: ToastController,
    private statusBar: StatusBar,
    private navCtrl: NavController) {
  }

  ngOnInit() {
    this.setupNetworkWatchers();
  }

  ionViewDidEnter() {
    this.checkCurrentNetworkConnection();
  }

  checkCurrentNetworkConnection() {
    if (this.network.type == 'none' || this.network.type == 'unknown') {
      this.isDisconnected = true;
    }
  }

  setupNetworkWatchers() {
    // Network connection is established.
    this.network.onConnect().subscribe(() => {
      if (this.errorToast) this.errorToast.dismiss();
      this.isDisconnected = false;
      this.showSuccessToast();
    });

    // Network connection is down.
    this.network.onDisconnect().subscribe(() => {
      if (this.successToast) this.successToast.dismiss();
      this.isDisconnected = true;
      this.navCtrl.popToRoot();
      this.showErrorToast();
    });
  }

  showErrorToast() {
    this.statusBar.hide();
    this.errorToast = this.toastCtrl.create({
      message: 'Network connection lost. Please reestablish connection to continue using the app.',
      showCloseButton: true,
      closeButtonText: 'Ok',
      position: 'top',
      cssClass: 'error-toast'
    });
    this.errorToast.onDidDismiss(() => {
      this.statusBar.show();
    });
    this.errorToast.present();
  }

  showSuccessToast() {
    this.statusBar.hide();
    this.successToast = this.toastCtrl.create({
      message: 'Network connection is established',
      position: 'top',
      cssClass: 'success-toast',
      duration: 5000
    });
    this.successToast.onDidDismiss(() => {
      this.statusBar.show();
    });
    this.successToast.present();
  }

}
