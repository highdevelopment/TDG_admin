import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'ngx-shop-meeting',
  templateUrl: './shop-meeting.component.html',
  styleUrls: ['./shop-meeting.component.scss']
})
export class ShopMeetingComponent implements OnInit {

  stores = 0;
  rooms = 0;
  data: any[];
  constructor(public user: UserService) {
    
  }

  ngOnInit() {
    this.user.getAllSystemInfo()
      .subscribe(
        data => {            
          if (data.success) {
            this.stores = data.result.stores;
            this.rooms = data.result.rooms;
            console.log(data);
          }            
        },
        error => {
          console.log(error);
          this.user.spinner.hide();
        });
    this.getNewRooms();
  }

  getNewRooms() {
    this.user.getNewRooms()
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

  roomVerify(id: string, rooms: any) {
    let rooms_str = "%5B";
    let rooms_count = 0;
    rooms.forEach(function (value) {
      rooms_count++;
      if (rooms_count > 1 ) {
        rooms_str = rooms_str + "%2C%20";
      }
      rooms_str = rooms_str + "%22" + value + "%22";
    });
    rooms_str = rooms_str + "%5D";
    this.user.roomVerify(id, rooms_str)
      .subscribe(
        data => {            
          if (data.success) {
            this.getNewRooms();
          }
        },
        error => {
          console.log(error);
          this.user.spinner.hide();
        });
  }

}
