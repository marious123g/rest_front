import axios from "axios";

const SERVICE_ROOT = "http://localhost:8081/";

const service=axios.create({
    timeout:5000, // 5s超时
})

export const requestData=(method,url,data)=>
{
    return service({
        url:SERVICE_ROOT+url,
        method:method,
        params:data
    })
}