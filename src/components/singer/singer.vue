<template>
  <div class="singer">
      <Listview :data="singer"></Listview>
  </div>
</template>

<script type="text/ecmascript-6">

import {getSingerList} from 'api/singer'
import {ERR_OK} from 'api/config'
// eslint-disable-next-line standard/object-curly-even-spacing
import {setSingerId, amendStr } from 'common/js/singerpinyin'
import Listview from 'base/listview/listview'

const HOT_NAME = '热门'
const HOT_SINGER_LENGTH = 10
export default {
  data () {
    return {
      singer: []
    }
  },
  created () {
    this._getSinger()
  },
  methods: {
    _getSinger () {
      getSingerList().then((res) => {
        if (res.code === ERR_OK) {
          this.singer = this._normalizeSinger(res.singerList.data.singerlist)
        }
        // console.log(this.singer)
      })
    },
    _normalizeSinger (list) {
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      }
      for (var i = 0; i < list.length; i++) {
        list[i] = {
          id: list[i].singer_mid,
          name: list[i].singer_name,
          Findex: setSingerId(list[i].singer_name),
          avatar: amendStr(list[i].singer_pic)
        }
      }
      list.forEach((item, index) => {
        if (index < HOT_SINGER_LENGTH) {
          map.hot.items.push({
            id: item.id,
            name: item.name,
            avatar: item.avatar
          })
        }
        const key = item.Findex
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          }
        }
        // map数据重构并排序
        map[key].items.push({
          id: item.id,
          name: item.name,
          avatar: item.avatar
        })
      })
      let hot = []
      let ret = []
      for (let key in map) {
        let val = map[key]
        if (val.title.match(/[a-zA-z]/)) {
          ret.push(val)
        } else if (val.title === HOT_NAME) {
          hot.push(val)
        }
      }
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      return hot.concat(ret)
    }
  },
  components: {
    Listview
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer
    position:fixed
    top: 88px
    bottom: 0
    width: 100%
</style>
