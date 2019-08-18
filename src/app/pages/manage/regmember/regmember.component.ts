import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../user.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RegconfirmComponent } from './regconfirm/regconfirm.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { formatDate } from '@angular/common';

@Component({
  selector: 'ngx-regmember',
  templateUrl: './regmember.component.html',
  styleUrls: ['./regmember.component.scss']
})
export class RegmemberComponent implements OnInit {

  step: string;
  selectedPayMethod: string;
  id: string;
  editForm: FormGroup;
  filename: string;
  imagefile: File;
  imageflag = false;
  photo: string;
  today = Date.now();
  data = {
    customer_name: "",
    contractDate: "2018-01-01 00:00:00",
    manager_name: "",
    storeName: "",
    installedDate: "2018-01-01 00:00:00",
    payment_mode: "일시불",
    createdAt: "2018-01-01 00:00:00",
    modifiedAt: "2018-01-01 00:00:00",
    id: "",
    accountsId: "",
    customer_branch: "서울",
    customer_phone: "",
    manager_phone: "",	
    manager_residentNumber: "",	
    manager_businessNumber: "",	
    manager_address: "",	
    manager_mail: "",	
    storeAddress: "",	
    storePhone: "",	
    contract_pay_date: "2018-01-01 00:00:00",	
    contract_amount: 0,	
    interpayment_date: "2018-01-01 00:00:00",	
    interpayment_amount: 0,	
    balance_date: "2018-01-01 00:00:00",	
    balance_amount: 0,	
    distance_limit: 10000,	
    round_price: 0,	
    others: "",	
    payment_date: "2018-01-01 00:00:00",
    photo: "",
    storeGeoLocation: "",
    province: 0,
    system_name: "",
    system_lefthand: "",
    working_time: "",
    swingplate: "",
    parking_status: "",
    upload: null
  };
  constructor(private router: Router, private activeRoute: ActivatedRoute, public user: UserService, private fb: FormBuilder, private modalService: NgbModal) {
    this.step = "일시불";      
  }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.editForm = this.fb.group({
      manager_id: this.fb.control(this.id, Validators.required),
      customer_branch: this.fb.control('서울'),
      customer_name: this.fb.control('', Validators.required),
      customer_phone: this.fb.control(''),
      contractDate: this.fb.control(formatDate(this.today, 'yyyy-MM-dd', 'en-US'), Validators.required),
      manager_name: this.fb.control('', Validators.required),	
      manager_phone: this.fb.control(''),	
      manager_residentNumber: this.fb.control(''),	
      manager_businessNumber: this.fb.control(''),	
      manager_address: this.fb.control(''),	
      manager_mail: this.fb.control(''),	
      storeName: this.fb.control('', Validators.required),	
      storeAddress: this.fb.control(''),	
      storePhone: this.fb.control(''),	
      installedDate: this.fb.control(formatDate(this.today, 'yyyy-MM-dd', 'en-US'), Validators.required),	
      payment_mode: this.fb.control('일시불', Validators.required),	
      contract_pay_date: this.fb.control(new Date()),	
      contract_amount: this.fb.control(0),	
      interpayment_date: this.fb.control(new Date()),	
      interpayment_amount: this.fb.control(0),	
      balance_date: this.fb.control(new Date()),	
      balance_amount: this.fb.control(0),	
      distance_limit: this.fb.control(10000),	
      round_price: this.fb.control(0),	
      others: this.fb.control(''),	
      // system_info: this.fb.control(''),	
      payment_date: this.fb.control(new Date()),
      photo: this.fb.control(''),
      storeGeoLocation: this.fb.control(''),
      province: this.fb.control(0),
      system_name: this.fb.control('The Doors Golf'),
      system_lefthand: this.fb.control(''),
      working_time: this.fb.control('평일 10:00 - 5:00'),
      swingplate: this.fb.control(''),
      parking_status: this.fb.control('주차가능(전화예약요)'),
      upload: null
    });

    this.user.getUserById(this.id)
      .subscribe(
          data => {
            console.log(data);
            console.log(data.realname);
            this.editForm.patchValue({
              manager_id: this.id,
              manager_name: data.realname,
              manager_phone: data.phone_number,
            })
            console.log(this.data);
          },
          error => {
            console.log(error);
            this.user.spinner.hide();
          });
  }

  goListPage() {
    this.router.navigateByUrl('/pages/manage/member');
  }

  confirmSave(flag: number) {
    const activeModal = this.modalService.open(RegconfirmComponent, { size: 'sm', container: 'nb-layout' });    
    activeModal.componentInstance.flag = flag;
  }

  onSubmit() {
    this.user.saveStore(this.editForm)
      .subscribe(
        data => {
          console.log(data);
          if(data) {
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

  ChangingValue() {
    this.step = this.editForm.get('payment_mode').value;
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
