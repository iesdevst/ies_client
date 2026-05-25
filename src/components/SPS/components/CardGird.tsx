import RightOutlined from '@ant-design/icons/RightOutlined';
import Button from 'antd/es/button';
import Card from 'antd/es/card';
import Col from 'antd/es/col';
import Flex from 'antd/es/flex';
import List from 'antd/es/list';
import Row from 'antd/es/row';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../iesCl.module.scss';
import type { CardGirdProps } from '../types';
import { Text, Title } from '@/components/AntTypography';
import type { CardUp } from '@/pages/home/hooks';

const CardGird: React.FC<CardGirdProps> = (props) => {
  const { downCard, upCard, topicTxt, butTxt, dk, mb, tl, title, dark } = props;
  const navigate = useNavigate();
  const lightTopic = `
!bg-gradient-to-br
from-[#dcecff]
via-[#d4e7ff]
to-[#89b4e7]
border border-white/40
backdrop-blur-xl
shadow-[0_8px_30px_rgba(120,160,255,0.15)]
hover:scale-[1.02]
hover:shadow-[0_12px_40px_rgba(120,160,255,0.22)]
transition-all
duration-300
`;

  const darkTopic = `!bg-gradient-to-br from-[#d7d7db] via-[#8f949b] to-[#3a3d42] 
    hover:scale-[1.02]
hover:shadow-[0_12px_40px_rgba(120,160,255,0.22)]
transition-all
duration-300
    `;

  const getTopicClass = (card: CardUp) => `
!mx-3
!rounded-2xl
!h-full
!border-none
!px-5

${!card.topic && dk ? styles.cardHover : ''}

${
  card.topic
    ? `!py-7 ${dark ? darkTopic : lightTopic}`
    : dark
      ? '!pt-6 !bg-[#1b1b1b]'
      : '!pt-6 !bg-gradient-to-br from-[#243b5a] via-[#2e4d73] to-[#3a5f8f]'
}
`;
  return (
    <section>
      {/* TITLE */}
      <Title className='!m-0 !mb-7 !ml-3'>{title}</Title>

      {/* TOP LAYOUT */}
      <Row>
        {upCard.map((card) => (
          <Col
            key={card.cTit}
            xs={24}
            lg={card.topic ? 16 : 8}
            className={`${tl ? '!my-3' : mb ? '!my-3' : ''}`}
          >
            <Card
              className={`
    relative overflow-hidden hover:!cursor-pointer
    ${getTopicClass(card)}
  `}
              onClick={() => navigate(card.goTo)}
            >
              <Flex
                vertical={!card.topic || mb}
                justify='space-between'
                gap={20}
                style={{ height: '100%' }}
              >
                {/* CONTENT */}
                <div
                  style={{
                    flex: card.topic ? 7 : '',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: card.topic ? 'space-between' : '',
                  }}
                >
                  <div className='max-w-xl'>
                    <Title
                      level={4}
                      className={`${card.topic ? '!text-black' : '!text-white'}`}
                    >
                      {card.cTit}
                    </Title>

                    <Text color={card.topic ? 'black' : '#9ca3af'}>
                      {card.decs}
                    </Text>
                  </div>

                  {card.topic && (
                    <div>
                      <List
                        dataSource={topicTxt}
                        renderItem={(item, index) => (
                          <List.Item
                            key={index}
                            className='!border-none !p-0 !pt-2'
                          >
                            <Text color='black'>{item}</Text>
                          </List.Item>
                        )}
                      />
                      <Button
                        type='text'
                        className='!p-0 !text-black !font-semibold !mt-3'
                      >
                        {butTxt} <RightOutlined className='!text-xs' />
                      </Button>
                    </div>
                  )}
                </div>

                {/* IMAGE */}
                <div
                  style={{
                    flex: card.topic ? 4 : '',
                    borderRadius: 16,
                    overflow: 'hidden',
                  }}
                >
                  <div>
                    <img
                      src={card.cImg}
                      alt={card.cTit}
                      style={{
                        width: '100%',
                        height: card.topic && mb ? 290 : card.topic ? 360 : 220,
                        objectFit: 'cover',
                        borderRadius: 16,
                      }}
                      className={`${!card.topic && dk ? styles.cardImg : ''}`}
                    />
                  </div>
                  {!card.topic && (
                    <Button
                      type='text'
                      className={`!p-0 !text-white !font-semibold !my-4 ${dk ? styles.cardBtn : ''}`}
                    >
                      {butTxt} <RightOutlined className='!text-xs' />
                    </Button>
                  )}
                </div>
              </Flex>
            </Card>
          </Col>
        ))}
      </Row>

      {/* BOTTOM GRID */}
      <Row style={{ marginTop: 20 }}>
        {downCard.map((card, index) => (
          <Col
            xs={24}
            md={24}
            lg={8}
            key={index}
            className={`${tl ? '!mb-7' : mb ? '!mb-7' : ''}`}
          >
            <Card
              className={`${dk ? styles.cardHover : ''} hover:!cursor-pointer !mx-3 !rounded-2xl !h-full !border-none !pt-6 !pb-4 !px-5 ${dark ? '!bg-[#1b1b1b]' : '!bg-gradient-to-br from-[#243b5a] via-[#2e4d73] to-[#3a5f8f]'}`}
              onClick={() => navigate(card.goTo)}
            >
              <div>
                <Title level={4} className='!text-white'>
                  {card.tit}
                </Title>

                <Text color='#9ca3af'>{card.des}</Text>
              </div>

              <div>
                <div
                  style={{
                    borderRadius: 16,
                    overflow: 'hidden',
                  }}
                  className='!my-5'
                >
                  <img
                    src={card.img}
                    alt={card.id}
                    style={{
                      width: '100%',
                      height: 220,
                      objectFit: 'cover',
                    }}
                    className={`${dk ? styles.cardImg : ''}`}
                  />
                </div>

                <Button
                  type='text'
                  className={`card-btn !p-0 !text-white !font-semibold ${dk ? styles.cardBtn : ''}`}
                >
                  {butTxt} <RightOutlined className='!text-xs' />
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default CardGird;
