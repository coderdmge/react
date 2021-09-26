import React, { PureComponent } from 'react'
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import {CSSTransition} from "react-transition-group"
import "./style.css"
const { Meta } = Card;

export default class csstransitondemo extends PureComponent {
    constructor() {
        super()
        this.state = {
            isShow: true
        }
    }
    render() {
        const {isShow} = this.state
        return (
            <div>
                <button onClick={() => this.setState({isShow: !isShow})}>切换</button>
                <CSSTransition in={isShow}
                timeout={300}
                classNames="card"
                unmountOnExit={true}
                appear
                >
                    <Card
                        style={{ width: 300 }}
                        cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                        }
                        actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title="Card title"
                        description="This is the description"
                        />
                    </Card>
                </CSSTransition>
            </div>
        )
    }
}
