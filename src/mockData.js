const mockData = {
    taskHistory:[
        {
            id:1,
            name:'learning react redux',
            state:'done',
            owner: 'admin'
        },
        {
            id:2,
            name:'react performance issue',
            state:'in progress',
            owner: 'admin'
        },
        {
            id:2,
            name:'http/https related',
            state:'cancled',
            owner: 'admin'
        }
    ],
    userInfo:[
        {
            id:1,
            name:'baobaomi',
            roles:['Admin','L1 User','L2 User','Manager']
        },
        {
            id:2,
            name:'user1',
            roles:['L1 User','L2 User']
        }
    ],
    authenticate: {
        baobaomi:
            {
                password: 'admin01',
                userId: 1
            },
        user1:
            {
                password: '123456',
                userId: 2
            }
    }
}

export default mockData;