import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../user.service';

@Component({
  selector: 'ngx-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.scss']
})
export class QaComponent implements OnInit {

  data: any[];
  // saveddata: any[];
  constructor(private router: Router, public user: UserService) { }

  ngOnInit() {
    this.listServices('');
    // this.saveddata = this.data;
  }

  listServices(search: string) {
    this.user.listServices(search)
      .subscribe(
          data => {            
            if (data.success) {
              this.data = data.result;
            }
            console.log(data);
          },
          error => {
            console.log(error);
            this.user.spinner.hide();
          });
  }

  public regAs(id: string) {
    this.router.navigate(['/pages/support/faq', id]);
  }

  // applyFilter(filterValue: string) {
  //   this.data = this.saveddata;
  //   filterValue = filterValue.trim(); // Remove whitespace
  //   filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
  //   // console.log(this.data[0]['id'].toString());

  //   let filterData=[];
  //   this.data.forEach(obj => {
  //     if (obj.id.toString().toLowerCase().indexOf(filterValue) !== -1 || obj.title.toString().toLowerCase().includes(filterValue) || obj.status.toString().toLowerCase().includes(filterValue) || obj.kind.toString().toLowerCase().includes(filterValue) || obj.room.toString().toLowerCase().includes(filterValue) || obj.reqDate.toString().toLowerCase().includes(filterValue) || obj.receiveDate.toString().toLowerCase().includes(filterValue) || obj.endDate.toString().toLowerCase().includes(filterValue) || obj.pay.toString().toLowerCase().includes(filterValue)) {
  //       filterData = filterData.concat(obj);
  //     }
  //   });
  //   this.data = filterData;
  // }

}
