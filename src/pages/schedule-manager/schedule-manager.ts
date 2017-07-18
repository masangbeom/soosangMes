import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-schedule-manager',
  templateUrl: 'schedule-manager.html',
})
export class ScheduleManagerPage {
  private factories: any;
  private selectOn: string = "";
  private factory: any;
  private selectLine: number = 0;
  private loadProgress: number = 80;

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScheduleManagerPage');
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

  lineSelect(lineId){
    this.selectLine = lineId;
    console.log(this.selectLine);
  }

  lineSelectCancel(){
    this.selectLine = 0;
  }

  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

}
