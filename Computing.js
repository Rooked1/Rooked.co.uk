window.addEventListener("DOMContentLoaded", function() {
    //maybe change into 2 data objects and have img
    data={
        "What nonsense is this?":"to be sure",




    }
    
    //count clicks and record in variable, use that variable to get object variable and put into element
        
        let clickCount=0;
        let clickCount1=0;
        let abery = document.getElementById("name");
        let bbery = document.getElementById("answer")
        document.getElementById("myBtn1").addEventListener("click", myFunction);
        document.getElementById("myBtn").addEventListener("click", myFunction1);
        
        function myFunction(){
         
         
        if(clickCount==clickCount1){
        abery.innerHTML="";
        bbery.innerHTML="";
        let van=Object.keys(data);
        abery.innerHTML+=van[clickCount];
        clickCount+=1;
        } return;}
    
    
        function myFunction1(){
             
            if(clickCount-1==clickCount1){
            bbery.innerHTML="";
            let answer=Object.values(data);
            bbery.innerHTML+=answer[clickCount1];
            clickCount1+=1;
            } return;}
    
    false}
    
    );
    