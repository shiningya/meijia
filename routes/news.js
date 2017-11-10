var express = require('express');
var axios = require('axios');
var router = express.Router();

/* 综合新闻列表 */
router.get('/', function(req, res, next) {
    axios.all([getBanner(), getNews(), getPromo1(), getPromo2(), getPromo3(), getPromo4(), getPromo5()]).then(axios.spread(function(banner, news, promo1, promo2, promo3, promo4, promo5) {
        var data = {};
        data.curnav = 'news';
        data.list = true;
        data.banner = banner.data.response.data;
        data.news = news.data.response.data;
        data.pageinfo = news.data.response.query;
        data.promo1 = promo1.data.response.data;
        data.promo2 = promo2.data.response.data;
        data.promo3 = promo3.data.response.data;
        data.promo4 = promo4.data.response.data;
        data.promo5 = promo5.data.response.data;
        res.render('news', data);
    }));
});
/* 跳页 */
router.get('/list/:page', function(req, res, next) {
    var page = req.params.page;
    axios.all([getBanner(), getNews3(page), getPromo1(), getPromo2(), getPromo3(), getPromo4(), getPromo5()]).then(axios.spread(function(banner, news, promo1, promo2, promo3, promo4, promo5) {
        var data = {};
        data.curnav = 'news';
        data.list = true;
        data.banner = banner.data.response.data;
        data.news = news.data.response.data;
        data.pageinfo = news.data.response.query;
        data.promo1 = promo1.data.response.data;
        data.promo2 = promo2.data.response.data;
        data.promo3 = promo3.data.response.data;
        data.promo4 = promo4.data.response.data;
        data.promo5 = promo5.data.response.data;
        res.render('news', data);
    }));
});

/* 新车新闻列表 */
router.get('/xinche/', function(req, res) {
    axios.all([getBanner(), getNews2(1), getPromo1(), getPromo2(), getPromo3(), getPromo4(), getPromo5()]).then(axios.spread(function(banner, news, promo1, promo2, promo3, promo4, promo5) {
        var data = {};
        data.curnav = 'news';
        data.list = true;
        data.banner = banner.data.response.data;
        data.news = news.data.response.data;
        data.pageinfo = news.data.response.query;
        data.promo1 = promo1.data.response.data;
        data.promo2 = promo2.data.response.data;
        data.promo3 = promo3.data.response.data;
        data.promo4 = promo4.data.response.data;
        data.promo5 = promo5.data.response.data;
        res.render('news/xinche', data);
    }));
});

/* 跳页 */
router.get('/xinche/:page', function(req, res, next) {
    var page = req.params.page;
    axios.all([getBanner(), getNews4(1,page), getPromo1(), getPromo2(), getPromo3(), getPromo4(), getPromo5()]).then(axios.spread(function(banner, news, promo1, promo2, promo3, promo4, promo5) {
        var data = {};
        data.curnav = 'news';
        data.list = true;
        data.banner = banner.data.response.data;
        data.news = news.data.response.data;
        data.pageinfo = news.data.response.query;
        data.promo1 = promo1.data.response.data;
        data.promo2 = promo2.data.response.data;
        data.promo3 = promo3.data.response.data;
        data.promo4 = promo4.data.response.data;
        data.promo5 = promo5.data.response.data;
        res.render('news/xinche', data);
    }));
});

/* 技术新闻列表 */
router.get('/jishu/', function(req, res) {
    axios.all([getBanner(), getNews2(2), getPromo1(), getPromo2(), getPromo3(), getPromo4(), getPromo5()]).then(axios.spread(function(banner, news, promo1, promo2, promo3, promo4, promo5) {
        var data = {};
        data.curnav = 'news';
        data.list = true;
        data.banner = banner.data.response.data;
        data.news = news.data.response.data;
        data.pageinfo = news.data.response.query;
        data.promo1 = promo1.data.response.data;
        data.promo2 = promo2.data.response.data;
        data.promo3 = promo3.data.response.data;
        data.promo4 = promo4.data.response.data;
        data.promo5 = promo5.data.response.data;
        res.render('news/jishu', data);
    }));
});
/* 跳页 */
router.get('/jishu/:page', function(req, res, next) {
    var page = req.params.page;
    axios.all([getBanner(), getNews4(2,page), getPromo1(), getPromo2(), getPromo3(), getPromo4(), getPromo5()]).then(axios.spread(function(banner, news, promo1, promo2, promo3, promo4, promo5) {
        var data = {};
        data.curnav = 'news';
        data.list = true;
        data.banner = banner.data.response.data;
        data.news = news.data.response.data;
        data.pageinfo = news.data.response.query;
        data.promo1 = promo1.data.response.data;
        data.promo2 = promo2.data.response.data;
        data.promo3 = promo3.data.response.data;
        data.promo4 = promo4.data.response.data;
        data.promo5 = promo5.data.response.data;
        res.render('news/jishu', data);
    }));
});

