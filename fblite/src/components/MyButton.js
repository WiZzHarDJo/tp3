import React, { Component } from 'react';
import {Button} from 'antd';

class MyButton extends Component {
    render() {

        const {name}=this.props;

        return (
            <div>
                <Button type="primary">
                    {name}
                </Button>
            </div>
        );
    }
}

export default MyButton;