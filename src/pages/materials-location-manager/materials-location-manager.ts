import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-materials-location-manager',
  templateUrl: 'materials-location-manager.html',
})
export class MaterialsLocationManagerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaterialsLocationManagerPage');
  }

}
