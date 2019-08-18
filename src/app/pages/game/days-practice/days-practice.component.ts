import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-days-practice',
  templateUrl: './days-practice.component.html',
  styleUrls: ['./days-practice.component.scss']
})
export class DaysPracticeComponent implements OnInit {

  settings = {
    actions: false,
    columns: {
      date: {
        title: '일자',
        type: 'string',
      },
      roominfo: {
        title: '룸정보',
        type: 'string',
      },
      starttime: {
        title: '시작시간',
        type: 'string',
      },
      endtime: {
        title: '종료시간',
        type: 'string',
      },
      wholetime: {
        title: '연습시간(분)',
        type: 'string',
      },
      membercount: {
        title: '요금',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor() {
    const data = [{
      date: '2018-07-09',
      roominfo: '이글',
      starttime: '2018-07-09 11:00:11.0',
      endtime: '2018-07-09 11:15:36.0',
      wholetime: '15분',
      membercount: '0원',
    }, {
      date: '',
      roominfo: '',
      starttime: '2018-07-09 11:00:11.0',
      endtime: '2018-07-09 11:15:36.0',
      wholetime: '10분',
      membercount: '0원',
    }, {
      date: '',
      roominfo: '',
      starttime: '2018-07-09 11:00:11.0',
      endtime: '2018-07-09 11:15:36.0',
      wholetime: '11분',
      membercount: '0원',
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
