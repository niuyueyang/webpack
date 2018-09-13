//import * as React from 'react';
//import {Component} from 'react';
//import {render} from 'react-dom';
//class Button extends Component{
//	render(){
//		return <h1>hello,webpackReact JSX</h1>
//	}
//}
//render(<Button/>,window.document.getElementById('app'));

var React = require('react');
class Hello extends React.Component {
  render() {
    return (
      <h1>Hello {this.props.name}!</h1>
    );
  }
}
module.exports = Hello; 

