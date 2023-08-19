import Title from "antd/es/typography/Title";
import "./App.css";
import AntDesignPage from "./Laith/AntDesign/AntDesignPage.tsx";
import ButtonContainer from "./Laith/hooks/useCallback.tsx";
import Timer from "./Laith/hooks/useEffect.tsx";
import ExpensiveComponent from "./Laith/hooks/useMemo.tsx";
import Counter2 from "./Laith/hooks/useState.tsx";
import { Layout, Row, Col, Card, Divider } from "antd";

const { Header, Footer, Sider, Content } = Layout;

const App: React.FC = () => (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{ background: "#fff195", padding: "0 16px", height: "25vh" }}
      >
        <Title level={1}>Welcome to AntDesign Task</Title>
        <Divider />
        <Title level={2}>Header Here</Title>
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

export default App;
