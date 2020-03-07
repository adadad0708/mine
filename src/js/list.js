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

})