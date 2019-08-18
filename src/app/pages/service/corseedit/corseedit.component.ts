import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../user.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CorseeditconfirmComponent } from './corseeditconfirm/corseeditconfirm.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-corseedit',
  templateUrl: './corseedit.component.html',
  styleUrls: ['./corseedit.component.scss']
})
export class CorseeditComponent implements OnInit {

  editForm: FormGroup;
  filename: string;
  imagefile: File;
  imageflag = false;
  photo: string;
  id: string;
  constructor(private router: Router, public user: UserService, private fb: FormBuilder, private modalService: NgbModal, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.editForm = this.fb.group({
      name: this.fb.control('', Validators.required),
      country: this.fb.control('', Validators.required),
      hole_level: this.fb.control(0, Validators.required),
      green_level: this.fb.control(0, Validators.required),
      subCC_num: this.fb.control(0, Validators.required),
      photo: this.fb.control('', Validators.required),	
      address: this.fb.control({"lat": 0.00000, "lng": 0.00000}),	
      name_kr: this.fb.control('', Validators.required),	
      address_kr: this.fb.control('', Validators.required),	
      comment_kr: this.fb.control('', Validators.required),	
      name_cn: this.fb.control(''),	
      address_cn: this.fb.control(''),	
      name_en: this.fb.control(''),	
      address_en: this.fb.control(''),	
      name_jp: this.fb.control(''),	
      address_jp: this.fb.control(''),
      website: this.fb.control(''),
      province: this.fb.control('0'),
      sub1_name: this.fb.control('', Validators.required),	
      sub1_name_kr: this.fb.control('', Validators.required),	
      sub1_name_cn: this.fb.control(''),	
      sub1_name_en: this.fb.control(''),	
      sub1_name_jp: this.fb.control(''),	
      sub1_par1: this.fb.control(0, Validators.required),	
      sub1_par2: this.fb.control(0, Validators.required),	
      sub1_par3: this.fb.control(0, Validators.required),
      sub1_par4: this.fb.control(0, Validators.required),	
      sub1_par5: this.fb.control(0, Validators.required),	
      sub1_par6: this.fb.control(0, Validators.required),
      sub1_par7: this.fb.control(0, Validators.required),	
      sub1_par8: this.fb.control(0, Validators.required),	
      sub1_par9: this.fb.control(0, Validators.required),
      sub2_name: this.fb.control('', Validators.required),	
      sub2_name_kr: this.fb.control('', Validators.required),	
      sub2_name_cn: this.fb.control(''),	
      sub2_name_en: this.fb.control(''),	
      sub2_name_jp: this.fb.control(''),	
      sub2_par1: this.fb.control(0, Validators.required),	
      sub2_par2: this.fb.control(0, Validators.required),	
      sub2_par3: this.fb.control(0, Validators.required),
      sub2_par4: this.fb.control(0, Validators.required),	
      sub2_par5: this.fb.control(0, Validators.required),	
      sub2_par6: this.fb.control(0, Validators.required),
      sub2_par7: this.fb.control(0, Validators.required),	
      sub2_par8: this.fb.control(0, Validators.required),	
      sub2_par9: this.fb.control(0, Validators.required),
      sub3_name: this.fb.control(''),	
      sub3_name_kr: this.fb.control(''),	
      sub3_name_cn: this.fb.control(''),	
      sub3_name_en: this.fb.control(''),	
      sub3_name_jp: this.fb.control(''),	
      sub3_par1: this.fb.control(0),	
      sub3_par2: this.fb.control(0),	
      sub3_par3: this.fb.control(0),
      sub3_par4: this.fb.control(0),	
      sub3_par5: this.fb.control(0),	
      sub3_par6: this.fb.control(0),
      sub3_par7: this.fb.control(0),	
      sub3_par8: this.fb.control(0),	
      sub3_par9: this.fb.control(0),
      sub4_name: this.fb.control(''),	
      sub4_name_kr: this.fb.control(''),	
      sub4_name_cn: this.fb.control(''),	
      sub4_name_en: this.fb.control(''),	
      sub4_name_jp: this.fb.control(''),	
      sub4_par1: this.fb.control(0),	
      sub4_par2: this.fb.control(0),	
      sub4_par3: this.fb.control(0),
      sub4_par4: this.fb.control(0),	
      sub4_par5: this.fb.control(0),	
      sub4_par6: this.fb.control(0),
      sub4_par7: this.fb.control(0),	
      sub4_par8: this.fb.control(0),	
      sub4_par9: this.fb.control(0),
      upload: null
    });
    this.getCourse();
  }

