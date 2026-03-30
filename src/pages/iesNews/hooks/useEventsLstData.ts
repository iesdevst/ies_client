import EVAI from '@/assets/imgs/events_ai.png';

export const useEventLstData = (): { data: Array<EventLstData> } => {
  const data: Array<EventLstData> = [
    {
      id: '1',
      eventTit: 'IES workshop\n Claude Code - AI agent',
      desc: 'Xây dựng Web Dashboard với Claude Code.........',
      img: EVAI,
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
