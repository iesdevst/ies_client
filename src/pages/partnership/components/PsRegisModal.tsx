import {
  CloseCircleFilled,
  SelectOutlined,
  SendOutlined,
} from '@ant-design/icons';
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
import { useRef, useState } from 'react';
import { usePsRegisSend } from '@/api';
import OUP from '@/assets/imgs/open_uni_partnership.png';
import { Title } from '@/components';
import ProgTypeModal from '@/components/AntdModal';
import { useNotifyStore } from '@/store';
import {
  enrollmentAreaOptions,
  partnershipProgOptions,
  PsLocationRegis,
  RegisterTrainingTypeEnum,
  type PartnershipProgEnum,
} from '@/utils';

interface IPsRegisModal {
  openPsM: boolean;
  closePsm: () => void;
}

const PsRegisModal: React.FC<IPsRegisModal> = (props) => {
  const { closePsm, openPsM } = props;
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
          title: 'IES College Notify',
          des: 'Register Send Succesfully',
        },
      ]);
      form.resetFields();
      closePsm();
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
          <Row align={'middle'} className='gap-x-1.5'>
            <Image src={OUP} preview={false} className='!w-7 !h-7' />
            <Title className='!m-0 !text-[#28156E]' level={3}>
              Talk to Our Advisor
            </Title>
          </Row>

          <Button
            icon={<CloseCircleFilled className='!text-[#28156E]' />}
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
            name='regisLocation'
            label='Enrollment Area'
            rules={[
              { required: true, message: 'Please select your enrollment area' },
            ]}
            className='!w-full'
          >
            <Select
              placeholder='Select your enrollment area'
              options={enrollmentAreaOptions.map((item) => ({
                ...item,
                label: item.label,
              }))}
            />
          </Form.Item>
          <Form.Item
            name='major'
            label='Choose a Major'
            rules={[
              {
                required: true,
                message: 'Please choose a major',
              },
            ]}
            className='w-full'
          >
            <Input
              placeholder='Please choose a major ->'
              readOnly
              value={
                psProgType.length > 0
                  ? `${psProgType.length} major${psProgType.length > 1 ? 's' : ''} selected`
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
                      className='!text-black'
                    />
                    <SelectOutlined
                      className='!text-xl'
                      style={{ cursor: 'pointer', color: '#28156E' }}
                      onClick={() => setPsProgTopen(true)}
                    />
                  </Row>
                ) : (
                  <SelectOutlined
                    className='!text-xl'
                    style={{ cursor: 'pointer', color: '#28156E' }}
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
        <Form.Item className='!mb-0'>
          <Button
            type='default'
            htmlType='submit'
            size='large'
            block
            icon={<SendOutlined />}
            loading={isLoad}
            className='!bg-[#28156E]'
          >
            Send
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
  regisLocation: PsLocationRegis;
  major: Array<PartnershipProgEnum>;
}
