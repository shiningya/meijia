var express = require('express');
var axios = require('axios');
var router = express.Router();
var ct2 = [
  {
    "id": 6,
    "level": 2,
    "name": "标准件",
    "type": 2
  },
  {
    "id": 7,
    "level": 2,
    "name": "辅助件",
    "type": 2
  },
  {
    "id": 8,
    "level": 2,
    "name": "车身系统",
    "type": 2
  },
  {
    "id": 9,
    "level": 2,
    "name": "电气系统",
    "type": 2
  },
  {
    "id": 10,
    "level": 2,
    "name": "转向系统",
    "type": 2
  },
  {
    "id": 11,
    "level": 2,
    "name": "底盘系统",
    "type": 2
  },
  {
    "id": 12,
    "level": 2,
    "name": "密封系统",
    "type": 2
  },
  {
    "id": 13,
    "level": 2,
    "name": "内饰系统",
    "type": 2
  },
];



/* 配件列表 */
router.get('/', function (req, res, next) {
  var args = '';
  axios.all([getParts(args), getPromo1(), getPromo2(), getPromo3(), getPromo4(), getPromo5(), getPromo6()]).then(axios.spread(function (parts, promo1, promo2, promo3, promo4, promo5, promo6) {
    var data = {};
    data.curnav = 'parts';
    data.ids = ['0','0'];
    data.keyword = '';
    data.querystr = '';
    data.list = true;
    data.ct2 = ct2;
    data.pageinfo = parts.data.response.query;
    data.parts = parts.data.response.data;
    data.promo1 = promo1.data.response.data;
    data.promo2 = promo2.data.response.data;
    data.promo3 = promo3.data.response.data;
    data.promo4 = promo4.data.response.data;
    data.promo5 = promo5.data.response.data;
    data.promo6 = promo6.data.response.data;
    res.render('parts', data);
  }));
});

router.get('/list/:page', function (req, res, next) {
  var page = req.params.page;
  var args = '?partsCondition.pageNo=' + page;
  axios.all([getPage(args), getPromo1(), getPromo2(), getPromo3(), getPromo4(), getPromo5(), getPromo6()]).then(axios.spread(function (parts, promo1, promo2, promo3, promo4, promo5, promo6) {
    var data = {};
    data.curnav = 'parts';
    data.ids = ['0','0'];
    data.keyword = '';
    data.querystr = '';
    data.list = true;
    data.ct2 = ct2;
    data.pageinfo = parts.data.response.query;
    data.parts = parts.data.response.data;
    data.promo1 = promo1.data.response.data;
    data.promo2 = promo2.data.response.data;
    data.promo3 = promo3.data.response.data;
    data.promo4 = promo4.data.response.data;
    data.promo5 = promo5.data.response.data;
    data.promo6 = promo6.data.response.data;
    res.render('parts', data);
  }));
});

/* 筛选配件列表 */
router.get('/search/:str', function (req, res, next) {
  var ids = req.params.str.split('-');
  var keyword = req.query.word || '';
  var id = ids[0];
  var args = '?partsCondition.pageNo=' + ids[2] + '&';
  if (ids[0] !== '0') {
    args += 'partsCondition.category_id=' + ids[0] + '&';
    if (ids[1]!=='0') {
      args += 'partsCondition.ct2=' + ids[1] + '&';
    }
  };
  if (keyword) {
    var codeword = encodeURI(keyword);
    var querystr = '?word=' + keyword;
    args += 'partsCondition.name=' + codeword;
  };
axios.all([getCt3(id), getPage(args), getPromo1(), getPromo2(), getPromo3(), getPromo4(), getPromo5(), getPromo6()]).then(axios.spread(function (ct3, parts, promo1, promo2, promo3, promo4, promo5, promo6) {
    var data = {};
    data.curnav = 'parts';
    data.id = id;
    data.keyword = keyword || '';
    data.querystr = querystr || '';
    data.ids = ids;
    data.ct2 = ct2;
    data.ct3 = id === '0' ? null : ct3.data.response.data;
    data.pageinfo = parts.data.response.query;
    data.parts = parts.data.response.data;
    data.promo1 = promo1.data.response.data;
    data.promo2 = promo2.data.response.data;
    data.promo3 = promo3.data.response.data;
    data.promo4 = promo4.data.response.data;
    data.promo5 = promo5.data.response.data;
    data.promo6 = promo6.data.response.data;
    res.render('parts', data);
  }));
});

/* 配件详情页 */
router.get('/:id', function (req, res, next) {
  var id = req.params.id;
  axios.all([getPart(id), getPromo8()]).then(axios.spread(function (part, promo8) {
    var data = {};
    data.curnav = 'parts';
    data.id = id;
    data.keyword = '';
    data.part = part.data.response.data;
    data.promo8 = promo8.data.response.data;
    res.render('part', data);
  }));
});

/* 获取配件库数据 */
function getCt3(id) {
  var url = 'http://localhost:8080/ev/category_listByParent?category.id=' + id;
  return axios.get(url);
}

function getParts(args) {
  var url = 'http://localhost:8080/ev/parts_search' + args;
  return axios.get(url);
}

function getPage(args) {
  var url = 'http://localhost:8080/ev/parts_skipPage' + args;
  return axios.get(url);
}

function getPromo1() {
  return axios.get('http://localhost:8080/ev/placeParts_findByAdsUniqueId?ads_unique_id=PL01');
}

function getPromo2() {
  return axios.get('http://localhost:8080/ev/placeArt_findByAdsUniqueId?ads_unique_id=CN01');
}

function getPromo3() {
  return axios.get('http://localhost:8080/ev/placeArt_findByAdsUniqueId?ads_unique_id=CN02');
}

function getPromo4() {
  return axios.get('http://localhost:8080/ev/placeParts_findByAdsUniqueId?ads_unique_id=PL02');
}

function getPromo5() {
  return axios.get('http://localhost:8080/ev/placeArt_findByAdsUniqueId?ads_unique_id=CN03');
}

function getPromo6() {
  return axios.get('http://localhost:8080/ev/placeArt_findByAdsUniqueId?ads_unique_id=CN04');
}

/* 获取配件数据 */
function getPart(id) {
  var url = 'http://localhost:8080/ev/parts_singleById?parts.id=' + id;
  return axios.get(url);
}

function getPromo8() {
  return axios.get('http://localhost:8080/ev/placeParts_findByAdsUniqueId?ads_unique_id=PDET');
}

module.exports = router;