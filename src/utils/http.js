/*
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-06-17 15:27:41
 * @LastEditTime: 2022-07-27 16:00:46
 * @LastEditors: Sun yinge
 */
import axios from 'axios';

const instance = axios.create({
    baseURL: '',
    timeout: 60000,
    // headers: {'application/json': 'foobar'}
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

instance.interceptors.response.use(function (response) {
    // 在发送请求之前做些什么
    console.log(response)
    const {status,data} = response;
    if (status!=200) {
        console.log('错误')
        return '';
    }
    return data;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

export default instance;