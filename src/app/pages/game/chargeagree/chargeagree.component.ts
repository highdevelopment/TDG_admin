import { Component, OnInit } from '@angular/core';
import { ChargeconfirmComponent } from './chargeconfirm/chargeconfirm.component';
import { UserService } from '../../../user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-chargeagree',
  templateUrl: './chargeagree.component.html',
  styleUrls: ['./chargeagree.component.scss']
})
export class ChargeagreeComponent implements OnInit {

  data: any[];

  constructor(public user: UserService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.getNewChargeLogs();
  }
  getNewChargeLogs() {
    this.user.getNewChargeLogs()
      .subscribe(
          data => {            
            if (data.success) {
              this.data = data.result;
            }
          },
          error => {
            console.log(error);
            this.user.spinner.hide();
          });
  }
  verify(id: string){
    this.user.verifyChargeLog(id)
      .subscribe(
          data => {            
            if (data.success) {
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
  confirmSave(flag: number) {
    const activeModal = this.modalService.open(ChargeconfirmComponent, { size: 'sm', container: 'nb-layout' });    
    activeModal.componentInstance.flag = flag;
  }

}
