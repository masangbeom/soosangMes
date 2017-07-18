import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-stock-manager',
  templateUrl: 'stock-manager.html',
})
export class StockManagerPage {
  private factories: any;
  private selectOn: string = "";
  private selectLine: number = 0;
  private factory: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StockManagerPage');
    this.factories=[];
    let lines =[];
    let line1 = {
      name: "Line 1",
      lineId: 1
    }
    let line2 = {
      name: "Line 2",
      lineId: 2
    }  
    let line3 = {
      name: "Line 3",
      lineId: 3
    }  
    let line4 = {
      name: "Line 4",
      lineId: 4
    }
    lines.push(line1);
    lines.push(line2);
    lines.push(line3);    
    lines.push(line4);   

    let lines2 =[];
    lines2.push(line2);
    lines2.push(line4);
    


    let factory1 = {
      title: "Factory 1",
      description: "공장 설명",
      lines: lines
    }
    let factory2 = {
      title: "Factory 2",
      description: "공장 설명",
      lines: lines
    }
    let factory3 = {
      title: "Factory 3",
      description: "공장 설명",
      lines: lines
    }
    let factory4 = {
      title: "Factory 4",
      description: "공장 설명",
      lines: lines2
    }
    this.factories.push(factory1);
    this.factories.push(factory2);
    this.factories.push(factory3);
    this.factories.push(factory4);
  }

  onChange(selectOn){
    this.selectLine = 0;
    let temp: string = selectOn.trim();
      console.log(temp);
    for(let i=0; i<this.factories.length; i++){
      if(temp == this.factories[i].title){
       let factory = {
          title: temp,
          description: this.factories[i].description,
          lines: this.factories[i].lines
        }
      this.factory = factory
      console.log(this.factory)
      }
    }
  }

}
