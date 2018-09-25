## Audio Pad React Component 

It's React Component to create music apps, drum machines, samplers like `Akai MPC` series
or `Maschine`. In next stages I plan add React-Native component, options for users like volume or change sound support.

<p align="center">
  <img src="https://media.giphy.com/media/3Z1p7RAAAhVmaEI1lj/giphy.gif"/>
</p>

## Installation 

`npm install react-audio-pad` 

## Usage 

```js 

import React, { Component } from 'react';
import AudioPad from "react-audio-pad"
import kick from './assets/KICK01.WAV';
import openHihat from './assets/OPENHIHAT01.WAV';
import snare from './assets/SNARE03.WAV';
import hihat from './assets/HIHAT01.WAV'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Audio Pads for React</h1>
        </header>
        <AudioPad audioUrl={kick} keyCode="49" keyUp={false} color={"#d127d1"} volume={0.3}>
          Kick
        </AudioPad>
        <AudioPad audioUrl={snare} keyCode="50" keyUp={false} color={"#d127d1"} volume={1}>
          Snare
        </AudioPad>
        <AudioPad audioUrl={hihat} keyCode="51" keyUp={false} color={"#d127d1"} volume={1}>
          Hihat
        </AudioPad>
        <AudioPad audioUrl={openHihat} keyCode="52" keyUp={false} color={"#d127d1"} volume={1}>
          Open Hihat
        </AudioPad>
      </div>;
  }
}

export default App;
```

## API 

### Props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>audioUrl</td>
          <td>object</td>
          <td></td>
          <td>import object from Your assets</td>
        </tr>
        <tr>
          <td>keyCode</td>
          <td>string</td>
          <td></td>
          <td>string with number of keycode (https://css-tricks.com/snippets/javascript/javascript-keycodes/)</td>
        </tr>
        <tr>
          <td>keyUp</td>
          <td>boolean</td>
          <td>false</td>
          <td>if true, sound will cut when You up key</td>
        </tr>
        <tr>
          <td>color</td>
          <td>string</td>
          <td></td>
          <td>color pad shadow when pressed</td>
        </tr>
        <tr>
          <td>volume</td>
          <td>number</td>
          <td>1.0</td>
          <td>volume of your sound</td>
        </tr>
        <tr>
          <td>width</td>
          <td>number</td>
          <td>100</td>
          <td>width of pad</td>
        </tr>
        <tr>
          <td>height</td>
          <td>number</td>
          <td>100</td>
          <td>height of pad</td>
        </tr>
    </tbody>
</table>

