import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-editconfirm',
  templateUrl: './editconfirm.component.html',
  styleUrls: ['./editconfirm.component.scss']
})
export class EditconfirmComponent implements OnInit {

  modalHeader: string;
  modalContent: string;
  flag: number;
  constructor(private activeModal: NgbActiveModal, private router: Router) { }

  ngOnInit() {
    if(this.flag == 1) {
      this.modalHeader = "보관 성공";
      this.modalContent = "정보가 성공적으로 보관 되었습니다.";
    }else{
      this.modalHeader = "보관 실패";
      this.modalContent = "정보 보관이 실패 했습니다.";
    }
  }

  closeModal() {
    if(this.flag == 1) {
      this.router.navigateByUrl('/pages/manage/member');
    }
    this.activeModal.close();
  }
}
