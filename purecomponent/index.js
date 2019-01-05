import React ,{ PureComponent } from 'react';

class Demo extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            demo: 1
        }
    }
    render() {
        return (
            <div>
                {this.state.demo}
            </div>
        )
    }
}