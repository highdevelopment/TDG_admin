import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../user.service';
import { ManualupdateconfirmComponent } from './manualupdateconfirm/manualupdateconfirm.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ManualdelconfirmComponent } from './manualdelconfirm/manualdelconfirm.component';

@Component({
  selector: 'ngx-manualupdate',
  templateUrl: './manualupdate.component.html',
  styleUrls: ['./manualupdate.component.scss']
})
export class ManualupdateComponent implements OnInit {

  id: string;
  title: string;
  content: string;
  data_link: string;
  type = 1;
  constructor(private router: Router, private route: ActivatedRoute, private user: UserService, private modalService: NgbModal) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.user.getManualData(this.id)
      .subscribe(
          data => {            
            if (data.success) {
              this.type = data.result.type;
              this.title = data.result.title;
              this.content = data.result.content;
              this.data_link = data.result.data_links[0];
            }
            console.log(data.result);
          },
          error => {
            console.log(error);
            this.user.spinner.hide();
          });
  }

  goListPage() {
    this.router.navigateByUrl('/pages/service/manuallist');
  }
  confirmSave(flag: number) {
    const activeModal = this.modalService.open(ManualupdateconfirmComponent, { size: 'sm', container: 'nb-layout' });    
    activeModal.componentInstance.flag = flag;
  }

  regManual() {
    const data_links = [];
    data_links.push(this.data_link);
    this.user.updateManualData(this.id, this.type, this.title, this.content, data_links)
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
            this.confirmSave(0);
            console.log(error);
            this.user.spinner.hide();
          });
  }

  confirmSet() {
    const activeModal = this.modalService.open(ManualdelconfirmComponent, { size: 'sm', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = '삭제 확인';
    activeModal.componentInstance.id = this.id;
    activeModal.result.then(result => {
      if (result == "ok" ) {
        this.router.navigateByUrl('/pages/service/manuallist');
      }
    });
  }

}
