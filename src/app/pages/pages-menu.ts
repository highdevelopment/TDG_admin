import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: '메뉴',
    group: true,
  },
  {
    title: '점주관리',
    icon: 'nb-compose',
    link: '/pages/manage',
    children: [
      {
        title: '회원관리',
        link: '/pages/manage/customer',
      },
      {
        title: '점주관리',
        link: '/pages/manage/member',
      },
      {
        title: '장비등록',
        link: '/pages/manage/system',
      },
    ],
  },
  {
    title: '매장관리',
    icon: 'nb-gear',
    link: '/pages/game',
    children: [
      {
        title: '매장 공지',
        link: '/pages/manage/notice',
      },
      {
        title: '매니저 FAQ',
        link: '/pages/service/managerfaq',
      },
      {
        title: '매니저 Q&A',
        link: '/pages/service/managerqa',
      },
      {
        title: '메뉴얼 & 자료실',
        link: '/pages/service/manuallist',
      },     
      // {
      //   title: '원격지원',
      //   link: '/pages/game/book-game',
      // },
    ],
  },
  {
    title: '요금관리',
    icon: 'nb-bar-chart',
    link: '/pages/fee',
    children: [
      {
        title: '요금 납부 현황',
        link: '/pages/game/rooms',
      },
      {
        title: '충전현황',
        link: '/pages/game/chargeagree',
      },
      {
        title: '충전내역',
        link: '/pages/game/chargelist',
      },
      {
        title: '요금미납매장 시설제어',
        link: '/pages/game/days-game',
      }, 
      {
        title: '사업자 매출현황',
        link: '/pages/fee/fee-menu',
      },
      {
        title: '과금매출현황',
        link: '/pages/fee/history-calendar',
      },
    ],
  },
  {
    title: 'CS',
    icon: 'nb-phone',
    link: '/pages/support',
    children: [
      // {
      //   title: '인바운드 콜 센터 관리',
      //   link: '/pages/support/faq',
      // },
      {
        title: '클레임 접수 및 조치',
        link: '/pages/support/qa',
      },
    ],
  },
  {
    title: '웹관리',
    icon: 'nb-title',
    link: '/pages/service',
    children: [
      {
        title: '유저공지',
        link: '/pages/service/usernoticelist',
      },
      {
        title: '이벤트',
        link: '/pages/service/eventlist',
      },
      {
        title: '유저 1:1',
        link: '/pages/service/personalquestion',
      },
      {
        title: '유저 FAQ',
        link: '/pages/service/userfaq',
      },
      {
        title: '코스',
        link: '/pages/service/courselist',
      },
    ],
  },
  // {
  //   title: 'AS',
  //   icon: 'nb-title',
  //   link: '/pages/as',
  //   children: [
  //     {
  //       title: 'AS',
  //       link: '/pages/as/as-list',
  //     },
  //     {
  //       title: '원격지원',
  //       link: '/pages/as/as-req',
  //     },
  //   ],
  // },
  // tslint:disable-next-line:eofline
];