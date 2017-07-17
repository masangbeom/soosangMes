import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-manager-mode',
  templateUrl: 'manager-mode.html',
})
export class ManagerModePage {
  private isCorrect: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.isCorrect = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagerModePage');
  }

  login(){
    this.isCorrect = true;
  }

}
