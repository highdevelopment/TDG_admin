import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent implements OnInit {

  settings = {
    actions: false,
    columns: {
      no: {
        title: '번호',
        type: 'string',
      },
      shop: {
        title: '참여 매장',
        type: 'string',
      },
      title: {
        title: '대회명',
        type: 'string',
      },
      term: {
        title: '대회 기간',
        type: 'string',
      },
      cc: {
        title: 'C.C',
        type: 'string',
      },
      item: {
        title: '진행 사항',
        type: 'string',
      },
      result: {
        title: '결과',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor() {
    const data = [];
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
