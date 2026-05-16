import { useMemo } from 'react';
import NOEX from '@/assets/imgs/17k_noexam.webp';
import BTHMSN from '@/assets/imgs/bt_hms_news.webp';
import BRSTUN from '@/assets/imgs/cnhs_news.webp';
import HNCNDN from '@/assets/imgs/hn_cnd_news.webp';
import HNTN from '@/assets/imgs/hn_lct_news.webp';
import KHTS from '@/assets/imgs/khts.webp';
import KTDT from '@/assets/imgs/ktdt_nfc.webp';
import KTO from '@/assets/imgs/kto_nfc.webp';
import LDHNN from '@/assets/imgs/ld_hn_news_page.webp';
import LDTHN from '@/assets/imgs/ld_thud_news_page.webp';
import PLN from '@/assets/imgs/pl_thcs_news.webp';
import TKDH from '@/assets/imgs/tkdh_nfc.webp';
import HTDHM from '@/assets/imgs/top_str_htdhm.webp';
import LTS from '@/assets/imgs/top_str_lts.webp';
import NBCN from '@/assets/imgs/top_str_news.webp';
import TSDT from '@/assets/imgs/tsdt_p1.webp';

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
        categories: 'career',
        authors: 'individual',
        authorN: 'Nguyễn Trang/VOV.VN',
      },

      {
        id: '2',
        newsTit: 'Cầu nối học sinh với cơ sở đào tạo\n và thị trường lao động',
        desc: 'Được tổ chức thường niên từ năm 2019, Ngày hội tiếp tục khẳng định vai trò .........',
        img: BRSTUN,
        newsDate: '2026-05-01',
        categories: 'career',
        authors: 'individual',
        authorN: 'PV',
      },

      {
        id: '3',
        newsTit: 'Học nghề - một lựa chọn\ncho học sinh sau trung học cơ sở',
        desc: 'Thời điểm này, hàng chục nghìn học sinh đứng trước .........',
        img: HNTN,
        newsDate: '2026-05-04',
        categories: 'career',
        authors: 'individual',
        authorN: 'Thống Nhất ',
      },

      {
        id: '4',
        newsTit: 'Con đường mới: Trung học nghề',
        desc: 'Trung học nghề được cho là lựa chọn thiết thực cho những học sinh .........',
        img: HNCNDN,
        newsDate: '2026-05-10',
        categories: 'career',
        authors: 'admisstr',
        authorN: 'YẾN ANH',
      },

      {
        id: '5',
        newsTit: 'Phân luồng sau THCS:\n Trung học nghề thành lựa chọn mới',
        desc: 'VHO - Từ năm 2026, học sinh sau khi hoàn thành bậc THCS không chỉ có .........',
        img: PLN,
        newsDate: '2026-02-16',
        categories: 'career',
        authors: 'individual',
        authorN: 'NHƯ BÌNH',
      },

      {
        id: '6',
        newsTit: 'GS Ngô Bảo Châu\n “Không nhất thiết phải có bằng Đại học”',
        desc: 'GS Ngô Bảo Châu quan niệm giá trị của một con người không thể  .........',
        img: NBCN,
        newsDate: '2026-04-30',
        categories: 'career',
        authors: 'individual',
        authorN: 'Ngân Anh',
      },

      {
        id: '7',
        newsTit:
          'Công nghệ kỹ thuật điện, điện tử: Sức hút từ ngành công nghiệp mũi nhọn',
        desc: 'Công nghệ kỹ thuật điện, điện tử: Sức hút từ ngành công nghiệp mũi nhọn\n',
        img: KTDT,
        newsDate: '2025-11-28',
        categories: 'training',
        authors: 'admisstr',
        fields: 'tech',
        authorN: 'Phòng tổ chức hành chính',
      },

      {
        id: '8',
        newsTit: 'Công nghệ kĩ thuật ô tô: Ngành nghề có tương lai “đắt giá”',
        desc: 'Công nghệ kĩ thuật ô tô: Ngành nghề có tương lai “đắt giá”\n',
        img: KTO,
        newsDate: '2025-12-20',
        categories: 'training',
        authors: 'admisstr',
        fields: 'tech',
        authorN: 'Phòng tổ chức hành chính',
      },

      {
        id: '9',
        newsTit: 'Thiết kế đồ họa: Ngành học tiềm năng',
        desc: 'Thiết kế đồ họa: Ngành học tiềm năng\n',
        img: TKDH,
        newsDate: '2026-04-25',
        categories: 'training',
        authors: 'admisstr',
        fields: 'office',
        authorN: 'Phòng tổ chức hành chính',
      },

      {
        id: '10',
        newsTit: 'Tuyển sinh đào tạo - năm học 2026-2027',
        desc: 'Trường Trung cấp Tin học Kinh tế Sài Gòn thông báo tuyển sinh đào tạo năm học 2026 - 2027....',
        img: TSDT,
        newsDate: '2026-05-12',
        typeTit: 'Tuyển sinh',
        categories: 'admissions',
        authors: 'admiss',
        authorN: 'Phòng tuyển sinh',
      },

      {
        id: '11',
        newsTit: 'Kế hoạch tuyển sinh - năm học 2026-2027',
        desc: 'Trường Trung cấp Tin học Kinh tế Sài Gòn ban hành Kế hoạch tuyển sinh đào tạo năm học 2026 - 2027....',
        img: KHTS,
        newsDate: '2026-05-11',
        typeTit: 'Tuyển sinh',
        categories: 'admissions',
        authors: 'admiss',
        authorN: 'Phòng tuyển sinh',
      },

      {
        id: '12',
        newsTit: 'Những lý do bạn nên theo học ngành \nTin học ứng dụng',
        desc: 'Xã hội ngày càng phát triển đi cùng với đó là sự tiến bộ của khoa học.....',
        img: LDTHN,
        newsDate: '2026-02-26',
        categories: 'career',
        authors: 'admisstr',
        fields: 'office',
        authorN: 'Phòng tổ chức hành chính',
      },

      {
        id: '13',
        newsTit: 'Đủ điểm đậu đại học vẫn lựa chọn \n học Trung cấp nghề',
        desc: 'Học cao đẳng, trung cấp nghề không còn là đường vòng mà là đường.....',
        img: LDHNN,
        newsDate: '2026-01-03',
        categories: 'career',
        authors: 'admisstr',
        authorN: 'Phòng tổ chức hành chính',
      },

      {
        id: '14',
        newsTit: 'Hợp tác đào tạo - Tuyển sinh ngành Luật – ĐH Mở Hà Nội 2026',
        desc: 'Tuyển sinh ngành Luật – ĐH Mở Hà Nội 2022',
        img: LTS,
        newsDate: '2026-02-02',
        categories: 'partnership',
        authors: 'offTrain',
        authorN: 'Phòng đào tạo',
        typeTit: 'HỢP TÁC ĐÀO TẠO',
      },

      {
        id: '15',
        newsTit:
          'EHOU tổ chức lớp học chuyên đề: “Tìm hiểu Luật doanh nghiệp và các hợp đồng kinh tế”',
        desc: 'EHOU tổ chức lớp học chuyên đề:\n “Tìm hiểu Luật doanh nghiệp và các hợp đồng kinh tế”',
        img: HTDHM,
        newsDate: '2026-01-05',
        categories: 'partnership',
        authors: 'offTrain',
        authorN: 'Phòng đào tạo',
      },
      {
        id: '16',
        newsTit: 'Hơn 17.000 học sinh TP.HCM bỏ thi lớp 10',
        desc: '(PLO)- Qua thống kê, có 17.826 học sinh lớp 9 tại TP.HCM bỏ tham dự kỳ thi lớp 10 năm học 2026-2027.',
        img: NOEX,
        newsDate: '2026-05-11',
        categories: 'career',
        authorN: 'NGUYỄN QUYÊN',
        authors: 'individual',
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
  authorN: string;
  categories: NewsCategory;
  authors: AuthorNewsType;
  fields?: FieldType;
};

export type NewsCategory = 'career' | 'training' | 'partnership' | 'admissions';
export type AuthorNewsType = 'admiss' | 'admisstr' | 'individual' | 'offTrain';
export type FieldType = 'tech' | 'office';
