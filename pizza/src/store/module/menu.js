// 这里是有关menu的数据管理

const state = {
    //设置属性
    menuItems:{}
}
const getters = {
    // 获取属性状态
    getMenuItems: state => state.menuItems
}
const mutations = {
    // 改变menuItems状态
    setMenuItems (state,data) {
        state.menuItems = data
    },
    // 将匹配到的对象从menuItems中删除
    removeMenuItems (state,data) {
        state.menuItems.forEach((item,index) => {
            if(item == data){
                state.menuItems.splice(index,1)
            }
        })
    },
    // 将管理页面新添加的内容push到menuItems中
    pushToMenuItems (state,data) {
        state.menuItems.push(data)
    }
}

const actions = {

}

export default{
    state,
    getters,
    mutations,
    actions
}