import { styled } from "styled-components"
import BaseLabel, { type BaseLabelProps } from "./BaseLabel"
import { Modal, Form, ColorPicker, Button, Space } from "antd";
import { useState } from "react";

interface ListLabelProps extends BaseLabelProps {
  borderColor?: string;
}

export default (props: ListLabelProps) => {
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  
  const clickHandle = () => {
    setIsModalOpen(!isModalOpen)
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <ListLabelWrapper {...props}>
      <Modal title="清单设置" open={ isModalOpen } onCancel={ closeModal } footer={null}>
        <Form layout="vertical">
          <Form.Item label="设置图标">
            
          </Form.Item>
          <Form.Item label="设置Label颜色">
            <ColorPicker />
          </Form.Item>
          <Form.Item label="操作">
            <Space>
              <Button type="primary" danger>删除分组</Button>
            </Space>
          </Form.Item> 
        </Form>
      </Modal>
      <BaseLabel click={ clickHandle } style={{ borderRadius: '0px', background: 'white' }} {...props} />
    </ListLabelWrapper>
  )
}

const ListLabelWrapper = styled.div<Partial<ListLabelProps>>`
  border-left-width: 3px;
  border-left-style: solid;
  border-left-color: ${ props => props.borderColor || 'white' };
  border-right: 2px solid rgba(211,211,211, 0.14);

  .rightActives { display: none; }

  &:hover {
    .rightActives { display: block; }
  }

  animation: showAni 0.4s;

  @keyframes showAni {
    from { transform: translateY(-10px); opacity: 0.5; }
    to { transform: translateY(0px); opacity: 1; }
  }

`