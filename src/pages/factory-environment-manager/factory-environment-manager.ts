import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-factory-environment-manager',
  templateUrl: 'factory-environment-manager.html',
})
export class FactoryEnvironmentManagerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FactoryEnvironmentManagerPage');
  }

}
