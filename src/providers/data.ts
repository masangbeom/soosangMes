import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataProvider {

  constructor(public http:Http) {
  }
  
  sampleFactories(){
    let factories = [];
    let lines = [];

    let processes1 = [{
      p_code: 1,
      p_name: '설비제어',
      description: '설명',
      pro_code: '제품 번호',
      l_code: 1
    }, {
      p_code: 2,
      p_name: 'line1p1p2',
      description: '설명',
      pro_code: '제품 번호',
      l_code: 1
    }, {
      p_code: 3,
      p_name: '렉킹(소재투입)',
      description: '설명',
      pro_code: '제품 번호',
      l_code: 1
    }, {
      p_code: 4,
      p_name: 'line1p2p3',
      description: '설명',
      pro_code: '제품 번호',
      l_code: 1
    }, {
      p_code: 5,
      p_name: '탈지',
      description: '설명',
      pro_code: '제품 번호',
      l_code: 1
    }, {
      p_code: 6,
      p_name: 'line1p3p4',
      description: '설명',
      pro_code: '제품 번호',
      l_code: 1
    }, {
      p_code: 7,
      p_name: '에칭',
      description: '설명',
      pro_code: '제품 번호',
      l_code: 1
    }, {
      p_code: 8,
      p_name: 'line1p4p5',
      description: '설명',
      pro_code: '제품 번호',
      l_code: 1
    }, {
      p_code: 9,
      p_name: '중화',
      description: '설명',
      pro_code: '제품 번호',
      l_code: 1
    }, {
      p_code: 10,
      p_name: 'line1p5p6',
      description: '설명',
      pro_code: '제품 번호',
      l_code: 1
    }, {
      p_code: 11,
      p_name: '활성1',
      description: '설명',
      pro_code: '제품 번호',
      l_code: 1
    }, {
      p_code: 12,
      p_name: 'line1p6p7',
      description: '설명',
      pro_code: '제품 번호',
      l_code: 1
    }, {
      p_code: 13,
      p_name: '활성2',
      description: '설명',
      pro_code: '제품 번호',
      l_code: 1
    }, {
      p_code: 14,
      p_name: 'line1p7p8',
      description: '설명',
      pro_code: '제품 번호',
      l_code: 1
    }, {
      p_code: 15,
      p_name: '화학니켈',
      description: '설명',
      pro_code: '제품 번호',
      l_code: 1
    }, {
      p_code: 16,
      p_name: 'line1p8p9',
      description: '설명',
      pro_code: '제품 번호',
      l_code: 1
    }, {
      p_code: 17,
      p_name: '치환동',
      description: '설명',
      pro_code: '제품 번호',
      l_code: 1
    }, {
      p_code: 18,
      p_name: 'line1p9end',
      description: '설명',
      pro_code: '제품 번호',
      l_code: 1
    }, ];

    let processes2 = [{
      p_code: 1,
      p_name: '유산동',
      description: '설명',
      pro_code: '제품 번호',
      l_code: 1
    }, {
      p_code: 2,
      p_name: 'line1p1p2',
      description: '설명',
      pro_code: '제품 번호',
      l_code: 1
    }, {
      p_code: 3,
      p_name: '반광택',
      description: '설명',
      pro_code: '제품 번호',
      l_code: 1
    }, {
      p_code: 4,
      p_name: 'line1p2p3',
      description: '설명',
      pro_code: '제품 번호',
      l_code: 1
    }, {
      p_code: 5,
      p_name: '광택',
      description: '설명',
      pro_code: '제품 번호',
      l_code: 1
    }, {
      p_code: 6,
      p_name: 'line1p3p4',
      description: '설명',
      pro_code: '제품 번호',
      l_code: 1
    }, {
      p_code: 7,
      p_name: '사틴',
      description: '설명',
      pro_code: '제품 번호',
      l_code: 1
    }, {
      p_code: 8,
      p_name: 'line1p4p5',
      description: '설명',
      pro_code: '제품 번호',
      l_code: 1
    }, {
      p_code: 9,
      p_name: 'MP니켈',
      description: '설명',
      pro_code: '제품 번호',
      l_code: 1
    }, {
      p_code: 10,
      p_name: 'line1p5p6',
      description: '설명',
      pro_code: '제품 번호',
      l_code: 1
    }, {
      p_code: 11,
      p_name: '크롬',
      description: '설명',
      pro_code: '제품 번호',
      l_code: 1
    }, {
      p_code: 12,
      p_name: 'line1p6p7',
      description: '설명',
      pro_code: '제품 번호',
      l_code: 1
    }, {
      p_code: 13,
      p_name: '도금완료',
      description: '설명',
      pro_code: '제품 번호',
      l_code: 1
    }, {
      p_code: 14,
      p_name: 'line1p7p8',
      description: '설명',
      pro_code: '제품 번호',
      l_code: 1
    }, {
      p_code: 15,
      p_name: '디렉킹',
      description: '설명',
      pro_code: '제품 번호',
      l_code: 1
    }, {
      p_code: 16,
      p_name: 'line1p8end',
      description: '설명',
      pro_code: '제품 번호',
      l_code: 1
    }]




    let line1 = {
      name: "Line 1",
      lineId: 1,
      processes: processes1
    }
    let line2 = {
      name: "Line 2",
      lineId: 2,
      processes: processes2
    }
    let line3 = {
      name: "Line 3",
      lineId: 3,
      processes: processes1
    }
    let line4 = {
      name: "Line 4",
      lineId: 4,
      processes: processes2
    }

    lines.push(line1);
    lines.push(line2);
    lines.push(line3);
    lines.push(line4);


    let factory1 = {
      title: "Factory 1",
      description: "공장 설명",
      lines: lines,
      products: this.sampleProducts()
    }
    let factory2 = {
      title: "Factory 2",
      description: "공장 설명",
      lines: lines,
      products: this.sampleProducts()
    }
    let factory3 = {
      title: "Factory 3",
      description: "공장 설명",
      lines: lines,
      products: this.sampleProducts()
    }
    
    let factory4 = {
      title: "Factory 4",
      description: "공장 설명",
      lines: lines,
      products: this.sampleProducts()
    }
    factories.push(factory1);
    factories.push(factory2);
    factories.push(factory3);
    factories.push(factory4);

    return factories;
  }

  sampleWareHouse(){
    let warehouses = [];

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
    warehouses.push(warehouse1);
    warehouses.push(warehouse2);
    warehouses.push(warehouse3);
    warehouses.push(warehouse4);

    return warehouses;
  }

  sampleProducts(){
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

    let products = [];
    products.push(product1);
    products.push(product2);
    products.push(product3);
    products.push(product4);
    products.push(product5);
    products.push(product6);

    return products;
  }

  createFactoriesData(){
    this.http.get('http://localhost:8081/factories-data.php')
      .map(res => res.json())
      .subscribe(factories => {
        console.log(factories);
      })
  }
  // createFactoryData(selectOn, factories){
  //   let temp: string = selectOn.trim();
  //   console.log(temp);
  //   for (let i = 0; i < factories.length; i++) {
  //     if (temp == factories[i].f_name) {
  //       let factory = {
  //         f_code: factories[i].f_code,
  //         f_name: temp,
  //         description: factories[i].description,
  //         lines: this.createLinesData(),
  //       }
  //       console.log(factory);
  //       return factory;
  //     }
  //   }
  // }

  createLinesData(){
    this.http.get('http://localhost:8081/lines-data.php')
      .map(res => res.json())
      .subscribe(lines => {
        console.log(lines);
      })
  }
  
}
