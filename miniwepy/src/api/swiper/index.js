import {
  wxRequest
} from '@/utils/wxRequest'

const apiSwiper = 'https://xxx.xxx.com/'

/**
 * 获取最新小程序
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
const getListMyGroup = (params) => wxRequest(params, apiSwiper + 'api/index/mygroup/listMyGroup')
const getUser = (params) => wxRequest(params, apiSwiper + 'api/user/home')

export default {
  getListMyGroup,
  getUser
}
