import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-factory-monitoring',
  templateUrl: 'factory-monitoring.html',
})
export class FactoryMonitoringPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FactoryMonitoringPage');
  }

}
