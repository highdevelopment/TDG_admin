import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SystemListComponent } from './system-list/system-list.component';
import { UserService } from '../../../user.service';

@Component({
  selector: 'ngx-days-game',
  templateUrl: './days-game.component.html',
  styleUrls: ['./days-game.component.scss']
})
export class DaysGameComponent implements OnInit {

  data: any[];
  constructor(private modalService: NgbModal, public user: UserService) { }

  showSystemList(id: number, name: string) {
    const activeModal = this.modalService.open(SystemListComponent, { size: 'sm', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = "미납장비 ON/OFF 설정";
    activeModal.componentInstance.id = id;
  }

  ngOnInit() {
    this.user.getUnpaid()
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

}
