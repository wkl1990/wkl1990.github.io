function createStore(initialState){
    var state = initialState || {};
    var list = [];
    function getState(type){
        return state[type];
    }

    function dispatch(action){
        state[action.type] = action.value;
        list.forEach(function(ele){
            ele();
        })
    }

    function subscribe(func){
        list.push(func)
    }

    return {
        getState: getState,
        dispatch: dispatch,
        subscribe: subscribe
    }
}
//创建全局默认值，记录每一次事件触发的数值
var store = createStore({text: '', title: 'ALL'});
