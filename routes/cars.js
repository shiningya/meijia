var express = require('express');
var axios = require('axios');
var router = express.Router();
var ct2 = [
    {
        "id": 15,
        "name": "低速电动车"
    },
    {
        "id": 3,
        "name": "电动乘用车"
    },
    {
        "id": 14,
        "name": "电动三轮车"
    },
    {
        "id": 4,
        "name": "电动客车"
    }
];
var prices = [
    {
        "id": 1,
        "name": "10万以下"
    },
    {
        "id": 2,
        "name": "10-20万"
    },
    {
        "id": 3,
        "name": "20-30万"
    },
    {
        "id": 4,
        "name": "30-50万"
    },
    {
        "id": 5,
        "name": "50万以上"
    }
];
var miles = [
    {
        "id": 1,
        "name": "100公里以下"
    },
    {
        "id": 2,
        "name": "100-200公里"
    },
    {
        "id": 3,
        "name": "200-300公里"
    },
    {
        "id": 4,
        "name": "300-400公里"
    },
    {
        "id": 5,
        "name": "400公里以上"
    }
];
var types = [
    {
        "id": 1,
        "name": "纯电动"
    },
    {
        "id": 2,
        "name": "插电式"
    },
    {
        "id": 3,
        "name": "增程式"
    },
    {
        "id": 4,
        "name": "混合动力"
    },
    {
        "id": 5,
        "name": "燃料电池"
    }
];
var levels = [
    {
        "id": 1,
        "name": "微型"
    },
    {
        "id": 2,
        "name": "小型"
    },
    {
        "id": 3,
        "name": "紧凑型"
    },
    {
        "id": 4,
        "name": "中型"
    },
    {
        "id": 5,
        "name": "中大型"
    },
    {
        "id": 6,
        "name": "豪华型"
    },
    {
        "id": 7,
        "name": "SUV"
    },
    {
        "id": 8,
        "name": "MPV"
    },
    {
        "id": 9,
        "name": "跑车"
    },
    {
        "id": 10,
        "name": "商用"
    }
];

/* 车型列表 */
router.get('/', function(req, res, next) {
    var ids = ['0','0','0','0','0','0'];
    var args = '';
    axios.all([getBrandList(), getCars(args), getPromo1(), getPromo2(), getPromo3(), getPromo4(), getPromo5(), getPromo6(), getPromo7()]).then(axios.spread(function(brands, cars, promo1, promo2, promo3, promo4, promo5, promo6, promo7) {
        var data = {};
        data.curnav = 'cars';
        data.ids = ids;
        data.keyword = '';
        data.querystr = '';
        data.list = true;
        data.ct2 = ct2;
        data.brands = brands.data.response.data;
        data.prices = prices;
        data.miles = miles;
        data.types = types;
        data.levels = levels;
        data.cars = cars.data.response.data;
        data.pageinfo = cars.data.response.query;
        data.promo1 = promo1.data.response.data;
        data.promo2 = promo2.data.response.data;
        data.promo3 = promo3.data.response.data;
        data.promo4 = promo4.data.response.data;
        data.promo5 = promo5.data.response.data;
        data.promo6 = promo6.data.response.data;
        data.promo7 = promo7.data.response.data;
        res.render('cars', data);
    }));
});

router.get('/list/:page', function(req, res, next) {
    var page = req.params.page;
    var ids = ['0','0','0','0','0','0'];
    var args = '?carCondition.pageNo=' + page;
    axios.all([getBrandList(), getPage(args), getPromo1(), getPromo2(), getPromo3(), getPromo4(), getPromo5(), getPromo6(), getPromo7()]).then(axios.spread(function(brands, cars, promo1, promo2, promo3, promo4, promo5, promo6, promo7) {
        var data = {};
        data.curnav = 'cars';
        data.list = true;
        data.keyword = '';
        data.querystr = '';
        data.ids = ids;
        data.ct2 = ct2;
        data.brands = brands.data.response.data;
        data.prices = prices;
        data.miles = miles;
        data.types = types;
        data.levels = levels;
        data.cars = cars.data.response.data;
        data.pageinfo = cars.data.response.query;
        data.promo1 = promo1.data.response.data;
        data.promo2 = promo2.data.response.data;
        data.promo3 = promo3.data.response.data;
        data.promo4 = promo4.data.response.data;
        data.promo5 = promo5.data.response.data;
        data.promo6 = promo6.data.response.data;
        data.promo7 = promo7.data.response.data;
        res.render('cars', data);
    }));
});

