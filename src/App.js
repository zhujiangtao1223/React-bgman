import React from 'react'
import {BrowserRouter,Route,Routes,Link,NavLink} from 'react-router-dom'
import { Button ,message} from 'antd';



import 'antd/dist/antd.css'

import { Login } from './pages/login/login';
import { Admin } from './pages/admid/admid';
//应用根组件
const info =()=>{
    message.info('这是一个全局提示的事件 messges')
}
const App =()=>{


    return <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/admin' element={<Admin />}></Route>
        </Routes>
}
class APP extends React.Component{

    render(){
        return (<div>类式组件</div>
        )
    }
}

export {App,APP}