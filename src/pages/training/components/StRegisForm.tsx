import {
  CloseCircleFilled,
  SelectOutlined,
  SendOutlined,
} from '@ant-design/icons';
import {
  Button,
  Flex,
  Form,
  Input,
  Row,
  Select,
  Space,
  type InputRef,
} from 'antd';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { useStRegisSend } from '@/api';
import { Title } from '@/components';
import ProgTypeModal from '@/components/AntdModal';
import { useNotifyStore } from '@/store';
import {
  CapacityRoleEnum,
  capacityRoleOptions,
  RegisterTrainingTypeEnum,
  ShortTermTraingEnum,
  shortTermTrainOptions,
} from '@/utils';

interface IStRegisterForm {
  dark: boolean;
}

const StRegisterForm: React.FC<IStRegisterForm> = (props) => {
  const { dark } = props;
  const { t } = useTranslation('stRegisForm');
  const { t: optionT } = useTranslation('options');
  const [form] = Form.useForm();

  const { pushBSQ, pushBEQ } = useNotifyStore();
  const mb = useMediaQuery({ maxWidth: 1024 });
  const [stTopen, setStTopen] = useState(false);
  const stType = Form.useWatch('shortTermType', form) || [];
  const phoneRef = useRef<InputRef>(null);
  const ageRef = useRef<InputRef>(null);

  const { sendRegis, isLoad } = useStRegisSend({
    onSuccess: () => {
      pushBSQ([
        {
          title: t('iesNoti'),
          des: t('des'),
        },
      ]);
      form.resetFields();
    },
    onError: () => {
      pushBEQ([
        {
          title: t('iesErr'),
          des: t('err'),
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
      form.setFields([{ name: 'phoneNum', errors: [t('phoneFormatError')] }]);
    } else {
      form.setFields([{ name: 'phoneNum', errors: [] }]);
      form.setFieldsValue({ phoneNum: value });
    }
  };

  const handleSelectSt = (st: ShortTermTraingEnum) => {
    const next = stType.includes(st) ? stType : [...stType, st];
    form.setFieldsValue({ shortTermType: next });
  };

  const handleDeselectSt = (st: ShortTermTraingEnum) => {
    const next = stType.filter((p: ShortTermTraingEnum) => p !== st);
    form.setFieldsValue({ shortTermType: next });
  };

  const handleRegisSend = (values: StRegisFormVra) => {
    const fullPhone = `${values.countryCode}${values.phoneNum}`;
    sendRegis({
      trainRegisType: RegisterTrainingTypeEnum.ShortTerm,
      name: values.name,
      phone: fullPhone,
      email: values.email,
      age: values.age,
      location: values.location,
      capaRole: values.capacityRole,
      shortTermTrain: values.shortTermType,
      question: values.question || '',
    });
  };

  return (
    <section
      className={`${dark ? '!bg-gray-600' : 'bg-white'} rounded-2xl ${!mb ? 'py-10 px-17' : 'pb-10 pt-5 px-3.5'}`}
    >
      <Title
        className={`!text-center !mb-12 italic !font-bold ${dark ? '!text-[#98c3ff]' : ' !text-[#6472cf]'}`}
      >
        {t('title')}
      </Title>
      <Form form={form} layout='vertical' onFinish={handleRegisSend}>
        <Flex gap={!mb ? 50 : 0} vertical={mb}>
          <Form.Item
            name='name'
            label={t('nameLabel')}
            rules={[{ required: true, message: t('nameError') }]}
            className='w-full'
          >
            <Input className='' placeholder={t('nameError')} />
          </Form.Item>

          <Form.Item label={t('phoneLabel')} className='!w-full'>
            <Space.Compact className='!w-full'>
              <Form.Item
                name='countryCode'
                noStyle
                initialValue='+84'
                rules={[{ required: true, message: t('countryCodeError') }]}
              >
                <Select style={{ width: 100 }}>
                  <Select.Option value='+84'>+84</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                name='phoneNum'
                noStyle
                rules={[
                  { required: true, message: t('phoneError') },
                  {
                    pattern: /^[0-9]{9}$/,
                    message: t('phoneFormatError'),
                  },
                ]}
              >
                <Input
                  ref={phoneRef}
                  placeholder={t('phoneError')}
                  maxLength={9}
                  onKeyPress={handleKeyPress}
                  onBlur={handleBlur}
                  style={{ width: 'calc(100% - 100px)' }}
                />
              </Form.Item>
            </Space.Compact>
          </Form.Item>
        </Flex>

        <Flex gap={!mb ? 50 : 0} vertical={mb}>
          <Form.Item
            name='email'
            label='Email'
            rules={[
              { required: true, message: t('emailError') },
              { type: 'email', message: t('emailInvalid') },
            ]}
            className='w-full'
          >
            <Input placeholder={t('emailError')} />
          </Form.Item>

          <Form.Item
            name='capacityRole'
            label={t('roleLabel')}
            rules={[{ required: true, message: t('roleError') }]}
            className='!w-full'
          >
            <Select
              placeholder={t('rolePlaceholder')}
              options={capacityRoleOptions.map((item) => ({
                ...item,
                label: optionT(item.label),
              }))}
            />
          </Form.Item>
        </Flex>

        <Flex gap={!mb ? 50 : 0} vertical={mb}>
          <Form.Item
            name='age'
            label={t('ageLabel')}
            rules={[
              { required: true, message: t('agePlaceholder') },
              {
                validator: (_, value) => {
                  if (!value) return Promise.resolve();

                  const num = Number(value);

                  if (num < 16 || num > 99) {
                    return Promise.reject(t('ageError'));
                  }

                  return Promise.resolve();
                },
              },
            ]}
            className='w-full'
          >
            <Input
              ref={ageRef}
              placeholder={t('agePlaceholder')}
              maxLength={2}
              onKeyPress={(e) => {
                if (!/[0-9]/.test(e.key)) e.preventDefault();
              }}
            />
          </Form.Item>
          <Form.Item
            name='shortTermType'
            label={t('programLabel')}
            rules={[
              {
                required: true,
                message: t('programError'),
              },
            ]}
            className='w-full'
          >
            <Input
              placeholder={t('programError')}
              readOnly
              value={
                stType.length > 0
                  ? `${stType.length} ${t('progSlPlu')}${stType.length > 1 ? t('progSlPlu2') : ''} ${t('progSlPlu3')}`
                  : ''
              }
              suffix={
                stType.length > 0 ? (
                  <Row className='gap-x-3' align={'middle'}>
                    <CloseCircleFilled
                      onClick={(e) => {
                        e.stopPropagation();
                        form.setFieldsValue({ shortTermType: [] });
                      }}
                      className={dark ? '!text-white' : '"!text-black"'}
                    />
                    <SelectOutlined
                      className='!text-xl'
                      style={{
                        cursor: 'pointer',
                        color: !dark ? '#6472cf' : '#3677d2',
                      }}
                      onClick={() => setStTopen(true)}
                    />
                  </Row>
                ) : (
                  <SelectOutlined
                    className='!text-xl'
                    style={{
                      cursor: 'pointer',
                      color: !dark ? '#6472cf' : '#3677d2',
                    }}
                    onClick={() => setStTopen(true)}
                  />
                )
              }
            />
            <ProgTypeModal
              visible={stTopen}
              onClose={() => setStTopen(false)}
              selectedProgs={stType}
              selectProg={handleSelectSt}
              deselectProg={handleDeselectSt}
              options={shortTermTrainOptions}
              bgC='!bg-[#6472cf]'
              clearAll={() => form.setFieldsValue({ shortTermType: [] })}
              lstBgCus={dark ? 'bg-[#708db5]' : ''}
            />
          </Form.Item>
        </Flex>

        <Flex vertical>
          <Form.Item
            name='location'
            label={t('addressLabel')}
            rules={[{ required: true, message: t('addressError') }]}
            className='w-full'
          >
            <Input placeholder={t('addressError')} />
          </Form.Item>
          <Form.Item
            name='question'
            label={t('questionLabel')}
            className='w-full'
          >
            <Input className='!py-2' placeholder={t('questionPlaceholder')} />
          </Form.Item>
        </Flex>

        {/* 送出  */}
        <Form.Item className='!mt-10 !mb-0'>
          <Button
            type='default'
            htmlType='submit'
            size='large'
            block
            icon={<SendOutlined />}
            loading={isLoad}
            className='!bg-[#6472cf]'
          >
            {t('submit')}
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default StRegisterForm;

export interface StRegisFormVra {
  name: string;
  phoneNum: string;
  email: string;
  age: string;
  location: string;
  capacityRole: CapacityRoleEnum;
  shortTermType: Array<ShortTermTraingEnum>;
  question?: string;
  countryCode: string;
}
