import CloseCircleFilled from '@ant-design/icons/CloseCircleFilled';
import SelectOutlined from '@ant-design/icons/SelectOutlined';
import SendOutlined from '@ant-design/icons/SendOutlined';

import Button from 'antd/es/button';
import Flex from 'antd/es/flex';
import Form from 'antd/es/form';
import Input from 'antd/es/input';
import type { InputRef } from 'antd/es/input';
import Row from 'antd/es/row';
import Select from 'antd/es/select';
import Space from 'antd/es/space';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { useIvRegisSend } from '@/api';
import { Title } from '@/components';
import ProgTypeModal from '@/components/AntdModal';
import { useNotifyStore } from '@/store';
import {
  CapacityRoleEnum,
  capacityRoleOptions,
  InterestProgramEnum,
  interestProgramOptions,
  RegisterTrainingTypeEnum,
} from '@/utils';

interface IIvRegisterForm {
  dark: boolean;
}

const IvRegisterForm: React.FC<IIvRegisterForm> = (props) => {
  const { dark } = props;
  const { t } = useTranslation('ivRegisterForm');
  const { t: optionT } = useTranslation('options');
  const [form] = Form.useForm();
  const { pushBSQ, pushBEQ } = useNotifyStore();
  const mb = useMediaQuery({ maxWidth: 1024 });
  const [progTopen, setProgTopen] = useState(false);

  const progType = Form.useWatch('progType', form) || [];
  const phoneRef = useRef<InputRef>(null);
  const ageRef = useRef<InputRef>(null);

  const { sendRegis, isLoad } = useIvRegisSend({
    onSuccess: () => {
      pushBSQ([
        {
          title: 'IES College Notify',
          des: 'Intermediate Vocational Register Send Succesfully',
        },
      ]);
      form.resetFields();
      // setProgType([]);
    },
    onError: () => {
      pushBEQ([
        {
          title: 'IES College Error',
          des: 'Failed Send',
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
      form.setFields([
        { name: 'phoneNum', errors: ['Incorrect phone number format!'] },
      ]);
    } else {
      form.setFields([{ name: 'phoneNum', errors: [] }]);
      form.setFieldsValue({ phoneNum: value });
    }
  };

  const handleSelectProg = (prog: InterestProgramEnum) => {
    const current = form.getFieldValue('progType') || [];

    if (!current.includes(prog)) {
      form.setFieldsValue({
        progType: [...current, prog],
      });
    }
  };

  const handleDeselectProg = (prog: InterestProgramEnum) => {
    const current = form.getFieldValue('progType') || [];

    form.setFieldsValue({
      progType: current.filter((p: InterestProgramEnum) => p !== prog),
    });
  };

  const handleRegisSend = (values: IvRegisFormVra) => {
    const fullPhone = `${values.countryCode}${values.phoneNum}`;
    sendRegis({
      trainRegisType: RegisterTrainingTypeEnum.IV,
      name: values.name,
      phone: fullPhone,
      email: values.email,
      age: values.age,
      location: values.location,
      capaRole: values.capacityRole,
      progInter: values.progType,
      question: values.question || '',
    });
  };

  return (
    <section
      className={`${dark ? 'bg-gray-600' : 'bg-white'} rounded-2xl ${!mb ? 'py-10 px-17' : 'pb-10 pt-5 px-3.5'}`}
    >
      <Title className='!text-center !mb-12 italic !text-[#ca78ca] !font-bold'>
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

          <Form.Item label={t('phoneLabel')} className='w-full'>
            <Space.Compact className='!w-full'>
              {/* Country code */}
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

              {/* Phone number */}
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
            name='progType'
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
                progType.length > 0
                  ? `${progType.length} ${t('progSlPlu')}${progType.length > 1 ? t('progSlPlu2') : ''} ${t('progSlPlu3')}`
                  : ''
              }
              suffix={
                progType.length > 0 ? (
                  <Row className='gap-x-3' align={'middle'}>
                    <CloseCircleFilled
                      onClick={(e) => {
                        e.stopPropagation();
                        form.setFieldsValue({ progType: [] });
                      }}
                      className={!dark ? '!text-black' : '!text-white'}
                    />
                    <SelectOutlined
                      className='!text-xl'
                      style={{ cursor: 'pointer', color: '#c92cc9' }}
                      onClick={() => setProgTopen(true)}
                    />
                  </Row>
                ) : (
                  <SelectOutlined
                    className='!text-xl'
                    style={{ cursor: 'pointer', color: '#c92cc9' }}
                    onClick={() => setProgTopen(true)}
                  />
                )
              }
            />
            <ProgTypeModal
              visible={progTopen}
              onClose={() => setProgTopen(false)}
              selectedProgs={progType}
              selectProg={handleSelectProg}
              deselectProg={handleDeselectProg}
              options={interestProgramOptions}
              clearAll={() => form.setFieldsValue({ progType: [] })}
              lstBgCus={dark ? 'bg-[#a76d8d]' : ''}
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
            className='!bg-[#ca78ca] !border-none'
          >
            {t('submit')}
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default IvRegisterForm;

export interface IvRegisFormVra {
  name: string;
  phoneNum: string;
  email: string;
  age: string;
  location: string;
  capacityRole: CapacityRoleEnum;
  progType: Array<InterestProgramEnum>;
  question?: string;
  countryCode: string;
}
