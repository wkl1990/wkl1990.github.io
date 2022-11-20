var arr = [ //模拟后台给的数据
    { name: "GWAS", src: "./img/gwas.png", alt: "epigenetics", title: "GWAS", class: "D", content: "GWAS"},
    { name: "SingleCellAnalysis", src: "img/sc.png", alt: "epigenetics", title: "SC", class: "M", content: "Single cell"},
    { name: "Spatial", src: "img/stm.cover.jpg", alt: "STM", title: "SG", class: "M", content: "Spatial analysis"},
    { name: "SpatialGenomics", src: "img/MP.cover.png", alt: "MP", title: "SG", class: "W", content: "Spatial genomics seq"}
];
var main_div = document.getElementsByClassName("main-div")[0];
var wb = main_div.getElementsByClassName("clearfix")[0];
var oUl = wb;
var oUlmore = main_div.getElementsByClassName("more")[0];
var model = document.getElementsByClassName('model')[0];
var title = model.getElementsByClassName('clearfix')[0];
var titlebtn = title.getElementsByClassName("btn");
var side_div = document.getElementsByClassName("side-div")[0];
var inp = side_div.getElementsByTagName("input")[0];
var part = side_div.getElementsByClassName('pattern')[1];
var partbtn = part.getElementsByClassName("btn");


//创建全局默认值，记录每一次事件触发的数值
var state = {
    text: '',
    title: 'ALL',
    part: 'A'
}


// 渲染页面
function renderPage(data) {
    oUl.innerHTML  = '';
    data.forEach(function (ele, index, self) {
        if (index < 3) {
        //遍历数组里面的东西，取其中数据构建html结构，
        oUl.innerHTML += '<div class="pic-box"> <a href="#" target="_blank"> <img src=' + ele.src + ' alt=' + ele.alt + ' title=' + 
        ele.title + ' /></a><div class="pic-container ' + ele.class + '"><span>' + ele.class + '</span><h3>' + 
        ele.name + '</h3><p>' + ele.content + '</p></div></div>';
    } else if (index == 3) {
        oUl.innerHTML += '<span id="dots"></span>' + '<span id="hidden">' + '<div class="pic-box"> <a href="#" target="_blank"> <img src=' + ele.src + ' alt=' + ele.alt + ' title=' + 
        ele.title + ' /></a><div class="pic-container ' + ele.class + '"><span>' + ele.class + '</span><h3>' + 
        ele.name + '</h3><p>' + ele.content + '</p></div></div>' + '</span>';        
    } else {
        oUl.innerHTML += '<span id="hidden">' + '<div class="pic-box"> <a href="#" target="_blank"> <img src=' + ele.src + ' alt=' + ele.alt + ' title=' + 
        ele.title + ' /></a><div class="pic-container ' + ele.class + '"><span>' + ele.class + '</span><h3>' + 
        ele.name + '</h3><p>' + ele.content + '</p></div></div>' + '</span>';        
    }
     });
    oUlmore.innerHTML = '';
    if (data.length>3){
        oUlmore.innerHTML += '<a onclick="myFunction()" id="myBtn"><strong>⬇</strong> More</a>'
    }
}
renderPage(arr);


//绑定性别点击事件
var lastDefault = titlebtn[0]; //默认性别选项All 
for(var i = 0; i < titlebtn.length; i++){
    (function(j){
        titlebtn[j].onclick = function(){
            titlebtn[j].className = "btn active";//点击时，给点击的按钮添加 css样式(default)
            lastDefault.className = "btn";// 赋给样式后，取消上一个btn的样式
            lastDefault = titlebtn[j];//赋给样式后，此次点击的btn 就成了过去

            state.title = titlebtn[j].id;
            var newArr = screenTitle(arr, state.title); //筛选性别执行后返回新数组
            renderPage( screenInput(newArr, state.text));//利用新数组再次筛选搜索框，筛选后渲染页面
//            renderPage( screenPart(screenInput(newArr, state.text)), state.part);//利用新数组再次筛选搜索框，筛选后渲染页面
        }
    })(i)
}
// 筛选性别函数
function screenTitle(data, title) {
    if (title == "ALL") { //判断输入的值是否为默认值a，如果是，不用筛选，直接返回原数组
        return data;
    } else {
        return data.filter(function (ele, index, self) {//利用数组方法filter过滤，不懂filter方法，请看本人另外笔记filter方法
            return title == ele.title; 
            //第一遍循环，查看 数组第一个数据里面的 title 是否等于 传进来的title  如果是，返回这条数据到新数组
            //{ name: "王小明", src: "./img/head.jpg", des: "成绩很好", title: "m", age: 18 }  
        })
    }
}

//绑定part点击事件
var partDefault = partbtn[0]; //默认性别选项All 
for(var i = 0; i < partbtn.length; i++){
    (function(k){
        partbtn[k].onclick = function(){
//            var current = part.getElementsByClassName("active");
//            if (current.length > 0) { }
            partbtn[k].className = "btn active";//点击时，给点击的按钮添加 css样式(default)
            partDefault.className = "btn";// 赋给样式后，取消上一个btn的样式
            partDefault = partbtn[k];//赋给样式后，此次点击的btn 就成了过去
            state.part = partbtn[k].id;
            var newArr = screenPart(arr, state.part); //筛选性别执行后返回新数组
            renderPage( screenInput(newArr, state.text));//利用新数组再次筛选搜索框，筛选后渲染页面
//            renderPage( screenTitle(screenInput(newArr, state.text), state.title);//利用新数组再次筛选搜索框，筛选后渲染页面
        }
    })(i)
}

// 筛选性别函数
function screenPart(data, part) {
    if (part == "A") { //判断输入的值是否为默认值a，如果是，不用筛选，直接返回原数组
        return data;
    } else {
        return data.filter(function (ele, index, self) {//利用数组方法filter过滤，不懂filter方法，请看本人另外笔记filter方法
            return part == ele.class; 
            //第一遍循环，查看 数组第一个数据里面的 part 是否等于 传进来的part  如果是，返回这条数据到新数组
            //{ name: "王小明", src: "./img/head.jpg", des: "成绩很好", part: "m", age: 18 }  
        })
    }
}

//触发input事件
inp.oninput = function(){
    state.text = this.value;//记录当前输入的字
    var newArr = screenInput(arr, state.text);//筛选搜索框输入的值，执行后返回新数组
//    renderPage( screenTitle(newArr, state.title));//利用新数组再次筛选性别，筛选后渲染页面
    renderPage( screenPart(screenTitle(newArr, state.title), state.part));//利用新数组再次筛选性别，筛选后渲染页面    
}
//筛选搜索框函数 
function screenInput(data, value){
    if(!value){//判断输入的值是否为默认值''，如果是，不用过滤，直接返回原数组
        return data;
    }else{
      return data.filter(function(ele, index, self){
           return ele.name.toLowerCase().indexOf(value.toLowerCase()) >= 0; 
            //字符串方法，indexOf 查看value这个字符串，是否存在于ele.name中，如果存在返回大于0的索引(true)
            //如果不存在，返回-1，(false)
            //如果返回(true)，返回这条数据到新数组中
       })
    }
}