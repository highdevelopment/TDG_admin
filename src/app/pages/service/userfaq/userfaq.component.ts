import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../user.service';

@Component({
  selector: 'ngx-userfaq',
  templateUrl: './userfaq.component.html',
  styleUrls: ['./userfaq.component.scss']
})
export class UserfaqComponent implements OnInit {

  data: any[];
  constructor(private router: Router, public user: UserService) {
  }

  goRegPage() {
    this.router.navigate(['/pages/service/questionreg', 'user']);
  }

  ngOnInit() {
    this.getAllQuetionList();
  }
  getAllQuetionList() {
    this.user.getAllQuetionList(1)
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
