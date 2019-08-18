import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-inputfee',
  templateUrl: './inputfee.component.html',
  styleUrls: ['./inputfee.component.scss']
})
export class InputfeeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goListPage() {
    this.router.navigateByUrl('/pages/game/rooms');
  }

  addInfo() {
    this.router.navigateByUrl('/pages/manage/rooms');
  }

}