/* 筛选车型列表 */
router.get('/search/:str', function(req, res, next) {
    var ids = req.params.str.split('-');
    var keyword = req.query.word || '';
    var args = '?carCondition.pageNo=' + ids[6] + '&';
    if (ids[0] !== '0') {
        args += 'carCondition.category_id=' + ids[0] + '&';
    };
    if (ids[1] !== '0') {
        args += 'carCondition.brand.id=' + ids[1] + '&';
    };
    if (ids[2] !== '0') {
        args += 'carCondition.price=' + ids[2] + '&';
    };
    if (ids[3] !== '0') {
        args += 'carCondition.mile=' + ids[3] + '&';
    };
    if (ids[4] !== '0') {
        args += 'carCondition.energy_type=' + ids[4] + '&';
    };
    if (ids[5] !== '0') {
        args += 'carCondition.level=' + ids[5] + '&';
    };
    if (keyword) {
        var codeword = encodeURI(keyword);
        var querystr = '?word=' + keyword;
        args += 'carCondition.car_name=' + codeword;
    };
    console.log(args);
    axios.all([getBrandList(), getPage(args), getPromo1(), getPromo2(), getPromo3(), getPromo4(), getPromo5(), getPromo6(), getPromo7()]).then(axios.spread(function(brands, cars, promo1, promo2, promo3, promo4, promo5, promo6, promo7) {
        var data = {};
        data.curnav = 'cars';
        data.ids = ids;
        data.keyword = keyword || '';
        data.querystr = querystr || '';
        data.ct2 = ct2;
        data.brands = brands.data.response.data;
        data.brands.letter = ids[1]==='0' ? null : getCurLetter(data.brands, ids[1]);
        data.prices = prices;
        data.miles = miles;
        data.types = types;
        data.levels = levels;
        data.cars = cars.data.response.data;
        data.pageinfo = cars.data.response.query;
        data.promo1 = promo1.data.response.data;
        data.promo2 = promo2.data.response.data;
        data.promo3 = promo3.data.response.data;
        data.promo4 = promo4.data.response.data;
        data.promo5 = promo5.data.response.data;
        data.promo6 = promo6.data.response.data;
        data.promo7 = promo7.data.response.data;
        res.render('cars', data);
    }));
});

/* 车型详情页 */
router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    axios.all([getCar(id), getParams(), getPromo8()]).then(axios.spread(function(car, params, promo8) {
        var data = {};
        data.curnav = 'cars';
        data.id = id;
        data.keyword = '';
        data.car = car.data.response.data;
        data.promo8 = promo8.data.response.data;
        res.render('car', data);
    }));
});

/* 获取车型库数据 */
function getBrandList() {
    return axios.get('http://localhost:8080/ev/brand_listByInitial');
}

function getCars(args) {
    var url = 'http://localhost:8080/ev/car_search' + args;
    console.log(url);
    return axios.get(url);
}

function getPage(args) {
    var url = 'http://localhost:8080/ev/car_skipPage' + args;
    return axios.get(url);
}

function getPromo1() {
    return axios.get('http://localhost:8080/ev/placeCar_findByAdsUniqueId?ads_unique_id=LR01');
}

function getPromo2() {
    return axios.get('http://localhost:8080/ev/placeArt_findByAdsUniqueId?ads_unique_id=CN01');
}

function getPromo3() {
    return axios.get('http://localhost:8080/ev/placeArt_findByAdsUniqueId?ads_unique_id=CN02');
}

function getPromo4() {
    return axios.get('http://localhost:8080/ev/placeCar_findByAdsUniqueId?ads_unique_id=LR02');
}    

function getPromo5() {
    return axios.get('http://localhost:8080/ev/placeArt_findByAdsUniqueId?ads_unique_id=CN03');
}

function getPromo6() {
    return axios.get('http://localhost:8080/ev/placeArt_findByAdsUniqueId?ads_unique_id=CN04');
}

function getPromo7() {
    return axios.get('http://localhost:8080/ev/placeCar_findByAdsUniqueId?ads_unique_id=LR03');
}   

/* 车型详情页 */
function getCar(id) {
    var url = 'http://localhost:8080/ev/car_singleById?car.id=' + id;
    return axios.get(url);
}

function getParams() {
    return axios.get('http://localhost:8080/ev/param_findParamTables');
}

function getPromo8() {
    return axios.get('http://localhost:8080/ev/placeCar_findByAdsUniqueId?ads_unique_id=CDET');
}

function getCurLetter(data, id) {
    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].array.length; j++) {
            if (data[i].array && data[i].array[j].id === +id) {
                return data[i].initial;
            }
        }
    }
}

module.exports = router;