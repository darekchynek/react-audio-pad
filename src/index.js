import React from 'react';
import PropTypes from "prop-types";

class AudioPad extends React.Component {
  constructor(props) {
    super(props);
    const { volume, width, height, audioUrl, color, margin } = this.props;
    this.audio = new Audio(audioUrl);
    this.audio.setAttribute("crossorigin", "anonymous");
    this.audio.volume = volume;
    this.state = {
      hover: false
    };
    this.audioBlock = {
      display: "inline-block",
      margin: `${margin}px`
    };
    this.defaultStyle = {
      width: `${width}px`,
      height: `${height}px`,
      backgroundColor: "#ABB1B7",
      borderRadius: "2px",
      boxShadow: "0px 0px 16px 1px rgba(0,0,0,0.75)"
    };
    this.hoverStyle = {
      width: `${width}px`,
      height: `${height}px`,
      borderRadius: "2px",
      boxShadow: `0px 0px 16px 1px ${color}`,
      backgroundColor: "#9499A2",
      transition: "0.05s"
    };
  }

  componentDidMount() {
    const { keyCode, keyUp } = this.props;
    this.createListener(this.audio, keyCode, keyUp);
  }

  createListener(audio, keyCode, keyUp) {
    document.addEventListener("keypress", e => {
      if (e.keyCode == String(keyCode)) {
        this.setState({ hover: true });
        audio.load();
        audio.play();
        document.addEventListener("keyup", e => {
          if (e.keyCode == String(keyCode)) {
            this.setState({ hover: false });
            if (keyUp) audio.pause();
          }
        });
      }
    });
  }

  render() {
    return (
      <div style={this.audioBlock}>
        <div
          style={
            this.state.hover === true ? this.hoverStyle : this.defaultStyle
          }
        />
        <p>{this.props.children}</p>
      </div>
    );
  }
}
export default AudioPad;

AudioPad.propTypes = {
    volume: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    margin: PropTypes.number,
    audioUrl: PropTypes.string,
    color: PropTypes.string,
    keyCode: PropTypes.string,
    keyUp: PropTypes.bool
};
AudioPad.defaultProps = {
    volume: 100,
    width: 100,
    height: 100,
    margin: 20,
    color: "#d127d1",
    keyUp: false
};

