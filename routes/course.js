var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET users listing. */
router.get('/:cate', function (req, res, next) {
    var cate = req.params.cate;
    axios.all([getCate(cate)])
        .then(axios.spread(function (cate) {
            var data = {};
            data.curnav = 'course';
            data.cate = cate.data.response.data;
            res.render('course', data);
        }));
});

function getCate(cate) {
    var url = 'http://localhost:8080/yzx/col_findByCol?col.urlcode=' + cate;
    return axios.get(url);
}

module.exports = router;