import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
import Axios from 'axios'
// 获取轮播图数据
export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return jsonp(url, data, options)
}
// 获取全部歌单数据
export function getDiscList() {
  const url = '/getDiscList'
  const data = Object.assign({}, commonParams, {
    g_tk: 1209423302,
    format: 'json',
    loginUin: 1,
    picmid: 1,
    hostUin: 0,
    platform: 'yqq.json',
    categoryId: 10000000,
    needNewCode: 0,
    sortId: 5,
    sin: 0,
    ein: 19,
    rnd: Math.random()
  })
  return Axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
