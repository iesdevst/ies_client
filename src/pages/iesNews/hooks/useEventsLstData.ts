import { useMemo } from 'react';
import EVAI from '@/assets/imgs/events_ai.png';
import HDHN2204 from '@/assets/imgs/hdhn_n2204_event.jpg';
import MISA from '@/assets/imgs/top_str_misa.jpg';
import THTN from '@/assets/imgs/top_str_thtn.jpg';

export const useEventLstData = (): { data: Array<EventLstData> } => {
  const data = useMemo<Array<EventLstData>>(
    () => [
      {
        id: '1',
        eventTit: '📌 HOẠT ĐỘNG HƯỚNG NGHIỆP NGÀY 22/04/2026',
        desc: 'Ngày 22/04/2026, Trường Trung cấp Tin học Kinh tế Sài Gòn đã vinh dự được .........',
        img: HDHN2204,
      },
      {
        id: '2',
        eventTit: 'IES workshop\n Claude Code - AI agent',
        desc: 'Xây dựng Web Dashboard với Claude Code.........',
        img: EVAI,
      },
      {
        id: '3',
        eventTit:
          'Sinh viên IESCollege hấp dẫn với mô hình “Thực học – Thực nghiệp”',
        desc: 'Sinh viên IESCollege hấp dẫn với mô hình “Thực học – Thực nghiệp”\n',
        img: THTN,
      },
      {
        id: '4',
        eventTit:
          'Hợp tác đào tạo giữa công ty CP MISA và trường Trung cấp Tin học - Kinh tế Sài Gòn',
        desc: 'Hợp tác đào tạo giữa công ty CP MISA và trường trung cấp Tin học-Kinh tế Sài Gòn\n',
        img: MISA,
      },
    ],
    [],
  );
  return { data };
};

export type EventLstData = {
  id: string;
  eventTit: string;
  desc: string;
  img: string;
};
