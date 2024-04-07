import * as data from '../data.json'

export const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve({
                status: true,
                code: 200,
                data: data.default,
                message: 'success'
            })
        }, 200)
    })
}