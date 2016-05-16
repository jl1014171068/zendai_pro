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
  <title>我的艺术中心-艺术品管理</title> 
  <!-- Bootstrap --> 
  <link rel="stylesheet" href="css/all.css">
  <link rel="stylesheet" href="css/style.css">

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
      <li ><a href="#">我的艺术中心 <span class="sr-only">(current)</span></a></li> 
      <li class="active"><a href="#">艺术品管理</a></li> 
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
      <li><a href="#"><i class="iconfont ">&#xe613;</i>我的作品集</a></li> 
      <li><a href="my-certification.html"><i class="iconfont ">&#xe614;</i>查看所有艺术品</a></li> 
      <li class="active"  ><a href="my-identity.html"><i class="iconfont  valali">&#xe608;</i>上传作品</a></li> 
      <li class="matbot"></li>
      <li><a href="#"><i class="iconfont val">&#xe624;</i>艺术品认证记录</a></li> 
      <li><a href="#"><i class="iconfont">&#xe615;</i>艺术品分享记录</a></li> 
      <li><a href="#"><i class="iconfont val">&#xe619;</i>艺术品过户记录</a></li> 
      <li><a href="#"><i class="iconfont val">&#xe617;</i>艺术品代销记录</a></li> 

     </ul> 
    </div> 
    <!-- 左侧导航部分 --> 
 
    <article class="right-article art-upload  col-lg-10 col-sm-10 col-md-10 col-xs-8 col-lg-offset-2 col-md-offset-2 col-sm-offset-2 col-xs-offset-4"> 
     <h1 class="zd-h1 col-lg-12">上传作品</h1> 
     <h3 class="col-lg-12 art-h3">主要信息</h3>
     <form class="form-horizontal col-lg-12" id="real-name"> 
      <div class="form-group"> 
       <label for="inputEmail3" class="col-lg-2  col-sm-2 col-md-2 col-xs-12 control-label">添加到作品集</label> 
       <div class="col-lg-4 col-md-d col-sm-4  col-xs-12"> 
        <select class="form-control" id='addSelectFile'><option value="1">花鸟虫鱼</option><option value="1">花鸟虫鱼</option></select>
       </div> 
       <span  class="col-lg-6 col-sm-6 col-md-6 col-xs-12 tip control-label"><span class="red">必填</span>，请选择作品集，您也可以<a href="#" class="blue" id='newFiles' rel='default'>新建一个作品集</a>。</span>
      </div>    
       <div class="form-group"> 
       <label for="inputPassword3" class="col-lg-2  col-sm-2 col-md-2 col-xs-12 control-label">艺术品分类</label> 
        <div class="col-lg-4 col-md-d col-sm-4  col-xs-12"> 
        <select class="form-control" id='art-type'>
        <option value="1">油画</option>
        <option value="2">版画</option>
        <option value="3">水彩</option>
        <option value="4">素描</option>
        <option value="5">中国书画</option>
        <option value="6">雕塑/装置</option>
        <option value="7">摄影图片</option>
        <option value="8">影像</option>
        <option value="9">工艺美术</option>
        <option value="10">文献书籍</option>
        <option value="11">其他</option>
        </select>
       </div> 
        <span  class="col-lg-6 col-sm-6 col-md-6 col-xs-12 tip control-label"><span class="red">必填</span>，请选择艺术品的类别。</span>
      </div> 
      <div class="form-group"> 
       <label for="inputPassword3" class="col-lg-2  col-sm-2 col-md-2 col-xs-12 control-label">代表作品</label> 
       <div class="col-lg-4 col-md-4 col-sm-4  col-xs-12 upload"> 
        <input type="file" class="upload-inp" id="upload2" accept="image/*" multiple="multiple"/> 
        <input type="hidden" id="parameter2">       
       </div> 
       <ul id='images' class="uploadImgs  col-lg-10 col-sm-10 col-md-10 col-xs-12 hidden col-lg-offset-2 col-md-offset-2 col-sm-offset-2 col-xs-offset-4"></ul>
      <span class="col-lg-6 col-sm-6 col-md-6 col-xs-12 tip control-label"><span class="red">必填</span>，艺术品图片。至少提供1个主图，可选提供辅图不超过4个，第一个图片默认为主图</span> 
      </div>     
       <div class="form-group"> 
       <label for="inputPassword3" class="col-lg-2  col-sm-2 col-md-2 col-xs-12 control-label">艺术品描述 </label> 
       <div class="col-lg-4 col-md-d col-sm-4  col-xs-12"> 
        <textarea class="form-control" rows="5"></textarea>
       </div> 
       <span  class="col-lg-6 col-sm-6 col-md-6 col-xs-12 tip control-label">选填</span>
      </div> 
      <div class="form-group"> 
        <label for="inputPassword3" class="col-lg-2  col-sm-2 col-md-2 col-xs-12 control-label">艺术品作者 </label> 
        <label class="radio-inline col-lg-2 col-md-2 col-sm-2  col-xs-12 zd-radio">
          <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">我是原作者
        </label>
        <label class="radio-inline col-lg-2 col-md-2 col-sm-2  col-xs-12 zd-radio">
          <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">我不是原作者
        </label> 
       <span  class="col-lg-4 col-sm-4 col-md-4 col-xs-12 tip control-label red">必填</span>
      </div>
      <h3 class="col-lg-12 art-h3">艺术家信息</h3> 
      <div class="form-group"> 
       <label for="inputPassword3" class="col-lg-2  col-sm-2 col-md-2 col-xs-12 control-label">艺术家姓名</label> 
       <div class="col-lg-4 col-md-d col-sm-4  col-xs-12"> 
        <input type="text" class="form-control"  /> 
       </div> 
       <span  class="col-lg-6 col-sm-6 col-md-6 col-xs-12 tip control-label">选填</span>
      </div>
     <div class="form-group"> 
       <label for="inputPassword3" class="col-lg-2  col-sm-2 col-md-2 col-xs-12 control-label">出生年月</label> 
       <div class="col-lg-2 col-md-2 col-sm-2  col-xs-12 zd-select"> 
        <!-- <input type="password" class="form-control"  placeholder="Password"> --> 
        <select class="form-control" name="year1"></select>       
       </div>
       <div class="col-lg-2 col-md-2 col-sm-2  col-xs-12 zd-select" > 
        <!-- <input type="password" class="form-control"  placeholder="Password"> --> 
        <select  class="form-control" name="month1"></select>   
       </div>    
       <span  class="col-lg-6 col-sm-6 col-md-6 col-xs-12 tip control-label">选填</span>
      </div> 
       <div class="form-group"> 
       <label for="inputPassword3" class="col-lg-2  col-sm-2 col-md-2 col-xs-12 control-label">国籍</label> 
       <div class="col-lg-4 col-md-d col-sm-4  col-xs-12"> 
        <select class="form-control"><option value="">中国</option><option value="">其他</option></select>
       </div> 
       <span  class="col-lg-6 col-sm-6 col-md-6 col-xs-12 tip control-label">选填</span>
      </div> 
      <div class="form-group"> 
       <label for="inputPassword3" class="col-lg-2  col-sm-2 col-md-2 col-xs-12 control-label">艺术家简历 </label> 
       <div class="col-lg-4 col-md-d col-sm-4  col-xs-12"> 
        <textarea class="form-control" rows="5"></textarea>
       </div> 
       <span  class="col-lg-6 col-sm-6 col-md-6 col-xs-12 tip control-label">选填</span>
      </div> 
      <h3 class="col-lg-12 art-h3">艺术品其他信息</h3> 
       <div class="form-group " id='information'> 
       <label for="inputPassword3" class="col-lg-2  col-sm-2 col-md-2 col-xs-12 control-label">版本信息</label> 
       <div class="col-lg-4 col-md-d col-sm-4  col-xs-12"> 
        <input type="text" class="form-control" /> 
       </div> 
       <span  class="col-lg-6 col-sm-6 col-md-6 col-xs-12 tip control-label">选填</span>
      </div>
      <div class="form-group"> 
       <label for="inputPassword3" class="col-lg-2  col-sm-2 col-md-2 col-xs-12 control-label">尺寸</label> 
       <div class="input-group col-lg-2 col-md-2 col-sm-2  col-xs-12 long">
         <span class="input-group-addon">长</span>
         <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
         <span class="input-group-addon">厘米</span>
       </div>
       <div class="input-group col-lg-2 col-md-2 col-sm-2  col-xs-12 width">
         <span class="input-group-addon">宽</span>
         <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
         <span class="input-group-addon">厘米</span>
       </div> 
       <span  class="col-lg-6 col-sm-6 col-md-6 col-xs-12 tip control-label enterTip">选填</span>
         
       <div class="input-group col-lg-2 col-md-2 col-sm-2  col-xs-12 col-lg-offset-2 mat15 hidden height">
         <span class="input-group-addon">高</span>
         <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
         <span class="input-group-addon">厘米</span>
       </div>
       <div class="input-group col-lg-2 col-md-2 col-sm-2  col-xs-12  mat15 hidden length">
         <span class="input-group-addon">时长</span>
         <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
         <span class="input-group-addon">hms</span>
       </div>
      </div>
    <div class="form-group" id="creation"> 
       <label for="inputPassword3" class="col-lg-2  col-sm-2 col-md-2 col-xs-12 control-label">创作年代</label> 
        <label class="radio-inline col-lg-1 col-md-2 col-sm-2  col-xs-12 zd-radio">
          <input type="radio" name="creation" id="creation1" value="dynasty">朝代
        </label>
        <label class="radio-inline col-lg-1 col-md-2 col-sm-2  col-xs-12 zd-radio">
          <input type="radio" name="creation" id="creation2" value="s">年代
        </label>
        <label class="radio-inline col-lg-2 col-md-2 col-sm-2  col-xs-12 zd-radio">
          <input type="radio" name="creation" id="creation3" value="century">世纪
        </label>       
       <span  class="col-lg-4 col-sm-4 col-md-4 col-xs-12 tip control-label">选填</span>
         <div class="col-lg-4 col-md-4 col-sm-4 hidden  col-xs-12 col-lg-offset-2  col-md-offset-2 col-sm-offset-2 col-xs-offset-0"> 
          <select id="creations" class="form-control"></select>
        </div>
      </div> 
       <div class="form-group hidden" id='seal'>
              <label for="inputPassword3" class="col-lg-2  col-sm-2 col-md-2 col-xs-12 control-label">款识/印章</label> 
              <div class="input-group col-lg-4 col-md-4 col-sm-4 mb10 col-xs-12 ">
                <span class="input-group-addon">文字描述</span>
                <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
              </div>              
              <div class='uploadsinImg hidden col-lg-10 col-md-10 col-sm-10  col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-2 col-xs-offset-0'></div>
              <span  class="col-lg-2 col-sm-2 col-md-2 col-xs-12 tip control-label">选填</span>
              <div class="col-lg-10 col-md-10 col-sm-10 pl mt10 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-2 col-xs-offset-0">
                <div class="col-lg-4 col-md-4 col-sm-4  col-xs-12 uploadsin"> 
                <input type="file" class="upload-inp" id="upload6" accept="image/*"/>
                <input type="hidden" id="parameter6">       
              </div>   
              </div>        
      </div>
      <div class="form-group" id='signature'>
              <label class="col-lg-2  col-sm-2 col-md-2 col-xs-12 control-label">艺术家签名 </label> 
              <div class="input-group col-lg-4 col-md-4 col-sm-4 mb10 col-xs-12 ">
                <span class="input-group-addon">文字描述</span>
                <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
              </div>              
              <div class='uploadsinImg hidden col-lg-10 col-md-10 col-sm-10  col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-2 col-xs-offset-0'></div>
              <span  class="col-lg-2 col-sm-2 col-md-2 col-xs-12 tip control-label">选填</span>
              <div class="col-lg-10 col-md-10 col-sm-10 pl mt10 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-2 col-xs-offset-0">
                <div class="col-lg-4 col-md-4 col-sm-4  col-xs-12 uploadsin"> 
                <input type="file" class="upload-inp" id="upload4" accept="image/*"/>
                <input type="hidden" id="parameter4">       
              </div>   
              </div>        
      </div>


      <div class="form-group" id='farmed'> 
       <label for="inputPassword3" class="col-lg-2  col-sm-2 col-md-2 col-xs-12 control-label">装裱状态</label> 
       <div class="col-lg-4 col-md-d col-sm-4  col-xs-12"> 
        <input type="text" class="form-control"  /> 
       </div> 
       <span  class="col-lg-6 col-sm-6 col-md-6 col-xs-12 tip control-label">选填</span>
      </div>
       <div class="form-group" id='appearance'> 
       <label for="inputPassword3" class="col-lg-2  col-sm-2 col-md-2 col-xs-12 control-label">品相</label> 
       <div class="col-lg-4 col-md-d col-sm-4  col-xs-12"> 
        <select class="form-control">
        <option value="">请选择</option>
        <option value="">10品</option>
        <option value="">9品</option>
        <option value="">8品</option>
        <option value="">7品</option>
        <option value="">6品</option>
        <option value="">5品及以下</option>
        </select>
       </div> 
       <span  class="col-lg-6 col-sm-6 col-md-6 col-xs-12 tip control-label">选填</span>
      </div> 
      <div class="form-group"> 
       <label for="inputPassword3" class="col-lg-2  col-sm-2 col-md-2 col-xs-12 control-label">来源</label> 
       <div class="col-lg-4 col-md-d col-sm-4  col-xs-12"> 
        <select class="form-control" id='art-source'>
        <option value="0">请选择</option>
        <option value="1">自创</option>
        <option value="2">购买</option>
        <option value="3">获赠</option>
        <option value="4">借进</option>
        </select>
       </div> 
       <span  class="col-lg-6 col-sm-6 col-md-6 col-xs-12 tip control-label">选填</span>
       <div class="col-lg-10 line-div shopTime hidden col-md-10 col-sm-10 pl mt10 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-2 col-xs-offset-0">
       <label for="inputPassword3" class="col-lg-1 tl  col-sm-1 col-md-2 col-xs-12 control-label">购买时间</label> 
       <div class="col-lg-3 col-md-3 col-sm-3   col-xs-12"> 
        <input type="text" class="form-control"  /> 
       </div> 
       <span  class="col-lg-6 col-sm-6 col-md-6 col-xs-12 tip control-label">选填</span>
       </div>
       <div class="col-lg-10 line-div hidden  shopPrice col-md-10 col-sm-10 pl mt10 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-2 col-xs-offset-0">
           <label for="inputPassword3" class="col-lg-1 tl  col-sm-1 col-md-2 col-xs-12 control-label">购买价格</label> 
       <div class="input-group col-lg-3 col-md-3 col-sm-3  col-xs-12 ">
         <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
         <span class="input-group-addon">元</span>
       </div>
       <span  class="col-lg-6 col-sm-6 col-md-6 col-xs-12 tip control-label">选填</span>
       </div>
       <div class="col-lg-10 line-div hidden shopObj col-md-10 col-sm-10 pl mt10 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-2 col-xs-offset-0">
           <label for="inputPassword3" class="col-lg-1 tl  col-sm-1 col-md-2 col-xs-12 control-label">购买对象</label> 
       <div class="col-lg-3 col-md-3 col-sm-3   col-xs-12"> 
        <input type="text" class="form-control"  /> 
       </div> 
       <span  class="col-lg-6 col-sm-6 col-md-6 col-xs-12 tip control-label">选填</span>
       </div>
       <div class="col-lg-10 line-div hidden shopPic col-md-10 col-sm-10 pl mt10 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-2 col-xs-offset-0">
           <label for="inputPassword3" class="col-lg-1 tl  col-sm-1 col-md-2 col-xs-12 control-label">本人近期照片</label> 
             <div class="col-lg-3 col-md-3 col-sm-3  col-xs-12 uploadsin"> 
                <input type="file" class="upload-inp" id="upload5" accept="image/*"/>
                <input type="hidden" id="parameter5">       
              </div>
              <div class='uploadsinImg hidden col-lg-9 col-md-9 col-sm-9  col-xs-12 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-0'></div>
             <span  class="col-lg-3 col-sm-3 col-md-3 col-xs-12 tip control-label">选填</span>
       </div>
      </div> 
      <div class="form-group"> 
       <label for="inputPassword3" class="col-lg-2  col-sm-2 col-md-2 col-xs-12 control-label">状态</label> 
       <div class="col-lg-4 col-md-d col-sm-4  col-xs-12"> 
        <select class="form-control" id='art-status'>
        <option value="0">请选择</option>
        <option value="1">在库</option>
        <option value="2">已售</option>
        <option value="3">已赠</option>
        <option value="4">借出</option>
        </select>
       </div> 
       <span  class="col-lg-6 col-sm-6 col-md-6 col-xs-12 tip control-label">选填</span>
      <div class="col-lg-10 hidden status-address line-div col-md-10 col-sm-10 pl mt10 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-2 col-xs-offset-0">
           <label for="inputPassword3" class="col-lg-1 tl  col-sm-1 col-md-2 col-xs-12 control-label">在库位置</label> 
       <div class="col-lg-3 col-md-3 col-sm-3   col-xs-12"> 
        <input type="text" class="form-control"  /> 
       </div> 
       <span  class="col-lg-6 col-sm-6 col-md-6 col-xs-12 tip control-label">选填</span>
       </div>
       <div class="col-lg-10 line-div hidden status-price col-md-10 col-sm-10 pl mt10 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-2 col-xs-offset-0">
           <label for="inputPassword3" class="col-lg-1 tl  col-sm-1 col-md-2 col-xs-12 control-label">购买价格</label> 
       <div class="input-group col-lg-3 col-md-3 col-sm-3  col-xs-12 ">
         <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
         <span class="input-group-addon">元</span>
       </div>
       <span  class="col-lg-6 col-sm-6 col-md-6 col-xs-12 tip control-label">选填</span>
       </div>
       <div class="col-lg-10 line-div hidden status-purpose col-md-10 col-sm-10 pl mt10 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-2 col-xs-offset-0">
           <label for="inputPassword3" class="col-lg-1 tl  col-sm-1 col-md-2 col-xs-12 control-label">已赠目的</label> 
       <div class="input-group col-lg-3 col-md-3 col-sm-3  col-xs-12 ">
         <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
         <span class="input-group-addon">元</span>
       </div>
       <span  class="col-lg-6 col-sm-6 col-md-6 col-xs-12 tip control-label">选填</span>
       </div>
      <div class="col-lg-10 line-div hidden status-pic col-md-10 col-sm-10 pl mt10 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-2 col-xs-offset-0">
           <label for="inputPassword3" class="col-lg-1 tl  col-sm-1 col-md-2 col-xs-12 control-label">相关附件</label> 
             <div class="col-lg-3 col-md-3 col-sm-3  col-xs-12 uploadsin"> 
                <input type="file" class="upload-inp" id="upload7" accept="image/*"/>
                <input type="hidden" id="parameter7">       
              </div>
              <div class='uploadsinImg hidden col-lg-9 col-md-9 col-sm-9  col-xs-12 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-0'></div>
             <span  class="col-lg-3 col-sm-3 col-md-3 col-xs-12 tip control-label">选填</span>
       </div>
      </div> 
      <div class="form-group"> 
       <label for="inputPassword3" class="col-lg-2  col-sm-2 col-md-2 col-xs-12 control-label">备忘录</label> 
         <div class="col-lg-4 col-md-4 col-sm-4  col-xs-12"> 
        <textarea class="form-control" rows="5"></textarea>
       </div>
       <span  class="col-lg-6 col-sm-6 col-md-6 col-xs-12 tip control-label">选填</span>
      </div> 
      <div class="form-group"> 
       <div class="col-sm-offset-2 col-lg-10"> 
        <button type="submit" class="btn btn-default col-lg-2">保存作品信息</button> 
       </div> 
      </div> 
     </form> 
    </article> 
   </div> 
  </div>  
