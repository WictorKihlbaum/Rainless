import { Component } from '@angular/core';
import { StatusBar } from "@ionic-native/status-bar";
import { AlertController, ToastController } from 'ionic-angular';
import * as localforage from "localforage";

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  private storeIsClear: boolean;
  private cacheStore: any;


  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private statusBar: StatusBar) {

    this.setCacheStore();
    this.checkCache();
  }

  setCacheStore() {
    this.cacheStore = localforage.createInstance({ name: "rainless", storeName: "cache" });
  }

  checkCache() {
    this.cacheStore.length().then(size => {
      if (size > 0) {
        this.storeIsClear = false
      } else {
        this.storeIsClear = true;
      }
    });
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Clear cache',
      message: 'Are you sure you want to clear the cache?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            // Do nothing.
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.clearCache();
          }
        }
      ]
    });
    confirm.present();
  }

  clearCache() {
    this.cacheStore.clear().then(() => {
      this.presentToast();
      this.checkCache();
    });
  }

  presentToast() {
    this.statusBar.hide();
    const toast = this.toastCtrl.create({
      message: 'Cache was successfully cleared',
      duration: 5000,
      position: 'top'
    });
    toast.onDidDismiss(() => {
      this.statusBar.show();
    });
    toast.present();
  }

}
