!function(){var o=angular.module("news.controller",[]);o.controller("indexCtrl",function(o,n,e,s){var a=s.getCookie("token"),c=s.getCookie("username");e.post("http://localhost/htmldocument/1201/day9/newsqianduan/news/index.php/login_api/auto_login",{params:{token:a,username:c}}).success(function(o){console.log(o),o.code||(window.location.href="#/login")}),o.tabs=[{name:"国内最新",id:1,url:"#/index/list"},{name:"游戏焦点",id:2,url:"#/index/login"},{name:"登录",id:3,url:"#/index/login"}],n.id=1,o.toggleTab=function(o){console.log(o),n.id=o}}),o.controller("listCtrl",function(o,n){o.isShowSwiper=!0,o.page=1,o.isShow=!1,o.news=[];var e=function(){n.jsonp("news.php",{params:{page:o.page,channelId:"5572a109b3cdc86cf39001db",channelName:"国内最新",callback:"JSON_CALLBACK"}}).success(function(n){o.isShow=!0,console.log(n),o.news=o.news.concat(n.showapi_res_body.pagebean.contentlist)})};e(),o.searchName="",o.isSearch=!1,o.search=function(){o.isSearch=!0},o.cancelSearch=function(){o.isSearch=!1},o.loadMore=function(){o.isShow=!1,o.page++,e()}}),o.controller("loginCtrl",function(o,n,e){o.isShowSwiper=!0,e.id=2,o.page=1,o.isShow=!1,o.news=[];var s=function(){n.jsonp("news.php",{params:{page:o.page,channelId:"5572a108b3cdc86cf39001d6",channelName:"游戏焦点",callback:"JSON_CALLBACK"}}).success(function(n){o.isShow=!0,console.log(n),o.news=o.news.concat(n.showapi_res_body.pagebean.contentlist)})};s(),o.searchName="",o.isSearch=!1,o.search=function(){o.isSearch=!0},o.cancelSearch=function(){o.isSearch=!1},o.loadMore=function(){o.isShow=!1,o.page++,s()}}),o.controller("detailCtrl",function(o,n,e){o.isShowGallery=!1,o.showGallery=function(n,e){o.isShowGallery=n,console.log(e),o.imgUrl="background-image:url("+e+")"},console.log(e.params),n.jsonp("news.php",{params:{page:1,channelId:"5572a109b3cdc86cf39001db",channelName:"国内最新",callback:"JSON_CALLBACK"}}).success(function(n){console.log(n),o.new=n.showapi_res_body.pagebean.contentlist[e.params.id],console.log(o.new)})}),o.controller("loginsCtrl",function(o,n,e){o.login=function(){console.log("username:"+o.username),console.log("password:"+o.password),n.post("http://localhost/htmldocument/1201/day9/newsqianduan/news/index.php/login_api/login",{params:{username:o.username,password:o.password}}).success(function(o){console.log(o),o.code&&(e.setCookie("token",o.info.token),e.setCookie("username",o.username),window.location.href="#/index/list")})}}),o.controller("registerCtrl",function(o,n,e){o.register=function(){console.log("username:"+o.username),console.log("password:"+o.password),n.post("http://localhost/htmldocument/1201/day9/newsqianduan/news/index.php/login_api/register",{params:{username:o.username,password:o.password}}).success(function(o){console.log(o),o.code&&(e.setCookie("username",o.username),e.setCookie("token",o.info.token),window.location.href="#/index/list")})}}),o.controller("settingCtrl",function(o,n,e){var s=e.getCookie("token"),a=e.getCookie("username");n.post("http://localhost/htmldocument/1201/day9/newsqianduan/news/index.php/login_api/auto_login",{params:{token:s,username:a}}).success(function(o){console.log(o),o.code||(window.location.href="#/login")})})}();