import { useMemo } from 'react';
import BTHMSN from '@/assets/imgs/bt_hms_news.webp';
import BRSTUN from '@/assets/imgs/cnhs_news.webp';
import HNCNDN from '@/assets/imgs/hn_cnd_news.webp';
import HNTN from '@/assets/imgs/hn_lct_news.webp';
import KHN from '@/assets/imgs/khts_news_page.webp';
import KTDT from '@/assets/imgs/ktdt_nfc.webp';
import KTO from '@/assets/imgs/kto_nfc.webp';
import LDHNN from '@/assets/imgs/ld_hn_news_page.webp';
import LDTHN from '@/assets/imgs/ld_thud_news_page.webp';
import PLN from '@/assets/imgs/pl_thcs_news.webp';
import TSN from '@/assets/imgs/tbts_news_page.webp';
import TKDH from '@/assets/imgs/tkdh_nfc.webp';
import HTDHM from '@/assets/imgs/top_str_htdhm.webp';
import LTS from '@/assets/imgs/top_str_lts.webp';
import NBCN from '@/assets/imgs/top_str_news.webp';

export const useNewsLstData = (): { data: Array<NewsLstData> } => {
  const data = useMemo<Array<NewsLstData>>(
    () => [
      {
        id: '1',
        newsTit:
          'Bộ trưởng Bộ GD-ĐT Hoàng Minh Sơn: "Đừng chỉ học để cầm tấm bằng đi tìm việc"',
        desc: 'VOV.VN - Bộ trưởng Hoàng Minh Sơn nhắn nhủ học sinh  .........',
        img: BTHMSN,
        newsDate: '2026-05-07',
      },
      {
        id: '2',
        newsTit: 'Cầu nối học sinh với cơ sở đào tạo\n và thị trường lao động',
        desc: 'Được tổ chức thường niên từ năm 2019, Ngày hội tiếp tục khẳng định vai trò .........',
        img: BRSTUN,
        newsDate: '2026-05-01',
      },
      {
        id: '3',
        newsTit: 'Học nghề - một lựa chọn\ncho học sinh sau trung học cơ sở',
        desc: 'Thời điểm này, hàng chục nghìn học sinh đứng trước .........',
        img: HNTN,
        newsDate: '2026-05-04',
      },
      {
        id: '4',
        newsTit: 'Con đường mới: Trung học nghề',
        desc: 'Trung học nghề được cho là lựa chọn thiết thực cho những học sinh .........',
        img: HNCNDN,
        newsDate: '2026-05-10',
      },
      {
        id: '5',
        newsTit: 'Phân luồng sau THCS:\n Trung học nghề thành lựa chọn mới',
        desc: 'VHO - Từ năm 2026, học sinh sau khi hoàn thành bậc THCS không chỉ có .........',
        img: PLN,
        newsDate: '2026-02-16',
      },
      {
        id: '6',
        newsTit: 'GS Ngô Bảo Châu\n “Không nhất thiết phải có bằng Đại học”',
        desc: 'GS Ngô Bảo Châu quan niệm giá trị của một con người không thể  .........',
        img: NBCN,
        newsDate: '2026-04-30',
      },
      {
        id: '7',
        newsTit:
          'Công nghệ kỹ thuật điện, điện tử: Sức hút từ ngành công nghiệp mũi nhọn',
        desc: 'Công nghệ kỹ thuật điện, điện tử: Sức hút từ ngành công nghiệp mũi nhọn\n',
        img: KTDT,
        newsDate: '2025-11-28',
      },
      {
        id: '8',
        newsTit: 'Công nghệ kĩ thuật ô tô: Ngành nghề có tương lai “đắt giá”',
        desc: 'Công nghệ kĩ thuật ô tô: Ngành nghề có tương lai “đắt giá”\n',
        img: KTO,
        newsDate: '2025-12-20',
      },
      {
        id: '9',
        newsTit: 'Thiết kế đồ họa: Ngành học tiềm năng',
        desc: 'Thiết kế đồ họa: Ngành học tiềm năng\n',
        img: TKDH,
        newsDate: '2026-04-25',
      },
      {
        id: '10',
        newsTit: 'Tuyển sinh đào tạo - năm học 2026-2027',
        desc: 'Trường Trung cấp Tin học Kinh tế Sài Gòn thông báo tuyển sinh đào tạo\n năm học 2026 - 2027....',
        img: TSN,
        newsDate: '2026-05-11',
        typeTit: 'Tuyển sinh',
      },
      {
        id: '11',
        newsTit: 'Kế hoạch tuyển sinh - năm học 2026-2027',
        desc: 'Trường Trung cấp Tin học Kinh tế Sài Gòn ban hành Kế hoạch tuyển sinh\n đào tạo năm học 2026 - 2027....',
        img: KHN,
        newsDate: '2026-03-25',
        typeTit: 'Tuyển sinh',
      },
      {
        id: '12',
        newsTit: 'Những lý do bạn nên theo học ngành \nTin học ứng dụng',
        desc: 'Xã hội ngày càng phát triển đi cùng với đó là sự tiến bộ của khoa học.....',
        img: LDTHN,
        newsDate: '2026-02-26',
      },
      {
        id: '13',
        newsTit: 'Đủ điểm đậu đại học vẫn lựa chọn \n học Trung cấp nghề',
        desc: 'Học cao đẳng, trung cấp nghề không còn là đường vòng mà là đường.....',
        img: LDHNN,
        newsDate: '2026-01-03',
      },
      {
        id: '14',
        newsTit: 'Hợp tác đào tạo - Tuyển sinh ngành Luật – ĐH Mở Hà Nội 2026',
        desc: 'Hợp tác đào tạo\nTuyển sinh ngành Luật – ĐH Mở Hà Nội 2022\n',
        img: LTS,
        newsDate: '2026-02-02',
      },
      {
        id: '15',
        newsTit:
          'EHOU tổ chức lớp học chuyên đề: “Tìm hiểu Luật doanh nghiệp và các hợp đồng kinh tế”',
        desc: 'EHOU tổ chức lớp học chuyên đề:\n “Tìm hiểu Luật doanh nghiệp và các hợp đồng kinh tế” cho sinh viên',
        img: HTDHM,
        newsDate: '2026-01-05',
      },
    ],
    [],
  );
  return { data };
};

export type NewsLstData = {
  id: string;
  newsTit: string;
  desc: string;
  img: string;
  newsDate: string;
  typeTit?: string;
};
