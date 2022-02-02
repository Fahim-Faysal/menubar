import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Activity from './Component/Activity/Activity';
import AppTab from './Component/AppTab/AppTab';
import Calender from './Component/Calender/Calender';
import Calls from './Component/Calls/Calls';
import Chat from './Component/Chat/Chat';
import Files from './Component/Files/Files';
import Help from './Component/Help/Help';
import Menubar from './Component/Menubar/Menubar';
import Temas from './Component/Teams/Temas';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Menubar />}></Route> */}
          <Route path='/menubar' element={<Menubar />}>
            <Route path='activity' element={<Activity />}></Route>
            <Route path='chat' element={<Chat />}></Route>
            <Route path='teams' element={<Temas />}></Route>
            <Route path='calender' element={<Calender />}></Route>
            <Route path='calls' element={<Calls />}></Route>
            <Route path='files' element={<Files />}></Route>
            <Route path='app' element={<AppTab />}></Route>
            <Route path='help' element={<Help />}></Route>
          </Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
