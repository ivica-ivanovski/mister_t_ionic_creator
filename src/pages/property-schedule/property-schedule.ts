import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserSignUpPage } from '../user-sign-up/user-sign-up';
import { ApoinmentsPage } from '../apoinments/apoinments';
import { NavigatePage } from '../navigate/navigate';
import { OldTennantNamePage } from '../old-tennant-name/old-tennant-name';



@Component({
  selector: 'page-property-schedule',
  templateUrl: 'property-schedule.html'
})
export class PropertySchedulePage implements OnInit{

  constructor(
      public navCtrl: NavController
  ) {
  }
  goToUserSignUp(params){
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

    ngOnInit() {

  }
}
