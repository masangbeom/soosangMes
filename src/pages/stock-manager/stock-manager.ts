import { DataProvider } from './../../providers/data';
import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-stock-manager',
  templateUrl: 'stock-manager.html',
})
export class StockManagerPage {

  private select_view: any = "daily";

  private warehouses: any;
  private selectOn: any;
  private selectProduct: number = 0;
  private warehouse: any;
  // private products: any;
  private product: any;
  private leakProducts: any;
  public isDataAvailable:boolean = false;
  public barChartOptions: any;
  public barChartLabels: any;
  public barChartColors: Array <any> = [{
    backgroundColor: [],
    borderColor: [],
  }];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = false;
  public barChartData: any[] = [{
    data: [0,0,0,0,0,0,0],
    label: '재고량',
  },
  {
    data: [0,0,0,0,0,0,0],
    label: '필요량',
    backgroundColor: 'rgba(0, 0, 0, 0.01)',
    borderColor: 'rgba(0, 0, 0, 0.5)',
    type: 'line',
  }
  ];


  // lineChart
  public lineChartData: Array < any > = [{
      data: [28, 48, 40, 19, 86, 27],
      label: 'Series A'
    },
  ];
  public lineChartLabels: Array < any > = ['tes1', 'test2', 'test3', 'test4', 'test5', 'test6'];
  public lineChartOptions: any = {
    responsive: true,
    scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            fontStyle: "bold"
          }
        }],
      }
  };
  public lineChartColors: Array < any > = [{ // grey
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
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  constructor(public dataProvider: DataProvider, public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.warehouses = this.dataProvider.sampleWareHouse();
    
  }

  //창고 선택
  onChange(selectOn) {
    this.selectProduct = 0;
    this.selectOn = selectOn.trim();


    for (let i = 0; i < this.warehouses.length; i++) {
      if (this.selectOn == this.warehouses[i].title) {
        let warehouse = {
          title: this.selectOn,
          description: this.warehouses[i].description,
          products: this.warehouses[i].products,
        }
        this.warehouse = warehouse;
      }
    }

    let dataTemp = [];
    let limitTemp = [];
    let labelTemp = [];
    let colorTemp1 = [];
    let colorTemp2 = [];
    let leakTemp = [];
  
    for (let i = 0; i < this.warehouse.products.length; i++) {
      dataTemp.push(this.warehouse.products[i].stock_amount);
      limitTemp.push(this.warehouse.products[i].limit);
      labelTemp.push(this.warehouse.products[i].name);
      if(this.warehouse.products[i].limit > this.warehouse.products[i].stock_amount){
        colorTemp1.push('rgba(241, 0, 0, 0.5)');
        colorTemp2.push('rgba(241, 0, 0, 1)');
        leakTemp.push({
          leakProductName: this.warehouse.products[i].name,
          leakNumber: this.warehouse.products[i].limit - this.warehouse.products[i].stock_amount
        })
      }
      else{
        colorTemp1.push('rgba(54, 162, 235, 0.5)');
        colorTemp2.push('rgba(54, 162, 235, 1)');
      }
    }

    this.leakProducts = leakTemp;
    //console.log(this.leakProducts);


    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = dataTemp;
    clone[1].data = limitTemp;
  
    this.barChartData = clone;
    this.barChartLabels = labelTemp;
    this.barChartOptions = {
      scaleShowVerticalLines: true,
      responsive: true,
      title: {
        display: true,
        text: this.warehouse.title + '의 물품별 재고량'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            fontStyle: "bold"
          }
        }],
      }
    };
    this.barChartColors[0].backgroundColor=colorTemp1;
    this.barChartColors[0].borderColor=colorTemp2;

  }

  //물품 선택
  public chartClicked(e: any): void {
    this.selectProduct = 1;
    if(e.active[0]){
    this.product = e.active[0]._model.label;
    let productName = e.active[0]._model.label;
    for (let i = 0; i < this.warehouse.products.length; i++) {
      if (this.warehouse.products[i].name == productName) {
        this.product = this.warehouse.products[i];
      }
    }
    
    }
    this.lineChartData[0].data = this.barChartData[0].data;
    this.lineChartLabels = this.barChartLabels;
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


}

