import { navigate } from "navigation/utils";
import { Alert } from "react-native";

// 状态码
const codeMessage: Record<number, string> = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户信息已失效，请重启登录',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '您请求的资源不存在，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

// 返回错误提示
const rejectError = (code: number) => {
  Alert.alert('Alert Title', codeMessage[code], [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {
      text: 'OK', onPress: () => {
        navigate('Login', { userName: 'Lucy' })
        console.log('OK Pressed')
      }
    },
  ]);
  return Promise.reject(codeMessage[code])
}

/**
 * @description: 请求错误时打印状态
 * @param {number} status
 * @param {string} path
 * @return {*}
 */
export const printHttpError = (status: number, path: string): void => {
  switch (status) {
    case 400:
      console.log(`错误的请求:${path}`);
      rejectError(status)
      break;
    // 401: 未登录
    // 未登录则跳转登录页面，并携带当前页面的路径
    case 401:
      console.log('你没有登录,请先登录');
      rejectError(status)
      window.location.reload();
      break;
    // 跳转登录页面
    case 403:
      console.log('登录过期，请重新登录');
      // 清除全部的缓存数据
      window.localStorage.clear();
      window.location.reload();
      break;
    // 404请求不存在
    case 404:
      console.log('网络请求不存在');
      break;
    // 其他错误，直接抛出错误提示
    default:
      console.log('我也不知道是什么错误');
      break;
  }
};