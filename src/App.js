import {BrowserRouter, BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import {HashRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Route path="/profile" render={ () => <Profile postsData={props.postsData}/>}/>
          <Route path="/messages" render={ () => <Messages dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
          <Route path="/news" render={ () => <News/>}/>
          <Route path="/music" render={ () => <Music/>}/>
          <Route path="/settings" render={ () => <Settings/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
