import axios from 'axios';
import { ElNotification } from 'element-plus';
const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 1000000 // 请求超时时间
})
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
instance.interceptors.response.use(function (response) {
  const code = response.data.code
  if (code !== 200) {
    ElNotification({
      title: 'Title',
      message: `请求错误。`,
    })
  }
  // Do something after response is get
});
export {
  instance as axios
}