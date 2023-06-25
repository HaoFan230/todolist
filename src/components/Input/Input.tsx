import { EditOutlined } from "@ant-design/icons"
import { Button, Divider } from "antd"
import TextArea from "antd/es/input/TextArea"
import { styled } from "styled-components"

export default () => {
  return (
    <InputWrapper>
      <div className="TextAreaCustom">
        <TextArea className="borderRightStyle" placeholder="快点记录今日要做的事情吧 ~" bordered={false}  autoSize />
        <div className="">
          <div className="Column">
            <Divider type="vertical" />
            <Button type="text" icon={ <EditOutlined /> } />
          </div>
        </div>
      </div>
    </InputWrapper>
  )
}

const InputWrapper = styled.div`
  min-width: 200px;
  /* margin: 10px; */
  padding: 6px 12px;
  border: 1px solid rgba(211,211,211, 0.48);
  border-radius: 10px;
  
  .TextAreaCustom {
    display: flex;
    justify-content: space-between;
    
    .Column {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }
`