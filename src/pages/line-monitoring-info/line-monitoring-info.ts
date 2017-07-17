import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-line-monitoring-info',
  templateUrl: 'line-monitoring-info.html',
})
export class LineMonitoringInfoPage {
 private factoryTitle: any;
 private lineId: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LineMonitoringInfoPage');
    this.factoryTitle = this.navParams.get('factoryTitle');
    this.lineId = this.navParams.get('lineId');
  }

}
