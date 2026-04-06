import EVAI from '@/assets/imgs/events_ai.png';
import MISA from '@/assets/imgs/top_str_misa.jpg';
import THTN from '@/assets/imgs/top_str_thtn.jpg';

export const useEventLstData = (): { data: Array<EventLstData> } => {
  const data: Array<EventLstData> = [
    {
      id: '1',
      eventTit: 'IES workshop\n Claude Code - AI agent',
      desc: 'Xây dựng Web Dashboard với Claude Code.........',
      img: EVAI,
    },
    {
      id: '2',
      eventTit:
        'Sinh viên IESCollege hấp dẫn với mô hình “Thực học – Thực nghiệp”',
      desc: 'Sinh viên IESCollege hấp dẫn với mô hình “Thực học – Thực nghiệp”\n',
      img: THTN,
    },
    {
      id: '3',
      eventTit:
        'Hợp tác đào tạo giữa công ty CP MISA và trường Trung cấp Tin học - Kinh tế Sài Gòn',
      desc: 'Hợp tác đào tạo giữa công ty CP MISA và trường trung cấp Tin học-Kinh tế Sài Gòn\n',
      img: MISA,
    },
  ];
  return { data };
};

export type EventLstData = {
  id: string;
  eventTit: string;
  desc: string;
  img: string;
};
