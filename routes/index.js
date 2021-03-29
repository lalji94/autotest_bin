var express = require('express');
var router = express.Router();
var async = require('async');
const { OperationHelper } = require('apac');
var nodeTelegramBotApi = require("node-telegram-bot-api");
let request = require("request");
var config = require('../config/global');
var connection = require('../config/connection');
const BitlyClient = require('bitly').BitlyClient;
// const bitly = new BitlyClient('063ceb9ef467fcc7a41f1f8d7ca3bc3962b15292');
var tall = require('tall').default;
const htmlToText = require('html-to-text');
const axios = require('axios');
var textVersion = require("textversionjs");
const cheerio = require('cheerio')
var _ = require('underscore');
const unshort = require('url-unshorten');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
 
 setInterval( function setup() {
//       axios('https://t.me/s/tricksbystg03')
      axios('https://t.me/s/whalebotpumps')
        .then(response => {
          var html = response.data;
          var $ = cheerio.load(html);
          var matchObj = [];

          $('.tgme_widget_message_wrap').each((i, el) => {
            var linkss = $(el).find('.tgme_widget_message_footer').find('a').attr('href').split('/');
            var link = htmlToText.fromString($(el).find('div >.js-message_text').html());
            matchObj.push({ id: Number(linkss[4]), text_data: emmoji(link) })
          });

          function emmoji(string) {
            return string.replace(/[[]]/g,'').replace(/¶m/g,'&param').replace(/&apos;/g," '").replace(/&#x1F6CD;/g,'%F0%9F%9B%8D').replace(/&#x20B9;/g,' %E2%82%B9').replace(/&#x269C;/g,' %E2%9A%9C').replace(/&#x1F91D;/g,'%F0%9F%8E%B8').replace(/&amp;/g, " &").replace(/&gt;/g, " >").replace(/&lt;/g, " <").replace(/&quot;/g, "  ").replace(/&#x00A9;/g,'%C2%A9').replace(/&#x00AE;/g,'%C2%AE').replace(/&#x1F004;/g,'%F0%9F%80%84').replace(/&#x1F0CF;/g,'%F0%9F%83%8F').replace(/&#x1F170;/g,'%F0%9F%85%B0').replace(/&#x1F171;/g,'%F0%9F%85%B1').replace(/&#x1F17E;/g,'%F0%9F%85%BE').replace(/&#x1F17F;/g,'%F0%9F%85%BF').replace(/&#x1F18E;/g,'%F0%9F%86%8E').replace(/&#x1F191;/g,'%F0%9F%86%91').replace(/&#x1F192;/g,'%F0%9F%86%92').replace(/&#x1F193;/g,'%F0%9F%86%93').replace(/&#x1F194;/g,'%F0%9F%86%94').replace(/&#x1F195;/g,'%F0%9F%86%95').replace(/&#x1F196;/g,'%F0%9F%86%96').replace(/&#x1F197;/g,'%F0%9F%86%97').replace(/&#x1F198;/g,'%F0%9F%86%98').replace(/&#x1F199;/g,'%F0%9F%86%99').replace(/&#x1F19A;/g,'%F0%9F%86%9A').replace(/&#x1F201;/g,'%F0%9F%88%81').replace(/&#x1F202;/g,'%F0%9F%88%82').replace(/&#x1F21A;/g,'%F0%9F%88%9A').replace(/&#x1F22F;/g,'%F0%9F%88%AF').replace(/&#x1F232;/g,'%F0%9F%88%B2').replace(/&#x1F233;/g,'%F0%9F%88%B3').replace(/&#x1F234;/g,'%F0%9F%88%B4').replace(/&#x1F235;/g,'%F0%9F%88%B5').replace(/&#x1F236;/g,'%F0%9F%88%B6').replace(/&#x1F237;/g,'%F0%9F%88%B7').replace(/&#x1F238;/g,'%F0%9F%88%B8').replace(/&#x1F239;/g,'%F0%9F%88%B9').replace(/&#x1F23A;/g,'%F0%9F%88%BA').replace(/&#x1F250;/g,'%F0%9F%89%90').replace(/&#x1F251;/g,'%F0%9F%89%91').replace(/&#x1F300;/g,'%F0%9F%8C%80').replace(/&#x1F301;/g,'%F0%9F%8C%81').replace(/&#x1F302;/g,'%F0%9F%8C%82').replace(/&#x1F303;/g,'%F0%9F%8C%83').replace(/&#x1F304;/g,'%F0%9F%8C%84').replace(/&#x1F305;/g,'%F0%9F%8C%85').replace(/&#x1F306;/g,'%F0%9F%8C%86').replace(/&#x1F307;/g,'%F0%9F%8C%87').replace(/&#x1F308;/g,'%F0%9F%8C%88').replace(/&#x1F309;/g,'%F0%9F%8C%89').replace(/&#x1F30A;/g,'%F0%9F%8C%8A').replace(/&#x1F30B;/g,'%F0%9F%8C%8B').replace(/&#x1F30C;/g,'%F0%9F%8C%8C').replace(/&#x1F30D;/g,'%F0%9F%8C%8D').replace(/&#x1F30E;/g,'%F0%9F%8C%8E').replace(/&#x1F30F;/g,'%F0%9F%8C%8F').replace(/&#x1F310;/g,'%F0%9F%8C%90').replace(/&#x1F311;/g,'%F0%9F%8C%91').replace(/&#x1F312;/g,'%F0%9F%8C%92').replace(/&#x1F313;/g,'%F0%9F%8C%93').replace(/&#x1F314;/g,'%F0%9F%8C%94').replace(/&#x1F315;/g,'%F0%9F%8C%95').replace(/&#x1F316;/g,'%F0%9F%8C%96').replace(/&#x1F317;/g,'%F0%9F%8C%97').replace(/&#x1F318;/g,'%F0%9F%8C%98').replace(/&#x1F319;/g,'%F0%9F%8C%99').replace(/&#x1F31A;/g,'%F0%9F%8C%9A').replace(/&#x1F31B;/g,'%F0%9F%8C%9B').replace(/&#x1F31C;/g,'%F0%9F%8C%9C').replace(/&#x1F31D;/g,'%F0%9F%8C%9D').replace(/&#x1F31E;/g,'%F0%9F%8C%9E').replace(/&#x1F31F;/g,'%F0%9F%8C%9F').replace(/&#x1F320;/g,'%F0%9F%8C%A0').replace(/&#x1F330;/g,'%F0%9F%8C%B0').replace(/&#x1F331;/g,'%F0%9F%8C%B1').replace(/&#x1F332;/g,'%F0%9F%8C%B2').replace(/&#x1F333;/g,'%F0%9F%8C%B3').replace(/&#x1F334;/g,'%F0%9F%8C%B4').replace(/&#x1F335;/g,'%F0%9F%8C%B5').replace(/&#x1F337;/g,'%F0%9F%8C%B7').replace(/&#x1F338;/g,'%F0%9F%8C%B8').replace(/&#x1F339;/g,'%F0%9F%8C%B9').replace(/&#x1F33A;/g,'%F0%9F%8C%BA').replace(/&#x1F33B;/g,'%F0%9F%8C%BB').replace(/&#x1F33C;/g,'%F0%9F%8C%BC').replace(/&#x1F33D;/g,'%F0%9F%8C%BD').replace(/&#x1F33E;/g,'%F0%9F%8C%BE').replace(/&#x1F33F;/g,'%F0%9F%8C%BF').replace(/&#x1F340;/g,'%F0%9F%8D%80').replace(/&#x1F341;/g,'%F0%9F%8D%81').replace(/&#x1F342;/g,'%F0%9F%8D%82').replace(/&#x1F343;/g,'%F0%9F%8D%83').replace(/&#x1F344;/g,'%F0%9F%8D%84').replace(/&#x1F345;/g,'%F0%9F%8D%85').replace(/&#x1F346;/g,'%F0%9F%8D%86').replace(/&#x1F347;/g,'%F0%9F%8D%87').replace(/&#x1F348;/g,'%F0%9F%8D%88').replace(/&#x1F349;/g,'%F0%9F%8D%89').replace(/&#x1F34A;/g,'%F0%9F%8D%8A').replace(/&#x1F34B;/g,'%F0%9F%8D%8B').replace(/&#x1F34C;/g,'%F0%9F%8D%8C').replace(/&#x1F34D;/g,'%F0%9F%8D%8D').replace(/&#x1F34E;/g,'%F0%9F%8D%8E').replace(/&#x1F34F;/g,'%F0%9F%8D%8F').replace(/&#x1F350;/g,'%F0%9F%8D%90').replace(/&#x1F351;/g,'%F0%9F%8D%91').replace(/&#x1F352;/g,'%F0%9F%8D%92').replace(/&#x1F353;/g,'%F0%9F%8D%93').replace(/&#x1F354;/g,'%F0%9F%8D%94').replace(/&#x1F355;/g,'%F0%9F%8D%95').replace(/&#x1F356;/g,'%F0%9F%8D%96').replace(/&#x1F357;/g,'%F0%9F%8D%97').replace(/&#x1F358;/g,'%F0%9F%8D%98').replace(/&#x1F359;/g,'%F0%9F%8D%99').replace(/&#x1F35A;/g,'%F0%9F%8D%9A').replace(/&#x1F35B;/g,'%F0%9F%8D%9B').replace(/&#x1F35C;/g,'%F0%9F%8D%9C').replace(/&#x1F35D;/g,'%F0%9F%8D%9D').replace(/&#x1F35E;/g,'%F0%9F%8D%9E').replace(/&#x1F35F;/g,'%F0%9F%8D%9F').replace(/&#x1F360;/g,'%F0%9F%8D%A0').replace(/&#x1F361;/g,'%F0%9F%8D%A1').replace(/&#x1F362;/g,'%F0%9F%8D%A2').replace(/&#x1F363;/g,'%F0%9F%8D%A3').replace(/&#x1F364;/g,'%F0%9F%8D%A4').replace(/&#x1F365;/g,'%F0%9F%8D%A5').replace(/&#x1F366;/g,'%F0%9F%8D%A6').replace(/&#x1F367;/g,'%F0%9F%8D%A7').replace(/&#x1F368;/g,'%F0%9F%8D%A8').replace(/&#x1F369;/g,'%F0%9F%8D%A9').replace(/&#x1F36A;/g,'%F0%9F%8D%AA').replace(/&#x1F36B;/g,'%F0%9F%8D%AB').replace(/&#x1F36C;/g,'%F0%9F%8D%AC').replace(/&#x1F36D;/g,'%F0%9F%8D%AD').replace(/&#x1F36E;/g,'%F0%9F%8D%AE').replace(/&#x1F36F;/g,'%F0%9F%8D%AF').replace(/&#x1F370;/g,'%F0%9F%8D%B0').replace(/&#x1F371;/g,'%F0%9F%8D%B1').replace(/&#x1F372;/g,'%F0%9F%8D%B2').replace(/&#x1F373;/g,'%F0%9F%8D%B3').replace(/&#x1F374;/g,'%F0%9F%8D%B4').replace(/&#x1F375;/g,'%F0%9F%8D%B5').replace(/&#x1F376;/g,'%F0%9F%8D%B6').replace(/&#x1F377;/g,'%F0%9F%8D%B7').replace(/&#x1F378;/g,'%F0%9F%8D%B8').replace(/&#x1F379;/g,'%F0%9F%8D%B9').replace(/&#x1F37A;/g,'%F0%9F%8D%BA').replace(/&#x1F37B;/g,'%F0%9F%8D%BB').replace(/&#x1F37C;/g,'%F0%9F%8D%BC').replace(/&#x1F380;/g,'%F0%9F%8E%80').replace(/&#x1F381;/g,'%F0%9F%8E%81').replace(/&#x1F382;/g,'%F0%9F%8E%82').replace(/&#x1F383;/g,'%F0%9F%8E%83').replace(/&#x1F384;/g,'%F0%9F%8E%84').replace(/&#x1F385;/g,'%F0%9F%8E%85').replace(/&#x1F386;/g,'%F0%9F%8E%86').replace(/&#x1F387;/g,'%F0%9F%8E%87').replace(/&#x1F388;/g,'%F0%9F%8E%88').replace(/&#x1F389;/g,'%F0%9F%8E%89').replace(/&#x1F38A;/g,'%F0%9F%8E%8A').replace(/&#x1F38B;/g,'%F0%9F%8E%8B').replace(/&#x1F38C;/g,'%F0%9F%8E%8C').replace(/&#x1F38D;/g,'%F0%9F%8E%8D').replace(/&#x1F38E;/g,'%F0%9F%8E%8E').replace(/&#x1F38F;/g,'%F0%9F%8E%8F').replace(/&#x1F390;/g,'%F0%9F%8E%90').replace(/&#x1F391;/g,'%F0%9F%8E%91').replace(/&#x1F392;/g,'%F0%9F%8E%92').replace(/&#x1F393;/g,'%F0%9F%8E%93').replace(/&#x1F3A0;/g,'%F0%9F%8E%A0').replace(/&#x1F3A1;/g,'%F0%9F%8E%A1').replace(/&#x1F3A2;/g,'%F0%9F%8E%A2').replace(/&#x1F3A3;/g,'%F0%9F%8E%A3').replace(/&#x1F3A4;/g,'%F0%9F%8E%A4').replace(/&#x1F3A5;/g,'%F0%9F%8E%A5').replace(/&#x1F3A6;/g,'%F0%9F%8E%A6').replace(/&#x1F3A7;/g,'%F0%9F%8E%A7').replace(/&#x1F3A8;/g,'%F0%9F%8E%A8').replace(/&#x1F3A9;/g,'%F0%9F%8E%A9').replace(/&#x1F3AA;/g,'%F0%9F%8E%AA').replace(/&#x1F3AB;/g,'%F0%9F%8E%AB').replace(/&#x1F3AC;/g,'%F0%9F%8E%AC').replace(/&#x1F3AD;/g,'%F0%9F%8E%AD').replace(/&#x1F3AE;/g,'%F0%9F%8E%AE').replace(/&#x1F3AF;/g,'%F0%9F%8E%AF').replace(/&#x1F3B0;/g,'%F0%9F%8E%B0').replace(/&#x1F3B1;/g,'%F0%9F%8E%B1').replace(/&#x1F3B2;/g,'%F0%9F%8E%B2').replace(/&#x1F3B3;/g,'%F0%9F%8E%B3').replace(/&#x1F3B4;/g,'%F0%9F%8E%B4').replace(/&#x1F3B5;/g,'%F0%9F%8E%B5').replace(/&#x1F3B6;/g,'%F0%9F%8E%B6').replace(/&#x1F3B7;/g,'%F0%9F%8E%B7')
            // return string.replace(/[[]]/g,'').replace(/¶m/g,'&param').replace(/\[(((ftp|https?):\/\/)[\-\w@:%_\!+.~#?,&\/\/=]+)]/g, '').replace(/&apos;/g," '").replace(/&#x1F6CD;/g,'%F0%9F%9B%8D').replace(/&#x20B9;/g,' %E2%82%B9').replace(/&#x269C;/g,' %E2%9A%9C').replace(/&#x1F91D;/g,'%F0%9F%8E%B8').replace(/&amp;/g, " &").replace(/&gt;/g, " >").replace(/&lt;/g, " <").replace(/&quot;/g, "  ").replace(/&#x00A9;/g,'%C2%A9').replace(/&#x00AE;/g,'%C2%AE').replace(/&#x1F004;/g,'%F0%9F%80%84').replace(/&#x1F0CF;/g,'%F0%9F%83%8F').replace(/&#x1F170;/g,'%F0%9F%85%B0').replace(/&#x1F171;/g,'%F0%9F%85%B1').replace(/&#x1F17E;/g,'%F0%9F%85%BE').replace(/&#x1F17F;/g,'%F0%9F%85%BF').replace(/&#x1F18E;/g,'%F0%9F%86%8E').replace(/&#x1F191;/g,'%F0%9F%86%91').replace(/&#x1F192;/g,'%F0%9F%86%92').replace(/&#x1F193;/g,'%F0%9F%86%93').replace(/&#x1F194;/g,'%F0%9F%86%94').replace(/&#x1F195;/g,'%F0%9F%86%95').replace(/&#x1F196;/g,'%F0%9F%86%96').replace(/&#x1F197;/g,'%F0%9F%86%97').replace(/&#x1F198;/g,'%F0%9F%86%98').replace(/&#x1F199;/g,'%F0%9F%86%99').replace(/&#x1F19A;/g,'%F0%9F%86%9A').replace(/&#x1F201;/g,'%F0%9F%88%81').replace(/&#x1F202;/g,'%F0%9F%88%82').replace(/&#x1F21A;/g,'%F0%9F%88%9A').replace(/&#x1F22F;/g,'%F0%9F%88%AF').replace(/&#x1F232;/g,'%F0%9F%88%B2').replace(/&#x1F233;/g,'%F0%9F%88%B3').replace(/&#x1F234;/g,'%F0%9F%88%B4').replace(/&#x1F235;/g,'%F0%9F%88%B5').replace(/&#x1F236;/g,'%F0%9F%88%B6').replace(/&#x1F237;/g,'%F0%9F%88%B7').replace(/&#x1F238;/g,'%F0%9F%88%B8').replace(/&#x1F239;/g,'%F0%9F%88%B9').replace(/&#x1F23A;/g,'%F0%9F%88%BA').replace(/&#x1F250;/g,'%F0%9F%89%90').replace(/&#x1F251;/g,'%F0%9F%89%91').replace(/&#x1F300;/g,'%F0%9F%8C%80').replace(/&#x1F301;/g,'%F0%9F%8C%81').replace(/&#x1F302;/g,'%F0%9F%8C%82').replace(/&#x1F303;/g,'%F0%9F%8C%83').replace(/&#x1F304;/g,'%F0%9F%8C%84').replace(/&#x1F305;/g,'%F0%9F%8C%85').replace(/&#x1F306;/g,'%F0%9F%8C%86').replace(/&#x1F307;/g,'%F0%9F%8C%87').replace(/&#x1F308;/g,'%F0%9F%8C%88').replace(/&#x1F309;/g,'%F0%9F%8C%89').replace(/&#x1F30A;/g,'%F0%9F%8C%8A').replace(/&#x1F30B;/g,'%F0%9F%8C%8B').replace(/&#x1F30C;/g,'%F0%9F%8C%8C').replace(/&#x1F30D;/g,'%F0%9F%8C%8D').replace(/&#x1F30E;/g,'%F0%9F%8C%8E').replace(/&#x1F30F;/g,'%F0%9F%8C%8F').replace(/&#x1F310;/g,'%F0%9F%8C%90').replace(/&#x1F311;/g,'%F0%9F%8C%91').replace(/&#x1F312;/g,'%F0%9F%8C%92').replace(/&#x1F313;/g,'%F0%9F%8C%93').replace(/&#x1F314;/g,'%F0%9F%8C%94').replace(/&#x1F315;/g,'%F0%9F%8C%95').replace(/&#x1F316;/g,'%F0%9F%8C%96').replace(/&#x1F317;/g,'%F0%9F%8C%97').replace(/&#x1F318;/g,'%F0%9F%8C%98').replace(/&#x1F319;/g,'%F0%9F%8C%99').replace(/&#x1F31A;/g,'%F0%9F%8C%9A').replace(/&#x1F31B;/g,'%F0%9F%8C%9B').replace(/&#x1F31C;/g,'%F0%9F%8C%9C').replace(/&#x1F31D;/g,'%F0%9F%8C%9D').replace(/&#x1F31E;/g,'%F0%9F%8C%9E').replace(/&#x1F31F;/g,'%F0%9F%8C%9F').replace(/&#x1F320;/g,'%F0%9F%8C%A0').replace(/&#x1F330;/g,'%F0%9F%8C%B0').replace(/&#x1F331;/g,'%F0%9F%8C%B1').replace(/&#x1F332;/g,'%F0%9F%8C%B2').replace(/&#x1F333;/g,'%F0%9F%8C%B3').replace(/&#x1F334;/g,'%F0%9F%8C%B4').replace(/&#x1F335;/g,'%F0%9F%8C%B5').replace(/&#x1F337;/g,'%F0%9F%8C%B7').replace(/&#x1F338;/g,'%F0%9F%8C%B8').replace(/&#x1F339;/g,'%F0%9F%8C%B9').replace(/&#x1F33A;/g,'%F0%9F%8C%BA').replace(/&#x1F33B;/g,'%F0%9F%8C%BB').replace(/&#x1F33C;/g,'%F0%9F%8C%BC').replace(/&#x1F33D;/g,'%F0%9F%8C%BD').replace(/&#x1F33E;/g,'%F0%9F%8C%BE').replace(/&#x1F33F;/g,'%F0%9F%8C%BF').replace(/&#x1F340;/g,'%F0%9F%8D%80').replace(/&#x1F341;/g,'%F0%9F%8D%81').replace(/&#x1F342;/g,'%F0%9F%8D%82').replace(/&#x1F343;/g,'%F0%9F%8D%83').replace(/&#x1F344;/g,'%F0%9F%8D%84').replace(/&#x1F345;/g,'%F0%9F%8D%85').replace(/&#x1F346;/g,'%F0%9F%8D%86').replace(/&#x1F347;/g,'%F0%9F%8D%87').replace(/&#x1F348;/g,'%F0%9F%8D%88').replace(/&#x1F349;/g,'%F0%9F%8D%89').replace(/&#x1F34A;/g,'%F0%9F%8D%8A').replace(/&#x1F34B;/g,'%F0%9F%8D%8B').replace(/&#x1F34C;/g,'%F0%9F%8D%8C').replace(/&#x1F34D;/g,'%F0%9F%8D%8D').replace(/&#x1F34E;/g,'%F0%9F%8D%8E').replace(/&#x1F34F;/g,'%F0%9F%8D%8F').replace(/&#x1F350;/g,'%F0%9F%8D%90').replace(/&#x1F351;/g,'%F0%9F%8D%91').replace(/&#x1F352;/g,'%F0%9F%8D%92').replace(/&#x1F353;/g,'%F0%9F%8D%93').replace(/&#x1F354;/g,'%F0%9F%8D%94').replace(/&#x1F355;/g,'%F0%9F%8D%95').replace(/&#x1F356;/g,'%F0%9F%8D%96').replace(/&#x1F357;/g,'%F0%9F%8D%97').replace(/&#x1F358;/g,'%F0%9F%8D%98').replace(/&#x1F359;/g,'%F0%9F%8D%99').replace(/&#x1F35A;/g,'%F0%9F%8D%9A').replace(/&#x1F35B;/g,'%F0%9F%8D%9B').replace(/&#x1F35C;/g,'%F0%9F%8D%9C').replace(/&#x1F35D;/g,'%F0%9F%8D%9D').replace(/&#x1F35E;/g,'%F0%9F%8D%9E').replace(/&#x1F35F;/g,'%F0%9F%8D%9F').replace(/&#x1F360;/g,'%F0%9F%8D%A0').replace(/&#x1F361;/g,'%F0%9F%8D%A1').replace(/&#x1F362;/g,'%F0%9F%8D%A2').replace(/&#x1F363;/g,'%F0%9F%8D%A3').replace(/&#x1F364;/g,'%F0%9F%8D%A4').replace(/&#x1F365;/g,'%F0%9F%8D%A5').replace(/&#x1F366;/g,'%F0%9F%8D%A6').replace(/&#x1F367;/g,'%F0%9F%8D%A7').replace(/&#x1F368;/g,'%F0%9F%8D%A8').replace(/&#x1F369;/g,'%F0%9F%8D%A9').replace(/&#x1F36A;/g,'%F0%9F%8D%AA').replace(/&#x1F36B;/g,'%F0%9F%8D%AB').replace(/&#x1F36C;/g,'%F0%9F%8D%AC').replace(/&#x1F36D;/g,'%F0%9F%8D%AD').replace(/&#x1F36E;/g,'%F0%9F%8D%AE').replace(/&#x1F36F;/g,'%F0%9F%8D%AF').replace(/&#x1F370;/g,'%F0%9F%8D%B0').replace(/&#x1F371;/g,'%F0%9F%8D%B1').replace(/&#x1F372;/g,'%F0%9F%8D%B2').replace(/&#x1F373;/g,'%F0%9F%8D%B3').replace(/&#x1F374;/g,'%F0%9F%8D%B4').replace(/&#x1F375;/g,'%F0%9F%8D%B5').replace(/&#x1F376;/g,'%F0%9F%8D%B6').replace(/&#x1F377;/g,'%F0%9F%8D%B7').replace(/&#x1F378;/g,'%F0%9F%8D%B8').replace(/&#x1F379;/g,'%F0%9F%8D%B9').replace(/&#x1F37A;/g,'%F0%9F%8D%BA').replace(/&#x1F37B;/g,'%F0%9F%8D%BB').replace(/&#x1F37C;/g,'%F0%9F%8D%BC').replace(/&#x1F380;/g,'%F0%9F%8E%80').replace(/&#x1F381;/g,'%F0%9F%8E%81').replace(/&#x1F382;/g,'%F0%9F%8E%82').replace(/&#x1F383;/g,'%F0%9F%8E%83').replace(/&#x1F384;/g,'%F0%9F%8E%84').replace(/&#x1F385;/g,'%F0%9F%8E%85').replace(/&#x1F386;/g,'%F0%9F%8E%86').replace(/&#x1F387;/g,'%F0%9F%8E%87').replace(/&#x1F388;/g,'%F0%9F%8E%88').replace(/&#x1F389;/g,'%F0%9F%8E%89').replace(/&#x1F38A;/g,'%F0%9F%8E%8A').replace(/&#x1F38B;/g,'%F0%9F%8E%8B').replace(/&#x1F38C;/g,'%F0%9F%8E%8C').replace(/&#x1F38D;/g,'%F0%9F%8E%8D').replace(/&#x1F38E;/g,'%F0%9F%8E%8E').replace(/&#x1F38F;/g,'%F0%9F%8E%8F').replace(/&#x1F390;/g,'%F0%9F%8E%90').replace(/&#x1F391;/g,'%F0%9F%8E%91').replace(/&#x1F392;/g,'%F0%9F%8E%92').replace(/&#x1F393;/g,'%F0%9F%8E%93').replace(/&#x1F3A0;/g,'%F0%9F%8E%A0').replace(/&#x1F3A1;/g,'%F0%9F%8E%A1').replace(/&#x1F3A2;/g,'%F0%9F%8E%A2').replace(/&#x1F3A3;/g,'%F0%9F%8E%A3').replace(/&#x1F3A4;/g,'%F0%9F%8E%A4').replace(/&#x1F3A5;/g,'%F0%9F%8E%A5').replace(/&#x1F3A6;/g,'%F0%9F%8E%A6').replace(/&#x1F3A7;/g,'%F0%9F%8E%A7').replace(/&#x1F3A8;/g,'%F0%9F%8E%A8').replace(/&#x1F3A9;/g,'%F0%9F%8E%A9').replace(/&#x1F3AA;/g,'%F0%9F%8E%AA').replace(/&#x1F3AB;/g,'%F0%9F%8E%AB').replace(/&#x1F3AC;/g,'%F0%9F%8E%AC').replace(/&#x1F3AD;/g,'%F0%9F%8E%AD').replace(/&#x1F3AE;/g,'%F0%9F%8E%AE').replace(/&#x1F3AF;/g,'%F0%9F%8E%AF').replace(/&#x1F3B0;/g,'%F0%9F%8E%B0').replace(/&#x1F3B1;/g,'%F0%9F%8E%B1').replace(/&#x1F3B2;/g,'%F0%9F%8E%B2').replace(/&#x1F3B3;/g,'%F0%9F%8E%B3').replace(/&#x1F3B4;/g,'%F0%9F%8E%B4').replace(/&#x1F3B5;/g,'%F0%9F%8E%B5').replace(/&#x1F3B6;/g,'%F0%9F%8E%B6').replace(/&#x1F3B7;/g,'%F0%9F%8E%B7')
          .replace(/&#x1F3B8;/g,'%F0%9F%8E%B8').replace(/&#x1F3B9;/g,'%F0%9F%8E%B9').replace(/&#x1F3BA;/g,'%F0%9F%8E%BA').replace(/&#x1F3BB;/g,'%F0%9F%8E%BB').replace(/&#x1F3BC;/g,'%F0%9F%8E%BC').replace(/&#x1F3BD;/g,'%F0%9F%8E%BD').replace(/&#x1F3BE;/g,'%F0%9F%8E%BE').replace(/&#x1F3BF;/g,'%F0%9F%8E%BF').replace(/&#x1F3C0;/g,'%F0%9F%8F%80').replace(/&#x1F3C1;/g,'%F0%9F%8F%81').replace(/&#x1F3C2;/g,'%F0%9F%8F%82').replace(/&#x1F3C3;/g,'%F0%9F%8F%83').replace(/&#x1F3C4;/g,'%F0%9F%8F%84').replace(/&#x1F3C6;/g,'%F0%9F%8F%86').replace(/&#x1F3C7;/g,'%F0%9F%8F%87').replace(/&#x1F3C8;/g,'%F0%9F%8F%88').replace(/&#x1F3C9;/g,'%F0%9F%8F%89').replace(/&#x1F3CA;/g,'%F0%9F%8F%8A').replace(/&#x1F3E0;/g,'%F0%9F%8F%A0').replace(/&#x1F3E1;/g,'%F0%9F%8F%A1').replace(/&#x1F3E2;/g,'%F0%9F%8F%A2').replace(/&#x1F3E3;/g,'%F0%9F%8F%A3').replace(/&#x1F3E4;/g,'%F0%9F%8F%A4').replace(/&#x1F3E5;/g,'%F0%9F%8F%A5').replace(/&#x1F3E6;/g,'%F0%9F%8F%A6').replace(/&#x1F3E7;/g,'%F0%9F%8F%A7').replace(/&#x1F3E8;/g,'%F0%9F%8F%A8').replace(/&#x1F3E9;/g,'%F0%9F%8F%A9').replace(/&#x1F3EA;/g,'%F0%9F%8F%AA').replace(/&#x1F3EB;/g,'%F0%9F%8F%AB').replace(/&#x1F3EC;/g,'%F0%9F%8F%AC').replace(/&#x1F3ED;/g,'%F0%9F%8F%AD').replace(/&#x1F3EE;/g,'%F0%9F%8F%AE').replace(/&#x1F3EF;/g,'%F0%9F%8F%AF').replace(/&#x1F3F0;/g,'%F0%9F%8F%B0').replace(/&#x1F400;/g,'%F0%9F%90%80').replace(/&#x1F401;/g,'%F0%9F%90%81').replace(/&#x1F402;/g,'%F0%9F%90%82').replace(/&#x1F403;/g,'%F0%9F%90%83').replace(/&#x1F404;/g,'%F0%9F%90%84').replace(/&#x1F405;/g,'%F0%9F%90%85').replace(/&#x1F406;/g,'%F0%9F%90%86').replace(/&#x1F407;/g,'%F0%9F%90%87').replace(/&#x1F408;/g,'%F0%9F%90%88').replace(/&#x1F409;/g,'%F0%9F%90%89').replace(/&#x1F40A;/g,'%F0%9F%90%8A').replace(/&#x1F40B;/g,'%F0%9F%90%8B').replace(/&#x1F40C;/g,'%F0%9F%90%8C').replace(/&#x1F40D;/g,'%F0%9F%90%8D').replace(/&#x1F40E;/g,'%F0%9F%90%8E').replace(/&#x1F40F;/g,'%F0%9F%90%8F').replace(/&#x1F410;/g,'%F0%9F%90%90').replace(/&#x1F411;/g,'%F0%9F%90%91').replace(/&#x1F412;/g,'%F0%9F%90%92').replace(/&#x1F413;/g,'%F0%9F%90%93').replace(/&#x1F414;/g,'%F0%9F%90%94').replace(/&#x1F415;/g,'%F0%9F%90%95').replace(/&#x1F416;/g,'%F0%9F%90%96').replace(/&#x1F417;/g,'%F0%9F%90%97').replace(/&#x1F418;/g,'%F0%9F%90%98').replace(/&#x1F419;/g,'%F0%9F%90%99').replace(/&#x1F41A;/g,'%F0%9F%90%9A').replace(/&#x1F41B;/g,'%F0%9F%90%9B').replace(/&#x1F41C;/g,'%F0%9F%90%9C').replace(/&#x1F41D;/g,'%F0%9F%90%9D').replace(/&#x1F41E;/g,'%F0%9F%90%9E').replace(/&#x1F41F;/g,'%F0%9F%90%9F').replace(/&#x1F420;/g,'%F0%9F%90%A0').replace(/&#x1F421;/g,'%F0%9F%90%A1').replace(/&#x1F422;/g,'%F0%9F%90%A2').replace(/&#x1F423;/g,'%F0%9F%90%A3').replace(/&#x1F424;/g,'%F0%9F%90%A4').replace(/&#x1F425;/g,'%F0%9F%90%A5').replace(/&#x1F426;/g,'%F0%9F%90%A6').replace(/&#x1F427;/g,'%F0%9F%90%A7').replace(/&#x1F428;/g,'%F0%9F%90%A8').replace(/&#x1F429;/g,'%F0%9F%90%A9').replace(/&#x1F42A;/g,'%F0%9F%90%AA').replace(/&#x1F42B;/g,'%F0%9F%90%AB').replace(/&#x1F42C;/g,'%F0%9F%90%AC').replace(/&#x1F42D;/g,'%F0%9F%90%AD').replace(/&#x1F42E;/g,'%F0%9F%90%AE').replace(/&#x1F42F;/g,'%F0%9F%90%AF').replace(/&#x1F430;/g,'%F0%9F%90%B0').replace(/&#x1F431;/g,'%F0%9F%90%B1').replace(/&#x1F432;/g,'%F0%9F%90%B2').replace(/&#x1F433;/g,'%F0%9F%90%B3').replace(/&#x1F434;/g,'%F0%9F%90%B4').replace(/&#x1F435;/g,'%F0%9F%90%B5').replace(/&#x1F436;/g,'%F0%9F%90%B6').replace(/&#x1F437;/g,'%F0%9F%90%B7').replace(/&#x1F438;/g,'%F0%9F%90%B8').replace(/&#x1F439;/g,'%F0%9F%90%B9').replace(/&#x1F43A;/g,'%F0%9F%90%BA').replace(/&#x1F43B;/g,'%F0%9F%90%BB').replace(/&#x1F43C;/g,'%F0%9F%90%BC').replace(/&#x1F43D;/g,'%F0%9F%90%BD').replace(/&#x1F43E;/g,'%F0%9F%90%BE').replace(/&#x1F440;/g,'%F0%9F%91%80').replace(/&#x1F442;/g,'%F0%9F%91%82').replace(/&#x1F443;/g,'%F0%9F%91%83').replace(/&#x1F444;/g,'%F0%9F%91%84').replace(/&#x1F445;/g,'%F0%9F%91%85').replace(/&#x1F446;/g,'%F0%9F%91%86').replace(/&#x1F447;/g,'%F0%9F%91%87').replace(/&#x1F448;/g,'%F0%9F%91%88').replace(/&#x1F449;/g,'%F0%9F%91%89').replace(/&#x1F44A;/g,'%F0%9F%91%8A').replace(/&#x1F44B;/g,'%F0%9F%91%8B').replace(/&#x1F44C;/g,'%F0%9F%91%8C').replace(/&#x1F44D;/g,'%F0%9F%91%8D').replace(/&#x1F44E;/g,'%F0%9F%91%8E').replace(/&#x1F44F;/g,'%F0%9F%91%8F').replace(/&#x1F450;/g,'%F0%9F%91%90').replace(/&#x1F451;/g,'%F0%9F%91%91').replace(/&#x1F452;/g,'%F0%9F%91%92').replace(/&#x1F453;/g,'%F0%9F%91%93').replace(/&#x1F454;/g,'%F0%9F%91%94').replace(/&#x1F455;/g,'%F0%9F%91%95').replace(/&#x1F456;/g,'%F0%9F%91%96').replace(/&#x1F457;/g,'%F0%9F%91%97').replace(/&#x1F458;/g,'%F0%9F%91%98').replace(/&#x1F459;/g,'%F0%9F%91%99').replace(/&#x1F45A;/g,'%F0%9F%91%9A').replace(/&#x1F45B;/g,'%F0%9F%91%9B').replace(/&#x1F45C;/g,'%F0%9F%91%9C').replace(/&#x1F45D;/g,'%F0%9F%91%9D').replace(/&#x1F45E;/g,'%F0%9F%91%9E').replace(/&#x1F45F;/g,'%F0%9F%91%9F').replace(/&#x1F460;/g,'%F0%9F%91%A0').replace(/&#x1F461;/g,'%F0%9F%91%A1').replace(/&#x1F462;/g,'%F0%9F%91%A2').replace(/&#x1F463;/g,'%F0%9F%91%A3').replace(/&#x1F464;/g,'%F0%9F%91%A4').replace(/&#x1F465;/g,'%F0%9F%91%A5').replace(/&#x1F466;/g,'%F0%9F%91%A6').replace(/&#x1F467;/g,'%F0%9F%91%A7').replace(/&#x1F468;/g,'%F0%9F%91%A8').replace(/&#x1F469;/g,'%F0%9F%91%A9').replace(/&#x1F46A;/g,'%F0%9F%91%AA').replace(/&#x1F46B;/g,'%F0%9F%91%AB').replace(/&#x1F46C;/g,'%F0%9F%91%AC').replace(/&#x1F46D;/g,'%F0%9F%91%AD').replace(/&#x1F46E;/g,'%F0%9F%91%AE').replace(/&#x1F46F;/g,'%F0%9F%91%AF').replace(/&#x1F470;/g,'%F0%9F%91%B0').replace(/&#x1F471;/g,'%F0%9F%91%B1').replace(/&#x1F472;/g,'%F0%9F%91%B2').replace(/&#x1F473;/g,'%F0%9F%91%B3').replace(/&#x1F474;/g,'%F0%9F%91%B4').replace(/&#x1F475;/g,'%F0%9F%91%B5').replace(/&#x1F476;/g,'%F0%9F%91%B6').replace(/&#x1F477;/g,'%F0%9F%91%B7').replace(/&#x1F478;/g,'%F0%9F%91%B8').replace(/&#x1F479;/g,'%F0%9F%91%B9').replace(/&#x1F47A;/g,'%F0%9F%91%BA').replace(/&#x1F47B;/g,'%F0%9F%91%BB').replace(/&#x1F47C;/g,'%F0%9F%91%BC').replace(/&#x1F47D;/g,'%F0%9F%91%BD').replace(/&#x1F47E;/g,'%F0%9F%91%BE').replace(/&#x1F47F;/g,'%F0%9F%91%BF').replace(/&#x1F480;/g,'%F0%9F%92%80').replace(/&#x1F481;/g,'%F0%9F%92%81').replace(/&#x1F482;/g,'%F0%9F%92%82').replace(/&#x1F483;/g,'%F0%9F%92%83').replace(/&#x1F484;/g,'%F0%9F%92%84').replace(/&#x1F485;/g,'%F0%9F%92%85').replace(/&#x1F486;/g,'%F0%9F%92%86').replace(/&#x1F487;/g,'%F0%9F%92%87').replace(/&#x1F488;/g,'%F0%9F%92%88').replace(/&#x1F489;/g,'%F0%9F%92%89').replace(/&#x1F48A;/g,'%F0%9F%92%8A').replace(/&#x1F48B;/g,'%F0%9F%92%8B').replace(/&#x1F48C;/g,'%F0%9F%92%8C').replace(/&#x1F48D;/g,'%F0%9F%92%8D').replace(/&#x1F48E;/g,'%F0%9F%92%8E').replace(/&#x1F48F;/g,'%F0%9F%92%8F').replace(/&#x1F490;/g,'%F0%9F%92%90').replace(/&#x1F491;/g,'%F0%9F%92%91').replace(/&#x1F492;/g,'%F0%9F%92%92').replace(/&#x1F493;/g,'%F0%9F%92%93').replace(/&#x1F494;/g,'%F0%9F%92%94').replace(/&#x1F495;/g,'%F0%9F%92%95').replace(/&#x1F496;/g,'%F0%9F%92%96').replace(/&#x1F497;/g,'%F0%9F%92%97').replace(/&#x1F498;/g,'%F0%9F%92%98').replace(/&#x1F499;/g,'%F0%9F%92%99').replace(/&#x1F49A;/g,'%F0%9F%92%9A')
          .replace(/&#x1F49B;/g,'%F0%9F%92%9B').replace(/&#x1F49C;/g,'%F0%9F%92%9C').replace(/&#x1F49D;/g,'%F0%9F%92%9D').replace(/&#x1F49E;/g,'%F0%9F%92%9E').replace(/&#x1F49F;/g,'%F0%9F%92%9F').replace(/&#x1F4A0;/g,'%F0%9F%92%A0').replace(/&#x1F4A1;/g,'%F0%9F%92%A1').replace(/&#x1F4A2;/g,'%F0%9F%92%A2').replace(/&#x1F4A3;/g,'%F0%9F%92%A3').replace(/&#x1F4A4;/g,'%F0%9F%92%A4').replace(/&#x1F4A5;/g,'%F0%9F%92%A5').replace(/&#x1F4A6;/g,'%F0%9F%92%A6').replace(/&#x1F4A7;/g,'%F0%9F%92%A7').replace(/&#x1F4A8;/g,'%F0%9F%92%A8').replace(/&#x1F4A9;/g,'%F0%9F%92%A9').replace(/&#x1F4AA;/g,'%F0%9F%92%AA').replace(/&#x1F4AB;/g,'%F0%9F%92%AB').replace(/&#x1F4AC;/g,'%F0%9F%92%AC').replace(/&#x1F4AD;/g,'%F0%9F%92%AD').replace(/&#x1F4AE;/g,'%F0%9F%92%AE').replace(/&#x1F4AF;/g,'%F0%9F%92%AF').replace(/&#x1F4B0;/g,'%F0%9F%92%B0').replace(/&#x1F4B1;/g,'%F0%9F%92%B1').replace(/&#x1F4B2;/g,'%F0%9F%92%B2').replace(/&#x1F4B3;/g,'%F0%9F%92%B3').replace(/&#x1F4B4;/g,'%F0%9F%92%B4').replace(/&#x1F4B5;/g,'%F0%9F%92%B5').replace(/&#x1F4B6;/g,'%F0%9F%92%B6').replace(/&#x1F4B7;/g,'%F0%9F%92%B7').replace(/&#x1F4B8;/g,'%F0%9F%92%B8').replace(/&#x1F4B9;/g,'%F0%9F%92%B9').replace(/&#x1F4BA;/g,'%F0%9F%92%BA').replace(/&#x1F4BB;/g,'%F0%9F%92%BB').replace(/&#x1F4BC;/g,'%F0%9F%92%BC').replace(/&#x1F4BD;/g,'%F0%9F%92%BD').replace(/&#x1F4BE;/g,'%F0%9F%92%BE').replace(/&#x1F4BF;/g,'%F0%9F%92%BF').replace(/&#x1F4C0;/g,'%F0%9F%93%80').replace(/&#x1F4C1;/g,'%F0%9F%93%81').replace(/&#x1F4C2;/g,'%F0%9F%93%82').replace(/&#x1F4C3;/g,'%F0%9F%93%83').replace(/&#x1F4C4;/g,'%F0%9F%93%84').replace(/&#x1F4C5;/g,'%F0%9F%93%85').replace(/&#x1F4C6;/g,'%F0%9F%93%86').replace(/&#x1F4C7;/g,'%F0%9F%93%87').replace(/&#x1F4C8;/g,'%F0%9F%93%88').replace(/&#x1F4C9;/g,'%F0%9F%93%89').replace(/&#x1F4CA;/g,'%F0%9F%93%8A').replace(/&#x1F4CB;/g,'%F0%9F%93%8B').replace(/&#x1F4CC;/g,'%F0%9F%93%8C').replace(/&#x1F4CD;/g,'%F0%9F%93%8D').replace(/&#x1F4CE;/g,'%F0%9F%93%8E').replace(/&#x1F4CF;/g,'%F0%9F%93%8F').replace(/&#x1F4D0;/g,'%F0%9F%93%90').replace(/&#x1F4D1;/g,'%F0%9F%93%91').replace(/&#x1F4D2;/g,'%F0%9F%93%92').replace(/&#x1F4D3;/g,'%F0%9F%93%93').replace(/&#x1F4D4;/g,'%F0%9F%93%94').replace(/&#x1F4D5;/g,'%F0%9F%93%95').replace(/&#x1F4D6;/g,'%F0%9F%93%96').replace(/&#x1F4D7;/g,'%F0%9F%93%97').replace(/&#x1F4D8;/g,'%F0%9F%93%98').replace(/&#x1F4D9;/g,'%F0%9F%93%99').replace(/&#x1F4DA;/g,'%F0%9F%93%9A').replace(/&#x1F4DB;/g,'%F0%9F%93%9B').replace(/&#x1F4DC;/g,'%F0%9F%93%9C').replace(/&#x1F4DD;/g,'%F0%9F%93%9D').replace(/&#x1F4DE;/g,'%F0%9F%93%9E').replace(/&#x1F4DF;/g,'%F0%9F%93%9F').replace(/&#x1F4E0;/g,'%F0%9F%93%A0').replace(/&#x1F4E1;/g,'%F0%9F%93%A1').replace(/&#x1F4E2;/g,'%F0%9F%93%A2').replace(/&#x1F4E3;/g,'%F0%9F%93%A3').replace(/&#x1F4E4;/g,'%F0%9F%93%A4').replace(/&#x1F4E5;/g,'%F0%9F%93%A5').replace(/&#x1F4E6;/g,'%F0%9F%93%A6').replace(/&#x1F4E7;/g,'%F0%9F%93%A7').replace(/&#x1F4E8;/g,'%F0%9F%93%A8').replace(/&#x1F4E9;/g,'%F0%9F%93%A9').replace(/&#x1F4EA;/g,'%F0%9F%93%AA').replace(/&#x1F4EB;/g,'%F0%9F%93%AB').replace(/&#x1F4EC;/g,'%F0%9F%93%AC').replace(/&#x1F4ED;/g,'%F0%9F%93%AD').replace(/&#x1F4EE;/g,'%F0%9F%93%AE').replace(/&#x1F4EF;/g,'%F0%9F%93%AF').replace(/&#x1F4F0;/g,'%F0%9F%93%B0').replace(/&#x1F4F1;/g,'%F0%9F%93%B1').replace(/&#x1F4F2;/g,'%F0%9F%93%B2').replace(/&#x1F4F3;/g,'%F0%9F%93%B3').replace(/&#x1F4F4;/g,'%F0%9F%93%B4').replace(/&#x1F4F5;/g,'%F0%9F%93%B5').replace(/&#x1F4F6;/g,'%F0%9F%93%B6').replace(/&#x1F4F7;/g,'%F0%9F%93%B7').replace(/&#x1F4F9;/g,'%F0%9F%93%B9').replace(/&#x1F4FA;/g,'%F0%9F%93%BA').replace(/&#x1F4FB;/g,'%F0%9F%93%BB').replace(/&#x1F4FC;/g,'%F0%9F%93%BC').replace(/&#x1F500;/g,'%F0%9F%94%80').replace(/&#x1F501;/g,'%F0%9F%94%81').replace(/&#x1F502;/g,'%F0%9F%94%82').replace(/&#x1F503;/g,'%F0%9F%94%83').replace(/&#x1F504;/g,'%F0%9F%94%84').replace(/&#x1F505;/g,'%F0%9F%94%85').replace(/&#x1F506;/g,'%F0%9F%94%86').replace(/&#x1F507;/g,'%F0%9F%94%87').replace(/&#x1F509;/g,'%F0%9F%94%89').replace(/&#x1F50A;/g,'%F0%9F%94%8A').replace(/&#x1F50B;/g,'%F0%9F%94%8B').replace(/&#x1F50C;/g,'%F0%9F%94%8C').replace(/&#x1F50D;/g,'%F0%9F%94%8D').replace(/&#x1F50E;/g,'%F0%9F%94%8E').replace(/&#x1F50F;/g,'%F0%9F%94%8F').replace(/&#x1F510;/g,'%F0%9F%94%90').replace(/&#x1F511;/g,'%F0%9F%94%91').replace(/&#x1F512;/g,'%F0%9F%94%92').replace(/&#x1F513;/g,'%F0%9F%94%93').replace(/&#x1F514;/g,'%F0%9F%94%94').replace(/&#x1F515;/g,'%F0%9F%94%95').replace(/&#x1F516;/g,'%F0%9F%94%96').replace(/&#x1F517;/g,'%F0%9F%94%97').replace(/&#x1F518;/g,'%F0%9F%94%98').replace(/&#x1F519;/g,'%F0%9F%94%99').replace(/&#x1F51A;/g,'%F0%9F%94%9A').replace(/&#x1F51B;/g,'%F0%9F%94%9B').replace(/&#x1F51C;/g,'%F0%9F%94%9C').replace(/&#x1F51D;/g,'%F0%9F%94%9D').replace(/&#x1F51E;/g,'%F0%9F%94%9E').replace(/&#x1F51F;/g,'%F0%9F%94%9F').replace(/&#x1F520;/g,'%F0%9F%94%A0').replace(/&#x1F521;/g,'%F0%9F%94%A1').replace(/&#x1F522;/g,'%F0%9F%94%A2').replace(/&#x1F523;/g,'%F0%9F%94%A3').replace(/&#x1F524;/g,'%F0%9F%94%A4').replace(/&#x1F525;/g,'%F0%9F%94%A5').replace(/&#x1F526;/g,'%F0%9F%94%A6').replace(/&#x1F527;/g,'%F0%9F%94%A7').replace(/&#x1F528;/g,'%F0%9F%94%A8').replace(/&#x1F529;/g,'%F0%9F%94%A9').replace(/&#x1F52A;/g,'%F0%9F%94%AA').replace(/&#x1F52B;/g,'%F0%9F%94%AB').replace(/&#x1F52C;/g,'%F0%9F%94%AC').replace(/&#x1F52D;/g,'%F0%9F%94%AD').replace(/&#x1F52E;/g,'%F0%9F%94%AE').replace(/&#x1F52F;/g,'%F0%9F%94%AF').replace(/&#x1F530;/g,'%F0%9F%94%B0').replace(/&#x1F531;/g,'%F0%9F%94%B1').replace(/&#x1F532;/g,'%F0%9F%94%B2').replace(/&#x1F533;/g,'%F0%9F%94%B3').replace(/&#x1F534;/g,'%F0%9F%94%B4').replace(/&#x1F535;/g,'%F0%9F%94%B5').replace(/&#x1F536;/g,'%F0%9F%94%B6').replace(/&#x1F537;/g,'%F0%9F%94%B7').replace(/&#x1F538;/g,'%F0%9F%94%B8').replace(/&#x1F539;/g,'%F0%9F%94%B9').replace(/&#x1F53A;/g,'%F0%9F%94%BA').replace(/&#x1F53B;/g,'%F0%9F%94%BB').replace(/&#x1F53C;/g,'%F0%9F%94%BC').replace(/&#x1F53D;/g,'%F0%9F%94%BD').replace(/&#x1F550;/g,'%F0%9F%95%90').replace(/&#x1F551;/g,'%F0%9F%95%91').replace(/&#x1F552;/g,'%F0%9F%95%92').replace(/&#x1F553;/g,'%F0%9F%95%93').replace(/&#x1F554;/g,'%F0%9F%95%94').replace(/&#x1F555;/g,'%F0%9F%95%95').replace(/&#x1F556;/g,'%F0%9F%95%96').replace(/&#x1F557;/g,'%F0%9F%95%97').replace(/&#x1F558;/g,'%F0%9F%95%98').replace(/&#x1F559;/g,'%F0%9F%95%99').replace(/&#x1F55A;/g,'%F0%9F%95%9A').replace(/&#x1F55B;/g,'%F0%9F%95%9B').replace(/&#x1F55C;/g,'%F0%9F%95%9C').replace(/&#x1F55D;/g,'%F0%9F%95%9D').replace(/&#x1F55E;/g,'%F0%9F%95%9E').replace(/&#x1F55F;/g,'%F0%9F%95%9F').replace(/&#x1F560;/g,'%F0%9F%95%A0').replace(/&#x1F561;/g,'%F0%9F%95%A1').replace(/&#x1F562;/g,'%F0%9F%95%A2').replace(/&#x1F563;/g,'%F0%9F%95%A3').replace(/&#x1F564;/g,'%F0%9F%95%A4').replace(/&#x1F565;/g,'%F0%9F%95%A5').replace(/&#x1F566;/g,'%F0%9F%95%A6').replace(/&#x1F567;/g,'%F0%9F%95%A7').replace(/&#x1F5FB;/g,'%F0%9F%97%BB').replace(/&#x1F5FC;/g,'%F0%9F%97%BC').replace(/&#x1F5FD;/g,'%F0%9F%97%BD').replace(/&#x1F5FE;/g,'%F0%9F%97%BE').replace(/&#x1F5FF;/g,'%F0%9F%97%BF').replace(/&#x1F600;/g,'%F0%9F%98%80')
          .replace(/&#x1F601;/g,'%F0%9F%98%81').replace(/&#x1F602;/g,'%F0%9F%98%82').replace(/&#x1F603;/g,'%F0%9F%98%83').replace(/&#x1F604;/g,'%F0%9F%98%84').replace(/&#x1F605;/g,'%F0%9F%98%85').replace(/&#x1F606;/g,'%F0%9F%98%86').replace(/&#x1F607;/g,'%F0%9F%98%87').replace(/&#x1F608;/g,'%F0%9F%98%88').replace(/&#x1F609;/g,'%F0%9F%98%89').replace(/&#x1F60A;/g,'%F0%9F%98%8A').replace(/&#x1F60B;/g,'%F0%9F%98%8B').replace(/&#x1F60C;/g,'%F0%9F%98%8C').replace(/&#x1F60D;/g,'%F0%9F%98%8D').replace(/&#x1F60E;/g,'%F0%9F%98%8E').replace(/&#x1F60F;/g,'%F0%9F%98%8F').replace(/&#x1F610;/g,'%F0%9F%98%90').replace(/&#x1F611;/g,'%F0%9F%98%91').replace(/&#x1F612;/g,'%F0%9F%98%92').replace(/&#x1F613;/g,'%F0%9F%98%93').replace(/&#x1F614;/g,'%F0%9F%98%94').replace(/&#x1F615;/g,'%F0%9F%98%95').replace(/&#x1F616;/g,'%F0%9F%98%96').replace(/&#x1F617;/g,'%F0%9F%98%97').replace(/&#x1F618;/g,'%F0%9F%98%98').replace(/&#x1F619;/g,'%F0%9F%98%99').replace(/&#x1F61A;/g,'%F0%9F%98%9A').replace(/&#x1F61B;/g,'%F0%9F%98%9B').replace(/&#x1F61C;/g,'%F0%9F%98%9C').replace(/&#x1F61D;/g,'%F0%9F%98%9D').replace(/&#x1F61E;/g,'%F0%9F%98%9E').replace(/&#x1F61F;/g,'%F0%9F%98%9F').replace(/&#x1F620;/g,'%F0%9F%98%A0').replace(/&#x1F621;/g,'%F0%9F%98%A1').replace(/&#x1F622;/g,'%F0%9F%98%A2').replace(/&#x1F623;/g,'%F0%9F%98%A3').replace(/&#x1F624;/g,'%F0%9F%98%A4').replace(/&#x1F625;/g,'%F0%9F%98%A5').replace(/&#x1F626;/g,'%F0%9F%98%A6').replace(/&#x1F627;/g,'%F0%9F%98%A7').replace(/&#x1F628;/g,'%F0%9F%98%A8').replace(/&#x1F629;/g,'%F0%9F%98%A9').replace(/&#x1F62A;/g,'%F0%9F%98%AA').replace(/&#x1F62B;/g,'%F0%9F%98%AB').replace(/&#x1F62C;/g,'%F0%9F%98%AC').replace(/&#x1F62D;/g,'%F0%9F%98%AD').replace(/&#x1F62E;/g,'%F0%9F%98%AE').replace(/&#x1F62F;/g,'%F0%9F%98%AF').replace(/&#x1F630;/g,'%F0%9F%98%B0').replace(/&#x1F631;/g,'%F0%9F%98%B1').replace(/&#x1F632;/g,'%F0%9F%98%B2').replace(/&#x1F633;/g,'%F0%9F%98%B3').replace(/&#x1F634;/g,'%F0%9F%98%B4').replace(/&#x1F635;/g,'%F0%9F%98%B5').replace(/&#x1F636;/g,'%F0%9F%98%B6').replace(/&#x1F637;/g,'%F0%9F%98%B7').replace(/&#x1F638;/g,'%F0%9F%98%B8').replace(/&#x1F639;/g,'%F0%9F%98%B9').replace(/&#x1F63A;/g,'%F0%9F%98%BA').replace(/&#x1F63B;/g,'%F0%9F%98%BB').replace(/&#x1F63C;/g,'%F0%9F%98%BC').replace(/&#x1F63D;/g,'%F0%9F%98%BD').replace(/&#x1F63E;/g,'%F0%9F%98%BE').replace(/&#x1F63F;/g,'%F0%9F%98%BF').replace(/&#x1F640;/g,'%F0%9F%99%80').replace(/&#x1F645;/g,'%F0%9F%99%85').replace(/&#x1F646;/g,'%F0%9F%99%86').replace(/&#x1F647;/g,'%F0%9F%99%87').replace(/&#x1F648;/g,'%F0%9F%99%88').replace(/&#x1F649;/g,'%F0%9F%99%89').replace(/&#x1F64A;/g,'%F0%9F%99%8A').replace(/&#x1F64B;/g,'%F0%9F%99%8B').replace(/&#x1F64C;/g,'%F0%9F%99%8C').replace(/&#x1F64D;/g,'%F0%9F%99%8D').replace(/&#x1F64E;/g,'%F0%9F%99%8E').replace(/&#x1F64F;/g,'%F0%9F%99%8F').replace(/&#x1F680;/g,'%F0%9F%9A%80').replace(/&#x1F681;/g,'%F0%9F%9A%81').replace(/&#x1F682;/g,'%F0%9F%9A%82').replace(/&#x1F683;/g,'%F0%9F%9A%83').replace(/&#x1F684;/g,'%F0%9F%9A%84').replace(/&#x1F685;/g,'%F0%9F%9A%85').replace(/&#x1F686;/g,'%F0%9F%9A%86').replace(/&#x1F687;/g,'%F0%9F%9A%87').replace(/&#x1F688;/g,'%F0%9F%9A%88').replace(/&#x1F689;/g,'%F0%9F%9A%89').replace(/&#x1F68A;/g,'%F0%9F%9A%8A').replace(/&#x1F68C;/g,'%F0%9F%9A%8C').replace(/&#x1F68D;/g,'%F0%9F%9A%8D').replace(/&#x1F68E;/g,'%F0%9F%9A%8E').replace(/&#x1F68F;/g,'%F0%9F%9A%8F').replace(/&#x1F690;/g,'%F0%9F%9A%90').replace(/&#x1F691;/g,'%F0%9F%9A%91').replace(/&#x1F692;/g,'%F0%9F%9A%92').replace(/&#x1F693;/g,'%F0%9F%9A%93').replace(/&#x1F694;/g,'%F0%9F%9A%94').replace(/&#x1F695;/g,'%F0%9F%9A%95').replace(/&#x1F696;/g,'%F0%9F%9A%96').replace(/&#x1F697;/g,'%F0%9F%9A%97').replace(/&#x1F698;/g,'%F0%9F%9A%98').replace(/&#x1F699;/g,'%F0%9F%9A%99').replace(/&#x1F69A;/g,'%F0%9F%9A%9A').replace(/&#x1F69B;/g,'%F0%9F%9A%9B').replace(/&#x1F69C;/g,'%F0%9F%9A%9C').replace(/&#x1F69D;/g,'%F0%9F%9A%9D').replace(/&#x1F69E;/g,'%F0%9F%9A%9E').replace(/&#x1F69F;/g,'%F0%9F%9A%9F').replace(/&#x1F6A0;/g,'%F0%9F%9A%A0').replace(/&#x1F6A1;/g,'%F0%9F%9A%A1').replace(/&#x1F6A2;/g,'%F0%9F%9A%A2').replace(/&#x1F6A3;/g,'%F0%9F%9A%A3').replace(/&#x1F6A4;/g,'%F0%9F%9A%A4').replace(/&#x1F6A5;/g,'%F0%9F%9A%A5').replace(/&#x1F6A6;/g,'%F0%9F%9A%A6').replace(/&#x1F6A7;/g,'%F0%9F%9A%A7').replace(/&#x1F6A8;/g,'%F0%9F%9A%A8').replace(/&#x1F6A9;/g,'%F0%9F%9A%A9').replace(/&#x1F6AA;/g,'%F0%9F%9A%AA').replace(/&#x1F6AB;/g,'%F0%9F%9A%AB').replace(/&#x1F6AC;/g,'%F0%9F%9A%AC').replace(/&#x1F6AD;/g,'%F0%9F%9A%AD').replace(/&#x1F6AE;/g,'%F0%9F%9A%AE').replace(/&#x1F6AF;/g,'%F0%9F%9A%AF').replace(/&#x1F6B0;/g,'%F0%9F%9A%B0').replace(/&#x1F6B1;/g,'%F0%9F%9A%B1').replace(/&#x1F6B2;/g,'%F0%9F%9A%B2').replace(/&#x1F6B3;/g,'%F0%9F%9A%B3').replace(/&#x1F6B4;/g,'%F0%9F%9A%B4').replace(/&#x1F6B5;/g,'%F0%9F%9A%B5').replace(/&#x1F6B6;/g,'%F0%9F%9A%B6').replace(/&#x1F6B7;/g,'%F0%9F%9A%B7').replace(/&#x1F6B8;/g,'%F0%9F%9A%B8').replace(/&#x1F6B9;/g,'%F0%9F%9A%B9').replace(/&#x1F6BA;/g,'%F0%9F%9A%BA').replace(/&#x1F6BB;/g,'%F0%9F%9A%BB').replace(/&#x1F6BC;/g,'%F0%9F%9A%BC').replace(/&#x1F6BD;/g,'%F0%9F%9A%BD').replace(/&#x1F6BE;/g,'%F0%9F%9A%BE').replace(/&#x1F6BF;/g,'%F0%9F%9A%BF').replace(/&#x1F6C0;/g,'%F0%9F%9B%80').replace(/&#x1F6C1;/g,'%F0%9F%9B%81').replace(/&#x1F6C2;/g,'%F0%9F%9B%82').replace(/&#x1F6C3;/g,'%F0%9F%9B%83').replace(/&#x1F6C4;/g,'%F0%9F%9B%84').replace(/&#x1F6C5;/g,'%F0%9F%9B%85').replace(/&#x203C;/g,'%E2%80%BC').replace(/&#x2049;/g,'%E2%81%89').replace(/&#x2122;/g,'%E2%84%A2').replace(/&#x2139;/g,'%E2%84%B9').replace(/&#x2194;/g,'%E2%86%94').replace(/&#x2195;/g,'%E2%86%95').replace(/&#x2196;/g,'%E2%86%96').replace(/&#x2197;/g,'%E2%86%97').replace(/&#x2198;/g,'%E2%86%98').replace(/&#x2199;/g,'%E2%86%99').replace(/&#x21A9;/g,'%E2%86%A9').replace(/&#x21AA;/g,'%E2%86%AA').replace(/&#x231A;/g,'%E2%8C%9A').replace(/&#x231B;/g,'%E2%8C%9B').replace(/&#x23000000000;/g,'%E2%8F%A9').replace(/&#x23EA;/g,'%E2%8F%AA').replace(/&#x23EB;/g,'%E2%8F%AB').replace(/&#x23EC;/g,'%E2%8F%AC').replace(/&#x23F0;/g,'%E2%8F%B0').replace(/&#x23F3;/g,'%E2%8F%B3').replace(/&#x24C2;/g,'%E2%93%82').replace(/&#x25AA;/g,'%E2%96%AA').replace(/&#x25AB;/g,'%E2%96%AB').replace(/&#x25B6;/g,'%E2%96%B6').replace(/&#x25C0;/g,'%E2%97%80').replace(/&#x25FB;/g,'%E2%97%BB').replace(/&#x25FC;/g,'%E2%97%BC').replace(/&#x25FD;/g,'%E2%97%BD').replace(/&#x25FE;/g,'%E2%97%BE').replace(/&#x2600;/g,'%E2%98%80').replace(/&#x2601;/g,'%E2%98%81').replace(/&#x260E;/g,'%E2%98%8E').replace(/&#x2611;/g,'%E2%98%91').replace(/&#x2614;/g,'%E2%98%94').replace(/&#x2615;/g,'%E2%98%95').replace(/&#x261D;/g,'%E2%98%9D').replace(/&#x263A;/g,'%E2%98%BA').replace(/&#x2648;/g,'%E2%99%88').replace(/&#x2649;/g,'%E2%99%89').replace(/&#x264A;/g,'%E2%99%8A').replace(/&#x264B;/g,'%E2%99%8B').replace(/&#x264C;/g,'%E2%99%8C').replace(/&#x264D;/g,'%E2%99%8D').replace(/&#x264E;/g,'%E2%99%8E').replace(/&#x264F;/g,'%E2%99%8F').replace(/&#x2650;/g,'%E2%99%90').replace(/&#x2651;/g,'%E2%99%91').replace(/&#x2652;/g,'%E2%99%92').replace(/&#x2653;/g,'%E2%99%93')
          .replace(/&#x2660;/g,'%E2%99%A0').replace(/&#x2663;/g,'%E2%99%A3').replace(/&#x2665;/g,'%E2%99%A5').replace(/&#x2666;/g,'%E2%99%A6').replace(/&#x2668;/g,'%E2%99%A8').replace(/&#x267B;/g,'%E2%99%BB').replace(/&#x267F;/g,'%E2%99%BF').replace(/&#x2693;/g,'%E2%9A%93').replace(/&#x26A0;/g,'%E2%9A%A0').replace(/&#x26A1;/g,'%E2%9A%A1').replace(/&#x26AA;/g,'%E2%9A%AA').replace(/&#x26AB;/g,'%E2%9A%AB').replace(/&#x26BD;/g,'%E2%9A%BD').replace(/&#x26BE;/g,'%E2%9A%BE').replace(/&#x26C4;/g,'%E2%9B%84').replace(/&#x26C5;/g,'%E2%9B%85').replace(/&#x26CE;/g,'%E2%9B%8E').replace(/&#x26D4;/g,'%E2%9B%94').replace(/&#x26EA;/g,'%E2%9B%AA').replace(/&#x26F2;/g,'%E2%9B%B2').replace(/&#x26F3;/g,'%E2%9B%B3').replace(/&#x26F5;/g,'%E2%9B%B5').replace(/&#x26FA;/g,'%E2%9B%BA').replace(/&#x26FD;/g,'%E2%9B%BD').replace(/&#x2702;/g,'%E2%9C%82').replace(/&#x2705;/g,'%E2%9C%85').replace(/&#x2708;/g,'%E2%9C%88').replace(/&#x2709;/g,'%E2%9C%89').replace(/&#x270A;/g,'%E2%9C%8A').replace(/&#x270B;/g,'%E2%9C%8B').replace(/&#x270C;/g,'%E2%9C%8C').replace(/&#x270F;/g,'%E2%9C%8F').replace(/&#x2712;/g,'%E2%9C%92').replace(/&#x2714;/g,'%E2%9C%94').replace(/&#x2716;/g,'%E2%9C%96').replace(/&#x2728;/g,'%E2%9C%A8').replace(/&#x2733;/g,'%E2%9C%B3').replace(/&#x2734;/g,'%E2%9C%B4').replace(/&#x2744;/g,'%E2%9D%84').replace(/&#x2747;/g,'%E2%9D%87').replace(/&#x274C;/g,'%E2%9D%8C').replace(/&#x274E;/g,'%E2%9D%8E').replace(/&#x2753;/g,'%E2%9D%93').replace(/&#x2754;/g,'%E2%9D%94').replace(/&#x2755;/g,'%E2%9D%95').replace(/&#x2757;/g,'%E2%9D%97').replace(/&#x2764;/g,'%E2%9D%A4').replace(/&#x2795;/g,'%E2%9E%95').replace(/&#x2796;/g,'%E2%9E%96').replace(/&#x2797;/g,'%E2%9E%97').replace(/&#x27A1;/g,'%E2%9E%A1').replace(/&#x27B0;/g,'%E2%9E%B0').replace(/&#x2934;/g,'%E2%A4%B4').replace(/&#x2935;/g,'%E2%A4%B5').replace(/&#x2B05;/g,'%E2%AC%85').replace(/&#x2B06;/g,'%E2%AC%86').replace(/&#x2B07;/g,'%E2%AC%87').replace(/&#x2B1B;/g,'%E2%AC%9B').replace(/&#x2B1C;/g,'%E2%AC%9C').replace(/&#x2B50;/g,'%E2%AD%90').replace(/&#x2B55;/g,'%E2%AD%95').replace(/&#x3030;/g,'%E3%80%B0').replace(/&#x303D;/g,'%E3%80%BD').replace(/&#x3297;/g,'%E3%8A%97').replace(/&#x3299;/g,'%E3%8A%99')
          }
          let last_insert_id = _.last(matchObj);
          console.log('last_insert_id: ', last_insert_id);

          let sql = 'SELECT COUNT(*) as cnt FROM post_telegram WHERE post_telegram.post_id =' + last_insert_id.id;
          connection.query(sql, function (err, rides) {
            console.log('rides: ', rides);
            if (err) {
              console.log('err: ', err);
            }
            else if (rides[0].cnt == 0) {
             posttele (rides[0].cnt, last_insert_id.id, matchObj);
            } else {
              // nextCall(null, bodyss);
            }
          })
        }).catch(function (error) {
          setup();
          console.log(error);
        })
    }, 15000)
    
    function urlencode(str) {
      return str.replace(/%21/g,'!').replace(/%22/g,'"').replace(/pr%26/g,'pr?').replace(/%26/g,'&')
        .replace(/%27/g,'\'').replace(/%3A/g,':').replace(/%2F/g,'/').replace(/%3D/g,'=')
        .replace(/%28/g,'(').replace(/%3F/g,'?').replace(/%29/g,')').replace(/%2A/g,'*')
        .replace(/%20/g, '+');
    }
    function urldecode(str) {
      return str.replace(/&/g,'%26').replace(/=/g,'%3D').replace(/[?]/g,'%3F').replace(/[+]/g,'%2B').replace(/[[]/g,'%5B').replace(/[]]/g,'%5D');
    }
    function conurlencode(str) {
      return str.replace(/%21/g,'!').replace(/%22/g,'"').replace(/%26/g,'&')
        .replace(/%27/g,'\'').replace(/%3A/g,':').replace(/%2F/g,'/').replace(/%3D/g,'=')
        .replace(/%28/g,'(').replace(/%3F/g,'?').replace(/%29/g,')').replace(/%2A/g,'*')
        .replace(/%20/g, '+');
    }

    function posttele (bodyss, lastInsertId, lastArrayData) {
      let sqlsss = "SELECT * FROM post_flags";
        connection.query(sqlsss, function (err, flagData) {
          if (err) {
            console.log('err: ', err);
          }
        let ListflagData = flagData[0];
        let bitly = new BitlyClient(ListflagData.current_bitly);
        let sqls = "SELECT post_id FROM post_telegram ORDER BY id DESC LIMIT 1";
        connection.query(sqls, function (err, rides) {
          if (err) {
            console.log('err: ', err);
          }
          for (let i = 0; i < lastInsertId - rides[0].post_id; i++) {
            let nextId = rides[0].post_id + i + 1;
            let userExists = lastArrayData.filter(user => user.id == nextId);
              if (userExists.length > 0 && userExists[0].text_data != 'null\n') {
             let final =[];
             let array = userExists[0].text_data.split("\n");
           if(userExists[0].text_data.match(/(((ftp|https?):\/\/)[\-\w@:%_\+.~#?,!&\/\/=]+)/g)){ 
             let array_length = userExists[0].text_data.match(/(((ftp|https?):\/\/)[\-\w@:%_\+.~#!?,&\/\/=]+)/g).length;
              for (let j = 0; j < array.length; j++) {
                let linkTitle;
                let linkTitleFinal = array[0].slice(2).split(' ');
                console.log('linkTitleFinal: ', linkTitleFinal);
                // if(array[j].match(/Trade/g)){
                //     linkTitle  =array[j] 
                //  }
                //      console.log('linkTitle: ', linkTitle);
                if(array[j].match(/(((ftp|https?):\/\/)[\-\w@:%_\+.~#?,!&\/\/=]+)/g)){
                  let xzhxzh;
                    // if(array[j].match(/amazon.in/g)){
                    //  xzhxzh = array[j].replace(/[[\]]/g,'').replace(/ /g, '@')
                    // }else{
                    xzhxzh = array[j]
                    console.log('xzhxzh: ', xzhxzh);
                    // }
                  let urls = xzhxzh.match(/(((ftp|https?):\/\/)[\-\w@:%_\+.~#?,!&\/\/=]+)/g)
                  console.log('urls: ', urls);
                     unshort(urls[0]).then(function(unshortenedUrls){ 
                      let unshortenedUrl = unshortenedUrls.unshorten.replace(/&amp;/g,'&');
                      console.log('unshortenedUrlsssssss: ', unshortenedUrl);
                    if(unshortenedUrl.match(/trade.kucoin.com/g)){
                      let tagnot;
                    if(conurlencode(unshortenedUrl).match(/[?]/g)){
                      let finalLink =conurlencode(unshortenedUrl).split('?');
                      console.log('finalLink: ', finalLink);
                      // for (let h = 0; h < finalLink.length; h++) {
                      //  if(finalLink[h].match(/^r=/g)){
                      //     finalLink[h] = "";
                      //   }else if(finalLink[h].match(/^ref=/g)){
                      //     finalLink[h] = ""
                      //   }
                      // }
                     tagnot= finalLink[0].replace(/@/g, '').concat('?r='+ListflagData.user_post_tag).replace(/&&/g, '&').replace(/(\?&)/g, '?').replace(/&&&/g, '&');
                    }else{
                     tagnot= unshortenedUrl.replace(/@/g, '').concat('?r='+ListflagData.user_post_tag).replace(/&&/g, '&').replace(/(\?&)/g, '?').replace(/&&&/g, '&');
                    }

                    final[j] = array[j].replace(urls[0].replace(/@/g, ' ').trim(),'<a href="' + tagnot + '">Trade ' + linkTitleFinal[0] + ' On Kucoin</a>');

                  // if(ListflagData.bitlyFlag == "True"){ 
                  //  example(tagnot.replace(/&demoyou/g, ''));
                  // }else{
                  //   exampless(tagnot.replace(/&demoyou/g, ''));
                  // }
                  //   async function example(dddd) {
                  //     let response =await bitly
                  //     .shorten(dddd)
                  //     .then(function(result) {
                  //     final[j] = array[j].replace(urls[0].replace(/@/g, ' ').trim(),result.link);
                  //   })
                  //     .catch(function(error) {
                  //       tinyUrl1(dddd)
                  //     });
                  //   }
                  //   async function tinyUrl1(dddd) {  
                  //     await request({
                  //       uri: "http://tinyurl.com/api-create.php?url="+dddd,
                  //       method: "GET",
                  //     }, (err, response, body) => {
                  //       let responses ={"link":body};
                  //       final[j] = array[j].replace(urls[0].replace(/@/g, ' ').trim(),responses.link);
                  //     })
                  //   }
                  //   function exampless(dddd) {  
                  //   final[j] = array[j].replace(urls[0].replace(/@/g, ' ').trim(),dddd);
                  //   }
                  
                   }else if(unshortenedUrl.match(/binance.com/g)){
                      let tagnot;
                    if(conurlencode(unshortenedUrl).match(/[?]/g)){
                      let finalLink =conurlencode(unshortenedUrl).split('?');
                      console.log('finalLink: ', finalLink);
                      // for (let h = 0; h < finalLink.length; h++) {
                      //  if(finalLink[h].match(/^r=/g)){
                      //     finalLink[h] = "";
                      //   }else if(finalLink[h].match(/^ref=/g)){
                      //     finalLink[h] = ""
                      //   }
                      // }
                     tagnot= finalLink[0].replace(/@/g, '').concat('?ref='+ListflagData.org_post_tag).replace(/&&/g, '&').replace(/(\?&)/g, '?').replace(/&&&/g, '&');
                    }else{
                     tagnot= unshortenedUrl.replace(/@/g, '').concat('?ref='+ListflagData.org_post_tag).replace(/&&/g, '&').replace(/(\?&)/g, '?').replace(/&&&/g, '&');
                    }
                    final[j] = array[j].replace(urls[0].replace(/@/g, ' ').trim(),'<a href="' + tagnot + '">Trade ' + linkTitleFinal[0] + ' On Binance</a>');
                    console.log('final[j]: ', final[j]);

                  // if(ListflagData.bitlyFlag == "True"){ 
                  // example(tagnot.replace(/&demoyou/g, ''));
                  // }else{
                  //   exampless(tagnot.replace(/&demoyou/g, ''));
                  // }
                    // async function example(dddd) {
                    //   let response =await bitly
                    //   .shorten(dddd)
                    //   .then(function(result) {
                    //   final[j] = array[j].replace(urls[0].replace(/@/g, ' ').trim(),result.link);
                    // })
                    //   .catch(function(error) {
                    //     tinyUrl1(dddd)
                    //   });
                    // }
                    // async function tinyUrl1(dddd) {  
                    //   await request({
                    //     uri: "http://tinyurl.com/api-create.php?url="+dddd,
                    //     method: "GET",
                    //   }, (err, response, body) => {
                    //     let responses ={"link":body};
                    //     final[j] = array[j].replace(urls[0].replace(/@/g, ' ').trim(),responses.link);
                    //   })
                    // }
                    //   function exampless(dddd) {  
                    //     final[j] = array[j].replace(urls[0].replace(/@/g, ' ').trim(),dddd);
                    //   }
                    }
                      })
                      .catch(function(err){ console.error('AAAW 👻', err)})
                }else{
	               final[j] = array[j].replace(/[?]q=%23/g,'#').replace(/frcp/g,'').replace(/Amazon gift voucher/g,'https://amzn.to/3afr8VB - Amazon gift voucher').replace(/FRCP/g,'').replace(/ihddeals.com/g,'bestshoppingdeal.in').replace(/@loot_deal_offers/g,'@asktodealadmin_bot').replace(/@truegrabbers/g,'@asktodealadmin_bot').replace(/@loot_deal_offers/g,'').replace(/@desire_deals/g,'').replace(/@online_offers12/g,'').replace(/@Ihd56bot/g,'@asktodealadmin_bot').replace(/cashkaro/g,'Deal').replace(/Cashkaro/g,'Deal').replace(/@I/g,'').replace(/@i/g,'').replace(/@S/g,'').replace(/@s/g,'').replace(/@f/g,'').replace(/@F/g,'').replace(/(t.me[\/])/g,'').replace(/IHD/g,'').replace(/t.me/g,'').replace(/@frcp_deals/g,' ').replace(/@IHDBROADCAST/g,' ').replace(/@IHDBroadcast/g,' ').replace(/IHDBROADCAST/g,' ').replace(/@stg003/g,' ').replace(/stg/g,'Best_shopping').replace(/ihd/g,' ').replace(/&#xA0;/g,' ').replace(/.#x...../g,' %E2%99%A8 ').replace(/[[\]]/g,'').replace(/&/g, 'and').replace(/;/g,'').replace(/^\s+|\s+$|\s+(?=\s)/g, '');
                }
              }
             setTimeout(()=>{
              let finalAmazonDemo = final.join('\n').replace(/\[/g,'\n 👉 ').replace(/\]/g,'');
              let finalAmazonDemo1;
              if( finalAmazonDemo.indexOf("Pumping") != -1){
                let titlePost = "🟢 Price Alert 👉 \n\n";
                 finalAmazonDemo1 = titlePost.concat(finalAmazonDemo);
              }else if( finalAmazonDemo.indexOf("Dumping") != -1){
                let titlePost = "🔴 Price Alert 👉 \n\n";
                finalAmazonDemo1 = titlePost.concat(finalAmazonDemo);
              }else{
                finalAmazonDemo1 = finalAmazonDemo;
              }
             
              let finalAmazon = finalAmazonDemo1.replace('Binance','<a href="https://www.binance.com/en/register?ref=O5GG7C15&utm_campaign=web_share_copy">Binance</a>')
              .replace('Nexo','<a href="https://nexo.io/">Nexo</a>')
              .replace('Okex','<a href="https://www.okex.com/">Okex</a>')
              .replace('Huobi','<a href="https://www.huobi.com/">Huobi</a>')
              .replace('Ftx','<a href="https://ftx.com/">Ftx</a>')
              .replace('Bitstamp','<a href="https://www.bitstamp.net/">Bitstamp</a>')
              .replace('Xapo','<a href="https://www.xapo.com/">Xapo</a>')
              .replace('Curve.Fi','<a href="https://curve.fi/">Curve.Fi</a>')
              .replace('Bitfinex','<a href="https://www.bitfinex.com/">Bitfinex</a>')
              .replace('Gopax','<a href="https://www.gopax.com/">Gopax</a>')
              .replace('Bybit','<a href="https://www.bybit.com/">Bybit</a>')
              .replace('Aave','<a href="https://aave.com/">Aave</a>')
              .replace('Bitflyer','<a href="https://bitflyer.com/en-eu/">Bitflyer</a>')
              .replace('Bitbank','<a href="https://www.bitbank.com/">Bitbank</a>')
              .replace('Deribit','<a href="https://www.deribit.com/">Deribit</a>')
              .replace('Kucoin','<a href="https://www.kucoin.com/ucenter/signup?rcode=rJMVH54&lang=en_US&utm_source=friendInvite">Kucoin</a>')
              .replace('Coinbase','<a href="https://www.coinbase.com/">Coinbase</a>');
              if(finalAmazon.match(/(((ftp|https?):\/\/)[\-\w@:%_\+.~#?,&\/\/=]+)/g)){
                let finalIdList = JSON.parse(ListflagData.array_data).user;
                let insertFeild = [rides[0].post_id + i, 'demo']
                let sqlss = "INSERT INTO post_telegram (post_id,data) VALUES (" + nextId + ",'demo')";
                connection.query(sqlss, [insertFeild], function (err, rides) {
                  if (err) {
                    console.log('err: ', err);
                  }else{
                      teleAutoPostChannel(finalAmazon,"@salebabaG",ListflagData.kudart_token);
                }
              })
              }
              },Math.ceil(array.length/5)*3500);
            }else{
              let sqlss = "INSERT INTO post_telegram (post_id,data) VALUES (" + nextId + ",'demo')";
              connection.query(sqlss, function (err, rides) {
                if (err) {
                console.log('err: ', err);
                }
              })
            }
          }
          }
        })
      })
    }

function teleAutoPostChannel(finalAmazon,chanelName,token){
    var chatId = chanelName; // <= replace with yours
    bot = new nodeTelegramBotApi(token);
    bot.sendMessage(chatId, finalAmazon,{
       parse_mode: "HTML",
      disable_web_page_preview: true
    })
}


router.post('/getAllInOneData', function (req, res) {
  var response = {
    "recordsTotal": 0,
    "recordsFiltered": 0,
    "data": []
  };
  async.waterfall([
    function (nextCall) {
      var sql = "Select count(*) as TotalCount from ??";
      connection.query(sql, ['post_telegram'], function (err, rides) {
        if (err) {
          console.log('11');
          return nextCall({
            "message": "something went wrong",
          });
        }
        response.recordsTotal = rides[0].TotalCount;
        response.recordsFiltered = rides[0].TotalCount
        nextCall(null, rides[0].TotalCount);
      })
    }, function (counts, nextCall) {
      startNum = parseInt(req.body.start) || 0;
      LimitNum = parseInt(req.body.length) || 10;
      var query = "Select * from ?? ORDER BY id DESC limit ? OFFSET ?";
      connection.query(query, ["post_telegram", LimitNum, startNum], function (err, ridess) {
        if (err) {
          return nextCall({
            "message": "something went wrong",
          });
        } else if (ridess.length > 0) {
          let final =[];
           for (let j = 0; j < ridess.length; j++) {
            final.push({id:j+1,watts_data:urlencodedd(ridess[j].data)})
           }
          response.data = final;
          nextCall();
        } else {
          return nextCall({
            "message": "something went wrong",
          });
        }
      })
    }
  ], function (err) {
    if (err) {
      return res.send({
        status: err.code ? err.code : 400,
        message: (err && err.msg) || "someyhing went wrong"
      });
    }
    return res.send(response);
  });
});

function urlencodedd(str) {
  return str.replace(/%E2%82%B9/g,' ₹').replace(/%E2%9A%9C/g,' ⚜').replace(/%F0%9F%8E%B8/g,' 🤝').replace(/%F0%9F%82%A0/g,' 🂠').replace(/%F0%9F%82%A1/g,' 🂡').replace(/%F0%9F%82%A2/g,' 🂢').replace(/%F0%9F%82%A3/g,' 🂣').replace(/%F0%9F%82%A4/g,' 🂤').replace(/%F0%9F%82%A5/g,' 🂥').replace(/%F0%9F%82%A6/g,' 🂦').replace(/%F0%9F%82%A7/g,' 🂧').replace(/%F0%9F%82%A8/g,' 🂨').replace(/%F0%9F%82%A9/g,' 🂩').replace(/%F0%9F%82%AA/g,' 🂪').replace(/%F0%9F%82%AB/g,' 🂫').replace(/%F0%9F%82%AC/g,' 🂬').replace(/%F0%9F%82%AD/g,' 🂭').replace(/%F0%9F%82%AE/g,' 🂮').replace(/%F0%9F%82%B1/g,' 🂱').replace(/%F0%9F%82%B2/g,' 🂲').replace(/%F0%9F%82%B3/g,' 🂳').replace(/%F0%9F%82%B4/g,' 🂴').replace(/%F0%9F%82%B5/g,' 🂵').replace(/%F0%9F%82%B6/g,' 🂶').replace(/%F0%9F%82%B7/g,' 🂷').replace(/%F0%9F%82%B8/g,' 🂸').replace(/%F0%9F%82%B9/g,' 🂹').replace(/%F0%9F%82%BA/g,' 🂺').replace(/%F0%9F%82%BB/g,' 🂻').replace(/%F0%9F%82%BC/g,' 🂼').replace(/%F0%9F%82%BD/g,' 🂽').replace(/%F0%9F%82%BE/g,' 🂾').replace(/%F0%9F%83%81/g,' 🃁').replace(/%F0%9F%83%82/g,' 🃂').replace(/%F0%9F%83%83/g,' 🃃').replace(/%F0%9F%83%84/g,' 🃄').replace(/%F0%9F%83%85/g,' 🃅').replace(/%F0%9F%83%86/g,' 🃆').replace(/%F0%9F%83%87/g,' 🃇').replace(/%F0%9F%83%88/g,' 🃈').replace(/%F0%9F%83%89/g,' 🃉').replace(/%F0%9F%83%8A/g,' 🃊').replace(/%F0%9F%83%8B/g,' 🃋').replace(/%F0%9F%83%8C/g,' 🃌').replace(/%F0%9F%83%8D/g,' 🃍').replace(/%F0%9F%83%8E/g,' 🃎').replace(/%F0%9F%83%8F/g,' 🃏').replace(/%F0%9F%83%91/g,' 🃑').replace(/%F0%9F%83%92/g,' 🃒').replace(/%F0%9F%83%93/g,' 🃓').replace(/%F0%9F%83%94/g,' 🃔').replace(/%F0%9F%83%95/g,' 🃕').replace(/%F0%9F%83%96/g,' 🃖').replace(/%F0%9F%83%97/g,' 🃗')
  .replace(/%F0%9F%83%98/g,' 🃘').replace(/%F0%9F%83%99/g,' 🃙').replace(/%F0%9F%83%9A/g,' 🃚').replace(/%F0%9F%83%9B/g,' 🃛').replace(/%F0%9F%83%9C/g,' 🃜').replace(/%F0%9F%83%9D/g,' 🃝').replace(/%F0%9F%83%9E/g,' 🃞').replace(/%F0%9F%83%9F/g,' 🃟').replace(/%F0%9F%8C%80/g,' 🌀').replace(/%F0%9F%8C%81/g,' 🌁').replace(/%F0%9F%8C%82/g,' 🌂').replace(/%F0%9F%8C%83/g,' 🌃').replace(/%F0%9F%8C%84/g,' 🌄').replace(/%F0%9F%8C%85/g,' 🌅').replace(/%F0%9F%8C%86/g,' 🌆').replace(/%F0%9F%8C%87/g,' 🌇').replace(/%F0%9F%8C%88/g,' 🌈').replace(/%F0%9F%8C%89/g,' 🌉').replace(/%F0%9F%8C%8A/g,' 🌊').replace(/%F0%9F%8C%8B/g,' 🌋').replace(/%F0%9F%8C%8C/g,' 🌌').replace(/%F0%9F%8C%8D/g,' 🌍').replace(/%F0%9F%8C%8E/g,' 🌎').replace(/%F0%9F%8C%8F/g,' 🌏').replace(/%F0%9F%8C%90/g,' 🌐').replace(/%F0%9F%8C%91/g,' 🌑').replace(/%F0%9F%8C%92/g,' 🌒').replace(/%F0%9F%8C%93/g,' 🌓').replace(/%F0%9F%8C%94/g,' 🌔').replace(/%F0%9F%8C%95/g,' 🌕').replace(/%F0%9F%8C%96/g,' 🌖').replace(/%F0%9F%8C%97/g,' 🌗').replace(/%F0%9F%8C%98/g,' 🌘').replace(/%F0%9F%8C%99/g,' 🌙').replace(/%F0%9F%8C%9A/g,' 🌚').replace(/%F0%9F%8C%9B/g,' 🌛').replace(/%F0%9F%8C%9C/g,' 🌜').replace(/%F0%9F%8C%9D/g,' 🌝').replace(/%F0%9F%8C%9E/g,' 🌞').replace(/%F0%9F%8C%9F/g,' 🌟').replace(/%F0%9F%8C%A0/g,' 🌠').replace(/%F0%9F%8C%B0/g,' 🌰').replace(/%F0%9F%8C%B1/g,' 🌱').replace(/%F0%9F%8C%B2/g,' 🌲').replace(/%F0%9F%8C%B3/g,' 🌳').replace(/%F0%9F%8C%B4/g,' 🌴').replace(/%F0%9F%8C%B5/g,' 🌵').replace(/%F0%9F%8C%B7/g,' 🌷').replace(/%F0%9F%8C%B8/g,' 🌸').replace(/%F0%9F%8C%B9/g,' 🌹')
  .replace(/%F0%9F%8C%BA/g,' 🌺').replace(/%F0%9F%8C%BB/g,' 🌻').replace(/%F0%9F%8C%BC/g,' 🌼').replace(/%F0%9F%8C%BD/g,' 🌽').replace(/%F0%9F%8C%BE/g,' 🌾').replace(/%F0%9F%8C%BF/g,' 🌿').replace(/%F0%9F%8D%80/g,' 🍀').replace(/%F0%9F%8D%81/g,' 🍁').replace(/%F0%9F%8D%82/g,' 🍂').replace(/%F0%9F%8D%83/g,' 🍃').replace(/%F0%9F%8D%84/g,' 🍄').replace(/%F0%9F%8D%85/g,' 🍅').replace(/%F0%9F%8D%86/g,' 🍆').replace(/%F0%9F%8D%87/g,' 🍇').replace(/%F0%9F%8D%88/g,' 🍈').replace(/%F0%9F%8D%89/g,' 🍉').replace(/%F0%9F%8D%8A/g,' 🍊').replace(/%F0%9F%8D%8B/g,' 🍋').replace(/%F0%9F%8D%8C/g,' 🍌').replace(/%F0%9F%8D%8D/g,' 🍍').replace(/%F0%9F%8D%8E/g,' 🍎').replace(/%F0%9F%8D%8F/g,' 🍏').replace(/%F0%9F%8D%90/g,' 🍐').replace(/%F0%9F%8D%91/g,' 🍑').replace(/%F0%9F%8D%92/g,' 🍒').replace(/%F0%9F%8D%93/g,' 🍓').replace(/%F0%9F%8D%94/g,' 🍔').replace(/%F0%9F%8D%95/g,' 🍕').replace(/%F0%9F%8D%96/g,' 🍖').replace(/%F0%9F%8D%97/g,' 🍗').replace(/%F0%9F%8D%98/g,' 🍘').replace(/%F0%9F%8D%99/g,' 🍙').replace(/%F0%9F%8D%9A/g,' 🍚').replace(/%F0%9F%8D%9B/g,' 🍛').replace(/%F0%9F%8D%9C/g,' 🍜').replace(/%F0%9F%8D%9D/g,' 🍝').replace(/%F0%9F%8D%9E/g,' 🍞').replace(/%F0%9F%8D%9F/g,' 🍟').replace(/%F0%9F%8D%A0/g,' 🍠').replace(/%F0%9F%8D%A1/g,' 🍡').replace(/%F0%9F%8D%A2/g,' 🍢').replace(/%F0%9F%8D%A3/g,' 🍣').replace(/%F0%9F%8D%A4/g,' 🍤').replace(/%F0%9F%8D%A5/g,' 🍥').replace(/%F0%9F%8D%A6/g,' 🍦').replace(/%F0%9F%8D%A7/g,' 🍧').replace(/%F0%9F%8D%A8/g,' 🍨').replace(/%F0%9F%8D%A9/g,' 🍩').replace(/%F0%9F%8D%AA/g,' 🍪').replace(/%F0%9F%8D%AB/g,' 🍫')
  .replace(/%F0%9F%8D%AC/g,' 🍬').replace(/%F0%9F%8D%AD/g,' 🍭').replace(/%F0%9F%8D%AE/g,' 🍮').replace(/%F0%9F%8D%AF/g,' 🍯').replace(/%F0%9F%8D%B0/g,' 🍰').replace(/%F0%9F%8D%B1/g,' 🍱').replace(/%F0%9F%8D%B2/g,' 🍲').replace(/%F0%9F%8D%B3/g,' 🍳').replace(/%F0%9F%8D%B4/g,' 🍴').replace(/%F0%9F%8D%B5/g,' 🍵').replace(/%F0%9F%8D%B6/g,' 🍶').replace(/%F0%9F%8D%B7/g,' 🍷').replace(/%F0%9F%8D%B8/g,' 🍸').replace(/%F0%9F%8D%B9/g,' 🍹').replace(/%F0%9F%8D%BA/g,' 🍺').replace(/%F0%9F%8D%BB/g,' 🍻').replace(/%F0%9F%8D%BC/g,' 🍼').replace(/%F0%9F%8E%80/g,' 🎀').replace(/%F0%9F%8E%81/g,' 🎁').replace(/%F0%9F%8E%82/g,' 🎂').replace(/%F0%9F%8E%83/g,' 🎃').replace(/%F0%9F%8E%84/g,' 🎄').replace(/%F0%9F%8E%85/g,' 🎅').replace(/%F0%9F%8E%86/g,' 🎆').replace(/%F0%9F%8E%87/g,' 🎇').replace(/%F0%9F%8E%88/g,' 🎈').replace(/%F0%9F%8E%89/g,' 🎉').replace(/%F0%9F%8E%8A/g,' 🎊').replace(/%F0%9F%8E%8B/g,' 🎋').replace(/%F0%9F%8E%8C/g,' 🎌').replace(/%F0%9F%8E%8D/g,' 🎍').replace(/%F0%9F%8E%8E/g,' 🎎').replace(/%F0%9F%8E%8F/g,' 🎏').replace(/%F0%9F%8E%90/g,' 🎐').replace(/%F0%9F%8E%91/g,' 🎑').replace(/%F0%9F%8E%92/g,' 🎒').replace(/%F0%9F%8E%93/g,' 🎓').replace(/%F0%9F%8E%A0/g,' 🎠').replace(/%F0%9F%8E%A1/g,' 🎡').replace(/%F0%9F%8E%A2/g,' 🎢').replace(/%F0%9F%8E%A3/g,' 🎣').replace(/%F0%9F%8E%A4/g,' 🎤').replace(/%F0%9F%8E%A5/g,' 🎥').replace(/%F0%9F%8E%A6/g,' 🎦').replace(/%F0%9F%8E%A7/g,' 🎧').replace(/%F0%9F%8E%A8/g,' 🎨').replace(/%F0%9F%8E%A9/g,' 🎩').replace(/%F0%9F%8E%AA/g,' 🎪').replace(/%F0%9F%8E%AB/g,' 🎫').replace(/%F0%9F%8E%AC/g,' 🎬').replace(/%F0%9F%8E%AD/g,' 🎭')
  .replace(/%F0%9F%8E%AE/g,' 🎮').replace(/%F0%9F%8E%AF/g,' 🎯').replace(/%F0%9F%8E%B0/g,' 🎰').replace(/%F0%9F%8E%B1/g,' 🎱').replace(/%F0%9F%8E%B2/g,' 🎲').replace(/%F0%9F%8E%B3/g,' 🎳').replace(/%F0%9F%8E%B4/g,' 🎴').replace(/%F0%9F%8E%B5/g,' 🎵').replace(/%F0%9F%8E%B6/g,' 🎶').replace(/%F0%9F%8E%B7/g,' 🎷').replace(/%F0%9F%8E%B8/g,' 🎸').replace(/%F0%9F%8E%B9/g,' 🎹').replace(/%F0%9F%8E%BA/g,' 🎺').replace(/%F0%9F%8E%BB/g,' 🎻').replace(/%F0%9F%8E%BC/g,' 🎼').replace(/%F0%9F%8E%BD/g,' 🎽').replace(/%F0%9F%8E%BE/g,' 🎾').replace(/%F0%9F%8E%BF/g,' 🎿').replace(/%F0%9F%8F%80/g,' 🏀').replace(/%F0%9F%8F%81/g,' 🏁').replace(/%F0%9F%8F%82/g,' 🏂').replace(/%F0%9F%8F%83/g,' 🏃').replace(/%F0%9F%8F%84/g,' 🏄').replace(/%F0%9F%8F%86/g,' 🏆').replace(/%F0%9F%8F%87/g,' 🏇').replace(/%F0%9F%8F%88/g,' 🏈').replace(/%F0%9F%8F%89/g,' 🏉').replace(/%F0%9F%8F%8A/g,' 🏊').replace(/%F0%9F%8F%A0/g,' 🏠').replace(/%F0%9F%8F%A1/g,' 🏡').replace(/%F0%9F%8F%A2/g,' 🏢').replace(/%F0%9F%8F%A3/g,' 🏣').replace(/%F0%9F%8F%A4/g,' 🏤').replace(/%F0%9F%8F%A5/g,' 🏥').replace(/%F0%9F%8F%A6/g,' 🏦').replace(/%F0%9F%8F%A7/g,' 🏧').replace(/%F0%9F%8F%A8/g,' 🏨').replace(/%F0%9F%8F%A9/g,' 🏩').replace(/%F0%9F%8F%AA/g,' 🏪').replace(/%F0%9F%8F%AB/g,' 🏫').replace(/%F0%9F%8F%AC/g,' 🏬').replace(/%F0%9F%8F%AD/g,' 🏭').replace(/%F0%9F%8F%AE/g,' 🏮').replace(/%F0%9F%8F%AF/g,' 🏯').replace(/%F0%9F%8F%B0/g,' 🏰').replace(/%F0%9F%90%80/g,' 🐀').replace(/%F0%9F%90%81/g,' 🐁').replace(/%F0%9F%90%82/g,' 🐂').replace(/%F0%9F%90%83/g,' 🐃').replace(/%F0%9F%90%84/g,' 🐄').replace(/%F0%9F%90%85/g,' 🐅')
  .replace(/%F0%9F%90%86/g,' 🐆').replace(/%F0%9F%90%87/g,' 🐇').replace(/%F0%9F%90%88/g,' 🐈').replace(/%F0%9F%90%89/g,' 🐉').replace(/%F0%9F%90%8A/g,' 🐊').replace(/%F0%9F%90%8B/g,' 🐋').replace(/%F0%9F%90%8C/g,' 🐌').replace(/%F0%9F%90%8D/g,' 🐍').replace(/%F0%9F%90%8E/g,' 🐎').replace(/%F0%9F%90%8F/g,' 🐏').replace(/%F0%9F%90%90/g,' 🐐').replace(/%F0%9F%90%91/g,' 🐑').replace(/%F0%9F%90%92/g,' 🐒').replace(/%F0%9F%90%93/g,' 🐓').replace(/%F0%9F%90%94/g,' 🐔').replace(/%F0%9F%90%95/g,' 🐕').replace(/%F0%9F%90%96/g,' 🐖').replace(/%F0%9F%90%97/g,' 🐗').replace(/%F0%9F%90%98/g,' 🐘').replace(/%F0%9F%90%99/g,' 🐙').replace(/%F0%9F%90%9A/g,' 🐚').replace(/%F0%9F%90%9B/g,' 🐛').replace(/%F0%9F%90%9C/g,' 🐜').replace(/%F0%9F%90%9D/g,' 🐝').replace(/%F0%9F%90%9E/g,' 🐞').replace(/%F0%9F%90%9F/g,' 🐟').replace(/%F0%9F%90%A0/g,' 🐠').replace(/%F0%9F%90%A1/g,' 🐡').replace(/%F0%9F%90%A2/g,' 🐢').replace(/%F0%9F%90%A3/g,' 🐣').replace(/%F0%9F%90%A4/g,' 🐤').replace(/%F0%9F%90%A5/g,' 🐥').replace(/%F0%9F%90%A6/g,' 🐦').replace(/%F0%9F%90%A7/g,' 🐧').replace(/%F0%9F%90%A8/g,' 🐨').replace(/%F0%9F%90%A9/g,' 🐩').replace(/%F0%9F%90%AA/g,' 🐪').replace(/%F0%9F%90%AB/g,' 🐫').replace(/%F0%9F%90%AC/g,' 🐬').replace(/%F0%9F%90%AD/g,' 🐭').replace(/%F0%9F%90%AE/g,' 🐮').replace(/%F0%9F%90%AF/g,' 🐯').replace(/%F0%9F%90%B0/g,' 🐰').replace(/%F0%9F%90%B1/g,' 🐱').replace(/%F0%9F%90%B2/g,' 🐲').replace(/%F0%9F%90%B3/g,' 🐳').replace(/%F0%9F%90%B4/g,' 🐴').replace(/%F0%9F%90%B5/g,' 🐵').replace(/%F0%9F%90%B6/g,' 🐶').replace(/%F0%9F%90%B7/g,' 🐷').replace(/%F0%9F%90%B8/g,' 🐸')
  .replace(/%F0%9F%90%B9/g,' 🐹').replace(/%F0%9F%90%BA/g,' 🐺').replace(/%F0%9F%90%BB/g,' 🐻').replace(/%F0%9F%90%BC/g,' 🐼').replace(/%F0%9F%90%BD/g,' 🐽').replace(/%F0%9F%90%BE/g,' 🐾').replace(/%F0%9F%91%80/g,' 👀').replace(/%F0%9F%91%82/g,' 👂').replace(/%F0%9F%91%83/g,' 👃').replace(/%F0%9F%91%84/g,' 👄').replace(/%F0%9F%91%85/g,' 👅').replace(/%F0%9F%91%86/g,' 👆').replace(/%F0%9F%91%87/g,' 👇').replace(/%F0%9F%91%88/g,' 👈').replace(/%F0%9F%91%89/g,' 👉').replace(/%F0%9F%91%8A/g,' 👊').replace(/%F0%9F%91%8B/g,' 👋').replace(/%F0%9F%91%8C/g,' 👌').replace(/%F0%9F%91%8D/g,' 👍').replace(/%F0%9F%91%8E/g,' 👎').replace(/%F0%9F%91%8F/g,' 👏').replace(/%F0%9F%91%90/g,' 👐').replace(/%F0%9F%91%91/g,' 👑').replace(/%F0%9F%91%92/g,' 👒').replace(/%F0%9F%91%93/g,' 👓').replace(/%F0%9F%91%94/g,' 👔').replace(/%F0%9F%91%95/g,' 👕').replace(/%F0%9F%91%96/g,' 👖').replace(/%F0%9F%91%97/g,' 👗').replace(/%F0%9F%91%98/g,' 👘').replace(/%F0%9F%91%99/g,' 👙').replace(/%F0%9F%91%9A/g,' 👚').replace(/%F0%9F%91%9B/g,' 👛').replace(/%F0%9F%91%9C/g,' 👜').replace(/%F0%9F%91%9D/g,' 👝').replace(/%F0%9F%91%9E/g,' 👞').replace(/%F0%9F%91%9F/g,' 👟').replace(/%F0%9F%91%A0/g,' 👠').replace(/%F0%9F%91%A1/g,' 👡').replace(/%F0%9F%91%A2/g,' 👢').replace(/%F0%9F%91%A3/g,' 👣').replace(/%F0%9F%91%A4/g,' 👤').replace(/%F0%9F%91%A5/g,' 👥').replace(/%F0%9F%91%A6/g,' 👦').replace(/%F0%9F%91%A7/g,' 👧').replace(/%F0%9F%91%A8/g,' 👨').replace(/%F0%9F%91%A9/g,' 👩').replace(/%F0%9F%91%AA/g,' 👪').replace(/%F0%9F%91%AB/g,' 👫').replace(/%F0%9F%91%AC/g,' 👬').replace(/%F0%9F%91%AD/g,' 👭')
  .replace(/%F0%9F%91%AE/g,' 👮').replace(/%F0%9F%91%AF/g,' 👯').replace(/%F0%9F%91%B0/g,' 👰').replace(/%F0%9F%91%B1/g,' 👱').replace(/%F0%9F%91%B2/g,' 👲').replace(/%F0%9F%91%B3/g,' 👳').replace(/%F0%9F%91%B4/g,' 👴').replace(/%F0%9F%91%B5/g,' 👵').replace(/%F0%9F%91%B6/g,' 👶').replace(/%F0%9F%91%B7/g,' 👷').replace(/%F0%9F%91%B8/g,' 👸').replace(/%F0%9F%91%B9/g,' 👹').replace(/%F0%9F%91%BA/g,' 👺').replace(/%F0%9F%91%BB/g,' 👻').replace(/%F0%9F%91%BC/g,' 👼').replace(/%F0%9F%91%BD/g,' 👽').replace(/%F0%9F%91%BE/g,' 👾').replace(/%F0%9F%91%BF/g,' 👿').replace(/%F0%9F%92%80/g,' 💀').replace(/%F0%9F%92%81/g,' 💁').replace(/%F0%9F%92%82/g,' 💂').replace(/%F0%9F%92%83/g,' 💃').replace(/%F0%9F%92%84/g,' 💄').replace(/%F0%9F%92%85/g,' 💅').replace(/%F0%9F%92%86/g,' 💆').replace(/%F0%9F%92%87/g,' 💇').replace(/%F0%9F%92%88/g,' 💈').replace(/%F0%9F%92%89/g,' 💉').replace(/%F0%9F%92%8A/g,' 💊').replace(/%F0%9F%92%8B/g,' 💋').replace(/%F0%9F%92%8C/g,' 💌').replace(/%F0%9F%92%8D/g,' 💍').replace(/%F0%9F%92%8E/g,' 💎').replace(/%F0%9F%92%8F/g,' 💏').replace(/%F0%9F%92%90/g,' 💐').replace(/%F0%9F%92%91/g,' 💑').replace(/%F0%9F%92%92/g,' 💒').replace(/%F0%9F%92%93/g,' 💓').replace(/%F0%9F%92%94/g,' 💔').replace(/%F0%9F%92%95/g,' 💕').replace(/%F0%9F%92%96/g,' 💖').replace(/%F0%9F%92%97/g,' 💗').replace(/%F0%9F%92%98/g,' 💘').replace(/%F0%9F%92%99/g,' 💙').replace(/%F0%9F%92%9A/g,' 💚').replace(/%F0%9F%92%9B/g,' 💛').replace(/%F0%9F%92%9C/g,' 💜').replace(/%F0%9F%92%9D/g,' 💝').replace(/%F0%9F%92%9E/g,' 💞').replace(/%F0%9F%92%9F/g,' 💟').replace(/%F0%9F%92%A0/g,' 💠')
  .replace(/%F0%9F%92%A1/g,' 💡').replace(/%F0%9F%92%A2/g,' 💢').replace(/%F0%9F%92%A3/g,' 💣').replace(/%F0%9F%92%A4/g,' 💤').replace(/%F0%9F%92%A5/g,' 💥').replace(/%F0%9F%92%A6/g,' 💦').replace(/%F0%9F%92%A7/g,' 💧').replace(/%F0%9F%92%A8/g,' 💨').replace(/%F0%9F%92%A9/g,' 💩').replace(/%F0%9F%92%AA/g,' 💪').replace(/%F0%9F%92%AB/g,' 💫').replace(/%F0%9F%92%AC/g,' 💬').replace(/%F0%9F%92%AD/g,' 💭').replace(/%F0%9F%92%AE/g,' 💮').replace(/%F0%9F%92%AF/g,' 💯').replace(/%F0%9F%92%B0/g,' 💰').replace(/%F0%9F%92%B1/g,' 💱').replace(/%F0%9F%92%B2/g,' 💲').replace(/%F0%9F%92%B3/g,' 💳').replace(/%F0%9F%92%B4/g,' 💴').replace(/%F0%9F%92%B5/g,' 💵').replace(/%F0%9F%92%B6/g,' 💶').replace(/%F0%9F%92%B7/g,' 💷').replace(/%F0%9F%92%B8/g,' 💸').replace(/%F0%9F%92%B9/g,' 💹').replace(/%F0%9F%92%BA/g,' 💺').replace(/%F0%9F%92%BB/g,' 💻').replace(/%F0%9F%92%BC/g,' 💼').replace(/%F0%9F%92%BD/g,' 💽').replace(/%F0%9F%92%BE/g,' 💾').replace(/%F0%9F%92%BF/g,' 💿').replace(/%F0%9F%93%80/g,' 📀').replace(/%F0%9F%93%81/g,' 📁').replace(/%F0%9F%93%82/g,' 📂').replace(/%F0%9F%93%83/g,' 📃').replace(/%F0%9F%93%84/g,' 📄').replace(/%F0%9F%93%85/g,' 📅').replace(/%F0%9F%93%86/g,' 📆').replace(/%F0%9F%93%87/g,' 📇').replace(/%F0%9F%93%88/g,' 📈').replace(/%F0%9F%93%89/g,' 📉').replace(/%F0%9F%93%8A/g,' 📊').replace(/%F0%9F%93%8B/g,' 📋').replace(/%F0%9F%93%8C/g,' 📌').replace(/%F0%9F%93%8D/g,' 📍').replace(/%F0%9F%93%8E/g,' 📎').replace(/%F0%9F%93%8F/g,' 📏').replace(/%F0%9F%93%90/g,' 📐').replace(/%F0%9F%93%91/g,' 📑').replace(/%F0%9F%93%92/g,' 📒').replace(/%F0%9F%93%93/g,' 📓')
  .replace(/%F0%9F%93%94/g,' 📔').replace(/%F0%9F%93%95/g,' 📕').replace(/%F0%9F%93%96/g,' 📖').replace(/%F0%9F%93%97/g,' 📗').replace(/%F0%9F%93%98/g,' 📘').replace(/%F0%9F%93%99/g,' 📙').replace(/%F0%9F%93%9A/g,' 📚').replace(/%F0%9F%93%9B/g,' 📛').replace(/%F0%9F%93%9C/g,' 📜').replace(/%F0%9F%93%9D/g,' 📝').replace(/%F0%9F%93%9E/g,' 📞').replace(/%F0%9F%93%9F/g,' 📟').replace(/%F0%9F%93%A0/g,' 📠').replace(/%F0%9F%93%A1/g,' 📡').replace(/%F0%9F%93%A2/g,' 📢').replace(/%F0%9F%93%A3/g,' 📣').replace(/%F0%9F%93%A4/g,' 📤').replace(/%F0%9F%93%A5/g,' 📥').replace(/%F0%9F%93%A6/g,' 📦').replace(/%F0%9F%93%A7/g,' 📧').replace(/%F0%9F%93%A8/g,' 📨').replace(/%F0%9F%93%A9/g,' 📩').replace(/%F0%9F%93%AA/g,' 📪').replace(/%F0%9F%93%AB/g,' 📫').replace(/%F0%9F%93%AC/g,' 📬').replace(/%F0%9F%93%AD/g,' 📭').replace(/%F0%9F%93%AE/g,' 📮').replace(/%F0%9F%93%AF/g,' 📯').replace(/%F0%9F%93%B0/g,' 📰').replace(/%F0%9F%93%B1/g,' 📱').replace(/%F0%9F%93%B2/g,' 📲').replace(/%F0%9F%93%B3/g,' 📳').replace(/%F0%9F%93%B4/g,' 📴').replace(/%F0%9F%93%B5/g,' 📵').replace(/%F0%9F%93%B6/g,' 📶').replace(/%F0%9F%93%B7/g,' 📷').replace(/%F0%9F%93%B9/g,' 📹').replace(/%F0%9F%93%BA/g,' 📺').replace(/%F0%9F%93%BB/g,' 📻').replace(/%F0%9F%93%BC/g,' 📼').replace(/%F0%9F%94%80/g,' 🔀').replace(/%F0%9F%94%81/g,' 🔁').replace(/%F0%9F%94%82/g,' 🔂').replace(/%F0%9F%94%83/g,' 🔃').replace(/%F0%9F%94%84/g,' 🔄').replace(/%F0%9F%94%85/g,' 🔅').replace(/%F0%9F%94%86/g,' 🔆').replace(/%F0%9F%94%87/g,' 🔇').replace(/%F0%9F%94%88/g,' 🔈').replace(/%F0%9F%94%89/g,' 🔉').replace(/%F0%9F%94%8A/g,' 🔊')
  .replace(/%F0%9F%94%8B/g,' 🔋').replace(/%F0%9F%94%8C/g,' 🔌').replace(/%F0%9F%94%8D/g,' 🔍').replace(/%F0%9F%94%8E/g,' 🔎').replace(/%F0%9F%94%8F/g,' 🔏').replace(/%F0%9F%94%90/g,' 🔐').replace(/%F0%9F%94%91/g,' 🔑').replace(/%F0%9F%94%92/g,' 🔒').replace(/%F0%9F%94%93/g,' 🔓').replace(/%F0%9F%94%94/g,' 🔔').replace(/%F0%9F%94%95/g,' 🔕').replace(/%F0%9F%94%96/g,' 🔖').replace(/%F0%9F%94%97/g,' 🔗').replace(/%F0%9F%94%98/g,' 🔘').replace(/%F0%9F%94%99/g,' 🔙').replace(/%F0%9F%94%9A/g,' 🔚').replace(/%F0%9F%94%9B/g,' 🔛').replace(/%F0%9F%94%9C/g,' 🔜').replace(/%F0%9F%94%9D/g,' 🔝').replace(/%F0%9F%94%9E/g,' 🔞').replace(/%F0%9F%94%9F/g,' 🔟').replace(/%F0%9F%94%A0/g,' 🔠').replace(/%F0%9F%94%A1/g,' 🔡').replace(/%F0%9F%94%A2/g,' 🔢').replace(/%F0%9F%94%A3/g,' 🔣').replace(/%F0%9F%94%A4/g,' 🔤').replace(/%F0%9F%94%A5/g,' 🔥').replace(/%F0%9F%94%A6/g,' 🔦').replace(/%F0%9F%94%A7/g,' 🔧').replace(/%F0%9F%94%A8/g,' 🔨').replace(/%F0%9F%94%A9/g,' 🔩').replace(/%F0%9F%94%AA/g,' 🔪').replace(/%F0%9F%94%AB/g,' 🔫').replace(/%F0%9F%94%AC/g,' 🔬').replace(/%F0%9F%94%AD/g,' 🔭').replace(/%F0%9F%94%AE/g,' 🔮').replace(/%F0%9F%94%AF/g,' 🔯').replace(/%F0%9F%94%B0/g,' 🔰').replace(/%F0%9F%94%B1/g,' 🔱').replace(/%F0%9F%94%B2/g,' 🔲').replace(/%F0%9F%94%B3/g,' 🔳').replace(/%F0%9F%94%B4/g,' 🔴').replace(/%F0%9F%94%B5/g,' 🔵').replace(/%F0%9F%94%B6/g,' 🔶').replace(/%F0%9F%94%B7/g,' 🔷').replace(/%F0%9F%94%B8/g,' 🔸').replace(/%F0%9F%94%B9/g,' 🔹').replace(/%F0%9F%94%BA/g,' 🔺').replace(/%F0%9F%94%BB/g,' 🔻').replace(/%F0%9F%94%BC/g,' 🔼').replace(/%F0%9F%94%BD/g,' 🔽')
  .replace(/%F0%9F%95%80/g,' 🕀').replace(/%F0%9F%95%81/g,' 🕁').replace(/%F0%9F%95%82/g,' 🕂').replace(/%F0%9F%95%83/g,' 🕃').replace(/%F0%9F%95%90/g,' 🕐').replace(/%F0%9F%95%91/g,' 🕑').replace(/%F0%9F%95%92/g,' 🕒').replace(/%F0%9F%95%93/g,' 🕓').replace(/%F0%9F%95%94/g,' 🕔').replace(/%F0%9F%95%95/g,' 🕕').replace(/%F0%9F%95%96/g,' 🕖').replace(/%F0%9F%95%97/g,' 🕗').replace(/%F0%9F%95%98/g,' 🕘').replace(/%F0%9F%95%99/g,' 🕙').replace(/%F0%9F%95%9A/g,' 🕚').replace(/%F0%9F%95%9B/g,' 🕛').replace(/%F0%9F%95%9C/g,' 🕜').replace(/%F0%9F%95%9D/g,' 🕝').replace(/%F0%9F%95%9E/g,' 🕞').replace(/%F0%9F%95%9F/g,' 🕟').replace(/%F0%9F%95%A0/g,' 🕠').replace(/%F0%9F%95%A1/g,' 🕡').replace(/%F0%9F%95%A2/g,' 🕢').replace(/%F0%9F%95%A3/g,' 🕣').replace(/%F0%9F%95%A4/g,' 🕤').replace(/%F0%9F%95%A5/g,' 🕥').replace(/%F0%9F%95%A6/g,' 🕦').replace(/%F0%9F%95%A7/g,' 🕧').replace(/%F0%9F%97%BB/g,' 🗻').replace(/%F0%9F%97%BC/g,' 🗼').replace(/%F0%9F%97%BD/g,' 🗽').replace(/%F0%9F%97%BE/g,' 🗾').replace(/%F0%9F%97%BF/g,' 🗿').replace(/%E2%9C%81/g,' ✁').replace(/%E2%9C%82/g,' ✂').replace(/%E2%9C%83/g,' ✃').replace(/%E2%9C%84/g,' ✄').replace(/%E2%9C%85/g,' ✅').replace(/%E2%9C%86/g,' ✆').replace(/%E2%9C%87/g,' ✇').replace(/%E2%9C%88/g,' ✈').replace(/%E2%9C%89/g,' ✉').replace(/%E2%9C%8A/g,' ✊').replace(/%E2%9C%8B/g,' ✋').replace(/%E2%9C%8C/g,' ✌').replace(/%E2%9C%8D/g,' ✍').replace(/%E2%9C%8E/g,' ✎').replace(/%E2%9C%8F/g,' ✏').replace(/%E2%9C%90/g,' ✐').replace(/%E2%9C%91/g,' ✑').replace(/%E2%9C%92/g,' ✒').replace(/%E2%9C%93/g,' ✓').replace(/%E2%9C%94/g,' ✔').replace(/%E2%9C%95/g,' ✕')
  .replace(/%E2%9C%96/g,' ✖').replace(/%E2%9C%97/g,' ✗').replace(/%E2%9C%98/g,' ✘').replace(/%E2%9C%99/g,' ✙').replace(/%E2%9C%9A/g,' ✚').replace(/%E2%9C%9B/g,' ✛').replace(/%E2%9C%9C/g,' ✜').replace(/%E2%9C%9D/g,' ✝').replace(/%E2%9C%9E/g,' ✞').replace(/%E2%9C%9F/g,' ✟').replace(/%E2%9C%A0/g,' ✠').replace(/%E2%9C%A1/g,' ✡').replace(/%E2%9C%A2/g,' ✢').replace(/%E2%9C%A3/g,' ✣').replace(/%E2%9C%A4/g,' ✤').replace(/%E2%9C%A5/g,' ✥').replace(/%E2%9C%A6/g,' ✦').replace(/%E2%9C%A7/g,' ✧').replace(/%E2%9C%A8/g,' ✨').replace(/%E2%9C%A9/g,' ✩').replace(/%E2%9C%AA/g,' ✪').replace(/%E2%9C%AB/g,' ✫').replace(/%E2%9C%AC/g,' ✬').replace(/%E2%9C%AD/g,' ✭').replace(/%E2%9C%AE/g,' ✮').replace(/%E2%9C%AF/g,' ✯').replace(/%E2%9C%B0/g,' ✰').replace(/%E2%9C%B1/g,' ✱').replace(/%E2%9C%B2/g,' ✲').replace(/%E2%9C%B3/g,' ✳').replace(/%E2%9C%B4/g,' ✴').replace(/%E2%9C%B5/g,' ✵').replace(/%E2%9C%B6/g,' ✶').replace(/%E2%9C%B7/g,' ✷').replace(/%E2%9C%B8/g,' ✸').replace(/%E2%9C%B9/g,' ✹').replace(/%E2%9C%BA/g,' ✺').replace(/%E2%9C%BB/g,' ✻').replace(/%E2%9C%BC/g,' ✼').replace(/%E2%9C%BD/g,' ✽').replace(/%E2%9C%BE/g,' ✾').replace(/%E2%9C%BF/g,' ✿').replace(/%E2%9D%80/g,' ❀').replace(/%E2%9D%81/g,' ❁').replace(/%E2%9D%82/g,' ❂').replace(/%E2%9D%83/g,' ❃').replace(/%E2%9D%84/g,' ❄').replace(/%E2%9D%85/g,' ❅').replace(/%E2%9D%86/g,' ❆').replace(/%E2%9D%87/g,' ❇').replace(/%E2%9D%88/g,' ❈').replace(/%E2%9D%89/g,' ❉').replace(/%E2%9D%8A/g,' ❊').replace(/%E2%9D%8B/g,' ❋').replace(/%E2%9D%8C/g,' ❌').replace(/%E2%9D%8D/g,' ❍').replace(/%E2%9D%8E/g,' ❎').replace(/%E2%9D%8F/g,' ❏').replace(/%E2%9D%90/g,' ❐').replace(/%E2%9D%91/g,' ❑')
  .replace(/%E2%9D%92/g,' ❒').replace(/%E2%9D%93/g,' ❓').replace(/%E2%9D%94/g,' ❔').replace(/%E2%9D%95/g,' ❕').replace(/%E2%9D%96/g,' ❖').replace(/%E2%9D%97/g,' ❗').replace(/%E2%9D%98/g,' ❘').replace(/%E2%9D%99/g,' ❙').replace(/%E2%9D%9A/g,' ❚').replace(/%E2%9D%9B/g,' ❛').replace(/%E2%9D%9C/g,' ❜').replace(/%E2%9D%9D/g,' ❝').replace(/%E2%9D%9E/g,' ❞').replace(/%E2%9D%9F/g,' ❟').replace(/%E2%9D%A0/g,' ❠').replace(/%E2%9D%A1/g,' ❡').replace(/%E2%9D%A2/g,' ❢').replace(/%E2%9D%A3/g,' ❣').replace(/%E2%9D%A4/g,' ❤').replace(/%E2%9D%A5/g,' ❥').replace(/%E2%9D%A6/g,' ❦').replace(/%E2%9D%A7/g,' ❧').replace(/%E2%9D%A8/g,' ❨').replace(/%E2%9D%A9/g,' ❩').replace(/%E2%9D%AA/g,' ❪').replace(/%E2%9D%AB/g,' ❫').replace(/%E2%9D%AC/g,' ❬').replace(/%E2%9D%AD/g,' ❭').replace(/%E2%9D%AE/g,' ❮').replace(/%E2%9D%AF/g,' ❯').replace(/%E2%9D%B0/g,' ❰').replace(/%E2%9D%B1/g,' ❱').replace(/%E2%9D%B2/g,' ❲').replace(/%E2%9D%B3/g,' ❳').replace(/%E2%9D%B4/g,' ❴').replace(/%E2%9D%B5/g,' ❵').replace(/%E2%9D%B6/g,' ❶').replace(/%E2%9D%B7/g,' ❷').replace(/%E2%9D%B8/g,' ❸').replace(/%E2%9D%B9/g,' ❹').replace(/%E2%9D%BA/g,' ❺').replace(/%E2%9D%BB/g,' ❻').replace(/%E2%9D%BC/g,' ❼').replace(/%E2%9D%BD/g,' ❽').replace(/%E2%9D%BE/g,' ❾').replace(/%E2%9D%BF/g,' ❿').replace(/%E2%9E%80/g,' ➀').replace(/%E2%9E%81/g,' ➁').replace(/%E2%9E%82/g,' ➂').replace(/%E2%9E%83/g,' ➃').replace(/%E2%9E%84/g,' ➄').replace(/%E2%9E%85/g,' ➅').replace(/%E2%9E%86/g,' ➆').replace(/%E2%9E%87/g,' ➇').replace(/%E2%9E%88/g,' ➈').replace(/%E2%9E%89/g,' ➉').replace(/%E2%9E%8A/g,' ➊').replace(/%E2%9E%8B/g,' ➋').replace(/%E2%9E%8C/g,' ➌').replace(/%E2%9E%8D/g,' ➍').replace(/%E2%9E%8E/g,' ➎')
  .replace(/%E2%9E%8F/g,' ➏').replace(/%E2%9E%90/g,' ➐').replace(/%E2%9E%91/g,' ➑').replace(/%E2%9E%92/g,' ➒').replace(/%E2%9E%93/g,' ➓').replace(/%E2%9E%94/g,' ➔').replace(/%E2%9E%98/g,' ➘').replace(/%E2%9E%99/g,' ➙').replace(/%E2%9E%9A/g,' ➚').replace(/%E2%9E%9B/g,' ➛').replace(/%E2%9E%9C/g,' ➜').replace(/%E2%9E%9D/g,' ➝').replace(/%E2%9E%9E/g,' ➞').replace(/%E2%9E%9F/g,' ➟').replace(/%E2%9E%A0/g,' ➠').replace(/%E2%9E%A1/g,' ➡').replace(/%E2%9E%A2/g,' ➢').replace(/%E2%9E%A3/g,' ➣').replace(/%E2%9E%A4/g,' ➤').replace(/%E2%9E%A5/g,' ➥').replace(/%E2%9E%A6/g,' ➦').replace(/%E2%9E%A7/g,' ➧').replace(/%E2%9E%A8/g,' ➨').replace(/%E2%9E%A9/g,' ➩').replace(/%E2%9E%AA/g,' ➪').replace(/%E2%9E%AB/g,' ➫').replace(/%E2%9E%AC/g,' ➬').replace(/%E2%9E%AD/g,' ➭').replace(/%E2%9E%AE/g,' ➮').replace(/%E2%9E%AF/g,' ➯').replace(/%E2%9E%B0/g,' ➰').replace(/%E2%9E%B1/g,' ➱').replace(/%E2%9E%B2/g,' ➲').replace(/%E2%9E%B3/g,' ➳').replace(/%E2%9E%B4/g,' ➴').replace(/%E2%9E%B5/g,' ➵').replace(/%E2%9E%B6/g,' ➶').replace(/%E2%9E%B7/g,' ➷').replace(/%E2%9E%B8/g,' ➸').replace(/%E2%9E%B9/g,' ➹').replace(/%E2%9E%BA/g,' ➺').replace(/%E2%9E%BB/g,' ➻').replace(/%E2%9E%BC/g,' ➼').replace(/%E2%9E%BD/g,' ➽').replace(/%E2%9E%BE/g,' ➾').replace(/%E2%9E%BF/g,' ➿').replace(/%E2%98%80/g,' ☀').replace(/%E2%98%81/g,' ☁').replace(/%E2%98%82/g,' ☂').replace(/%E2%98%83/g,' ☃').replace(/%E2%98%84/g,' ☄').replace(/%E2%98%85/g,' ★').replace(/%E2%98%86/g,' ☆').replace(/%E2%98%87/g,' ☇').replace(/%E2%98%88/g,' ☈').replace(/%E2%98%89/g,' ☉').replace(/%E2%98%8A/g,' ☊').replace(/%E2%98%8B/g,' ☋').replace(/%E2%98%8C/g,' ☌').replace(/%E2%98%8D/g,' ☍')
  .replace(/%E2%98%8E/g,' ☎').replace(/%E2%98%8F/g,' ☏').replace(/%E2%98%90/g,' ☐').replace(/%E2%98%91/g,' ☑').replace(/%E2%98%92/g,' ☒').replace(/%E2%98%93/g,' ☓').replace(/%E2%98%94/g,' ☔').replace(/%E2%98%95/g,' ☕').replace(/%E2%98%96/g,' ☖').replace(/%E2%98%97/g,' ☗').replace(/%E2%98%98/g,' ☘').replace(/%E2%98%99/g,' ☙').replace(/%E2%98%9A/g,' ☚').replace(/%E2%98%9B/g,' ☛').replace(/%E2%98%9C/g,' ☜').replace(/%E2%98%9D/g,' ☝').replace(/%E2%98%9E/g,' ☞').replace(/%E2%98%9F/g,' ☟').replace(/%E2%98%A0/g,' ☠').replace(/%E2%98%A1/g,' ☡').replace(/%E2%98%A2/g,' ☢').replace(/%E2%98%A3/g,' ☣').replace(/%E2%98%A4/g,' ☤').replace(/%E2%98%A5/g,' ☥').replace(/%E2%98%A6/g,' ☦').replace(/%E2%98%A7/g,' ☧').replace(/%E2%98%A8/g,' ☨').replace(/%E2%98%A9/g,' ☩').replace(/%E2%98%AA/g,' ☪').replace(/%E2%98%AB/g,' ☫').replace(/%E2%98%AC/g,' ☬').replace(/%E2%98%AD/g,' ☭').replace(/%E2%98%AE/g,' ☮').replace(/%E2%98%AF/g,' ☯').replace(/%E2%98%B0/g,' ☰').replace(/%E2%98%B1/g,' ☱').replace(/%E2%98%B2/g,' ☲').replace(/%E2%98%B3/g,' ☳').replace(/%E2%98%B4/g,' ☴').replace(/%E2%98%B5/g,' ☵').replace(/%E2%98%B6/g,' ☶').replace(/%E2%98%B7/g,' ☷').replace(/%E2%98%B8/g,' ☸').replace(/%E2%98%B9/g,' ☹').replace(/%E2%98%BA/g,' ☺').replace(/%E2%98%BB/g,' ☻').replace(/%E2%98%BC/g,' ☼').replace(/%E2%98%BD/g,' ☽').replace(/%E2%98%BE/g,' ☾').replace(/%E2%98%BF/g,' ☿').replace(/%E2%99%80/g,' ♀').replace(/%E2%99%81/g,' ♁').replace(/%E2%99%82/g,' ♂').replace(/%E2%99%83/g,' ♃').replace(/%E2%99%84/g,' ♄').replace(/%E2%99%85/g,' ♅').replace(/%E2%99%86/g,' ♆').replace(/%E2%99%87/g,' ♇').replace(/%E2%99%88/g,' ♈').replace(/%E2%99%89/g,' ♉').replace(/%E2%99%8A/g,' ♊')
  .replace(/%E2%99%8B/g,' ♋').replace(/%E2%99%8C/g,' ♌').replace(/%E2%99%8D/g,' ♍').replace(/%E2%99%8E/g,' ♎').replace(/%E2%99%8F/g,' ♏').replace(/%E2%99%90/g,' ♐').replace(/%E2%99%91/g,' ♑').replace(/%E2%99%92/g,' ♒').replace(/%E2%99%93/g,' ♓').replace(/%E2%99%94/g,' ♔').replace(/%E2%99%95/g,' ♕').replace(/%E2%99%96/g,' ♖').replace(/%E2%99%97/g,' ♗').replace(/%E2%99%98/g,' ♘').replace(/%E2%99%99/g,' ♙').replace(/%E2%99%9A/g,' ♚').replace(/%E2%99%9B/g,' ♛').replace(/%E2%99%9C/g,' ♜').replace(/%E2%99%9D/g,' ♝').replace(/%E2%99%9E/g,' ♞').replace(/%E2%99%9F/g,' ♟').replace(/%E2%99%A0/g,' ♠').replace(/%E2%99%A1/g,' ♡').replace(/%E2%99%A2/g,' ♢').replace(/%E2%99%A3/g,' ♣').replace(/%E2%99%A4/g,' ♤').replace(/%E2%99%A5/g,' ♥').replace(/%E2%99%A6/g,' ♦').replace(/%E2%99%A7/g,' ♧').replace(/%E2%99%A8/g,' ♨').replace(/%E2%99%A9/g,' ♩').replace(/%E2%99%AA/g,' ♪').replace(/%E2%99%AB/g,' ♫').replace(/%E2%99%AC/g,' ♬').replace(/%E2%99%AD/g,' ♭').replace(/%E2%99%AE/g,' ♮').replace(/%E2%99%AF/g,' ♯').replace(/%E2%99%B0/g,' ♰').replace(/%E2%99%B1/g,' ♱').replace(/%E2%99%B2/g,' ♲').replace(/%E2%99%B3/g,' ♳').replace(/%E2%99%B4/g,' ♴').replace(/%E2%99%B5/g,' ♵').replace(/%E2%99%B6/g,' ♶').replace(/%E2%99%B7/g,' ♷').replace(/%E2%99%B8/g,' ♸').replace(/%E2%99%B9/g,' ♹').replace(/%E2%99%BA/g,' ♺').replace(/%E2%99%BB/g,' ♻').replace(/%E2%99%BC/g,' ♼').replace(/%E2%99%BD/g,' ♽').replace(/%E2%99%BE/g,' ♾').replace(/%E2%99%BF/g,' ♿').replace(/%E2%9A%80/g,' ⚀').replace(/%E2%9A%81/g,' ⚁').replace(/%E2%9A%82/g,' ⚂').replace(/%E2%9A%83/g,' ⚃').replace(/%E2%9A%84/g,' ⚄').replace(/%E2%9A%85/g,' ⚅').replace(/%E2%9A%86/g,' ⚆').replace(/%E2%9A%87/g,' ⚇')
  .replace(/%E2%9A%88/g,' ⚈').replace(/%E2%9A%89/g,' ⚉').replace(/%E2%9A%8A/g,' ⚊').replace(/%E2%9A%8B/g,' ⚋').replace(/%E2%9A%8C/g,' ⚌').replace(/%E2%9A%8D/g,' ⚍').replace(/%E2%9A%8E/g,' ⚎').replace(/%E2%9A%8F/g,' ⚏').replace(/%E2%9A%90/g,' ⚐').replace(/%E2%9A%91/g,' ⚑').replace(/%E2%9A%92/g,' ⚒').replace(/%E2%9A%93/g,' ⚓').replace(/%E2%9A%94/g,' ⚔').replace(/%E2%9A%95/g,' ⚕').replace(/%E2%9A%96/g,' ⚖').replace(/%E2%9A%97/g,' ⚗').replace(/%E2%9A%98/g,' ⚘').replace(/%E2%9A%99/g,' ⚙').replace(/%E2%9A%9A/g,' ⚚').replace(/%E2%9A%9B/g,' ⚛').replace(/%E2%9A%9C/g,' ⚜').replace(/%E2%9A%9D/g,' ⚝').replace(/%E2%9A%9E/g,' ⚞').replace(/%E2%9A%9F/g,' ⚟').replace(/%E2%9A%A0/g,' ⚠').replace(/%E2%9A%A1/g,' ⚡').replace(/%E2%9A%A2/g,' ⚢').replace(/%E2%9A%A3/g,' ⚣').replace(/%E2%9A%A4/g,' ⚤').replace(/%E2%9A%A5/g,' ⚥').replace(/%E2%9A%A6/g,' ⚦').replace(/%E2%9A%A7/g,' ⚧').replace(/%E2%9A%A8/g,' ⚨').replace(/%E2%9A%A9/g,' ⚩').replace(/%E2%9A%AA/g,' ⚪').replace(/%E2%9A%AB/g,' ⚫').replace(/%E2%9A%AC/g,' ⚬').replace(/%E2%9A%AD/g,' ⚭').replace(/%E2%9A%AE/g,' ⚮').replace(/%E2%9A%AF/g,' ⚯').replace(/%E2%9A%B0/g,' ⚰').replace(/%E2%9A%B1/g,' ⚱').replace(/%E2%9A%B2/g,' ⚲').replace(/%E2%9A%B3/g,' ⚳').replace(/%E2%9A%B4/g,' ⚴').replace(/%E2%9A%B5/g,' ⚵').replace(/%E2%9A%B6/g,' ⚶').replace(/%E2%9A%B7/g,' ⚷').replace(/%E2%9A%B8/g,' ⚸').replace(/%E2%9A%B9/g,' ⚹').replace(/%E2%9A%BA/g,' ⚺').replace(/%E2%9A%BB/g,' ⚻').replace(/%E2%9A%BC/g,' ⚼').replace(/%E2%9A%BD/g,' ⚽').replace(/%E2%9A%BE/g,' ⚾').replace(/%E2%9A%BF/g,' ⚿').replace(/%E2%9B%80/g,' ⛀').replace(/%E2%9B%81/g,' ⛁').replace(/%E2%9B%82/g,' ⛂').replace(/%E2%9B%83/g,' ⛃').replace(/%E2%9B%84/g,' ⛄')
  .replace(/%E2%9B%85/g,' ⛅').replace(/%E2%9B%86/g,' ⛆').replace(/%E2%9B%87/g,' ⛇').replace(/%E2%9B%88/g,' ⛈').replace(/%E2%9B%89/g,' ⛉').replace(/%E2%9B%8A/g,' ⛊').replace(/%E2%9B%8B/g,' ⛋').replace(/%E2%9B%8C/g,' ⛌').replace(/%E2%9B%8D/g,' ⛍').replace(/%E2%9B%8E/g,' ⛎').replace(/%E2%9B%8F/g,' ⛏').replace(/%E2%9B%90/g,' ⛐').replace(/%E2%9B%91/g,' ⛑').replace(/%E2%9B%92/g,' ⛒').replace(/%E2%9B%93/g,' ⛓').replace(/%E2%9B%94/g,' ⛔').replace(/%E2%9B%95/g,' ⛕').replace(/%E2%9B%96/g,' ⛖').replace(/%E2%9B%97/g,' ⛗').replace(/%E2%9B%98/g,' ⛘').replace(/%E2%9B%99/g,' ⛙').replace(/%E2%9B%9A/g,' ⛚').replace(/%E2%9B%9B/g,' ⛛').replace(/%E2%9B%9C/g,' ⛜').replace(/%E2%9B%9D/g,' ⛝').replace(/%E2%9B%9E/g,' ⛞').replace(/%E2%9B%9F/g,' ⛟').replace(/%E2%9B%A0/g,' ⛠').replace(/%E2%9B%A1/g,' ⛡').replace(/%E2%9B%A2/g,' ⛢').replace(/%E2%9B%A3/g,' ⛣').replace(/%E2%9B%A4/g,' ⛤').replace(/%E2%9B%A5/g,' ⛥').replace(/%E2%9B%A6/g,' ⛦').replace(/%E2%9B%A7/g,' ⛧').replace(/%E2%9B%A8/g,' ⛨').replace(/%E2%9B%A9/g,' ⛩').replace(/%E2%9B%AA/g,' ⛪').replace(/%E2%9B%AB/g,' ⛫').replace(/%E2%9B%AC/g,' ⛬').replace(/%E2%9B%AD/g,' ⛭').replace(/%E2%9B%AE/g,' ⛮').replace(/%E2%9B%AF/g,' ⛯').replace(/%E2%9B%B0/g,' ⛰').replace(/%E2%9B%B1/g,' ⛱').replace(/%E2%9B%B2/g,' ⛲').replace(/%E2%9B%B3/g,' ⛳').replace(/%E2%9B%B4/g,' ⛴').replace(/%E2%9B%B5/g,' ⛵').replace(/%E2%9B%B6/g,' ⛶').replace(/%E2%9B%B7/g,' ⛷').replace(/%E2%9B%B8/g,' ⛸').replace(/%E2%9B%B9/g,' ⛹').replace(/%E2%9B%BA/g,' ⛺').replace(/%E2%9B%BB/g,' ⛻').replace(/%E2%9B%BC/g,' ⛼').replace(/%E2%9B%BD/g,' ⛽').replace(/%E2%9B%BE/g,' ⛾').replace(/%E2%9B%BF/g,' ⛿').replace(/%F0%9F%9A%80/g,' 🚀')
  .replace(/%F0%9F%9A%81/g,' 🚁').replace(/%F0%9F%9A%82/g,' 🚂').replace(/%F0%9F%9A%83/g,' 🚃').replace(/%F0%9F%9A%84/g,' 🚄').replace(/%F0%9F%9A%85/g,' 🚅').replace(/%F0%9F%9A%86/g,' 🚆').replace(/%F0%9F%9A%87/g,' 🚇').replace(/%F0%9F%9A%88/g,' 🚈').replace(/%F0%9F%9A%89/g,' 🚉').replace(/%F0%9F%9A%8A/g,' 🚊').replace(/%F0%9F%9A%8B/g,' 🚋').replace(/%F0%9F%9A%8C/g,' 🚌').replace(/%F0%9F%9A%8D/g,' 🚍').replace(/%F0%9F%9A%8E/g,' 🚎').replace(/%F0%9F%9A%8F/g,' 🚏').replace(/%F0%9F%9A%90/g,' 🚐').replace(/%F0%9F%9A%91/g,' 🚑').replace(/%F0%9F%9A%92/g,' 🚒').replace(/%F0%9F%9A%93/g,' 🚓').replace(/%F0%9F%9A%94/g,' 🚔').replace(/%F0%9F%9A%95/g,' 🚕').replace(/%F0%9F%9A%96/g,' 🚖').replace(/%F0%9F%9A%97/g,' 🚗').replace(/%F0%9F%9A%98/g,' 🚘').replace(/%F0%9F%9A%99/g,' 🚙').replace(/%F0%9F%9A%9A/g,' 🚚').replace(/%F0%9F%9A%9B/g,' 🚛').replace(/%F0%9F%9A%9C/g,' 🚜').replace(/%F0%9F%9A%9D/g,' 🚝').replace(/%F0%9F%9A%9E/g,' 🚞').replace(/%F0%9F%9A%9F/g,' 🚟').replace(/%F0%9F%9A%A0/g,' 🚠').replace(/%F0%9F%9A%A1/g,' 🚡').replace(/%F0%9F%9A%A2/g,' 🚢').replace(/%F0%9F%9A%A3/g,' 🚣').replace(/%F0%9F%9A%A4/g,' 🚤').replace(/%F0%9F%9A%A5/g,' 🚥').replace(/%F0%9F%9A%A6/g,' 🚦').replace(/%F0%9F%9A%A7/g,' 🚧').replace(/%F0%9F%9A%A8/g,' 🚨').replace(/%F0%9F%9A%A9/g,' 🚩').replace(/%F0%9F%9A%AA/g,' 🚪').replace(/%F0%9F%9A%AB/g,' 🚫').replace(/%F0%9F%9A%AC/g,' 🚬').replace(/%F0%9F%9A%AD/g,' 🚭').replace(/%F0%9F%9A%AE/g,' 🚮').replace(/%F0%9F%9A%AF/g,' 🚯').replace(/%F0%9F%9A%B0/g,' 🚰').replace(/%F0%9F%9A%B1/g,' 🚱').replace(/%F0%9F%9A%B2/g,' 🚲').replace(/%F0%9F%9A%B3/g,' 🚳').replace(/%F0%9F%9A%B4/g,' 🚴').replace(/%F0%9F%9A%B5/g,' 🚵')
  .replace(/%F0%9F%9A%B6/g,' 🚶').replace(/%F0%9F%9A%B7/g,' 🚷').replace(/%F0%9F%9A%B8/g,' 🚸').replace(/%F0%9F%9A%B9/g,' 🚹').replace(/%F0%9F%9A%BA/g,' 🚺').replace(/%F0%9F%9A%BB/g,' 🚻').replace(/%F0%9F%9A%BC/g,' 🚼').replace(/%F0%9F%9A%BD/g,' 🚽').replace(/%F0%9F%9A%BE/g,' 🚾').replace(/%F0%9F%9A%BF/g,' 🚿').replace(/%F0%9F%9B%80/g,' 🛀').replace(/%F0%9F%9B%81/g,' 🛁').replace(/%F0%9F%9B%82/g,' 🛂').replace(/%F0%9F%9B%83/g,' 🛃').replace(/%F0%9F%9B%84/g,' 🛄').replace(/%F0%9F%9B%85/g,' 🛅').replace(/%F0%9F%98%80/g,' 😀').replace(/%F0%9F%98%81/g,' 😁').replace(/%F0%9F%98%82/g,' 😂').replace(/%F0%9F%98%83/g,' 😃').replace(/%F0%9F%98%84/g,' 😄').replace(/%F0%9F%98%85/g,' 😅').replace(/%F0%9F%98%86/g,' 😆').replace(/%F0%9F%98%87/g,' 😇').replace(/%F0%9F%98%88/g,' 😈').replace(/%F0%9F%98%89/g,' 😉').replace(/%F0%9F%98%8A/g,' 😊').replace(/%F0%9F%98%8B/g,' 😋').replace(/%F0%9F%98%8C/g,' 😌').replace(/%F0%9F%98%8D/g,' 😍').replace(/%F0%9F%98%8E/g,' 😎').replace(/%F0%9F%98%8F/g,' 😏').replace(/%F0%9F%98%90/g,' 😐').replace(/%F0%9F%98%91/g,' 😑').replace(/%F0%9F%98%92/g,' 😒').replace(/%F0%9F%98%93/g,' 😓').replace(/%F0%9F%98%94/g,' 😔').replace(/%F0%9F%98%95/g,' 😕').replace(/%F0%9F%98%96/g,' 😖').replace(/%F0%9F%98%97/g,' 😗').replace(/%F0%9F%98%98/g,' 😘').replace(/%F0%9F%98%99/g,' 😙').replace(/%F0%9F%98%9A/g,' 😚').replace(/%F0%9F%98%9B/g,' 😛').replace(/%F0%9F%98%9C/g,' 😜').replace(/%F0%9F%98%9D/g,' 😝').replace(/%F0%9F%98%9E/g,' 😞').replace(/%F0%9F%98%9F/g,' 😟').replace(/%F0%9F%98%A0/g,' 😠').replace(/%F0%9F%98%A1/g,' 😡').replace(/%F0%9F%98%A2/g,' 😢').replace(/%F0%9F%98%A3/g,' 😣').replace(/%F0%9F%98%A4/g,' 😤').replace(/%F0%9F%98%A5/g,' 😥')
  .replace(/%F0%9F%98%A6/g,' 😦').replace(/%F0%9F%98%A7/g,' 😧').replace(/%F0%9F%98%A8/g,' 😨').replace(/%F0%9F%98%A9/g,' 😩').replace(/%F0%9F%98%AA/g,' 😪').replace(/%F0%9F%98%AB/g,' 😫').replace(/%F0%9F%98%AC/g,' 😬').replace(/%F0%9F%98%AD/g,' 😭').replace(/%F0%9F%98%AE/g,' 😮').replace(/%F0%9F%98%AF/g,' 😯').replace(/%F0%9F%98%B0/g,' 😰').replace(/%F0%9F%98%B1/g,' 😱').replace(/%F0%9F%98%B2/g,' 😲').replace(/%F0%9F%98%B3/g,' 😳').replace(/%F0%9F%98%B4/g,' 😴').replace(/%F0%9F%98%B5/g,' 😵').replace(/%F0%9F%98%B6/g,' 😶').replace(/%F0%9F%98%B7/g,' 😷').replace(/%F0%9F%98%B8/g,' 😸').replace(/%F0%9F%98%B9/g,' 😹').replace(/%F0%9F%98%BA/g,' 😺').replace(/%F0%9F%98%BB/g,' 😻').replace(/%F0%9F%98%BC/g,' 😼').replace(/%F0%9F%98%BD/g,' 😽').replace(/%F0%9F%98%BE/g,' 😾').replace(/%F0%9F%98%BF/g,' 😿').replace(/%F0%9F%99%80/g,' 🙀').replace(/%F0%9F%99%85/g,' 🙅').replace(/%F0%9F%99%86/g,' 🙆').replace(/%F0%9F%99%87/g,' 🙇').replace(/%F0%9F%99%88/g,' 🙈').replace(/%F0%9F%99%89/g,' 🙉').replace(/%F0%9F%99%8A/g,' 🙊').replace(/%F0%9F%99%8B/g,' 🙋').replace(/%F0%9F%99%8C/g,' 🙌').replace(/%F0%9F%99%8D/g,' 🙍').replace(/%F0%9F%99%8E/g,' 🙎').replace(/%F0%9F%99%8F/g,' 🙏').replace(/%E2%96%A0/g,' ■').replace(/%E2%96%A1/g,' □').replace(/%E2%96%A2/g,' ▢').replace(/%E2%96%A3/g,' ▣').replace(/%E2%96%A4/g,' ▤').replace(/%E2%96%A5/g,' ▥').replace(/%E2%96%A6/g,' ▦').replace(/%E2%96%A7/g,' ▧').replace(/%E2%96%A8/g,' ▨').replace(/%E2%96%A9/g,' ▩').replace(/%E2%96%AA/g,' ▪').replace(/%E2%96%AB/g,' ▫').replace(/%E2%96%AC/g,' ▬').replace(/%E2%96%AD/g,' ▭').replace(/%E2%96%AE/g,' ▮').replace(/%E2%96%AF/g,' ▯').replace(/%E2%96%B0/g,' ▰').replace(/%E2%96%B1/g,' ▱').replace(/%E2%96%B2/g,' ▲')
  .replace(/%E2%96%B3/g,' △').replace(/%E2%96%B4/g,' ▴').replace(/%E2%96%B5/g,' ▵').replace(/%E2%96%B6/g,' ▶').replace(/%E2%96%B7/g,' ▷').replace(/%E2%96%B8/g,' ▸').replace(/%E2%96%B9/g,' ▹').replace(/%E2%96%BA/g,' ►').replace(/%E2%96%BB/g,' ▻').replace(/%E2%96%BC/g,' ▼').replace(/%E2%96%BD/g,' ▽').replace(/%E2%96%BE/g,' ▾').replace(/%E2%96%BF/g,' ▿').replace(/%E2%97%80/g,' ◀').replace(/%E2%97%81/g,' ◁').replace(/%E2%97%82/g,' ◂').replace(/%E2%97%83/g,' ◃').replace(/%E2%97%84/g,' ◄').replace(/%E2%97%85/g,' ◅').replace(/%E2%97%86/g,' ◆').replace(/%E2%97%87/g,' ◇').replace(/%E2%97%88/g,' ◈').replace(/%E2%97%89/g,' ◉').replace(/%E2%97%8A/g,' ◊').replace(/%E2%97%8B/g,' ○').replace(/%E2%97%8C/g,' ◌').replace(/%E2%97%8D/g,' ◍').replace(/%E2%97%8E/g,' ◎').replace(/%E2%97%8F/g,' ●').replace(/%E2%97%90/g,' ◐').replace(/%E2%97%91/g,' ◑').replace(/%E2%97%92/g,' ◒').replace(/%E2%97%93/g,' ◓').replace(/%E2%97%94/g,' ◔').replace(/%E2%97%95/g,' ◕').replace(/%E2%97%96/g,' ◖').replace(/%E2%97%97/g,' ◗').replace(/%E2%97%98/g,' ◘').replace(/%E2%97%99/g,' ◙').replace(/%E2%97%9A/g,' ◚').replace(/%E2%97%9B/g,' ◛').replace(/%E2%97%9C/g,' ◜').replace(/%E2%97%9D/g,' ◝').replace(/%E2%97%9E/g,' ◞').replace(/%E2%97%9F/g,' ◟').replace(/%E2%97%A0/g,' ◠').replace(/%E2%97%A1/g,' ◡').replace(/%E2%97%A2/g,' ◢').replace(/%E2%97%A3/g,' ◣').replace(/%E2%97%A4/g,' ◤').replace(/%E2%97%A5/g,' ◥').replace(/%E2%97%A6/g,' ◦').replace(/%E2%97%A7/g,' ◧').replace(/%E2%97%A8/g,' ◨').replace(/%E2%97%A9/g,' ◩').replace(/%E2%97%AA/g,' ◪').replace(/%E2%97%AB/g,' ◫').replace(/%E2%97%AC/g,' ◬').replace(/%E2%97%AD/g,' ◭').replace(/%E2%97%AE/g,' ◮').replace(/%E2%97%AF/g,' ◯').replace(/%E2%97%B0/g,' ◰').replace(/%E2%97%B1/g,' ◱')
  .replace(/%E2%97%B2/g,' ◲').replace(/%E2%97%B3/g,' ◳').replace(/%E2%97%B4/g,' ◴').replace(/%E2%97%B5/g,' ◵').replace(/%E2%97%B6/g,' ◶').replace(/%E2%97%B7/g,' ◷').replace(/%E2%97%B8/g,' ◸').replace(/%E2%97%B9/g,' ◹').replace(/%E2%97%BA/g,' ◺').replace(/%E2%97%BB/g,' ◻').replace(/%E2%97%BC/g,' ◼').replace(/%E2%97%BD/g,' ◽').replace(/%E2%97%BE/g,' ◾').replace(/%E2%97%BF/g,' ◿')
  }

function whatsapp_posts1(AmazonMsg,Amznapi,Amznphoneid,Amznprodid){
	console.log("yes working");
	console.log("yes working1",AmazonMsg);
	console.log("yes working1",Amznapi);
	console.log("yes working3",Amznphoneid);
	console.log("yes working4",Amznprodid);
      let arrayGroupNumber = [
        {
          "name": "Amazon Offer Alert - 1🛍🛒🔥",
          "id": "916353594230-1570365608@g.us"
        },
        {
          "name": "Amazon Offer Alert - 2🛍🛒🔥",
          "id": "916353594230-1570379159@g.us"
        },
        {
          "name": "Amazon Offer Alert - 3🛍🛒🔥",
          "id": "916353594230-1570969831@g.us"
        },
        {
          "name": "Amazon Offer Alert - 4🛍🛒🔥",
          "id": "916353594230-1570971252@g.us"
        },
        {
          "name": "Amazon Offer Alert -5🛍🛒🔥",
          "id": "916353594230-1571493437@g.us"
        },
        {
          "name": "Amazon Offer Alert - 6🛍🛒🔥",
          "id": "916353594230-1571491746@g.us"
        },
        {
          "name": "Amazon Offer Alert - 7🛍🛒🔥",
          "id": "916353594230-1571491944@g.us"
        },
        {
          "name": "Amazon Offer Alert - 8🛍🛒🔥",
          "id": "916353594230-1571493106@g.us"
        },
        {
          "name": "Amazon Offer Alert - 9🛍🛒🔥",
          "id": "916353594230-1571493284@g.us"
        },
        {
          "name": "Amazon Offer Alert -10🛍🛒🔥",
          "id": "916353594230-1574959445@g.us"
        },
        {
          "name": "Amazon Offer Alert - 11🛍🛒🔥",
          "id": "916353594230-1574959195@g.us"
        },
        {
          "name": "Amazon Offer Alert - 12🛍🛒🔥",
          "id": "918160515625-1584094851@g.us"
        }
      ]
      // let arrayGroupNumber =[
      //           {
      //             "name": "Amazon Offer Alert - 1🛍🛒🔥",
      //             "id": "919163549116-1560880019@g.us"
      //           },
      //           {
      //             "name": "Amazon Offer Alert - 2🛍🛒🔥",
      //             "id": "918238154616-1498903589@g.us"
      //           }
      //         ]
      const months = ["🛍 ", "🛒 ", "🔥 ", "💰 ", "🛍️ ", "🤑 ", "🏷️ ", "💳 ", "🎟️ ","📦 ","😍 ","🕯 ","🍂 ","🎌 ","👑 ","🎊 ","🐦 ","⛄ "];
      const randomMonth = months[Math.floor(Math.random() * months.length)];
     
//       for (let i = 0; i < arrayGroupNumber.length; i++) {
//         var ggff = urlencodedd(AmazonMsg);
//         if(ggff != 'null' && ggff != 'undefined' ){
//         let requestHeaders1 = {
//           "Content-Type": "application/json",
//           "accept": "application/json",
//           "x-maytapi-key": Amznapi
//         }

//         let linkRequest1 = {
//           "to_number": arrayGroupNumber[i].id,
//           "type": "text",
//           "message": randomMonth + ggff
//         }
//         request({
//           uri: "https://api.maytapi.com/api/" + Amznprodid + "/" + Amznphoneid + "/sendMessage",
//           method: "POST",
//           body: JSON.stringify(linkRequest1),
//           headers: requestHeaders1
//         }, (err, response, body) => {
//           let link = JSON.parse(body);
//         })
//       }
//     }
	for (let i = 0; i < arrayGroupNumber.length; i++) {
	  var ggff = urlencodedd(AmazonMsg);
	  if(ggff != 'null' && ggff != 'undefined' ){
	  let requestHeaders1 = {
	    "Content-Type": "application/json",
	    "accept": "application/json"
	  }
	  let linkRequest1;
	  linkRequest1 = {
	    "chatId": arrayGroupNumber[i].id,
	    "body": randomMonth + ggff
	  }
	  request({
	    uri: "https://api.chat-api.com/"+Amznphoneid+"/sendMessage?token="+ Amznprodid,
	    method: "POST",
	    body: JSON.stringify(linkRequest1),
	    headers: requestHeaders1
	  }, (err, response, body) => {
		  console.log('sss',body);
		  console.log('errrr',err);
	    let link = JSON.parse(body);
	  })
	}
	}
  }

function whatsapp_posts2(AmazonMsg,Amznapi,Amznphoneid,Amznprodid){
    let arrayGroupNumber = [
      {
        "name": "Amazon Offer Alert - 13🛍🛒🔥",
        "id": "916353594230-1584971104@g.us"
      },
      {
        "name": "Amazon Offer Alert - 14🛍🛒🔥",
        "id": "916353594230-1584971346@g.us"
      },
      {
        "name": "Amazon Offer Alert -15🛍🛒🔥",
        "id": "916353594230-1584971429@g.us"
      },
      {
        "name": "Amazon Offer Alert - 16🛍🛒🔥",
        "id": "916353594230-1584971505@g.us"
      },
      {
        "name": "Amazon Offer Alert - 17🛍🛒🔥",
        "id": "916353594230-1584971569@g.us"
      },
      {
        "name": "Amazon Offer Alert - 18🛍🛒🔥",
        "id": "916353594230-1584971645@g.us"
      },
      {
        "name": "Amazon Offer Alert - 19🛍🛒🔥",
        "id": "916353594230-1584971700@g.us"
      },
      {
        "name": "Amazon Offer Alert -20🛍🛒🔥",
        "id": "916353594230-1584971760@g.us"
      },
      {
        "name": "Amazon Offer Alert - 21🛍🛒🔥",
        "id": "916353594230-1585500064@g.us"
      },
      {
        "name": "Amazon Offer Alert - 22🛍🛒🔥",
        "id": "916353594230-1585500152@g.us"
      },
      {
        "name": "Amazon Offer Alert - 23🛍🛒🔥",
        "id": "916353594230-1585500294@g.us"
      },
      {
        "name": "Amazon Offer Alert - 24🛍🛒🔥",
        "id": "916353594230-1585500401@g.us"
      }
      ]
      const months = ["🛍 ", "🛒 ", "🔥 ", "💰 ", "🛍️ ", "🤑 ", "🏷️ ", "💳 ", "🎟️ ","📦 ","😍 ","🕯 ","🍂 ","🎌 ","👑 ","🎊 ","🐦 ","⛄ "];
      const randomMonth = months[Math.floor(Math.random() * months.length)];


//       for (let i = 0; i < arrayGroupNumber.length; i++) {
//         var ggff = urlencodedd(AmazonMsg);

//         if(ggff != 'null' && ggff != 'undefined' ){
//         let requestHeaders1 = {
//           "Content-Type": "application/json",
//           "accept": "application/json",
//           "x-maytapi-key": Amznapi
//         }

//         let linkRequest1 = {
//           "to_number": arrayGroupNumber[i].id,
//           "type": "text",
//           "message": randomMonth + ggff
//         }
//         request({
//           uri: "https://api.maytapi.com/api/" + Amznprodid + "/" + Amznphoneid + "/sendMessage",
//           method: "POST",
//           body: JSON.stringify(linkRequest1),
//           headers: requestHeaders1
//         }, (err, response, body) => {
//           let link = JSON.parse(body);
//         })
//       }
//     }
	for (let i = 0; i < arrayGroupNumber.length; i++) {
	  var ggff = urlencodedd(AmazonMsg);
	  if(ggff != 'null' && ggff != 'undefined' ){
	  let requestHeaders1 = {
	    "Content-Type": "application/json",
	    "accept": "application/json"
	  }
	  let linkRequest1;
	  linkRequest1 = {
	    "chatId": arrayGroupNumber[i].id,
	    "body": randomMonth + ggff
	  }
	  request({
	    uri: "https://api.chat-api.com/"+Amznphoneid+"/sendMessage?token="+ Amznprodid,
	    method: "POST",
	    body: JSON.stringify(linkRequest1),
	    headers: requestHeaders1
	  }, (err, response, body) => {
	    let link = JSON.parse(body);
	  })
	}
	}
  }
module.exports = router;



