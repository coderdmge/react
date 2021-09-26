import React, { PureComponent } from 'react'
import {DeleteOutlined} from "@ant-design/icons"
import {Comment, Avatar, Tooltip} from "antd"
import moment from "moment"


export default class item extends PureComponent {
    render() {
        const { nickname, avatar, content} = this.props.values
        return (
            <Comment
             author={<a href="/#">{nickname}</a>}
            avatar={ <Avatar  src={avatar}  alt={nickname}/>}
            content={  <p>{content} </p> }
            datetime={
              <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                <span >{moment().fromNow()}</span>
              </Tooltip>
            }
            actions={[
                <span onClick={() => this.removeItem()}><DeleteOutlined style={{marginRight: "2px"}}/>删除</span>
            ]}
          />
        )
    }
    removeItem() {
        this.props.HandleremoveItem()
    }
}
