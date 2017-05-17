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
  private mailgunUrl: string = 'mg.rainless.com';
  private mailgunApiKey: string;
  private loader: any;


  constructor(
    private http: Http,
    private formBuilder: FormBuilder,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private platform: Platform,
    private statusBar: StatusBar) {

    this.mailgunApiKey = window.btoa("api:key-ba6608ffb8bd55bcfeb1c5aded1dca87");
    this.feedback = this.formBuilder.group({
      subject: [this.subject, Validators.required],
      message: ['', Validators.required]
    });
  }

  sendFeedback() {
    this.showLoading();
    const requestHeaders = new Headers();
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
      this.onFeedbackError();
    });
  }

  showLoading() {
    this.loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: "Sending message...",
      cssClass: 'loading-animation'
    });
    this.loader.present();
  }

  onFeedbackSuccess() {
    this.loader.dismiss();
    this.showToast('Thank you for taking the time to give some feedback! Your message was successfully sent.', 'success-toast');
    this.feedback.reset();
  }

  onFeedbackError() {
    this.loader.dismiss();
    this.showToast('An error occurred while trying to send your message. Please make sure you have a network connection and try again.', 'error-toast');
  }

  showToast(message: string, css: string) {
    this.statusBar.hide();
    const toast = this.toastCtrl.create({
      message: message,
      duration: 10000,
      position: 'top',
      cssClass: css
    });
    toast.onDidDismiss(() => {
      this.statusBar.show();
    });
    toast.present();
  }

}
