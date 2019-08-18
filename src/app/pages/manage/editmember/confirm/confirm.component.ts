import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../user.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  modalHeader: string;
  modalContent: string;
  roomId: string;
  memberId: string;
  constructor(public user: UserService, private activeModal: NgbActiveModal, private router: Router) { }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close();
  }

  updateroom() {
    this.user.deleteRoom(this.roomId)
      .subscribe(
          data => {
            console.log(data);
            if (data.success == true)
            {
              this.modalContent ='삭제 성공했습니다.';
              setTimeout(() => {
                // this.router.navigate(['/pages/manage/editmember', this.memberId]);
                this.activeModal.close("ok");                                  
              }, 2000); 
            }else {
              this.modalContent ='삭제 실패했습니다.';
              setTimeout(() => {
                this.activeModal.close();                                  
              }, 2000); 
            }                        
          },
          error => {
            this.modalContent ='삭제 실패했습니다.';
            setTimeout(() => {
              this.activeModal.close();
              this.user.spinner.hide(); 
            }, 2000);  
            console.log(error);
          });
  }

}
