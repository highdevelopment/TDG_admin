import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../user.service';

@Component({
  selector: 'ngx-usernoticelist',
  templateUrl: './usernoticelist.component.html',
  styleUrls: ['./usernoticelist.component.scss']
})
export class UsernoticelistComponent implements OnInit {

  data: any[];
  constructor(private router: Router, public user: UserService) {
  }

  goRegPage() {
    this.router.navigateByUrl('/pages/service/usernoticereg');
  }

  ngOnInit() {
    this.getUserNotices('');
  }
  getUserNotices(searchtext: string) {
    this.user.getUserNotices(searchtext)
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
  public editNotice(id) {
      this.router.navigate(['/pages/service/usernoticeedit', id]);
  }

}
