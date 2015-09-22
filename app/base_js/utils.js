

var mod = {
  url2Json:function(url){
    var arr=url.split('&');
    var json={};
    for(var i=0;i<arr.length;i++){
      var arr2=arr[i].split('=');
      json[arr2[0]]=arr2[1];
    }
    return json;
  },
  // oForm:jquery dom
  getFormData:function(oForm){
    return mod.url2Json(decodeURIComponent(oForm.serialize()));
  },
  _ajax:function (url,data,fnSucc,fnErr,type){
    $.ajax({
        type: type||"POST",
        url: url,
        data: data,
        dataType: "json",
        success: function(data){
          if(data.success == 1){
            fnSucc && fnSucc(data);
          }
          else{
            fnErr && fnErr(data);
          }
        },
        error:function(){
          alert('error 500')
        }
    });
  },
};



module.exports = mod