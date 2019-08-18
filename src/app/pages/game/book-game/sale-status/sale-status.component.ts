import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-sale-status',
  templateUrl: './sale-status.component.html',
  styleUrls: ['./sale-status.component.scss']
})
export class SaleStatusComponent implements OnInit {

  modalHeader: string;
  modalContent: any[];
  moneySum: number;
  constructor(private activeModal: NgbActiveModal) { 
    this.modalContent = [{
      id: 1,
      month: 1,
      money: 150,
    }, {
      id: 2,
      month: 2,
      money: 170
    }, {
      id: 3,
      month: 3,
      money: 130
    }, {
      id: 4,
      month: 4,
      money: 120
    }, {
      id: 5,
      month: 5,
      money: 190
    }];
    this.moneySum = 760;
   }

  closeModal() {
    this.activeModal.close();
  }

  ngOnInit() {
  }

}
