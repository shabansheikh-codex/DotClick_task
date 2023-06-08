import './App.css';
import { Layout} from 'antd';
import SideBar from './Components/Sidebar/SideBar';
import Routers from './Routes/Routers';
import chatImage from "./assets/images/chatLogo.png";
const { Sider, Content } = Layout;

function App() {

  return (
    <Layout>
      <Sider className='sidebar' width="20vw">
        <SideBar/>
      </Sider>
      <Content className='content_main' width="80vw">
        <Routers/>
      </Content>
        <div className='chat_logo'>
          <img src={chatImage} alt='chat logo'/>
        </div>
    </Layout>
  );
}

export default App;
