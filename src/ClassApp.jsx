/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Component } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Button, StoreView } from 'zustand-sc';
import { withBears } from './utils';

  
  class ClassApp extends Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }

  render() {

    return (
      <>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            count is {this.state.count}
          </button>
          <Button>Testing</Button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <span>{this.props.countBears} class</span>
        <StoreView />
      </>
    );
  }
}

export default withBears(ClassApp);
