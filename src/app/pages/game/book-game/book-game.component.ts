import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SaleStatusComponent } from './sale-status/sale-status.component';

@Component({
  selector: 'ngx-book-game',
  templateUrl: './book-game.component.html',
  styleUrls: ['./book-game.component.scss']
})
export class BookGameComponent implements OnInit {

  data: any[];
  constructor(private modalService: NgbModal) { }

  showSaleStatus(id: number) {
    const activeModal = this.modalService.open(SaleStatusComponent, { size: 'sm', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = '점주'+id;
  }

  ngOnInit() {
    this.data = [{
      id: 1,
      nickname: '점주명1',      
      shopname: '점포명1',
      master: '영업담당자1',
      count: 10,
    }, {
      id: 2,
      nickname: '점주명2',      
      shopname: '점포명1',
      master: '영업담당자2',
      count: 20,
    }];
  }

}
