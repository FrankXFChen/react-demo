import mockData from './mockData';
import axios from 'axios';

class Api {
    constructor(history){
        this.history = history;
        this.authenticated = false;
        this.axios = axios.create({
            baseURL: 'http://localhost:9000/LIST_HUB'
            //baseURL: process.env.API_URL
        });
        this.axios.interceptors.request.use((config)=>{
            return config;
        }, (error)=>{
            return Promise.reject(error);
        });
        this.axios.interceptors.response.use((response)=>{
            return response;
        }, (error)=>{
            // if(error.response.code === 401){
            //     this.authenticated = false;
            //     history.push('/login');
            // }
            return Promise.reject(error)
        });
    }

    signIn(userName, password){
        return this.axios.post('/login',
            {
                userName:userName,
                passWord:password
            }
        ).then(response =>{
            if(response.data){
                return response.data;
            }
        })
        // return new Promise((resolve, reject)=>{
        //     if(mockData.authenticate[userName] && 
        //     mockData.authenticate[userName].password==password){
        //         this.authenticated = true;
        //         resolve({userId:mockData.authenticate[userName].userId});
        //     }else{
        //         reject('login failed');
        //     }
        // })
    }

    getCurrentUserInfo(userId){
        return new Promise((resolve, reject)=>{
            let userInfo = mockData.userInfo.filter(obj=>obj.id===userId);
            setTimeout(()=>{
                resolve(userInfo);
            },500);
        })
    }

    getTaskHistory(){
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(mockData.taskHistory)
            }, 1000);
        })
    }

    getAllUserInfo(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(mockData.userInfo);
            },100)
        })
    }
}

export default Api;