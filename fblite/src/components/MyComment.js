import React, { Component } from 'react';
import {Comment, Tooltip} from 'antd';
import moment from 'moment';

class MyComment extends Component {

    render() {
        const {commentaire, nom} = this.props;

        return (
            <div>
                <Comment
                    author={nom}
                    content={(
                      <p>{commentaire}</p>
                    )}
                    datetime={(
                      <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{moment().fromNow()}</span>
                      </Tooltip>
                    )}
                />
            </div>
        );
    }
}

export default MyComment;