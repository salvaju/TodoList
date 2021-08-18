import logo from './logo.svg';
import './App.css';
import TodoList from './features/todos/components/TodoList';
import DoneTodoList from './features/todos/components/DoneTodoList';
import {Route, BrowserRouter, Switch, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <Link to = "/s">Go to the todo list page</Link>
          <Link to = "/done">Go to the Done to do list</Link>
        </ul>
        <Switch>
          <Route exact path = "/s" component = {TodoList}></Route>
          <Route exact path = "/done" component = {DoneTodoList}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
