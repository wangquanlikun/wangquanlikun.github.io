document.getElementById("Dora01").value=0;
document.getElementById("Dora02").value=0;
document.getElementById("Dora03").value=0;
document.getElementById("Dora04").value=0;

document.getElementById("mingke01").value=0;
document.getElementById("anke01").value=0;
document.getElementById("minggang01").value=0;
document.getElementById("angang01").value=0;
document.getElementById("mingke02").value=0;
document.getElementById("anke02").value=0;
document.getElementById("minggang02").value=0;
document.getElementById("angang02").value=0;

document.getElementById("zifengchangfeng").value=0;
document.getElementById("sanyuan").value=0;

document.getElementById("benchang").value=0;
document.getElementById("riichipoint").value=0;

//初始获取番数-非役满
{
//1番
var value1fan = 0;
var checkboxes1fan = document.querySelectorAll(".checkbox-label-1fan");
checkboxes1fan.forEach(function(checkbox) {
checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
        value1fan++;
      } else {
        value1fan--;
      }
});});
//2番
var value2fan = 0;
var checkboxes2fan = document.querySelectorAll(".checkbox-label-2fan");
checkboxes2fan.forEach(function(checkbox) {
checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
        value2fan+=2;
      } else {
        value2fan-=2;
      }
});});
//副露-1番
var valuefulu = 0;
var checkboxesfulu = document.querySelectorAll(".checkbox-label-fulu");
checkboxesfulu.forEach(function(checkbox) {
checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
        valuefulu--;
      } else {
        valuefulu++;
      }
});});
//3番
var value3fan = 0;
var checkboxes3fan = document.querySelectorAll(".checkbox-label-3fan");
checkboxes3fan.forEach(function(checkbox) {
checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
        value3fan+=3;
      } else {
        value3fan-=3;
      }
});});
//6番
var valueqingyise = 0;
var checkboxqingyise = document.getElementById("qingyise");
checkboxqingyise.addEventListener("change", function() {
    if (checkboxqingyise.checked) {
      valueqingyise = 6;
    } else {
      valueqingyise = 0;
    }
});
//满贯//5番
var valuemanguan = 0;
var checkboxesmanguan = document.querySelectorAll(".checkbox-label-manguan");
checkboxesmanguan.forEach(function(checkbox) {
checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
        valuemanguan+=5;
      } else {
        valuemanguan-=5;
      }
});});
}
//获取役满
{
//一倍役满
var valueyiman = 0;
var checkboxesyiman = document.querySelectorAll(".checkbox-label-yiman");
checkboxesyiman.forEach(function(checkbox) {
checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
        valueyiman++;
      } else {
        valueyiman--;
      }
});});
//两倍役满
var valuedoubleyiman = 0;
var checkboxesdoubleyiman = document.querySelectorAll(".checkbox-label-doubleyiman");
checkboxesdoubleyiman.forEach(function(checkbox) {
checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
        valuedoubleyiman+=2;
      } else {
        valuedoubleyiman-=2;
      }
});});
}
//获取符数
{
var fu001 = 20;
var checkboxzimofu = document.getElementById("zimo");
checkboxzimofu.addEventListener("change", function() {
    if (checkboxzimofu.checked)
        fu001+=2;
    else
        fu001-=2;
});

var checkboxmenqianqingdianhe = document.getElementById("menqianqingdianhe");
checkboxmenqianqingdianhe.addEventListener("change", function() {
    if (checkboxmenqianqingdianhe.checked)
        fu001+=10;
    else
        fu001-=10;
});
var tingpai2fu = 0;
var checkboxes2fu = document.querySelectorAll(".checkbox-label-2fu");
checkboxes2fu.forEach(function(checkbox) {
checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
        tingpai2fu+=2;
      } else {
        tingpai2fu-=2;
      }
});});
}
//特殊情况
{
    //七对子
    var qiduizi = 0;
    var checkboxqiduizi = document.getElementById("qiduizifushu");
    checkboxqiduizi.addEventListener("change", function() {
    if (checkboxqiduizi.checked) {
      qiduizi = 1;
    } else {
      qiduizi = 0;
    }
});
    //平和
    var pinghe = 0;
    var checkboxpinghe = document.getElementById("pinghefushu");
    checkboxpinghe.addEventListener("change", function() {
    if (checkboxpinghe.checked) {
      pinghe = 1;
    } else {
      pinghe = 0;
    }
});
    //流局满贯
    var liujumanguanfushu = 0;
    var checkboxliujumanguanfushu = document.getElementById("liujumanguanfushu");
    checkboxliujumanguanfushu.addEventListener("change", function() {
    if (checkboxliujumanguanfushu.checked) {
      liujumanguanfushu = 1;
    } else {
      liujumanguanfushu = 0;
    }
});
    var liujumanguan = 0;
    var checkboxliujumanguan = document.getElementById("liujumanguan");
    checkboxliujumanguan.addEventListener("change", function() {
    if (checkboxliujumanguan.checked) {
      liujumanguan = 1;
    } else {
      liujumanguan = 0;
    }
});
    //国士无双
    var guoshiwushuang = 0;
    var checkboxguoshiwushuang = document.getElementById("guoshiwushuangfushu");
    checkboxguoshiwushuang.addEventListener("change", function() {
    if (checkboxguoshiwushuang.checked) {
      guoshiwushuang = 1;
    } else {
      guoshiwushuang = 0;
    }
});

//人和
var renhe = 0;
var checkboxrenhe = document.getElementById("renhe");
checkboxrenhe.addEventListener("change", function() {
if (checkboxrenhe.checked) {
    renhe = 1;
} else {
    renhe = 0;
}
});
}
//点数计算
{
    var zhuangjia = 0;
    var zijia = 0;
    var checkboxzhuangjia = document.getElementById("zhuangjia");
    checkboxzhuangjia.addEventListener("change", function() {
    if (checkboxzhuangjia.checked)
        zhuangjia = 1;
    else
        zhuangjia = 0;
    });
    var checkboxzijia = document.getElementById("zijia");
    checkboxzijia.addEventListener("change", function() {
    if (checkboxzijia.checked)
        zijia = 1;
    else
        zijia = 0;
    });
}



