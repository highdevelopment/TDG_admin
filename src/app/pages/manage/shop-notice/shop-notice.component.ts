import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../user.service';

@Component({
  selector: 'ngx-shop-notice',
  templateUrl: './shop-notice.component.html',
  styleUrls: ['./shop-notice.component.scss']
})
export class ShopNoticeComponent implements OnInit {

  data: any[];
  constructor(private router: Router, public user: UserService) {
  }

  goRegPage() {
    this.router.navigateByUrl('/pages/manage/regnotice');
  }

  ngOnInit() {
    this.getNotices('');
  }
  getNotices(searchtext: string) {
    this.user.getNotices(searchtext)
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
      this.router.navigate(['/pages/manage/editnotice', id]);
  }

}
