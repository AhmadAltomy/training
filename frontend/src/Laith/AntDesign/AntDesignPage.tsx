import { Typography, Button, Input, Divider, Layout } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  NumberOutlined,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;

const AntDesignPage = () => {
  return (
    <Layout className="layout">
      <Title level={2}>Ant Design Example Page</Title>

      <Text strong>Typography Examples:</Text>
      <Title level={3}>Title Level 3</Title>
      <Text> Text</Text>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Paragraph>

      <Divider />

      <Text strong>Button Examples:</Text>
      <Button type="primary">Primary Button</Button>
      <Button type="secondary">Secondary Button</Button>
      <Button type="danger">Danger Button</Button>
      <Button type="ghost">Ghost Button</Button>
      <Button type="link">Link Button</Button>

      <Divider />

      <Text strong>Input Examples:</Text>
      <Input prefix={<UserOutlined />} placeholder="Username" />
      <Input.Password prefix={<LockOutlined />} placeholder="Password" />
      <Input prefix={<MailOutlined />} placeholder="Email" />
      <Input prefix={<NumberOutlined />} placeholder="Number" />
      <TextArea rows={4} placeholder="TextArea" />

      <Divider />

      <Text strong>Icons Examples:</Text>
      <Button type="primary" icon={<UserOutlined />}>
        Primary Button with Icon
      </Button>
      <Input prefix={<LockOutlined />} placeholder="Password with Icon" />

      <Divider />

      <Text strong>Divider Example:</Text>
      <Divider />

      <Text strong>End of Page</Text>
    </Layout>
  );
};

export default AntDesignPage;
