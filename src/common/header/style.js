import styled from 'styled-components'
import LogoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    z-inde:1;
    position: relative;
    height:58px;
    border-bottom:1px solid #f0f0f0;
`;

export const Logo = styled.div`
    position: absolute;  
    top:0;
    left:0
    display:block;
    width:100px  
    height:56px;
    background:url(${LogoPic});
    background-size:contain;
`;

export const Nav = styled.div`
    width:960px;
    height:100%;
    margin:0 auto;
    boxs-sizing:border-box;
    padding-right:70px;
    
`
export const NavItem = styled.div`
    height:56px; 
    line-height:56px;
    padding:0 15px;
    color:#333;  
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.act{
        color:#ea6f5a;
    }
`
export const NavSearchWrapper = styled.div`
    float:left;
    position:relative;
    
    .zoom{
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        line-height:30px;
        text-align:center;
        border-radius:15px;
        &.focus{
            background:#777;
            color:#fff;
        }
    }
`

export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
    height:38px; 
    width:160px;
    box-sizing:border-box;
    border:none;
    outline:none;
    border-radius: 19px;
    margin-top:9px;
    margin-left:20px;
    padding:0 20px;
    background:#eee;
    font-size:14px;
    &::placeholder{
        color:#999;
    }
    &.slide-enter{
        width:160px;
        transition:all .2s ease-out;
    }
    &.slide-enter-active{
        width:240px;
    }
    &.slide-exit{
        width:240px;
        transition:all .2s ease-out;
    }
    &.slide-exit-active{
        width:160px;
    }
    &.focus{
    width:240px;
    }
`
export const SearchInfo = styled.div`
    background:#fff;
    user-select:none;
    position: absolute;  
    left:25px;
    top:58px;
    width:240px;
    padding:0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2)
`
export const SearchInfoTitle = styled.div`
    margin-top:20px;
    margin-bottom: 15px;
    line-height:20px;
    font-szie:14px;
    color:#969696;
    .spin{
        float:left;
        display:block;
        font-size:12px;
        margin-right:2px;
        transition:all .2s ease-out;
        transform-origin:center center;
    }
`
export const SearchInfoCg = styled.span`
    float:right;
    font-size:13px;
    cursor:pointer;
`
export const SearchInfoItem = styled.a.attrs({

})`
    display:block;
    float:left;
    margin-right:10px;
    margin-bottom:10px;
    line-height:20px;
    padding:0 5px;
    font-size:12px;
    border:1px solid #ddd;
    color:#787878;
    border-radius:3px;
`
export const Addition = styled.div`
    position: absolute;  
    right:0;
    top:0;
`
export const Button = styled.button`
    float:right;
    line-height:38px;
    margin-top:9px;
    margin-right:20px;
    padding:0 20px;
    border-radius: 19px;
    border:1px solid #ec6149;
    font-size:14px;
    outline:none;
    &.regs{
        width:80px;
        color:#ec6149;
        background:#fff;
    }
    &.write{
        width:100px;
        color:#fff;
        background:#ec6149;
    }

`

