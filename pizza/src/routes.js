// 这里是路由数据文件

// 一级路由
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

// 二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

// 三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'

// 路由数据
export const routes = [
    {path:"/",name:"homeLink",component:Home},
    {path:"/menu",name:"menuLink",component:Menu},
    {path:"/admin",name:"adminLink",component:Admin},
    {path:"/about",name:"aboutLink",redirect:"/about/contact",component:About,children:[
      {path:"/about/contact",name:"contactLink",redirect:"/about/contact/personName",component:Contact,children:[
        {path:"/about/contact/phone",name:"phoneNumber",component:Phone},
        {path:"/about/contact/personname",name:"personName",component:PersonName}
      ]},
      {path:"/about/delivery",name:"deliveryLink",component:Delivery},
      {path:"/about/history",name:"historyLink",component:History},
      {path:"/about/orderingGuide",name:"orderingGuideLink",component:OrderingGuide}
    ]},
    {path:"/login",name:"loginLink",component:Login},
    {path:"/register",name:"registerLink",component:Register},
    {path:"*",redirect:"/"}
  ]
