import React, { Component } from 'react';
import {Comment, Icon, Tooltip} from 'antd';
import moment from 'moment';

class MyComment extends Component {

    constructor(props){
        super(props);
        this.state = {
            likes: 0,
        }
    }

    like = () => {
        let cpt = this.state.like;
        cpt=cpt+1;
        this.setState({
          likes: cpt,
        });
    }

    render() {

        const { likes } = this.state;
        const {commentaire, nom} = this.props;

    const actions = [
      <span>
        <Tooltip title="Like">
          <Icon
            type="like"
            onClick={this.like}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>
          {likes}
        </span>
        </span>

    ];
        return (
            <div>
                <Comment
                    actions={actions}
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