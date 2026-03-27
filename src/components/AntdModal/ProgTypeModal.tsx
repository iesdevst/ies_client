import { CloseCircleFilled } from '@ant-design/icons';
import { Button, Checkbox, Flex, List, Modal } from 'antd';
import { Title } from '@/components';

interface IProgTypeModalProps<T> {
  selectedProgs: Array<T>; // Danh sách ngành đã chọn
  selectProg: (prog: T) => void; // Chọn thêm 1 ngành
  deselectProg: (prog: T) => void; // Bỏ chọn 1 ngành (nếu muốn)
  visible: boolean;
  onClose: () => void;
  options: Array<{ label: string; value: T; group?: string }>;
  bgC?: string;
}

const ProgTypeModal = <T,>(props: IProgTypeModalProps<T>) => {
  const {
    selectedProgs,
    selectProg,
    deselectProg,
    visible,
    onClose,
    options,
    bgC,
  } = props;

  const isSelected = (prog: T) => selectedProgs.includes(prog);
  const toggleProg = (prog: T) => {
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
          className={`!pt-2 !pb-2.5 !px-3 ${!bgC ? '!bg-[#ca78ca]' : bgC}`}
        >
          <Button
            className='!w-full !bg-white !text-black !font-bold !rounded-3xl hover:!bg-[#d8cfe0] hover:!border-none'
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
          className={`!px-5 !py-3 ${!bgC ? '!bg-[#ca78ca]' : bgC}`}
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
        className={`!px-5 ${!bgC ? '!bg-[#ede2ec]' : '!bg-white'}`}
        itemLayout='horizontal'
        dataSource={options}
        renderItem={(item) => {
          const selected = isSelected(item.value);
          return (
            <List.Item
              key={String(item.value)}
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
