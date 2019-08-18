import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-corsedel',
  templateUrl: './corsedel.component.html',
  styleUrls: ['./corsedel.component.scss']
})
export class CorsedelComponent implements OnInit {

  modalHeader: string;
  modalContent = `이 코스를 정말 삭제하시겠습니까?`;
  id: string;

  constructor(public user: UserService, private activeModal: NgbActiveModal, private router: Router) { }

  closeModal() {
    this.router.navigate(['/pages/service/courselist']);
    this.activeModal.close();
  }

  deleteCourse() {
      this.user.deleteCourse(this.id)
        .subscribe(
            data => {
              if (data.success == true)
              {
                this.modalContent ='삭제가 성공했습니다.';
              }else {
                this.modalContent ='삭제가 실패했습니다.';
              }
              setTimeout(() => {
                this.router.navigate(['/pages/service/courselist']);
                this.activeModal.close("ok");                                  
              }, 3000);              
            },
            error => {
              this.router.navigate(['/pages/service/courselist']);
              console.log(error);
              this.user.spinner.hide();
            });
  }

  ngOnInit() {
  }

}
