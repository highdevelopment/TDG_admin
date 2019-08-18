import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-echarts-line',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsLineComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
  }

  ngAfterViewInit() {
    this.viewChart();
  }

  viewChart() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.danger, colors.primary, colors.info],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}',
        },
        legend: {
          left: 'left',
          data: ['9홀 이상 합산', '18홀 완주 합산', '9홀 이상 로그인 유지'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        xAxis: [
          {
            type: 'category',
            data: [
              '2018-07-02',
              '2018-07-03',
              '2018-07-04',
              '2018-07-05',
              '2018-07-06',
              '2018-07-07',
              '2018-07-08',
              '2018-07-09',
              '2018-07-10'
            ],
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
            type: 'log',
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
            name: '9홀 이상 합산',
            type: 'line',
            data: [100, 5, 90, 270, 810, 2470, 7410, 2223, 6669],
          },
          {
            name: '18홀 완주 합산',
            type: 'line',
            data: [1000, 20, 5, 80, 490, 320, 604, 1280, 256],
          },
          {
            name: '9홀 이상 로그인 유지',
            type: 'line',
            data: [500, 68, 465, 948, 35, 46, 489, 682, 849],
          },
        ],
      };
    });
  }

  search() {
    alert("ok");
    this.viewChart();
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
