import React from 'react'
import { Card, Col, Row, Input } from 'antd'
import 'antd/dist/antd.css'
function Textbox () {
  const { TextArea } = Input

  return(
      // <div className="site-card-border-less-wrapper">
      //   <Card title="Card title" bordered={false} style={{ width: 300 }}>
      //     <textarea />
      //   </Card>
      // </div>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card title= 'Input' bordered={false}>
              <TextArea rows={4} />
            </Card>
          </Col>
        </Row>
      </div>
  )

}

export default Textbox