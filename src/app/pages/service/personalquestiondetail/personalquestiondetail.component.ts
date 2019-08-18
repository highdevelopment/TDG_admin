import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../user.service';
import { QuestiondelComponent } from './questiondel/questiondel.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../../environments/environment';

function isImageFile(path) {
  if (path.match(/.(jpg|jpeg|png|gif)$/i)) {
    return true;
  }
  return false;
}
function getFileExtension( url ) {
  return url.split('.').pop().split(/\#|\?/)[0];
}
function getFileName( fullPath ) {
  var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
  var filename = fullPath.substring(startIndex);
  if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
      filename = filename.substring(1);
  }
  return filename;
}
function makeAttachedFile(url) {
  let file_url, filename, image_url;
  if (url && url.length > 0) {
    filename = getFileName(url);
    if (isImageFile(filename)) {
      image_url = environment.file_url + url;
    } else {
      file_url = environment.file_url + url;
    }
  }
  return {
    image_url: image_url,
    filename: filename,
    file_url: file_url,
  }
}

@Component({
  selector: 'ngx-personalquestiondetail',
  templateUrl: './personalquestiondetail.component.html',
  styleUrls: ['./personalquestiondetail.component.scss']
})

export class PersonalquestiondetailComponent implements OnInit {

  id: string;
  title: string;
  content: string;
  createdAt: string;
  visit: string;
  name: string;
  type: number;
  answertext: string;
  filename: string;
  imagefile: File;
  imageflag = false;
  status: string;
  attached_question_image: string;
  attached_question_file: string;
  attached_question_filename: string;
  attached_answer_image: string;
  attached_answer_file: string;
  attached_answer_filename: string;
  constructor(private router: Router, private route: ActivatedRoute, private user: UserService, private modalService: NgbModal) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.user.getQuestion(this.id)
      .subscribe(
          data => {            
            if (data.success) {
              this.title = data.result.title;
              this.name = data.result.name;
              this.content = data.result.content;
              this.answertext = data.result.answer;
              this.createdAt = data.result.createdAt.substr(0, 10);
              this.visit = data.result.visit;
              this.type = data.result.type;
              this.status = data.result.status;

              const attach_question = makeAttachedFile(data.result.photo_question);
              this.attached_question_image = attach_question.image_url;
              this.attached_question_file = attach_question.file_url;
              this.attached_question_filename = attach_question.filename;
              const attached_answer = makeAttachedFile(data.result.photo_answer);
              this.attached_answer_image = attached_answer.image_url;
              this.attached_answer_file = attached_answer.file_url;
              this.attached_answer_filename = attached_answer.filename;
            }
            console.log(data.result);
          },
          error => {
            console.log(error);
            this.user.spinner.hide();
          });
  }
  goback(){
    switch (this.type) {
      case 0:
        this.router.navigateByUrl('/pages/service/personalquestion');
          break;
      case 1:
        this.router.navigateByUrl('/pages/service/userfaq');
          break;
      case 2:
        this.router.navigateByUrl('/pages/service/managerqa');
          break;
      case 3:
        this.router.navigateByUrl('/pages/service/managerfaq');
          break;
    }
  }

  confirmSet() {
    const activeModal = this.modalService.open(QuestiondelComponent, { size: 'sm', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = '삭제 확인';
    activeModal.componentInstance.id = this.id;
    activeModal.result.then(result => {
      if (result == "ok" ) {
        this.goback();
      }
    });
  }

  answer() {
    if (!this.answertext) {
      return alert('답변내용을 작성하여 주십시오.');
    }
    if(this.imageflag) {
      this.user.uploadImage(this.imagefile)
      .subscribe(
          data => {
            console.log(data);
            if(data.success) {
              this.answercomplete(data.result.path);
            }            
          },
          error => {
            console.log(error);
            this.user.spinner.hide();
          });
    }else{
      this.answercomplete('');
    }
    
  }

  answercomplete(photo: string) {
    this.user.answerQuestion(this.id, this.answertext, photo)
      .subscribe(
          data => {            
            if (data.success) { 
              this.goback();
            }
            console.log(data.result);
          },
          error => {
            console.log(error);
            this.user.spinner.hide();
          });
  }

  handleCategoryBanner(files: FileList) {
    this.filename = files[0].name;
    this.imagefile = files[0];
    this.imageflag = true;
    const reader = new FileReader();    
    reader.onload = e => this.attached_answer_image = reader.result as string;
    reader.readAsDataURL(this.imagefile);    
  }

}
