import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.api_url;
  token: any;
  constructor(private http: HttpClient,
    public spinner: NgxSpinnerService) { 
    this.token = JSON.parse(localStorage.getItem('usertoken'));
  }
  getAccounts(username: string, role: string){
    this.spinner.show();
    return this.http.get<any>(this.baseUrl + `/Accounts/search-user?name=`+username+`&role=` + role + `&access_token=` + this.token.id)
      .pipe(map(users => {
        this.spinner.hide();
          return users.res.result;
      }));
  }
//   getManagers(username: string){
//     this.spinner.show();
//     return this.http.get<any>(this.baseUrl + `/Accounts/search-user?name=`+username+`&role=manager&access_token=` + this.token.id)
//       .pipe(map(users => {
//         this.spinner.hide();
//           return users.res.result;
//       }));
//   }
//   getCustomers(username: string){
//     this.spinner.show();
//     return this.http.get<any>(this.baseUrl + `/Accounts/search-user?name=`+username+`&role=user&access_token=` + this.token.id)
//       .pipe(map(users => {
//         this.spinner.hide();
//           return users.res.result;
//       }));
//   }

  getStores(name: string, conditionDate:number, date1: string, date2: string){
      this.spinner.show();
    return this.http.get<any>(this.baseUrl + `/Stores/search-store?name=`+name+`&conditionDate=`+conditionDate+`&date1=`+date1+`&date2=`+date2+`&access_token=` + this.token.id)
      .pipe(map(stores => {
        this.spinner.hide();
        return stores.res.result;
      }));
  }

  makeGeoLocation(address: string) {
    const ary = address.split(',');
    if (ary.length != 2) return null;
    return {
      lat: parseFloat(ary[0]),
      lng: parseFloat(ary[1])
    }
  }
  makeStringGeoLocation(address: any) {
    return address ? address.lat + ', ' + address.lng : '';
  }

  getStore(id: string){
    this.spinner.show();
    return this.http.get<any>(this.baseUrl + `/Stores/get-store?manager_id=`+id+`&access_token=` + this.token.id)
      .pipe(map(store => {
        this.spinner.hide();
        store.res.result.store.storeGeoLocation = this.makeStringGeoLocation(store.res.result.store.storeGeoLocation);
        return store.res.result;
      }));
  }

  updaterole(username: string, role: string){
    this.spinner.show();
    return this.http.post<any>(this.baseUrl + `/Accounts/update-role?access_token=` + this.token.id, { username: username, role: role })
      .pipe(map(data => {
        this.spinner.hide();
          return data.res.success;
      }));
  }

  saveStore(formdata: FormGroup){
    this.spinner.show();
    const geoLocation = this.makeGeoLocation(formdata.value.storeGeoLocation);
    formdata.value.storeGeoLocation = geoLocation ? geoLocation : undefined;
    return this.http.post<any>(this.baseUrl + `/Stores/save-store?access_token=` + this.token.id, formdata.value)
      .pipe(map(data => {
          console.log(data);
          console.log(formdata);
          this.spinner.hide();
          return data.result.success;
      }));
  }

  getUserById(id: string){
    this.spinner.show();  
    return this.http.get<any>(this.baseUrl + `/Accounts/`+id+`?access_token=` + this.token.id)
      .pipe(map(user => {
        this.spinner.hide();
          return user;
      }));
  }

  saveNotice(title: string, content: string, type:string){
    this.spinner.show();  
    return this.http.post<any>(this.baseUrl + `/Notices/register-notice?access_token=` + this.token.id, { title: title, content: content, type: type })
      .pipe(map(data => {
          console.log(data);
          this.spinner.hide();
          return data.res.success;
      }));
  }

  getNotices(searchtext: string) {
    this.spinner.show();  
    return this.http.get<any>(this.baseUrl + `/Notices/manager-notices?search=`+searchtext+`&access_token=` + this.token.id)
      .pipe(map(result => {
        this.spinner.hide();
          return result.res;
      }));
  }

  getUserNotices(searchtext: string) {
    this.spinner.show();  
    return this.http.get<any>(this.baseUrl + `/Notices/user-notices?search=`+searchtext+`&access_token=` + this.token.id)
      .pipe(map(result => {
        this.spinner.hide();
          return result.res;
      }));
  }

  getNotice(id: string) {
    this.spinner.show();
    return this.http.get<any>(this.baseUrl + `/Notices/get-notice?noticeId=`+id+`&access_token=` + this.token.id)
      .pipe(map(result => {
        this.spinner.hide();
          return result.res;
      }));
  }

  updateNotice(id: string, title: string, content: string, type:string){
    this.spinner.show();   
    return this.http.post<any>(this.baseUrl + `/Notices/update-notice?access_token=` + this.token.id, { noticeId: id, title: title, content: content, type: type })
      .pipe(map(data => {
          console.log(data);
          this.spinner.hide();
          return data.res.success;
      }));
  }

  getAllSystemInfo() {
    this.spinner.show();
    return this.http.get<any>(this.baseUrl + `/Stores/systeminfo?access_token=` + this.token.id)
        .pipe(map(result => {
            this.spinner.hide();
            return result.res;
        }));
  }

  getNewRooms() {
    this.spinner.show();
    return this.http.get<any>(this.baseUrl + `/rooms/new-rooms?access_token=` + this.token.id)
        .pipe(map(result => {
            this.spinner.hide();
            return result.res;
        }));
  }

  roomVerify(id: string, rooms: string) {
    this.spinner.show();
    return this.http.get<any>(this.baseUrl + `/rooms/verify-room?storeId=`+id+`&rooms=`+rooms+`&access_token=` + this.token.id)
        .pipe(map(result => {
            this.spinner.hide();
            return result.res;
        }));
  }

  getUnpaid() {
    this.spinner.show();
    return this.http.get<any>(this.baseUrl + `/Stores/get-unpaid?access_token=` + this.token.id)
        .pipe(map(result => {
            this.spinner.hide();
            return result.res;
        }));
  }

  getPaidToday() {
    this.spinner.show();
    return this.http.get<any>(this.baseUrl + `/Stores/get-paidtoday?access_token=` + this.token.id)
        .pipe(map(result => {
            this.spinner.hide();
            return result.res;
        }));
  }

  getPaymentStatistics() {
    this.spinner.show();
    return this.http.get<any>(this.baseUrl + `/Stores/get-pay-statistics?access_token=` + this.token.id)
        .pipe(map(result => {
            this.spinner.hide();
            return result.res;
        }));
  }

  getPaymentStatistics2() {
    this.spinner.show();
    return this.http.get<any>(this.baseUrl + `/Stores/get-pay-statistics2?access_token=` + this.token.id)
        .pipe(map(result => {
            this.spinner.hide();
            return result.res;
        }));
  }

  getUnpaidStores(id: string) {
    this.spinner.show();
    return this.http.get<any>(this.baseUrl + `/Stores/get-rooms?storeId=`+id+`&access_token=` + this.token.id)
        .pipe(map(result => {
            this.spinner.hide();
            return result.res;
        }));
  }

  saveRoomsOfStore(rooms: any, id: string) {
    this.spinner.show();
    return this.http.post<any>(this.baseUrl + `/Stores/save-rooms?access_token=` + this.token.id,  {storeId: id, rooms: rooms })
      .pipe(map(data => {
        this.spinner.hide();
          return data.res;
      }));
  }

  deleteRoom(roomId: string) {
    this.spinner.show();
    return this.http.post<any>(this.baseUrl + `/rooms/delete-room?access_token=` + this.token.id,  {roomId: roomId})
      .pipe(map(data => {
        this.spinner.hide();
          return data.res;
      }));
  }

  getStoreStatistics(search: string, date1: string, date2: string) {
    this.spinner.show();
    return this.http.get<any>(this.baseUrl + `/Stores/get-statistics?search=`+ search + `&date1=` + date1 + `&date2=` + date2 +`&access_token=` + this.token.id)
        .pipe(map(result => {
            console.log(result);
            this.spinner.hide();
            return result.res;
        }));
  }

  getGamesOfAllStore(date1: string, date2: string) {
    this.spinner.show();
    return this.http.get<any>(this.baseUrl + `/Stores/get-games-allstore?startDay=` + date1 + `&endDay=` + date2 +`&access_token=` + this.token.id)
        .pipe(map(result => {
            console.log(result);
            this.spinner.hide();
            return result.res;
        }));
  }

  listServices(search: string) {
    this.spinner.show();
    return this.http.get<any>(this.baseUrl + `/CustomerServices/get-services?search=`+ search +`&access_token=` + this.token.id)
        .pipe(map(result => {
            this.spinner.hide();
            return result.res;
        }));
  }

  getService(id: string) {
    this.spinner.show();
    return this.http.get<any>(this.baseUrl + `/CustomerServices/get-service?serviceId=`+ id +`&access_token=` + this.token.id)
        .pipe(map(result => {
            this.spinner.hide();
            return result.res;
        }));
  }

  getAllCourses(search: string) {
    this.spinner.show();
    return this.http.get<any>(this.baseUrl + `/Courses/search-course?search=`+ search +`&access_token=` + this.token.id)
    .pipe(map(result => {
        this.spinner.hide();
        return result.res;
    }));
  }

  getCourse(courseId: string) {
    this.spinner.show();
    return this.http.get<any>(this.baseUrl + `/Courses/get-course?courseId=`+ courseId +`&access_token=` + this.token.id)
    .pipe(map(result => {
        console.log(result);
        this.spinner.hide();
        return result.res;
    }));
  }

  saveCourse(course: FormGroup) {
    this.spinner.show();
      console.log(course.value);
      course.value.province = parseInt(course.value.province);
    return this.http.post<any>(this.baseUrl + `/Courses/save-course?access_token=` + this.token.id,  course.value)
      .pipe(map(data => {
          console.log(data);
          this.spinner.hide();
          return data.res;
      }));
  }

  deleteCourse(courseId: string) {
    this.spinner.show();
    return this.http.post<any>(this.baseUrl + `/Courses/delete-course?access_token=` + this.token.id, {courseId: courseId})
    .pipe(map(result => {
        this.spinner.hide();
        return result.res;
    }));
  }

  getManualList(type:number) {
    this.spinner.show();
    return this.http.get<any>(this.baseUrl + `/ManualData/get-datalist?type=`+type+`&access_token=` + this.token.id)
    .pipe(map(result => {
        this.spinner.hide();
        return result.res;
    }));
  }

  getManualData(dataId: string) {
    this.spinner.show();
    return this.http.get<any>(this.baseUrl + `/ManualData/get-data?dataId=`+ dataId +`&access_token=` + this.token.id)
    .pipe(map(result => {
        this.spinner.hide();
        return result.res;
    }));
  }

  saveManualData(type: number, title: string, content: string, data_link: string) {
    this.spinner.show();
    return this.http.post<any>(this.baseUrl + `/ManualData/register-data?access_token=` + this.token.id, { type: type, title: title, content: content, data_link: data_link })
      .pipe(map(data => {
          console.log(data);
          this.spinner.hide();
          return data.res;
      }));
  }

  updateManualData(dataId: string, type: number, title: string, content: string, data_links: any) {
    this.spinner.show();
    return this.http.post<any>(this.baseUrl + `/ManualData/update-data?access_token=` + this.token.id, { dataId: dataId, type: type, title: title, content: content, data_links: data_links })
        .pipe(map(data => {
            console.log(data);
            this.spinner.hide();
            return data.res;
        }));
  }

  saveEvent(title: string, content: string, startAt: string, endAt: string, photo:string, image_main:string){
    this.spinner.show();
    return this.http.post<any>(this.baseUrl + `/Events/register-event?access_token=` + this.token.id, { title: title, content: content, photo: photo, image_main: image_main, startAt:startAt, endAt: endAt })
      .pipe(map(data => {
          console.log(data);
          this.spinner.hide();
          return data.res.success;
      }));
  }

  getEvents(searchtext: string) {
    this.spinner.show();
    return this.http.get<any>(this.baseUrl + `/Events/get-events?search=`+searchtext+`&access_token=` + this.token.id)
      .pipe(map(result => {
        this.spinner.hide();
          return result.res;
      }));
  }

  getEvent(id: string) {
    this.spinner.show();
    return this.http.get<any>(this.baseUrl + `/Events/get-event?eventId=`+id+`&access_token=` + this.token.id)
      .pipe(map(result => {
        this.spinner.hide();
          return result.res;
      }));
  }

  updateEvent(id: string, title: string, content: string, startAt: string, endAt: string, photo:string, image_main: string){
    this.spinner.show();
    return this.http.post<any>(this.baseUrl + `/Events/update-event?access_token=` + this.token.id, { eventId: id, title: title, content: content, photo: photo, image_main: image_main, startAt:startAt, endAt: endAt })
      .pipe(map(data => {
          console.log(data);
          this.spinner.hide();
          return data.res.success;
      }));
  }

  deleteNotice(noticeId: string) {
    this.spinner.show();
    return this.http.post<any>(this.baseUrl + `/Notices/delete-notice?access_token=` + this.token.id, {noticeId: noticeId})
    .pipe(map(result => {
        this.spinner.hide();
        return result.res;
    }));
  }

  deleteManual(dataId: string) {
    this.spinner.show();
    return this.http.post<any>(this.baseUrl + `/ManualData/delete-data?access_token=` + this.token.id, {dataId: dataId})
    .pipe(map(result => {
        this.spinner.hide();
        return result.res;
    }));
  }

  deleteEvent(eventId: string) {
    this.spinner.show();
    return this.http.post<any>(this.baseUrl + `/Events/delete-event?access_token=` + this.token.id, {eventId: eventId})
    .pipe(map(result => {
        this.spinner.hide();
        return result.res;
    }));
  }
  
  uploadImage(image: File) {
    this.spinner.show();
      console.log(image);
    const uploadData = new FormData();
    uploadData.append('upload', image, image.name);
    return this.http.post<any>(this.baseUrl + `/containers/upload-file?access_token=` + this.token.id,  uploadData)
      .pipe(map(data => {
          console.log(data);
          this.spinner.hide();
          return data;
      }));
  }

  getGameCountsMonthly(storeId: string) {    
    this.spinner.show();
    return this.http.get<any>(this.baseUrl + `/Stores/get-gamecount-monthly?storeId=`+storeId+`&access_token=` + this.token.id)
      .pipe(map(result => {
        this.spinner.hide();
          return result.res;
      }));
  }

  getAllQuetionList(type: number) {
    this.spinner.show();
    return this.http.get<any>(this.baseUrl + `/Questions/getall-questions?type=`+type+`&access_token=` + this.token.id)
      .pipe(map(result => {
        this.spinner.hide();
          return result.res;
      }));
  }

  getQuestion(questionId: string) {
    this.spinner.show();
    return this.http.get<any>(this.baseUrl + `/Questions/getquestion?questionId=`+questionId+`&access_token=` + this.token.id)
      .pipe(map(result => {
        this.spinner.hide();
          return result.res;
      }));
  }

  deleteQuestion(questionId: string) {
    this.spinner.show();
    return this.http.post<any>(this.baseUrl + `/Questions/delete-question?access_token=` + this.token.id, {questionId: questionId})
    .pipe(map(result => {
        this.spinner.hide();
        return result.res;
    }));
  }

  answerQuestion(questionId: string, answer: string, photo_answer: string) {
    this.spinner.show();
    return this.http.post<any>(this.baseUrl + `/Questions/answer-question?access_token=` + this.token.id, {questionId: questionId, answer: answer, photo_answer: photo_answer })
    .pipe(map(result => {
        this.spinner.hide();
        return result.res;
    }));
  }

  createPublicQuestion(type: number, title: string, content: string, answer: string) {
    this.spinner.show();
    return this.http.post<any>(this.baseUrl + `/Questions/create-public-question?access_token=` + this.token.id, {type: type, title: title, content: content, answer: answer })
    .pipe(map(result => {
        this.spinner.hide();
        return result.res;
    }));
  }

  updatePublicQuestion(questionId: string, title: string, content: string, answer: string) {
    this.spinner.show();
    return this.http.post<any>(this.baseUrl + `/Questions/update-question?access_token=` + this.token.id, {questionId: questionId, title: title, content: content, answer: answer, photo_question: '', photo_answer: '' })
    .pipe(map(result => {
        this.spinner.hide();
        return result.res;
    }));
  }

  procService(serviceId: string, asData: any) {
    this.spinner.show();
    return this.http.post<any>(this.baseUrl + `/CustomerServices/proc-service?access_token=` + this.token.id, { serviceId: serviceId, recept_name: asData.recept_name, recept_contact: asData.recept_contact, status: asData.status, note: asData.note })
    .pipe(map(result => {
        this.spinner.hide();
        return result.res;
    }));
  }

  registerServiceByAdmin(asData: any) {
    this.spinner.show();
    return this.http.post<any>(this.baseUrl + `/CustomerServices/register-admin?access_token=` + this.token.id, asData)
    .pipe(map(result => {
        this.spinner.hide();
        return result.res;
    }));
  }

  getChargeLogs(startDate: string, endDate: string) {
    this.spinner.show();
    return this.http.get<any>(this.baseUrl + `/CashLogs/get-chargelogs?startDate=`+startDate+`&endDate=` + endDate+`&access_token=` + this.token.id)
      .pipe(map(result => {
        this.spinner.hide();
          return result.res;
      }));
  }

  getNewChargeLogs() {
    this.spinner.show();
    return this.http.get<any>(this.baseUrl + `/CashLogs/get-new-chargelogs?access_token=` + this.token.id)
      .pipe(map(result => {
        this.spinner.hide();
          return result.res;
      }));
  }

  verifyChargeLog(logId: string) {
    this.spinner.show();
    return this.http.post<any>(this.baseUrl + `/CashLogs/verify-chargelog?access_token=` + this.token.id, {logId: logId})
    .pipe(map(result => {
        this.spinner.hide();
        return result.res;
    }));
  }

}
