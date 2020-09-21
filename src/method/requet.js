import axios from 'axios'
import {message} from 'antd'
import { createHashHistory,createBrowserHistory } from 'history'; // 是hash路由 history路由 自己根据需求来定

const history = createHashHistory();

let base_url = 'http://127.0.0.1:8889/api'

const request = (url, data) => {
    return new Promise((resolve, reject) => {
        let token = window.localStorage['tt_ss_k'] || 'none'
        axios({
            method: 'post',
            url: '/api' + url,
            data: data,
            header: {
                "content-type": "application/json",
                "Authorization": "Bearer " + token
            }
        }).then(r => {
            if (r.data.code != 200 && r.data.code != 401) {
                message.open({
                    type: "error",
                    content: r.data.msg,
                    duration: 2
                })
                reject('')
                return
            }
            if(r.data.code == 401){
                message.open({
                    type: "error",
                    content: '当前登录时效已过期，请重新登录',
                    duration: 2
                })
                reject('')
                history.push('/login');
            }
            resolve(r.data)
        })
    })
}

export default request