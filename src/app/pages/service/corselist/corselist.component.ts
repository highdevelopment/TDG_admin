import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user.service';
import { CorsedelComponent } from './corsedel/corsedel.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-corselist',
  templateUrl: './corselist.component.html',
  styleUrls: ['./corselist.component.scss']
})
export class CorselistComponent implements OnInit {

  data: any[];
  constructor(public user: UserService, private modalService: NgbModal, private router: Router) { }

  ngOnInit() {
    this.getAllCourses('');
  }
  getAllCourses(search: string) {
    this.user.getAllCourses(search)
      .subscribe(
          data => {
            if (data.success == true) {
              this.data = data.result;
            }            
          },
          error => {
            console.log(error);
            this.user.spinner.hide();
          });
  }

  goRegPage() {
    this.router.navigate(['/pages/service/coursereg']);
  }

  goEditPage(id: string) {
    this.router.navigate(['/pages/service/courseedit', id]);
  }

  confirmSet(name: string, id: string) {
    const activeModal = this.modalService.open(CorsedelComponent, { size: 'sm', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = name;
    activeModal.componentInstance.id = id;
    activeModal.result.then(result => {
      if (result == "ok" ) {
        this.getAllCourses(''); 
      }
    });
  }

}
