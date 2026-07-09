import { Text, Title } from '@/components/AntTypography';

export function renderBody(text: string, dark: boolean): React.ReactNode[] {
  const textColor = dark ? '#C5C4DC' : '#374151';
  const headingColor = dark ? '#E8E7F5' : '#1A1A2E';
  const subColor = dark ? '#A8A6D0' : '#474669';

  const isRoman = (s: string) => /^[IVX]+\.\s+\S/.test(s);
  const isNumbered = (s: string) =>
    /^\d+\.\s+[A-ZÀÁÂĂẮĐ]/.test(s) && s.length < 100;
  const isBullet = (s: string) => /^[-–•+]\s/.test(s);
  const isAllCaps = (s: string) =>
    s.length > 4 && s.length < 100 && s === s.toUpperCase() && /\p{L}/u.test(s);

  const lines = text.split('\n');
  const nodes: React.ReactNode[] = [];
  const buf: string[] = [];
  let k = 0;

  const flush = () => {
    const t = buf.join(' ').trim();
    if (t) {
      nodes.push(
        <Text
          key={k++}
          color={textColor}
          className='text-[16.5px]! leading-[1.9]! mb-5! text-justify! block!'
        >
          {t}
        </Text>,
      );
    }
    buf.length = 0;
  };

  for (const raw of lines) {
    const line = raw.trim();

    if (!line) {
      flush();
      continue;
    }

    if (isRoman(line)) {
      flush();
      nodes.push(
        <Title
          key={k++}
          level={3}
          style={{ color: headingColor }}
          className='text-[17px]! font-bold! pl-3.5! border-l-[3px]! border-[#474669]! mt-8! mb-3.5!'
        >
          {line}
        </Title>,
      );
    } else if (isAllCaps(line)) {
      flush();
      nodes.push(
        <Title
          key={k++}
          level={4}
          style={{ color: subColor }}
          className='text-[12px]! font-black! uppercase! tracking-widest! mt-7! mb-2.5!'
        >
          {line}
        </Title>,
      );
    } else if (isNumbered(line)) {
      flush();
      nodes.push(
        <Title
          key={k++}
          level={4}
          style={{ color: headingColor }}
          className='text-[15px]! font-semibold! mt-5! mb-2!'
        >
          {line}
        </Title>,
      );
    } else if (isBullet(line)) {
      flush();
      nodes.push(
        <div key={k++} className='flex gap-2.5 mb-2'>
          <Text color='#474669' className='font-bold! mt-0.5 shrink-0 text-sm!'>
            ▸
          </Text>
          <Text color={textColor} className='text-[16px]! leading-[1.8]!'>
            {line.replace(/^[-–•+]\s/, '')}
          </Text>
        </div>,
      );
    } else {
      buf.push(line);
    }
  }

  flush();
  return nodes;
}
