import React, { Component } from 'react';

class SketchBinItem extends Component {
  render() {
    const style = {
      backgroundImage: `url(${this.props.sketch.thumbnail_url})`,
      width: 140,
      height: 100,
      display: 'inline-block'
    }
    return (
      <div onClick={() => this.props.onClick(this.props.sketch)} className="SketchBinItem" style={style}>
        {this.props.sketch.title}
      </div>
    );
  }
}

export default SketchBinItem;
