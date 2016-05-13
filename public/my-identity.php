<!DOCTYPE html>
<html lang="zh-CN">
 <head> 
  <meta charset="utf-8" /> 
  <meta http-equiv="X-UA-Compatible" content="IE=edge" /> 
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" /> 
  <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ --> 
  <!-- <input type="text" autocorrect="off" /> --> 
  <!-- 关闭ios输入法自动修正 --> 
  <meta name="format-detection" content="email=no" /> 
  <!-- 关闭邮箱识别 --> 
  <meta name="format-detection" content="telephone=no" /> 
  <!-- 关闭号码识别 --> 
  <title>我的艺术中心-个人身份认证</title> 
  <!-- Bootstrap --> 
  <link rel="stylesheet" href="css/all.css">
  <!-- 下面是自己写的样式和重置样式 --> 
  <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries --> 
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// --> 
  <!--[if lt IE 9]>
      <script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]--> 
  <script src="script/bootstrap.min.js"></script> 
 </head> 
 <body> 
 <nav class="navbar navbar-default navbar-fixed-top zd-nav"> 
   <div class="container-fluid pano"> 
    <!-- Brand and toggle get grouped for better mobile display --> 
    <div class="navbar-header col-lg-2 col-sm-2 col-md-2 col-xs-12"> 
     <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> 
     <a class="navbar-brand " href="#"> <img src="images/logo.png" alt="" /> </a> 
    </div> 
    <div class="col-lg-10 col-sm-10 col-md-10 col-xs-12 pano pt50" id="bs-example-navbar-collapse-1"> 
     <ul class="nav navbar-nav  pano"> 
      <li class="active"><a href="#">我的艺术中心 <span class="sr-only">(current)</span></a></li> 
      <li><a href="#">艺术品管理</a></li> 
      <li><a href="#">线上美术馆</a></li> 
     </ul> 
     <div class="zd-nav-right fright "> 
      <form class="navbar-left pano navbar-form" role="search"> 
       <div class="btn-group "> 
        <button type="button" class="btn search-sel  btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 艺术作品 <i class="iconfont font16">&#xe623;</i> </button> 
        <ul class="dropdown-menu"> 
         <li><a href="#">艺术作品</a></li> 
         <li><a href="#">艺术家</a></li> 
         <li><a href="#">艺术机构</a></li> 
        </ul> 
       </div> 
       <input type="search" class="inp-search form-control" aria-label="..." placeholder="搜索艺术作品" /> 
       <button class="nav-searchBtn"><i class="iconfont">&#xe600;</i></button> 
      </form> 
      <div class="right-tx pull-right"> 
       <img src="images/user-head.png" alt="" /> 
       <ul class="down-menu ano"> 
        <li><a href="#">个人信息</a></li> 
        <li><a href="#">我的作品</a></li> 
        <li><a href="#">我的收藏</a></li> 
        <li><a href="#">退出登录</a></li> 
       </ul> 
      </div> 
     </div> 
    </div>
    <!-- /.navbar-collapse --> 
   </div>
   <!-- /.container-fluid --> 
  </nav> 
  <!-- 导航结束 --> 
  <div class="container-fluid  purple he100 pull-left clearfix"> 
   <div class="row he100"> 
    <div class=" pano he100 navbar-fixed-top  col-lg-2 col-sm-2 col-md-2 col-xs-4 left-nav "> 
     <ul class="ulno "> 
      <li><a href="#"><i class="iconfont ">&#xe601;</i>艺术中心首页</a></li> 
      <li><a href="my-certification.html"><i class="iconfont ">&#xe60b;</i>实名认证</a></li> 
      <li class="active"  ><a href="my-identity.html"><i class="iconfont  valali">&#xe611;</i>身份认证</a></li> 
      <li><a href="#"><i class="iconfont">&#xe605;</i>管理私信 <span class="badge">42</span></a></li> 
      <li><a href="#"><i class="iconfont">&#xe606;</i>管理好友</a></li> 
      <li><a href="#"><i class="iconfont font14">&#xe609;</i>修改个人信息</a></li> 
      <li><a href="#"><i class="iconfont">&#xe60c;</i>修改头像</a></li> 
      <li><a href="#"><i class="iconfont">&#xe60d;</i>修改手机号码</a></li> 
      <li><a href="#"><i class="iconfont">&#xe60e;</i>修改密码</a></li> 
      <li><a href="#"><i class="iconfont">&#xe60f;</i>账户设置</a></li> 
      <li><a href="#"><i class="iconfont font14">&#xe607;</i>退出</a></li> 
     </ul> 
    </div> 
    <!-- 左侧导航部分 --> 
 
    <article class="right-article  col-lg-10 col-sm-10 col-md-10 col-xs-8 col-lg-offset-2 col-md-offset-2 col-sm-offset-2 col-xs-offset-4"> 
     <h1 class="zd-h1 col-lg-12">个人身份认证</h1> 
     <p class="zd-p col-lg-8">请按照要求完善您的真实信息和作品信息，<b>认证成功后部分个人信息不能再更改</b>。请放心，我们不会泄露您的隐私信息。我们的客服会在24雄狮内审核您的信息并给您反馈。</p> 
     <form class="form-horizontal col-lg-12" id="real-name"> 
      <div class="form-group"> 
       <label for="inputEmail3" class="col-lg-2  col-sm-2 col-md-2 col-xs-12 control-label">真实姓名</label> 
       <div class="col-lg-4 col-md-d col-sm-4  col-xs-12"> 
        <input type="text" class="form-control" id="inputEmail3" /> 
       </div> 
       <span  class="col-lg-6 col-sm-6 col-md-6 col-xs-12 tip control-label red ">如实填写，认证成功后不能修改</span>
      </div>    
       <div class="form-group"> 
       <label for="inputPassword3" class="col-lg-2  col-sm-2 col-md-2 col-xs-12 control-label">出生年月日</label> 
       <div class="col-lg-2 col-md-2 col-sm-2  col-xs-12 zd-select"> 
        <!-- <input type="password" class="form-control" id="inputPassword3" placeholder="Password"> --> 
        <select class="form-control" name="year1"></select>
        
       </div>
       <div class="col-lg-2 col-md-2 col-sm-2  col-xs-12 zd-select" > 
        <!-- <input type="password" class="form-control" id="inputPassword3" placeholder="Password"> --> 
        <select  class="form-control" name="month1"></select>
        
       </div> 
       <div class="col-lg-2 col-md-2 col-sm-2  col-xs-12 zd-select"> 
        <!-- <input type="password" class="form-control" id="inputPassword3" placeholder="Password"> --> 
        <select  class="form-control" name="day1"></select>
        
       </div>
       <span  class="col-lg-4 col-sm-4 col-md-4 col-xs-12 tip control-label red">如实填写，认证成功后不能修改</span>
      </div> 
       <div class="form-group"> 
       <label for="inputPassword3" class="col-lg-2  col-sm-2 col-md-2 col-xs-12 control-label">出生地 </label> 
       <div class="col-lg-2 col-md-2 col-sm-2  col-xs-12 zd-select"> 
        <!-- <input type="password" class="form-control" id="inputPassword3" placeholder="Password"> --> 
        <select class="form-control" name='province1'></select>      
       </div>
       <div class="col-lg-2 col-md-2 col-sm-2  col-xs-12 zd-select"> 
        <!-- <input type="password" class="form-control" id="inputPassword3" placeholder="Password"> --> 
        <select class="form-control" name="city1"></select>
        
       </div> 
       <span  class="col-lg-6 col-sm-6 col-md-6 col-xs-12 tip control-label red ">如实填写，认证成功后不能修改</span>
      </div> 
      <div class="form-group"> 
       <label for="inputPassword3" class="col-lg-2  col-sm-2 col-md-2 col-xs-12 control-label">所在地 </label> 
       <div class="col-lg-2 col-md-2 col-sm-2  col-xs-12 zd-select"> 
        <!-- <input type="password" class="form-control" id="inputPassword3" placeholder="Password"> --> 
        <select class="form-control" name="province2"></select>       
       </div>
       <div class="col-lg-2 col-md-2 col-sm-2  col-xs-12 zd-select"> 
        <!-- <input type="password" class="form-control" id="inputPassword3" placeholder="Password"> --> 
        <select class="form-control" name="city2"></select>
        
       </div> 
       <span  class="col-lg-6 col-sm-6 col-md-6 col-xs-12 tip control-label ">选填</span>
      </div> 
      <div class="form-group"> 
       <label for="inputPassword3" class="col-lg-2  col-sm-2 col-md-2 col-xs-12 control-label">国籍</label> 
       <div class="col-lg-4 col-md-d col-sm-4  col-xs-12"> 
        <select class="form-control"><option value="">中国</option><option value="">其他</option></select>
       </div> 
       <span  class="col-lg-6 col-sm-6 col-md-6 col-xs-12 tip control-label">选填</span>
      </div>
      <div class="form-group"> 
       <label for="inputPassword3" class="col-lg-2  col-sm-2 col-md-2 col-xs-12 control-label">毕业院校</label> 
       <div class="col-lg-4 col-md-d col-sm-4  col-xs-12"> 
        <input type="text" class="form-control" id="inputPassword3" /> 
       </div> 
       <span  class="col-lg-6 col-sm-6 col-md-6 col-xs-12 tip control-label">选填</span>
      </div> 
      <div class="form-group"> 
       <label for="inputPassword3" class="col-lg-2  col-sm-2 col-md-2 col-xs-12 control-label">毕业年月</label> 
       <div class="col-lg-2 col-md-2 col-sm-2  col-xs-12 zd-select"> 
        <!-- <input type="password" class="form-control" id="inputPassword3" placeholder="Password"> --> 
        <select class="form-control" name="year2"></select>
        
       </div>
       <div class="col-lg-2 col-md-2 col-sm-2  col-xs-12 zd-select" > 
        <!-- <input type="password" class="form-control" id="inputPassword3" placeholder="Password"> --> 
        <select  class="form-control" name="month2"></select>
        
       </div> 
      
       <span  class="col-lg-4 col-sm-4 col-md-4 col-xs-12 tip control-label">选填</span>
      </div> 
      <div class="form-group">
              <label for="inputPassword3" class="col-lg-2  col-sm-2 col-md-2 col-xs-12 control-label">本人近期照片 </label>               
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 pl">
                <div class="col-lg-4 col-md-4 col-sm-4  col-xs-12 uploadsin"> 
                <input type="file" class="upload-inp" id="iden-upload1" accept="image/*"/>
                <input type="hidden" id="iden-parameter1">       
              </div>   
              </div>   
              <div class='uploadsinImg hidden col-lg-10 col-md-10 col-sm-10  col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-2 col-xs-offset-0'></div>
              <span  class="col-lg-6 col-sm-6 col-md-6 col-xs-12 tip control-label">仅支持jpg、png格式</span>
     </div>
  
     <div class="form-group"> 
       <label for="inputPassword3" class="col-lg-2  col-sm-2 col-md-2 col-xs-12 control-label">代表作品</label> 
       <div class="col-lg-4 col-md-4 col-sm-4  col-xs-12 upload"> 
        <input type="file" class="upload-inp" id="iden-upload2" accept="image/*" multiple="multiple"/> 
        <input type="hidden" id="iden-parameter2">       
       </div> 
       <ul id='images' class="uploadImgs  col-lg-10 col-sm-10 col-md-10 col-xs-12 hidden col-lg-offset-2 col-md-offset-2 col-sm-offset-2 col-xs-offset-4"></ul>
      <span class="col-lg-4 col-sm-4 col-md-4 col-xs-12 tip control-label">仅支持jpg、png、tif格式。至少上传三个作品照片</span> 
      </div>

      <div class="form-group"> 
       <div class="col-sm-offset-2 col-lg-10"> 
        <button type="submit" class="btn btn-default col-lg-2">提交认证</button> 
       </div> 
      </div> 
     </form> 
    </article> 
   </div> 
  </div>  
