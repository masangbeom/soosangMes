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
  private lineRunning: boolean = true;
  private tables: any = [];
  private count: number = 0;

  // lineChart
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  //Bar Chart
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
        let count = 0;
        this.line.processes.forEach(element => {
          if(element.p_error){
            count += 1;
          }
        });
        console.log(count);
        if(count == 0){
          this.lineRunning = true;
        }else{
          this.lineRunning = false;
        }
        console.log(this.line)
      }
    }
    this.processSelectStop();
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

  public chartClicked(e:any):void {
    console.log(e);
    this.randomize();
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
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

   plustable(){
       this.tables.push({
        product: "product"+this.count,
        date: Date.now(),
        status: "good"+this.count
    })
    this.count +=1;
  }
    
}

