import { DataProvider } from './../../providers/data';
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-poor-manager',
  templateUrl: 'poor-manager.html',
})
export class PoorManagerPage {
  private select_view: any = "background";
  private factories: any;
  private factory: any;
  private startDate: Date;
  private endDate: Date;
  private product: any;
  private line: any;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public navParams: NavParams, public dataProvider: DataProvider) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PoorManagerPage');
    this.factories = this.dataProvider.sampleFactories();
  }

  onEndDateChange() {
    if (this.startDate > this.endDate) {
      this.endDate = null;
      this.toastCtrl.create({
        message: '종료 일자를 확인해주세요',
        duration: 2000,
        position: 'middle'
      }).present();
    }
    console.log(this.endDate);
  }

  onStartDateChange() {
    if (this.startDate > this.endDate) {
      this.endDate = null;
      this.toastCtrl.create({
        message: '종료 일자를 확인해주세요',
        duration: 2000,
        position: 'middle'
      }).present();
    }
    console.log(this.endDate);
  }

  onChange(selectOn) {
    let temp: string = selectOn.trim();
    for (let i = 0; i < this.factories.length; i++) {
      if (temp == this.factories[i].title) {
        let factory = {
          title: temp,
          description: this.factories[i].description,
          lines: this.factories[i].lines,
          products: this.factories[i].products
        }
        this.factory = factory;
      }
    }
    //console.log(this.factory);
  }

  onLineChange(selectLine) {
    let temp: string = selectLine.trim();
    for (let i = 0; i < this.factory.lines.length; i++) {
      if (temp == this.factory.lines[i].name) {
        let line = {
          name: temp,
          lineId: this.factory.lines[i].lineId,
          processes: this.factory.lines[i].processes
        }
        this.line = line;
        console.log(this.line)
      }
    }
  }

  onProductChange(selectProduct) {
    let temp: string = selectProduct.trim();
    for (let i = 0; i < this.factory.products.length; i++) {
      if (temp == this.factory.products[i].name) {
        let product = {
          name: temp,
          stock_amount: this.factory.products[i].stock_amount,
          limit: this.factory.products[i].limit,
          p_factory: this.factory.products[i].p_factory,
          p_line: this.factory.products[i].p_line
        }
        this.product = product;
        console.log(this.product)
      }
    }
  }

}

