import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomeTabPage } from '../pages/home-tab/home-tab';
import { ChatTabPage } from '../pages/chat-tab/chat-tab';
import { CalendarTabPage } from '../pages/calendar-tab/calendar-tab';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { PropertyPage } from '../pages/property/property';
import { PropertySchedulePage } from '../pages/property-schedule/property-schedule';
import { UserSignUpPage } from '../pages/user-sign-up/user-sign-up';
import { ApoinmentsPage } from '../pages/apoinments/apoinments';
import { NavigatePage } from '../pages/navigate/navigate';
import { OldTennantNamePage } from '../pages/old-tennant-name/old-tennant-name';


import { NgCalendarModule  } from 'ionic2-calendar';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomeTabPage,
    ChatTabPage,
    CalendarTabPage,
    TabsControllerPage,
    PropertyPage,
    PropertySchedulePage,
    UserSignUpPage,
    ApoinmentsPage,
    NavigatePage,
    OldTennantNamePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      NgCalendarModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomeTabPage,
    ChatTabPage,
    CalendarTabPage,
    TabsControllerPage,
    PropertyPage,
    PropertySchedulePage,
    UserSignUpPage,
    ApoinmentsPage,
    NavigatePage,
    OldTennantNamePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}