/* 行业新闻列表 */
router.get('/hangye/', function(req, res) {
    axios.all([getBanner(), getNews2(3), getPromo1(), getPromo2(), getPromo3(), getPromo4(), getPromo5()]).then(axios.spread(function(banner, news, promo1, promo2, promo3, promo4, promo5) {
        var data = {};
        data.curnav = 'news';
        data.list = true;
        data.banner = banner.data.response.data;
        data.news = news.data.response.data;
        data.pageinfo = news.data.response.query;
        data.promo1 = promo1.data.response.data;
        data.promo2 = promo2.data.response.data;
        data.promo3 = promo3.data.response.data;
        data.promo4 = promo4.data.response.data;
        data.promo5 = promo5.data.response.data;
        res.render('news/hangye', data);
    }));
});
/* 跳页 */
router.get('/hangye/:page', function(req, res, next) {
    var page = req.params.page;
    axios.all([getBanner(), getNews4(3,page), getPromo1(), getPromo2(), getPromo3(), getPromo4(), getPromo5()]).then(axios.spread(function(banner, news, promo1, promo2, promo3, promo4, promo5) {
        var data = {};
        data.curnav = 'news';
        data.list = true;
        data.banner = banner.data.response.data;
        data.news = news.data.response.data;
        data.pageinfo = news.data.response.query;
        data.promo1 = promo1.data.response.data;
        data.promo2 = promo2.data.response.data;
        data.promo3 = promo3.data.response.data;
        data.promo4 = promo4.data.response.data;
        data.promo5 = promo5.data.response.data;
        res.render('news/hangye', data);
    }));
});

/* 政策新闻列表 */
router.get('/zhengce/', function(req, res) {
    axios.all([getBanner(), getNews2(4), getPromo1(), getPromo2(), getPromo3(), getPromo4(), getPromo5()]).then(axios.spread(function(banner, news, promo1, promo2, promo3, promo4, promo5) {
        var data = {};
        data.curnav = 'news';
        data.list = true;
        data.banner = banner.data.response.data;
        data.news = news.data.response.data;
        data.pageinfo = news.data.response.query;
        data.promo1 = promo1.data.response.data;
        data.promo2 = promo2.data.response.data;
        data.promo3 = promo3.data.response.data;
        data.promo4 = promo4.data.response.data;
        data.promo5 = promo5.data.response.data;
        res.render('news/zhengce', data);
    }));
});
/* 跳页 */
router.get('/zhengce/:page', function(req, res, next) {
    var page = req.params.page;
    axios.all([getBanner(), getNews4(4,page), getPromo1(), getPromo2(), getPromo3(), getPromo4(), getPromo5()]).then(axios.spread(function(banner, news, promo1, promo2, promo3, promo4, promo5) {
        var data = {};
        data.curnav = 'news';
        data.list = true;
        data.banner = banner.data.response.data;
        data.news = news.data.response.data;
        data.pageinfo = news.data.response.query;
        data.promo1 = promo1.data.response.data;
        data.promo2 = promo2.data.response.data;
        data.promo3 = promo3.data.response.data;
        data.promo4 = promo4.data.response.data;
        data.promo5 = promo5.data.response.data;
        res.render('news/zhengce', data);
    }));
});

