import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Checkbox, Divider, Row, Typography } from 'antd';
import { ReactNode } from "react";
import { styled } from "styled-components"

const { Text } = Typography;

interface RecordWrapper {
  labelColor: string;
  title: string;
  icon: string | ReactNode;
}

export default (props: RecordWrapper) => {
  return (
    <RecordWrapper>
      <div className="record-item">
        <Row align="middle" justify="space-between">
          <Row align="middle" justify="start">
            <Checkbox />
            <div className="ml-1">
              <Text ellipsis={true}>
                { props.title }
              </Text>
            </div>
          </Row>
          <Row align="middle" justify="end">
            <Text type="danger">
              过期时间: 仅一天
            </Text>
            <Divider type="vertical" />
            <Button type="text" icon={ <InfoCircleOutlined /> }/>
          </Row>
        </Row>
      </div>
      <div className="record-item">
        <Row>
          <Checkbox />
          <div className="ml-1">
            { props.title }
          </div>
        </Row>
      </div>
      <div className="record-item">
        <Row>
          <Checkbox />
          <div className="ml-1">
            { props.title }
          </div>
        </Row>
      </div>
    </RecordWrapper>
  )
}

const RecordWrapper = styled.div<Partial<RecordWrapper>>`
  .record-item {
    border-left-width: 3px;
    border-left-style: solid;
    ${ props => props.labelColor && `border-left-color: ${props.labelColor}` }

    padding: 12px 16px;
    margin-bottom: 12px;
  }

  .ml-1 { margin-left: 6px; }
  .ml-2 { margin-left: 12px; }
`