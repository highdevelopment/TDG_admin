import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../user.service';
import { ManualregconfirmComponent } from './manualregconfirm/manualregconfirm.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-manualreg',
  templateUrl: './manualreg.component.html',
  styleUrls: ['./manualreg.component.scss']
})
export class ManualregComponent implements OnInit {

  title = '';
  content = '';
  data_link = '';
  type = 1;
  constructor(private router: Router, private user: UserService, private modalService: NgbModal) { }

  ngOnInit() {    
  }

  goListPage() {
    this.router.navigateByUrl('/pages/service/manuallist');
  }
  confirmSave(flag: number) {
    const activeModal = this.modalService.open(ManualregconfirmComponent, { size: 'sm', container: 'nb-layout' });    
    activeModal.componentInstance.flag = flag;
  }
  regManual() {
    this.user.saveManualData(this.type, this.title, this.content, this.data_link)
      .subscribe(
          data => {            
            if (data.success == true) {
              // this.router.navigateByUrl('/pages/service/manuallist');
              this.confirmSave(1);
            }else{
              this.confirmSave(0);
            }
          },
          error => {
            console.log(error);
            this.confirmSave(0);
            this.user.spinner.hide();
          });
  }

}
