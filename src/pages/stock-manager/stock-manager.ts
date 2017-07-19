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
  private leakProducts: any;

  public barChartOptions: any;
  public barChartLabels: any;
  public barChartType: string = 'bar';
  public barChartLegend: boolean = false;

  public barChartData: any[] = [{
    data:{
    datasets:[{
    data: [0,0,0,0,0,0,0],
    label: '재고량',
  },
  {
    data: [0,0,0,0,0,0,0],
    label: '필요량',
    type: 'line'
  }
]}
}
];

  public barChartColors: Array < any > = [{
    backgroundColor: [
    ],
    borderColor: [
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
      limit: 40,
      p_factory: "Factory 1",
      p_line: 1,
    }
    let product2 = {
      name: '금',
      stock_amount: 30,
      limit: 10,
      p_factory: "Factory 1",
      p_line: 4,
    }
    let product3 = {
      name: '은',
      stock_amount: 40,
      limit: 50,
      p_factory: "Factory 2",
      p_line: 2
    }
    let product4 = {
      name: '스테인레스',
      stock_amount: 50,
      limit: 50,
      p_factory: "Factory 3",
      p_line: 3
    }
    let product5 = {
      name: '동',
      stock_amount: 60,
      limit: 50,
      p_factory: "Factory 4",
      p_line: 1
    }
    let product6 = {
      name: '구리',
      stock_amount: 70,
      limit: 50,
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
      products: this.products,
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

  //창고 선택 이후
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
    let limitTemp = [];
    let labelTemp = [];
    let colorTemp1 = [];
    let colorTemp2 = [];
    let leakTemp = [];
    colorTemp1 = this.barChartColors[0].backgroundColor;
    colorTemp2 = this.barChartColors[0].borderColor;
  
    for (let i = 0; i < this.products.length; i++) {
      dataTemp.push(this.products[i].stock_amount);
      limitTemp.push(this.products[i].limit);
      if(this.products[i].limit > this.products[i].stock_amount){
        colorTemp1.push('rgba(241, 0, 0, 0.5)');
        colorTemp2.push('rgba(241, 0, 0, 1)');
        labelTemp.push(this.products[i].name + '\n[재고부족]');
        leakTemp.push({
          leakProductName: this.products[i].name,
          leakNumber: this.products[i].limit - this.products[i].stock_amount
        })
      }
      else{
        colorTemp1.push('rgba(54, 162, 235, 0.2)');
        colorTemp2.push('rgba(54, 162, 235, 1)');
        labelTemp.push(this.products[i].name);
      }
    }

    this.leakProducts = leakTemp;
    //console.log(this.leakProducts);


    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data.datasets[0] = dataTemp;
    clone[0].data.datasets[1].data = limitTemp;
    
    this.barChartData = clone;
    console.log(this.barChartData);
    this.barChartColors[0].backgroundColor = colorTemp1;
    this.barChartColors[0].borderColor = colorTemp2;
    this.barChartLabels = labelTemp;

    this.barChartOptions = {
      scaleShowVerticalLines: true,
      responsive: true,
      title: {
        display: true,
        text: this.selectOn.trim() + '의 물품별 재고량'
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

  }

  public chartClicked(e: any): void {
    if(e.active[0]){
    this.product = e.active[0]._model.label;
    let productName = e.active[0]._model.label;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name == productName) {
        this.product = this.products[i];
      }
    }
    console.log(this.product);
    }
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


}

