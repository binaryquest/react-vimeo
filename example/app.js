/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import Vimeo from '@binaryquest/react-vimeo'; // eslint-disable-line import/no-unresolved

class App extends React.Component {
  render() {
    return (
      <>
      <Vimeo id="vid175336431" video="175336431" backgroundImage="https://demo1.binaryquest.com/assets/img/175336431/video.webp" ></Vimeo>
      <div id="vid175336431"></div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('example'));
