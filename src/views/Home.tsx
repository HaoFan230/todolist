import { AlertOutlined, AlignLeftOutlined, CalendarOutlined, CheckSquareOutlined, InfoCircleOutlined, PlusOutlined, SettingOutlined, WalletOutlined } from '@ant-design/icons';
import { Button, Row } from 'antd';
import styled from 'styled-components';
import BaseLabel from '../components/Labels/BaseLabel';
import ListLabel from '../components/Labels/ListLabel';
import Input from '../components/Input/Input';
import Record from '../components/Record/Record';
import { ReactNode, useState } from 'react';


const NotMenuElement = () => {
  const Wrapper = styled.div`
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 12px;
    color: rgb(211, 211, 211);
  `;
  return (
    <Wrapper>
      暂时没有清单, 快创建一个吧!
    </Wrapper>
  )
}

export default () => {
  const [menuList, setMenuList] = useState<any>([]);

  const addCategoryMenu = () => {
    setMenuList((existingItems:any) => [
      {
        icon: <InfoCircleOutlined />,
        title: "新建任务",
        borderColor: '037ef3',
      },
      ...existingItems
    ])
  }

  return (
    <HomeWrapper>
      <div className="tabbar space">
        <BaseLabel title="今日" icon={ <CalendarOutlined /> } tipsNumber={ 24 }/>
        <BaseLabel title="所有" icon={ <WalletOutlined /> } tipsNumber={ 24 } />
        <BaseLabel title="已完成" icon={ <CheckSquareOutlined /> } />
        <Row className='label' align="middle" justify="space-between">
          <span className="title">清单列表</span>
          <Button type="text" size="small" icon={<PlusOutlined />} onClick={ addCategoryMenu } />
        </Row>
        <div>
          {
            menuList.length
              ? menuList.map((item:{ icon: ReactNode, title: string, borderColor: string }, index:number) => <ListLabel {...item} key={index} extras={ <SettingOutlined /> } /> )
              : <NotMenuElement />
          }
          {/* <ListLabel icon={ <InfoCircleOutlined /> } title="默认任务" borderColor='#037ef3' extras={ <SettingOutlined /> }/> */}
          {/* <ListLabel icon={ <AlignLeftOutlined /> } title="默认任务1" borderColor='#f48924' extras={ <SettingOutlined /> }/> */}
          {/* <ListLabel icon={ <AlertOutlined /> } title="默认任务2" borderColor='#7552cc' extras={ <SettingOutlined /> }/> */}
        </div>
      </div>
      <div className="list space">
        <Record title="默认任务2" labelColor='#7552cc' icon={ <SettingOutlined /> } />
        <Input />
      </div>
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div`
  width: 100vw;
  min-width: 350px;
  height: 100vh;
  display: flex;
  jsutify-content: space-between;

  .label {
    margin-bottom: 6px;
  }

  .title {
    font-size: 12px;
  }

  .space {
    padding: 14px 18px;
  }

  .list {
    flex-grow: 1;
  }

  .tabbar {
    height: 100%;
    width: 20%;
    border-right: 1px solid rgba(211,211,211, 0.4);
  } 
`