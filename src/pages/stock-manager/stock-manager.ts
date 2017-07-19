import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'page-stock-manager',
  templateUrl: 'stock-manager.html',
})
export class StockManagerPage {

  private warehouses: any;
  private selectOn: any;
  private selectProduct: number = 0;
  private warehouse: any;
  private products: any;
  private product: any;
  private leakProducts: any;
  public isDataAvailable:boolean = false;
  public barChartOptions: any;
  public barChartLabels: any;
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

    let products1 = [];
    products1.push(product1);
    products1.push(product2);
    products1.push(product3);
    products1.push(product4);
    products1.push(product5);
    products1.push(product6);
    let products2 =[];
    products2.push(product3);
    products2.push(product2);
    products2.push(product1);
    products2.push(product4);
    products2.push(product6);
    products2.push(product5);
    let products3 =[];
    products3.push(product4);
    products3.push(product1);
    products3.push(product3);
    products3.push(product5);
    products3.push(product2);
    let products4 =[];
    products4.push(product5);
    products4.push(product1);
    products4.push(product2);

    let warehouse1 = {
      title: "warehouse 1",
      description: "창고 설명",
      products: products1,
    }
    let warehouse2 = {
      title: "warehouse 2",
      description: "창고 설명",
      products: products2,
    }
    let warehouse3 = {
      title: "warehouse 3",
      description: "창고 설명",
      products: products3,
    }
    let warehouse4 = {
      title: "warehouse 4",
      description: "창고 설명",
      products: products4,
    }
    this.warehouses.push(warehouse1);
    this.warehouses.push(warehouse2);
    this.warehouses.push(warehouse3);
    this.warehouses.push(warehouse4);
  }

  //창고 선택 이후
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
        this.products = this.warehouse.products;
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
      labelTemp.push(this.products[i].name);
      if(this.products[i].limit > this.products[i].stock_amount){
        colorTemp1.push('rgba(241, 0, 0, 0.5)');
        colorTemp2.push('rgba(241, 0, 0, 1)');
        leakTemp.push({
          leakProductName: this.products[i].name,
          leakNumber: this.products[i].limit - this.products[i].stock_amount
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
    this.selectProduct = 1;
    if(e.active[0]){
    this.product = e.active[0]._model.label;
    let productName = e.active[0]._model.label;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name == productName) {
        this.product = this.products[i];
      }
    }
    
    }
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


}

