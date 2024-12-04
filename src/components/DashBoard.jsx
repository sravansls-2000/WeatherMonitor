import React from 'react';
import { LogoutOutlined } from '@ant-design/icons';
import Form from './form';

import { Layout, Menu, theme } from 'antd';
const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        height: '100vh',
      }}
    >
      <Header
        style={{
          padding: 0,

          background: colorBgContainer,
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          style={{
            minWidth: 0,
          }}
        >
          <div>CrikBuddies</div>
          <Form />
        </Menu>
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            theme="dark"
            style={{
              height: '100%',
              borderRight: 0,
            }}
            // items={items2}
          >
            <button>Live Match</button>
            <button>Matches</button>
            <button>
              <LogoutOutlined />
            </button>
          </Menu>
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
