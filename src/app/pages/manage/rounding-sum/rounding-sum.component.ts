import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-rounding-sum',
  templateUrl: './rounding-sum.component.html',
  styleUrls: ['./rounding-sum.component.scss']
})
export class RoundingSumComponent implements OnInit {

  settings = {
    actions: false,
    columns: {
      month: {
        title: '년-월',
        type: 'string',
      },
      nineHole: {
        title: '9홀 라운드 수',
        type: 'number',
      },
      eighteenHole: {
        title: '18홀 라운드 수',
        type: 'number',
      },
      sumHole: {
        title: '합계[(9홀*0.5) + 18홀]',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor() {
    const data = [{
      month: '2018-07',
      nineHole: 16,
      eighteenHole: 147,
      sumHole: 155,
    }, {
      month: '합',
      nineHole: 16,
      eighteenHole: 147,
      sumHole: 155,
    }];
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  ngOnInit() {
  }

}
