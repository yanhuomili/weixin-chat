import axios from 'axios';
let AUTH_TOKEN='li';

var instance = axios.create({
  baseURL:process.env.BASE_API,
  timeout:10000
});

//当实例创建时候修改配置
instance.defaults.headers.common["Authorization"] = AUTH_TOKEN;

//添加一个请求拦截器
instance.interceptors.request.use(function(config){
  //在请求发出之前进行一些操作
  return config;
},function(err){
  //Do something with request error
  return Promise.reject(error);
});
//添加一个响应拦截器
instance.interceptors.response.use(function(res){
  //在这里对返回的数据进行处理
  return res;
},function(err){
  //Do something with response error
  return Promise.reject(error);
})

export default instance;