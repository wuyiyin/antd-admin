import React from 'react';
// import ReactDom from 'react-dom'
// import logo from './logo.svg';
import './App.css';


import Dashboard from './components/Dashboard/Dashboard.jsx'
import ECharts from './components/ECharts/ECharts.jsx'
import Editor from './components/Editor/Editor.jsx'
import HighCharts from './components/HighCharts/HighCharts.jsx'
import Posts from './components/Posts/Posts.jsx'
import Rechartst from './components/Rechartst/Rechartst.jsx'
import Request from './components/Request/Request.jsx'
import Users from './components/Users/Users.jsx'


import { HashRouter, Route, Link } from 'react-router-dom'

//布局
import { Layout, Menu, Icon, Breadcrumb } from 'antd';

const { SubMenu } = Menu;

const { Header, Sider, Content } = Layout;


// export default class App extends React.Component {
//   render() {
//     return (

//     );
//   }
// }

export default class App extends React.Component {

  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  state = {
    openKeys: ['sub1'],
  };


  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  //打开一个关闭另一个
  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };


  render() {
    return <HashRouter>
      <Layout style={{ height: '100%' }}>
        <Sider style={{ background: '#fff' }} trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">
            <img src={require("../src/images/logo.svg")} style={{ width: '40px', margin: '8px 10px' }} alt="" />
            <span style={{ textAlign: "center", fontSize: '16px', fontWeight: '800', color: 'blue' }}>ANTD ADMIN</span>
          </div>
          <Menu mode="inline" defaultSelectedKeys={['Dashboard']}

            openKeys={this.state.openKeys}
            onOpenChange={this.onOpenChange}

          >
            {/* <Menu.Item key="0">
            <img src={require("../src/images/logo.svg")} style={{width:'50px'}} alt=""/>
              <span>ANTD ADMIN</span>
            </Menu.Item> */}
            <Menu.Item key="Dashboard">
              <Icon type="dashboard" />
              <span>Dashboard</span>
              <Link to='/Dashboard'></Link>
            </Menu.Item>
            <Menu.Item key="Users">
              <Icon type="user" />
              <span>Users</span>
              <Link to='/Users'></Link>
            </Menu.Item>
            <Menu.Item key="Posts">
              <Icon type="upload" />
              <span>Posts</span>
              <Link to='/Posts'></Link>
            </Menu.Item>
            <Menu.Item key="Request">
              <Icon type="api" />
              <span>Request</span>
              <Link to='/Request'></Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="camera" />
                  <span>UI Element</span>
                </span>
              }
            >
              <Menu.Item key="Editor">
                <Icon type="edit" />
                <span> Editor</span>
                <Link to='/Editor'></Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="mail" />
                  <span>Charts</span>
                </span>
              }>
              <Menu.Item key="ECharts">
                <Icon type="area-chart" />
                <span> ECharts</span>
                <Link to='/ECharts'></Link>
              </Menu.Item>
              <Menu.Item key="HighCharts">
                <Icon type="bar-chart" />
                <span>HightCharts</span>
                <Link to='/HighCharts'></Link>
              </Menu.Item>
              <Menu.Item key="Rechartst">
                <Icon type="stock" />
                <span>Rechartst</span>
                <Link to='/Rechartst'></Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>


          <Content
            style={{
              margin: '10px 10px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <div>
              <Route path='/Dashboard' component={Dashboard}></Route>
              <Route path='/Users' component={Users}></Route>
              <Route path='/Posts' component={Posts}></Route>
              <Route path='/Request' component={Request}></Route>
              <Route path='/Editor' component={Editor}></Route>
              <Route path='/ECharts' component={ECharts}></Route>
              <Route path='/HighCharts' component={HighCharts}></Route>
              <Route path='/Rechartst' component={Rechartst}></Route>
            </div>

          </Content>
        </Layout>
      </Layout>
    </HashRouter>;
  }
}


