import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'ngx-chargelist',
  templateUrl: './chargelist.component.html',
  styleUrls: ['./chargelist.component.scss']
})
export class ChargelistComponent implements OnInit {

  data: any[];
  date1= '';
  date2= '';
  today = Date.now();
  constructor(public user: UserService) {
  }

  ngOnInit() {
    let startDateNum = this.today - 30*24*3600*1000;
    this.date1 = formatDate(startDateNum, 'yyyy-MM-dd', 'en-US', '+0530');
    this.date2 = formatDate(this.today, 'yyyy-MM-dd', 'en-US', '+0530');
    this.getChargeLogs();
  }
  getChargeLogs() {
    this.user.getChargeLogs(this.date1, this.date2)
      .subscribe(
          data => {            
            if (data.success) {
              this.data = data.result;
            }
          },
          error => {
            console.log(error);
            this.user.spinner.hide();
          });
  }
}
