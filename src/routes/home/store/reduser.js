// import * as constants from "./actionTypes";
import {fromJS} from 'immutable';
const defaultState=fromJS({
    artList:[{
        id:0,
        title:'年轻人最喜欢的旅行地，数数你去过几个？',
        desc:'作为年轻人，我们总是向往着蓝天下的自由，喜欢那远方的风景。 我们心中总是怀揣着泯灭不去的旅行梦想，追寻着灵魂的自我放逐，每次说去远方，心中也总是...',
        imgurl:'//upload-images.jianshu.io/upload_images/12338824-5888dc68862901c4?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
    },{
        id:1,
        title:'狼狈与潇洒：刘强东性侵门与马云隐退有玄机',
        desc:'文/曾高飞 两大电商巨头抢媒体头条，刷朋友圈的节奏是豁出去了。 京东掌门人刘强东的所谓“性侵门”仍如火如荼，令其备受煎熬；传言马云却要在今天宣布...',
        imgurl:'//upload-images.jianshu.io/upload_images/10137120-3c70ee3d0424279b?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
    },{
        id:2,
        title:'让阿弥陀佛做我主人 我的十年',
        desc:'让阿弥陀佛做我主人，我的十年 让阿弥陀佛做我主人 交给你， 我浊染的生命。 任你处置。 你会还我， 与你一样的无量寿命，清净光明。 让阿弥陀佛做...',
        imgurl:'//upload-images.jianshu.io/upload_images/12864064-879692c9fac89582.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
    }
],
    titleList:[{
        id:0,
        imgurl:'//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
        msg:'故事'
    },{
        id:1,
        imgurl:'//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
        msg:'简书电影'
    },{
        id:2,
        imgurl:'//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
        msg:'手绘'
    },{
        id:3,
        imgurl:'//upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
        msg:'旅行·在路上'
    }
]
})

export default (state = defaultState ,action ) =>{
    switch(action.type){
     
    }
    return state;
}