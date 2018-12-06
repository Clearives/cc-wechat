import {
  wxRequest
} from '@/utils/wxRequest'

const apiMiniapp = 'https://minapp.com/api/'

/**
 * 获取最新小程序
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
const getLatestList = (params) => wxRequest(params, apiMiniapp + 'v5/trochili/miniapp/')

export default {
  getLatestList
}