/* 导购新闻列表 */
router.get('/daogou/', function(req, res) {
    axios.all([getBanner(), getNews2(5), getPromo1(), getPromo2(), getPromo3(), getPromo4(), getPromo5()]).then(axios.spread(function(banner, news, promo1, promo2, promo3, promo4, promo5) {
        var data = {};
        data.curnav = 'news';
        data.list = true;
        data.banner = banner.data.response.data;
        data.news = news.data.response.data;
        data.pageinfo = news.data.response.query;
        data.promo1 = promo1.data.response.data;
        data.promo2 = promo2.data.response.data;
        data.promo3 = promo3.data.response.data;
        data.promo4 = promo4.data.response.data;
        data.promo5 = promo5.data.response.data;
        res.render('news/daogou', data);
    }));
});
/* 跳页 */
router.get('/daogou/:page', function(req, res, next) {
    var page = req.params.page;
    axios.all([getBanner(), getNews4(5,page), getPromo1(), getPromo2(), getPromo3(), getPromo4(), getPromo5()]).then(axios.spread(function(banner, news, promo1, promo2, promo3, promo4, promo5) {
        var data = {};
        data.curnav = 'news';
        data.list = true;
        data.banner = banner.data.response.data;
        data.news = news.data.response.data;
        data.pageinfo = news.data.response.query;
        data.promo1 = promo1.data.response.data;
        data.promo2 = promo2.data.response.data;
        data.promo3 = promo3.data.response.data;
        data.promo4 = promo4.data.response.data;
        data.promo5 = promo5.data.response.data;
        res.render('news/daogou', data);
    }));
});

/* 用车新闻列表 */
router.get('/yongche/', function(req, res) {
    axios.all([getBanner(), getNews2(6), getPromo1(), getPromo2(), getPromo3(), getPromo4(), getPromo5()]).then(axios.spread(function(banner, news, promo1, promo2, promo3, promo4, promo5) {
        var data = {};
        data.curnav = 'news';
        data.list = true;
        data.banner = banner.data.response.data;
        data.news = news.data.response.data;
        data.pageinfo = news.data.response.query;
        data.promo1 = promo1.data.response.data;
        data.promo2 = promo2.data.response.data;
        data.promo3 = promo3.data.response.data;
        data.promo4 = promo4.data.response.data;
        data.promo5 = promo5.data.response.data;
        res.render('news/yongche', data);
    }));
});
/* 跳页 */
router.get('/yongche/:page', function(req, res, next) {
    var page = req.params.page;
    axios.all([getBanner(), getNews4(6,page), getPromo1(), getPromo2(), getPromo3(), getPromo4(), getPromo5()]).then(axios.spread(function(banner, news, promo1, promo2, promo3, promo4, promo5) {
        var data = {};
        data.curnav = 'news';
        data.list = true;
        data.banner = banner.data.response.data;
        data.news = news.data.response.data;
        data.pageinfo = news.data.response.query;
        data.promo1 = promo1.data.response.data;
        data.promo2 = promo2.data.response.data;
        data.promo3 = promo3.data.response.data;
        data.promo4 = promo4.data.response.data;
        data.promo5 = promo5.data.response.data;
        res.render('news/yongche', data);
    }));
});

/* 品牌新闻列表 */
router.get('/pinpai/', function(req, res) {
    axios.all([getBanner(), getNews2(7), getPromo1(), getPromo2(), getPromo3(), getPromo4(), getPromo5()]).then(axios.spread(function(banner, news, promo1, promo2, promo3, promo4, promo5) {
        var data = {};
        data.curnav = 'news';
        data.list = true;
        data.banner = banner.data.response.data;
        data.news = news.data.response.data;
        data.pageinfo = news.data.response.query;
        data.promo1 = promo1.data.response.data;
        data.promo2 = promo2.data.response.data;
        data.promo3 = promo3.data.response.data;
        data.promo4 = promo4.data.response.data;
        data.promo5 = promo5.data.response.data;
        res.render('news/pinpai', data);
    }));
});
/* 跳页 */
router.get('/pinpai/:page', function(req, res, next) {
    var page = req.params.page;
    axios.all([getBanner(), getNews4(7,page), getPromo1(), getPromo2(), getPromo3(), getPromo4(), getPromo5()]).then(axios.spread(function(banner, news, promo1, promo2, promo3, promo4, promo5) {
        var data = {};
        data.curnav = 'news';
        data.list = true;
        data.banner = banner.data.response.data;
        data.news = news.data.response.data;
        data.pageinfo = news.data.response.query;
        data.promo1 = promo1.data.response.data;
        data.promo2 = promo2.data.response.data;
        data.promo3 = promo3.data.response.data;
        data.promo4 = promo4.data.response.data;
        data.promo5 = promo5.data.response.data;
        res.render('news/pinpai', data);
    }));
});

