import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavigatePage } from '../navigate/navigate';
import { OldTennantNamePage } from '../old-tennant-name/old-tennant-name';

@Component({
  selector: 'page-apoinments',
  templateUrl: 'apoinments.html'
})
export class ApoinmentsPage {

  constructor(public navCtrl: NavController) {
  }
  goToNavigate(params){
    if (!params) params = {};
    this.navCtrl.push(NavigatePage);
  }goToOldTennantName(params){
    if (!params) params = {};
    this.navCtrl.push(OldTennantNamePage);
  }
}
