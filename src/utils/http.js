import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://81.70.80.195:3000/eduplat-boot/app',
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log(config)
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

export default instance;