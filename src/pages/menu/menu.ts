import {Component, ViewChild} from '@angular/core';
import {IonicPage, Nav, NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";
import {SettingsPage} from "../settings/settings";

export interface PageInterface {
  title:string;
  pageName:string;
  tapComponent?:any;
  index?:number;
  icon:string;
}

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  rootPage = 'HomePage';

  //tabs:string;
  //Reference tot the app's root nav
  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    {title: 'Home', pageName: 'HomePage', tapComponent: 'Homepage', index: 0, icon: 'home'},
    {title: 'Settings', pageName: 'SettingsPage', tapComponent: 'Settingspage', index: 1, icon: 'cog'},
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.tabs = navCtrl.parent;
  }

  openPage(page: PageInterface) {
    let params = {};

    if (page.index) {
      params = { tabIndex: page.index};
    }

    //The qctive child nav is our Tabs Navigation
    if (this.nav.getActiveChildNavs() && page.index != undefined) {
      //this.nav.getActiveChildNav().select(page.index)
      //this.nav.push(page.index);
      //this.nav.parent.select(page.index);
      //this.navCtrl.parent.select(1);
      this.nav.getActiveChildNavs().push(page.pageName)
      //setTimeout(function() {
       /* this.nav.tabs.select(page.index);
      },1000);//*/
     // this.nav.getActiveChildNavs().
    }
  }

  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNav();

    if (childNav) {
      if (this.nav.getActive().component.tabRef.getSelected().root && childNav.getSelected().root === page.tapComponent) {
        return 'primary';
      }
      return;
    }

    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }

  goToHome() {
    this.nav.push("HomePage")
  }

  goToSettings() {
    this.nav.push("SettingsPage")
  }


  /*ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }*/

}
