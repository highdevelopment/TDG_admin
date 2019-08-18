import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../user.service';
// import { User } from '../../../@auth/_models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NoticedelconfirmComponent } from './noticedelconfirm/noticedelconfirm.component';

@Component({
  selector: 'ngx-editnotice',
  templateUrl: './editnotice.component.html',
  styleUrls: ['./editnotice.component.scss']
})
export class EditnoticeComponent implements OnInit {

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
    this.router.navigateByUrl('/pages/manage/notice');
  }

  editNotice() {
    this.user.updateNotice(this.id, this.title, this.content, "store")
      .subscribe(
          data => {            
            if (data == true) {
              this.router.navigateByUrl('/pages/manage/notice');
            }            
          },
          error => {
            console.log(error);
            this.user.spinner.hide();
          });
    this.router.navigateByUrl('/pages/manage/notice');
  }
  confirmSet() {
    const activeModal = this.modalService.open(NoticedelconfirmComponent, { size: 'sm', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = '삭제 확인';
    activeModal.componentInstance.id = this.id;
    activeModal.result.then(result => {
      if (result == "ok" ) {
        this.router.navigateByUrl('/pages/manage/notice');
      }
    });
  }

}
