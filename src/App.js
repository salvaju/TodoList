import './App.css';
import TodoList from './features/todos/components/TodoList';
import DoneTodoList from './features/todos/components/DoneTodoList';
import {Route, BrowserRouter, Switch, Link} from "react-router-dom";
import { Menu } from 'antd';
import {BarsOutlined} from '@ant-design/icons'

function App() {

  const { SubMenu } = Menu;

 const handleClick = e => {
    console.log('click ', e);
  };

  

  return (
    <div className="App">


      

      



      <BrowserRouter>
      <div className = 'menu'><Menu
                onClick={handleClick}
                style={{ width: 256 }}
                mode="inline">

        <SubMenu key="sub1" icon={<BarsOutlined />} title="Navigation">
            <Menu.Item key="1"><Link to = "/todos">Todo List</Link></Menu.Item>
            <Menu.Item key="2"><Link to = "/done">Done Todo List</Link></Menu.Item>
        </SubMenu>
      </Menu></div>
              
        <Switch>
          <Route exact path = "/todos" component = {TodoList}></Route>
          <Route exact path = "/done" component = {DoneTodoList}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
