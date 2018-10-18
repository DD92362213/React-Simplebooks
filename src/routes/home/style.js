import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width:960px;
    margin:0 auto;
    overflow:hidden;
`;
export const HomeLeft = styled.div`
    width:625px;
    margin-top:30px;
    margin-left:15px;
    float:left;
`;
export const HomeImg = styled.img.attrs({
    className:'bannerimg' ,
    src:"//upload.jianshu.io/admin_banners/web_images/4504/8f6fbad5108d79f95a0af380416da37da8263251.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
})`
    width:625px;
    height:270px;
`;
export const HomeRight = styled.div`
    width:280px;
    margin-top:30px;
    margin-left:15px;
    float:right;
`;
export const TopicWrapper = styled.div`
    overflow:hidden;
    padding:20px 0 10px 0;
    margin-left:-18px;
    border-bottom:1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
   float:left;
   height:32px;
   line-height:32px;
   margin-left:18px;
   margin-bottom:10px;
   padding-right:10px;
   background:#f7f7f7;
   font-size:14px;
   color:#000;
   border:1px solid #dcdcdc;
   border-radius:4px;
   .pic{
    display:block;
    float:left;
    width:32px;
    height:32px;
    margin-right:10px;
   }
   .msg{
       float:left;
   }
`;

export const ListItem = styled.div`
    overflow:hidden;
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    .pic{
        border-radius:5px;
        float:right
        width:125px;
        height:100px;
    }
`;
export const ListInfo = styled.div`
    width:500px;
    float:left;
    overflow:hidden;
    .title{
        font-size:18px;
        line-height:27px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        line-height:24px;
        font-size:13px;
        color:#999;
    }
`;
export const RecommendWarrper = styled.div`
    width:280px;
   .pic{
    width:280px;
    height:50px;
    margin-bottom:5px;
   }
`;
export const RecommendImgBox = styled.div`
    box-sizing: border-box;
    margin-bottom: 30px;
    padding: 10px 22px;
    width: 280px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    height:82px;
    .pic{
        float:left;
        width: 60px;
        height: 60px;
        opacity: .85;
    }
    .title{
        margin-left:8px;
        margin-top:10px;
        float:left;
        font-size: 15px;
        color: #333;
    }
    .msg{
        margin-left:10px;
        float:left;
        margin-top: 8px;
        font-size: 13px;
        color: #999;
    }
`;
export const WriterMain = styled.div`
    box-sizing: border-box;
    overflow:hidden;
    width:280px;
`;
export const WriterItem = styled.div`
    margin-top: 15px;
    overflow:hidden;
    box-sizing: border-box;
    width:280px;
    height:48px;
    line-height: 20px;
   .pic{
    float:left;
    width: 48px;
    height: 48px;
    border: 1px solid #ddd;
    border-radius: 50%;
   }
   .title{
    
    height:23px;
    font-size: 14px;
    display: block;
   }
   .msg{
    margin-left:20px;
    height:23px;
    font-size: 12px;
    color: #969696;
   }
`;
export const WriterBottom = styled.button`
    
    padding: 7px 7px 7px 12px;
    margin-top:8px;
    width: 280px;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    text-align: center;
`;
export const WriterText = styled.div`
    width:280px;
    margin-bottom:30px;
    .left{
        float:left;
        font-size: 14px;
        color: #969696;
    }
    .right{
        float:right;
        font-size: 14px;
        color: #969696;
    }
    
`;