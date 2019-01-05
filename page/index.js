import React, { Component } from 'react';
import style from './index.less';
export default class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            demo: 1
        }
    }
    //组价加载完成
    componentDidMount() {
        
    }
    //组件卸载
    componentWillUnmount() {

    }
    render() {
        return (
            <div className={style.page}>
                {this.state.demo}
            </div>
        )
    }

}