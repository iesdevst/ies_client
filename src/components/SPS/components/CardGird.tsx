import RightOutlined from '@ant-design/icons/RightOutlined';
import Button from 'antd/es/button';
import Card from 'antd/es/card';
import Col from 'antd/es/col';
import Flex from 'antd/es/flex';
import List from 'antd/es/list';
import Row from 'antd/es/row';
import React from 'react';
import styles from '../iesCl.module.scss';
import type { CardGirdProps } from '../types';
import { Text, Title } from '@/components/AntTypography';

const CardGird: React.FC<CardGirdProps> = (props) => {
  const { downCard, upCard, topicTxt, butTxt } = props;
  return (
    <section>
      {/* TOP LAYOUT */}
      <Row>
        {upCard.map((card) => (
          <Col key={card.cTit} xs={24} lg={card.topic ? 16 : 8}>
            <Card
              className={`!mx-3 !bg-[#1b1b1b] !rounded-2xl !h-full !border-none !px-5 ${card.topic ? '!pt-7 !pb-5' : '!pt-6'}`}
            >
              <Flex
                vertical={!card.topic}
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
                    <Title level={4} className='!text-white'>
                      {card.cTit}
                    </Title>

                    <Text color='#9ca3af'>{card.decs}</Text>
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
                            <Text color='white'>{item}</Text>
                          </List.Item>
                        )}
                      />
                      <Button
                        type='text'
                        className='!p-0 !text-white !font-semibold !mt-3'
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
                        height: card.topic ? 360 : 220,
                        objectFit: 'cover',
                        borderRadius: 16,
                      }}
                    />
                  </div>
                  {!card.topic && (
                    <Button
                      type='text'
                      className='!p-0 !text-white !font-semibold !mt-4'
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
          <Col xs={24} md={12} lg={8} key={index}>
            <Card
              className={`${styles.cardHover} !mx-3 !bg-[#1b1b1b] !rounded-2xl !h-full !border-none !pt-6 !pb-4 !px-5`}
            >
              <div>
                <Title
                  level={4}
                  style={{
                    color: 'white',
                    marginBottom: 12,
                    fontSize: 20,
                  }}
                >
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
                >
                  <img
                    src={card.img}
                    alt={card.id}
                    style={{
                      width: '100%',
                      height: 220,
                      objectFit: 'cover',
                    }}
                    className={styles.cardImg}
                  />
                </div>

                {/* BUTTON (luôn render nhưng animate) */}
                <Button
                  type='text'
                  className={`card-btn !p-0 !text-white !font-semibold !mt-4 ${styles.cardBtn}`}
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
