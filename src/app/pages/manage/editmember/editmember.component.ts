import { Component, OnInit } from '@angular/core';
import { Router,  ActivatedRoute } from '@angular/router';
import { UserService } from '../../../user.service';
import { ConfirmComponent } from './confirm/confirm.component';
import { EditconfirmComponent } from './editconfirm/editconfirm.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'ngx-editmember',
  templateUrl: './editmember.component.html',
  styleUrls: ['./editmember.component.scss']
})
export class EditmemberComponent implements OnInit {

  step: string;
  id: string;
  filename: string;
  imagefile: File;
  imageflag = false;
  photo: string;
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
    storeGeoLocation: "37.487596, 127.103174",
    province: 0,
    system_name: "",
    system_lefthand: "",
    working_time: "",
    swingplate: "",
    parking_status: "",
    upload: null
  };
  rooms: any[];
  editForm: FormGroup;
  constructor(private router: Router, private route: ActivatedRoute, public user: UserService, private modalService: NgbModal, private fb: FormBuilder) {
    this.step = "일시불";
    this.editForm = this.fb.group({
      manager_id: this.fb.control('', Validators.required),
      customer_branch: this.fb.control('서울'),
      customer_name: this.fb.control('', Validators.required),
      customer_phone: this.fb.control(''),
      contractDate: this.fb.control(new Date(), Validators.required),
      manager_name: this.fb.control('', Validators.required),	
      manager_phone: this.fb.control(''),	
      manager_residentNumber: this.fb.control(''),	
      manager_businessNumber: this.fb.control(''),	
      manager_address: this.fb.control(''),	
      manager_mail: this.fb.control(''),	
      storeName: this.fb.control('', Validators.required),	
      storeAddress: this.fb.control(''),	
      storePhone: this.fb.control(''),	
      installedDate: this.fb.control(new Date(), Validators.required),	
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
      system_name: this.fb.control(''),
      system_lefthand: this.fb.control(''),
      working_time: this.fb.control(''),
      swingplate: this.fb.control(''),
      parking_status: this.fb.control(''),
      upload: null
    });
  }

  confirmDel(id: string) {
    const activeModal = this.modalService.open(ConfirmComponent, { size: 'sm', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = '확인';
    activeModal.componentInstance.modalContent = '룸을 삭제하겠습니까?';
    activeModal.componentInstance.roomId = id;
    activeModal.componentInstance.memberId = this.id;
    activeModal.result.then(result => {
      if (result == "ok" ) {
        this.getStore();
      }
    });
  }

  confirmSave(flag: number) {
    const activeModal = this.modalService.open(EditconfirmComponent, { size: 'sm', container: 'nb-layout' });    
    activeModal.componentInstance.flag = flag;    
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getStore();
  }

  goListPage() {
    this.router.navigateByUrl('/pages/manage/member');
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

  getStore() {
    this.user.getStore(this.id)
      .subscribe(
          data => {
            console.log(data);
            this.data = Object.assign(this.data, data.store);
            this.rooms = data.rooms;
            console.log(this.rooms);
            this.editForm.patchValue({
              manager_id: this.id,
              customer_branch: this.data.customer_branch,
              customer_name: this.data.customer_name,
              customer_phone: this.data.customer_phone,
              contractDate: this.data.contractDate.substr(0, 10),
              manager_name: this.data.manager_name,
              manager_phone: this.data.manager_phone,
              manager_residentNumber: this.data.manager_residentNumber,
              manager_businessNumber: this.data.manager_businessNumber,
              manager_address: this.data.manager_address,
              manager_mail: this.data.manager_mail,
              storeName: this.data.storeName,	
              storeAddress: this.data.storeAddress,
              storePhone: this.data.storePhone,
              installedDate: this.data.installedDate.substr(0, 10),	
              payment_mode: this.data.payment_mode,
              contract_pay_date: this.data.contract_pay_date.substr(0, 10),
              contract_amount: this.data.contract_amount,
              interpayment_date: this.data.interpayment_date.substr(0, 10),
              interpayment_amount: this.data.interpayment_amount,
              balance_date: this.data.balance_date.substr(0, 10),
              balance_amount: this.data.balance_amount,
              distance_limit: this.data.distance_limit,
              round_price: this.data.round_price,
              others: this.data.others,
              payment_date: this.data.payment_date.substr(0, 10),
              photo: this.data.photo,
              storeGeoLocation: this.data.storeGeoLocation,
              province: this.data.province,
              system_name: this.data.system_name,
              system_lefthand: this.data.system_lefthand,
              working_time: this.data.working_time,
              swingplate: this.data.swingplate,
              parking_status: this.data.parking_status,
              upload: null
            })
            console.log(this.data);
          },
          error => {
            console.log(error);
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