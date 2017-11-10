var express = require('express');
var axios = require('axios');
var router = express.Router();
var exhibitions = [
    {
        "title": "低速电动车",
        "url": "http://www.ciaae.cn",
        "pic": "http://ev.cpkso.com/img/exhibition1.jpg"
    },
    {
        "title": "电动乘用车",
        "url": "http://www.km-paev.com",
        "pic": "http://ev.cpkso.com/img/exhibition2.jpg"
    },
    {
        "title": "电动三轮车",
        "url": "http://www.chautotechexpo.com",
        "pic": "http://ev.cpkso.com/img/exhibition3.jpg"
    },
    {
        "title": "电动客车",
        "url": "http://www.hanneng-sh.com",
        "pic": "http://ev.cpkso.com/img/exhibition4.jpg"
    },
    {
        "title": "电动客车",
        "url": "http://www.zhengzhouauto.org",
        "pic": "http://ev.cpkso.com/img/exhibition5.jpg"
    },
    {
        "title": "电动客车",
        "url": "http://www.zhengzhouauto.org",
        "pic": "http://ev.cpkso.com/img/exhibition6.jpg"
    }
];

/* GET users listing. */
router.get(['/',/^(\/index)/], function(req, res, next) {
    axios.all([getSliders(), getBanners(), getNewsG(), getNewCar(), getNewParts(), getCarRequire(), getPartsRequire(), getCarRequirePic(), getPartsRequirePic(), getNewsN(), getNewsB(), getShows(), getVips(), getPromo1(), getPromo2()])
        .then(axios.spread(function(sliders, banners, newsG, newCar, newParts, carReq, partsReq, carReqPic, partsReqPic, newsN, newsB, shows, vips, promo1, promo2) {
            var data = {};
            data.curnav = 'index';
            data.sliders = sliders.data.response.data;
            data.banners = banners.data.response.data;
            data.newsG = newsG.data.response.data;

            data.newCar = newCar.data.response.data;
            data.newParts = newParts.data.response.data;

            data.carReq = carReq.data.response.data;
            data.partsReq = partsReq.data.response.data;
            data.carReqPic = carReqPic.data.response.data;
            data.partsReqPic = partsReqPic.data.response.data;

            data.newsN = newsN.data.response.data;
            data.newsB = newsB.data.response.data;
            data.shows = shows.data.response.data;
            data.exhibitions = exhibitions;
            data.vips = vips.data.response.data;
            data.promo1 = promo1.data.response.data;
            data.promo2 = promo2.data.response.data;

            res.render('index', data);
        }));
});

function getSliders() {
    return axios.get('http://localhost:8080/ev/placeCar_findByAdsUniqueId?ads_unique_id=A01');
}

function getBanners() {
    return axios.get('http://localhost:8080/ev/placeCar_findByAdsUniqueId?ads_unique_id=A02');
}

function getNewsG() {
    return axios.get('http://localhost:8080/ev/placeArt_findByAdsUniqueId?ads_unique_id=D');
}

function getNewCar() {
    return axios.get('http://localhost:8080/ev/placeCar_findByAdsUniqueId?ads_unique_id=NEW');
}

function getNewParts() {
    return axios.get('http://localhost:8080/ev/placeParts_findByAdsUniqueId?ads_unique_id=INDNEWP');
}

function getCarRequire() {
    return axios.get('http://localhost:8080/ev/require_listByTenderI?require.category.type=1');
}

function getPartsRequire() {
    return axios.get('http://localhost:8080/ev/require_listByTenderI?require.category.type=2');
}

function getCarRequirePic() {
    return axios.get('http://localhost:8080/ev/require_listByTypeI?require.category.type=1');
}

function getPartsRequirePic() {
    return axios.get('http://localhost:8080/ev/require_listByTypeI?require.category.type=2');
}

function getNewsN() {
    return axios.get('http://localhost:8080/ev/article_search_front');
}

function getNewsB() {
    return axios.get('http://localhost:8080/ev/article_search_brand?articleCondition.artCt.id=7');
}

function getShows() {
    return axios.get('http://localhost:8080/ev/placeCompanyMutPic_findByAdsUniqueId?ads_unique_id=Q');
}

function getVips() {
    return axios.get('http://localhost:8080/ev/placeCompany_findByAdsUniqueId?ads_unique_id=MIVIP');
}

function getPromo1() {
    return axios.get('http://localhost:8080/ev/placeCompany_findByAdsUniqueId?ads_unique_id=AT01');
}

function getPromo2() {
    return axios.get('http://localhost:8080/ev/placeCompany_findByAdsUniqueId?ads_unique_id=AT02');
}

module.exports = router;