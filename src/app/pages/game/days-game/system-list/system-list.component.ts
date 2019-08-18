import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../../../user.service';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-system-list',
  templateUrl: './system-list.component.html',
  styleUrls: ['./system-list.component.scss']
})
export class SystemListComponent implements OnInit {

  modalHeader: string;
  id: string;
  modalContent: any[];
  config: ToasterConfig;
  constructor(private activeModal: NgbActiveModal, public user: UserService, private toasterService: ToasterService) { 
    
  }

  closeModal() {
    this.activeModal.close();
  }

  save() {
    this.user.saveRoomsOfStore(this.modalContent, this.id)
      .subscribe(
        data => {
          console.log(data);
          if (data.success) {
            this.showToast('success', '성공', '성공적으로 보관되었습니다.');
          }else {
            this.showToast('warning', '오류', '보관이 실패했습니다.');  
          }
          setTimeout (() => {
              this.activeModal.close();
          }, 2000);           
        },
        error => {
          this.user.spinner.hide();
          console.log(error);
          this.showToast('warning', '오류', '보관이 실패했습니다.');          
          setTimeout (() => {
              this.activeModal.close();
          }, 2000);
        });     
  }

  ngOnInit() {
    this.user.getUnpaidStores(this.id)
      .subscribe(
        data => {            
          if (data.success) {
            this.modalContent = data.result.rooms;
            console.log(data);            
          }
        },
        error => {
          console.log(error);     
          this.user.spinner.hide();     
        });  
  }

  private showToast(type: string, title: string, body: string) {
    this.config = new ToasterConfig({
      positionClass: 'toast-top-right',
      timeout: 3000,
      newestOnTop: true,
      tapToDismiss: true,
      preventDuplicates: false,
      animation: 'fade',
      limit: 1,
    });
    const toast: Toast = {
      type: type,
      title: title,
      body: body,
      timeout: 3000,
      showCloseButton: true,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };
    this.toasterService.popAsync(toast);
  }

}
