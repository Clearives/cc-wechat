import request from '../utils/request';

export function query() {
  return request('https://minapp.com/api/v5/trochili/miniapp/');
}
