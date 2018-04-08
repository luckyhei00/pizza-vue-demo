const state = {
    // 设置登录状态
    currentUser: null,
    isLogin: false
}

const getters = {
    // 获取登录状态
    currentUser: state => state.currentUser,
    isLogin: state => state.isLogin
}

const mutations = {
    // 改变登录状态
    userStatus(state,user){
        if(user){
            state.currentUser = user
            state.isLogin = true
        }else{
            state.currentUser = null
            state.isLogin = false
        }
    }
}

const actions = {
    // 应用mutations
    setUser({commit},user){
        commit("userStatus",user)
    }
}

export default{
    state,
    getters,
    mutations,
    actions
}