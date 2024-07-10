import './App.css'
import CakeContainer from './Component/CakeContainer';
import { Provider } from 'react-redux'
import Store from './Redux/Store';
import PastyContainer from './Component/PastyContainer';

function App() {

  return (
    <>
      <Provider store={Store}>
        <CakeContainer />
        <PastyContainer/>
      </Provider>

    </>
  );
}

export default App
