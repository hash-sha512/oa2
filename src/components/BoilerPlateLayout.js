import React, {useState} from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  RadarChartOutlined
} from '@ant-design/icons';

import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,

} from '@ant-design/icons';

import 'antd/dist/antd.css';

import Map from './Map';


function BoilerPlateLayout(props){
  const { Header, Sider, Content, Footer } = Layout;
  const { SubMenu } = Menu;
  
  const [state, setState] = useState({collapsed: false})
  
  const toggle = () => {
    setState({
      collapsed: !state.collapsed
    })
  }

  return (
    <>
    <Layout>
      <Header>
        <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{display: 'flex', justifyContent: 'flex-end', alignItems : 'center'}}>
          <>
          <RadarChartOutlined style={{ fontSize: '42px', position: 'absolute', top:'auto', left: '14px'}}>MapUp AI</RadarChartOutlined> 
            <span style={{ position: 'absolute', fontSize:'1.4em', left: '69px'}}>MapUp AI</span>
          </>
            <Menu.Item key="1" style={{padding: '0 45px'}}>nav 1</Menu.Item>
            <Menu.Item key="2" style={{padding: '0 45px'}}>nav 2</Menu.Item>
            <Menu.Item key="3" style={{padding: '0 45px'}}>nav 3</Menu.Item>
            <UserOutlined style={{ fontSize: '18px', padding: '0 14px', marginLeft: '50px'}} />
          </Menu>
      </Header>
    </Layout>
    <Layout>
    <Sider style={{backgroundClip:'white'}} collapsible collapsed={state.collapsed} onCollapse={toggle} style={{minHeight: '100%'}}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
      
      <Layout className="site-layout">

        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Map />
        </Content>
      </Layout>
  </Layout>
  <Layout> 
  <Footer style={{ textAlign: 'center' }}>MapUp AI ©2021 Created by Harsha</Footer>
  </Layout>
    
  </>
  );
}


export default BoilerPlateLayout;