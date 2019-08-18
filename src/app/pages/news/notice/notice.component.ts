import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: '번호',
        type: 'number',
      },
      title: {
        title: '제목',
        type: 'string',
      },
      visitcount: {
        title: '조회수',
        type: 'number',
      },
      regdate: {
        title: '작성일',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor() {
    const data = [{
      id: 339,
      title: '아름다운 CC 그린피 할인행사',
      visitcount: 301,
      regdate: '2018-06-15',
    }, {
      id: 339,
      title: '아름다운 CC 그린피 할인행사',
      visitcount: 301,
      regdate: '2018-06-15',
    }, {
      id: 339,
      title: '아름다운 CC 그린피 할인행사',
      visitcount: 301,
      regdate: '2018-06-15',
    }, {
      id: 339,
      title: '아름다운 CC 그린피 할인행사',
      visitcount: 301,
      regdate: '2018-06-15',
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
