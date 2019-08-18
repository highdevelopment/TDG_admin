import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-updaterole',
  templateUrl: './updaterole.component.html',
  styleUrls: ['./updaterole.component.scss']
})
export class UpdateroleComponent implements OnInit {

  modalHeader: string;
  modalContent = `권한을 선택하세요.`;
  username: string;
  role: string;
  id: string;

  constructor(public user: UserService, private activeModal: NgbActiveModal, private router: Router) { }

  closeModal() {
    this.activeModal.close();
  }

  updaterole() {
      this.user.updaterole(this.username, this.role)
        .subscribe(
            data => {
              console.log(data);
              if (data == true)
              {
                this.user.spinner.show();
                this.modalContent ='등록이 성공했습니다.';
                setTimeout(() => {
                  if (this.role == 'manager') {
                    this.router.navigate(['/pages/manage/regmember', this.id]);
                  }else {
                    this.router.navigate(['/pages/manage/customer']);
                  }
                  this.activeModal.close();
                  this.user.spinner.hide();
                }, 2000);
              }else {
                this.modalContent ='설정을 확인하세요.';
              }                            
            },
            error => {
              this.modalContent ='등록이 실패했습니다.';
              console.log(error);
              this.user.spinner.hide();
            });
  }

  ngOnInit() {
  }

}
