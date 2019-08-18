import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../user.service';
import { EventregconfirmComponent } from './eventregconfirm/eventregconfirm.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-eventreg',
  templateUrl: './eventreg.component.html',
  styleUrls: ['./eventreg.component.scss']
})
export class EventregComponent implements OnInit {

  filename: string;
  imagefile: File;
  imagefile1: File;
  imageflag = false;
  imageflag1 = false;
  photo: string;
  photo1: string;
  image_main: string;
  constructor(private router: Router, public user: UserService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  goListPage() {
    this.router.navigateByUrl('/pages/service/eventlist');
  }

  addEvent(title: string, content: string, startAt: string, endAt: string) {
    this.user.uploadImage(this.imagefile)
      .subscribe(
          data => {
            console.log(data);
            if(data.success) {
              this.uploadMainImage(title, content, startAt, endAt, data.result.path);
            }            
          },
          error => {
            console.log(error);
            this.user.spinner.hide();
          });    
  }
  uploadMainImage(title: string, content: string, startAt: string, endAt: string, photo: string) {
    this.user.uploadImage(this.imagefile1)
      .subscribe(
          data => {
            console.log(data);
            if(data.success) {
              this.saveEvent(title, content, startAt, endAt, photo, data.result.path);
            }            
          },
          error => {
            console.log(error);
            this.user.spinner.hide();
          }); 
  }
  confirmSave(flag: number) {
    const activeModal = this.modalService.open(EventregconfirmComponent, { size: 'sm', container: 'nb-layout' });    
    activeModal.componentInstance.flag = flag;
  }
  saveEvent(title: string, content: string, startAt: string, endAt: string, photo: string, image_main: string) {
    this.user.saveEvent(title, content, startAt, endAt, photo, image_main)
      .subscribe(
          data => {
            console.log(data);
            if (data == true) {
              this.confirmSave(1);
              // this.router.navigateByUrl('/pages/service/eventlist');
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
  handleCategoryBanner(files: FileList) {
    this.filename = files[0].name;
    this.imagefile = files[0];
    this.imageflag = true;
    const reader = new FileReader();    
    reader.onload = e => this.photo = reader.result as string;
    reader.readAsDataURL(this.imagefile);
  }

  handleImageMain(files: FileList) {
    this.image_main = files[0].name;
    this.imagefile1 = files[0];
    this.imageflag1 = true;
    const reader1 = new FileReader();    
    reader1.onload = e => this.photo1 = reader1.result as string;
    reader1.readAsDataURL(this.imagefile1);
  }

}
