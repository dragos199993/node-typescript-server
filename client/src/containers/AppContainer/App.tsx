import React, { Component, ReactNode } from 'react';
import Header from '../../components/shared/Header';
import mainRouter from '../../router/mainRouter';
import { Container } from 'reactstrap';

class App extends Component {
  public render(): ReactNode {
    return (
      <div className="App">
        <Header />
        <Container>
          { mainRouter }
        </Container>
      </div>
    );
  }
}

export default App;
