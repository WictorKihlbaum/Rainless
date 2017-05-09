import { Component } from '@angular/core';
import { ContactPage } from "../contact/contact";
import { SavedResultsPage } from "../saved-results/saved-results";
import { AboutPage } from "../about/about";
import { LookupPage } from "../lookup/lookup";
import { SettingsPage } from "../settings/settings";
import { Network } from '@ionic-native/network';
import { ToastController } from "ionic-angular";
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

  private connectSubscription: any;
  private disconnectSubscription: any;

  private errorToast: any;
  private successToast: any;


  constructor(private network: Network, public toastCtrl: ToastController, private statusBar: StatusBar) {
    this.setupNetworkWatchers();
  }

  setupNetworkWatchers() {
    // Network connection is established.
    this.connectSubscription = this.network.onConnect().subscribe(() => {
      if (this.errorToast) this.errorToast.dismiss();
      this.showSuccessToast();
    });

    // Network connection is down.
    this.disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      if (this.successToast) this.successToast.dismiss();
      this.showErrorToast();
    });
  }

  showErrorToast() {
    this.statusBar.hide();
    this.errorToast = this.toastCtrl.create({
      message: 'Network error! You are offline',
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
