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

  load(year, monthAndDay, latitude, longitude) {
    const date: string = year.toString() + monthAndDay + 'T00:00:00';
    const lat: string = latitude.toString();
    const lng: string = longitude.toString();
    const cacheName: string = `${date}-${lat}-${lng}`;

    // Complete URL
    const url: string = `${this.cors}${this.apiURL}/${this.apiKey}/${lat},${lng},${date}?${this.excludes}&${this.units}`;

    return new Promise(resolve => {
      // First check if the data is already cached.
      this.cacheStore.getItem(cacheName).then(cache => {
        if (cache) {
          resolve(cache);
        } else {
          // If no cache was found call the API.
          this.http.get(url)
            .map(res => res.json())
            .subscribe(data => {
              data = data.daily.data[0];
              this.cacheStore.setItem(cacheName, data).then(() => {
                resolve(data);
              });
            });
        }
      });
    });
  }

}
