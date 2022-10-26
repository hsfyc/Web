//API进行统一管理
import requests from './request'
import mockRequests from './mockRequest'

//三级联动接口
///api/product/getBaseCategoryList    get    无参
//发请求:axios发请求返回Promise对象
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })
//获取banner首页轮播图接口
export const reqGetBannerList = () => mockRequests({ url: '/banner', method: 'get' })
//获取floor列表数据
export const reqGetFloor = () => mockRequests.get('/floor')
//获取搜素模块数据
export const reqGetSearchInfo = (params) => requests({ url: '/list', method: 'post', data: params }) 
