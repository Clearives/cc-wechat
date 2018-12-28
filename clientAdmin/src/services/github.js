import request from '../utils/request';

export function queryUserInfo(username) {
  return request(`https://api.github.com/users/${username}`);
}
