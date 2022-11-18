//此方法用于执行执行screenInput 和 screenSex函数
function combineFilter(comfig){
    return function (data){ //这里data的值，是通过调用lastFilterArr(这里传入的)

        for(var i in comfig){
            data = comfig[i](data, store.getState(i))//要拿到input触发事件的value，只能通过store.getState方法取，此时的i为text

            //第一圈循环相当于 取出screenInput函数传入数据执行(data, store.getState(i))执行后的结果data接收
            
            //data 接收screenInput过滤后的新数组，等待第二次循环
            //第二次循环 轮到screenSex 函数， 此时 传入的data是screenInput过滤好后的数组，这样就达到了 双层过滤；
        }
        return data;
    }
}

var lastFilterArr = combineFilter({
    text: screenInput, //这两个函数，是我们抽出来的行为，
    title: screenTitle
     //这里传入的值  combineFilter(comfig)  接收
})