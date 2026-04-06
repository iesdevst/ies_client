import { CloseCircleFilled, SendOutlined } from '@ant-design/icons';
import {
  Button,
  Flex,
  Form,
  Image,
  Input,
  Modal,
  Row,
  Select,
  Space,
  type InputRef,
} from 'antd';
import { useRef } from 'react';
import { useIesCt } from '@/api';
import IES from '@/assets/imgs/ies_logo_notext.png';
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
  const [form] = Form.useForm();
  const phoneRef = useRef<InputRef>(null);
  const { pushBSQ, pushBEQ } = useNotifyStore();

  // mutation
  const { sendCtRq, isLoad } = useIesCt({
    onSuccess: () => {
      pushBSQ([
        {
          title: 'IES College Notify',
          des: 'Register Send Succesfully',
        },
      ]);
      form.resetFields();
      closeCtM();
    },
    onError: () => {
      pushBEQ([
        {
          title: 'IES College Error',
          des: 'Send failed',
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
            <Image src={IES} preview={false} className='!w-15 !h-10' />
            <Title className='!m-0 !text-blue-500' level={3}>
              Ask IES for Advice
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
          <Form.Item
            name='name'
            label='Name'
            rules={[{ required: true, message: 'Please enter your name' }]}
            className='w-full'
          >
            <Input placeholder='Please enter your name' />
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
            name='ctLocation'
            label='Consultation Area'
            rules={[
              {
                required: true,
                message: 'Please select your consultation area',
              },
            ]}
            className='!w-full'
          >
            <Select
              placeholder='Select your consultation area'
              options={enrollmentAreaOptions.map((item) => ({
                ...item,
                label: item.label,
              }))}
            />
          </Form.Item>
          <Form.Item
            name='adviceContent'
            label='What would you like advice on?'
            rules={[
              {
                required: true,
                message: 'Please enter your consultation topic',
              },
            ]}
            className='w-full'
          >
            <Input placeholder='Please enter your consultation topic' />
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
            Send
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default IesCtModal;

export interface IesCtFormVra {
  name: string;
  countryCode: string;
  phoneNum: string;
  email: string;
  ctLocation: LocationRegis;
  adviceContent: string;
}
