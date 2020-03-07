$(function () {
  $("#submit").validate({
    rules: {

      // 查了半天，required 写成require

      username: "required",
      password: {
        required: true,
        minlength: 3,
        maxlength: 12
      }
    },
    messages: {
      username: "请输入用户名",
      password: {
        required: "请输入您的密码",
        minlength: "符合3~12位"
      }
    },
    // test的时候php返回的不是json格式的，但我用json格式解析，所以拿不到,fuck
    //  node 服务器的代理标识符如下,代理的 apache 的地址默认端口为80，所以就不写了
    //  source: '/login', // 代理标识符
    //  target: 'http://localhost/wodexiangmu/login.php' 
    submitHandler: function (form) {
      $.post("/login", $(form).serialize(), function (ret) {
        console.log(ret)
      })
    }
  })
  // $.post("/login","123", function (ret) {
  //   console.log(ret)
  //   console.log(111)
  // })
})