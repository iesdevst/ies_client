import {
  CloseCircleFilled,
  SelectOutlined,
  SendOutlined,
} from '@ant-design/icons';
import { Button, Flex, Form, Input, Row, Select } from 'antd';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import ProgTypeModal from './ProgTypeModal';
import { useClientRegisSend } from '@/api';
import { Title } from '@/components';
import { useNotifyStore } from '@/store';
import {
  CapacityRoleEnum,
  capacityRoleOptions,
  InterestProgramEnum,
} from '@/utils';

const ProgRegisterForm: React.FC = () => {
  const [form] = Form.useForm();
  const { pushBSQ } = useNotifyStore();
  const mb = useMediaQuery({ maxWidth: 1024 });
  const [progTopen, setProgTopen] = useState(false);
  const [progType, setProgType] = useState<Array<InterestProgramEnum>>([]);

  const { sendRegis } = useClientRegisSend({
    onSuccess: () => {
      pushBSQ([
        {
          title: 'IES College Notify',
          des: 'Register Send Succesfully',
        },
      ]);
      form.resetFields();
    },
  });

  const handleSelectProg = (prog: InterestProgramEnum) => {
    setProgType((prev) => {
      const next = prev.includes(prog) ? prev : [...prev, prog];
      form.setFieldsValue({ progType: next });
      return next;
    });
  };

  const handleDeselectProg = (prog: InterestProgramEnum) => {
    setProgType((prev) => {
      const next = prev.filter((p) => p !== prog);
      form.setFieldsValue({ progType: next });
      return next;
    });
  };

  const handleRegisSend = (values: ProgRegisFormVra) => {
    sendRegis({
      name: values.name,
      phone: values.phoneNum,
      email: values.email,
      age: values.age,
      location: values.location,
      capaRole: values.capacityRole,
      progInter: values.progType,
      question: values.question,
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
        <Flex gap={!mb ? 50 : 12}>
          <Form.Item
            name='name'
            label='Name'
            rules={[{ required: true, message: 'Please enter your name' }]}
            className='w-full'
          >
            <Input className='' placeholder='Please enter your name' />
          </Form.Item>

          <Form.Item
            name='phoneNum'
            label='Phone Number'
            rules={[
              { required: true, message: 'Please enter your phone number' },
            ]}
            className='w-full'
          >
            <Input placeholder='Please enter your phone number' />
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
            <Input placeholder='Please enter student age' />
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
              placeholder='Please select your interest programs'
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
                        setProgType([]);
                        form.setFieldsValue({ progType: undefined });
                      }}
                      className='!text-black'
                    />
                    <SelectOutlined
                      style={{ cursor: 'pointer', color: '#c92cc9' }}
                      onClick={() => setProgTopen(true)}
                    />
                  </Row>
                ) : (
                  <SelectOutlined
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
            type='primary'
            htmlType='submit'
            size='large'
            block
            icon={<SendOutlined />}
          >
            Send
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default ProgRegisterForm;

export interface ProgRegisFormVra {
  name: string;
  phoneNum: string;
  email: string;
  age: string;
  location: string;
  capacityRole: CapacityRoleEnum;
  progType: Array<InterestProgramEnum>;
  question?: string;
}
