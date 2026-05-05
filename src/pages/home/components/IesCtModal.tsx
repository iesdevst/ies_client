import CloseCircleFilled from '@ant-design/icons/CloseCircleFilled';
import SendOutlined from '@ant-design/icons/SendOutlined';
import { type InputRef } from 'antd';
import Button from 'antd/es/button';
import Flex from 'antd/es/flex';
import Form from 'antd/es/form';
import Image from 'antd/es/image';
import Input from 'antd/es/input';
import Modal from 'antd/es/modal';
import Row from 'antd/es/row';
import Select from 'antd/es/select';
import Space from 'antd/es/space';
import { memo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { useIesCt } from '@/api';
import IES from '@/assets/imgs/ies_logo_notext.webp';
import { Title } from '@/components';
import { useNotifyStore } from '@/store';
import {
  enrollmentAreaOptions,
  LocationRegis,
  RegisterTrainingTypeEnum,
} from '@/utils';

interface IIesCtModal {
  openCtM: boolean;
  closeCtM: () => void;
}

const IesCtModal: React.FC<IIesCtModal> = (props) => {
  const { closeCtM, openCtM } = props;
  const { t } = useTranslation('iesCtModal');
  const { t: optionT } = useTranslation('options');
  const mb = useMediaQuery({ maxWidth: 767 });
  const [form] = Form.useForm();
  const phoneRef = useRef<InputRef>(null);
  const { pushBSQ, pushBEQ } = useNotifyStore();

  // mutation
  const { sendCtRq, isLoad } = useIesCt({
    onSuccess: () => {
      pushBSQ([
        {
          title: t('iesNoti'),
          des: t('ctSuc'),
        },
      ]);
      form.resetFields();
      closeCtM();
    },
    onError: () => {
      pushBEQ([
        {
          title: t('iesErr'),
          des: t('fail'),
        },
      ]);
    },
  });

  // phone number spec validation
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleBlur = () => {
    const value = phoneRef.current?.input?.value || '';
    if (value.length !== 9) {
      form.setFields([{ name: 'phoneNum', errors: [t('incrNumPhoneFormat')] }]);
    } else {
      form.setFields([{ name: 'phoneNum', errors: [] }]);
      form.setFieldsValue({ phoneNum: value });
    }
  };

  const hdlCtSend = (values: IesCtFormVra) => {
    const fullPhone = `${values.countryCode}${values.phoneNum}`;
    sendCtRq({
      contactType: RegisterTrainingTypeEnum.IesContact,
      name: values.name,
      phone: fullPhone,
      email: values.email,
      locationAdvice: values.ctLocation,
      adviceContent: values.adviceContent,
    });
  };

  return (
    <Modal
      open={openCtM}
      closable={false}
      maskClosable={false}
      keyboard={false}
      footer={false}
      title={
        <Flex justify='space-between' align='center' className='!px-5 !py-3'>
          <Row align={'middle'} className='gap-x-1.5'>
            <Image
              src={IES}
              preview={false}
              className='!w-15 !h-10'
              loading='lazy'
              alt='iesct'
            />
            <Title className='!m-0 !text-blue-500' level={3}>
              {t('ctAd')}
            </Title>
          </Row>

          <Button
            icon={<CloseCircleFilled className='!text-blue-500' />}
            type='link'
            size='large'
            onClick={() => {
              form.resetFields();
              closeCtM();
            }}
          />
        </Flex>
      }
    >
      <Form
        form={form}
        layout='vertical'
        className='!px-5 !pb-5'
        onFinish={hdlCtSend}
      >
        <Flex vertical>
          <Flex
            vertical={mb}
            justify='space-between'
            align='center'
            gap={mb ? 0 : 15}
          >
            <Form.Item
              name='name'
              label={t('name')}
              rules={[{ required: true, message: t('enterName') }]}
              className={mb ? '!w-full' : '!w-5/6'}
            >
              <Input placeholder={t('enterName')} />
            </Form.Item>
            <Form.Item label={t('phoneNum')} className='w-full'>
              <Space.Compact className='!w-full'>
                {/* Country code */}
                <Form.Item
                  name='countryCode'
                  noStyle
                  initialValue='+84'
                  rules={[{ required: true, message: t('ctryCode') }]}
                >
                  <Select style={{ width: 100 }}>
                    <Select.Option value='+84'>+84</Select.Option>
                  </Select>
                </Form.Item>

                {/* Phone number */}
                <Form.Item
                  name='phoneNum'
                  noStyle
                  rules={[
                    { required: true, message: t('enterPhone') },
                    {
                      pattern: /^[0-9]{9}$/,
                      message: t('incrNumPhoneFormat'),
                    },
                  ]}
                >
                  <Input
                    ref={phoneRef}
                    placeholder={t('phoneNum')}
                    maxLength={9}
                    onKeyPress={handleKeyPress}
                    onBlur={handleBlur}
                    style={{ width: 'calc(100% - 100px)' }}
                  />
                </Form.Item>
              </Space.Compact>
            </Form.Item>
          </Flex>

          <Form.Item
            name='email'
            label='Email'
            rules={[
              { required: true, message: t('enterMail') },
              { type: 'email', message: t('enterVmail') },
            ]}
            className='w-full'
          >
            <Input placeholder={t('enterMail')} />
          </Form.Item>
          <Form.Item
            name='ctLocation'
            label={t('location')}
            rules={[
              {
                required: true,
                message: t('slLoca'),
              },
            ]}
            className='!w-full'
          >
            <Select
              placeholder={t('slLoca')}
              options={enrollmentAreaOptions.map((item) => ({
                ...item,
                label: optionT(item.label),
              }))}
            />
          </Form.Item>
          <Form.Item
            name='adviceContent'
            label={t('adOn')}
            rules={[
              {
                required: true,
                message: t('enterAdOn'),
              },
            ]}
            className='w-full'
          >
            <Input placeholder={t('enterAdOn')} />
          </Form.Item>
        </Flex>

        {/* 送出  */}
        <Form.Item className='!mb-0'>
          <Button
            type='default'
            htmlType='submit'
            size='large'
            block
            icon={<SendOutlined />}
            loading={isLoad}
            className='!bg-blue-500'
          >
            {t('send')}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default memo(IesCtModal);

export interface IesCtFormVra {
  name: string;
  countryCode: string;
  phoneNum: string;
  email: string;
  ctLocation: LocationRegis;
  adviceContent: string;
}
