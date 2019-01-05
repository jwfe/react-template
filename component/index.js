import React, { Component } from 'react';
import style from './index.less';
class ScrollingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            demo: 1
        }
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        // Are we adding new items to the list?
        // Capture the current height of the list so we can adjust scroll later.
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // If we have a snapshot value, we've just added new items.
        // Adjust scroll so these new items don't push the old ones out of view.
        if (!snapshot) return;
        //init function
        this.init();
       
    }

    componentDidMount() {

    }
    
    componentWillUnmount() {
        this.init();
    }
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }
    init () {
        console.log('componment init')
    }
    render() {
        return (
            <div>{this.state.demo}</div>
        );
    }
} 