import Image from 'antd/es/image';
import { useNavigate } from 'react-router-dom';
import AdmTable from './AdmTable';
import { renderBody } from './renderBody';
import FB from '@/assets/imgs/fb_logo.webp';
import LINKEDIN from '@/assets/imgs/linkedin_logo.webp';
import X from '@/assets/imgs/x_logo.webp';
import { Text, Title } from '@/components/AntTypography';
import type { NaiPageLayoutProps } from '@/components/SPS/types';
import { ROUTES } from '@/constants';
import type { EvsNavi } from '@/pages/iesNews/components/EvsLst';
import type { NewsNavi } from '@/pages/iesNews/components/NewsLst';

type SocialPlat = 'facebook' | 'linkedin' | 'x';

const NaiPage: React.FC<NaiPageLayoutProps> = (props) => {
  const {
    newsTit,
    ato,
    date,
    decs,
    decs2,
    imgBonus,
    img,
    linkTo,
    urlForShare,
    nOe,
    readOri,
    aut,
    time,
    share,
    lstNews,
    lstEvs,
    seeNews,
    seeEvs,
    recentNews,
    recentEv,
    children,
    dark = false,
    admTable,
    mb,
  } = props;

  const navigate = useNavigate();

  const readTime = Math.max(
    1,
    Math.ceil(((decs?.length ?? 0) + (decs2?.length ?? 0)) / 1200),
  );

  const socialShare = [
    { key: 'facebook' as SocialPlat, icon: FB, alt: 'facebook-share' },
    { key: 'x' as SocialPlat, icon: X, alt: 'x-share' },
    { key: 'linkedin' as SocialPlat, icon: LINKEDIN, alt: 'linkedin-share' },
  ] as const;

  const handleShare = async (platform: SocialPlat) => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlForShare)}`,
      x: `https://twitter.com/intent/tweet?url=${encodeURIComponent(urlForShare)}&text=${encodeURIComponent(newsTit ?? '')}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(urlForShare)}`,
    };
    if (mb && navigator.share) {
      await navigator.share({ title: newsTit, url: urlForShare });
      return;
    }
    window.open(urls[platform], '_blank');
  };

  const hdlNaviNews = (navi: NewsNavi) => {
    const p = new URLSearchParams({
      authorN: navi.authorN,
      newsDate: navi.newsDate,
    });
    navigate(`${ROUTES.NEWS_DETAILS}/${navi.id}?${p.toString()}`);
  };

  const hdlNaviEvs = (navi: EvsNavi) => {
    const p = new URLSearchParams({
      authorN: navi.authorN,
      evDate: navi.evDate,
    });
    navigate(`${ROUTES.EVENTS_DETAILS}/${navi.id}?${p.toString()}`);
  };

  const card = dark
    ? 'bg-[#1E1E35] border-[#3D3B5C]'
    : 'bg-white border-[#E5E3F2]';
  const divider = dark ? 'border-[#3D3B5C]' : 'border-[#E5E3F2]';
  const headingColor = dark ? '#E8E7F5' : '#1A1A2E';
  const mutedColor = dark ? '#9896B4' : '#6B7280';

  return (
    <div
      className={`px-4 sm:px-8 lg:px-16 xl:px-20 py-8 lg:py-12 ${dark ? 'bg-[#0D0D1A]' : 'bg-[#e9e7f7]'}`}
    >
      {/* ── ARTICLE HEADER CARD ── */}
      <div className={`rounded-2xl p-7 lg:p-10 mb-7 border shadow-sm ${card}`}>
        <div className='flex items-center gap-1.5 w-fit bg-[#474669] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-5'>
          <div className='w-1.5 h-1.5 bg-[#A8A6D0] rounded-full' />
          {nOe}
        </div>

        <Title level={1} style={{ color: headingColor }} className='mb-7!'>
          {newsTit}
        </Title>

        <div
          className={`flex flex-wrap items-center gap-4 sm:gap-5 pt-5 border-t ${divider}`}
        >
          <div className={`flex flex-col pr-5 border-r ${divider}`}>
            <Text
              color={mutedColor}
              className='text-[10px]! font-bold! uppercase! tracking-widest! mb-0.5! block!'
            >
              {aut}
            </Text>
            <Text
              color={headingColor}
              className='text-sm! font-semibold! block!'
            >
              {ato}
            </Text>
          </div>

          <div className='flex flex-col mr-auto'>
            <Text
              color={mutedColor}
              className='text-[10px]! font-bold! uppercase! tracking-widest! mb-0.5! block!'
            >
              {time}
            </Text>
            <Text
              color={headingColor}
              className='text-sm! font-semibold! block!'
            >
              {date}
            </Text>
          </div>

          <Text color={mutedColor} className='text-xs! hidden! sm:block!'>
            📖 {readTime} phút đọc
          </Text>

          <div className='flex items-center gap-2'>
            <Text
              color={mutedColor}
              className='text-[10px]! font-bold! uppercase! tracking-widest! mr-1!'
            >
              {share}
            </Text>
            {socialShare.map((item) => (
              <button
                key={item.key}
                onClick={() => handleShare(item.key)}
                className='cursor-pointer p-0 border-none bg-transparent'
              >
                <Image
                  src={item.icon}
                  alt={item.alt}
                  width={34}
                  height={34}
                  preview={false}
                  loading='lazy'
                  className='rounded-full! hover:scale-110! transition-transform!'
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── HERO IMAGE ── */}
      <div className='mb-9 rounded-2xl overflow-hidden shadow-lg relative'>
        <img
          src={img}
          alt={newsTit}
          loading='lazy'
          className='w-full h-[220px] sm:h-[380px] lg:h-[480px] object-cover block'
        />
        <div className='absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/65 to-transparent px-5 pb-4 pt-16 pointer-events-none'>
          <Text
            color='rgba(255,255,255,0.75)'
            className='text-xs! leading-relaxed! line-clamp-2! block!'
          >
            {newsTit}
          </Text>
        </div>
      </div>

      {/* ── CONTENT GRID ── */}
      <div className='grid grid-cols-1 lg:grid-cols-[1fr_330px] gap-7'>
        {/* MAIN CONTENT */}
        <div className={`rounded-2xl p-7 lg:p-10 border shadow-sm ${card}`}>
          {renderBody(decs, dark)}

          {admTable && <AdmTable admTable={admTable} dark={dark} />}

          {imgBonus?.map((src, i) => (
            <Image
              key={i}
              src={src}
              preview={false}
              alt={`bonus-${i}`}
              loading='lazy'
              className='w-full! rounded-xl! mb-7! block!'
            />
          ))}

          {decs2 && renderBody(decs2, dark)}

          {linkTo && (
            <a
              href={linkTo}
              target='_blank'
              rel='noopener noreferrer'
              className={`${dark ? 'text-white!' : 'text-black!'} inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full text-sm font-semibold transition-colors no-underline!`}
            >
              {readOri}&nbsp;→
            </a>
          )}
        </div>

        {/* SIDEBAR */}
        <div className='flex flex-col gap-6'>
          {/* Recent News */}
          <div className={`rounded-2xl p-6 border shadow-sm ${card}`}>
            <Title
              level={4}
              className='pb-3 mb-4 border-b-2 border-[#474669] text-[#474669]'
            >
              {lstNews}
            </Title>
            <div className='flex flex-col'>
              {recentNews.map((item, i) => (
                <div
                  key={item.id}
                  onClick={() =>
                    hdlNaviNews({
                      id: item.id,
                      authorN: item.authorN,
                      newsDate: item.newsDate,
                    })
                  }
                  className={`flex gap-3 py-3 cursor-pointer hover:opacity-80 transition-opacity ${i < recentNews.length - 1 ? `border-b ${divider}` : ''}`}
                >
                  <div className='w-[80px] h-[54px] rounded-lg overflow-hidden shrink-0'>
                    <img
                      src={item.img}
                      alt={item.newsTit}
                      loading='lazy'
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div className='flex-1 min-w-0'>
                    {item.typeTit && (
                      <Text
                        color='#D94F3F'
                        className='text-[10px]! font-bold! uppercase! tracking-wide! mb-1! block!'
                      >
                        {item.typeTit}
                      </Text>
                    )}
                    <Text
                      color={headingColor}
                      className='text-[13px]! font-semibold! leading-snug! line-clamp-2! block!'
                    >
                      {item.newsTit}
                    </Text>
                    <Text
                      color={mutedColor}
                      className='text-[11px]! mt-1! block!'
                    >
                      {item.newsDate}
                    </Text>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => navigate(ROUTES.NEWS)}
              className='w-full mt-4 py-2.5 border border-[#474669] text-[#474669] rounded-full text-[13px] font-semibold hover:bg-[#474669] hover:text-white transition-colors cursor-pointer bg-transparent'
            >
              {seeNews} →
            </button>
          </div>

          {/* Recent Events */}
          <div className={`rounded-2xl p-6 border shadow-sm ${card}`}>
            <Title
              level={4}
              className='pb-3 mb-4 border-b-2 border-[#474669] text-[#474669]'
            >
              {lstEvs}
            </Title>
            <div className='flex flex-col'>
              {recentEv.map((item, i) => (
                <div
                  key={item.id}
                  onClick={() =>
                    hdlNaviEvs({
                      id: item.id,
                      authorN: item.authorN,
                      evDate: item.evDate,
                    })
                  }
                  className={`flex gap-3 py-3 cursor-pointer hover:opacity-80 transition-opacity ${i < recentEv.length - 1 ? `border-b ${divider}` : ''}`}
                >
                  <div className='w-[80px] h-[54px] rounded-lg overflow-hidden shrink-0'>
                    <img
                      src={item.img}
                      alt={item.eventTit}
                      loading='lazy'
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div className='flex-1 min-w-0'>
                    <Text color={headingColor} className='block!'>
                      {item.eventTit}
                    </Text>
                    <Text
                      color={mutedColor}
                      className='text-[11px]! mt-1! block!'
                    >
                      {item.evDate}
                    </Text>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => navigate(ROUTES.EVENTS)}
              className='w-full mt-4 py-2.5 border border-[#474669] text-[#474669] rounded-full text-[13px] font-semibold hover:bg-[#474669] hover:text-white transition-colors cursor-pointer bg-transparent'
            >
              {seeEvs} →
            </button>
          </div>
        </div>
      </div>

      {/* ── DETAILS BONUS ── */}
      {children && (
        <div
          className={`mt-8 rounded-2xl p-7 lg:p-10 border shadow-sm ${card}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default NaiPage;
