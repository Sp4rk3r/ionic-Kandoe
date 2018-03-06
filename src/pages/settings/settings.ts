import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  username: string;
  email: string;
  account= {};
  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthServiceProvider) {
    let info = this.auth.getUserInfo();
    this.username = info["name"];
    this.email = info["email"];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  logForm() {
    console.log(this.account);
  }

}
