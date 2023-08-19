import { Typography, Button, Input, Divider } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  NumberOutlined,
  PhoneTwoTone,
  TwitterCircleFilled,
  DeleteOutlined ,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;

const AntDesignPage = () => {
  return (
    <div className="layout">
      <Title level={2}>Ant Design Example Page</Title>
      <Text>Ant Design (default)</Text>
      <Text type="secondary">Ant Design (secondary)</Text>
      <Text type="success">Ant Design (success)</Text>
      <Text type="warning">Ant Design (warning)</Text>
      <Text type="danger">Ant Design (danger)</Text>
      <Text strong>Typography Examples:</Text>
      <Title level={3}>Title Level 3</Title>
      <Text> Text</Text>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Paragraph>

      <Divider />

      <Text strong>Button Examples:</Text>
      <Button type="primary" icon={<PhoneTwoTone />}>Primary Button</Button>
      <Button icon={<TwitterCircleFilled />}>secondary Button</Button>
      <Button danger icon={<DeleteOutlined />}>Danger Button</Button>
      <Button type="dashed" ghost>
        Dashed ghost Button
      </Button>
      <Button type="link">Link Button</Button>

      <Divider />

      <Text strong>Input Examples:</Text>
      <Divider />

      <Input prefix={<UserOutlined />} placeholder="Username" />
      <Divider />

      <Input.Password prefix={<LockOutlined />} placeholder="Password" />
      <Divider />

      <Input prefix={<MailOutlined />} placeholder="Email" />
      <Divider />

      <Input prefix={<NumberOutlined />} placeholder="Number" />
      <Divider />

      <TextArea rows={4} placeholder="TextArea" />
    </div>
  );
};

export default AntDesignPage;
