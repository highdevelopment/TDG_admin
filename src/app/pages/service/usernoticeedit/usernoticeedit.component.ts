import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../user.service';
import { UsernoticeeditconfirmComponent } from './usernoticeeditconfirm/usernoticeeditconfirm.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsernoticedelconfirmComponent } from './usernoticedelconfirm/usernoticedelconfirm.component';

@Component({
  selector: 'ngx-usernoticeedit',
  templateUrl: './usernoticeedit.component.html',
  styleUrls: ['./usernoticeedit.component.scss']
})
export class UsernoticeeditComponent implements OnInit {

  id: string;
  title: string;
  content: string;
  constructor(private router: Router, private route: ActivatedRoute, private user: UserService, private modalService: NgbModal) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.user.getNotice(this.id)
      .subscribe(
          data => {            
            if (data.success) {
              this.title = data.result.title;
              this.content = data.result.content;
            }
            console.log(data.result);
          },
          error => {
            console.log(error);
            this.user.spinner.hide();
          });
  }

  goListPage() {
    this.router.navigateByUrl('/pages/service/usernoticelist');
  }
  confirmSave(flag: number) {
    const activeModal = this.modalService.open(UsernoticeeditconfirmComponent, { size: 'sm', container: 'nb-layout' });    
    activeModal.componentInstance.flag = flag;
  }
  editNotice() {
    this.user.updateNotice(this.id, this.title, this.content, "user")
      .subscribe(
          data => {            
            if (data == true) {
              // this.router.navigateByUrl('/pages/service/usernoticelist');
              this.confirmSave(1);
            }else{
              this.confirmSave(0);
            }
          },
          error => {
            console.log(error);
            this.confirmSave(0);
            this.user.spinner.hide();
          });
  }

  confirmSet() {
    const activeModal = this.modalService.open(UsernoticedelconfirmComponent, { size: 'sm', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = '삭제 확인';
    activeModal.componentInstance.id = this.id;
    activeModal.result.then(result => {
      if (result == "ok" ) {
        this.router.navigateByUrl('/pages/service/usernoticelist');
      }
    });
  }

}
