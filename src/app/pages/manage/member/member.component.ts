import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../user.service';

@Component({
  selector: 'ngx-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})

export class MemberComponent implements OnInit {

  data: any[];
  name = ''; 
  conditionDate = 0; 
  date1 = ''; 
  date2 = '';
  constructor(
    public user: UserService,
    private router: Router,
  ) { }

  getStores() {
    this.user.getStores(this.name, this.conditionDate, this.date1, this.date2)
      .subscribe(
          data => {            
            this.data = data;
            console.log(data);
          },
          error => {
            console.log(error);
            this.user.spinner.hide();
          });
  }

  search(name: string, date1: string, date2: string) {
    this.name = name; this.date1 = date1; this.date2 = date2;
    this.getStores();
  }
  
  setconditionDate(conditionDate: number) {
    this.conditionDate = conditionDate;    
  }

  ngOnInit() {
    this.getStores();
  }
  public editMember(id) {
      this.router.navigate(['/pages/manage/editmember', id]);
  }
}

