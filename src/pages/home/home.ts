import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private isCorrect: boolean;
  loginId: any;
  loginPasswoard: any;

  constructor(public navCtrl: NavController) {
    this.isCorrect = false;
  }
  login(){
    this.isCorrect = true;
  }
}
