$(function () {

  // 导航栏
  function getList () {
    $.ajax({

      // 获取数据
      url: '../lib/indexJSON/nav_top.json',
      dataType: 'json',

      // 渲染
      success: function (res) {
        // console.log(res)
        let str = ''
        res.forEach(item => {
          str += `<li>${item.name}</li>`
        })
        $('.nav_top > ul')
          .html(str)
          .on({
            mouseenter: () => $('.nav_box').stop().slideDown(),
            mouseleave: () => $('.nav_box').stop().slideUp()
          })
          .children('li')
          .on('mouseover', function () {
            const index = $(this).index()
            const list = res[index].list
            let str = ''
            list.forEach(item => {
              str += `  
                  <li>
                    <div>
                      <img src="${ item.list_url}" alt="">
                    </div>
                    <p class="title">${ item.list_name}</p>
                    <span class="price">${ item.list_price}</span>
                  </li>
                `
            })
            $('.nav_box > ul').html(str)
          })
        $('.nav_box')
          .on({
            mouseenter: function () { $(this).finish().show() },
            mouseleave: function () { $(this).finish().slideUp() }
            // mouseenter: function () { $(this).css("display", "block") },
            // mouseleave: function () { $(this).css("display", "block") }
          })
      }
    })
  }

  getList()

  // 轮播图
  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 1000
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })


  // 二级菜单二
  // 渲染
  function getList2 () {

    $.ajax({
      // 获取数据：
      url: "../lib/indexJSON/nav.json",
      dataType: "json",

      // 渲染
      success: function (res) {
        // console.log(res)
        let str1 = "";
        res.forEach(ele => {
          str1 += `<li>${ele.name}</li>`

          $(".nav_list>ul")
            .html(str1)
            .children("li")
            .on({
              mouseenter: () => $(".ban_box").css("display", "block"),
              mouseleave: () => $(".ban_box").css("display", "none")
            })
            .on("mouseover", function () {
              let index = $(this).index()
              // console.log(index)
              let list = res[index].list
              let str = ""
              list.forEach(ele => {
                str += `<li><img
                src=${ele.list_src}
                alt="">
                <span>${ele.list_name}</span></li>`
              })
              $(".ban_box>ul").html(str)
            })
        })
        $(".ban_box")
          .on({
            mouseenter: () => $(".ban_box").css("display", "block"),
            mouseleave: () => $(".ban_box").css("display", "none")
          })
      }

    })

  }
  getList2()

  // banner_footer
  function bannner_footer () {
    $.ajax({
      url: "../lib/indexJSON/banner_footer.json",
      dataType: "json",
      success: function (res) {
        // console.log(res)
        let str = "<li>小图标</li>"
        res.forEach(ele => {
          str += `<li><img src="${ele}" alt=""></li>`
        })
        $(".banner_footer>.container").html(str)
      }
    })
  }
  bannner_footer()


  // body
  // 小米闪购
  function shangou () {
    $.ajax({
      url: "../lib/indexJSON/xiaomishangou.json",
      dataType: "json",
      success: function (res) {
        // console.log(res)
        // console.log($(".body>.shangou>section>.img"))
        let str = ""
        res.forEach(function (ele) {
          str += `<li>
                <img src="${ele.src}" alt="">
                <h3>${ele.name}</h3>
                <h4>${ele.desc}</h4>
                <h5>${ele.price}元</h5>
              </li>`
        })
        $(".body>.shangou>section>.img").html(str)

      }

    })
  }
  shangou()

  // 小米闪购
  function phone () {
    $.ajax({
      url: "../lib/indexJSON/phone.json",
      dataType: "json",
      success: function (res) {
        // console.log(res)
        // console.log($(".body>.phone>section>.right"))
        let str = ""
        res.forEach(function (ele) {
          str += `<li>
                <img src="${ele.src}" alt="">
                <h3>${ele.name}</h3>
                <h4>${ele.desc}</h4>
                <h5>${ele.price}元</h5>
              </li>`
        })
        // console.log(str)
        $(".body>.phone>section>.right").html(str)
      }
    }).then(function () {
      // 倒计时
      function timer (data) {
        let pre = data
        let preTime = new Date(pre)
        let time = new Date()
        let minTime = parseInt((preTime - time) / 1000)
        let hour1 = parseInt(minTime / 3600)
        let min1 = parseInt(minTime / 60 % 60)
        let sec1 = parseInt(minTime % 60)

        if (hour1 == 0 && min1 == 0 && sec1 == 0) {
          clearInterval(getTime)
          $(".time>h4").html("抢购开始").css("color", "red")
        }
        let hour = hour1 < 10 ? "0" + hour1 : hour1
        let min = min1 < 10 ? "0" + min1 : min1
        let sec = sec1 < 10 ? "0" + sec1 : sec1
        let inner = pre.split(" ")[1]
        $(".time>h3").html(inner)
        $(".time>dl>dd:nth-child(odd)").eq(0).html(hour)
        $(".time>dl>dd:nth-child(odd)").eq(1).html(min)
        $(".time>dl>dd:nth-child(odd)").eq(2).html(sec)
      }

      let data = "2020-3-4 19:30:00"
      timer(data)
      let getTime = setInterval(timer.bind(null, data), 1000)
    })

    // // 倒计时
    // function timer (data) {
    //   let pre = data
    //   let preTime = new Date(pre)
    //   let time = new Date()
    //   let minTime = parseInt((preTime - time) / 1000)
    //   let hour1 = parseInt(minTime / 3600)
    //   let min1 = parseInt(minTime / 60 % 60)
    //   let sec1 = parseInt(minTime % 60)

    //   if (hour1 == 0 && min1 == 0 && sec1 == 0) {
    //     clearInterval(getTime)
    //     $(".time>h4").html("抢购开始").css("color", "red")
    //   }
    //   let hour = hour1 < 10 ? "0" + hour1 : hour1
    //   let min = min1 < 10 ? "0" + min1 : min1
    //   let sec = sec1 < 10 ? "0" + sec1 : sec1
    //   let inner = pre.split(" ")[1]
    //   $(".time>h3").html(inner)
    //   $(".time>dl>dd:nth-child(odd)").eq(0).html(hour)
    //   $(".time>dl>dd:nth-child(odd)").eq(1).html(min)
    //   $(".time>dl>dd:nth-child(odd)").eq(2).html(sec)
    // }

    // data = "2020-3-4 19:30:00"
    // timer(data)
    // let getTime = setInterval(timer.bind(null, data), 1000)
  }
  phone()

  // 家电 appliances
  function appliances () {
    $.ajax({
      url: "../lib/indexJSON/appliances.json",
      dataType: "json",
      success: function (res) {

        // 先渲染
        res.forEach((ele, index) => {
          let str = ""
          ele.list.forEach((item, index) => {
            if (index == 0 || index == 5) {
              str += `<li> <img src="${item.list_src}" alt=""> </li>`;
            }
            else if (index == 9) {

              str += `<li>
              <div>
                <img src="${item.list_src}" alt="">
                <div>
                  <h3>${item.list_name}</h3>
                  <h4>${item.list_price}</h4>
                </div>
              </div>`;
            }
            else if (index === 10) {

              str += `<div><h3>${item.list_name}</h3><h4>${item.list_desc}</h4></div></li>`;
            }
            else {
              str += `<li>
                      <img
                        src="${item.list_src}"alt="">
                      <h3>${item.list_name}</h3>
                      <h4>${item.list_desc}</h4>
                      <h5>${item.list_price}元起</h5>
                    </li> `;
            }
          })
          $(`.appliances>.section${++index}`).html(str)
        })
      }
    }).then(function () {
      $(".appliances>header>li").eq(1).children("span").click(function () {
        $(this).addClass("active").siblings().removeClass("active")
        $(".appliances>section").eq($(this).index()).addClass("show").siblings().removeClass("show")
      })
    })
  }
  appliances()

  // 智能 intelligent
  function intelligent () {
    $.ajax({
      url: "../lib/indexJSON/appliances.json",
      dataType: "json",
      success: function (res) {

        // 先渲染
        res.forEach((ele, index) => {
          let str = ""
          ele.list.forEach((item, index) => {
            if (index == 0 || index == 5) {
              str += `<li> <img src="${item.list_src}" alt=""> </li>`;
            }
            else if (index == 9) {

              str += `<li>
                <div>
                  <img src="${item.list_src}" alt="">
                  <div>
                    <h3>${item.list_name}</h3>
                    <h4>${item.list_price}</h4>
                  </div>
                </div>`;
            }
            else if (index === 10) {

              str += `<div><h3>${item.list_name}</h3><h4>${item.list_desc}</h4></div></li>`;
            }
            else {
              str += `<li>
                        <img
                          src="${item.list_src}"alt="">
                        <h3>${item.list_name}</h3>
                        <h4>${item.list_desc}</h4>
                        <h5>${item.list_price}元起</h5>
                      </li> `;
            }
          })
          $(`.intelligent>.section${++index}`).html(str)
        })
      }
    }).then(function () {
      $(".intelligent>header>li").eq(1).children("span").click(function () {
        $(this).addClass("active").siblings().removeClass("active")
        $(".intelligent>section").eq($(this).index()).addClass("show").siblings().removeClass("show")
      })
    })
  }
  intelligent()

  // 搭配 collocation
  function collocation () {
    $.ajax({
      url: "../lib/indexJSON/appliances.json",
      dataType: "json",
      success: function (res) {

        // 先渲染
        res.forEach((ele, index) => {
          let str = ""
          ele.list.forEach((item, index) => {
            if (index == 0 || index == 5) {
              str += `<li> <img src="${item.list_src}" alt=""> </li>`;
            }
            else if (index == 9) {

              str += `<li>
                <div>
                  <img src="${item.list_src}" alt="">
                  <div>
                    <h3>${item.list_name}</h3>
                    <h4>${item.list_price}</h4>
                  </div>
                </div>`;
            }
            else if (index === 10) {

              str += `<div><h3>${item.list_name}</h3><h4>${item.list_desc}</h4></div></li>`;
            }
            else {
              str += `<li>
                        <img
                          src="${item.list_src}"alt="">
                        <h3>${item.list_name}</h3>
                        <h4>${item.list_desc}</h4>
                        <h5>${item.list_price}元起</h5>
                      </li> `;
            }
          })
          $(`.collocation>.section${++index}`).html(str)
        })
      }
    }).then(function () {
      $(".collocation>header>li").eq(1).children("span").click(function () {
        $(this).addClass("active").siblings().removeClass("active")
        $(".collocation>section").eq($(this).index()).addClass("show").siblings().removeClass("show")
      })
    })
  }
  collocation()

  // 周边 surrounding
  function surrounding () {
    $.ajax({
      url: "../lib/indexJSON/appliances.json",
      dataType: "json",
      success: function (res) {

        // 先渲染
        res.forEach((ele, index) => {
          let str = ""
          ele.list.forEach((item, index) => {
            if (index == 0 || index == 5) {
              str += `<li> <img src="${item.list_src}" alt=""> </li>`;
            }
            else if (index == 9) {

              str += `<li>
                <div>
                  <img src="${item.list_src}" alt="">
                  <div>
                    <h3>${item.list_name}</h3>
                    <h4>${item.list_price}</h4>
                  </div>
                </div>`;
            }
            else if (index === 10) {

              str += `<div><h3>${item.list_name}</h3><h4>${item.list_desc}</h4></div></li>`;
            }
            else {
              str += `<li>
                        <img
                          src="${item.list_src}"alt="">
                        <h3>${item.list_name}</h3>
                        <h4>${item.list_desc}</h4>
                        <h5>${item.list_price}元起</h5>
                      </li> `;
            }
          })
          $(`.surrounding>.section${++index}`).html(str)
        })
      }
    }).then(function () {
      $(".surrounding>header>li").eq(1).children("span").click(function () {
        $(this).addClass("active").siblings().removeClass("active")
        $(".surrounding>section").eq($(this).index()).addClass("show").siblings().removeClass("show")
      })
    })
  }
  surrounding()

})