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
        <Row gutter={24} justify='space-between' className='py-10 pl-20 pr-10'>
          {/* LEFT SIDEBAR */}
          <Col xs={24} sm={24} md={8} lg={8}>
            <div>{filters}</div>
          </Col>

          {/* MAIN CONTENT */}
          <Col xs={24} sm={24} md={16} lg={16} className='!pl-10'>
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
