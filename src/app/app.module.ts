import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FactoryMonitoringPage } from './../pages/factory-monitoring/factory-monitoring';
import { LineMonitoringInfoPage } from './../pages/line-monitoring-info/line-monitoring-info';
import { ScheduleManagerPage } from './../pages/schedule-manager/schedule-manager';
import { PoorManagerPage } from './../pages/poor-manager/poor-manager';
import { StockManagerPage } from './../pages/stock-manager/stock-manager';
import { WorkerManagerPage } from './../pages/worker-manager/worker-manager';
import { FactoryEnvironmentManagerPage } from './../pages/factory-environment-manager/factory-environment-manager';
import { MaterialsLocationManagerPage } from './../pages/materials-location-manager/materials-location-manager';
import { ManagerModePage } from './../pages/manager-mode/manager-mode';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FactoryMonitoringPage,
    LineMonitoringInfoPage,
    ScheduleManagerPage,
    PoorManagerPage,
    StockManagerPage,
    WorkerManagerPage,
    FactoryEnvironmentManagerPage,
    MaterialsLocationManagerPage,
    ManagerModePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FactoryMonitoringPage,
    LineMonitoringInfoPage,
    ScheduleManagerPage,
    PoorManagerPage,
    StockManagerPage,
    WorkerManagerPage,
    FactoryEnvironmentManagerPage,
    MaterialsLocationManagerPage,
    ManagerModePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
