import { CloseCircleFilled } from '@ant-design/icons';
import { Button, Checkbox, Flex, List, Modal } from 'antd';
import { Title } from '@/components';
import { interestProgramOptions, type InterestProgramEnum } from '@/utils';

interface IProgTypeModalProps {
  selectedProgs: Array<InterestProgramEnum>; // Danh sách ngành đã chọn
  selectProg: (prog: InterestProgramEnum) => void; // Chọn thêm 1 ngành
  deselectProg: (prog: InterestProgramEnum) => void; // Bỏ chọn 1 ngành (nếu muốn)
  visible: boolean;
  onClose: () => void;
}

const ProgTypeModal: React.FC<IProgTypeModalProps> = (props) => {
  const { selectedProgs, selectProg, deselectProg, visible, onClose } = props;

  const isSelected = (prog: InterestProgramEnum) =>
    selectedProgs.includes(prog);
  const toggleProg = (prog: InterestProgramEnum) => {
    if (isSelected(prog)) deselectProg(prog);
    else selectProg(prog);
  };

  return (
    <Modal
      visible={visible}
      onCancel={onClose}
      closable={false}
      maskClosable={false}
      keyboard={false}
      footer={
        <Flex
          justify='center'
          align='center'
          className='!pt-2 !pb-2.5 !px-3 !bg-[#ca78ca]'
        >
          <Button
            className='!w-full !bg-white !text-black !font-bold !rounded-3xl hover:!bg-[#ffc5ff] hover:!border-gray-400'
            onClick={() => onClose()}
            disabled={selectedProgs.length === 0}
          >
            Confirm ({selectedProgs.length} selected)
          </Button>
        </Flex>
      }
      title={
        <Flex
          justify='space-between'
          align='center'
          className='!px-5 !py-3 !bg-[#ca78ca]'
        >
          <Title className='!m-0 !text-white' level={3}>
            Program List
          </Title>
          {selectedProgs.length === 0 ? (
            <Button
              icon={<CloseCircleFilled className='!text-white' />}
              type='link'
              size='middle'
              onClick={onClose}
            />
          ) : (
            <Button
              className='!text-white !font-bold'
              type='dashed'
              size='middle'
              onClick={() => selectedProgs.forEach((p) => deselectProg(p))}
            >
              Clear All
            </Button>
          )}
        </Flex>
      }
    >
      <List
        className='!px-5 !bg-[#ede2ec]'
        itemLayout='horizontal'
        dataSource={interestProgramOptions}
        renderItem={(item) => {
          const selected = isSelected(item.value);
          return (
            <List.Item
              key={item.value}
              style={{ cursor: 'pointer', marginBottom: 4 }}
              onClick={() => toggleProg(item.value)}
            >
              <List.Item.Meta
                title={
                  <Flex justify='flex-start' align='center' gap={'large'}>
                    <Checkbox
                      checked={selected}
                      onChange={() => toggleProg(item.value)}
                    />
                    <Title level={5} className='!m-0'>
                      {item.label}
                    </Title>
                  </Flex>
                }
              />
            </List.Item>
          );
        }}
      />
    </Modal>
  );
};

export default ProgTypeModal;
