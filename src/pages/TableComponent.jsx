import React from 'react';
import { Table } from 'antd';
import { StarFilled } from '@ant-design/icons';

const columns = [
    {
        title: '所属品类',
        dataIndex: 'productCategory',
        key: 'productCategory',
        render: (text) => {
            
            return <div><StarFilled style={{ color: 'rgb(250, 204, 22)' }} /> {text}</div>
        },
    },
    {
        title: '项目类别',
        dataIndex: 'prjCategory',
        key: 'prjCategory',
    },
    {
        title: '项目编号',
        dataIndex: 'number',
        key: 'number',
    },
    {
        title: '项目名称',
        dataIndex: 'prjName',
        key: 'prjName',
    },
    {
        title: '项目状态',
        dataIndex: 'taskDoingCount',
        key: 'taskDoingCount',
        render: (text, row) => {
            return <div className='dotBox fontSize16'>
                <div className={`dot14 ${!row.taskDoingCount && 'dotRedColor'}`}></div>
                <>{row.taskDoingCount ? '进行中' : '审批中'}</>
            </div>
        }
    },
    {
        title: '项目经理',
        dataIndex: 'prjManager',
        key: 'prjManager',
    },
    {
        title: '所属部门',
        dataIndex: 'department',
        key: 'department',
    },
    {
        title: '项目计划时间',
        dataIndex: 'action',
        key: 'action',
        render: (text, row) => {
            const { prjStartDate, prjEndDate } = row;
            let start = prjStartDate.split(' ')[0];
            let end = prjEndDate.split(' ')[0];
            return <div>{start} ~ {end}</div>
        }
    },
]

const TableComponent = (props) => {
    const { data } = props;
    return <>
        <Table rowKey={(record) => record.prjName} columns={columns} dataSource={data} />
    </>
}

export default TableComponent;