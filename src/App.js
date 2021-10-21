import { BrowserRouter, Route } from 'react-router-dom'
import Login from './pages/login/Login';
import Admin from './pages/admin/Admin';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path='/login' component={Login}></Route>
        <Route path='/admin' component={Admin}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
