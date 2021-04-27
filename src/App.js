import GlobalStyles from './components/globalStyles';
import Home from './pages/home';
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
