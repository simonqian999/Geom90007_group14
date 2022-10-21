import React, { Component } from 'react';
import tableau from 'tableau-api';
 
 
class Transport extends Component {
  componentDidMount() {
    this.initViz()
  }
 
 
  initViz() {
    const vizUrl = 'https://public.tableau.com/views/Mel_Transportation/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link';
    const vizContainer = this.vizContainer;
    let viz = new window.tableau.Viz(vizContainer, vizUrl)
  }
 
 
  render() {
    return (
      <div style={{width:'100%', height:"800px"}} ref={(div) => { this.vizContainer = div }}>
      </div>
    )
  }
}
 
 
export default Transport;