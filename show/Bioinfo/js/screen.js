var arr = [ //模拟后台给的数据
    { name: "GWAS", src: "img/epi.cover1.jpeg", alt: "epigenetics", title: "GWAS", class: D, content: "GWAS"},
    { name: "SingleCellAnalysis", src: "img/epi.cover2.jpeg", alt: "epigenetics", title: "SC", class: M, content: "Single cell"},
    { name: "Spatial", src: "img/stm.cover.jpg", alt: "STM", title: "Spatial", class: M, content: "Spatial analysis"},
    { name: "SpatialGenomics", src: "img/MP.cover.png", alt: "MP", title: "Spatial", class: W, content: "Spatial genomics seq"}
];
var wra = document.getElementsByClassName("main-div fl")[0];
var wb = wra.getElementById("waterfall")[0];
var oUl = wb.getElementsByTagName("ul")[0];
var title0 = document.getElementById("Tab-menu")[0];
var title = document.getElementsByTagName("ul")[1];
var titlebtn = title.getElementsByClassName("btn");
//var part = document.getElementById("class-part")[0];
//var partbtn = part.getElementsByClassName("btn");
var inp = wra.getElementsByTagName("input")[0];


// 渲染页面
function renderPage(data) {
    oUl.innerHTML = "";
    data.forEach(function (ele, index, self) {
        //遍历数组里面的东西，取其中数据构建html结构，
        oUl.innerHTML += '<div class="pic-box"> <a href="#" target="_blank"> <img src=' + ele.src + 'alt=' + ele.alt + 'title=' + 
        ele.title + '/></a><div class="pic-container' + ele.class + '"><span>' + ele.class + '</span><h3>' + 
        ele.name + '</h3><p>' + ele.content + '</p></div></div>';
    });
}
renderPage(arr);

//绑定title点击事件
var lastDefault = titlebtn[0]; //默认性别选项All 
for(var i = 0; i < titlebtn.length; i++){
    (function(j){
        titlebtn[j].onclick = function(){
            titlebtn[j].className = "btn active";//点击时，给点击的按钮添加 css样式(default)
            lastDefault.className = "btn";// 赋给样式后，取消上一个btn的样式
            lastDefault = titlebtn[j];//赋给样式后，此次点击的btn 就成了过去

            store.dispatch({type: "title", value: titlebtn[j].id})
        }
    })(i)
}

//绑定part点击事件
//var lastDefault = partbtn[0]; //默认性别选项All 
//for(var i = 0; i < partbtn.length; i++){
//    (function(j){
//        partbtn[j].onclick = function(){
//            partbtn[j].className = "btn active";//点击时，给点击的按钮添加 css样式(default)
//            lastDefault.className = "btn";// 赋给样式后，取消上一个btn的样式
//            lastDefault = partbtn[j];//赋给样式后，此次点击的btn 就成了过去
//
//            store.dispatch({type: "part", value: partbtn[j].id})
//        }
//    })(i)
//}

//触发input事件
inp.oninput = debounce(function(){
    store.dispatch({type: "text", value: this.value})    
}, 500)

store.subscribe(function(){
   renderPage(lastFilterArr(arr)) 
})




