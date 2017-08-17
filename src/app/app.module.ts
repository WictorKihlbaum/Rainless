import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { HttpModule } from "@angular/http";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from "../pages/about/about";

import { LookupPage } from "../pages/lookup/lookup";
import { AdvancedOptionsPage } from "../pages/lookup/advanced-options/advanced-options";
import { HelpPage } from "../pages/lookup/help/help";
import { ModalAutocompleteItems } from "../pages/lookup/modal-autocomplete-items/modal-autocomplete-items";
import { ResultPage } from "../pages/lookup/result/result";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    LookupPage,
    AdvancedOptionsPage,
    HelpPage,
    ModalAutocompleteItems,
    ResultPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    LookupPage,
    AdvancedOptionsPage,
    HelpPage,
    ModalAutocompleteItems,
    ResultPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
