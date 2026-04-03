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

const IvRegisterForm: React.FC = () => {
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
      className={`bg-white rounded-2xl ${!mb ? 'py-10 px-17' : 'pb-10 pt-5 px-3.5'}`}
    >
      <Title className='!text-center !mb-12 italic !text-[#ca78ca] !font-bold'>
        Join Our Program
      </Title>
      <Form form={form} layout='vertical' onFinish={handleRegisSend}>
        <Flex gap={!mb ? 50 : 0} vertical={mb}>
          <Form.Item
            name='name'
            label='Name'
            rules={[{ required: true, message: 'Please enter your name' }]}
            className='w-full'
          >
            <Input className='' placeholder='Please enter your name' />
          </Form.Item>

          <Form.Item label='Phone Number' className='w-full'>
            <Space.Compact>
              {/* Country code */}
              <Form.Item
                name='countryCode'
                noStyle
                initialValue='+84'
                rules={[{ required: true, message: 'Select country code' }]}
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
                  { required: true, message: 'Please enter your phone number' },
                  {
                    pattern: /^[0-9]{9}$/,
                    message: 'Incorrect phone number format!',
                  },
                ]}
              >
                <Input
                  ref={phoneRef}
                  placeholder='Enter phone number'
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
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email format' },
            ]}
            className='w-full'
          >
            <Input placeholder='Please enter your email' />
          </Form.Item>

          <Form.Item
            name='capacityRole'
            label='Capacity Role'
            rules={[
              { required: true, message: 'Please select your capacity role' },
            ]}
            className='!w-full'
          >
            <Select
              placeholder='Select Your Capacity Role'
              options={capacityRoleOptions.map((item) => ({
                ...item,
                label: item.label,
              }))}
            />
          </Form.Item>
        </Flex>

        <Flex gap={!mb ? 50 : 0} vertical={mb}>
          <Form.Item
            name='age'
            label='Student Age'
            rules={[{ required: true, message: 'Please enter student age' }]}
            className='w-full'
          >
            <Input
              ref={ageRef}
              placeholder='Enter student age'
              maxLength={2}
              onKeyPress={(e) => {
                if (!/[0-9]/.test(e.key)) e.preventDefault();
              }}
              onBlur={() => {
                const valueStr = ageRef.current?.input?.value || '';
                const value = Number(valueStr);

                if (!valueStr || value < 16 || value > 99) {
                  form.setFields([
                    { name: 'age', errors: ['Age must be 16 or older'] },
                  ]);
                } else {
                  form.setFields([{ name: 'age', errors: [] }]);
                  form.setFieldsValue({ age: valueStr });
                  console.log({ value });
                }
              }}
            />
          </Form.Item>
          <Form.Item
            name='progType'
            label='Interset Program'
            rules={[
              {
                required: true,
                message: 'Please select your interest program',
              },
            ]}
            className='w-full'
          >
            <Input
              placeholder='Please select your interest programs ->'
              readOnly
              value={
                progType.length > 0
                  ? `${progType.length} program${progType.length > 1 ? 's' : ''} selected`
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
                      className='!text-black'
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
            />
          </Form.Item>
        </Flex>

        <Flex vertical>
          <Form.Item
            name='location'
            label='Current Address'
            rules={[
              { required: true, message: 'Please enter your current address' },
            ]}
            className='w-full'
          >
            <Input placeholder='Please enter your current address' />
          </Form.Item>
          <Form.Item
            name='question'
            label='Question (Optional)'
            className='w-full'
          >
            <Input className='!py-2' placeholder='Enter your question' />
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
            Send
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
