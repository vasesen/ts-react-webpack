import ajax from './ajax'
import {message} from 'antd'

const BASE = 'http://localhost:3000'

export const reqLogin = (username: string,password: string) => ajax(BASE + '/users/login', {username, password}, 'POST')