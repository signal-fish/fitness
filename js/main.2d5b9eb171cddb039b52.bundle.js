(()=>{var o={927:()=>{var o=$(".modalBox");$(".login").on("click",(function(){o.show()})),$(".close").on("click",(function(){o.hide()}));var t=$("#password"),e=$("#confirm_password");function n(){return t.val().length>8}function s(){return t.val()===e.val()}function i(){n()?t.next().hide():t.next().show()}function l(){s()?e.next().hide():e.next().show()}function c(){$("#submit").prop("disabled",!(n()&&s()))}$("form span").hide(),t.on("focus",i).on("keyup",i).on("keyup",l).on("keyup",c),e.on("focus",l).on("keyup",l).on("keyup",c),c(),$(".tab-list a").on("click",(function(o){o.preventDefault(),$(".active").removeClass("active"),$(this).addClass("active");var t=this.id;$("."+t).addClass("active")})),$(window).on("scroll",(function(){$(this).scrollTop()>200?$("#gotop").show():$("#gotop").hide()})),$("#gotop").on("click",(function(){return $("html, body").animate({scrollTop:0},"slow"),!1})),$(window).on("scroll",(function(){var o=$(window).scrollTop()/($(document).height()-$(window).height())*100;$("#scrollBar").css("width",o+"%")}));var r,a=$(".header").offset().top;$(window).on("scroll",(function(){$(window).scrollTop()>a?$(".header").addClass("sticky"):$(".header").removeClass("sticky")})),$(window).on("scroll",(function(){r=$(this).scrollTop()<1?138:53})),$('#nav a[href^="#"]').on("click",(function(o){$(".navActive").removeClass("navActive"),$(this).addClass("navActive");var t=$(this.getAttribute("href"));t.length&&(o.preventDefault(),$("html, body").animate({scrollTop:t.offset().top-r},1e3))}));$(".whyusBlock .cols p").each((function(){var o=$(this).html();if(o.length>100){var t=o.substr(0,100)+' <div class="morecontent"><div>'+o.substr(100)+'</div><a href="" class="morelink">Read More</a></div>';$(this).html(t)}})),$(".morelink").on("click",(function(){return $(this).hasClass("less")?($(this).removeClass("less"),$(this).html("Read More")):($(this).addClass("less"),$(this).html("Read Less")),$(this).prev().slideToggle("slow"),!1})),$(".accordion .content").hide(),$(".accordion .content").first().show(),$(".accordion .title").click((function(o){o.preventDefault(),$(".accordionActive").removeClass("accordionActive"),$(this).addClass("accordionActive"),$(".accordion .content").slideUp(),$(this).next().slideDown()})),$(".blogBlock .content p").html((function(o,t){var e=$(this).attr("data-maxlength");return t.length>=e?t.substr(0,e)+"...":t})),$(".blogBlock .holder").slice(0,2).show(),$("#btnMore").on("click",(function(o){o.preventDefault(),$(".blogBlock .holder:hidden").slice(0,1).slideDown(),0===$(".blogBlock .holder:hidden").length&&$("#btnMore").fadeOut()})),$(".responsiveMenu").on("click",(function(){$(this).next().toggleClass("navbarActive")}))}},t={};function e(n){var s=t[n];if(void 0!==s)return s.exports;var i=t[n]={exports:{}};return o[n](i,i.exports,e),i.exports}e.n=o=>{var t=o&&o.__esModule?()=>o.default:()=>o;return e.d(t,{a:t}),t},e.d=(o,t)=>{for(var n in t)e.o(t,n)&&!e.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:t[n]})},e.o=(o,t)=>Object.prototype.hasOwnProperty.call(o,t),(()=>{"use strict";e(927)})()})();