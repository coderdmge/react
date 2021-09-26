import React, { PureComponent } from 'react'
import {Button, DatePicker} from "antd"
import moment from "moment"
import {PoweroffOutlined} from "@ant-design/icons"
export default class App extends PureComponent {
    render() {
        let loadings = false
        return (
            <>
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <Button type="primary" icon={<PoweroffOutlined />} loading />
        <br />
        <Button type="primary" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          onClick={() => this.enterLoading(1)}
        >
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[2]}
          onClick={() => this.enterLoading(2)}
        />
      <DatePicker defaultValue={moment('2015-01-01', 'YYYY-MM-DD')} />

      </>

        )
    }
}
