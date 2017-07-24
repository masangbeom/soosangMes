import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DayPilot, DayPilotGanttComponent } from "daypilot-pro-angular";

@Component({
  selector: 'page-schedule-manager',
  templateUrl: 'schedule-manager.html',
})
export class ScheduleManagerPage {

  config: any = {
    startDate: "2017-01-01",
    days: new DayPilot.Date().daysInMonth(),
    cellWidthSpec: "Auto",
    tasks: [
      {start: "2014-01-05", end: "2017-01-07", id: 1, text: "Task 1", complete: 10},
      {start: "2017-01-06", end: "2017-01-14", id: 2, text: "Task 2", complete: 20},
      {start: "2017-01-07", end: "2017-01-23", id: 3, text: "Task 3", complete: 30},
      {start: "2017-01-08", end: "2017-01-22", id: 4, text: "Task 4", complete: 40},
      {start: "2017-01-09", end: "2017-01-21", id: 5, text: "Task 5", complete: 50},
      {start: "2017-01-10", end: "2017-01-20", id: 6, text: "Task 6", complete: 60},
      {start: "2014-01-05", end: "2017-01-07", id: 7, text: "Task 1", complete: 70},
      {start: "2017-01-06", end: "2017-01-14", id: 8, text: "Task 2", complete: 80},
      {start: "2017-01-07", end: "2017-01-23", id: 9, text: "Task 3", complete: 90},
      {start: "2017-01-08", end: "2017-01-22", id: 10, text: "Task 4", complete: 100},
      {start: "2017-01-08", end: "2017-01-22", id: 11, text: "Task 4", complete: 100},
      {start: "2017-01-08", end: "2017-01-22", id: 12, text: "Task 4", complete: 100},
    ]
    
  };

  private factories: any;
  private selectOn: string = "";
  private factory: any;
  private selectLine: string = "";
  private line: any;
  private loadProgress: number = 80;
  private check: number = 0;

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

    for(let i=0; i<this.config.tasks.length; i++){
    if(this.config.tasks[i].complete == 100){
      this.config.tasks[i].complete += "<strong> (완료)</strong>"
    }
    this.config.tasks[i].text += " (" + this.config.tasks[i].start;
    this.config.tasks[i].text += " ~ ";
    this.config.tasks[i].text += this.config.tasks[i].end+ ") ";
    }

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
    this.check = 0;
    this.selectLine = '';
    let temp: string = selectOn.trim();
      //console.log(temp);
    for(let i=0; i<this.factories.length; i++){
      if(temp == this.factories[i].title){
       let factory = {
          title: temp,
          description: this.factories[i].description,
          lines: this.factories[i].lines
        }
      this.factory = factory
      //console.log(this.factory)
      }
    }
  }
  onLineChange(selectLine){
    this.selectLine = selectLine;
    this.check = 1;
    console.log(this.selectLine);
    let temp: string = selectLine.trim();
    for(let i=0; i<this.factory.lines.length; i++){
      if(temp == this.factory.lines[i].name){
       let line = {
          name: temp,
          lineId: this.factory.lines[i].lineId
        }
        this.line = line;
      console.log(this.line)
      }
    }
  }


  lineSelectStop(){
    this.selectLine = '';
  }

  public chartClicked(e:any):void {
    console.log(e);
    this.randomize();
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
