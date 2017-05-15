import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Platform } from 'ionic-angular';
import * as localforage from "localforage";

@Injectable()
export class LookupService {

  private cors: string = 'https://cors-anywhere.herokuapp.com/';
  private apiURL: string = 'https://api.darksky.net/forecast';
  private apiKey: string = '2735c64ddcc4acfb0c869faf3adfad18';
  private excludes: string = 'exclude=flags,currently,hourly';
  private units: string = 'units=si';
  private cacheStore: any;


  constructor(private http: Http, private platform: Platform) {
    if (platform.is('ios') || platform.is('android')) {
      this.cors = ''; // Cors is not needed on mobile devices.
    }
    this.setCacheStore();
  }

  setCacheStore() {
    this.cacheStore = localforage.createInstance({ name: "rainless", storeName: "cache" });
  }

  load(i, chosenDate, mm, latitude, longitude) {
    const year: string = i.toString();
    let month: string = (new Date(chosenDate).getMonth() + 1).toString();
    let day: string = new Date(chosenDate).getDate().toString();
    if (day.length == 1) day = '0' + day;
    if (month.length == 1) month = '0' + month;
    const date: string = `${year}-${month}-${day}T00:00:00`;
    const key: string = `${chosenDate}-${mm}-${latitude}-${longitude}`;
    const url: string = `${this.cors}${this.apiURL}/${this.apiKey}/${latitude},${longitude},${date}?${this.excludes}&${this.units}`;

    return new Promise((resolve, reject) => {
      // First check if the data is already cached.
      this.cacheStore.getItem(key).then(cache => {
        if (cache) {
          resolve(cache);
        } else {
          // If no cache was found call the API.
          this.http.get(url)
            .map(res => res.json())
              .subscribe(data => {
                data = data.daily.data[0];
                // Cache data for future use.
                this.cacheStore.setItem(key, data).then(() => {
                  resolve(data);
                });
              }, error => {
                reject();
              });
        }
      });
    });
  }

}
