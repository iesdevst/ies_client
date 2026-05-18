import Col from 'antd/es/col';
import Flex from 'antd/es/flex';
import Layout from 'antd/es/layout';
import { useDevice } from '@/hooks';

interface INaiPlusPage {
  filters: React.ReactNode;
  content: React.ReactNode;
  pagination?: React.ReactNode;
}

const { Content } = Layout;

const IesLayoutNE: React.FC<INaiPlusPage> = (props) => {
  const { filters, content, pagination } = props;
  const { device } = useDevice();

  const rowoutMap = {
    mobile: '',
    tablet: '!px-5',
    tabletPro: '!px-6',
    desktop: '!pl-20 !pr-10',
  };

  const sidebarMap = {
    mobile: 'px-4',
    tablet: '',
    tabletPro: '',
    desktop: '',
  };
  const contentMap = {
    mobile: '',
    tablet: '!pl-10',
    tabletPro: '!pl-10',
    desktop: '!pl-10',
  };

  return (
    <Layout>
      <Content>
        <Flex
          vertical={device === 'mobile'}
          justify='center'
          align='top'
          className={`${rowoutMap[device]} !py-10`}
        >
          {/* LEFT SIDEBAR */}
          <Col
            xs={24}
            sm={24}
            md={8}
            lg={8}
            className={`${sidebarMap[device]}`}
          >
            <div className='sticky top-7'>{filters}</div>
          </Col>

          {/* MAIN CONTENT */}
          <Col
            xs={24}
            sm={24}
            md={16}
            lg={16}
            className={`${contentMap[device]}`}
          >
            <div>
              {content}

              {pagination && (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: 24,
                  }}
                >
                  {pagination}
                </div>
              )}
            </div>
          </Col>
        </Flex>
      </Content>
    </Layout>
  );
};

export default IesLayoutNE;