router.get('/search/:str', function (req, res, next) {
    var ids = req.params.str.split('-');
    var args = '?articleCondition.pageNo=' + ids[1] + '&';
    if (ids[0] !== '0') {
        args += 'articleCondition.tag.id=' + ids[0];
    };
    axios.all([getBanner(), getNews5(args), getPromo1(), getPromo2(), getPromo3(), getPromo4(), getPromo5()]).then(axios.spread(function (banner, news, promo1, promo2, promo3, promo4, promo5) {
        var data = {};
        data.curnav = 'news';
        data.ids = ids;
        data.list = false;
        data.banner = banner.data.response.data;
        data.news = news.data.response.data;
        data.pageinfo = news.data.response.query;
        data.promo1 = promo1.data.response.data;
        data.promo2 = promo2.data.response.data;
        data.promo3 = promo3.data.response.data;
        data.promo4 = promo4.data.response.data;
        data.promo5 = promo5.data.response.data;
        res.render('news', data);
    }));
});

/* 新闻详情页 */
router.get('/:name', function(req, res, next) {
    var name = req.params.name;
    var id = name.replace('.html','');
    axios.all([getContent(id), getPromo1(), getPromo2(), getPromo3(), getPromo4(), getPromo5()]).then(axios.spread(function(content, promo1, promo2, promo3, promo4, promo5) {
        var data = {};
        data.curnav = 'news';
        data.list = true;
        data.content = content.data.response.data;
        data.promo1 = promo1.data.response.data;
        data.promo2 = promo2.data.response.data;
        data.promo3 = promo3.data.response.data;
        data.promo4 = promo4.data.response.data;
        data.promo5 = promo5.data.response.data;
        res.render('newsdetail', data);
    }));
});



function getBanner() {
    return axios.get('http://localhost:8080/ev/placeArt_findByAdsUniqueId?ads_unique_id=Z01');
}
/* 获取新闻列表数据 */
function getNews() {
    return axios.get('http://localhost:8080/ev/article_search');
}

/* 获取各个分类新闻的数据 */
function getNews2(id) {
    var url = 'http://localhost:8080/ev/article_search?articleCondition.artCt.id=' + id;
    return axios.get(url);
}

/* 获取跳页的数据 */
function getNews3(page) {
    var url = 'http://localhost:8080/ev/article_search?articleCondition.pageNo=' + page;
    return axios.get(url);
}

/* 获取各个分类跳页的数据 */
function getNews4(id,page) {
    var url = 'http://localhost:8080/ev/article_search?articleCondition.artCt.id=' + id + '&articleCondition.pageNo=' + page;
    return axios.get(url);
}

/* 获取标签对应的数据 */
function getNews5(args) {
    var url = 'http://localhost:8080/ev/article_search' + args;
    return axios.get(url);
}

function getContent(id) {
    var url = 'http://localhost:8080/ev/article_singleById?article.id=' + id;
    return axios.get(url);
}

/* 获取右侧各个广告位的数据 */
function getPromo1() {
    return axios.get('http://localhost:8080/ev/placeCar_findByAdsUniqueId?ads_unique_id=Z02');
}

function getPromo2() {
    return axios.get('http://localhost:8080/ev/placeArt_findByAdsUniqueId?ads_unique_id=Z06');
}

function getPromo3() {
    return axios.get('http://localhost:8080/ev/placeCar_findByAdsUniqueId?ads_unique_id=Z03');
}

function getPromo4() {
    return axios.get('http://localhost:8080/ev/placeCar_findByAdsUniqueId?ads_unique_id=Z05');
}

function getPromo5() {
    return axios.get('http://localhost:8080/ev/placeCar_findByAdsUniqueId?ads_unique_id=Z04');
}


module.exports = router;