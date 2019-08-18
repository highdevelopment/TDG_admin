import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../user.service';

@Component({
  selector: 'ngx-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  data: any[];
  data1: any[];
  data3 = {
      "paidAtToday_num": 0,
      "paidAtToday_amount": 0,
      "paidAtWeek_num": 0,
      "paidAtWeek_amount": 0,
      "paidAtMonth_num": 0,
      "paidAtMonth_amount": 0,
      "unpaidAtToday": 0,
      "unpaidAtToday_amount": 0,
      "unpaidAtWeek": 0,
      "unpaidAtWeek_amount": 0,
      "unpaidAtMonth": 0,
      "unpaidAtMonth_amount": 0
  }
  constructor(private router: Router, public user: UserService) {
  }

  ngOnInit() {
    this.user.getUnpaid()
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

    this.user.getPaidToday()
        .subscribe(
          data => {            
            if (data.success) {
              this.data1 = data.result;
            }            
          },
          error => {
            console.log(error);
            this.user.spinner.hide();
          });

    this.user.getPaymentStatistics()
          .subscribe(
            data => {            
              if (data.success) {
                this.data3 = data.result;
                console.log(this.data3);
              }            
            },
            error => {
              console.log(error);
              this.user.spinner.hide();
            }); 
  }
  public inputFee(id) {
      this.router.navigate(['/pages/game/inputFee', id]);
  }

}
