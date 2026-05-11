import { useMemo } from 'react';
import EVAI from '@/assets/imgs/events_ai.webp';
import HDHN2204 from '@/assets/imgs/hdhn_n2204_event.webp';
import MISA from '@/assets/imgs/top_str_misa.webp';
import THTN from '@/assets/imgs/top_str_thtn.webp';

export const useEventLstData = (): { data: Array<EventLstData> } => {
  const data = useMemo<Array<EventLstData>>(
    () => [
      {
        id: '1',
        eventTit: '📌 HOẠT ĐỘNG HƯỚNG NGHIỆP NGÀY 22/04/2026',
        desc: 'Ngày 22/04/2026, Trường Trung cấp Tin học Kinh tế Sài Gòn đã vinh dự được .........',
        img: HDHN2204,
        evDate: '2026-04-22',
      },
      {
        id: '2',
        eventTit: 'IES workshop\n Claude Code - AI agent',
        desc: 'Xây dựng Web Dashboard với Claude Code.........',
        img: EVAI,
        evDate: '2026-04-01',
      },
      {
        id: '3',
        eventTit:
          'Sinh viên IESCollege hấp dẫn với mô hình “Thực học – Thực nghiệp”',
        desc: 'Sinh viên IESCollege hấp dẫn với mô hình “Thực học – Thực nghiệp”\n',
        img: THTN,
        evDate: '2025-12-29',
      },
      {
        id: '4',
        eventTit:
          'Hợp tác đào tạo giữa công ty CP MISA và trường Trung cấp Tin học - Kinh tế Sài Gòn',
        desc: 'Hợp tác đào tạo giữa công ty CP MISA và trường trung cấp Tin học-Kinh tế Sài Gòn\n',
        img: MISA,
        evDate: '2025-11-27',
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
  evDate: string;
};
