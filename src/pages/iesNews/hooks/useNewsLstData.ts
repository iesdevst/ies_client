import KHN from '@/assets/imgs/khts_news_page.jpg';
import LDHNN from '@/assets/imgs/ld_hn_news_page.jpg';
import LDTHN from '@/assets/imgs/ld_thud_news_page.jpg';
import TSN from '@/assets/imgs/tbts_news_page.jpg';
import NBCN from '@/assets/imgs/top_str_news.jpg';

export const useNewsLstData = (): { data: Array<NewsLstData> } => {
  const data: Array<NewsLstData> = [
    {
      id: '1',
      newsTit: 'GS Ngô Bảo Châu\n "Không nhất thiết phải có bằng Đại học"',
      desc: 'GS Ngô Bảo Châu quan niệm giá trị của một con người không thể  .........',
      img: NBCN,
    },
    {
      id: '2',
      newsTit: 'Tuyển sinh đào tạo - năm học 2026-2027',
      desc: 'Trường Trung cấp Tin học Kinh tế Sài Gòn thông báo tuyển sinh đào tạo\n năm học 2026 - 2027....',
      img: TSN,
    },
    {
      id: '3',
      newsTit: 'Kế hoạch tuyển sinh - năm học 2026-2027',
      desc: 'Trường Trung cấp Tin học Kinh tế Sài Gòn ban hành Kế hoạch tuyển sinh\n đào tạo năm học 2026 - 2027....',
      img: KHN,
    },
    {
      id: '4',
      newsTit: 'Những lý do bạn nên theo học ngành \nTin học ứng dụng',
      desc: 'Xã hội ngày càng phát triển đi cùng với đó là sự tiến bộ của khoa học.....',
      img: LDTHN,
    },
    {
      id: '5',
      newsTit: 'Đủ điểm đậu đại học vẫn lựa chọn \n học Trung cấp nghề',
      desc: 'Học cao đẳng, trung cấp nghề không còn là đường vòng mà là đường.....',
      img: LDHNN,
    },
  ];
  return { data };
};

export type NewsLstData = {
  id: string;
  newsTit: string;
  desc: string;
  img: string;
};
