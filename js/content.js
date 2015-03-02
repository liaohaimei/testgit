$(function(){
var $nlist=$(".n-list dl"),
    $nlength=$nlist.length;
	for(var i=0 ; i<$nlength ; i++)
	{
	TimePoor(i)
	}
	});


function TimePoor(i)
{
var $nlist=$(".n-list dl");
var releasetime = $($nlist).eq(i).find("#releasetime").val(),//获取发布时间
    rday = new Date(releasetime.replace(/-/g, "/")),
	rYear=rday.getFullYear(),
	rMon = rday.getMonth() + 1,
	rDay = rday.getDate(),
	rh = rday.getHours(), 
	rm = rday.getMinutes(), 
	rse = rday.getSeconds(); 
var d = new Date(),
	vYear = d.getFullYear(),
	vMon = d.getMonth() + 1,
	vDay = d.getDate(),
	h = d.getHours(), 
	m = d.getMinutes(), 
	se = d.getSeconds(); 

//rs=rYear+"-"+(rMon<10 ? "0" + rMon : rMon)+"-"+(rDay<10 ? "0"+ rDay : rDay)+" "+(rh<10 ? "0"+ rh : rh)+":"+(rm<10 ? "0" + rm : rm)+":"+(rse<10 ? "0" +rse : rse);

s=vYear+"-"+(vMon<10 ? "0" + vMon : vMon)+"-"+(vDay<10 ? "0"+ vDay : vDay)+" "+(h<10 ? "0"+ h : h)+":"+(m<10 ? "0" + m : m)+":"+(se<10 ? "0" +se : se);

var day = new Date(s.replace(/-/g, "/"));
		//计算当前时间离开 设置发布时间为多少秒
		var ss = (Date.parse(day) - Date.parse(rday))/1000;
		//获得天数
		var dd = parseInt(ss/86400);
		//获得小时数
		var hh = parseInt(ss/3600-dd*24);
		//获得分钟数
	    var ff = parseInt(ss/60-(hh*60+dd*1440));
		
		if (ss<86400){
			if ((vYear==rYear)&&(vMon==rMon)&&(vDay-rDay)==1)
			{
			 $($nlist).eq(i).find(".time").text("a day ago-");
			}
			else{
				if (ss<3600){
				$($nlist).eq(i).find(".time").text(ff+" minutes ago-");	
				}else{
				 $($nlist).eq(i).find(".time").text(hh+" hours ago-");
				}
				}
			
			}
			else {
				if ((vYear==rYear)&&(vMon==rMon)&&(vDay-rDay)==1)
			{
			 $($nlist).eq(i).find(".time").text("a day ago-");
			}
			else{
				 $($nlist).eq(i).find(".time").text(dd+" day ago-");
				}
				}	
	}


 $(function(){ 
	  //头部字符控制
	  		var ntitle = $(".n-title");
			for(var i = 0;i<ntitle.length;i++){
				if($(ntitle[i]).text().length>25){
					$(ntitle[i]).text($(ntitle[i]).text().substr(0,25)+"...");
					}
				}
	 //段落字符控制
	  		var ptext = $(".ptext");
			for(var i = 0;i<ptext.length;i++){
				if($(ptext[i]).text().length>250){
					$(ptext[i]).text($(ptext[i]).text().substr(0,250)+"...");
					}
				}	
	});

