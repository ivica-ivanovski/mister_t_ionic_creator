import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PropertySchedulePage } from '../property-schedule/property-schedule';
import { UserSignUpPage } from '../user-sign-up/user-sign-up';
import { ApoinmentsPage } from '../apoinments/apoinments';
import { NavigatePage } from '../navigate/navigate';
import { OldTennantNamePage } from '../old-tennant-name/old-tennant-name';

@Component({
  selector: 'page-property',
  templateUrl: 'property.html'
})
export class PropertyPage {

  constructor(public navCtrl: NavController) {
  }
  goToPropertySchedule(params){
    if (!params) params = {};
    this.navCtrl.push(PropertySchedulePage);
  }goToUserSignUp(params){
    if (!params) params = {};
    this.navCtrl.push(UserSignUpPage);
  }goToApoinments(params){
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