function recordInput()
{
    var value5fan = 0;
    var valueyimanrenhe = 0;
    if(renhe==1)
    {
        var selectElementrenhe = document.getElementById("renhe01");
        var selectedValuerenhe = selectElementrenhe.value;
        var resultValuerenhe;
        
        
        if (selectedValuerenhe === "yiman") {
            resultValuerenhe = 1;
            value5fan=0;
            valueyimanrenhe = 1;

        } else if (selectedValuerenhe === "manguan") {
            resultValuerenhe = -1;
            value5fan=5;
            valueyimanrenhe = 0;
        }
    }

    if(valueyiman==0&&valuedoubleyiman==0&&(renhe==0||(renhe==1&&resultValuerenhe==-1)))
    {
    var dora = parseInt(document.getElementById("Dora01").value)+parseInt(document.getElementById("Dora02").value)+parseInt(document.getElementById("Dora03").value)+parseInt(document.getElementById("Dora04").value);
    var fan = 0;
    fan=dora+parseInt(value1fan)+parseInt(value2fan)+parseInt(valuefulu)+parseInt(value3fan)+parseInt(valueqingyise)+parseInt(valuemanguan)+parseInt(value5fan);
    if(liujumanguan==1)
    {
        fan=5;
        document.getElementById("man").textContent = "流局满贯";
        document.getElementById("fan").innerHTML = "&emsp;";
        document.getElementById("fu").innerHTML = "&emsp;";
        get_a = 2000;
    }
    else
        document.getElementById("fan").textContent = parseInt(fan);

    
    var fu002 = parseInt(document.getElementById("mingke01").value)*2+parseInt(document.getElementById("mingke02").value)*4+parseInt(document.getElementById("anke01").value)*4+parseInt(document.getElementById("anke02").value)*8+parseInt(document.getElementById("minggang01").value)*8+parseInt(document.getElementById("minggang02").value)*16+parseInt(document.getElementById("angang01").value)*16+parseInt(document.getElementById("angang02").value)*32;
    var fu003 = parseInt(document.getElementById("zifengchangfeng").value)*2+parseInt(document.getElementById("sanyuan").value)*2;
    var fu = fu001+fu002+fu003+tingpai2fu;
    if(fu%10!=0)
        fu=fu-fu%10+10;//符数向上取整

    if(qiduizi==1)
        fu=25;
    if(pinghe==1)
        fu=20;
    
    if(liujumanguanfushu==1||liujumanguan==1)
        fu=20;
    else
        document.getElementById("fu").textContent = parseInt(fu);
    
        var get_a;

    if(fan<5)
        document.getElementById("man").textContent = "";
    else if(fan==5&&liujumanguan==0){
        document.getElementById("man").textContent = "满贯";
    get_a = 2000;}
    else if(fan>=6&&fan<=7){
        document.getElementById("man").textContent = "跳满";
    get_a=3000;}
    else if(fan>=8&&fan<=10){
        document.getElementById("man").textContent = "倍满";
    get_a=4000;}
    else if(fan>=11&&fan<=12){
        document.getElementById("man").textContent = "三倍满";
    get_a=6000;}
    else if(fan>=13){
        document.getElementById("man").textContent = "累计役满";
    get_a=8000;}
        
        var selectElementwayofwin = document.getElementById("wayofwin");
        var selectedValuewayofwin = selectElementwayofwin.value;
        var resultValuewayofwin;
        
        if (selectedValuewayofwin === "zimo") {
            resultValuewayofwin = -1;
        } else if (selectedValuewayofwin === "dianhe") {
            resultValuewayofwin = 1;
        }
    
        var selectElementhumannum = document.getElementById("humannum");
        var selectedValuehumannum = selectElementhumannum.value;
        var resultValuehumannum;
        
        if (selectedValuehumannum === "four") {
            resultValuehumannum = 4;
        } else if (selectedValuehumannum === "three") {
            resultValuehumannum = 3;
        }

        var benchang=parseInt(document.getElementById("benchang").value)*100;
        var riichipoint=parseInt(document.getElementById("riichipoint").value)*1000;

        if(fan<5)
            get_a=fu*(Math.pow(2,2+fan));

        if((fan==3&&fu>=70)||(fan==4&&fu>=40))
        {
            get_a=2000;
            document.getElementById("man").textContent = "满贯";
        }

        if(resultValuehumannum==4)
            {
                if(zhuangjia==1&&zijia==0)
                {
                    if(resultValuewayofwin==-1)
                    {
                        document.getElementById("get").textContent =  3*Math.ceil((2*parseInt(get_a))/100)*100+riichipoint+benchang*3;
                        document.getElementById("pay01").innerHTML = "&emsp;";
                        document.getElementById("pay02").textContent = Math.ceil((2*parseInt(get_a))/100)*100+benchang;
                        document.getElementById("pay03").innerHTML = "&emsp;";
                    }
                    else if(resultValuewayofwin==1)
                    {
                        document.getElementById("get").textContent =  Math.ceil((6*parseInt(get_a))/100)*100+riichipoint+benchang*3;
                        document.getElementById("pay01").innerHTML = "&emsp;";
                        document.getElementById("pay02").innerHTML = "&emsp;";
                        document.getElementById("pay03").textContent =  Math.ceil((6*parseInt(get_a))/100)*100+benchang*3;
                    }
                }
                else if(zhuangjia==0&&zijia==1)
                {
                    if(resultValuewayofwin==-1)
                    {
                        document.getElementById("get").textContent =  Math.ceil((2*parseInt(get_a))/100)*100+ 2*Math.ceil((parseInt(get_a))/100)*100+riichipoint+benchang*3;
                        document.getElementById("pay01").textContent =  Math.ceil((2*parseInt(get_a))/100)*100+benchang;
                        document.getElementById("pay02").textContent =  Math.ceil((parseInt(get_a))/100)*100+benchang;
                        document.getElementById("pay03").innerHTML = "&emsp;";
                    }
                    else if(resultValuewayofwin==1)
                    {
                        document.getElementById("get").textContent =  Math.ceil((4*parseInt(get_a))/100)*100+riichipoint+benchang*3;
                        document.getElementById("pay01").innerHTML = "&emsp;";
                        document.getElementById("pay02").innerHTML = "&emsp;";
                        document.getElementById("pay03").textContent =  Math.ceil((4*parseInt(get_a))/100)*100+benchang*3;
                    }
                }
            }
            else if(resultValuehumannum==3)
            {
                if(zhuangjia==1&&zijia==0)
                {
                    if(resultValuewayofwin==-1)
                    {
                        document.getElementById("get").textContent = 2* Math.ceil((2*parseInt(get_a))/100)*100+riichipoint+benchang*2;
                        document.getElementById("pay01").innerHTML = "&emsp;";
                        document.getElementById("pay02").textContent =  Math.ceil((2*parseInt(get_a))/100)*100+benchang;
                        document.getElementById("pay03").innerHTML = "&emsp;";
                    }
                    else if(resultValuewayofwin==1)
                    {
                        document.getElementById("get").textContent =  Math.ceil((6*parseInt(get_a))/100)*100+riichipoint+benchang*2;
                        document.getElementById("pay01").innerHTML = "&emsp;";
                        document.getElementById("pay02").innerHTML = "&emsp;";
                        document.getElementById("pay03").textContent =  Math.ceil((6*parseInt(get_a))/100)*100+benchang*2;
                    }
                }
                else if(zhuangjia==0&&zijia==1)
                {
                    if(resultValuewayofwin==-1)
                    {
                        document.getElementById("get").textContent =  Math.ceil((2*parseInt(get_a))/100)*100+ Math.ceil((parseInt(get_a))/100)*100+riichipoint+benchang*2;
                        document.getElementById("pay01").textContent =  Math.ceil((2*parseInt(get_a))/100)*100+benchang;
                        document.getElementById("pay02").textContent =  Math.ceil((parseInt(get_a))/100)*100+benchang;
                        document.getElementById("pay03").innerHTML = "&emsp;";
                    }
                    else if(resultValuewayofwin==1)
                    {
                        document.getElementById("get").textContent =  Math.ceil((4*parseInt(get_a))/100)*100+riichipoint+benchang*2;
                        document.getElementById("pay01").innerHTML = "&emsp;";
                        document.getElementById("pay02").innerHTML = "&emsp;";
                        document.getElementById("pay03").textContent =  Math.ceil((4*parseInt(get_a))/100)*100+benchang*2;
                    }
                }
            }
    }
    else
    {
        var yiman=parseInt(valueyiman)+parseInt(valuedoubleyiman)+parseInt(valueyimanrenhe);
        document.getElementById("fan").innerHTML = "&emsp;";
        document.getElementById("fu").innerHTML = "&emsp;";
        var get_a;
        if(yiman==1)
        document.getElementById("man").textContent = "役满";
        else if(yiman==2)
        document.getElementById("man").textContent = "两倍役满";
        else if(yiman==3)
        document.getElementById("man").textContent = "三倍役满";
        else if(yiman==4)
        document.getElementById("man").textContent = "四倍役满";
        else if(yiman==5)
        document.getElementById("man").textContent = "五倍役满";
        else if(yiman==6)
        document.getElementById("man").textContent = "六倍役满";
        else if(yiman>6)
        document.getElementById("man").textContent = yiman+"倍役满";
        else if(yiman==0)
        document.getElementById("man").textContent = "";
        get_a=8000*parseInt(yiman);

        var selectElementwayofwin = document.getElementById("wayofwin");
        var selectedValuewayofwin = selectElementwayofwin.value;
        var resultValuewayofwin;
        
        if (selectedValuewayofwin === "zimo") {
            resultValuewayofwin = -1;
        } else if (selectedValuewayofwin === "dianhe") {
            resultValuewayofwin = 1;
        }
    
        var selectElementhumannum = document.getElementById("humannum");
        var selectedValuehumannum = selectElementhumannum.value;
        var resultValuehumannum;
        
        if (selectedValuehumannum === "four") {
            resultValuehumannum = 4;
        } else if (selectedValuehumannum === "three") {
            resultValuehumannum = 3;
        }

        var benchang=parseInt(document.getElementById("benchang").value)*100;
        var riichipoint=parseInt(document.getElementById("riichipoint").value)*1000;

            if(resultValuehumannum==4)
            {
                if(zhuangjia==1&&zijia==0)
                {
                    if(resultValuewayofwin==-1)
                    {
                        document.getElementById("get").textContent =  3*Math.ceil((2*parseInt(get_a))/100)*100+riichipoint+benchang*3;
                        document.getElementById("pay01").innerHTML = "&emsp;";
                        document.getElementById("pay02").textContent = Math.ceil((2*parseInt(get_a))/100)*100+benchang;
                        document.getElementById("pay03").innerHTML = "&emsp;";
                    }
                    else if(resultValuewayofwin==1)
                    {
                        document.getElementById("get").textContent =  Math.ceil((6*parseInt(get_a))/100)*100+riichipoint+benchang*3;
                        document.getElementById("pay01").innerHTML = "&emsp;";
                        document.getElementById("pay02").innerHTML = "&emsp;";
                        document.getElementById("pay03").textContent =  Math.ceil((6*parseInt(get_a))/100)*100+benchang*3;
                    }
                }
                else if(zhuangjia==0&&zijia==1)
                {
                    if(resultValuewayofwin==-1)
                    {
                        document.getElementById("get").textContent =  Math.ceil((2*parseInt(get_a))/100)*100+ 2*Math.ceil((parseInt(get_a))/100)*100+riichipoint+benchang*3;
                        document.getElementById("pay01").textContent =  Math.ceil((2*parseInt(get_a))/100)*100+benchang;
                        document.getElementById("pay02").textContent =  Math.ceil((parseInt(get_a))/100)*100+benchang;
                        document.getElementById("pay03").innerHTML = "&emsp;";
                    }
                    else if(resultValuewayofwin==1)
                    {
                        document.getElementById("get").textContent =  Math.ceil((4*parseInt(get_a))/100)*100+riichipoint+benchang*3;
                        document.getElementById("pay01").innerHTML = "&emsp;";
                        document.getElementById("pay02").innerHTML = "&emsp;";
                        document.getElementById("pay03").textContent =  Math.ceil((4*parseInt(get_a))/100)*100+benchang*3;
                    }
                }
            }
            else if(resultValuehumannum==3)
            {
                if(zhuangjia==1&&zijia==0)
                {
                    if(resultValuewayofwin==-1)
                    {
                        document.getElementById("get").textContent = 2* Math.ceil((2*parseInt(get_a))/100)*100+riichipoint+benchang*2;
                        document.getElementById("pay01").innerHTML = "&emsp;";
                        document.getElementById("pay02").textContent =  Math.ceil((2*parseInt(get_a))/100)*100+benchang;
                        document.getElementById("pay03").innerHTML = "&emsp;";
                    }
                    else if(resultValuewayofwin==1)
                    {
                        document.getElementById("get").textContent =  Math.ceil((6*parseInt(get_a))/100)*100+riichipoint+benchang*2;
                        document.getElementById("pay01").innerHTML = "&emsp;";
                        document.getElementById("pay02").innerHTML = "&emsp;";
                        document.getElementById("pay03").textContent =  Math.ceil((6*parseInt(get_a))/100)*100+benchang*2;
                    }
                }
                else if(zhuangjia==0&&zijia==1)
                {
                    if(resultValuewayofwin==-1)
                    {
                        document.getElementById("get").textContent =  Math.ceil((2*parseInt(get_a))/100)*100+ Math.ceil((parseInt(get_a))/100)*100+riichipoint+benchang*2;
                        document.getElementById("pay01").textContent =  Math.ceil((2*parseInt(get_a))/100)*100+benchang;
                        document.getElementById("pay02").textContent =  Math.ceil((parseInt(get_a))/100)*100+benchang;
                        document.getElementById("pay03").innerHTML = "&emsp;";
                    }
                    else if(resultValuewayofwin==1)
                    {
                        document.getElementById("get").textContent =  Math.ceil((4*parseInt(get_a))/100)*100+riichipoint+benchang*2;
                        document.getElementById("pay01").innerHTML = "&emsp;";
                        document.getElementById("pay02").innerHTML = "&emsp;";
                        document.getElementById("pay03").textContent =  Math.ceil((4*parseInt(get_a))/100)*100+benchang*2;
                    }
                }
            }
    }
}