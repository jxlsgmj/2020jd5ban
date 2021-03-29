/*! Amaze UI v2.4.2 ~ Handlebars helper | by Amaze UI Team | (c)2020. | Licensed under MIT | 2015-07-06T10:25:45+0800 */ 
(function(undefined) {
  'use strict';

  var registerIfCondHelper = function(hbs) {
    hbs.registerHelper('ifCond', function(v1, operator, v2, options) {
      switch (operator) {
        case '==':
          return (v1 == v2) ? options.fn(this) : options.inverse(this);
          break;
        case '===':
          return (v1 === v2) ? options.fn(this) : options.inverse(this);
          break;
        case '<':
          return (v1 < v2) ? options.fn(this) : options.inverse(this);
          break;
        case '<=':
          return (v1 <= v2) ? options.fn(this) : options.inverse(this);
          break;
        case '>':
          return (v1 > v2) ? options.fn(this) : options.inverse(this);
          break;
        case '>=':
          return (v1 >= v2) ? options.fn(this) : options.inverse(this);
          break;
        default:
          return options.inverse(this);
          break;
      }
      return options.inverse(this);
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = registerIfCondHelper;
  }

  this.Handlebars && registerIfCondHelper(this.Handlebars);
}).call(this);

(function(undefined){
  'use strict';

  var registerAMUIPartials = function(hbs) {
    hbs.registerPartial('accordion', "{{#this}}\n  <section data-am-widget=\"accordion\" class=\"am-accordion {{#if theme}}am-accordion-{{theme}}{{else}}am-accordion-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\"{{#if id}} id=\"{{id}}\"{{/if}} data-am-accordion='{ {{#if options.multiple}}\"multiple\": true{{/if}} }'>\n    {{#each content}}\n      <dl class=\"am-accordion-item{{#if active}} am-active{{/if}}{{#if disabled}} am-disabled{{/if}}\">\n        <dt class=\"am-accordion-title\">\n          {{{title}}}\n        </dt>\n        <dd class=\"am-accordion-bd am-collapse {{#if active}}am-in{{/if}}\">\n          <!-- 规避 Collapase 处理有 padding 的折叠内容计算计算有误问题， 加一个容器 -->\n          <div class=\"am-accordion-content\">\n            {{{content}}}\n          </div>\n        </dd>\n      </dl>\n    {{/each}}\n  </section>\n{{/this}}\n");

    hbs.registerPartial('divider', "{{#this}}\n  <hr data-am-widget=\"divider\" style=\"{{#if options.width}}width:{{{options.width}}};{{/if}}{{#if options.height}}height:{{{options.height}}};{{/if}}\" class=\"am-divider {{#if theme}}am-divider-{{theme}}{{else}}am-divider-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\"{{#if id}} id=\"{{id}}\"{{/if}} />\n{{/this}}\n");

    hbs.registerPartial('duoshuo', "{{#this}}\n  <div data-am-widget=\"duoshuo\" class=\"am-duoshuo{{#if theme}} am-duoshuo-{{theme}}{{else}} am-duoshuo-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\"{{#if id}} id=\"{{id}}\"{{/if}} {{#if options.shortName}}data-ds-short-name=\"{{options.shortName}}\"{{/if}}>\n    <div class=\"ds-thread\" {{#if content}}{{#each content}}{{#ifCond @key '==' 'threadKey'}}  data-thread-key=\"{{this}}\"{{else}} data-{{@key}}=\"{{this}}\"{{/ifCond}}{{/each}}{{/if}}>\n    </div>\n  </div>\n{{/this}}");

    hbs.registerPartial('figure', "{{#this}}\n  <figure data-am-widget=\"figure\" class=\"am am-figure {{#if theme}}am-figure-{{theme}}{{else}}am-figure-default{{/if}} {{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\" {{#if id}}\n      id=\"{{id}}\"{{/if}}  data-am-figure=\"{ {{#if options.zoomAble}} pureview: '{{options.zoomAble}}'{{/if}} }\">\n    {{#if content.link}}<a href=\"{{content.link}}\" title=\"{{content.figcaption}}\" class=\"{{className}}\">{{/if}}\n\n    {{#if options.figcaptionPosition}}\n      {{#ifCond options.figcaptionPosition '==' 'top'}}\n        {{#if content.figcaption}}\n          <figcaption class=\"am-figure-capition-top\">\n            {{content.figcaption}}\n          </figcaption>\n        {{/if}}\n      {{/ifCond}}\n    {{/if}}\n\n    {{#if content.img}}\n      <img src=\"{{content.img}}\" {{#if content.rel}}data-rel=\"{{content.rel}}\"{{/if}} alt=\"{{#if content.imgAlt}}{{content.imgAlt}}{{else}}{{content.figcaption}}{{/if}}\"/>\n    {{/if}}\n    {{#if options.figcaptionPosition}}\n      {{#ifCond options.figcaptionPosition '==' 'bottom'}}\n        {{#if content.figcaption}}\n          <figcaption class=\"am-figure-capition-btm\">\n            {{content.figcaption}}\n          </figcaption>\n        {{/if}}\n      {{/ifCond}}\n    {{else}}\n      {{#if content.figcaption}}\n        <figcaption class=\"am-figure-capition-btm\">\n          {{content.figcaption}}\n        </figcaption>\n      {{/if}}\n    {{/if}}\n\n    {{#if content.link}}</a>{{/if}}\n  </figure>\n{{/this}}\n");

    hbs.registerPartial('footer', "{{#this}}\n  <footer data-am-widget=\"footer\"\n          class=\"am-footer {{#if theme}}am-footer-{{theme}}{{else}}am-footer-default {{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\"\n          {{#if id}}id=\"{{id}}\"{{/if}} data-am-footer=\"{ {{#if options.addToHS}}addToHS: 1{{/if}} }\">\n    <div class=\"am-footer-switch\">\n    <span class=\"{{#if options.modal}}am-footer-ysp{{/if}}\" data-rel=\"mobile\"\n          data-am-modal=\"{target: '#am-switch-mode'}\">\n      {{#unless content.switchName}}\n        {{#ifCond content.lang '==' 'en'}}\n          Mobile\n        {{else}}\n          云适配版\n        {{/ifCond}}\n      {{else}}\n        {{content.switchName}}\n      {{/unless}}\n    </span>\n      <span class=\"am-footer-divider\"> | </span>\n      <a id=\"godesktop\" data-rel=\"desktop\" class=\"am-footer-desktop\" href=\"javascript:\">\n        {{#ifCond content.lang '==' 'en'}}\n          Desktop\n        {{else}}\n          电脑版\n        {{/ifCond}}\n      </a>\n    </div>\n    <div class=\"am-footer-miscs {{#if options.textPosition}}am-text-left{{/if}}\">\n\n      {{#if options.techSupportCo}}\n        {{#ifCond content.lang '==' 'en'}}\n          <p>Supported by {{#if options.techSupportSite}}<a href=\"{{options.techSupportSite}}\"\n                                                            title=\"{{options.techSupportCo}}\"\n                                                            target=\"_blank\"> class=\"{{className}}\"{{{options.techSupportCo}}}</a>{{else}}{{{options.techSupportCo}}}{{/if}}\n            .</p>\n        {{else}}\n          <p>由 {{#if options.techSupportSite}}<a href=\"{{options.techSupportSite}}\" title=\"{{options.techSupportCo}}\"\n                                                target=\"_blank\" class=\"{{techSupportClassName}}\">{{{options.techSupportCo}}}</a>{{else}}{{{options.techSupportCo}}}{{/if}}\n            提供技术支持</p>\n        {{/ifCond}}\n      {{/if}}\n      {{#each content.companyInfo}}\n        <p>{{{detail}}}</p>\n      {{/each}}\n    </div>\n  </footer>\n\n  <div id=\"am-footer-modal\"\n       class=\"am-modal am-modal-no-btn am-switch-mode-m {{#if theme}}am-switch-mode-m-{{theme}}{{/if}}\">\n    <div class=\"am-modal-dialog\">\n      <div class=\"am-modal-hd am-modal-footer-hd\">\n        <a href=\"javascript:void(0)\" data-dismiss=\"modal\" class=\"am-close am-close-spin {{className}}\" data-am-modal-close>&times;</a>\n      </div>\n      <div class=\"am-modal-bd\">\n        {{#ifCond content.lang '==' 'en'}}\n          You are visiting\n        {{else}}\n          您正在浏览的是\n        {{/ifCond}}\n\n        <span class=\"am-switch-mode-owner\">\n          {{#if content.owner}}\n            {{content.owner}}\n          {{else}}\n            云适配\n          {{/if}}\n        </span>\n\n        <span class=\"am-switch-mode-slogan\">\n          {{#if content.slogan}}\n            {{{content.slogan}}}\n          {{else}}\n            {{#ifCond content.lang '==' 'en'}}\n              mobilized version for your device.\n            {{else}}\n              为您当前手机订制的移动网站。\n            {{/ifCond}}\n          {{/if}}\n        </span>\n      </div>\n    </div>\n  </div>\n{{/this}}\n");

    hbs.registerPartial('gallery', "{{#this}}\n  <ul data-am-widget=\"gallery\" class=\"am-gallery{{#if options.cols}} am-avg-sm-{{options.cols}}{{else}} am-avg-sm-2{{/if}}\n  am-avg-md-3 am-avg-lg-4 {{#if\n  theme}}am-gallery-{{theme}}{{else}}am-gallery-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\" data-am-gallery=\"{ {{#if options.gallery}}pureview: true{{/if}} }\" {{#if id}}id=\"{{id}}\"{{/if}}>\n    {{#each content}}\n      <li>\n        <div class=\"am-gallery-item\">\n          {{#if link}}\n            <a href=\"{{link}}\" class=\"{{className}}\">\n              {{#if img}}<img src=\"{{img}}\" {{#if rel}}data-rel=\"{{rel}}\"{{/if}} alt=\"{{title}}\"/>{{/if}}\n              {{#if title}}\n                <h3 class=\"am-gallery-title\">{{{title}}}</h3>\n              {{/if}}\n              {{#if desc}}\n                <div class=\"am-gallery-desc\">{{{desc}}}</div>\n              {{/if}}\n            </a>\n          {{else}}\n            {{#if img}}<img src=\"{{img}}\" {{#if rel}}data-rel=\"{{rel}}\"{{/if}} alt=\"{{title}}\"/>{{/if}}\n            {{#if title}}\n              <h3 class=\"am-gallery-title\">{{{title}}}</h3>\n            {{/if}}\n            {{#if desc}}\n              <div class=\"am-gallery-desc\">{{{desc}}}</div>\n            {{/if}}\n          {{/if}}\n        </div>\n      </li>\n    {{/each}}\n  </ul>\n{{/this}}\n");

    hbs.registerPartial('gotop', "{{#this}}\n  <div data-am-widget=\"gotop\" class=\"am-gotop {{#if theme}}am-gotop-{{theme}}{{else}}am-gotop-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\" {{#if id}}id=\"{{id}}\"{{/if}}>\n    <a href=\"#top\" title=\"{{content.title}}\">\n      {{#if content.title}}\n        <span class=\"am-gotop-title\">{{content.title}}</span>\n      {{/if}}\n      {{#if content.customIcon}}\n        <img class=\"am-gotop-icon-custom\" src=\"{{content.customIcon}}\" />\n      {{else}}\n        {{#if content.icon}}\n          <i class=\"am-gotop-icon am-icon-{{content.icon}}\"></i>\n        {{else}}\n          <i class=\"am-gotop-icon am-icon-chevron-up\"></i>\n        {{/if}}\n      {{/if}}\n    </a>\n  </div>\n{{/this}}\n");

    hbs.registerPartial('header', "{{#this}}\n  <header data-am-widget=\"header\"\n          class=\"am-header{{#if theme}} am-header-{{theme}}{{else}} am-header-default{{/if}}{{#if options.fixed}} am-header-fixed{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\"{{#if id}}\n          id=\"{{id}}\"{{/if}}>\n    {{#if content.left}}\n      <div class=\"am-header-left am-header-nav\">\n        {{#each content.left}}\n          <a href=\"{{link}}\" class=\"{{className}}\">\n            {{#if title}}\n              <span class=\"am-header-nav-title\">\n                {{title}}\n              </span>\n            {{/if}}\n\n            {{# if customIcon}}\n              <img class=\"am-header-icon-custom\" src=\"{{customIcon}}\" alt=\"\"/>\n            {{else}}\n              {{#if icon}}\n                <i class=\"am-header-icon am-icon-{{icon}}\"></i>\n              {{/if}}\n            {{/if}}\n          </a>\n        {{/each}}\n      </div>\n    {{/if}}\n\n    {{#if content.title}}\n      <h1 class=\"am-header-title\">\n        {{#if content.link}}\n          <a href=\"{{content.link}}\" class=\"{{content.className}}\">\n            {{{content.title}}}\n          </a>\n        {{else}}\n          {{{content.title}}}\n        {{/if}}\n      </h1>\n    {{/if}}\n\n    {{#if content.right}}\n      <div class=\"am-header-right am-header-nav\">\n        {{#each content.right}}\n          <a href=\"{{link}}\" class=\"{{className}}\">\n            {{#if title}}\n              <span class=\"am-header-nav-title\">\n                {{title}}\n              </span>\n            {{/if}}\n\n            {{# if customIcon}}\n              <img class=\"am-header-icon-custom\" src=\"{{customIcon}}\" alt=\"\"/>\n            {{else}}\n              {{#if icon}}\n                <i class=\"am-header-icon am-icon-{{icon}}\"></i>\n              {{/if}}\n            {{/if}}\n          </a>\n        {{/each}}\n      </div>\n    {{/if}}\n  </header>\n{{/this}}\n");

    hbs.registerPartial('intro', "{{#this }}\n  <div data-am-widget=\"intro\"\n       class=\"am-intro am-cf {{#if theme}}am-intro-{{theme}}{{else}}am-intro-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\"\n       {{#if id}}id=\"{{id}}\"{{/if}}>\n    {{#if content.title}}\n      <div class=\"am-intro-hd\">\n        <h2 class=\"am-intro-title\">{{{content.title}}}</h2>\n        {{#if content.more.link}}\n          {{#ifCond options.position '==' 'top'}}\n            <a class=\"am-intro-more am-intro-more-top {{content.more.className}}\" href=\"{{content.more.link}}\">{{content.more.title}}</a>\n          {{/ifCond}}\n        {{/if}}\n      </div>\n    {{/if}}\n\n    <div class=\"am-g am-intro-bd\">\n      {{#if content.left}}\n        <div\n            class=\"am-intro-left {{#if options.leftCols}}am-u-sm-{{options.leftCols}}{{/if}}\">{{{content.left}}}</div>\n      {{/if}}\n      {{#if content.right}}\n        <div\n            class=\"am-intro-right {{#if options.rightCols}}am-u-sm-{{options.rightCols}}{{/if}}\">{{{content.right}}}</div>\n      {{/if}}\n    </div>\n    {{#ifCond options.position '==' 'bottom'}}\n      <div class=\"am-intro-more-bottom\">\n        <a class=\"am-btn am-btn-default {{content.more.className}}\"\n           href=\"{{content.more.link}}\">{{content.more.title}}</a>\n      </div>\n    {{/ifCond}}\n  </div>\n{{/this}}\n");

    hbs.registerPartial('list_news', "{{#this}}\n  <div data-am-widget=\"list_news\" class=\"am-list-news{{#if theme}} am-list-news-{{theme}}{{else}} am-list-news-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\" {{#if id}}id=\"{{id}}\"{{/if}}>\n  <!--列表标题-->\n  {{#if content.header.title}}\n    <div class=\"am-list-news-hd am-cf\">\n      {{#if content.header.link}} <!--带更多链接-->\n        <a href=\"{{content.header.link}}\" class=\"{{content.header.className}}\">\n          <h2>{{{content.header.title}}}</h2>\n          {{#ifCond content.header.morePosition '==' 'top'}}\n            <span class=\"am-list-news-more am-fr\">{{{content.header.moreText}}}</span>\n          {{/ifCond}}\n        </a>\n      {{else}} <!--不带更多链接-->\n        <h2>{{{content.header.title}}}</h2>\n      {{/if}}\n    </div>\n  {{/if}}\n\n  <div class=\"am-list-news-bd\">\n  <ul class=\"am-list\">\n  {{#ifCond options.type '==' 'thumb'}}\n    {{#ifCond options.thumbPosition '==' 'top'}} <!--缩略图在标题上方-->\n    {{#each content.main}}\n      <li class=\"am-g{{#if date}} am-list-item-dated{{/if}}{{#if desc}} am-list-item-desced{{/if}}{{#if img}} am-list-item-thumbed am-list-item-thumb-top{{/if}}\">\n        {{!--\n          am-list-item-dated - 带日期\n          am-list-item-desced - 带描述\n          am-list-item-thumbed - 带缩略图的\n        --}}\n        {{#if img}}\n        <div class=\"am-list-thumb am-u-sm-12\">\n          <a href=\"{{link}}\" class=\"{{className}}\">\n            <img src=\"{{img}}\" alt=\"{{title}}\"/>\n          </a>\n          {{#if thumbAddition}}\n            <div class=\"am-list-thumb-addon\">{{{thumbAddition}}}</div>\n          {{/if}}\n        </div>\n        {{/if}}\n\n        <div class=\"{{#if img}}{{/if}} am-list-main\">\n          {{#if title}}\n            <h3 class=\"am-list-item-hd\"><a href=\"{{link}}\" class=\"{{className}}\">{{{title}}}</a></h3>\n          {{/if}}\n\n          {{#if date}}\n            <span class=\"am-list-date\">{{date}}</span>\n          {{/if}}\n\n          {{#if desc}}\n            <div class=\"am-list-item-text\">{{{desc}}}</div>\n          {{/if}}\n\n          {{#if mainAddition}}\n            <div class=\"am-list-news-addon\">{{{mainAddition}}}</div>\n          {{/if}}\n        </div>\n      </li>\n    {{/each}}\n    {{/ifCond}}\n\n    {{#ifCond options.thumbPosition '==' 'bottom-left'}} <!--缩略图在标题下方居左-->\n    {{#each content.main}}\n      <li class=\"am-g{{#if date}} am-list-item-dated{{/if}}{{#if desc}} am-list-item-desced{{/if}}{{#if img}} am-list-item-thumbed am-list-item-thumb-bottom-left{{/if}}\">\n        {{!--\n          am-list-item-dated - 带日期\n          am-list-item-desced - 带描述\n          am-list-item-thumbed - 带缩略图的\n        --}}\n        {{#if title}}\n          <h3 class=\"am-list-item-hd\"><a href=\"{{link}}\" class=\"{{className}}\">{{{title}}}</a></h3>\n        {{/if}}\n        {{#if img}}\n        <div class=\"am-u-sm-4 am-list-thumb\">\n          <a href=\"{{link}}\" class=\"{{className}}\">\n            <img src=\"{{img}}\" alt=\"{{title}}\"/>\n          </a>\n          {{#if thumbAddition}}\n            <div class=\"am-list-thumb-addon\">{{{thumbAddition}}}</div>\n          {{/if}}\n        </div>\n        {{/if}}\n\n        <div class=\"{{#if img}} am-u-sm-8 {{/if}} am-list-main\">\n          {{#if date}}\n            <span class=\"am-list-date\">{{date}}</span>\n          {{/if}}\n\n          {{#if desc}}\n            <div class=\"am-list-item-text\">{{{desc}}}</div>\n          {{/if}}\n\n          {{#if mainAddition}}\n            <div class=\"am-list-news-addon\">{{{mainAddition}}}</div>\n          {{/if}}\n        </div>\n      </li>\n    {{/each}}\n    {{/ifCond}}\n\n    {{#ifCond options.thumbPosition '==' 'bottom-right'}} <!--缩略图在标题下方居右-->\n    {{#each content.main}}\n      <li class=\"am-g{{#if date}} am-list-item-dated{{/if}}{{#if desc}} am-list-item-desced{{/if}}{{#if img}} am-list-item-thumbed am-list-item-thumb-bottom-right{{/if}}\">\n        {{!--\n          am-list-item-dated - 带日期\n          am-list-item-desced - 带描述\n          am-list-item-thumbed - 带缩略图的\n        --}}\n        {{#if title}}\n          <h3 class=\"am-list-item-hd\"><a href=\"{{link}}\" class=\"{{className}}\">{{{title}}}</a></h3>\n        {{/if}}\n\n        <div class=\"{{#if img}} am-u-sm-8{{/if}} am-list-main\">\n          {{#if date}}\n            <span class=\"am-list-date\">{{date}}</span>\n          {{/if}}\n\n          {{#if desc}}\n            <div class=\"am-list-item-text\">{{{desc}}}</div>\n          {{/if}}\n\n          {{#if mainAddition}}\n            <div class=\"am-list-news-addon\">{{{mainAddition}}}</div>\n          {{/if}}\n        </div>\n        {{#if img}}\n        <div class=\"am-list-thumb am-u-sm-4\">\n          <a href=\"{{link}}\" class=\"{{className}}\">\n            <img src=\"{{img}}\" alt=\"{{title}}\"/>\n          </a>\n          {{#if thumbAddition}}\n            <div class=\"am-list-thumb-addon\">{{{thumbAddition}}}</div>\n          {{/if}}\n        </div>\n        {{/if}}\n      </li>\n    {{/each}}\n    {{/ifCond}}\n\n    {{#ifCond options.thumbPosition '==' 'left'}} <!--缩略图在标题左边-->\n    {{#each content.main}}\n      <li class=\"am-g{{#if date}} am-list-item-dated{{/if}}{{#if desc}} am-list-item-desced{{/if}}{{#if img}} am-list-item-thumbed am-list-item-thumb-left{{/if}}\">\n        {{!--\n          am-list-item-dated - 带日期\n          am-list-item-desced - 带描述\n          am-list-item-thumbed - 带缩略图的\n        --}}\n        {{#if img}}\n        <div class=\"am-u-sm-4 am-list-thumb\">\n          <a href=\"{{link}}\" class=\"{{className}}\">\n            <img src=\"{{img}}\" alt=\"{{title}}\"/>\n          </a>\n          {{#if thumbAddition}}\n            <div class=\"am-list-thumb-addon\">{{{thumbAddition}}}</div>\n          {{/if}}\n        </div>\n        {{/if}}\n\n        <div class=\"{{#if img}} am-u-sm-8{{/if}} am-list-main\">\n          {{#if title}}\n            <h3 class=\"am-list-item-hd\"><a href=\"{{link}}\" class=\"{{className}}\">{{{title}}}</a></h3>\n          {{/if}}\n          {{#if date}}\n            <span class=\"am-list-date\">{{date}}</span>\n          {{/if}}\n\n          {{#if desc}}\n            <div class=\"am-list-item-text\">{{{desc}}}</div>\n          {{/if}}\n\n          {{#if mainAddition}}\n            <div class=\"am-list-news-addon\">{{{mainAddition}}}</div>\n          {{/if}}\n        </div>\n      </li>\n    {{/each}}\n    {{/ifCond}}\n\n    {{#ifCond options.thumbPosition '==' 'right'}} <!--缩略图在标题右边-->\n    {{#each content.main}}\n      <li class=\"am-g{{#if date}} am-list-item-dated{{/if}}{{#if desc}} am-list-item-desced{{/if}}{{#if img}} am-list-item-thumbed am-list-item-thumb-right{{/if}}\">\n        {{!--\n          am-list-item-dated - 带日期\n          am-list-item-desced - 带描述\n          am-list-item-thumbed - 带缩略图的\n        --}}\n        <div class=\"{{#if img}} am-u-sm-8{{/if}} am-list-main\">\n          {{#if title}}\n            <h3 class=\"am-list-item-hd\"><a href=\"{{link}}\" class=\"{{className}}\">{{{title}}}</a></h3>\n          {{/if}}\n\n          {{#if date}}\n            <span class=\"am-list-date\">{{date}}</span>\n          {{/if}}\n\n          {{#if desc}}\n            <div class=\"am-list-item-text\">{{{desc}}}</div>\n          {{/if}}\n\n          {{#if mainAddition}}\n            <div class=\"am-list-news-addon\">{{{mainAddition}}}</div>\n          {{/if}}\n        </div>\n        {{#if img}}\n          <div class=\"am-u-sm-4 am-list-thumb\">\n            <a href=\"{{link}}\" class=\"{{className}}\">\n              <img src=\"{{img}}\" alt=\"{{title}}\"/>\n            </a>\n            {{#if thumbAddition}}\n              <div class=\"am-list-thumb-addon\">{{{thumbAddition}}}</div>\n            {{/if}}\n          </div>\n        {{/if}}\n      </li>\n    {{/each}}\n    {{/ifCond}}\n\n  {{else}}{{!--不带缩略图--}}\n    {{#each content.main}}\n      <li class=\"am-g{{#if date}} am-list-item-dated{{/if}}{{#if desc}} am-list-item-desced{{/if}}{{#if img}} am-list-item-thumbed{{/if}}\">\n        {{!--\n          am-list-item-dated - 带日期\n          am-list-item-desced - 带描述\n          am-list-item-thumbed - 带缩略图的\n        --}}\n        {{#if title}}\n          <a href=\"{{link}}\" class=\"am-list-item-hd {{className}}\">{{{title}}}</a>\n        {{/if}}\n\n        {{#if date}}\n          <span class=\"am-list-date\">{{date}}</span>\n        {{/if}}\n\n        {{#if desc}}\n          <div class=\"am-list-item-text\">{{{desc}}}</div>\n        {{/if}}\n\n        {{#if mainAddition}}\n          <div class=\"am-list-news-addon\">{{{mainAddition}}}</div>\n        {{/if}}\n      </li>\n    {{/each}}\n  {{/ifCond}}\n  </ul>\n  </div>\n\n  {{#ifCond content.header.morePosition '==' 'bottom'}}<!--更多在底部-->\n    {{#if content.header.link}}\n      <div class=\"am-list-news-ft\">\n        <a class=\"am-list-news-more am-btn am-btn-default {{content.header.className}}\" href=\"{{content.header.link}}\">{{{content.header.moreText}}}</a>\n      </div>\n    {{/if}}\n  {{/ifCond}}\n  </div>\n{{/this}}\n");

    hbs.registerPartial('map', "{{#this}}\n  <div data-am-widget=\"map\" class=\"am-map {{#if theme}}am-map-{{theme}}{{else}}am-map-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\"\n      data-name=\"{{options.name}}\" data-address=\"{{options.address}}\" data-longitude=\"{{options.longitude}}\" data-latitude=\"{{options.latitude}}\" data-scaleControl=\"{{options.scaleControl}}\" data-zoomControl=\"{{options.zoomControl}}\" data-setZoom=\"{{options.setZoom}}\" data-icon=\"{{options.icon}}\">\n    <div id=\"bd-map\"></div>\n  </div>\n{{/this}}");

    hbs.registerPartial('mechat', "{{#this}}\n  <section data-am-widget=\"mechat\" class=\"am-mechat{{#if theme}} am-mechat-{{theme}}{{else}} am-mechat-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\" {{#if id}} id=\"{{id}}\" {{/if}} {{#if options.unitid}}data-am-mechat-unitid=\"{{options.unitid}}\"{{/if}}>\n    <div id=\"mechat\"></div>\n  </section>\n{{/this}}");

    hbs.registerPartial('menu', "{{#this}}\n  <nav data-am-widget=\"menu\" class=\"am-menu {{#if theme}} am-menu-{{theme}}{{else}} am-menu-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\" {{options.dataset}} {{#if id}}id=\"{{id}}\"{{/if}}\n    {{#ifCond theme '==' 'dropdown1'}} data-am-menu-collapse{{/ifCond}}\n    {{#ifCond theme '==' 'dropdown2'}} data-am-menu-collapse{{/ifCond}}\n    {{#ifCond theme '==' 'slide1'}} data-am-menu-collapse{{/ifCond}}\n    {{#ifCond theme '==' 'offcanvas1'}} data-am-menu-offcanvas{{/ifCond}}\n    {{#ifCond theme '==' 'offcanvas2'}} data-am-menu-offcanvas{{/ifCond}}> {{!-- 与模板深耦合，与 JS 浅耦合 --}}\n    <a href=\"javascript: void(0)\" class=\"am-menu-toggle\">\n      {{#if options.toggleTitle}}\n        <span class=\"am-menu-toggle-title\">{{options.toggleTitle}}</span>\n      {{/if}}\n      {{#if options.toggleCustomIcon}}\n        <img src=\"{{options.toggleCustomIcon}}\" alt=\"Menu Toggle\"/>\n      {{else}}\n        {{#if options.toggleIcon}}\n          <i class=\"am-menu-toggle-icon am-icon-{{options.toggleIcon}}\"></i>\n          {{else}}\n          <i class=\"am-menu-toggle-icon am-icon-bars\"></i>\n        {{/if}}\n      {{/if}}\n    </a>\n\n    {{!-- offCanvas menu Wrap --}}\n    {{!-- 问题：方便用户，但是与主题名称（类名）耦合过深 --}}\n    {{#ifCond theme '==' 'offcanvas1'}}\n    <div class=\"am-offcanvas\" {{#if options.closeOffCanvasOnclick}}data-dismiss-on=\"click\"{{/if}}>\n      <div class=\"am-offcanvas-bar{{#if options.offCanvasFlip}} am-offcanvas-bar-flip{{/if}}\">\n    {{/ifCond}}\n    {{#ifCond theme '==' 'offcanvas2'}}\n    <div class=\"am-offcanvas\">\n      <div class=\"am-offcanvas-bar{{#if options.offCanvasFlip}} am-offcanvas-bar-flip{{/if}}\">\n    {{/ifCond}}\n\n    {{#if content}}\n      <ul class=\"am-menu-nav {{#if options.cols}}am-avg-sm-{{options\n      .cols}}{{else}}am-avg-sm-1{{/if}}{{#ifCond theme '==' 'dropdown1'}} am-collapse{{/ifCond}}{{#ifCond theme\n      '==' 'dropdown2'}} am-collapse{{/ifCond}}{{#ifCond theme\n      '==' 'slide1'}} am-collapse{{/ifCond}}\">\n        {{#each content}}\n          <li class=\"{{#if subMenu}}am-parent{{/if}}{{#if className}} {{className}}{{/if}}\">\n            <a href=\"{{link}}\" class=\"{{className}}\" {{#if target}}target=\"{{target}}\" {{/if}}>{{{title}}}</a>\n            {{#if subMenu}}\n              <ul class=\"am-menu-sub am-collapse {{#if subCols}} am-avg-sm-{{subCols}}{{else}}\n              am-avg-sm-1{{/if}} {{subMenuClassName}}\">\n                {{#each subMenu}}\n                  <li class=\"{{#if subMenu}} am-parent{{/if}}{{#if className}} {{className}}{{/if}}\">\n                    <a href=\"{{link}}\" class=\"{{className}}\" {{#if target}}target=\"{{target}}\" {{/if}}>{{{title}}}</a>\n                  </li>\n                {{/each}}\n                {{!-- 显示进入栏目链接 --}}\n                {{#if channelLink}}\n                  <li class=\"am-menu-nav-channel\"><a href=\"{{link}}\" class=\"{{className}}\" title=\"{{title}}\">{{{channelLink}}}</a></li>\n                {{/if}}\n              </ul>\n            {{/if}}\n          </li>\n        {{/each}}\n      </ul>\n    {{/if}}\n\n    {{#ifCond theme '==' 'offcanvas1'}}\n      </div>\n    </div>\n    {{/ifCond}}\n    {{#ifCond theme '==' 'offcanvas2'}}\n      </div>\n    </div>\n    {{/ifCond}}\n    {{!-- 不要问我为什么这样写，我也不想这样 --}}\n  </nav>\n{{/this}}\n");

    hbs.registerPartial('navbar', "{{#this}}\n  <div data-am-widget=\"navbar\" class=\"am-navbar am-cf {{#if theme}}am-navbar-{{theme}}{{else}}am-navbar-default{{/if}} {{#if options.iconPosition}}am-navbar-inline{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\"\n      id=\"{{id}}\">\n    {{#if content}}\n      <ul class=\"am-navbar-nav am-cf {{#if options.cols}}am-avg-sm-{{options.cols}}{{/if}}\">\n        {{#each content}}\n          <li {{#if dataApi}}{{dataApi}}{{/if}}>\n            <a href=\"{{link}}\" class=\"{{className}}\">\n              {{#if customIcon}}\n                <img src=\"{{customIcon}}\" alt=\"{{title}}\"/>\n              {{else}}\n                {{#if icon}}\n                  <span class=\"am-icon-{{icon}}\"></span>\n                {{/if}}\n              {{/if}}\n              {{#if title}}\n                <span class=\"am-navbar-label\">{{title}}</span>\n              {{/if}}\n            </a>\n          </li>\n        {{/each}}\n      </ul>\n    {{/if}}\n  </div>\n{{/this}}\n");

    hbs.registerPartial('pagination', "{{#this}}\n  <ul data-am-widget=\"pagination\"\n      class=\"am-pagination {{#if theme}}am-pagination-{{theme}}{{else}}am-pagination-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\"\n      {{#if id}}id=\"{{id}}\"{{/if}}>\n\n    {{#if content.firstTitle}}\n      <li class=\"am-pagination-first {{content.firstClassName}}\">\n        <a href=\"{{content.firstLink}}\" class=\"{{content.firstClassName}}\">{{{content.firstTitle}}}</a>\n      </li>\n    {{/if}}\n\n    {{#if content.prevTitle}}\n      <li class=\"am-pagination-prev {{content.prevClassName}}\">\n        <a href=\"{{content.prevLink}}\" class=\"{{content.prevClassName}}\">{{{content.prevTitle}}}</a>\n      </li>\n    {{/if}}\n\n    {{! 移除 options.select，根据主题来判断结构，无奈 handlebars 逻辑处理...}}\n\n    {{#if content.page}}\n      {{#ifCond theme '==' 'select'}}\n        <li class=\"am-pagination-select\">\n          <select>\n            {{#each content.page}}\n              <option value=\"{{link}}\" class=\"{{className}}\">{{title}}{{#if ../content.total}}\n                / {{../../content.total}}{{/if}}\n              </option>\n            {{/each}}\n          </select>\n        </li>\n      {{else}}\n        {{#ifCond theme '==' 'one'}}\n          <li class=\"am-pagination-select\">\n            <select>\n              {{#each content.page}}\n                {{content.total}}\n                <option value=\"{{link}}\" class=\"{{className}}\">{{title}}{{#if ../content.total}}\n                  / {{../../content.total}}{{/if}}\n                </option>\n              {{/each}}\n            </select>\n          </li>\n        {{else}}\n          {{#each content.page}}\n            <li class=\"{{className}}\">\n              <a href=\"{{link}}\" class=\"{{className}}\">{{{title}}}</a>\n            </li>\n          {{/each}}\n        {{/ifCond}}\n      {{/ifCond}}\n\n    {{/if}}\n\n    {{#if content.nextTitle}}\n      <li class=\"am-pagination-next {{content.nextClassName}}\">\n        <a href=\"{{content.nextLink}}\" class=\"{{content.nextClassName}}\">{{{content.nextTitle}}}</a>\n      </li>\n    {{/if}}\n\n    {{#if content.lastTitle}}\n      <li class=\"am-pagination-last {{content.lastClassName}}\">\n        <a href=\"{{content.lastLink}}\" class=\"{{content.lastClassName}}\">{{{content.lastTitle}}}</a>\n      </li>\n    {{/if}}\n  </ul>\n{{/this}}\n");

    hbs.registerPartial('paragraph', "{{#this}}\n  <article data-am-widget=\"paragraph\"\n           class=\"am-paragraph {{#if theme}}am-paragraph-{{theme}}{{else}}am-paragraph-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\"\n           {{#if id}}id=\"{{id}}\"{{/if}}\n           data-am-paragraph=\"{ {{#if options.tableScrollable}}tableScrollable: true,{{/if}} {{#if options.imgLightbox}}pureview: true{{/if}} }\">\n\n    {{#if content}}\n      {{{ content.content }}}\n    {{/if}}\n  </article>\n{{/this}}\n");

    hbs.registerPartial('slider', "{{#this}}\n  <div data-am-widget=\"slider\" class=\"am-slider {{#if theme}}am-slider-{{theme}}{{else}}am-slider-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\" data-am-slider='{{sliderConfig}}' {{#if id}}id=\"{{id}}\"{{/if}}>\n  <ul class=\"am-slides\">\n    {{#each content}}\n      <li{{#if thumb}} data-thumb=\"{{thumb}}\"{{/if}}>\n        {{#if link}}\n          <a href=\"{{link}}\" class=\"{{className}}\">\n        {{/if}}\n        {{#if img}}\n        \t<img src=\"{{img}}\">\n        {{/if}}\n        {{#if desc}}\n          <div class=\"am-slider-desc\">{{{desc}}}</div>\n        {{/if}}\n        {{#if link}}</a>{{/if}} {{!--/end link--}}\n      </li>\n    {{/each}}\n  </ul>\n</div>\n{{/this}}");

    hbs.registerPartial('tabs', "{{#this}}\n  <div data-am-widget=\"tabs\"\n       class=\"am-tabs{{#if theme}} am-tabs-{{theme}}{{else}} am-tabs-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\"\n       {{#if id}}id=\"{{id}}\"{{/if}} {{#if options.noSwipe}}data-am-tabs-noswipe=\"1\"{{/if}}>\n    {{#if content}}\n      <ul class=\"am-tabs-nav am-cf\">\n        {{#each content}}\n          <li class=\"{{#if active}}am-active{{/if}}\"><a href=\"[data-tab-panel-{{@index}}]\">{{{title}}}</a></li>\n        {{/each}}\n      </ul>\n      <div class=\"am-tabs-bd\">\n        {{#each content}}\n          <div data-tab-panel-{{@index}} class=\"am-tab-panel {{#if active}}am-active{{/if}}\">\n            {{{content}}}\n          </div>\n        {{/each}}\n      </div>\n    {{/if}}\n  </div>\n{{/this}}\n");

    hbs.registerPartial('titlebar', "{{#this}}\n<div data-am-widget=\"titlebar\" class=\"am-titlebar {{#if theme}}am-titlebar-{{theme}}{{else}}am-titlebar-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\" {{#if id}}id=\"{{id}}\"{{/if}}>\n  {{#if content.title}}\n    <h2 class=\"am-titlebar-title {{#unless content.link}}{{content.className}}{{/unless}}\">\n      {{#if content.link}}\n        <a href=\"{{content.link}}\" class=\"{{content.className}}\">{{{content.title}}}</a>\n      {{else}}\n        {{{content.title}}}\n      {{/if}}\n    </h2>\n  {{/if}}\n\n  {{#if content.nav}}\n    <nav class=\"am-titlebar-nav\">\n      {{#each content.nav}}\n        <a href=\"{{link}}\" class=\"{{className}}\">{{{title}}}</a>\n      {{/each}}\n    </nav>\n  {{/if}}\n</div>\n{{/this}}\n");

    hbs.registerPartial('wechatpay', "{{#this}}\n  <div data-am-widget=\"wechatpay\" class=\"am-wechatpay{{#if theme}} am-wechatpay-{{theme}}{{else}} am-wechatpay-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\"{{#if id}} id=\"{{id}}\"{{/if}} data-wechat-pay=\"{ {{#each content.order}} {{@key}}: '{{this}}',{{/each}} }\">\n      <button type=\"button\" class=\"am-btn am-btn-primary am-btn-block am-wechatpay-btn\">\n        {{#if content.title}}\n          {{content.title}}\n        {{else}}\n          微信支付\n        {{/if}}\n      </button>\n  </div>\n{{/this}}\n");

  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = registerAMUIPartials;
  }

  this.Handlebars && registerAMUIPartials(this.Handlebars);
}).call(this);
