import axios from "axios"
import {baseUrl, timeout} from "./config"

const instance = axios.create({
   baseUrl: baseUrl,
   timeout: timeout
})
instance.interceptors.request.use(config => {
    console.log("请求被拦截")
    return config
}, err => {
    console.log(err)
})
instance.interceptors.response.use(res => {
    console.log("响应被拦截")
    return res
}, err => {
   if(err && err.response) {
       switch(err.response.status) {
           case 404:
               console.log("文件找不到")
               break;
            case 502:
                console.log("服务器内部错误")
                break;
            default:
                console.log("其他错误")
       }
   }
   return err
})
export default instance