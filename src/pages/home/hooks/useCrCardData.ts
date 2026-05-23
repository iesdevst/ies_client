import { useMemo } from 'react';
// import CNTT from '@/assets/imgs/cntt_hn.webp';
// import CC from '@/assets/imgs/ctm_hn_card.webp';
// import KTDN from '@/assets/imgs/ktdn_hn.webp';
// import MKT from '@/assets/imgs/mkt_hn.webp';
// import MC from '@/assets/imgs/mtk_hn_card.webp';
// import QLDN from '@/assets/imgs/qldn_hn.webp';
// import QLKS from '@/assets/imgs/qlks_hn.webp';
// import { default as TC, default as THDU } from '@/assets/imgs/thud_hn.webp';
// import TKVP from '@/assets/imgs/tkvp_hn.webp';
// import VTK from '@/assets/imgs/vtk_hn.webp';

import HOU from '@/assets/imgs/hou_hl.webp';

export const useCrUpData = (): { data: Array<CardUp> } => {
  // const { t } = useTranslation('careerGuid');
  const data = useMemo<Array<CardUp>>(
    () => [
      {
        id: '1',
        cTit: 'Tối ưu hoá vận hành cho đơn vị hướng nghiệp',
        cImg: HOU,
        decs: 'Triển khai giải pháp chuyển đổi số để tự động hóa quy trình hướng nghiệp, cá nhân hóa lộ trình nghề nghiệp và nâng cao hiệu quả tư vấn cho sinh viên.',
        topic: true,
      },
      {
        id: '2',
        cTit: 'Bùng nổ kỷ nguyên số, Công nghệ Thông tin',
        cImg: HOU,
        decs: 'Trang bị kỹ năng tin học thực tiễn nhằm nâng cao hiệu suất học tập, làm việc và thích ứng với môi trường số hiện đại.',
        topic: false,
      },
      // { id: '3', cTit: t('slide3'), cImg: TKVP },
      // { id: '4', cTit: t('slide4'), cImg: QLKS },
      // { id: '5', cTit: t('slide5'), cImg: MKT },
      // { id: '6', cTit: t('slide6'), cImg: QLDN },
      // { id: '7', cTit: t('slide7'), cImg: VTK },
      // { id: '8', cTit: t('slide8'), cImg: KTDN },
    ],
    [],
  );
  return { data };
};

export type CardUp = {
  id: string;
  cTit: string;
  cImg: string;
  decs: string;
  topic: boolean;
};

export const useCrDownData = (): { data: Array<CardDown> } => {
  // const { t } = useTranslation('careerGuid');
  const data = useMemo<Array<CardDown>>(
    () => [
      {
        id: '1',
        img: HOU,
        des: 'Trang bị kỹ năng tin học thực tiễn nhằm nâng cao hiệu suất học tập, làm việc và thích ứng với môi trường số hiện đại.',
        tit: 'Tin học ứng dụng cho học tập và doanh nghiệp',
      },
      {
        id: '2',
        img: HOU,
        tit: 'Thiết kế đồ họa sáng tạo cho truyền thông số',
        des: 'Phát triển tư duy sáng tạo và kỹ năng thiết kế hiện đại nhằm xây dựng hình ảnh thương hiệu và nội dung trực quan chuyên nghiệp.',
      },
      {
        id: '3',
        img: HOU,
        des: 'Ứng dụng chiến lược marketing số và phân tích dữ liệu để tăng khả năng tiếp cận khách hàng và nâng cao hiệu quả truyền thông.',
        tit: 'Marketing hiện đại cho kỷ nguyên số',
      },
    ],
    [],
  );
  return { data };
};

export type CardDown = {
  id: string;
  img: string;
  des: string;
  tit: string;
};