<!-- 模态窗口 -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="exampleModalLabel">新建作品集</h4>
      </div>
      <div class="modal-body">
         <span class="modal-span">请如实填写展览记录，<span>经过主办方认证的展览记录才能被公开</span>。</span>
        <form class="clearfix">
          <div class="form-group clearfix">
             <label for="inputPassword3" class="col-lg-3  col-sm-3 col-md-3 col-xs-12 control-label">展览（项目）名称 </label> 
              <div class="col-lg-6 col-sm-6 col-md-6 col-xs-12"> 
                 <input type="text" class="form-control " id="works1">
              </div> 
              <span  class="col-lg-2 col-sm-2 col-md-2 col-xs-12 tip control-label red">选填</span>          
          </div>
          <div class="form-group clearfix">
              <label for="inputPassword3" class="col-lg-3  col-sm-3 col-md-3 col-xs-12 control-label">开始时间 </label> 
              <div class="col-lg-6 col-sm-6 col-md-6 col-xs-12"> 
                 <input type="text" class="form-control " id="">
              </div>
              <span  class="col-lg-2 col-sm-2 col-md-2 col-xs-12 tip control-label red">选填</span>           
          </div>
          <div class="form-group clearfix">
              <label for="inputPassword3" class="col-lg-3  col-sm-3 col-md-3 col-xs-12 control-label">结束时间 </label> 
              <div class="col-lg-6 col-sm-6 col-md-6 col-xs-12"> 
                 <input type="text" class="form-control " id="">
              </div>
              <span  class="col-lg-2 col-sm-2 col-md-2 col-xs-12 tip control-label red">选填</span>           
          </div>
          <div class="form-group clearfix">
              <label for="inputPassword3" class="col-lg-3  col-sm-3 col-md-3 col-xs-12 control-label">主办方 </label> 
              <div class="col-lg-6 col-sm-6 col-md-6 col-xs-12"> 
                 <input type="text" class="form-control " id="">
              </div>
              <span  class="col-lg-2 col-sm-2 col-md-2 col-xs-12 tip control-label red">选填</span>           
          </div>
           <div class="form-group clearfix">
              <label for="inputPassword3" class="col-lg-3  col-sm-3 col-md-3 col-xs-12 control-label">展览地点 </label> 
              <div class="col-lg-6 col-sm-6 col-md-6 col-xs-12"> 
                 <input type="text" class="form-control " id="">
              </div>
              <span  class="col-lg-2 col-sm-2 col-md-2 col-xs-12 tip control-label red">选填</span>           
          </div>
           <div class="form-group clearfix">
              <label for="inputPassword3" class="col-lg-3  col-sm-3 col-md-3 col-xs-12 control-label">展览类型 </label> 
              <label class="radio-inline col-lg-2 col-md-3 col-sm-3  col-xs-12 zd-radio">
                <input type="radio" name="creation" id="creation1" value="option2">个展
              </label>
              <label class="radio-inline col-lg-4 col-md-4 col-sm-4  col-xs-12 zd-radio">
                <input type="radio" name="creation" id="creation2" value="option3">群展或项目
              </label>
              <span  class="col-lg-2 col-sm-2 col-md-2 col-xs-12 tip control-label red">选填</span>           
          </div>
           <div class="form-group clearfix">
              <label for="inputPassword3" class="col-lg-3  col-sm-3 col-md-3 col-xs-12 control-label">主办方 </label> 
              <div class="col-lg-6 col-md-6 col-sm-6  col-xs-12 uploadsin"> 
                <input type="file" class="upload-inp" id="upload3" accept="image/*"/>
                <input type="hidden" id="parameter3">       
              </div>
              <div class='uploadsinImg hidden col-lg-9 col-md-9 col-sm-9  col-xs-12 col-lg-offset-3 col-md-offset-3 col-sm-offset-3 col-xs-offset-0'></div>
              <span  class="col-lg-2 col-sm-2 col-md-2 col-xs-12 tip control-label red">选填</span>           
          </div>
           <div class="form-group"> 
       <label for="inputPassword3" class="col-lg-3  col-sm-3 col-md-3 col-xs-12 control-label">其他信息 </label> 
       <div class="col-lg-6 col-md-6 col-sm-6  col-xs-12"> 
        <textarea class="form-control" rows="5"></textarea>
       </div> 
      </div> 
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" id="create_group" class="btn btn-primary col-lg-2  col-sm-2 col-md-4 col-xs-8 col-lg-offset-4 col-md-offset-3 col-sm-offset-3 col-xs-offset-4">确定</button>
      </div>
    </div>
  </div>
