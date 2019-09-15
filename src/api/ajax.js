import axios from 'axios';



const axiosInstance = axios.create({
  baseURL: 3000,
  timeout:7000
});


axiosInstance.interceptors.response.use(
  (response) => {
    const result = response.data;
    if (result === 0) {
      return result.data || {}
    } else {
      return Promise.reject(result.msg || '请求是白')
    }
  },
  (error) => {
    console.log('axios', error)
    return Promise.reject('网络故障')
  }
)


export default axiosInstance;