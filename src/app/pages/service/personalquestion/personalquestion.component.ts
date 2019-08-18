import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../user.service';

@Component({
  selector: 'ngx-personalquestion',
  templateUrl: './personalquestion.component.html',
  styleUrls: ['./personalquestion.component.scss']
})
export class PersonalquestionComponent implements OnInit {

  data: any[];
  constructor(private router: Router, public user: UserService) {
  }

  goRegPage() {
    this.router.navigateByUrl('/pages/service/usernoticereg');
  }

  ngOnInit() {
    this.getAllQuetionList();
  }
  getAllQuetionList() {
    this.user.getAllQuetionList(0)
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
      this.router.navigate(['/pages/service/questiondetail', id]);
  }

}
