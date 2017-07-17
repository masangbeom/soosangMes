import { ManagerModePage } from './../pages/manager-mode/manager-mode';
import { FactoryEnvironmentManagerPage } from './../pages/factory-environment-manager/factory-environment-manager';
import { MaterialsLocationManagerPage } from './../pages/materials-location-manager/materials-location-manager';
import { WorkerManagerPage } from './../pages/worker-manager/worker-manager';
import { StockManagerPage } from './../pages/stock-manager/stock-manager';
import { PoorManagerPage } from './../pages/poor-manager/poor-manager';
import { ScheduleManagerPage } from './../pages/schedule-manager/schedule-manager';
import { FactoryMonitoringPage } from './../pages/factory-monitoring/factory-monitoring';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, iconName: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: '라인&공정관리', component: FactoryMonitoringPage, iconName: 'md-desktop'},
      { title: '일정관리', component: ScheduleManagerPage, iconName: 'md-calendar'},
      { title: '불량관리', component: PoorManagerPage, iconName: 'ios-warning'},
      { title: '재고관리', component: StockManagerPage, iconName: 'logo-dropbox'},
      { title: '인적자원관리', component: WorkerManagerPage, iconName: 'ios-people'},
      { title: '자재위치관리', component: MaterialsLocationManagerPage, iconName: 'md-locate'},
      { title: '공장환경관리', component: FactoryEnvironmentManagerPage, iconName: 'md-globe'},
      { title: '관리자모드', component: ManagerModePage, iconName: 'md-settings'}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
