import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import baoxiuxinxi from '@/views/modules/baoxiuxinxi/list'
    import fangyuanxinxi from '@/views/modules/fangyuanxinxi/list'
    import xiaoqutongzhi from '@/views/modules/xiaoqutongzhi/list'
    import storeup from '@/views/modules/storeup/list'
    import xiaoquhuanjing from '@/views/modules/xiaoquhuanjing/list'
    import forum from '@/views/modules/forum/list'
    import jiaofeixinxi from '@/views/modules/jiaofeixinxi/list'
    import discussfangyuanxinxi from '@/views/modules/discussfangyuanxinxi/list'
    import weixiuzhipai from '@/views/modules/weixiuzhipai/list'
    import messages from '@/views/modules/messages/list'
    import xiaoquxinxi from '@/views/modules/xiaoquxinxi/list'
    import zhuhu from '@/views/modules/zhuhu/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/baoxiuxinxi',
        name: '报修信息',
        component: baoxiuxinxi
      }
      ,{
	path: '/fangyuanxinxi',
        name: '房源信息',
        component: fangyuanxinxi
      }
      ,{
	path: '/xiaoqutongzhi',
        name: '小区通知',
        component: xiaoqutongzhi
      }
      ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
      ,{
	path: '/xiaoquhuanjing',
        name: '小区环境',
        component: xiaoquhuanjing
      }
      ,{
	path: '/forum',
        name: '住户交流',
        component: forum
      }
      ,{
	path: '/jiaofeixinxi',
        name: '缴费信息',
        component: jiaofeixinxi
      }
      ,{
	path: '/discussfangyuanxinxi',
        name: '房源信息评论',
        component: discussfangyuanxinxi
      }
      ,{
	path: '/weixiuzhipai',
        name: '维修指派',
        component: weixiuzhipai
      }
      ,{
	path: '/messages',
        name: '留言板管理',
        component: messages
      }
      ,{
	path: '/xiaoquxinxi',
        name: '小区信息',
        component: xiaoquxinxi
      }
      ,{
	path: '/zhuhu',
        name: '住户',
        component: zhuhu
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
