import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../user.service';
import { UsernoticeregconfirmComponent } from './usernoticeregconfirm/usernoticeregconfirm.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-usernoticereg',
  templateUrl: './usernoticereg.component.html',
  styleUrls: ['./usernoticereg.component.scss']
})
export class UsernoticeregComponent implements OnInit {

  constructor(private router: Router, public user: UserService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  goListPage() {
    this.router.navigateByUrl('/pages/service/usernoticelist');
  }

  confirmSave(flag: number) {
    const activeModal = this.modalService.open(UsernoticeregconfirmComponent, { size: 'sm', container: 'nb-layout' });    
    activeModal.componentInstance.flag = flag;
  }

  addNotice(title: string, content: string) {
    this.user.saveNotice(title, content, "user")
      .subscribe(
          data => {
            console.log(data);
            if (data == true) {
              // this.router.navigateByUrl('/pages/service/usernoticelist');
              this.confirmSave(1);
            }else{
              this.confirmSave(0);
            }           
          },
          error => {
            this.confirmSave(0);
            console.log(error);
            this.user.spinner.hide();
          });    
  }

}
