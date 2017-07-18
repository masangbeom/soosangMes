import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-stock-manager',
  templateUrl: 'stock-manager.html',
})
export class StockManagerPage {
  @ViewChild('barCanvas') barCanvas;

  barChart: any;

  private warehouses: any;
  private selectOn: string = "";
  private selectLine: number = 0;
  private warehouse: any;
  private products: any;
  private product: any;

  public barChartOptions: any;
  public barChartLabels: any;
  public barChartType: string = 'bar';
  public barChartLegend: boolean = false;

  public barChartData: any[] = [{
    data: [0, 0, 0, 0, 0, 0, 0],
    label: '재고량'
  }, ];

  public barChartColors: Array < any > = [{
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(244, 164, 96, 0.8)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255,99,132,1)',
      'rgba(244, 164, 96, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
  }, ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {

    console.log('ionViewDidLoad StockManagerPage');
    this.warehouses = [];
    this.products = [];
    this.barChartLabels = [];

    let product1 = {
      name: '철',
      stock_amount: 20,
      p_factory: "Factory 1",
      p_line: 1
    }
    let product2 = {
      name: '금',
      stock_amount: 30,
      p_factory: "Factory 1",
      p_line: 4
    }
    let product3 = {
      name: '은',
      stock_amount: 40,
      p_factory: "Factory 2",
      p_line: 2
    }
    let product4 = {
      name: '스테인레스',
      stock_amount: 50,
      p_factory: "Factory 3",
      p_line: 3
    }
    let product5 = {
      name: '동',
      stock_amount: 60,
      p_factory: "Factory 4",
      p_line: 1
    }
    let product6 = {
      name: '구리',
      stock_amount: 70,
      p_factory: "Factory 3",
      p_line: 2
    }

    this.products.push(product1);
    this.products.push(product2);
    this.products.push(product3);
    this.products.push(product4);
    this.products.push(product5);
    this.products.push(product6);

    let warehouse1 = {
      title: "warehouse 1",
      description: "창고 설명",
    }
    let warehouse2 = {
      title: "warehouse 2",
      description: "창고 설명",
    }
    let warehouse3 = {
      title: "warehouse 3",
      description: "창고 설명",
    }
    let warehouse4 = {
      title: "warehouse 4",
      description: "창고 설명",
    }
    this.warehouses.push(warehouse1);
    this.warehouses.push(warehouse2);
    this.warehouses.push(warehouse3);
    this.warehouses.push(warehouse4);
  }

  onChange(selectOn) {
    this.selectLine = 0;
    let temp: string = selectOn.trim();
    for (let i = 0; i < this.warehouses.length; i++) {
      if (temp == this.warehouses[i].title) {
        let warehouse = {
          title: temp,
          description: this.warehouses[i].description,
          lines: this.warehouses[i].lines
        }
        this.warehouse = warehouse
      }
    }

    let dataTemp = [];
    let labelTemp = [];
    for (let i = 0; i < this.products.length; i++) {
      dataTemp.push(this.products[i].stock_amount);
      labelTemp.push(this.products[i].name);
    }

    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = dataTemp;
    this.barChartData = clone;

    this.barChartLabels = labelTemp;
    console.log(this.barChartLabels);
    this.barChartOptions = {
      scaleShowVerticalLines: true,
      responsive: true,
      title: {
        display: true,
        text: this.selectOn.trim() + '의 물품별 재고량'
      },
      gridline: {
        display: true,
        color: 'rgba(255, 206, 86, 1)',
        drawOnChartArea: true,
        drawTicks: true,
        
      }
    };

  }

  public chartClicked(e: any): void {
    console.log("click");
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomize(): void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40
    ];
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

