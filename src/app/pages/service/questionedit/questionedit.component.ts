import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../user.service';
import { QeditconfirmComponent } from './qeditconfirm/qeditconfirm.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-questionedit',
  templateUrl: './questionedit.component.html',
  styleUrls: ['./questionedit.component.scss']
})
export class QuestioneditComponent implements OnInit {

  title = '';
  content = '';
  answer = '';
  type = 1;
  id: string;
  constructor(private router: Router, private user: UserService, private modalService: NgbModal, private route: ActivatedRoute) { }


  ngOnInit() {  
    this.id = this.route.snapshot.paramMap.get('id');
    this.user.getQuestion(this.id)
      .subscribe(
          data => {            
            if (data.success) {
              this.title = data.result.title;
              // this.name = data.result.name;
              this.content = data.result.content;
              // this.createdAt = data.result.createdAt.substr(0, 10);
              // this.visit = data.result.visit;
              this.type = data.result.type;
              // this.status = data.result.status;
              this.answer = data.result.answer;
            }
            console.log(data.result);
          },
          error => {
            console.log(error);
            this.user.spinner.hide();
          });
  }

  goListPage() {
    if(this.type == 1) {
      this.router.navigateByUrl('/pages/service/userfaq');
    }else{
      this.router.navigateByUrl('/pages/service/managerfaq');
    }    
  }
  confirmSave(flag: number) {
    const activeModal = this.modalService.open(QeditconfirmComponent, { size: 'sm', container: 'nb-layout' });    
    activeModal.componentInstance.flag = flag;
    activeModal.componentInstance.type = this.type;
  }
  regManual() {
    this.user.updatePublicQuestion(this.id, this.title, this.content, this.answer)
      .subscribe(
          data => {         
            console.log(data);   
            if (data.type > 0) {
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

  deleteQuestion() {
    this.user.deleteQuestion(this.id)
      .subscribe(
          data => {
            if (data.success) {
              alert('정확히 삭제되였습니다.');
              this.router.navigateByUrl('/pages/service/managerfaq');
            } else {
              alert('삭제가 실패하였습니다.');
            }
          },
          error => {
            console.log(error);
            alert('삭제가 실패하였습니다.');
            this.user.spinner.hide();
          });
  }

}
