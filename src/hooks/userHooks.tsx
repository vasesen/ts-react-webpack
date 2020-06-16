import {useState,useEffect, useContext, useReducer} from "react"

const userList =()=>{
    const [list,setList] = useState<Array<any>>([])
    useEffect(()=>{
        ajax().then((list:any)=>setList(list))
    },[])
    return{
        list:list,
        deleteItem: (key:string) => {
          const item =  list.find((item:{key:string,index:number}) =>key.indexOf(item.key)===0)
          ajaxdelete().then((list:any)=>setList(list))
        }
    }
}

export default userList

const ajax =() => {
    return  new Promise((resolve,reject)=>{
         setTimeout(()=>{
             resolve([
                {
                  username:'admin',
                  email:'918811737@qq.com',
                  phone:'18761574205',
                  create_time:'2020-3-16',
                  role_id:'shshskhslkhalkh',
                  rolename:'老板',
                  key:'0,'
                },
                {
                  username:'admin1',
                  email:'928811737@qq.com',
                  phone:'18761574207',
                  create_time:'2020-3-16',
                  role_id:'shshskhslkhalkh',
                  rolename:'总监',
                  key:'1'
                },
                {
                  username:'admin2',
                  email:'938811737@qq.com',
                  phone:'18761574206',
                  create_time:'2020-3-16',
                  role_id:'shshskhslkhalkh',
                  rolename:'店长',
                  key:'2'
                },
                {
                  username:'admin3',
                  email:'948811737@qq.com',
                  phone:'18761574203',
                  create_time:'2020-3-16',
                  role_id:'shshskhslkhalkh',
                  rolename:'营业员',
                  key:'3'
                },
                {
                  username:'admin3',
                  email:'948811737@qq.com',
                  phone:'18761574203',
                  create_time:'2020-3-16',
                  role_id:'shshskhslkhalkh',
                  rolename:'营业员',
                  key:'4'
                },
                {
                  username:'admin3',
                  email:'948811737@qq.com',
                  phone:'18761574203',
                  create_time:'2020-3-16',
                  role_id:'shshskhslkhalkh',
                  rolename:'营业员1',
                  key:'5'
                },
                {
                  username:'admin3',
                  email:'948811737@qq.com',
                  phone:'18761574203',
                  create_time:'2020-3-16',
                  role_id:'shshskhslkhalkh',
                  rolename:'营业员2',
                  key:'6'
                },
                {
                  username:'admin3',
                  email:'948811737@qq.com',
                  phone:'18761574203',
                  create_time:'2020-3-16',
                  role_id:'shshskhslkhalkh',
                  rolename:'营业员5',
                  key:'7'
                },
              ])
         },100)
     })
 }



 const ajaxdelete =() => {
  return  new Promise((resolve,reject)=>{
       setTimeout(()=>{
           resolve([
              {
                username:'admin',
                email:'918811737@qq.com',
                phone:'18761574205',
                create_time:'2020-3-16',
                role_id:'shshskhslkhalkh',
                rolename:'老板',
                key:'0,'
              },
              {
                username:'admin1',
                email:'928811737@qq.com',
                phone:'18761574207',
                create_time:'2020-3-16',
                role_id:'shshskhslkhalkh',
                rolename:'总监',
                key:'1'
              },
            ])
       },100)
   })
}