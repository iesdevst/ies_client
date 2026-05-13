import { Row, Col, Layout } from 'antd';

interface INaiPlusPage {
  filters: React.ReactNode;
  content: React.ReactNode;
  pagination?: React.ReactNode;
}

const { Content } = Layout;

const IesLayoutNE: React.FC<INaiPlusPage> = (props) => {
  const { filters, content, pagination } = props;

  return (
    <Layout>
      <Content>
        <Row gutter={24} justify='space-between' className='py-10 px-20'>
          {/* LEFT SIDEBAR */}
          <Col xs={24} sm={24} md={7} lg={7}>
            <div>{filters}</div>
          </Col>

          {/* MAIN CONTENT */}
          <Col xs={24} sm={24} md={17} lg={17} className='!pl-15'>
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
        </Row>
      </Content>
    </Layout>
  );
};

export default IesLayoutNE;
