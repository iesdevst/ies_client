import ArrowUpOutlined from '@ant-design/icons/es/icons/ArrowUpOutlined';
import CategoryChip from './CategoryChip';
import { Text, Title } from '@/components/AntTypography';
import { IES_NAVY } from '@/constants';
import { NEWS_EVENT_CATEGORY_META } from '@/pages/iesNews/hooks/newsEventCategoryMeta';
import type { EventLstData } from '@/pages/iesNews/hooks/useEventsLstData';

export interface EventFeatureCardProps {
  item: EventLstData;
  dark: boolean;
  locale: string;
  onClick: () => void;
}

const formatEvDate = (dateStr: string, locale: string) => {
  const date = new Date(dateStr);
  return {
    day: new Intl.DateTimeFormat(locale, { day: '2-digit' }).format(date),
    month: new Intl.DateTimeFormat(locale, { month: 'short' }).format(date),
  };
};

const EventFeatureCard: React.FC<EventFeatureCardProps> = (props) => {
  const { item, dark, locale, onClick } = props;
  const meta = NEWS_EVENT_CATEGORY_META[item.categories];
  const { day, month } = formatEvDate(item.evDate, locale);

  return (
    <div
      onClick={onClick}
      className={`group rounded-xl! overflow-hidden border! cursor-pointer! shadow-none! transition-all! duration-300! hover:-translate-y-1! hover:shadow-xl! ${dark ? 'bg-[#201d2c]! border-[#332f45]!' : 'bg-white! border-[#e5e2ed]!'}`}
    >
      <div className='relative aspect-21/9 overflow-hidden'>
        <img
          src={item.img}
          alt={item.highlight}
          loading='lazy'
          className='h-full! w-full! object-cover! transition-transform! duration-300! group-hover:scale-105!'
        />
        <div
          className='absolute! top-0! left-0! h-1.5! w-full!'
          style={{ backgroundColor: meta.color }}
        />
        <div className='absolute! top-4! left-3! rounded-md! bg-white/90! px-2.5! py-1! text-center! leading-none! shadow-md!'>
          <Text
            color={IES_NAVY}
            className='block! text-base! font-bold! leading-none!'
          >
            {day}
          </Text>
          <Text
            color='#6b7280'
            className='block! text-[10px]! uppercase! tracking-wide! leading-none! mt-0.5!'
          >
            {month}
          </Text>
        </div>
      </div>

      <div className='px-5! py-4!'>
        <CategoryChip
          label={meta.label}
          color={meta.color}
          className='mb-2.5!'
        />
        <div className='flex! items-end! justify-between! gap-3! mt-3'>
          <Title
            level={4}
            className='leading-snug! m-0!'
            style={{
              color: dark ? '#fff' : IES_NAVY,
            }}
          >
            {item.highlight}
          </Title>
          <ArrowUpOutlined
            className='rotate-45! shrink-0! text-base!'
            style={{ color: meta.color }}
          />
        </div>
      </div>
    </div>
  );
};

export default EventFeatureCard;
