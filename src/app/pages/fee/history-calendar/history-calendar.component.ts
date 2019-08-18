import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user.service';

@Component({
  selector: 'ngx-history-calendar',
  templateUrl: './history-calendar.component.html',
  styleUrls: ['./history-calendar.component.scss']
})
export class HistoryCalendarComponent implements OnInit {

  moneyDay = 0;
  moneyMonth = 0;
  moneyYear = 0;
  monthList: any[];
  yearList: any[];
  wholeList: any[];
  constructor(public user: UserService) { }

  ngOnInit() {
    this.getPaymentStatistics2();
  }

  getPaymentStatistics2() {
    this.user.getPaymentStatistics2()
      .subscribe(
          data => {
            if (data.success) {
              this.moneyDay = data.result.paidAtToday_amount;
              this.moneyMonth = data.result.paidAtMonth_amount;
              this.moneyYear = data.result.paidAtYear_amount;
              this.monthList = data.result.aryMonth;
              this.yearList = data.result.aryYear;
              this.wholeList = data.result.aryAll;
            }
            console.log(data);
          },
          error => {
            console.log(error);
            this.user.spinner.hide();
          });
  }

}
