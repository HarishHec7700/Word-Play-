function assign(){
    document.getElementById("console").value=getOut()+this.id;
    
}
function getOut(){
    out=document.getElementById("console").value;
    return out;
}
function reset_tick(){
    document.getElementById("correct").style.display="none";
    document.getElementById("console").style.border=" 1px grey solid";
}
// doubt
function printOut(new_out){
    // let output=document.getElementById("console").value;
    // if(output=="")
    //     document.getElementById("result").innerHTML=output;
    // // else if(output==new_out){
    // // }
    // else
    //     document.getElementById("result").innerHTML=output+new_out;

    
    
    list_out=document.createElement('li');
    list_out.innerHTML=new_out;
    // list_out.style.list-style="lower-roman";     ??? 
    document.getElementById("result").appendChild(list_out);
}
function reset(){
    document.getElementById("console").value="";
}
function check(){
    let out=document.getElementById("console").value;
    if(out.length<=5){
        if(out=="SIT"){
            document.getElementById("res_title").style.visibility="visible";
            document.getElementById("correct").style.display="block";
            printOut(out);
            reset();
        }else if(out=="TIE"){
            document.getElementById("res_title").style.visibility="visible";
            document.getElementById("correct").style.display="block";
            document.getElementById("result").innerHTML=out;
            printOut(out);
            reset();    
        }else if(out=="SEA"){
            document.getElementById("res_title").style.visibility="visible";
            document.getElementById("correct").style.display="block";
            document.getElementById("result").innerHTML=out;
            printOut(out);
            reset();
        }else if(out=="SAT"){
            document.getElementById("res_title").style.visibility="visible";
            document.getElementById("correct").style.display="block";
            reset();    
            printOut(out);
        }else if(out=="TEA"){
            document.getElementById("res_title").style.visibility="visible";
            document.getElementById("correct").style.display="block";
            document.getElementById("result").innerHTML=out;
            printOut(out);
            reset();    
        }else if(out=="EAT"){
            document.getElementById("res_title").style.visibility="visible";
            document.getElementById("correct").style.display="block";
            document.getElementById("result").innerHTML=out;
            printOut(out);
            reset();    
        }else if(out=="ATE"){
            document.getElementById("res_title").style.visibility="visible";
            document.getElementById("correct").style.display="block";
            document.getElementById("result").innerHTML=out;
            printOut(out);
            reset();    
        }else if(out=="IT"){
            document.getElementById("res_title").style.visibility="visible";
            document.getElementById("correct").style.display="block";
            document.getElementById("result").innerHTML=out;
            printOut(out);
            reset();    
        }else if(out=="AT"){
            document.getElementById("res_title").style.visibility="visible";
            document.getElementById("correct").style.display="block";
            document.getElementById("result").innerHTML=out;
            printOut(out);
            reset();    
        }else if(out=="TIE"){
            document.getElementById("res_title").style.visibility="visible";
            document.getElementById("correct").style.display="block";
            document.getElementById("result").innerHTML=out;
            printOut(out);
            reset();    
        }else if(out=="IS"){
            document.getElementById("res_title").style.visibility="visible";
            document.getElementById("correct").style.display="block";
            document.getElementById("result").innerHTML=out;
            printOut(out);
            reset();
        }else if(out=="AS"){
            document.getElementById("res_title").style.visibility="visible";
            document.getElementById("correct").style.display="block";
            document.getElementById("result").innerHTML=out;
            printOut(out);
            reset();
        }else if(out=="AT"){
            document.getElementById("res_title").style.visibility="visible";
            document.getElementById("correct").style.display="block";
            document.getElementById("result").innerHTML=out;
            printOut(out);
            reset();
        }else if(out=="SET"){
            document.getElementById("res_title").style.visibility="visible";
            document.getElementById("correct").style.display="block";
            document.getElementById("result").innerHTML=out;
            printOut(out);
            reset();
        }        
        else{
            document.getElementById("console").style.border= "2px red solid";
            document.getElementById("wrong").style.display="block";
            // reset_tick();     ??????
        }
    }else{
        document.getElementById("console").style.border= "2px red solid";
        document.getElementById("wrong").style.display="block";
    }
} 
// assigning the add listener for letter buttons

let letters=document.getElementsByClassName("letters");
let clr=document.getElementById("clear");

for(i=0;i<letters.length;i++)
    letters[i].addEventListener("click",assign);
// reset();    

document.getElementById("eval").addEventListener("click",check);
clr.addEventListener("click",reset);