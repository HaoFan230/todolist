import { CSSProperties, ReactNode } from "react";
import { styled } from "styled-components";

interface BaseLabelProps {
  icon?: ReactNode;
  title: string;
  tipsNumber?: number | string;
  extras?: ReactNode;
  style?: CSSProperties
  click?: (...args: any[]) => any
}

export type { BaseLabelProps };

export default (props: BaseLabelProps) => {
  return (
    <LabelWrapper style={ props.style }>
      <div className="flex">
        { props.icon && <div className="mr-1">{ props.icon }</div> }
        <span>
          { props.title }
        </span>
      </div>
      <div className="flex flex-center rightActives" onClick={ props.click }>
        { props.tipsNumber && <div className="tips">{ props.tipsNumber }</div> }
        { props.extras && <div className="ml-2">{ props.extras }</div> }
      </div>
    </LabelWrapper>
  );
}

const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(211,211,211, 0.14);
  font-size: 14px;
  padding: 12px 16px;
  margin-bottom: 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.4s;

  &:hover {
    background: rgba(211,211,211, 0.24);
  }

  .tips {
    background: rgba(211,211,211, 0.34);
    font-size: 10px;
    width: 20px;
    height: 20px;
    text-align: center;
    border-radius: 50%;
    overflow: hidden;
    justify-self: flex-end;
    color: black;
  }

  .flex {
    display: flex;
  }

  .flex-center {
    justify-content: center;
    align-items: center;
  }

  .mr-1 { margin-right: 6px; }
  .mr-2 { margin-right: 12px; }
  .ml-2 { margin-left: 12px; }
`