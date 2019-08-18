import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../user.service';
import { SaveconfirmComponent } from './saveconfirm/saveconfirm.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  data: any;
  id: string;
  constructor(private router: Router, private route: ActivatedRoute, public user: UserService, private modalService: NgbModal) {
   
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.data = {
      type: 'online',
      roomName: '',
      storeName: '',
      category: '',
      request_name: '',
      request_contact: '',
      recept_name: '',
      recept_contact: '',
      receptedAt: '',
      title: '',
      content:'',
      note:''
    };
    if(this.id != 'register') {
      this.getService(this.id);
    }    
  }

  confirmSave(flag: number) {
    const activeModal = this.modalService.open(SaveconfirmComponent, { size: 'sm', container: 'nb-layout' });    
    activeModal.componentInstance.flag = flag;
  }
  getService(id: string) {
    this.user.getService(id)
      .subscribe(
          data => {            
            if (data.success) {
              this.data = data.result;
            }
            console.log(data);
          },
          error => {
            console.log(error);
            this.user.spinner.hide();
          });
  }
  saveQuestion() {
    if (!this.data.recept_name) {
      alert('접수자이름을 입력해주십시오.');
      return;
    }
    this.user.procService(this.id, this.data)
      .subscribe(
          data => {            
            if (data.success) {
              this.confirmSave(1);
            }else{
              this.confirmSave(0);
            }
            console.log(data);
          },
          error => {
            this.confirmSave(0);
            console.log(error);
            this.user.spinner.hide();
          });
  }

  addQuestion() {
    this.user.registerServiceByAdmin(this.data)
      .subscribe(
          data => {            
            if (data.success) {
              this.confirmSave(1);
            }else{
              this.confirmSave(0);
            }
            console.log(data);
          },
          error => {
            this.confirmSave(0);
            console.log(error);
            this.user.spinner.hide();
          });
  }

  qSave() {
    if(this.id == 'register') {
      this.addQuestion();
    }else{
      this.saveQuestion();
    }
  }

  qList() {
    this.router.navigate(['/pages/support/qa']);
  }

}
