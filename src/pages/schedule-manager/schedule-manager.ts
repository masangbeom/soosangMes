import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-schedule-manager',
  templateUrl: 'schedule-manager.html',
})
export class ScheduleManagerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScheduleManagerPage');
  }

}
