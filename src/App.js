import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import Header from "./components/header/header/Header";
import Sidebar from "./components/header/sidebar/Sidebar";
import Chat from "./components/header/chat/Chat";
import Login from "./components/login/Login";
import { useStateValue } from "./StateProvider/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className='app'>
      <Router>
        {!user ? (
          <Login></Login>
        ) : (
          <>
            <Header></Header>
            <div className='app__body'>
              <Sidebar></Sidebar>
              <Switch>
                <Route path='/room/:roomId'>
                  <Chat></Chat>
                </Route>
                <Route path='/'>
                  <h2>Welcome To the Chat Room</h2>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
