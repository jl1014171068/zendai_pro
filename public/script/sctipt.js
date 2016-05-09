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
    buttonReal.remove();
    
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