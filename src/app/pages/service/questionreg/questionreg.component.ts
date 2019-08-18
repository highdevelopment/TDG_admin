import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../user.service';
import { QregconfirmComponent } from './qregconfirm/qregconfirm.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-questionreg',
  templateUrl: './questionreg.component.html',
  styleUrls: ['./questionreg.component.scss']
})
export class QuestionregComponent implements OnInit {

  title = '';
  content = '';
  answer = '';
  type = 1;

  constructor(private router: Router, private user: UserService, private modalService: NgbModal, private route: ActivatedRoute) { }

  ngOnInit() {  
    if(this.route.snapshot.paramMap.get('id') == 'manager'){
      this.type = 3;  
    }
    if(this.route.snapshot.paramMap.get('id') == 'user'){
      this.type = 1;  
    }
  }

  goListPage() {
    if(this.type == 1) {
      this.router.navigateByUrl('/pages/service/userfaq');
    }else{
      this.router.navigateByUrl('/pages/service/managerfaq');
    }    
  }
  confirmSave(flag: number) {
    const activeModal = this.modalService.open(QregconfirmComponent, { size: 'sm', container: 'nb-layout' });    
    activeModal.componentInstance.flag = flag;
    activeModal.componentInstance.type = this.type;
  }
  regManual() {
    this.user.createPublicQuestion(this.type, this.title, this.content, this.answer)
      .subscribe(
          data => {            
            if (data.success == true) {
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
