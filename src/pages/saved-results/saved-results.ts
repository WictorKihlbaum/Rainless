import { Component } from '@angular/core';
import { AlertController, ToastController } from 'ionic-angular';
import { StatusBar } from "@ionic-native/status-bar";
import * as localforage from "localforage";

@Component({
  selector: 'page-saved-results',
  templateUrl: 'saved-results.html',
})
export class SavedResultsPage {

  private savedResults: any = [];
  private resultsStore: any;
  private storeIsClear: boolean;


  constructor(private alertCtrl: AlertController, private toastCtrl: ToastController, private statusBar: StatusBar) {
    this.setResultsStore();
    this.checkStore();
    this.listSavedResults();
  }

  setResultsStore() {
    this.resultsStore = localforage.createInstance({ name: "rainless", storeName: "results" });
  }

  checkStore() {
    this.resultsStore.length().then(size => {
      if (size > 0) {
        this.storeIsClear = false
      } else {
        this.storeIsClear = true;
      }
    });
  }

  listSavedResults() {
    this.resultsStore.iterate(value => {
      this.savedResults.push(value.data);
    });
  }

  showConfirm(id: string) {
    let confirm = this.alertCtrl.create({
      title: 'Delete result',
      message: 'Are you sure you want to delete this result?',
      buttons: [
        {
          text: 'cancel',
          handler: () => {
            // Do nothing.
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.onDeleteResult(id);
          }
        }
      ]
    });
    confirm.present();
  }

  onDeleteResult(id: string) {
    this.resultsStore.removeItem(id).then(() => {
      this.showToast('Result was successfully deleted');
      this.resetAndRefresh();
    });
  }

  showToast(message: string) {
    this.statusBar.hide();
    const toast = this.toastCtrl.create({
      message: message,
      duration: 5000,
      position: 'top'
    });
    toast.onDidDismiss(() => {
      this.statusBar.show();
    });
    toast.present();
  }

  showConfirmAll() {
    let confirm = this.alertCtrl.create({
      title: 'Delete results',
      message: 'Are you sure you want to delete all results?',
      buttons: [
        {
          text: 'cancel',
          handler: () => {
            // Do nothing.
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.onDeleteAll();
          }
        }
      ]
    });
    confirm.present();
  }

  onDeleteAll() {
    this.resultsStore.clear().then(() => {
      this.showToast('All results was successfully deleted');
      this.resetAndRefresh();
    });
  }

  resetAndRefresh() {
    this.checkStore();
    this.savedResults = [];
    this.listSavedResults();
  }

}
