var array = []
var flag = false
var display = document.querySelector('.displayRes')
function clickNumKey(x) {

    
    if (flag==false && (x=='+' ||x=='-' ||x=='*' ||x=='/')) {
        
        array.push(x)
        display.innerText = array.join("");
        flag = true
    }else{
        if ((x=='+' ||x=='-' ||x=='*' ||x=='/')) {
            
        }else{

            array.push(x)
            
            display.innerText = array.join("");
        }
    }
    console.log(display.innerText);
}

function clickDelKey() {
    array.pop()
    display.innerText = array.join("");
    
}

function calculateRes() {
    var count = -1
    var symbol = ""
    for(var i=0;i<array.length;i++){
        if (array[i]=='+' ||array[i]=='-' ||array[i]=='x' ||array[i]=='/') {
            count = i
            symbol += array[i]
            break
        }
    }
    console.log(count);
    if (count==-1) {
        display.innerText = array.join("");
        
    }else{
        var str1 = ""
        var str2 = ""
        for(var i=0;i<array.length;i++){
            if (i<count) {
                str1 += array[i]
            }else if(i>count){
                str2 += array[i]
            }
        }
        
        switch (symbol) {
            case '+':
                display.innerText = Number(str1)+Number(str2);
                
                array = []
                break;
            case '-':
                display.innerText = Number(str1)-Number(str2);
                
                array = []
                break;
            case 'x':
                display.innerText = Number(str1)*Number(str2);
                
                array = []
                break;
            case '/':
                display.innerText = Number(str1)/Number(str2);
                
                array = []
                break;
        
            default:
                break;
        }

    }
    flag = false
}

function reset() {
    display.innerText = "";
    array = []
    flag=false
}