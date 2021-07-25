import './App.css';
import {Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Posts from './pages/Posts';
import Navbar from './pages/Navbar';
import PrivateRoute from './components/PrivateRoute'
import Room from './components/Room/Room';
import Main from './components/Main/Main';
import Courses from './pages/Courses';
import Courses_Student from './pages/Courses_Student';

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/Login' component={Login}/>
     {/*  <Route exact path='/Register' component={Register}/> */}
      <Route exact path='/Register/:role' component={Register}/>
      <Route exact path='/Posts' component={Posts}/>
      <Route exact path='/Courses' component={Courses}/>
      <Route exact path='/StudentCourses' component={Courses_Student}/>
      <Route exact path='/Profile' component={Profile}/>
      <Route exact path="/Main" component={Main} />
      <PrivateRoute exact path="/Room/:roomId" component={Room} />

      </Switch>


      
    </div>
  );
}

export default App;
