import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../user.service';

@Component({
  selector: 'ngx-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.scss']
})
export class EventlistComponent implements OnInit {

  data: any[];
  constructor(private router: Router, public user: UserService) {
  }

  goRegPage() {
    this.router.navigateByUrl('/pages/service/eventreg');
  }

  ngOnInit() {
    this.getEvents('');
  }
  getEvents(searchtext: string) {
    this.user.getEvents(searchtext)
      .subscribe(
          data => {            
            if (data.success) {
              this.data = data.result;
            }
          },
          error => {
            console.log(error);
            this.user.spinner.hide();
          });
  }
  public editEvent(id) {
      this.router.navigate(['/pages/service/eventedit', id]);
  }

  

}
