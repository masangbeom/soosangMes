import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
@Component({
  selector: 'page-factory-monitoring',
  templateUrl: 'factory-monitoring.html',
})
export class FactoryMonitoringPage {

  flipState: String = 'notFlipped';
  flyInOutState: String = 'in';
  fadeState: String = 'visible';
  bounceState: String = 'noBounce';

  private bounceInterval: any;

  private factories: any;
  private selectOn: string = "";
  private factory: any;
  private line: any;
  private selectLine: string = "";
  private process: any;
  private check: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FactoryMonitoringPage');

    this.factories = [];
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

//    console.log(processes);

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
      lines: lines
    }
    this.factories.push(factory1);
    this.factories.push(factory2);
    this.factories.push(factory3);
    this.factories.push(factory4);

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
}

