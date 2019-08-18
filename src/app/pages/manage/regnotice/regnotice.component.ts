import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../user.service';

@Component({
  selector: 'ngx-regnotice',
  templateUrl: './regnotice.component.html',
  styleUrls: ['./regnotice.component.scss']
})
export class RegnoticeComponent implements OnInit {

  constructor(private router: Router, public user: UserService) { }

  ngOnInit() {
  }

  goListPage() {
    this.router.navigateByUrl('/pages/manage/notice');
  }

  addNotice(title: string, content: string) {
    this.user.saveNotice(title, content, "store")
      .subscribe(
          data => {
            console.log(data);
            if (data == true) {
              this.router.navigateByUrl('/pages/manage/notice');
            }            
          },
          error => {
            console.log(error);
            this.user.spinner.hide();
          });    
  }

}
