import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../user.service';
import { EventeditconfirmComponent } from './eventeditconfirm/eventeditconfirm.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventdelconfirmComponent } from '../eventlist/eventdelconfirm/eventdelconfirm.component';

@Component({
  selector: 'ngx-eventedit',
  templateUrl: './eventedit.component.html',
  styleUrls: ['./eventedit.component.scss']
})
export class EventeditComponent implements OnInit {

  id: string;
  title: string;
  content: string;
  photo: string;
  filename: string;
  imagefile: File;
  imagefile1: File;
  imageflag = false;
  imageflag1 = false;
  photo1: string;
  image_main: string;
  startAt: string; endAt: string;
  constructor(private router: Router, private route: ActivatedRoute, private user: UserService, private modalService: NgbModal) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.user.getEvent(this.id)
      .subscribe(
          data => {            
            if (data.success) {
              this.title = data.result.title;
              this.content = data.result.content;
              this.photo = data.result.photo;
              this.photo1 = data.result.image_main;
              this.startAt = data.result.startAt.substr(0, 10);
              this.endAt = data.result.endAt.substr(0, 10);
            }
            console.log(data.result);
          },
          error => {
            console.log(error);
            this.user.spinner.hide();
          });
  }

  goListPage() {
    this.router.navigateByUrl('/pages/service/eventlist');
  }

  confirmSave(flag: number) {
    const activeModal = this.modalService.open(EventeditconfirmComponent, { size: 'sm', container: 'nb-layout' });    
    activeModal.componentInstance.flag = flag;
  }

  editEvent() {
    if(this.imageflag) {
      this.user.uploadImage(this.imagefile)
        .subscribe(
            data => {
              console.log(data);
              if(data.success) {
                this.uploadMainImage(data.result.path);
              }            
            },
            error => {
              console.log(error);
              this.user.spinner.hide();
            });
    }else{
      this.uploadMainImage(this.photo);
    }
  }

  uploadMainImage(photo: string) {
    if(this.imageflag1) {
      this.user.uploadImage(this.imagefile1)
        .subscribe(
            data => {
              console.log(data);
              if(data.success) {
                this.saveEvent(photo, data.result.path);
              }            
            },
            error => {
              console.log(error);
              this.user.spinner.hide();
            }); 
      }else{
        this.saveEvent(photo, this.image_main);
      }
  }

  saveEvent(photo: string, image_main: string) {
    this.user.updateEvent(this.id, this.title, this.content, this.startAt, this.endAt, photo, image_main)
      .subscribe(
          data => {            
            if (data == true) {
              // this.router.navigateByUrl('/pages/service/eventlist');
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

  confirmSet() {
    const activeModal = this.modalService.open(EventdelconfirmComponent, { size: 'sm', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = '삭제 확인';
    activeModal.componentInstance.id = this.id;
    activeModal.result.then(result => {
      if (result == "ok" ) {
        this.router.navigateByUrl('/pages/service/eventlist');
      }
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
