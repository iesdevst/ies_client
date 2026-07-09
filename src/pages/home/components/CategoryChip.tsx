import { Text } from '@/components/AntTypography';
import { accentForSurface } from '@/constants';

export interface CategoryChipProps {
  label: string;
  color: string;
  dark?: boolean;
  className?: string;
}

const CategoryChip: React.FC<CategoryChipProps> = (props) => {
  const { label, color, dark, className } = props;
  const fg = accentForSurface(color, dark);

  return (
    <Text
      color={fg}
      className={`inline-block! text-[11px]! font-bold! uppercase! tracking-wider! px-2.5! py-1! rounded-full! leading-none! ${className ?? ''}`}
      style={{ backgroundColor: `${color}1a` }}
    >
      {label}
    </Text>
  );
};

export default CategoryChip;
