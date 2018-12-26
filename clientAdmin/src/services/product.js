import request from '../utils/request';

export function query(limit, offset) {
  return request(`https://minapp.com/api/v5/trochili/miniapp/?limit=${limit}&offset=${offset}`);
}
