//对于axios进行二次封装
import axios from 'axios'
import nProgress from 'nprogress';
import 'nprogress/nprogress.css'

const requests = axios.create({
    baseURL: '/mock',
    //5s超时
    timeout: 5000
});

//请求拦截器
requests.interceptors.request.use((config) => {
    nProgress.start();
    return config;
});

//响应拦截器
requests.interceptors.response.use((response) => {
    nProgress.done()
    return response.data;
}, (error) => {
    return Promise.reject(new Error('faile'));
});

export default requests;