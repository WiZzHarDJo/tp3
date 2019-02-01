import React, { Component } from 'react';
import {Comment, Icon, Tooltip} from 'antd';
import moment from 'moment';

class MyComment extends Component {

    constructor(props){
        super(props);
        this.state = {
            likes: 0,
            dislikes: 0,
            action: null,
        }
    }

    like = () => {
        let cpt = this.state.like;
        cpt=cpt+1;
        this.setState({
          likes: cpt,
          dislikes: 0,
          action: 'liked',
        });
    }

    dislike = () => {
        let cpt = this.state.dislike;
        cpt=cpt+1;
        this.setState({
          likes: cpt,
          dislikes: 1,
          action: 'disliked',
        });
    }

    render() {

        const { likes, dislikes, action } = this.state;

    const actions = [
      <span>
        <Tooltip title="Like">
          <Icon
            type="like"
            theme={action === 'liked' ? 'filled' : 'outlined'}
            onClick={this.like}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>
          {likes}
        </span>
      </span>,
      <span>
        <Tooltip title="Dislike">
          <Icon
            type="dislike"
            theme={action === 'disliked' ? 'filled' : 'outlined'}
            onClick={this.dislike}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>
          {dislikes}
        </span>
      </span>,
      <span>Reply to</span>,
    ];
        return (
            <div>
                <Comment
                    actions={actions}
                    author="Han Solo"
                    content={(
                      <p>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p>
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