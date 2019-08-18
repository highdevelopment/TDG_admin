import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../user.service';

@Component({
  selector: 'ngx-manualdetail',
  templateUrl: './manualdetail.component.html',
  styleUrls: ['./manualdetail.component.scss']
})
export class ManualdetailComponent implements OnInit {

  id: string;
  title: string;
  content: string;
  data_link: string;
  constructor(private router: Router, private route: ActivatedRoute, private user: UserService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.user.getManualData(this.id)
      .subscribe(
          data => {            
            if (data.success) {
              this.title = data.result.title;
              this.content = data.result.content;
              this.data_link = data.result.data_links[0];
            }
            console.log(data.result);
          },
          error => {
            console.log(error);
            this.user.spinner.hide();
          });
  }

  goListPage() {
    this.router.navigateByUrl('/pages/service/manuallist');
  }

}
