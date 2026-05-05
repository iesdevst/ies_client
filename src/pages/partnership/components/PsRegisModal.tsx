import CloseCircleFilled from '@ant-design/icons/CloseCircleFilled';
import SelectOutlined from '@ant-design/icons/SelectOutlined';
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
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { usePsRegisSend } from '@/api';
import OUP from '@/assets/imgs/open_uni_partnership.webp';
import { Title } from '@/components';
import ProgTypeModal from '@/components/AntdModal';
import { useNotifyStore } from '@/store';
import {
  enrollmentAreaOptions,
  LocationRegis,
  partnershipProgOptions,
  RegisterTrainingTypeEnum,
  type PartnershipProgEnum,
} from '@/utils';

interface IPsRegisModal {
  openPsM: boolean;
  closePsm: () => void;
  dark: boolean;
}

const PsRegisModal: React.FC<IPsRegisModal> = (props) => {
  const { closePsm, openPsM, dark } = props;
  const mb = useMediaQuery({ maxWidth: 767 });
  const { t } = useTranslation('psRegisModal');
  const { t: optionsT } = useTranslation('options');
  const [form] = Form.useForm();
  const [psProgTopen, setPsProgTopen] = useState(false);
  const psProgType = Form.useWatch('major', form) || [];
  const phoneRef = useRef<InputRef>(null);
  const { pushBSQ, pushBEQ } = useNotifyStore();

  // mutation
  const { sendRegis, isLoad } = usePsRegisSend({
    onSuccess: () => {
      pushBSQ([
        {
          title: t('notiTit'),
          des: t('ns'),
        },
      ]);
      form.resetFields();
      closePsm();
    },
    onError: () => {
      pushBEQ([
        {
          title: t('errTit'),
          des: t('ne'),
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
      form.setFields([{ name: 'phoneNum', errors: [t('fpf')] }]);
    } else {
      form.setFields([{ name: 'phoneNum', errors: [] }]);
      form.setFieldsValue({ phoneNum: value });
    }
  };

  const hdlSelectPsProg = (prog: PartnershipProgEnum) => {
    const next = psProgType.includes(prog) ? psProgType : [...psProgType, prog];
    form.setFieldsValue({ major: next });
  };

  const hdlDeselectPsProg = (prog: PartnershipProgEnum) => {
    const next = psProgType.filter((p: PartnershipProgEnum) => p !== prog);
    form.setFieldsValue({ major: next });
  };

  const hdlRegisSend = (values: PsRegisFormVra) => {
    const fullPhone = `${values.countryCode}${values.phoneNum}`;
    sendRegis({
      trainRegisType: RegisterTrainingTypeEnum.PartnershipHou,
      name: values.name,
      phone: fullPhone,
      email: values.email,
      locationRegis: values.regisLocation,
      psProgTrain: values.major,
    });
  };

  return (
    <Modal
      open={openPsM}
      closable={false}
      maskClosable={false}
      keyboard={false}
      footer={false}
      title={
        <Flex justify='space-between' align='center' className='!px-5 !py-3'>
          <Row
            align={'middle'}
            className={`${dark ? 'bg-gray-500 py-1 px-3 !rounded-xl' : ''} gap-x-1.5`}
          >
            <Image
              src={OUP}
              preview={false}
              className='!w-7 !h-7'
              loading='lazy'
              alt='psrm'
            />
            <Title className='!m-0 !text-[#28156E]' level={3}>
              {t('mt')}
            </Title>
          </Row>

          <Button
            icon={
              <CloseCircleFilled
                className={`${dark ? '!text-gray-400' : '!text-[#28156E]'}`}
              />
            }
            type='link'
            size='large'
            onClick={() => {
              form.resetFields();
              closePsm();
            }}
          />
        </Flex>
      }
    >
      <Form
        form={form}
        layout='vertical'
        className='!px-5 !pb-5'
        onFinish={hdlRegisSend}
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
              label={t('fn')}
              rules={[{ required: true, message: t('fnp') }]}
              className={mb ? '!w-full' : '!w-5/6'}
            >
              <Input placeholder={t('fnp')} />
            </Form.Item>
            <Form.Item label={t('fp')} className='w-full'>
              <Space.Compact className='!w-full'>
                {/* Country code */}
                <Form.Item
                  name='countryCode'
                  noStyle
                  initialValue='+84'
                  rules={[{ required: true, message: t('fpc') }]}
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
                    { required: true, message: t('fpe') },
                    {
                      pattern: /^[0-9]{9}$/,
                      message: t('fpf'),
                    },
                  ]}
                >
                  <Input
                    ref={phoneRef}
                    placeholder={t('fpp')}
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
              { required: true, message: t('fep') },
              { type: 'email', message: t('fef') },
            ]}
            className='w-full'
          >
            <Input placeholder={t('fep')} />
          </Form.Item>
          <Form.Item
            name='regisLocation'
            label={t('fl')}
            rules={[{ required: true, message: t('fle') }]}
            className='!w-full'
          >
            <Select
              placeholder={t('flp')}
              options={enrollmentAreaOptions.map((item) => ({
                ...item,
                label: optionsT(item.label),
              }))}
            />
          </Form.Item>
          <Form.Item
            name='major'
            label={t('fm')}
            rules={[
              {
                required: true,
                message: t('fme'),
              },
            ]}
            className='w-full'
          >
            <Input
              placeholder={t('fme')}
              readOnly
              value={
                psProgType.length > 0
                  ? `${psProgType.length} ${t('fms')}${psProgType.length > 1 ? t('fms2') : ''} ${t('fms3')}`
                  : ''
              }
              suffix={
                psProgType.length > 0 ? (
                  <Row className='gap-x-3' align={'middle'}>
                    <CloseCircleFilled
                      onClick={(e) => {
                        e.stopPropagation();
                        form.setFieldsValue({ major: [] });
                      }}
                      className={`${dark ? '!text-white' : '!text-black'}`}
                    />
                    <SelectOutlined
                      className='!text-xl'
                      style={{
                        cursor: 'pointer',
                        color: !dark ? '#28156E' : '#3677d2',
                      }}
                      onClick={() => setPsProgTopen(true)}
                    />
                  </Row>
                ) : (
                  <SelectOutlined
                    className='!text-xl'
                    style={{
                      cursor: 'pointer',
                      color: !dark ? '#28156E' : '#3677d2',
                    }}
                    onClick={() => setPsProgTopen(true)}
                  />
                )
              }
            />
            <ProgTypeModal
              visible={psProgTopen}
              onClose={() => setPsProgTopen(false)}
              selectedProgs={psProgType}
              selectProg={hdlSelectPsProg}
              deselectProg={hdlDeselectPsProg}
              options={partnershipProgOptions}
              bgC='!bg-[#6472cf]'
              clearAll={() => form.setFieldsValue({ major: [] })}
            />
          </Form.Item>
        </Flex>

        {/* 送出  */}
        <Form.Item className='!mb-0 !mt-2'>
          <Button
            type='default'
            htmlType='submit'
            size='large'
            block
            icon={<SendOutlined />}
            loading={isLoad}
            className='!bg-[#28156E]'
          >
            {t('bs')}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default PsRegisModal;

export interface PsRegisFormVra {
  name: string;
  countryCode: string;
  phoneNum: string;
  email: string;
  regisLocation: LocationRegis;
  major: Array<PartnershipProgEnum>;
}
