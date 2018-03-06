import { Component, OnInit } from '@angular/core';
import {NavController, IonicPage, ModalController, PopoverController} from 'ionic-angular';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import {ChatPage} from "../chat/chat";
import {SessionDonePageModule} from "../session-done/session-done.module";
import {SessionDonePage} from "../session-done/session-done";
import {LoginPage} from "../login/login";
import {UserserviceProvider} from "../../providers/userservice/userservice";
import {UseridStorage} from "../../sessionStorage/userid-storage";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [UseridStorage]
})
export class HomePage {
  username: string;
  email: string;
  public user = [];
 // afgelopen: string;
  private afgelopen: SessionDonePageModule;


  constructor(private auth: AuthServiceProvider, public nav: NavController, public popoverCtrl: PopoverController,
              private userservice: UserserviceProvider,
              private useridStorage: UseridStorage) {
    //let info = this.auth.getUserInfo();
    this.userservice.getUser(this.useridStorage.getUserId()).subscribe(
      data => {
        this.user = data;
        console.log(data);
        console.log(this.user);
      }
    );
    //let user = this.auth.getUser();
    console.log('Hallo');
    //console.log(user);
    //this.username = info['name'];
    this.username = 'Koen';
    this.email = 'koenrombout@hotmail.com';

    this.afgelopen = SessionDonePageModule;

  }

  ngOnInit() {
    this.userservice.getUser(this.useridStorage.getUserId()).subscribe(
      data => {
        this.user = data;
        console.log(data);
        console.log(this.user);
      },
      error => {
        console.log("Error loading User");
      }
    );
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot(LoginPage)
    });
  }

  GoToSessionDone() {
    //this.nav.push(SessionDonePage);
    this.nav.setRoot(SessionDonePage);
    //this.nav.parent.select(SessionDonePage)
  }

  openMondal() {
    let popover = this.popoverCtrl.create(ChatPage, {}, {cssClass: 'chat-popover'});
    popover.present();
  }


}


