import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-manuallist',
  templateUrl: './manuallist.component.html',
  styleUrls: ['./manuallist.component.scss']
})
export class ManuallistComponent implements OnInit {

  data: any[];
  type = 0 ;
  constructor(public user: UserService, private router: Router) { }

  ngOnInit() {
    this.getManualList();
  }
  getManualList() {
    this.user.getManualList(this.type)
      .subscribe(
          data => {
            if (data.success == true) {
              this.data = data.result;              
            }
          },
          error => {
            console.log(error);
            this.user.spinner.hide();
          });
  }

  goRegPage() {
    this.router.navigate(['/pages/service/manualreg']);
  }

  godetail(id: string) {
    this.router.navigate(['/pages/service/manualdetail', id]);
  }

  goupdate(id: string) {
    this.router.navigate(['/pages/service/manualupdate', id]);
  }

}
