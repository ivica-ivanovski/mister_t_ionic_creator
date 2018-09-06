import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApoinmentsPage } from '../apoinments/apoinments';
import { NavigatePage } from '../navigate/navigate';
import { OldTennantNamePage } from '../old-tennant-name/old-tennant-name';

@Component({
  selector: 'page-user-sign-up',
  templateUrl: 'user-sign-up.html'
})
export class UserSignUpPage {

  constructor(public navCtrl: NavController) {
  }
  goToApoinments(params){
    if (!params) params = {};
    this.navCtrl.push(ApoinmentsPage);
  }goToNavigate(params){
    if (!params) params = {};
    this.navCtrl.push(NavigatePage);
  }goToOldTennantName(params){
    if (!params) params = {};
    this.navCtrl.push(OldTennantNamePage);
  }
}
