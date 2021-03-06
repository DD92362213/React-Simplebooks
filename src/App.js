import React, { PureComponent } from 'react';
import Header from './common/header'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Home from './routes/home'
import Detail from './routes/detail/loadable'
import Login from './routes/login/loadable'
class App extends PureComponent {
  render() {
    return (
      <div>
        <Provider store={store}>   
            <BrowserRouter>
              <div>
                <Header />
                <Route path='/' exact component={Home} ></Route>
                <Route path='/detail/:id' exact component={Detail} ></Route>
                <Route path='/login' exact component={Login} ></Route>
              </div>
            </BrowserRouter>
        </Provider>
        <GlobalStyle />
      </div>
    )
  }
}

export default App;


const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
@font-face {
  font-family: "iconfont";
  src: url('iconfont.eot?t=1539772484840'); /* IE9*/
  src: url('iconfont.eot?t=1539772484840#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAXMAAsAAAAACGAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8i0pDY21hcAAAAYAAAABqAAABstLqnchnbHlmAAAB7AAAAdIAAAH8HPqECWhlYWQAAAPAAAAALwAAADYS+aaFaGhlYQAAA/AAAAAcAAAAJAfeA4ZobXR4AAAEDAAAAA4AAAAUFAAAAGxvY2EAAAQcAAAADAAAAAwA8gFubWF4cAAABCgAAAAfAAAAIAETADxuYW1lAAAESAAAAUUAAAJtPlT+fXBvc3QAAAWQAAAAOgAAAEuG6WLzeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByeib4IZG7438AQw9zA0AAUZgTJAQDlCQxLeJztkTEOgDAIRR9tNaZx9QRdnZ29Qu/h5KGb3qLS4uAh/OQR+CEMAEyAV3YlgNwIXZe6MnxPHH7g1D6y4HBlK6kcNbcG3/qV6JxF3+psl8z8Wkc+3y706xmjToZejHIY/Ts1G8gDqC0YFwAAeJw1kEFrE1EUhe99d2ZeSOOkJJlMY5PYdDozKZZJSDIZKzaZQAWhaHeiDVQQFKkrsSuLMDKb6NYupYLUbbvqsiVi/AHtqgsXgiD4DxSSqS9RuXAu5zx433sHGMBFQGJgGkoAyIuoqchdrrst9BpWZWIzWd1zcJxobLjhVOmoFwQnI3l1OFH/b8SON5ztTu+I/CDw5dFJ90P4b/v/D2DM+0zHtAIpKAKY4koHbXXM1WtNj6c9U3iRCq8i688WURq83R0QDXZvh1X6VR5939kn2t95Mdbh0pPlvVNJOt0T2lmWo99XP0oHYXhIdBiGBwCS4F1QnwA4JGEBKgAlwy5xA+tpsmxD4SQ367UCGq6hGPOW22hjw5jnAq5lsvVac0U84vGt6PzmI0w+XH0qK0zmW3hebT2/hqWO421t+tcrD8qFuctm9eyMIFrE9rRlpKNPcn77S6VZXbyrJtbMe3I+p+VrpvjzpINXdJ9eggoWQBuxjTfQsC1FSyLqSpIpove05Ym8xbJXsIg8eo+Uc/E1MpdFP74ltK+xfC3GciyBs3Jjas4up3pmVrv0DPtLXWTriNiVopk3mfg7xgv5GCb0DP6Md1MzU0r8jr4uuH8ANfN1UAAAeJxjYGRgYADi7frHS+P5bb4ycLMwgMD1t4YuCPp/AwsDcwOQy8HABBIFAC9uClUAeJxjYGRgYG7438AQw8IAAkCSkQEVsAIARwsCbnicY2FgYGBBwwABBAAVAAAAAAAAADgAcAC6AP54nGNgZGBgYGUwYGBhAAEmIOYCQgaG/2A+AwAN3QFQAHicZY9NTsMwEIVf+gekEqqoYIfkBWIBKP0Rq25YVGr3XXTfpk6bKokjx63UA3AejsAJOALcgDvwSCebNpbH37x5Y08A3OAHHo7fLfeRPVwyO3INF7gXrlN/EG6QX4SbaONVuEX9TdjHM6bCbXRheYPXuGL2hHdhDx18CNdwjU/hOvUv4Qb5W7iJO/wKt9Dx6sI+5l5XuI1HL/bHVi+cXqnlQcWhySKTOb+CmV7vkoWt0uqca1vEJlODoF9JU51pW91T7NdD5yIVWZOqCas6SYzKrdnq0AUb5/JRrxeJHoQm5Vhj/rbGAo5xBYUlDowxQhhkiMro6DtVZvSvsUPCXntWPc3ndFsU1P9zhQEC9M9cU7qy0nk6T4E9XxtSdXQrbsuelDSRXs1JErJCXta2VELqATZlV44RelzRiT8oZ0j/AAlabsgAAAB4nGNgYoAALgbsgJWRiZGZkYWRlZGNgaW4IDOPrTg1sSg5g8kxkSczOT9PNzkjNTk7M4+BAQCf0AnAAAA=') format('woff'),
  url('iconfont.ttf?t=1539772484840') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('iconfont.svg?t=1539772484840#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`