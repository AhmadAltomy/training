import React from 'react';
import { Typography, Button, Input, Divider } from 'antd';
import { PhoneOutlined, MailOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';


const index: React.FC = () => {
    return (
        <div>
            <Typography.Title>Title</Typography.Title>
            <Typography.Text>text</Typography.Text>
            <Typography.Paragraph>Paragraph</Typography.Paragraph>

            <Divider />

            <Button type="primary"> Button</Button>
            <Button type="default"> Button</Button>
            <Button type="dashed"> Button</Button>
            <Button type="text"> Button</Button>  {/* Secondary */}
            <Button type="link"> Button</Button>
            <Button danger> Button</Button>
            <Button ghost> Button</Button>

            <Divider />

            <Input placeholder="Username" />
            <Input.Password
                placeholder="input password"
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
            <Input type="number" prefix={<PhoneOutlined />} placeholder="Phone Number" />
            <Input type="email" prefix={<MailOutlined />} placeholder="Email" />
            <Input.TextArea placeholder="TextArea input" rows={4} />

            <Button icon="search" > Search </Button>


        </div>
    );
};

export default index;