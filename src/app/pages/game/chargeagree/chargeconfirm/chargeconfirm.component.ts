import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-chargeconfirm',
  templateUrl: './chargeconfirm.component.html',
  styleUrls: ['./chargeconfirm.component.scss']
})
export class ChargeconfirmComponent implements OnInit {

  modalHeader: string;
  modalContent: string;
  flag: number;
  constructor(private activeModal: NgbActiveModal, private router: Router) { }

  ngOnInit() {
    this.modalHeader = "승인여부";
    if(this.flag == 1) {      
      this.modalContent = "충전이 승인 되었습니다.";
    }else{      
      this.modalContent = "승인 실패 되었습니다.";
    }
  }

  closeModal() {
    if(this.flag == 1) {
      this.router.navigateByUrl('/pages/game/chargelist');
    }
    this.activeModal.close();
  }

}
