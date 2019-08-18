import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../../../user.service';

@Component({
  selector: 'ngx-usernoticedelconfirm',
  templateUrl: './usernoticedelconfirm.component.html',
  styleUrls: ['./usernoticedelconfirm.component.scss']
})
export class UsernoticedelconfirmComponent implements OnInit {

  modalHeader: string;
  modalContent = `이 공지를 정말 삭제하시겠습니까?`;
  id: string;

  constructor(public user: UserService, private activeModal: NgbActiveModal) { }

  closeModal() {
    this.activeModal.close();
  }

  deleteNotice() {
      this.user.deleteNotice(this.id)
        .subscribe(
            data => {
              if (data.success == true)
              {
                this.modalContent ='삭제가 성공했습니다.';
              }else {
                this.modalContent ='삭제가 실패했습니다.';
              }
              setTimeout(() => {
                this.activeModal.close("ok");                                  
              }, 3000);              
            },
            error => {
              console.log(error);
              this.user.spinner.hide();
            });
  }

  ngOnInit() {
  }

}
