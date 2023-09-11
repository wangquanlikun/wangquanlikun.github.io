const fanCells = document.querySelectorAll('#fan td');
const fuCells = document.querySelectorAll('#fu td');

let selectedNumberfan = null;
let selectedNumberfu = null;

var fan = 0;
var fu = 0;

fanCells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (selectedNumberfan) {
            selectedNumberfan.classList.remove('selected');
        }
        
        cell.classList.add('selected');
        selectedNumberfan = cell;
        fan = parseInt(cell.getAttribute('data-number'));
    });
});

fuCells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (selectedNumberfu) {
            selectedNumberfu.classList.remove('selected');
        }
        
        cell.classList.add('selected');
        selectedNumberfu = cell;
        fu = parseInt(cell.getAttribute('data-number'));
    });
});

document.getElementById("benchang").value=0;
document.getElementById("riichipoint").value=0;

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

function recordInput()
{
    var get_a;

    if(fan<5)
        document.getElementById("man").textContent = "";
    else if(fan==5){
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

    document.getElementById("fantext").textContent = parseInt(fan);
    document.getElementById("futext").textContent = parseInt(fu);

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