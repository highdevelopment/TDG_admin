import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../user.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CorseregconfirmComponent } from './corseregconfirm/corseregconfirm.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-corsereg',
  templateUrl: './corsereg.component.html',
  styleUrls: ['./corsereg.component.scss']
})
export class CorseregComponent implements OnInit {

  editForm: FormGroup;
  filename: string;
  imagefile: File;
  imageflag = false;
  photo: string;
  constructor(private router: Router, public user: UserService, private fb: FormBuilder, private modalService: NgbModal) { }

  ngOnInit() {
    this.editForm = this.fb.group({
      name: this.fb.control('', Validators.required),
      country: this.fb.control('kr', Validators.required),
      hole_level: this.fb.control(0, Validators.required),
      green_level: this.fb.control(0, Validators.required),
      subCC_num: this.fb.control(2, Validators.required),
      photo: this.fb.control('', Validators.required),	
      // address: this.fb.control({"lat": 37.3664242, "lng": -126.45345351}),	
      name_kr: this.fb.control('', Validators.required),	
      address_kr: this.fb.control('', Validators.required),	
      comment_kr: this.fb.control('', Validators.required),	
      name_cn: this.fb.control(''),	
      address_cn: this.fb.control(''),	
      name_en: this.fb.control(''),	
      address_en: this.fb.control(''),	
      name_jp: this.fb.control(''),	
      address_jp: this.fb.control(''),	
      province: this.fb.control('0'),
      sub1_name: this.fb.control('', Validators.required),	
      sub1_name_kr: this.fb.control('', Validators.required),	
      sub1_name_cn: this.fb.control(''),	
      sub1_name_en: this.fb.control(''),	
      sub1_name_jp: this.fb.control(''),	
      sub1_par1: this.fb.control(4, Validators.required),	
      sub1_par2: this.fb.control(4, Validators.required),	
      sub1_par3: this.fb.control(4, Validators.required),
      sub1_par4: this.fb.control(4, Validators.required),	
      sub1_par5: this.fb.control(4, Validators.required),	
      sub1_par6: this.fb.control(4, Validators.required),
      sub1_par7: this.fb.control(4, Validators.required),	
      sub1_par8: this.fb.control(4, Validators.required),	
      sub1_par9: this.fb.control(4, Validators.required),
      sub2_name: this.fb.control('', Validators.required),	
      sub2_name_kr: this.fb.control('', Validators.required),	
      sub2_name_cn: this.fb.control(''),	
      sub2_name_en: this.fb.control(''),	
      sub2_name_jp: this.fb.control(''),	
      sub2_par1: this.fb.control(4, Validators.required),	
      sub2_par2: this.fb.control(4, Validators.required),	
      sub2_par3: this.fb.control(4, Validators.required),
      sub2_par4: this.fb.control(4, Validators.required),	
      sub2_par5: this.fb.control(4, Validators.required),	
      sub2_par6: this.fb.control(4, Validators.required),
      sub2_par7: this.fb.control(4, Validators.required),	
      sub2_par8: this.fb.control(4, Validators.required),	
      sub2_par9: this.fb.control(4, Validators.required),
      sub3_name: this.fb.control(''),	
      sub3_name_kr: this.fb.control(''),	
      sub3_name_cn: this.fb.control(''),	
      sub3_name_en: this.fb.control(''),	
      sub3_name_jp: this.fb.control(''),	
      sub3_par1: this.fb.control(4),	
      sub3_par2: this.fb.control(4),	
      sub3_par3: this.fb.control(4),
      sub3_par4: this.fb.control(4),	
      sub3_par5: this.fb.control(4),	
      sub3_par6: this.fb.control(4),
      sub3_par7: this.fb.control(4),	
      sub3_par8: this.fb.control(4),	
      sub3_par9: this.fb.control(4),
      sub4_name: this.fb.control(''),	
      sub4_name_kr: this.fb.control(''),	
      sub4_name_cn: this.fb.control(''),	
      sub4_name_en: this.fb.control(''),	
      sub4_name_jp: this.fb.control(''),	
      sub4_par1: this.fb.control(4),	
      sub4_par2: this.fb.control(4),	
      sub4_par3: this.fb.control(4),
      sub4_par4: this.fb.control(4),	
      sub4_par5: this.fb.control(4),	
      sub4_par6: this.fb.control(4),
      sub4_par7: this.fb.control(4),	
      sub4_par8: this.fb.control(4),	
      sub4_par9: this.fb.control(4),
      upload: null
    });
  }

  goListPage() {
    this.router.navigateByUrl('/pages/service/courselist');
  }
  confirmSave(flag: number) {
    const activeModal = this.modalService.open(CorseregconfirmComponent, { size: 'sm', container: 'nb-layout' });    
    activeModal.componentInstance.flag = flag;
  }
  saveCourse() {
    this.user.saveCourse(this.editForm)
      .subscribe(
        data => {          
          if (data.success == true) {
            this.confirmSave(1);
            // this.router.navigateByUrl('/pages/service/courselist');
          }else{
            if (data.content == 'sgerror') {
              alert(data.result);
            } else {
              this.confirmSave(0);
            }
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
    this.user.uploadImage(this.imagefile)
      .subscribe(
          data => {
            console.log(data);
            if(data.success) {
              this.filename = data.result.path;
            }            
          },
          error => {
            console.log(error);
            this.user.spinner.hide();
          });
  }

}
