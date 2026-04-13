import KHN from '@/assets/imgs/khts_news_page.jpg';
import KTDT from '@/assets/imgs/ktdt_nfc.jpg';
import KTO from '@/assets/imgs/kto_nfc.jpg';
import LDHNN from '@/assets/imgs/ld_hn_news_page.jpg';
import LDTHN from '@/assets/imgs/ld_thud_news_page.jpg';
import TSN from '@/assets/imgs/tbts_news_page.jpg';
import TKDH from '@/assets/imgs/tkdh_nfc.jpg';
import HTDHM from '@/assets/imgs/top_str_htdhm.jpg';
import LTS from '@/assets/imgs/top_str_lts.jpg';
import NBCN from '@/assets/imgs/top_str_news.jpg';

export const useNewsLstData = (): { data: Array<NewsLstData> } => {
  const data: Array<NewsLstData> = [
    {
      id: '1',
      newsTit: 'GS Ngô Bảo Châu\n “Không nhất thiết phải có bằng Đại học”',
      desc: 'GS Ngô Bảo Châu quan niệm giá trị của một con người không thể  .........',
      img: NBCN,
    },
    {
      id: '2',
      newsTit:
        'Công nghệ kỹ thuật điện, điện tử: Sức hút từ ngành công nghiệp mũi nhọn',
      desc: 'Công nghệ kỹ thuật điện, điện tử: Sức hút từ ngành công nghiệp mũi nhọn\n',
      img: KTDT,
    },
    {
      id: '3',
      newsTit: 'Công nghệ kĩ thuật ô tô: Ngành nghề có tương lai “đắt giá”',
      desc: 'Công nghệ kĩ thuật ô tô: Ngành nghề có tương lai “đắt giá”\n',
      img: KTO,
    },
    {
      id: '4',
      newsTit: 'Thiết kế đồ họa: Ngành học tiềm năng',
      desc: 'Thiết kế đồ họa: Ngành học tiềm năng\n',
      img: TKDH,
    },
    {
      id: '5',
      newsTit: 'Tuyển sinh đào tạo - năm học 2026-2027',
      desc: 'Trường Trung cấp Tin học Kinh tế Sài Gòn thông báo tuyển sinh đào tạo\n năm học 2026 - 2027....',
      img: TSN,
    },
    {
      id: '6',
      newsTit: 'Kế hoạch tuyển sinh - năm học 2026-2027',
      desc: 'Trường Trung cấp Tin học Kinh tế Sài Gòn ban hành Kế hoạch tuyển sinh\n đào tạo năm học 2026 - 2027....',
      img: KHN,
    },
    {
      id: '7',
      newsTit: 'Những lý do bạn nên theo học ngành \nTin học ứng dụng',
      desc: 'Xã hội ngày càng phát triển đi cùng với đó là sự tiến bộ của khoa học.....',
      img: LDTHN,
    },
    {
      id: '8',
      newsTit: 'Đủ điểm đậu đại học vẫn lựa chọn \n học Trung cấp nghề',
      desc: 'Học cao đẳng, trung cấp nghề không còn là đường vòng mà là đường.....',
      img: LDHNN,
    },
    {
      id: '9',
      newsTit: 'Hợp tác đào tạo - Tuyển sinh ngành Luật – ĐH Mở Hà Nội 2026',
      desc: 'Hợp tác đào tạo\nTuyển sinh ngành Luật – ĐH Mở Hà Nội 2022\n',
      img: LTS,
    },
    {
      id: '10',
      newsTit:
        'EHOU tổ chức lớp học chuyên đề: “Tìm hiểu Luật doanh nghiệp và các hợp đồng kinh tế”',
      desc: 'EHOU tổ chức lớp học chuyên đề:\n “Tìm hiểu Luật doanh nghiệp và các hợp đồng kinh tế” cho sinh viên',
      img: HTDHM,
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
