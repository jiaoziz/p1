import React, { useState, useEffect } from "react";
import './demo.css'
import { getData } from '../api/api.js'
import { message, Radio } from 'antd'
import CardComponent from './CardComponent.jsx'
import TableComponent from './TableComponent.jsx'

const Demo = () => {
    const [messageApi, contextHolder] = message.useMessage();
    // 获取的假数据
    const [data, setData] = useState([])
    // 单选框切换
    const [radioValue, setRadioValue] = useState(1);
    console.log(data)

    // 获取数据
    const getDataList = async () => {
        const res = await getData()
        if (res.status) {
            setData(res.data)
        } else {
            messageApi.error(res.message)
        }
    }

    // 切换单选框
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setRadioValue(e.target.value);
      };

    useEffect(() => {
        getDataList()
    }, [])

    return (
        <div>
            {contextHolder}
            <div className="Radio">
                <Radio.Group onChange={onChange} value={radioValue} optionType='button'>
                    <Radio value={1}>卡片</Radio>
                    <Radio value={2}>列表</Radio>
                </Radio.Group>
            </div>
            <div>
                {
                    radioValue === 1 ? <CardComponent data={data} /> : <TableComponent data={data} />
                }
            </div>
        </div>
    )
}

export default Demo;
