"use strict";$(function(){$.ajax({url:"../lib/indexJSON/nav_top.json",dataType:"json",success:function(t){var i="";t.forEach(function(n){i+="<li>".concat(n.name,"</li>")}),$(".nav_top > ul").html(i).on({mouseenter:function(){return $(".nav_box").stop().slideDown()},mouseleave:function(){return $(".nav_box").stop().slideUp()}}).children("li").on("mouseover",function(){var n=$(this).index(),i=t[n].list,o="";i.forEach(function(n){o+='  \n                  <li>\n                    <div>\n                      <img src="'.concat(n.list_url,'" alt="">\n                    </div>\n                    <p class="title">').concat(n.list_name,'</p>\n                    <span class="price">').concat(n.list_price,"</span>\n                  </li>\n                ")}),$(".nav_box > ul").html(o)}),$(".nav_box").on({mouseenter:function(){$(this).finish().show()},mouseleave:function(){$(this).finish().slideUp()}})}})});