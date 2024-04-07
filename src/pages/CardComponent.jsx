import React from 'react';
import { Card } from 'antd'
import './demo.css'
import imageInfo from '../image.jpg'
import { StarFilled } from '@ant-design/icons';

const { Meta } = Card;

const CardComponent = (props) => {
    const { data } = props;
    return <div className='space'>
        {
            data.map((item, index) => {
                return <Card hoverable key={index} className='card'>
                    <Meta
                        avatar={<img src={imageInfo} alt="图片信息" className='img' />}
                        title={
                            <div className='title'>
                                <div className=''>{item.prjName}</div>
                                <div className='dotBox'>
                                    <div className={`dot ${!item.taskDoingCount && 'dotRedColor'}`}></div>
                                    <>{item.taskDoingCount ? '进行中' : '审批中'}</>
                                </div>
                            </div>
                        }   
                        description={
                            <div className='fontSize10'>
                                <div>
                                    项目经理：<span>张三</span>
                                </div>
                                <div>
                                    立项日期：<span>{item.prjStartDate}</span>
                                </div>
                                <div className='task' style={{display: item.taskCount === null ? 'none' : 'flex'}}>
                                    <div>
                                        任务：<span>{item.taskCount || 0}</span> 完成：<span>{item.taskDoneCount || 0}</span> 进行：<span>{item.taskDoingCount || 0}</span>
                                    </div>
                                    <div>
                                        <StarFilled style={{ color: 'rgb(250, 204, 22)' }} />
                                    </div>
                                </div>
                            </div>
                        }
                    />
                </Card>
            })
        }
    </div>
}

export default CardComponent;
