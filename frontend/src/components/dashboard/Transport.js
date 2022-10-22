import React, { Component } from 'react';
import tableau from 'tableau-api';
import NavHeader from '../header/NavHeader';
 
 
class Transport extends Component {
  componentDidMount() {
    this.initViz()
  }
 
 
  initViz() {
    const vizUrl = 'https://public.tableau.com/views/tranport/Dashboard2?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link';
    const vizContainer = this.vizContainer;
    let viz = new window.tableau.Viz(vizContainer, vizUrl)
  }
 
 
  render() {
    return (
      <>
      <NavHeader page={"transport"}/>
      <div style={{width:'100%', height:"810px"}} ref={(div) => { this.vizContainer = div }}>
      </div>
      </>
    )
  }
}
 
 
export default Transport;