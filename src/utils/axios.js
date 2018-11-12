import axios from "axios";
import qs from "qs";
//axios.defaults.timeout = 10000; //设置请求超时时间
import { message } from "antd";
//import { spaning } from "../actions/common";
axios.defaults.baseURL = "";
//http request 拦截器
axios.interceptors.request.use(
  config => {

    //在发送请求之前做了什么
    let token = sessionStorage.getItem("myron");    //获取token值
    //config.data.token = token;
    const contentType = config.headers.ContentType || "application/x-www-form-urlencoded";

    if (contentType.includes('application/json')) {
      config.data = JSON.stringify(config.data)
    }
    if (contentType.includes("application/x-www-form-urlencoded")) {
      config.data = qs.stringify(config.data);
    }

    if(token){
      config.headers = {
        'Authorization': token ,
        "Content-Type": contentType
      };
    }else{
    	config.headers = { "Content-Type": contentType };
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//http response 拦截器
axios.interceptors.response.use(
  //对相应数据做点什么
    response => {
       /*  setTimeout(() => {
            spaning(false)
        }, 3000);
 */
        const code = response.data.code ;
        if(code === 0){
            return response;
        }else if (code === 4001) {
            message.warning('登录超时');
            window.location.href = "/login";
            sessionStorage.clear();
        }else{
            message.warning(response.data.msg);
            return Promise.reject();
        }
        //return response;
    },
    error => {
        message.error('数据请求失败');
        return Promise.reject();



        //window.location.Reload() ;
        /* window.location.href = "/login";
        sessionStorage.clear(); */
    }
);

export default axios














 /*  handle403() {
    this.props.history.push('/login');
  } */
