import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../user.service';
import { NbThemeService, NbColorHelper } from '@nebular/theme';
import { FeeDetailComponent } from './fee-detail/fee-detail.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { formatDate } from '@angular/common';

@Component({
  selector: 'ngx-fee-menu',
  templateUrl: './fee-menu.component.html',
  styleUrls: ['./fee-menu.component.scss']
})
export class FeeMenuComponent implements OnInit {

  data: any[];
  dataSum: any[];
  search= '';
  date1= '';
  date2= '';
  total_games9: number;
  total_games18: number;
  total_gamesN9: number;
  total_gamesN18: number;
  total_games: number;
  showMethod = 0;
  data1: any;
  options: any;
  themeSubscription: any;
  storeNames = [];
  rounding9 = [];
  rounding18 = [];
  roundingSum = [];

  today = Date.now();
  dateArray = [];
  roundingR9 = [];
  roundingR18 = [];
  roundingN9 = [];
  roundingN18 = [];
  constructor(public user: UserService, private router: Router, private theme: NbThemeService, private modalService: NgbModal) {
    this.graph();
   }

  getStoreStatistics(search: string) {
    this.dateArray = [];
    this.roundingR9 = [];
    this.roundingR18 = [];
    this.roundingN9 = [];
    this.roundingN18 = [];
    this.user.getGamesOfAllStore(this.date1, this.date2)
      .subscribe(
          data => {            
            if (data.success) {
              this.total_games9 = data.result.total9_login;
              this.total_gamesN9 = data.result.total9_no_login;
              this.total_games18 = data.result.total18_login;
              this.total_gamesN18 = data.result.total18_no_login;
              this.total_games = data.result.total;
              this.dataSum = data.result.aryCounts;
              this.dataSum.forEach(element => {
                this.dateArray.push(element.startDay.substr(0,10)); 
                this.roundingR9.push(element.count_login9); 
                this.roundingN9.push(element.count_not_login9); 
                this.roundingR18.push(element.count_login18); 
                this.roundingN18.push(element.count_not_login18); 
              });
              console.log(this.dataSum);
              console.log(this.roundingR9);
              console.log(this.roundingN9);
              console.log(this.roundingR18);
              console.log(this.roundingN18);
              this.viewChart();
            }
          },
          error => {
            console.log(error);
            this.user.spinner.hide();
          });
    this.user.getStoreStatistics(search, this.date1, this.date2)
      .subscribe(
          data => {
            if (data.success) {
              this.data = data.result.store_results;
              this.total_games9 = data.result.total_games9;
              this.total_games18 = data.result.total_games18;
              this.total_games = data.result.total_games;
              this.storeNames = [];
              this.rounding9 = [];
              this.rounding18 = [];
              this.roundingSum = [];
              this.data.forEach(element => {
                this.storeNames.push(element.storeName);
                this.rounding9.push(element.games9_num);
                this.rounding18.push(element.games18_num);
                this.roundingSum.push(element.total_num);
              });
              this.graph();
            }
            console.log(data);
          },
          error => {
            console.log(error);
            this.user.spinner.hide();
          });
  }
  viewChart() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.success, colors.danger, colors.primary, colors.info],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}',
          // axisPointer: {
          //   type: 'cross',
          //   label: {
          //     backgroundColor: '#6a7985'
          //   }
          // },
        },
        // calculable : true,
        // toolbox: {
        //   show : true,
        //   feature : {
        //       mark : {show: true},
        //       dataView : {show: true, readOnly: false},
        //       magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
        //       restore : {show: true},
        //       saveAsImage : {show: true}
        //   }
        // },
        legend: {
          left: 'left',
          data: ['9홀라운딩(로그인)', '18홀라운딩(로그인)', '9홀라운딩(비로그인)', '18홀라운딩(비로그인)'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        xAxis: [
          {
            type: 'category',
            data: this.dateArray,
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        series: [
          {
            name: '9홀라운딩(로그인)',
            type: 'line',
            data: this.roundingR9,
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
          },
          {
            name: '18홀라운딩(로그인)',
            type: 'line',
            data: this.roundingR18,
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
          },
          {
            name: '9홀라운딩(비로그인)',
            type: 'line',
            data: this.roundingN9,
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
          },
          {
            name: '18홀라운딩(비로그인)',
            type: 'line',
            data: this.roundingN18,
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
          },
        ],
      };
    });
  }

  graph() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data1 = {
        labels: this.storeNames,
        datasets: [{
          data: this.roundingSum,
          label: '라운딩 합계',
          backgroundColor: NbColorHelper.hexToRgbA(colors.successLight, 0.8),
        }, {
          data: this.rounding9,
          label: '9홀 라운딩',
          backgroundColor: NbColorHelper.hexToRgbA(colors.infoLight, 0.8),
        }, {
          data: this.rounding18,
          label: '18홀 라운딩',
          backgroundColor: NbColorHelper.hexToRgbA(colors.primaryLight, 0.8),
        }],
      };

      this.options = {
        maintainAspectRatio: false,
        responsive: true,         
        legend: {
          labels: {
            fontColor: chartjs.textColor,                        
          },          
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
          yAxes: [
            {             
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
        },
      };
    });
  }

  setconditionDate(showMethod: number) {
    this.showMethod = showMethod;    
  }

  ngOnInit() {
    let startDateNum = this.today - 30*24*3600*1000;
    this.date1 = formatDate(startDateNum, 'yyyy-MM-dd', 'en-US', '+0530');
    this.date2 = formatDate(this.today, 'yyyy-MM-dd', 'en-US', '+0530');
    this.getStoreStatistics(this.search);
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  feeDetail(id: string) {
    const activeModal = this.modalService.open(FeeDetailComponent, { size: 'lg', container: 'nb-layout' });

    activeModal.componentInstance.id = id;    
    // activeModal.componentInstance.id = id;
  }

}
