/*
  年月日联动下拉选择JS封装类 Ver 1.0 版
  制作时间:2013-3-12
　更新时间:2013-3-12
  应用说明:页面包含<script type="text/javascript" src="YMDClass.js" charset="utf-8"></script>
  <select name="year1"></select>
  <select name="month1"></select>
  <select name="day1"></select>
  <script>
  new YMDselect('year1','month1','day1',1990,2,10);
  </script>
  年月联动
    new YMDselect('year1','month1');
    new YMDselect('year1','month1',1990);
    new YMDselect('year1','month1',1990,2);
  年月日联动
    new YMDselect('year1','month1','day1');
    new YMDselect('year1','month1','day1',1990);
    new YMDselect('year1','month1','day1',1990,2);
    new YMDselect('year1','month1','day1',1990,2,10);
\*** 程序制作/版权所有:Kevin QQ:251378427 E-Mail:yeminch@qq.com 网址:http://iulog.com ***/
SYT="-请选择年份-";
SMT="-请选择月份-";
SDT="-请选择日期-";
BYN=50;//年份范围往前50年
AYN=5;//年份范围往后0年
function YMDselect(){
  this.SelY=document.getElementsByName(arguments[0])[0];
  this.SelM=document.getElementsByName(arguments[1])[0];
  this.SelD=document.getElementsByName(arguments[2])[0];
  this.DefY=this.SelD?arguments[3]:arguments[2];
  this.DefM=this.SelD?arguments[4]:arguments[3];
  this.DefD=this.SelD?arguments[5]:arguments[4];
  this.SelY.YMD=this;
  this.SelM.YMD=this;
  this.SelY.onchange=function(){YMDselect.SetM(this.YMD)};
  if(this.SelD)this.SelM.onchange=function(){YMDselect.SetD(this.YMD)};
  YMDselect.SetY(this)
};
//设置年份
YMDselect.SetY=function(YMD){
  dDate = new Date();
  dCurYear = dDate.getFullYear();
  YMD.SelY.options.add(new Option(SYT,'0'));
  for(i = dCurYear+AYN; i>(dCurYear-BYN); i--){
    YMDYT=i+'年';
    YMDYV=i;
    OptY = new Option(YMDYT,YMDYV);
    YMD.SelY.options.add(OptY);
    if(YMD.DefY==YMDYV) OptY.selected=true
  }
  YMDselect.SetM(YMD)
};
//设置月份
YMDselect.SetM=function(YMD){
  YMD.SelM.length = 0;
  YMD.SelM.options.add(new Option(SMT,'0'));
  if(YMD.SelY.value>0){
    for(var i=1;i<=12;i++){
      YMDMT=i+'月';
      YMDMV=i;
      OptM=new Option(YMDMT,YMDMV);
      YMD.SelM.options.add(OptM);
      if(YMD.DefM==YMDMV) OptM.selected=true
    }
  }
  if(YMD.SelD)YMDselect.SetD(YMD)
};
//设置日期
YMDselect.SetD=function(YMD){
  YI=YMD.SelY.value;
  MI=YMD.SelM.value;
  YMD.SelD.length = 0;
  YMD.SelD.options.add(new Option(SDT,'0'));
  if(YI>0 && MI>0){
    dPrevDate = new Date(YI, MI, 0);
    daysInMonth=dPrevDate.getDate();
    for (d = 1; d <= parseInt(daysInMonth); d++) {
      YMDDT=d+'日';
      YMDDV=d;
      OptD=new Option(YMDDT,YMDDV);
      YMD.SelD.options.add(OptD);
      if(YMD.DefD==YMDDV)OptD.selected=true
    }
  }
}
// 上面是年月日插件

    $("#real-name .uploads").each(function(index,el){
   var fileUl=document.getElementById('real-name');
   var file=fileUl.getElementsByClassName('uploads')[index];
   file.getElementsByTagName('input')[0].onchange=function(){
  var fileList = this.files; 
  var imgObjPreview = this.parentNode.getElementsByTagName('img')[0];
    if (this.files && this.files[0]) {
    //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式
    imgObjPreview.src = window.URL.createObjectURL(this.files[0]);
    // console.log(this.parentNode.parentNode.getElementsByTagName("span")[0].innerHTML='111');
    var spanReal=this.parentNode.parentNode.getElementsByTagName("span")[0];
    var buttonReal=this.parentNode.parentNode.getElementsByTagName("button")[0];
    var divReal=this.parentNode.parentNode;
    var onc=$(this).parents(".uploads").find(".upload-btn");
    // buttonReal.hide();
    
    if(spanReal){spanReal.remove();}
    onc.html("重新上传");
    onc.addClass('resetBtn col-lg-6').removeClass('form-control');
    $(this).parents('.form-group').append(onc);   
    }
    else {
    //IE下，使用滤镜
    this.select();
    var imgSrc=this.value;    //这里的imgsrc地址直接拿的input的
    var localImagId = this.parentNode.getElementsByTagName('img')[0];
    
    //图片异常的捕捉，防止用户修改后缀来伪造图片

    try {
    localImagId.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";

    localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
    imgObjPreview.src=imgSrc;

    }
    catch (e) {

    alert("您上传的图片格式不正确，请重新选择!");

    return false;

    }
    document.selection.empty();

    }
    return true;
   }
});
    // 上面是实名认证页面的上传图片
 $(".btn-group .dropdown-menu li").click(function(){
     var downText=$(this).text();
     var html=""+downText+"    <i class='iconfont font16'>&#xe623;</i>";
     $(this).parents(".btn-group").find(".dropdown-toggle").html(html);
})
 // 顶部下拉三角
   $(".zd-checkbox").click(function(){
    if($(this).find('input').prop('checked')){
      $(this).find('input').prop('checked',false);
      $(this).removeClass('check-a');
    }
    else{
       $(this).find('input').prop('checked',true);
      $(this).addClass('check-a');
    }
  })
   // checkbox选择
   $(".zd-list .other .autor").hover(function(){
      $(this).parents(".other").find(".authorTip").fadeIn(300);
    },function(){
      $(this).parents(".other").find(".authorTip").fadeOut(300);
    })
   // 艺术家信息页面作者信息鼠划效果
   var zdListMargin=parseInt($(".zd-list-li").css("marginLeft"));
    if(zdListMargin<10){
      $(".zd-list-li").css("margin","15px 15px");
    }
    // 设置user_info页面的列表，当间距小于10px的时候其四周的边距为15px
    $(".right-article .zd-checkbox input[type='checkbox']").on('click',function(){
        if($(this).prop('checked')){
          $(this).parents(".form-group").find("input[type='text']").prop("disabled",false);
        }
        else{
          $(this).parents(".form-group").find("input[type='text']").prop("disabled",true).val("");
        }
     })
    // 我的信息页面，当选则长期有效后设置前面的文本框不可输入并清空

  