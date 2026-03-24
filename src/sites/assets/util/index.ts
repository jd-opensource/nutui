const ua = navigator.userAgent.toLowerCase()
const isMobile = /ios|iphone|ipod|ipad|android/.test(ua)
const isJDT = () => {
  return window.parent.location.href.includes('jdt')
}
const isJDB = () => {
  return window.parent.location.href.includes('jdb')
}
const isJDDKH = () => {
  return window.parent.location.href.includes('jddkh')
}
const isJDA = () => {
  return window.parent.location.href.includes('jda')
}
export { isMobile, isJDT, isJDB, isJDDKH, isJDA }

export const reorder = (packages: Array<any>) => {
  return packages.sort(function (x: any, y: any) {
    return x['name'].localeCompare(y['name'])
  })
}
