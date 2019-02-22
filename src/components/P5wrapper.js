import React from 'react';
let p5;

export default class P5Wrapper extends React.Component {
    componentDidMount() {
        p5 = require('p5');
        this.canvas = new p5(this.props.sketch, this.wrapper);
        if (this.canvas.myCustomRedrawAccordingToNewPropsHandler) {
            this.canvas.myCustomRedrawAccordingToNewPropsHandler(this.props);
        };
    };

    componentWillReceiveProps(newprops) {
        p5 = require('p5');
        if (this.props.sketch !== newprops.sketch) {
            this.canvas.remove();
            this.canvas = new p5(newprops.sketch, this.wrapper);
        };
        if (this.canvas.myCustomRedrawAccordingToNewPropsHandler) {
            this.canvas.myCustomRedrawAccordingToNewPropsHandler(newprops);
        };
    };

    componentWillUnmount() {
        this.canvas.remove();
    };

    render() {
        return <div ref={wrapper => this.wrapper = wrapper}></div>;
    };
}