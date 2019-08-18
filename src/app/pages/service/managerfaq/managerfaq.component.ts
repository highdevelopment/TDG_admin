import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../user.service';

@Component({
  selector: 'ngx-managerfaq',
  templateUrl: './managerfaq.component.html',
  styleUrls: ['./managerfaq.component.scss']
})
export class ManagerfaqComponent implements OnInit {

  data: any[];
  constructor(private router: Router, public user: UserService) {
  }

  goRegPage() {
    this.router.navigate(['/pages/service/questionreg', 'manager']);
  }

  ngOnInit() {
    this.getAllQuetionList();
  }
  getAllQuetionList() {
    this.user.getAllQuetionList(3)
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
  public questionDetail(id) {
      this.router.navigate(['/pages/service/questionedit', id]);
  }

}
