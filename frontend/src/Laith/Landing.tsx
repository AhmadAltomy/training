import  { useState } from 'react';
import {Button, Typography} from "antd";
import { Layout, Row, Col, Card, Divider } from "antd";
import ExpensiveComponent from "./hooks/useMemo";
import Counter2 from "./hooks/useState";
import Timer from "./hooks/useEffect";
import ButtonContainer from "./hooks/useCallback";
import AntDesignPage from "./AntDesign/AntDesignPage";
import {Link} from "react-router-dom";
import { PoweroffOutlined } from "@ant-design/icons";

const { Header, Footer, Sider, Content } = Layout;
const {Title} = Typography


const Landing = () => {
  const [loadings, setLoadings] = useState<boolean[]>([]);

  const enterLoading = (index: number) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };
   
  return (
    <Layout style={{ minHeight: "100vh" }}>
    <Header
      style={{ background: "#fff195", padding: "0 16px", height: "25vh" }}
    >
      <Title level={1}>Welcome to AntDesign Task</Title>
      <Divider />
      <Title level={2}>
        <Link to="/zustand" >
          <Button 
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[3]}
          onClick={() => enterLoading(1)}
          >
            Zustand Task From Here 
          </Button>
        </Link>
      </Title>
    </Header>
    <Layout>
      <Sider width={200} style={{ background: "#0ff555" }}>
        {/* Sider content */}
        <Title level={3}>Sider Here with hooks task</Title>
        {/* useMemo */}
        <ExpensiveComponent />
        {/* useState */}
        <Counter2 initialCount={1} />
        {/* useEffect */}
        <Timer />
        {/* useCallback */}
        <ButtonContainer />
      </Sider>
      <Content style={{ padding: "16px", background: "#ff0c55" }}>
        <Title>Content Here</Title>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Card title">
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" >
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title">
              Card content
            </Card>
          </Col>
        </Row>
        {/* AntDesign Components */}
        <AntDesignPage />
      </Content>
    </Layout>
    <Footer style={{ textAlign: "center" }}>
      {/* Footer content */}
      <p>Footer</p>
    </Footer>
  </Layout>
  );
};

export default Landing;


   

