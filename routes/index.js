var express = require('express');
var router = express.Router();
const axios = require("axios");
//읽어온 정보를 html로직으로 변환하여 화면작업을 하도록 유도합니다
const cheerio = require('cheerio');
const { connect } = require('../app');

router.get('/', function (req, res, next) {
    let rank_data = []
    let musinsa_special_data = []
    let musinsa_shopping_topic = []
    let musinsa_special = 'https://store.musinsa.com/app/showcase/lists';
    axios.get(musinsa_special).then(html => {
        let ulList = [];
        const $ = cheerio.load(html.data);
        const $bodyList = $("ul#showcase_list").children("li.n-card-list");
        //each : list 마다 함수 실행, forEach와 동일
        $bodyList.each(function (i, elem) {
            ulList[i] = {
                //find : 해당 태그가 있으면 그 요소 반환
                title: $(this).find('a.info-tit-txt').text(),
                img: $(this).find('img').attr('src'),
                brand: $(this).find('p.n-tit-brand').text(),
                date: $(this).find('span.event-date').text(),
                link: $(this).find('div.n-card-img a').attr('href')
            };
        });
        musinsa_special_data = ulList.filter(n => n.title);
        //json으로 변환하여 app으로 전송
    })
    let hiphoper_event = 'https://store.musinsa.com/app/plan/lists';
    axios.get(hiphoper_event).then(html => {
        let ulList = [];
        const $ = cheerio.load(html.data);
        const $bodyList = $("ul.n-list-event").children('li');
        //each : list 마다 함수 실행, forEach와 동일
        $bodyList.each(function (i, elem) {
            ulList[i] = {
                //find : 해당 태그가 있으면 그 요소 반환
                title: $(this).find('strong').text(),
                img: $(this).find('img').attr('src'),
                content: $(this).find('p').text(),
                date: $(this).find('span').text(),
                link: $(this).find('a').attr('href')
            };
        });
        musinsa_shopping_topic = ulList.filter(n => n.title);
        //json으로 변환하여 app으로 전송
    })
    let rank_data_url = 'https://store.musinsa.com/app/contents/bestranking';

    axios.get(rank_data_url).then(html => {
        let ulList = [];
        const $ = cheerio.load(html.data);
        const $bodyList = $("ul#searchList").children('li.li_box');
        //each : list 마다 함수 실행, forEach와 동일
        $bodyList.each(function (i, elem) {
            ulList[i] = {
                //find : 해당 태그가 있으면 그 요소 반환
                title: $(this).find('p.item_title a').text(),
                img: $(this).find('img.lazyload.lazy').attr('data-original'),
                link: $(this).find('a').attr('href')
            };
        });
        rank_data = ulList.filter(n => n.title);
        //json으로 변환하여 app으로 전송
    })
    setTimeout(function () {
        res.render('main.ejs', { title: '민석', musinsa_special_data: musinsa_special_data, musinsa_shopping_topic: musinsa_shopping_topic ,rank_data:rank_data});
    }, 3000)
});




