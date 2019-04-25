import Axios from 'axios'
import {commonParams} from './config'

export function getSingerList() {
  const url = '/getSingerList'
  const data = Object.assign({}, commonParams, {
    g_tk: 416181065,
    loginUin: 0,
    hostUin: 0,
    format: 'json',
    platform: 'yqq.json',
    needNewCode: 0,
    data: {'comm': {'ct': 24, 'cv': 0},
      'singerList': {'module': 'Music.SingerListServer',
        'method': 'get_singer_list',
        'param': {'area': -100,
          'sex': -100,
          'genre': -100,
          'index': -100,
          'sin': 0,
          'cur_page': 1}}
    }
  })
  return Axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
