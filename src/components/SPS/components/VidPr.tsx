import ArrowRightOutlined from '@ant-design/icons/ArrowRightOutlined';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { VidPrLayoutProps } from '../types';

const VidPr: React.FC<VidPrLayoutProps> = (props) => {
  const {
    desVid,
    titVid,
    bottomTit,
    vidLink,
    tabletVid,
    miniSc,
    dark,
    navigateGo,
    mb,
    imgWait,
  } = props;

  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement | null>(null);
  const [play, setPlay] = useState(false);

  const pxClass = useMemo(() => {
    if (mb || miniSc) return '';
    if (tabletVid) return 'px-10';
    return 'px-4';
  }, [mb, miniSc, tabletVid]);

  const imgSize = useMemo(() => {
    if (mb) return 'w-14 h-14';
    if (tabletVid) return 'w-18 h-18';
    if (miniSc) return 'w-13 h-13';
    return 'w-15 h-15';
  }, [mb, tabletVid, miniSc]);

  const textClass = useMemo(() => {
    if (mb) return 'mt-8 pl-2';
    if (tabletVid) return 'mt-10 text-2xl px-2';
    return 'mt-10 text-lg px-2';
  }, [mb, tabletVid]);

  const handleNavigate = useCallback(() => {
    if (navigateGo) navigate(navigateGo);
  }, [navigate, navigateGo]);

  return (
    <div className='w-full flex flex-col md:flex-row items-start justify-between gap-6'>
      {/* VIDEO */}
      {vidLink && (
        <div
          ref={ref}
          className={`${mb || tabletVid ? 'w-full px-7' : 'flex-[2] pl-20'}`}
        >
          <div className='relative w-full aspect-video'>
            {!play ? (
              <img
                src={imgWait}
                className='w-full h-full object-cover rounded-xl cursor-pointer'
                onClick={() => setPlay(true)}
                alt='vidpr'
              />
            ) : (
              <iframe
                src={vidLink}
                className='w-full h-full rounded-xl'
                allowFullScreen
              />
            )}
          </div>
        </div>
      )}

      {/* CONTENT */}
      <div className='flex-[1.5] mt-5'>
        <div className='px-5'>
          {/* HEADER */}
          <div
            className={`bg-[#2b2f6b] py-3 rounded-xl flex items-center justify-between ${pxClass}`}
          >
            <h4
              className={`m-0 text-[#ffd58a] ${
                mb || miniSc ? 'whitespace-pre-line text-base' : 'text-lg'
              }`}
            >
              {titVid}
            </h4>

            <img
              src='https://www.vlu.edu.vn/images/section-1-pattern.svg'
              className={imgSize}
              loading='lazy'
              alt='vidprzz'
            />
          </div>

          {/* DESCRIPTION */}
          <p
            className={`mb-8 block text-start ${textClass}`}
            style={{ color: dark ? 'white' : '#2d334d' }}
          >
            {desVid}
          </p>

          {/* BUTTON */}
          {bottomTit && navigateGo && (
            <div
              className={`flex ${
                mb || tabletVid ? 'justify-center' : 'justify-start'
              } items-center`}
            >
              <button
                onClick={handleNavigate}
                className='flex items-center gap-2 bg-transparent border-none cursor-pointer'
              >
                <span className={`text-lg ${dark ? 'text-white' : ''}`}>
                  {bottomTit}
                </span>

                <span className='bg-red-600 text-white rounded-full p-2 flex items-center justify-center'>
                  <ArrowRightOutlined />
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VidPr;
