import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import contatoContext from '../context/contatoContext';
import Editcontato from '../components/Editcontato';
import { Redirect } from 'react-router-dom/cjs/react-router-dom';
import Addcontato from '../components/Addcontato';
import contatoList from '../components/contatoList';
import useLocalStorage from '../hooks/useLocalStorage';

const AppRouter = () => {
  const [contato, setcontato] = useLocalStorage('contato', []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <contatoContext.Provider value={{ contato, setcontato }}>
            <Switch>
              <Route component={contatoList} path="/" exact={true} />
              <Route component={Addcontato} path="/add" />
              <Route component={Editcontato} path="/edit/:id" />
              <Route component={() => <Redirect to="/" />} />
            </Switch>
          </contatoContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;