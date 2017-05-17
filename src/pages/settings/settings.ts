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

  async checkCache() {
    const size = await this.cacheStore.length();
    if (size > 0) this.storeIsClear = false;
    else this.storeIsClear = true;
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
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

  async clearCache() {
    try {
      await this.cacheStore.clear();
      this.showToast('Cache was successfully cleared', 'success-toast');
      this.checkCache();
    }
    catch (error) {
      this.showToast('An error occurred while trying to clear the cache.', 'error-toast');
    }
  }

  showToast(message: string, css: string) {
    this.statusBar.hide();
    const toast = this.toastCtrl.create({
      message: message,
      duration: 5000,
      position: 'top',
      cssClass: css
    });
    toast.onDidDismiss(() => {
      this.statusBar.show();
    });
    toast.present();
  }

}
