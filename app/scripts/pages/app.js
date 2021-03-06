import React from 'react';
import Header from '../components/header'

const App = (props) => {
    return (
      <main>
        <Header />
        <section className="content">
          {props.children}
        </section>
      </main>
    );
};

export default App;