  makeStringAddress(geoAddress) {
    if (geoAddress) {
      return geoAddress.lat + ',' + geoAddress.lng;
    }
    return '';
  }

  getCourse() {
    this.user.getCourse(this.id)
      .subscribe(
        data => {          
          if (data.success == true) {
            this.editForm.patchValue({
              name: data.result.course.name,
              country: data.result.course.country,
              hole_level: data.result.course.hole_level,
              green_level: data.result.course.green_level,
              subCC_num: data.result.course.subCC_num,
              photo: data.result.course.photo,
              address: this.makeStringAddress(data.result.course.address),
              name_kr: data.result.course.name_kr,
              address_kr: data.result.course.address_kr,
              comment_kr: data.result.course.comment_kr,
              name_cn: data.result.course.name_cn,
              address_cn: data.result.course.address_cn,
              name_en: data.result.course.name_en,
              address_en: data.result.course.address_en,
              name_jp: data.result.course.name_jp,
              address_jp: data.result.course.address_jp,
              website: data.result.course.website,
              province: data.result.course.province,          
              upload: null
            });
            let subCourse = [];
            subCourse = data.result.subCourse;
            subCourse.forEach(element => {
              if(element.index == 0) {
                this.editForm.patchValue({
                  sub1_name: element.name,
                  sub1_name_kr: element.name_kr,
                  sub1_name_cn: element.name_cn,
                  sub1_name_en: element.name_en,
                  sub1_name_jp: element.name_jp,
                  sub1_par1: element.par_number1,
                  sub1_par2: element.par_number2,
                  sub1_par3: element.par_number3,
                  sub1_par4: element.par_number4,
                  sub1_par5: element.par_number5,
                  sub1_par6: element.par_number6,
                  sub1_par7: element.par_number7,
                  sub1_par8: element.par_number8,
                  sub1_par9: element.par_number9
                });
              }else if(element.index == 1){
                this.editForm.patchValue({
                  sub2_name: element.name,
                  sub2_name_kr: element.name_kr,
                  sub2_name_cn: element.name_cn,
                  sub2_name_en: element.name_en,
                  sub2_name_jp: element.name_jp,
                  sub2_par1: element.par_number1,
                  sub2_par2: element.par_number2,
                  sub2_par3: element.par_number3,
                  sub2_par4: element.par_number4,
                  sub2_par5: element.par_number5,
                  sub2_par6: element.par_number6,
                  sub2_par7: element.par_number7,
                  sub2_par8: element.par_number8,
                  sub2_par9: element.par_number9
                });
              }else if(element.index == 2){
                this.editForm.patchValue({
                  sub3_name: element.name,
                  sub3_name_kr: element.name_kr,
                  sub3_name_cn: element.name_cn,
                  sub3_name_en: element.name_en,
                  sub3_name_jp: element.name_jp,
                  sub3_par1: element.par_number1,
                  sub3_par2: element.par_number2,
                  sub3_par3: element.par_number3,
                  sub3_par4: element.par_number4,
                  sub3_par5: element.par_number5,
                  sub3_par6: element.par_number6,
                  sub3_par7: element.par_number7,
                  sub3_par8: element.par_number8,
                  sub3_par9: element.par_number9
                });
              }else if(element.index == 3){
                this.editForm.patchValue({
                  sub4_name: element.name,
                  sub4_name_kr: element.name_kr,
                  sub4_name_cn: element.name_cn,
                  sub4_name_en: element.name_en,
                  sub4_name_jp: element.name_jp,
                  sub4_par1: element.par_number1,
                  sub4_par2: element.par_number2,
                  sub4_par3: element.par_number3,
                  sub4_par4: element.par_number4,
                  sub4_par5: element.par_number5,
                  sub4_par6: element.par_number6,
                  sub4_par7: element.par_number7,
                  sub4_par8: element.par_number8,
                  sub4_par9: element.par_number9
                });
              }
                
            });
          }
        },
        error => {          
          console.log(error);
          this.user.spinner.hide();
        });
  }

  goListPage() {
    this.router.navigateByUrl('/pages/service/courselist');
  }
  confirmSave(flag: number) {
    const activeModal = this.modalService.open(CorseeditconfirmComponent, { size: 'sm', container: 'nb-layout' });    
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
