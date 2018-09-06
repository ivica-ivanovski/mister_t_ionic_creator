import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeTabPage } from '../home-tab/home-tab';
import { ChatTabPage } from '../chat-tab/chat-tab';
import { CalendarTabPage } from '../calendar-tab/calendar-tab';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = HomeTabPage;
  tab2Root: any = ChatTabPage;
  tab3Root: any = CalendarTabPage;
  constructor(public navCtrl: NavController) {
  }
  
}
