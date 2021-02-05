import logo from './logo.svg';
import './App.css';
import Flex from './components/flex';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import P404 from './components/P404';

function App() {
  if(!sessionStorage.sepeturunsayisi){
    const veri = []
    sessionStorage.sepeturunsayisi = JSON.stringify(veri)
  }
  return (
    <Router>
      <Switch>
        
          <Route path="/" exact>
          <div className="App ">
     <Flex route="/"/>
     
    </div>
          </Route>
          <Route path="/butik/liste/erkek" exact>

             <Flex route="/butik/liste/erkek" />
 
          </Route>
          <Route path="/butik/liste/kadin" exact>

             <Flex route="/butik/liste/kadin" />
 
          </Route>
          <Route path="/butik/liste/cocuk" exact>
            <Flex route="/butik/liste/cocuk" />
          </Route>
          <Route path="/butik/liste/ev--yasam" exact>
            <Flex route="/butik/liste/ev--yasam" />
          </Route>
          <Route path="/supermarket" exact>
            <Flex route="/supermarket" />
          </Route>
          <Route path="/apicheck" exact>
            <Flex route="/apicheck" />
          </Route>
          <Route path="/sepetim" exact>
            <Flex route="/sepetim" />
          </Route>


          <Route >
            <P404/>
          </Route>
    </Switch>
    </Router>
  );
}

export default App;
