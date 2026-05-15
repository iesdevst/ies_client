import { useMemo } from 'react';
import EVTSTS from '@/assets/imgs/ev_thcsts.webp';
import EVAI from '@/assets/imgs/events_ai.webp';
import EVTS1 from '@/assets/imgs/evts_p1.webp';
import MISA from '@/assets/imgs/top_str_misa.webp';
import THTN from '@/assets/imgs/top_str_thtn.webp';

export const useEventLstData = (): { data: Array<EventLstData> } => {
  const data = useMemo<Array<EventLstData>>(
    () => [
      {
        id: '1',
        eventTit: 'HOẠT ĐỘNG TUYỂN SINH & HƯỚNG NGHIỆP NGÀY 22/04/2026',
        desc: 'Ngày 22/04/2026, Trường Trung cấp Tin học Kinh tế Sài Gòn đã vinh dự được .........',
        img: EVTS1,
        evDate: '2026-04-22',
        categories: 'admissions',
        authors: 'admiss',
        authorN: 'Phòng tuyển sinh',
      },
      {
        id: '2',
        eventTit: 'IES workshop\n Claude Code - AI agent',
        desc: 'Xây dựng Web Dashboard với Claude Code.........',
        img: EVAI,
        evDate: '2026-04-14',
        categories: 'workshop',
        authors: 'admisstr',
        authorN: 'Phòng hành chính',
      },
      {
        id: '3',
        eventTit:
          'Sinh viên IESCollege hấp dẫn với mô hình “Thực học – Thực nghiệp”',
        desc: 'Sinh viên IESCollege hấp dẫn với mô hình “Thực học – Thực nghiệp”\n',
        img: THTN,
        evDate: '2025-12-29',
        categories: 'career',
        authors: 'admisstr',
        authorN: 'Phòng hành chính',
      },
      {
        id: '4',
        eventTit:
          'Hợp tác đào tạo giữa công ty CP MISA và trường Trung cấp Tin học - Kinh tế Sài Gòn',
        desc: 'Hợp tác đào tạo giữa công ty CP MISA và trường trung cấp Tin học-Kinh tế Sài Gòn\n',
        img: MISA,
        evDate: '2025-11-27',
        categories: 'partnership',
        authors: 'offTrain',
        authorN: 'Phòng đào tạo',
      },
      {
        id: '5',
        eventTit:
          'TĂNG CƯỜNG HƯỚNG NGHIỆP cho học sinh lớp 9 tại trường THCS Tân Sơn',
        desc: 'Vừa qua, Trường Trung cấp Tin học Kinh tế Sài Gòn đã phối hợp tổ chức chương trình tư vấn .....',
        img: EVTSTS,
        evDate: '2026-05-06',
        categories: 'admissions',
        authors: 'admiss',
        authorN: 'Phòng tuyển sinh',
      },
    ],
    [],
  );
  return { data };
};

export type EventLstData = {
  id: string;
  eventTit: string;
  authorN: string;
  desc: string;
  img: string;
  evDate: string;
  categories: EvsCategory;
  authors: AuthorEvsType;
};

export type EvsCategory = 'career' | 'workshop' | 'partnership' | 'admissions';
export type AuthorEvsType = 'admiss' | 'admisstr' | 'offTrain';
