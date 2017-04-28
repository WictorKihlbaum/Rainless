import { Component } from '@angular/core';
import { ToastController, LoadingController, Platform } from 'ionic-angular';
import { Http, Request, RequestMethod, Headers } from "@angular/http";
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { StatusBar } from "@ionic-native/status-bar";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  private feedback : FormGroup;
  private subject: string = 'feedback';
  private recipient: string = 'wictor.kihlbaum@gmail.com';
  private http: Http;
  private mailgunUrl: string = 'mg.rainless.com';
  private mailgunApiKey: string;
  private loader: any;


  constructor(
    http: Http,
    private formBuilder: FormBuilder,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private platform: Platform,
    private statusBar: StatusBar) {

    this.http = http;
    this.mailgunApiKey = window.btoa("api:key-ba6608ffb8bd55bcfeb1c5aded1dca87");

    this.feedback = this.formBuilder.group({
      subject: [this.subject, Validators.required],
      message: ['', Validators.required]
    });
  }

  sendFeedback() {
    this.presentLoading();

    let requestHeaders = new Headers();
    requestHeaders.append("Authorization", `Basic ${this.mailgunApiKey}`);
    requestHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const subject = this.feedback.value.subject;
    const message = `${this.feedback.value.message} \r\n\r\n Platforms: ${this.platform.platforms()}`;

    this.http.request(new Request({
      method: RequestMethod.Post,
      url: `https://api.mailgun.net/v3/${this.mailgunUrl}/messages`,
      body: `from=test@example.com&to=${this.recipient}&subject=${subject}&text=${message}`,
      headers: requestHeaders
    }))
      .subscribe(success => {
        this.onFeedbackSuccess();
      }, error => {
        console.log("ERROR -> " + JSON.stringify(error));
        const message: string = 'An error occurred while trying to send your message.';
        this.presentToast(message);
      });
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Sending message..."
    });
    this.loader.present();
  }

  onFeedbackSuccess() {
    this.loader.dismiss();
    const message: string = 'Thank you! Your message was successfully sent.';
    this.presentToast(message);
    this.feedback.reset();
  }

  presentToast(message: string) {
    this.statusBar.hide();
    const toast = this.toastCtrl.create({
      message: message,
      duration: 10000,
      position: 'top'
    });
    toast.onDidDismiss(() => {
      this.statusBar.show();
    });
    toast.present();
  }

}