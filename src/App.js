import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import AppStore from './utils/AppStore';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store = {AppStore}>
   <div className="App">
      <Header />
      <Outlet />
    </div>
    </Provider>
   
  );
}

export default App;
