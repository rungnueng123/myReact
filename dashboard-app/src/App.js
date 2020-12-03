import logo from './logo.svg';
import './App.css';
import HeaderBar from './components/HeaderBar';
import { Layout, Row, Col, Menu, Breadcrumb } from 'antd';
import MapBranch from './components/MapBranch';
import StartChart from './components/StartChart';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Axios from 'axios'

const axiosClient = Axios.create({
  responseType: "json"
});

const { Header, Content, Footer } = Layout;

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const requestInitData = async (dispatch) => {
      try {
        // ใช้ Axios เข้าถึงข้อมูล JSON แทน
        const success = await axiosClient.get('./branch.json');
        console.log('aaaaa')
        console.log(success.data);
        console.log('aaaaa')
      } catch (error) {
        console.log('bbbbb')
        console.error(error);
      }
    }

    requestInitData()
  },[])

  return (
    <>
      <Layout className="layout">
        <HeaderBar />
        <Content style={{
          padding: '0 50px'
        }}>
          <div
            style={{
              background: '#fff',
              padding: 24,
              minHeight: 280
            }}>
            <Row gutter={16}>
              <Col span={12}><MapBranch /></Col>
              <Col span={12}><StartChart /></Col>
            </Row>
          </div>
        </Content>
        <Footer style={{
          textAlign: 'center'
        }}>React Redux Workshop ©2012-2019 Created by Nextflow.in.th</Footer>
      </Layout>,
    </>
  );
}

export default App;