router.get('/:fasd', function (req, res, next) {
    var url_link = req.params.fasd;
    var url = url_link.split('+');
    let musinsa_special_data = []
    let musinsa_shopping_topic = []
    let rank_data = []
    let top = [];
    let bottom = [];
    let outer = [];
    let shoes = [];
    let musinsa_special = 'https://store.musinsa.com/app/showcase/lists';

    axios.get(musinsa_special).then(html => {
        let ulList = [];
        const $ = cheerio.load(html.data);
        const $bodyList = $("ul#showcase_list").children("li.n-card-list");
        //each : list 마다 함수 실행, forEach와 동일
        $bodyList.each(function (i, elem) {
            ulList[i] = {
                //find : 해당 태그가 있으면 그 요소 반환
                title: $(this).find('a.info-tit-txt').text(),
                img: $(this).find('img').attr('src'),
                brand: $(this).find('p.n-tit-brand').text(),
                date: $(this).find('span.event-date').text(),
                link: $(this).find('div.n-card-img a').attr('href')
            };
        });
        musinsa_special_data = ulList.filter(n => n.title);
        //json으로 변환하여 app으로 전송
    })
    let hiphoper_event = 'https://store.musinsa.com/app/plan/lists';

    axios.get(hiphoper_event).then(html => {
        let ulList = [];
        const $ = cheerio.load(html.data);
        const $bodyList = $("ul.n-list-event").children('li');
        //each : list 마다 함수 실행, forEach와 동일
        $bodyList.each(function (i, elem) {
            ulList[i] = {
                //find : 해당 태그가 있으면 그 요소 반환
                title: $(this).find('strong').text(),
                img: $(this).find('img').attr('src'),
                content: $(this).find('p').text(),
                date: $(this).find('span').text(),
                link: $(this).find('a').attr('href')
            };
        });
        musinsa_shopping_topic = ulList.filter(n => n.title);
        //json으로 변환하여 app으로 전송
    })

    let top_link = 'https://search.musinsa.com/search/musinsa/?q='+encodeURI(url[0])+'+'+encodeURI(url[1]);

    axios.get(top_link).then(html => {
        let ulList = [];
        const $ = cheerio.load(html.data);
        const $bodyList = $("ul#searchList").children('li.li_box');
        //each : list 마다 함수 실행, forEach와 동일
        $bodyList.each(function (i, elem) {
            ulList[i] = {
                //find : 해당 태그가 있으면 그 요소 반환
                title: $(this).find('p.item_title a').text(),
                img: $(this).find('img.lazyload.lazy').attr('data-original'),
                link: $(this).find('a').attr('href')
            };
        });
        top = ulList.filter(n => n.title);
        for (var i = 0; i < 5; i ++){
            rank_data.push(top[i])
        }
        //json으로 변환하여 app으로 전송
    })

    let bottom_link = 'https://search.musinsa.com/search/musinsa/?q='+encodeURI(url[0])+'+'+encodeURI(url[2]);

    axios.get(bottom_link).then(html => {
        let ulList = [];
        const $ = cheerio.load(html.data);
        const $bodyList = $("ul#searchList").children('li.li_box');
        //each : list 마다 함수 실행, forEach와 동일
        $bodyList.each(function (i, elem) {
            ulList[i] = {
                //find : 해당 태그가 있으면 그 요소 반환
                title: $(this).find('p.item_title a').text(),
                img: $(this).find('img.lazyload.lazy').attr('data-original'),
                link: $(this).find('a').attr('href')
            };
        });
        bottom = ulList.filter(n => n.title);
        for (var i = 0; i < 5; i ++){
            rank_data.push(bottom[i])
        }
        //json으로 변환하여 app으로 전송
    })

    let outer_link = 'https://search.musinsa.com/search/musinsa/?q='+encodeURI(url[0])+'+'+encodeURI(url[3]);

    axios.get(outer_link).then(html => {
        let ulList = [];
        const $ = cheerio.load(html.data);
        const $bodyList = $("ul#searchList").children('li.li_box');
        //each : list 마다 함수 실행, forEach와 동일
        $bodyList.each(function (i, elem) {
            ulList[i] = {
                //find : 해당 태그가 있으면 그 요소 반환
                title: $(this).find('p.item_title a').text(),
                img: $(this).find('img.lazyload.lazy').attr('data-original'),
                link: $(this).find('a').attr('href')
            };
        });
        outer = ulList.filter(n => n.title);
        for (var i = 0; i < 5; i ++){
            rank_data.push(outer[i])
        }
        //json으로 변환하여 app으로 전송
    })

    let shoes_link = 'https://search.musinsa.com/search/musinsa/?q='+encodeURI(url[0])+'+'+encodeURI(url[4]);

    axios.get(shoes_link).then(html => {
        let ulList = [];
        const $ = cheerio.load(html.data);
        const $bodyList = $("ul#searchList").children('li.li_box');
        //each : list 마다 함수 실행, forEach와 동일
        $bodyList.each(function (i, elem) {
            ulList[i] = {
                //find : 해당 태그가 있으면 그 요소 반환
                title: $(this).find('p.item_title a').text(),
                img: $(this).find('img.lazyload.lazy').attr('data-original'),
                link: $(this).find('a').attr('href')
            };
        });
        shoes = ulList.filter(n => n.title);
        for (var i = 0; i < 5; i ++){
            rank_data.push(shoes[i])
        }
        //json으로 변환하여 app으로 전송
    })
    setTimeout(function () {
        res.render('main.ejs', { title: '민석', musinsa_special_data: musinsa_special_data, musinsa_shopping_topic: musinsa_shopping_topic, rank_data:rank_data});
    }, 3000)

});


module.exports = router;