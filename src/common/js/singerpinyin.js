var pinyin = require('pinyin')

export function setSingerId(data) {
  if (data.length <= 0) { return }
  let singerid = []
  singerid.push(pinyin(data, {
    style: pinyin.STYLE_FIRST_LETTER,
    heteronym: true,
    segment: true
  }))
  singerid.forEach((item, index) => {
    singerid = item.toString().toLocaleUpperCase()
  })
  return singerid[0]
}
export function amendStr (arr) {
  if (arr.length <= 0) {
    return
  }
  let arrSrc = []
  arrSrc.push(arr)
  return arrSrc[0].replace('.webp', '.jpg')
}
