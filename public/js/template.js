$('#J_cars').find('li').click(function(){
    var idO = getId($(this));
    carRender(idO.id,$(idO.elId),idO.loaded);
})

$('#J_parts').find('li').click(function(){
    var idO = getId($(this));
    partsRender(idO.id,$(idO.elId),idO.loaded);
})

$('#J_news').find('li').click(function(){
    var idO = getId($(this));
    newsRender(idO.id,$(idO.elId),idO.loaded);
})


function tplRender(tpl, data, el){
	var data = data.response;
	var content = Mustache.render(tpl, data);
    el.html(content);
}

function getId(el){
    var id = el.children('a').attr('data-id');
    var elId = el.children('a').attr('href');
    var loaded = el.children('a').attr('data-loaded');
    el.children('a').attr('data-loaded','1');
    return {id:id,elId:elId,loaded:loaded};
}

function carRender(id, el, loaded){
    if (loaded) {return;}
    var url = 'http://ev.cpkso.com/admin/placeCar_findByAdsUniqueId?ads_unique_id=' + id;
    $.get(url,function(data){
        var carrTpl = '<ul class="list-content">{{#data}}<li class="list-item"><a href="/cars/{{entity_id}}" target="_blank"><div class="detail"><h3 class="title">{{title}}</h3><p class="desc">{{describe}}</p></div><img src="{{pic}}"></a>{{#logo}}<div class="car-logo"><img src="{{logo}}"></div>{{/logo}}</li>{{/data}}</ul>';
        tplRender(carrTpl, data, el);
    });
}

function partsRender(id, el, loaded){
    if (loaded) {return;}
    var url = 'http://ev.cpkso.com/admin/placeParts_findByAdsUniqueId?ads_unique_id=' + id;
    $.get(url,function(data){
        var partsTpl = '<ul class="list-content">{{#data}}<li class="list-item"><a href="/parts/{{entity_id}}" target="_blank"><div class="detail"><h3 class="title">{{title}}</h3><p class="desc">{{{describe}}}</p></div><img src="{{pic}}"></a></li>{{/data}}</ul>';
        tplRender(partsTpl, data, el);
    });
}

function newsRender(id, el, loaded){
    if (loaded) {return;}
    var url = 'http://ev.cpkso.com/admin/article_search_front?articleCondition.artCt.id=' + id;
    $.get(url,function(data){
        var newsTpl = '<div class="news-content">{{#data}}<div class="news-item clearfix"><div class="news-item-image"><a href="/news/{{id}}.html" title="{{title}}" target="_blank"><img src="{{thumb}}" alt="{{title}}"></a><span class="tag">{{artCt}}</span></div><div class="news-item-info"><h4 class="news-item-title"><a href="/news/{{id}}.html" title="{{title}}" target="_blank">{{title}}</a></h4><p class="news-item-summary">{{brief}}</p><div class="news-item-footer"><div class="news-time">{{publish_time}}</div></div></div></div>{{/data}}</div>';
        tplRender(newsTpl, data, el);
    });
}
