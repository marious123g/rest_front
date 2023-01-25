import axios from "axios";

// 由于历史原因，本项目的axios通信有两种方式：
// 1. 直接使用axios.post 配置在config/index.js
// 2. 使用封装的request 在这里
// 必须写好url
// 取决于后端项目端口
const SERVICE_ROOT = "http://47.97.171.52:8001/";

const service=axios.create({
    timeout:5000, // 5s超时
})
// method一般是get/post

export const requestData=(method,url,data)=>
{
    return service({
        url:SERVICE_ROOT+url,
        method:method,
        params:data
    })
}