</div>
  <script src="script/all.js"></script> 
  <script type="text/javascript">
  ;$(function() {
  var artImages=[];
  var shuliang=5; //设置图片数量
        $("#upload2").uploadify({
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
                     $("#parameter2").val(artImages);       
                     var html="";          
                     $.each(artImages,function(i,d){
                       html='<li class="col-lg-2 col-sm-2 col-md-2 col-xs-2"><img src="'+artImages[i]+'" alt=""><div class="removeImages"><i class="iconfont">&#xe635;</i></div><div class="state success">上传成功</div></li>';
                                $("#images").removeClass('hidden').append(html);         
                     })                      
                     $("#upload2").parents(".form-group").find('.tip').hide();
                     $("#upload2").parents(".upload").attr('class','col-lg-10 col-md-10 col-sm-10  col-xs-12 upload');
                     var $uoloadli=$("#upload2").parents(".form-group").find("li");
                     $uoloadli.find(".removeImages").on('click',function(){
                        var imgsrc=$(this).parents("li").find("img").attr('src');
                        var ind=artImages.indexOf(imgsrc);                     
                        artImages.splice(ind,1); 
                        $(this).parents("li").remove();                         
                        $("#parameter2").val(artImages);
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
// 上传代表作品多图
new YMDselect('year1','month1');
// 出生年月调用
upload("upload2",'parameter2','index.php',1,4);
upload("upload3",'parameter3','index.php',1,4);
upload("upload4",'parameter4','index.php',1,2);
upload("upload5",'parameter5','index.php',1,2);
upload("upload6",'parameter6','index.php',1,2);
upload("upload7",'parameter7','index.php',1,2);
  </script>
 </body>
</html>