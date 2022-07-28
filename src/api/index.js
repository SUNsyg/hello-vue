/*
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-06-17 17:08:00
 * @LastEditTime: 2022-07-27 16:06:53
 * @LastEditors: Sun yinge
 */
import instance from '../utils/http';


export function getListApi(params) {
    return instance.get('https://jsonplaceholder.typicode.com/posts', {
        params
    })
}