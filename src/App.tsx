import React from 'react';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Footer } from './components/Footer/Footer';
import { Content } from './components/Content/Content';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FunctionComponent = (): JSX.Element => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />
        <Content />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
