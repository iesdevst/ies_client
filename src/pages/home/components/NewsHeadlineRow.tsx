import CategoryChip from './CategoryChip';
import { Title } from '@/components/AntTypography';
import { IES_NAVY } from '@/constants';
import { NEWS_EVENT_CATEGORY_META } from '@/pages/iesNews/hooks/newsEventCategoryMeta';
import type { NewsLstData } from '@/pages/iesNews/hooks/useNewsLstData';

export interface NewsHeadlineRowProps {
  item: NewsLstData;
  dark: boolean;
  divider: boolean;
  onClick: () => void;
}

const NewsHeadlineRow: React.FC<NewsHeadlineRowProps> = (props) => {
  const { item, dark, divider, onClick } = props;
  const meta = NEWS_EVENT_CATEGORY_META[item.categories];

  return (
    <div
      onClick={onClick}
      className={`flex! flex-1! items-center! gap-5! py-5! cursor-pointer! group! ${divider ? `border-t! ${dark ? 'border-[#332f45]!' : 'border-[#e5e2ed]!'}` : ''}`}
    >
      <img
        src={item.img}
        alt={item.newsTit}
        loading='lazy'
        className='h-24! w-32! shrink-0! rounded-xl! object-cover!'
      />
      <div className='min-w-0!'>
        <CategoryChip
          label={meta.label}
          color={meta.color}
          dark={dark}
          className='mb-2!'
        />
        <Title
          level={4}
          className='m-0! mt-4.5! leading-snug! line-clamp-2! group-hover:underline!'
          style={{
            color: dark ? '#fff' : IES_NAVY,
          }}
        >
          {item.newsTit}
        </Title>
      </div>
    </div>
  );
};

export default NewsHeadlineRow;
