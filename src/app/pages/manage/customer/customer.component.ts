import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user.service';
import { UpdateroleComponent } from './updaterole/updaterole.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  data: any[];
  showrole = "all";
  constructor(
    public user: UserService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.user.getAccounts('', 'all')
      .subscribe(
          data => {            
            this.data = data;
          },
          error => {
            console.log(error);
            this.user.spinner.hide();
          });
    //this.getManagers('');
  }
  // getManagers(username: string) {
  //   this.user.getManagers(username)
  //     .subscribe(
  //         data => {
  //           this.data = data;
  //           if (this.showrole == "whole") {
  //             this.getCustomers(username);
  //           }         
  //         },
  //         error => {
  //           console.log(error);
  //         });
  // }
  // getCustomers(username: string) {
  //   this.user.getCustomers(username)
  //     .subscribe(
  //         data => {            
  //           this.data = this.data.concat(data);
  //         },
  //         error => {
  //           console.log(error);
  //         });
  // }
  onchange(username: string) {
    this.user.getAccounts(username, this.showrole)
    .subscribe(
        data => {            
          this.data =data;
        },
        error => {
          console.log(error);
          this.user.spinner.hide();
        });
    // if (this.showrole == "user") {
    //   this.user.getCustomers(username)
    //   .subscribe(
    //       data => {            
    //         this.data =data;
    //       },
    //       error => {
    //         console.log(error);
    //       });
    // }else {
    //   this.getManagers(username);
    // }
  }
  confirmSet(username: string, role: string, id: string) {
    const activeModal = this.modalService.open(UpdateroleComponent, { size: 'sm', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = '권한 변경';
    activeModal.componentInstance.username = username;
    activeModal.componentInstance.role = role;
    activeModal.componentInstance.id = id;
  }

}
