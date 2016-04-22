import React from 'react';

import Todos from './components/Todos';

export default class App extends React.Component{
  render() {
    return (
      <div>
        <Todos />
        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
              <p>
                <strong>Yet another Redux Todo example...</strong> by <a href="http://github.com/royletron">Royletron</a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
};
