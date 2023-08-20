import React, { useState } from 'react';
import './index.css';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Divider, Skeleton, Switch } from 'antd';

const { Meta } = Card;

const App: React.FC = () => {
    const [loading, setLoading] = useState(true);

    const onChange = (checked: boolean) => {
        setLoading(!checked);
    };

    return (
        <>
            <Card
                hoverable
                style={{ width: 240, marginTop: 16 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>

            <Divider></Divider>
            <p>card with toggle button for loading</p>
            <Switch checked={!loading} onChange={onChange} />

            <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
                <Meta
                    avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />}
                    title="Card title"
                    description="This is the description"
                />
            </Card>

            <Card
                style={{ width: 300, marginTop: 16 }}
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <Skeleton loading={loading} avatar active>
                    <Meta
                        avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />}
                        title="Card title"
                        description="This is the description"
                    />
                </Skeleton>
            </Card>
        </>
    );
};

export default App;
