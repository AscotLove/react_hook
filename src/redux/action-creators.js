import {
  SAVE_USER,
  REMOVE_USER,
} from './action-types';

// 保存用户信息
export const saveUser = (user) => ({type: SAVE_USER, data: user});
// 删除用户信息
export const removeUser = () => ({type: REMOVE_USER});
