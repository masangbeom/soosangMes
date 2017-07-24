import { DataProvider } from './../../providers/data';
import { Component} from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

@Component({
  selector: 'page-factory-monitoring',
  templateUrl: 'factory-monitoring.html',
})
export class FactoryMonitoringPage {

  private factories: any;
  private selectOn: string = "";
  private factory: any;
  private line: any;
  private selectLine: string = "";
  private selectProcess: number = 0;
  private process: any;
  private check: number = 0;
  private select_view: any = "timely";

  constructor(public dataProvider: DataProvider, public navCtrl: NavController, public navParams: NavParams, public app: App) {}

  ionViewDidLoad() {
    this.factories = this.dataProvider.sampleFactories();
   // this.dataProvider.createLinesData();
    //this.dataProvider.createFactoriesData();
    console.log('ionViewDidLoad FactoryMonitoringPage');
  }

  onChange(selectOn) {
    this.check = 0;
    this.selectLine = ''; 
    let temp: string = selectOn.trim();
    console.log(temp);
    for (let i = 0; i < this.factories.length; i++) {
      if (temp == this.factories[i].title) {
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

  onLineChange(selectLine) {
    this.selectLine = selectLine;
    this.check = 1;
    console.log(this.selectLine);
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

  isEven(n) {
    return n % 2 == 0;
  }
  isLineEnd(n){
    return this.line.processes.length == n;
  }

  processClick(process){
    if(process==null){
      this.process = "END LINE";
    }else{
    this.process = process;
    }
    console.log(this.process);
  }

  processSelectStop(){
    this.process = null;
  }
    
}