<div class="alert alert-warning alert-dismissible col-lg-3 upTip" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <ul class="upTip-ul ulno">
    <li class="upTip-block">您有一个好友申请， <a href="#">查看详情</a></li>
    <li class="upTip-block">您有一条私信，<a href="#">查看详情</a></li>
  </ul>
</div>
  <script src="script/all.js"></script> 
  <script>
     new YMDselect('year1','month1','day1');
     new YMDselect('year2','month2');
     new PCAS("province1","city1");
     new PCAS("province2","city2") ;

     upload("iden-upload1",'iden-parameter1','index.php',1,2);
     ;$(function() {
  var artImages=[];
  var shuliang=5; //设置图片数量
        $("#iden-upload2").uploadify({
         swf           : '/swf/uploadify.swf',
         uploader      : '/index.php',
         'auto': true,
          multi:true,
         'fileTypeExts': '*.jpg;*.jpeg;*.gif;*.png',
         'displayData': 'percentage',
         'uploadLimit':shuliang,
          'queueSizeLimit':shuliang,
                              
                 'onUploadSuccess':function(file,data,response){
                  artImages.length=0;
                    var data = JSON.parse(data);
                    $.each(data.results,function(index, el){                      
                       $.unique(artImages);
                       artImages.push(data.results[index].savePath);
                    })
                     $("#iden-parameter2").val(artImages);       
                     var html="";          
                     $.each(artImages,function(i,d){
                       html='<li class="col-lg-2 col-sm-2 col-md-2 col-xs-2"><img src="'+artImages[i]+'" alt=""><div class="removeImages"><i class="iconfont">&#xe635;</i></div><div class="state success">上传成功</div></li>';
                                $("#images").removeClass('hidden').append(html);         
                     })                      
                     $("#iden-upload2").parents(".form-group").find('.tip').hide();
                     $("#iden-upload2").parents(".upload").attr('class','col-lg-10 col-md-10 col-sm-10  col-xs-12 upload');
                     var $uoloadli=$("#iden-upload2").parents(".form-group").find("li");
                     $uoloadli.find(".removeImages").on('click',function(){
                        var imgsrc=$(this).parents("li").find("img").attr('src');
                        var ind=artImages.indexOf(imgsrc);                     
                        artImages.splice(ind,1); 
                        $(this).parents("li").remove();                         
                        $("#iden-parameter2").val(artImages);
                        var swfu = $('#upload2').data('uploadify');
                        var stats = swfu.getStats();
                        stats["successful_uploads"]--;
                        swfu.setStats(stats); 
                     })                     
                 },
                   'onSelectError':function(file, errorCode, errorMsg){
                     switch(errorCode) {                      
                         case -100:
                              alert("文件数量超出系统限制,最多上传"+shuliang+'个！');
                              break;                               
                     }
                 }
    });
});
  </script>
 </body>
</html>