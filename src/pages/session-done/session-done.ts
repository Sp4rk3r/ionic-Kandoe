import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';
import {HomePage} from "../home/home";
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {ChatPage} from "../chat/chat";

/**
 * Generated class for the SessionDonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-session-done',
  templateUrl: 'session-done.html',
})
export class SessionDonePage {
  username: string;
  email: string;

  constructor(private auth: AuthServiceProvider, public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    let info = this.auth.getUserInfo();
    //this.username = info['name'];
    this.username = (info['name']);
    this.email = info['email'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SessionDonePage');
  }

  GoToSessionActive() {
    this.navCtrl.setRoot(HomePage)
  }

  openMondal() {
    let popover = this.popoverCtrl.create(ChatPage, {}, {cssClass: 'chat-popover'});
    popover.present();
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot('LoginPage')
    });
  }

}
