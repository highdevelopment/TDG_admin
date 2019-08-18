import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../../../user.service';

@Component({
  selector: 'ngx-fee-detail',
  templateUrl: './fee-detail.component.html',
  styleUrls: ['./fee-detail.component.scss']
})
export class FeeDetailComponent implements OnInit {

  modalHeader: string;
  installedDate: string;
  id: string;
  data=[
    {
      "date1": "2018-07-31T15:00:00.000Z",
      "date2": "2018-08-31T15:00:00.000Z",
      "count_total9": 0,
      "count_total18": 0,
      "count_total": 0
    }
  ];
  constructor(public user: UserService, private activeModal: NgbActiveModal) { }

  closeModal() {
    this.activeModal.close();
  }
  
  ngOnInit() {
    this.user.getGameCountsMonthly(this.id)
      .subscribe(
          data => {
            if (data.success) {
              this.data = data.result.aryCounts;
              this.modalHeader = data.result.manager_name + '님 / ' + data.result.storeName;
              this.installedDate = data.result.installedDate.substr(0, 10);
            }
            console.log(data);
          },
          error => {
            console.log(error);
            this.user.spinner.hide();
          });
  }

}
