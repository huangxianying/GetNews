;(function(){
    app.controller('indexCtrl', function($scope, $rootScope, $http, cookie) {
    var token = cookie.getCookie('token');
    var username = cookie.getCookie('username')
    // $http.post('http://localhost:81/angular/news/index.php/login_api/auto_login',{
    $http.post(',{
        params:{http://localhost/htmldocument/1201/day9/newsqianduan/news/index.php/login_api/auto_login'
            token:token,
            username:username
        }
    }).success(function(data){
        console.log(data);
        if(data.code){}else{
            window.location.href = '#/login'
        }
    })
    $scope.tabs = [{
        name: '国内最新',
        id: 1,
        url: '#/index/list'
    }, {
        name: '游戏焦点',
        id: 2,
        url: '#/index/login'
    }, {
        name: '登录',
        id: 3,
        url: '#/index/login'
    }];
    $rootScope.id = 1;
    $scope.toggleTab = function(id) {
        console.log(id);
        $rootScope.id = id;
    }
})
app.controller('listCtrl', function($scope, $http) {
    // //背景颜色
    // $scope.blackwhite = true;

    //默认显示轮播图
    $scope.isShowSwiper = true;
    //默认加载第一页
    $scope.page = 1;
    //默认显示loading
    $scope.isShow = false;
    $scope.news = [];
    var load = function() {
            $http.jsonp('news.php', {
                params: {
                    page: $scope.page,
                    channelId: '5572a109b3cdc86cf39001db',
                    channelName: '国内最新',
                    callback: 'JSON_CALLBACK'
                }
            }).success(function(data) {
                $scope.isShow = true;
                console.log(data);
                $scope.news = $scope.news.concat(data.showapi_res_body.pagebean.contentlist);
            })
        }
        //第一次进来的时候自执行加载数据
    load();
    //默认搜索内容
    $scope.searchName = '';
    //搜索框默认的状态
    $scope.isSearch = false;
    $scope.search = function() {
        $scope.isSearch = true;
    }

    $scope.cancelSearch = function() {
        $scope.isSearch = false;
    }

    //加载更多的函数
    $scope.loadMore = function() {
        $scope.isShow = false;
        $scope.page++;
        load();
    }

})
app.controller('loginCtrl', function($scope, $http, $rootScope) {
        //默认显示轮播图
        $scope.isShowSwiper = true;
        $rootScope.id = 2;
        //默认加载第一页
        $scope.page = 1;
        //默认显示loading
        $scope.isShow = false;
        $scope.news = [];
        var load = function() {
                $http.jsonp('news.php', {
                    params: {
                        page: $scope.page,
                        channelId: '5572a108b3cdc86cf39001d6',
                        channelName: '游戏焦点',
                        callback: 'JSON_CALLBACK'
                    }
                }).success(function(data) {
                    $scope.isShow = true;
                    console.log(data);
                    $scope.news = $scope.news.concat(data.showapi_res_body.pagebean.contentlist);
                })
            }
            //第一次进来的时候自执行加载数据
        load();
        //默认搜索内容
        $scope.searchName = '';
        //搜索框默认的状态
        $scope.isSearch = false;
        $scope.search = function() {
            $scope.isSearch = true;
        }

        $scope.cancelSearch = function() {
            $scope.isSearch = false;
        }

        //加载更多的函数
        $scope.loadMore = function() {
            $scope.isShow = false;
            $scope.page++;
            load();
        }
    })
    //新闻详细页的控制器
app.controller('detailCtrl', function($scope, $http, $state) {
    //是否显示放大图片
    $scope.isShowGallery = false
    $scope.showGallery = function(isshow, url) {
        $scope.isShowGallery = isshow;
        console.log(url);
        $scope.imgUrl = "background-image:url(" + url + ")";
    }
    console.log($state.params)
    $http.jsonp('news.php', {
        params: {
            page: 1,
            channelId: '5572a109b3cdc86cf39001db',
            channelName: '国内最新',
            callback: 'JSON_CALLBACK'
        }
    }).success(function(data) {
        console.log(data);
        $scope.new = data.showapi_res_body.pagebean.contentlist[$state.params.id];
        console.log($scope.new)
    })
})
app.controller('loginsCtrl', function($scope, $http, cookie) {
    $scope.login = function() {
        console.log('username:' + $scope.username);
        console.log('password:' + $scope.password);
        $http.post('http://localhost/htmldocument/1201/day9/newsqianduan/news/index.php/login_api/login', {
            params: {
                username: $scope.username,
                password: $scope.password
            }
        }).success(function(data) {
            console.log(data);
            if(data.code) {
                cookie.setCookie('token', data.info.token);
                cookie.setCookie('username', data.username);
                window.location.href = "#/index/list"
            }
        })
    }
})
app.controller('registerCtrl',function($scope, $http, cookie){
    $scope.register = function(){
        console.log('username:'+$scope.username);
        console.log('password:'+$scope.password);
        $http.post('http://localhost/htmldocument/1201/day9/newsqianduan/news/index.php/login_api/register',{

            params:{
                username:$scope.username,
                password:$scope.password
            }
        }).success(function(data){
            console.log(data);
            if(data.code){
                cookie.setCookie('username',data.username);
                cookie.setCookie('token',data.info.token);
                window.location.href = '#/index/list';
            }
        })
    }
})
app.controller('settingCtrl',function($scope, $http, cookie){
    var token = cookie.getCookie('token');
    var username = cookie.getCookie('username')
    $http.post('http://localhost/htmldocument/1201/day9/newsqianduan/news/index.php/login_api/auto_login',{
        params:{
            token:token,
            username:username
        }
    }).success(function(data){
        console.log(data);
        if(data.code){}else{
            window.location.href = '#/login'
        }
    })
})

})();
