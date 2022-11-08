(function(){"use strict";var __webpack_modules__={4078:function(e,s,t){var r=t(9242),o=t(3396);function i(e,s,t,r,i,a){const n=(0,o.up)("RSSFeed");return(0,o.wg)(),(0,o.j4)(n)}var a=t(7139);const n={class:"container"},c={class:"row"},l={key:0},d={key:0},u={class:"text-secondary mb-3"},p={key:0,"data-cy":"actions-article-wrapper",class:"articles-wrapper"},w={key:1},_=(0,o._)("span",{class:"text-danger mb-0"},[(0,o._)("strong",null,[(0,o._)("em",null,"No articles found here!")])],-1),m={key:0},g={class:"text-secondary mb-3"};function h(e,s,t,i,h,b){const f=(0,o.up)("HeaderComponent"),v=(0,o.up)("loading-spinner"),N=(0,o.up)("sources-tiles"),y=(0,o.up)("articles-tiles"),k=(0,o.up)("card-component"),S=(0,o.up)("topic-tiles"),D=(0,o.up)("error-component"),T=(0,o.up)("footer-component");return(0,o.wg)(),(0,o.iD)("div",n,[(0,o._)("div",c,[(0,o._)("div",{class:(0,a.C_)({"col-3":h.screenWidth>=1200,"":h.screenWidth<1200})},null,2),(0,o._)("div",{class:(0,a.C_)({"":h.screenWidth<1200,"col-6":h.screenWidth>=1200})},[(0,o.Wm)(f,{class:"mb-3",onBackwardNav:s[0]||(s[0]=e=>b.backwardNav(h.isError)),tabNav:h.tabNav,isloading:h.isloading,isError:h.isError,showSourceCode:e.showSourceCode,devActivationCount:h.devActivationCount},null,8,["tabNav","isloading","isError","showSourceCode","devActivationCount"]),(0,o.Wm)(v,{isloading:h.isloading,isError:h.isError},null,8,["isloading","isError"]),(0,o.Wm)(r.uT,{name:"card-fade",appear:"",mode:"out-in"},{default:(0,o.w5)((()=>[h.isloading||0!==h.tabNav?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",l,[(0,o.Wm)(r.uT,{name:"fade",appear:"",mode:"out-in"},{default:(0,o.w5)((()=>[(0,o._)("h2",{onClick:s[1]||(s[1]=e=>b.devMode()),class:"text-secondary mb-3"},"Sources")])),_:1}),(0,o._)("div",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(h.sources,((s,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t,class:"d-inline-block"},[(0,o.Wm)(N,{index:t,source:s,topics:e.topics,isloading:h.isloading,tabNav:h.tabNav,onForwardNav:e=>b.forwardNav(s)},null,8,["index","source","topics","isloading","tabNav","onForwardNav"])])))),128))])]))])),_:1}),h.isError||h.isloading||2!==h.tabNav?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",d,[(0,o.Wm)(r.uT,{name:"fade",appear:"",mode:"out-in"},{default:(0,o.w5)((()=>[(0,o._)("h2",u,(0,a.zw)(1===h.topicData.length?h.topicTitle:h.topicTitle2),1)])),_:1}),this.feedHasArticles()?((0,o.wg)(),(0,o.iD)("div",p,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.feeds,((s,t)=>((0,o.wg)(),(0,o.iD)("div",{class:"mb-2",key:t},[(0,o.Wm)(y,{index:t,feed:s,feeds:this.feeds,data:this.data,screenWidth:h.screenWidth,pic:e.pic},null,8,["index","feed","feeds","data","screenWidth","pic"])])))),128))])):((0,o.wg)(),(0,o.iD)("div",w,[(0,o.Wm)(k,{onClick:s[2]||(s[2]=e=>b.backwardNav(h.isError)),class:"d-flex justify-content-center align-content-center p-4"},{default:(0,o.w5)((()=>[_])),_:1})]))])),(0,o.Wm)(r.uT,{name:"card-fade",appear:"",mode:"out-in"},{default:(0,o.w5)((()=>[h.isloading||1!==h.tabNav?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",m,[(0,o.Wm)(r.uT,{name:"fade",appear:"",mode:"out-in"},{default:(0,o.w5)((()=>[(0,o._)("h2",g,(0,a.zw)(h.topicTitle),1)])),_:1}),(0,o._)("div",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(h.topicData,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t,class:"d-inline-block"},[(0,o.Wm)(S,{index:t,topic:e,topicNavUrl:h.topicNavUrl,onGetRssFeeds:s=>b.getRssFeeds(h.topicNavUrl,e.url,e.title),onForwardNav:s[3]||(s[3]=e=>b.forwardNav())},null,8,["index","topic","topicNavUrl","onGetRssFeeds"])])))),128))])]))])),_:1}),(0,o.Wm)(D,{onBackwardNav:s[4]||(s[4]=e=>b.backwardNav()),data:h.data,tabNav:h.tabNav,isError:h.isError},null,8,["data","tabNav","isError"]),(0,o.Wm)(T,{onBackwardNav:s[5]||(s[5]=e=>b.backwardNav(h.isError)),data:h.data,tabNav:h.tabNav,isloading:h.isloading,sources:h.sources,isError:h.isError,topicData:h.topicData||[],feeds:e.feeds||[]},null,8,["data","tabNav","isloading","sources","isError","topicData","feeds"])],2),(0,o._)("div",{class:(0,a.C_)({"col-3":h.screenWidth>=1200,"":h.screenWidth<1200})},null,2)])])}var b=t(6265),f=t.n(b),v=t(4802);const N=v.Z.sources;v.Z.NewSource("Investing.com",null,"in-logo.jpg",[["Economy News","https://www.investing.com/rss/news_14.rss"],["Economic Indicators News","https://www.investing.com/rss/news_95.rss"],["Stock Market News","https://www.investing.com/rss/news_25.rss"],["ETF News","https://www.investing.com/rss/stock_ETFs.rss"],["Foreign Exchange News","https://www.investing.com/rss/news_1.rss"]]),v.Z.NewSource("Business Wire",null,"bw-logo.png",[["Dividend News","https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJeEF9ZVA==&_gl=1*z96yy4*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA4MTU2My4yLjEuMTY2NjA4MjAxOS4wLjAuMA.."],["IPO News","https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJeEF9YXQ==&_gl=1*oudbjk*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA4MTU2My4yLjAuMTY2NjA4MTU2My4wLjAuMA.."],["Merger/Acquisition News","https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJeEFtRWA==&_gl=1*ewsir6*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA3NDIwOS4xLjEuMTY2NjA3NTQxMi4wLjAuMA.."],["Share Issue News","https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJeGVtWXA==&_gl=1*ji7i1m*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA3NDIwOS4xLjEuMTY2NjA3NTQzNC4wLjAuMA.."],["Stock Split News","https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJeGVtWXg==&_gl=1*1ysdfcb*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA3NDIwOS4xLjEuMTY2NjA3NTQ0MS4wLjAuMA.."],["Stock Sale/Buyback News","https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJeGVtWXw==&_gl=1*11xwt23*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA3NDIwOS4xLjEuMTY2NjA3NTQ0NS4wLjAuMA.."],["SPAC News","https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJaF1hWXw==&_gl=1*9mr1pq*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA3NDIwOS4xLjEuMTY2NjA3NTQ1MS4wLjAuMA.."],["Closed End Fund News","https://feed.businesswire.com/rss/home/?rss=G1QFDERJXkJeGVtYXg==&_gl=1*mau74y*_ga*OTYwNTQzODE4LjE2NjYwNzU0MTM.*_ga_ZQWF70T3FK*MTY2NjA4MTU2My4yLjEuMTY2NjA4MTczMC4wLjAuMA.."]]),v.Z.NewSource("GlobeNewswire",null,"gnw.jpg",[["Dividend Reports","https://www.globenewswire.com/RssFeed/subjectcode/12-Dividend%20Reports%20and%20Estimates/feedTitle/GlobeNewswire%20-%20Dividend%20Reports%20and%20Estimates"],["Company Announcement","https://www.globenewswire.com/RssFeed/subjectcode/9-Company%20Announcement/feedTitle/GlobeNewswire%20-%20Company%20Announcement"],["Conference Calls","https://www.globenewswire.com/RssFeed/subjectcode/89-Conference%20Calls%202f%20Webcasts/feedTitle/GlobeNewswire%20-%20Conference%20Calls,%20Webcasts"],["Initial Public Offerings","https://www.globenewswire.com/RssFeed/subjectcode/21-Initial%20Public%20Offerings/feedTitle/GlobeNewswire%20-%20Initial%20Public%20Offerings"],["Earnings Releases","https://www.globenewswire.com/RssFeed/subjectcode/13-Earnings%20Releases%20And%20Operating%20Results/feedTitle/GlobeNewswire%20-%20Earnings%20Releases%20And%20Operating%20Results"],["Directors And Officers","https://www.globenewswire.com/RssFeed/subjectcode/11-Directors%20And%20Officers/feedTitle/GlobeNewswire%20-%20Directors%20And%20Officers"],["Insider's Buy & Sell","https://www.globenewswire.com/RssFeed/subjectcode/22-Insider%2027s%20Buy%202fSell/feedTitle/GlobeNewswire%20-%20Insider%20s%20Buy,%20Sell"],["Interim Information","https://www.globenewswire.com/RssFeed/subjectcode/66-Interim%20Information/feedTitle/GlobeNewswire%20-%20Interim%20Information"],["Funds Information","https://www.globenewswire.com/RssFeed/subjectcode/80-Investment%20Fund%20Information/feedTitle/GlobeNewswire%20-%20Investment%20Fund%20Information"],["Net Asset Value","https://www.globenewswire.com/RssFeed/subjectcode/62-Net%20Asset%20Value/feedTitle/GlobeNewswire%20-%20Net%20Asset%20Value"],["Press Releases","https://www.globenewswire.com/RssFeed/subjectcode/72-Press%20Releases/feedTitle/GlobeNewswire%20-%20Press%20Releases"]]),v.Z.NewSource("Finance Asia",null,"fa-logo.jpg",null,["Markets","Debt","Equity","Debt-Research"],["https://www.financeasia.com/rss/category/","item.toLowerCase()",""]),v.Z.NewSource("Trading Economics",null,"te-logo.jfif",null,["Consumer Price Index CPI","GDP Annual Growth Rate","Core Inflation Rate","Unemployment Change","Retail Sales MoM","NonFarm Payrolls Private","Interest Rate","Weapons Sales"],["https://tradingeconomics.com/rss/news.aspx?i=","item.toLowerCase().replaceAll(' ','+')",""]),v.Z.NewSource("Seeking Alpha","https://seekingalpha.com/samw/static/images/favicon-32x32.png","sa-logo.webp",[["Market Currents","https://seekingalpha.com/market_currents.xml"],["Editors Picks","https://seekingalpha.com/tag/editors-picks.xml"],["IPO Analysis","https://seekingalpha.com/tag/ipo-analysis.xml"],["Transcripts","https://seekingalpha.com/sector/transcripts.xml"],["Wall St Breakfast","https://seekingalpha.com/tag/wall-st-breakfast.xml"],["ETF Portfolio Strategy","https://seekingalpha.com/tag/etf-portfolio-strategy.xml"]]),v.Z.NewSource("CSS-Tricks",null,"csst-logo.jpg",[["CSS-Tricks","https://css-tricks.com/feed/"]]),v.Z.NewSource("freeCodeCamp","https://cdn.freecodecamp.org/universal/favicons/favicon.ico","fcc-logo.png",null,["Accessibility","Algorithms","Android-App-Development","Angular","Animation","API","Application-Security","ASCII","Assembly-Language","Augmented-Reality","Authentication","Automation","AWS","Axios","Azure","Back-End-Development","Bash","Beginner","Beginners-Guide","Big-O-Notation","Binary-Search","Blazor","Blockchain","Blogging","Bootstrap","Bots","Branding","Business","C-2","C-Programming","Career-Advice","Career-Change","Certification","Charts","Chrome-Extension","Class","Closure","Cloud-Computing","Coding","Coding-Challenge","Coding-Interview","Command-Line","Community","Compilers","Computer-Networking","Computer-Science","Containers","CRUD","Cryptography","CSharp","CSS","CSS-Grid","Cybersecurity","D3","Data-Analysis","Data-Analytics","Data-Science","Data-Structures","Data-Visualization","Database","Debugging","Deno","Design","Developer-Tools","Devops","Django","Docker","DOM","Domain-Names","ECommerce","Email","Encryption","Error","Error-Handling","Ethical-Hacking","Excel","FastAPI","Figma","Firebase","Flexbox","Flutter","Framework","freeCodeCamp","Freecodecamp-Curriculum","Freelancing","Front-End-Development","Full-Stack","Functional-Programming","Git","Github","Gitpod","Go","Golang","Google","Google-Cloud-Platform","Google-Sheets","Hacking","Hacktoberfest","Hardware","Heroku","HTML","HTML5","HTTP","Image-Compression","Information-Security","Infrastructure-as-Code","Interview-Tips","Interviews","IOS","Java","Javascript","Jenkins","Job-Hunting","Julia","Junior-Developer","Kotlin","Kubernetes","Laravel","Learning-To-Code","Life-Lessons","Linux","Low-Code","MAC","Machine-Learning","Markdown","Math","Microservices","Microsoft","NestJS","Network-Engineering","Neural-Networks","NextJS","Node","Node-JS","NodeJS","NPM","Object-Oriented-Programming","Online-Courses","Open-Source","OpenGL","Pair-Programming","PHP","Portfolio","Postgres","Problem-Solving","Product-Design","Productivity","Programming","Programming-Languages","Project-Management","Projects","PWA","Python","Pytorch","Quality-Assurance","React","React-Context","React-Hooks","React-Router","ReactJS","Redis","Redux","Regex","Remote-Work","Responsive-Design","Rest-API","Resume","Rust","SASS","Security","Self-Improvement","SEO","Serverless","Smart-Contracts","Software","Software-Architecture","Software-Development","Software-Engineering","Software-Testing","Solana","SQL","Startup","Storage","Svelte","SVG","Swift","Systems","Systems-Engineering","Tableau","Tailwind","Tech","Technical-Writing","Technology","Tensorflow","Terraform","Test-Driven-Development","Testing","Typescript","UI-Design","Unicode","University","Unreal-Engine","User-Experience","Vim","Visual-Basic","VSCode","Vue","Web","Web-Design","Web-Development","Web-Performance","Web-Scraping","Web-Security","Web3","WebGPU","Windows","Windows-10","Wordpress","XML","Youtube"],["https://www.freecodecamp.org/news/tag/","item.toLowerCase()","/rss"]),v.Z.NewSource("Reuters",null,"reuters-logo.png",[["Market Impact","https://www.reutersagency.com/feed/?best-customer-impacts=market-impact&post_type=best"],["Energy & Commodities","https://www.reutersagency.com/feed/?best-sectors=commodities-energy&post_type=best"],["Economy","https://www.reutersagency.com/feed/?best-sectors=economy&post_type=best"],["Equities","https://www.reutersagency.com/feed/?best-sectors=equities&post_type=best"],["FX & Fixed Income","https://www.reutersagency.com/feed/?best-sectors=foreign-exchange-fixed-income&post_type=best"]]),v.Z.NewSource("CNN",null,"cnn-logo.png",[["CNN World","http://rss.cnn.com/rss/cnn_latest.rss"]]),v.Z.NewSource("CNBC",null,"cnbc-logo.png",[["Investing News","https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=15839069"]]),v.Z.NewSource("Yahoo Finance",null,"yf-logo.jpg",[["Finance News","https://finance.yahoo.com/news/rssindex"]]),v.Z.NewSource("MarketWatch",null,"mw-logo.png",[["Real-time Headlines","http://feeds.marketwatch.com/marketwatch/realtimeheadlines"]]),v.Z.NewSource("Zacks",null,"zk-logo.png",[["Press Release","https://scr.zacks.com/rss/pressrelease.aspx"]]),v.Z.NewSource("S&P Global","https://www.spglobal.com/_assets/images/icons/SPG_favicon_wht_32x32.ico","sp-logo.png",[["Corporate News","https://www.spglobal.com/spdji/en/rss/rss-details/?rssFeedName=corporate-news"]]),v.Z.NewSource("WSJ",null,"wsj-logo.png",[["Markets","https://feeds.a.dj.com/rss/RSSMarketsMain.xml"]]),v.Z.NewSource("The EurAsian Times",null,"eat-logo.png",[["Latest News","https://eurasiantimes.com/feed/"]]),v.Z.NewSource("DefenseNews","https://www.defensenews.com/pf/resources/img/favicons/def/favicon-32x32.png?d=104","dn-logo.jpg",null,["Global","Air","Land","Naval","Space","Unmanned","Industry"],["https://www.defensenews.com/arc/outboundfeeds/rss/category/","item.toLowerCase()","/?outputType=xml"]),v.Z.NewSource("DefenseTalk","https://feedburner.com/favicon.ico","dt-logo.jpeg",null,["DefenseNews","Army News","Defense Security","Defense Technology","Missiles Bombs","WMD News","NavyNews","DronesNews"],["https://feeds.feedburner.com/","item.toLowerCase().replaceAll(' ','-')",""]),v.Z.NewSource("Shephard Media",null,"sm-logo.png",[["Latest Articles","https://www.shephardmedia.com/news/feed/"],["Naval Warfare","https://www.shephardmedia.com/news/naval-warfare/feed/"],["Land Warfare","https://www.shephardmedia.com/news/landwarfareintl/feed/"],["Air Warfare","https://www.shephardmedia.com/news/air-warfare/feed/"],["Defence Notes","https://www.shephardmedia.com/news/defence-notes/feed/"],["Defence Helicopter","https://www.shephardmedia.com/news/defence-helicopter/feed/"],["Military Logistics","https://www.shephardmedia.com/news/mil-log/feed/"],["Special Operations","https://www.shephardmedia.com/news/special-operations/feed/"],["Uncrewed Vehicles","https://www.shephardmedia.com/news/uv-online/feed/"]]),v.Z.NewSource("Janes",null,"janes-logo.png",[["Janes News","https://www.janes.com/feeds/news"]]),v.Z.NewSource("GlobalSecurity.org",null,"gs-logo.png",[["Defence News","https://www.globalsecurity.org/globalsecurity-org.xml"]]),v.Z.NewSource("The Diplomat",null,"td-logo.png",[["Current Affairs","https://thediplomat.com/feed/"]]),v.Z.NewSource("Science Daily",null,"scd-logo.jpg",[["All News","https://www.sciencedaily.com/rss/all.xml"],["Top Science","https://www.sciencedaily.com/rss/top/science.xml"],["Top Technology","https://www.sciencedaily.com/rss/top/technology.xml"]]),v.Z.NewSource("SpaceNews","https://spacenews.com/wp-content/themes/spacenews/favicon-32x32.png","spn-logo.png",[["SpaceNews","https://spacenews.com/feed/"]]);var y=N;const k=(0,o.uE)('<h1 class="text-secondary mb-1"><strong>News Feeds App</strong></h1><label class="text-secondary mb-4"> Powered by <strong><i class="fa-brands fa-vuejs"></i> <i class="fa-solid fa-rss"></i></strong> and built by <strong><a class="text-secondary" style="text-decoration:none;" href="https://github.com/rubanero14">Raj</a></strong></label>',2),S={key:0,href:"https://github.com/rubanero14/rubanero14-Convert-XML-to-JSON-Guide/blob/master/src",class:"btn btn-outline-secondary mb-lg-3 w-100",target:"_blank"},D=(0,o._)("i",{class:"bi bi-code-slash"},null,-1),T=["disabled"],C=(0,o._)("i",{class:"bi bi-arrow-left"},null,-1),j=(0,o._)("hr",{class:"my-3",size:"5",noshade:""},null,-1);function x(e,s,t,r,i,a){return(0,o.wg)(),(0,o.iD)("div",null,[k,0===this.tabNav&&this.showSourceCode?((0,o.wg)(),(0,o.iD)("a",S,[D,(0,o.Uk)(" Source Code")])):(0,o.kq)("",!0),this.tabNav>0?((0,o.wg)(),(0,o.iD)("button",{key:1,"data-cy":"actions-back-button",onClick:s[0]||(s[0]=s=>e.$emit("backwardNav",this.isError)),class:"btn btn-secondary w-100",disabled:this.isloading},[C,(0,o.Uk)(" Back")],8,T)):(0,o.kq)("",!0),j])}var E={props:["tabNav","isloading","isError","showSourceCode","devActivationCount"]},A=t(89);const F=(0,A.Z)(E,[["render",x]]);var M=F;const O=e=>((0,o.dD)("data-v-f1e31a26"),e=e(),(0,o.Cn)(),e),W={key:0,class:"text-danger"},R={key:0},P={key:1,class:"row"},U={class:"col-12"},L={class:"text-danger mb-3"},I=O((()=>(0,o._)("img",{class:"err",src:"https://rubanero14.github.io/RSS-Feed-CP-Prototype-Vue3/err.png"},null,-1))),Z=O((()=>(0,o._)("figcaption",{class:"mb-3"},[(0,o.Uk)("Figure 1 - Click "),(0,o._)("span",null,"Enable Access"),(0,o.Uk)(" button below to open this page")],-1))),G=O((()=>(0,o._)("ol",{type:"1",class:"text-start text-secondary"},[(0,o._)("li",null,[(0,o.Uk)("Click "),(0,o._)("strong",{class:"text-success"},"Enable Access"),(0,o.Uk)(" button below")]),(0,o._)("li",null,[(0,o.Uk)("When new window pops up, click "),(0,o._)("strong",{class:"text-success"},"Request temporary access to the demo server"),(0,o.Uk)(" button as per figure above.")]),(0,o._)("li",null,[(0,o.Uk)("Close that window and back to "),(0,o._)("span",{class:"text-secondary"},[(0,o._)("strong",null,"RSS Feed")]),(0,o.Uk)(" page and start browsing for articles")])],-1))),q={class:"col-12"},Y=O((()=>(0,o._)("i",{class:"bi bi-hdd-rack"},null,-1)));function z(e,s,t,i,n,c){return(0,o.wg)(),(0,o.j4)(r.uT,{name:"card-fade",appear:"",mode:"out-in"},{default:(0,o.w5)((()=>[this.isError&&2===this.tabNav?((0,o.wg)(),(0,o.iD)("div",W,[(0,o.Wm)(r.uT,{name:"fade",appear:"",mode:"out-in"},{default:(0,o.w5)((()=>[this.data.includes("403")?((0,o.wg)(),(0,o.iD)("div",P,[(0,o._)("div",U,[(0,o._)("h2",L,(0,a.zw)(this.data.replace(",","!")),1),I,Z,G]),(0,o._)("div",q,[(0,o._)("a",{onClick:s[0]||(s[0]=s=>e.$emit("backwardNav")),href:"https://cors-anywhere.herokuapp.com/corsdemo?accessRequest=01a082fe9409ff8c6c2e76a853281642569c12198c0358fadbbe4a03321d2fd7",class:"btn btn-outline-success w-100",target:"_blank"},[Y,(0,o.Uk)(" Enable Access ")])])])):((0,o.wg)(),(0,o.iD)("p",R,(0,a.zw)(this.data)+" Try reloading again...",1))])),_:1})])):(0,o.kq)("",!0)])),_:1})}var B={props:["data","tabNav","isError"]};const J=(0,A.Z)(B,[["render",z],["__scopeId","data-v-f1e31a26"]]);var Q=J;const H=e=>((0,o.dD)("data-v-889f334a"),e=e(),(0,o.Cn)(),e),$=H((()=>(0,o._)("hr",{class:"my-3",size:"5",noshade:""},null,-1))),X=["disabled"],K=H((()=>(0,o._)("i",{class:"bi bi-arrow-left"},null,-1))),V={class:"full-length"};function ee(e,s,t,r,i,n){return(0,o.wg)(),(0,o.iD)(o.HY,null,[$,this.tabNav>0&&n.showLowerBackBtn()?((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:s[0]||(s[0]=s=>e.$emit("backwardNav","isError")),class:"btn btn-secondary w-100 mb-4",disabled:this.isloading},[K,(0,o.Uk)(" Back")],8,X)):(0,o.kq)("",!0),(0,o._)("footer",V," © "+(0,a.zw)((new Date).getFullYear())+" by Raj ",1)],64)}var se={props:["tabNav","isloading","isError","topicData","feeds","sources"],methods:{showLowerBackBtn(){return 1===this.tabNav?void 0!==this.topicData&&this.topicData.length>4:2===this.tabNav?void 0!==this.topicData&&this.feeds.length>4:void 0}}};const te=(0,A.Z)(se,[["render",ee],["__scopeId","data-v-889f334a"]]);var re=te;const oe=["data-cy"],ie={class:"d-contents"},ae=["src"];function ne(e,s,t,i,n,c){const l=(0,o.up)("card-component"),d=(0,o.up)("center");return(0,o.wg)(),(0,o.j4)(r.uT,{appear:"",key:this.index,name:"fade",mode:"out-in"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{style:(0,a.j5)({"--i":this.index})},{default:(0,o.w5)((()=>[(0,o._)("a",{"data-cy":`actions-source-${t.index}`,class:"title",onClick:s[0]||(s[0]=s=>e.$emit("forwardNav",t.source))},[(0,o.Wm)(l,{class:"logo p-0 mb-3 mx-2"},{default:(0,o.w5)((()=>[(0,o._)("div",ie,[(0,o._)("img",{class:"logo",src:t.source.logo,onerror:"this.src='https://rss.com/favicon.ico'"},null,8,ae)])])),_:1})],8,oe)])),_:1},8,["style"])])),_:1})}const ce={class:"card"};function le(e,s){return(0,o.wg)(),(0,o.iD)("div",ce,[(0,o.WI)(e.$slots,"default",{},void 0,!0)])}const de={},ue=(0,A.Z)(de,[["render",le],["__scopeId","data-v-2f1ae32b"]]);var pe=ue,we={props:["source","isloading","tabNav","index"],components:{CardComponent:pe}};const _e=(0,A.Z)(we,[["render",ne],["__scopeId","data-v-620fab78"]]);var me=_e;const ge={key:0,class:"text-center spinner-border text-secondary",role:"status"};function he(e,s,t,i,a,n){return(0,o.wg)(),(0,o.j4)(r.uT,{name:"card-fade",appear:"",mode:"out-in"},{default:(0,o.w5)((()=>[this.isloading&&!this.isError?((0,o.wg)(),(0,o.iD)("div",ge)):(0,o.kq)("",!0)])),_:1})}var be={props:["isloading","isError"]};const fe=(0,A.Z)(be,[["render",he]]);var ve=fe;const Ne=e=>((0,o.dD)("data-v-31d4313e"),e=e(),(0,o.Cn)(),e),ye=["data-cy","href"],ke={key:0,class:"row"},Se={class:"col-12"},De=["src"],Te={class:"p-3"},Ce={class:"row"},je={class:"col-12"},xe={class:"title text-center text-secondary mb-0"},Ee={key:0,class:"col-12"},Ae=Ne((()=>(0,o._)("hr",null,null,-1))),Fe={key:0,class:"description text-secondary mb-0"},Me=Ne((()=>(0,o._)("span",{class:"text-primary"},"read more",-1))),Oe={key:1,class:"description text-secondary mb-0"},We=Ne((()=>(0,o._)("span",{class:"text-primary"},"read more",-1))),Re={key:2,class:"description text-secondary mb-0"},Pe=Ne((()=>(0,o._)("span",{class:"text-primary"},"read more",-1))),Ue={class:"col-12"},Le=Ne((()=>(0,o._)("hr",null,null,-1))),Ie={class:"d-flex justify-content-between align-contents-center"},Ze={key:0,class:"time d-flex align-self-end text-secondary mb-0"},Ge=["src"];function qe(e,s,t,i,n,c){const l=(0,o.up)("card-component"),d=(0,o.up)("center");return(0,o.wg)(),(0,o.j4)(r.uT,{key:this.index,appear:"",name:"fade-articles",mode:"out-in"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{style:(0,a.j5)({"--j":this.index})},{default:(0,o.w5)((()=>[(0,o._)("a",{"data-cy":`actions-article-${t.index}`,class:"title",href:t.feed.link.toString(),target:"_blank"},[(0,o.Wm)(l,{class:"mb-4"},{default:(0,o.w5)((()=>[c.titlePic(t.index,t.feeds,t.data)?((0,o.wg)(),(0,o.iD)("div",ke,[(0,o._)("div",Se,[(0,o._)("img",{class:"banner",src:c.titlePic(t.index,t.feeds,t.data)},null,8,De)])])):(0,o.kq)("",!0),(0,o._)("div",Te,[(0,o._)("div",Ce,[(0,o._)("div",je,[(0,o._)("h3",xe,(0,a.zw)(t.feed.title.toString()),1)]),c.articleDescription(t.index,t.feeds,t.data)?((0,o.wg)(),(0,o.iD)("div",Ee,[Ae,(0,o._)("em",null,[t.screenWidth>=1200?((0,o.wg)(),(0,o.iD)("p",Fe,[(0,o.Uk)((0,a.zw)(c.articleDescription(t.index,t.feeds,t.data).toString().substr(0,800).replace(": ","")+"..."),1),Me])):t.screenWidth>=600&&t.screenWidth<1200?((0,o.wg)(),(0,o.iD)("p",Oe,[(0,o.Uk)((0,a.zw)(c.articleDescription(t.index,t.feeds,t.data).toString().substr(0,400).replace(": ","")+"..."),1),We])):((0,o.wg)(),(0,o.iD)("p",Re,[(0,o.Uk)((0,a.zw)(c.articleDescription(t.index,t.feeds,t.data).toString().substr(0,200).replace(": ","")+"..."),1),Pe]))])])):(0,o.kq)("",!0),(0,o._)("div",Ue,[Le,(0,o._)("div",Ie,[c.date()?((0,o.wg)(),(0,o.iD)("aside",Ze,[(0,o._)("em",null,"Updated: "+(0,a.zw)(c.date(t.index))+" ago",1)])):(0,o.kq)("",!0),t.pic?((0,o.wg)(),(0,o.iD)("img",{key:1,class:"img",src:t.pic,onerror:"this.src='https://rss.com/favicon.ico'"},null,8,Ge)):(0,o.kq)("",!0)])])])])])),_:1})],8,ye)])),_:1},8,["style"])])),_:1})}var Ye={props:["index","feed","data","feeds","screenWidth","pic"],components:{CardComponent:pe},methods:{date(){return this.rssMode=Object.keys(this.data).includes("rss")?"pubDate":"dc:date",v.Z.ElapsedTime(this.feeds[0][this.rssMode])},titlePic(e,s,t){return v.Z.titlePic(e,s,t)},articleDescription(e,s,t){return v.Z.articleDescription(e,s,t)}}};const ze=(0,A.Z)(Ye,[["render",qe],["__scopeId","data-v-31d4313e"]]);var Be=ze;const Je=e=>((0,o.dD)("data-v-081da33c"),e=e(),(0,o.Cn)(),e),Qe=["data-cy"],He={class:"d-inline-block justify-content-center align-items-center m-auto"},$e=["src"],Xe=Je((()=>(0,o._)("br",null,null,-1))),Ke={class:"mb-2"},Ve={class:"text-secondary title"};function es(e,s,t,i,n,c){const l=(0,o.up)("CardComponent"),d=(0,o.up)("center");return(0,o.wg)(),(0,o.j4)(r.uT,{key:this.index,appear:"",name:"fade",mode:"out-in"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{style:(0,a.j5)({"--i":this.index})},{default:(0,o.w5)((()=>[(0,o._)("a",{"data-cy":`actions-topic-${t.index}`,class:"title",onClick:s[0]||(s[0]=s=>(e.$emit("getRssFeeds",t.topicNavUrl,t.topic.url,t.topic.title),e.$emit("forwardNav")))},[(0,o.Wm)(l,{class:"tile mb-3 mx-2"},{default:(0,o.w5)((()=>[(0,o._)("div",He,[(0,o._)("img",{src:t.topicNavUrl,onerror:"this.src='https://rss.com/favicon.ico'"},null,8,$e),Xe,(0,o._)("strong",Ke,[(0,o._)("span",Ve,(0,a.zw)(t.topic.title),1)])])])),_:1})],8,Qe)])),_:1},8,["style"])])),_:1})}var ss={props:["index","topic","topicNavUrl"],components:{CardComponent:pe}};const ts=(0,A.Z)(ss,[["render",es],["__scopeId","data-v-081da33c"]]);var rs=ts;const os=t(9058);var is={components:{HeaderComponent:M,ErrorComponent:Q,FooterComponent:re,SourcesTiles:me,LoadingSpinner:ve,ArticlesTiles:Be,TopicTiles:rs,CardComponent:pe},data(){return{data:"",isloading:!1,isError:!1,rssSource:"",screenWidth:"",tabNav:0,topicData:"",topicNavUrl:"",topicTitle:"",topicTitle2:"",sources:y,devActivationCount:0}},watch:{url(){this.getRssFeeds(),this.setScreenWidth()}},mounted(){window.addEventListener("resize",this.setScreenWidth),this.setScreenWidth()},unmounted(){window.removeEventListener("resize",this.setScreenWidth)},methods:{forwardNav(e){return this.topicTitle=e.name,0===this.tabNav&&e.topics.length>1?(this.topicData=e.topics,this.topicNavUrl=e.url,this.tabNav<3?this.tabNav++:this.tabNav):0===this.tabNav&&1===e.topics.length?(this.pic=e.url,this.topicData=e.topics,this.topicNavUrl=e.topics[0].url,this.topicTitle2=e.topics[0].title,this.getRssFeeds(this.pic,this.topicNavUrl,this.topicTitle2,this.logo),this.tabNav=2):void 0},backwardNav(e){return 2===this.tabNav&&1===this.topicData.length?this.tabNav=0:e?(this.isError=!1,console.log("Iserror ",this.isError),this.tabNav=0):this.tabNav>-1?this.tabNav--:this.tabNav},setScreenWidth(){return console.log(window.innerWidth),this.screenWidth=window.innerWidth},async getRssFeeds(e,s,t){if(this.tabNav=2,this.isError=!1,this.isloading=!0,this.pic=e,this.topicTitle2=t,s.includes("tradingeconomics")||s.includes("sciencedaily")){const e=`https://cors-anywhere.herokuapp.com/${s}`;console.log("foreign proxy fires"),this.data=await f().get(e).then((e=>(console.log(os.parseStringPromise(e.data)),os.parseStringPromise(e.data)))).catch((e=>(this.isloading=!1,this.isError=!0,console.log(e),e.message+",")))}else{const e=`https://rss-feed-proxy-server.herokuapp.com/${v.Z.UrlEncoder(s)}`;console.log("own proxy fires"),this.data=await f().get(e).then((e=>(console.log(e.data),e.data))).catch((e=>(this.isloading=!1,this.isError=!0,console.log(e),e.message+",")))}this.isError||(this.feeds=Object.keys(this.data).includes("rss")?this.data.rss.channel[0].item:this.data["rdf:RDF"].item,this.feedHasArticles=()=>Object.keys(this.data).includes("rss")?Object.keys(this.data.rss.channel[0]).includes("item"):Object.keys(this.data).includes("rdf:RDF")?Object.keys(this.data["rdf:RDF"]).includes("item"):void 0,this.isloading=!1)},devMode(){this.devActivationCount++,7===this.devActivationCount&&(this.showSourceCode=!0)}}};const as=(0,A.Z)(is,[["render",h]]);var ns=as,cs={name:"App",components:{RSSFeed:ns}};const ls=(0,A.Z)(cs,[["render",i]]);var ds=ls;(0,r.ri)(ds).mount("#app")},4802:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Util}});var C_Users_User_Documents_GitHub_rubanero14_Convert_XML_to_JSON_Guide_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2482),core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7658),core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);class Util{static NewSource(Name,sub,Logo,Topics,Topics2,rssUrl){const topics=[],favicon=()=>sub||`https://${Name.toLowerCase().replaceAll(" ","").replaceAll(/.com|.org/gi,"")}${Name.includes(".org")?".org":".com"}/favicon.ico`,[name,url,logo]=[Name,favicon(),Logo];return Topics2?Topics2.map((item=>{const[title,url]=[item.replaceAll("-"," "),`${rssUrl[0]}${eval(rssUrl[1])}${rssUrl[2]}`];topics.push({title:title,url:url})})):Topics.map((e=>{const[s,t]=[e[0],e[1]];topics.push({title:s,url:t})})),this.sources.push({name:name,url:url,logo:logo,topics:topics})}static UrlEncoder(e){return encodeURIComponent(e)}static ElapsedTime(e){const s=new Date(e).getTime(),t=Date.now(),r=(t-s)/1e3,o=r/60,i=o/60,a=i/24,n=a/7,c=n/4,l=c/12;return r>=1&&r<60?r.toFixed(0)+(r.toFixed(0)<2?" second":" seconds"):o>=1&&o<60?o.toFixed(0)+(o.toFixed(0)<2?" minute":" minutes"):i>=1&&i<24?i.toFixed(0)+(i.toFixed(0)<2?" hour":" hours"):a>=1&&a<7?a.toFixed(0)+(a.toFixed(0)<2?" day":" days"):n>=1&&n<4?n.toFixed(0)+(n.toFixed(0)<2?" week":" weeks"):c>=1&&c<12?c.toFixed(0)+(c.toFixed(0)<2?" month":" months"):l>=1?l.toFixed(0)+(l.toFixed(0)<2?" year":" years"):void 0}static titlePic(e,s,t){if(Object.keys(t).includes("rss")){if(Object.prototype.hasOwnProperty.call(s[e],"enclosure"))return s[e].enclosure[0].$.url;if(Object.prototype.hasOwnProperty.call(s[e],"media:group"))return s[e]["media:group"][0]["media:content"][0].$.url;if(Object.prototype.hasOwnProperty.call(s[e],"media:content"))return s[e]["media:content"][0].$.url;if(Object.prototype.hasOwnProperty.call(s[e],"description")&&s[e].description[0].includes("src="))return s[e].description[0].split('src="')[1].split('"')[0];if(Object.prototype.hasOwnProperty.call(s[e],"a10:content")&&s[e]["a10:content"][0]._.includes("url(&quot;"))return s[e]["a10:content"][0]._.split("&quot;")[1];if("The Diplomat"===s[e].title)return!1}if(Object.keys(t).includes("rdf:RDF"))return!1}static articleDescription(e,s,t){if(Object.keys(t).includes("rss")&&Object.prototype.hasOwnProperty.call(s[e],"description")){const t=0===s[e].description[0].replaceAll("\n","").replaceAll(" ","").length||s[e].description[0].includes("DefenceTalk");if(Object.prototype.hasOwnProperty.call(s[e],"description")&&!t){if(s[e].description[0].includes("</")&&!t)return s[e].description[0].replaceAll(/<[^>]*>/gi,"").trim();if(s[e].description[0]&&!t)return s[e].description[0].trim()}return!1}if(Object.keys(t).includes("rdf:RDF")&&Object.prototype.hasOwnProperty.call(s[e],"description"))return s[e].description}}(0,C_Users_User_Documents_GitHub_rubanero14_Convert_XML_to_JSON_Guide_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(Util,"sources",[])}},__webpack_module_cache__={};function __webpack_require__(e){var s=__webpack_module_cache__[e];if(void 0!==s)return s.exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(t.exports,t,t.exports,__webpack_require__),t.exports}__webpack_require__.m=__webpack_modules__,function(){var e=[];__webpack_require__.O=function(s,t,r,o){if(!t){var i=1/0;for(l=0;l<e.length;l++){t=e[l][0],r=e[l][1],o=e[l][2];for(var a=!0,n=0;n<t.length;n++)(!1&o||i>=o)&&Object.keys(__webpack_require__.O).every((function(e){return __webpack_require__.O[e](t[n])}))?t.splice(n--,1):(a=!1,o<i&&(i=o));if(a){e.splice(l--,1);var c=r();void 0!==c&&(s=c)}}return s}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[t,r,o]}}(),function(){__webpack_require__.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return __webpack_require__.d(s,{a:s}),s}}(),function(){__webpack_require__.d=function(e,s){for(var t in s)__webpack_require__.o(s,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:s[t]})}}(),function(){__webpack_require__.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){__webpack_require__.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){var e={143:0};__webpack_require__.O.j=function(s){return 0===e[s]};var s=function(s,t){var r,o,i=t[0],a=t[1],n=t[2],c=0;if(i.some((function(s){return 0!==e[s]}))){for(r in a)__webpack_require__.o(a,r)&&(__webpack_require__.m[r]=a[r]);if(n)var l=n(__webpack_require__)}for(s&&s(t);c<i.length;c++)o=i[c],__webpack_require__.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return __webpack_require__.O(l)},t=self["webpackChunkrss_feed"]=self["webpackChunkrss_feed"]||[];t.forEach(s.bind(null,0)),t.push=s.bind(null,t.push.bind(t))}();var __webpack_exports__=__webpack_require__.O(void 0,[998],(function(){return __webpack_require__(4078)}));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();
//# sourceMappingURL=app.33fe8d13.js.map