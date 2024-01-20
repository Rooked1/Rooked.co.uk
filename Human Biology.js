window.addEventListener("DOMContentLoaded", function() {
    //maybe change into 2 data objects and have img
    data={
        "The nervous system is divided into what 2 parts?": "The central nervous system and the peripheral nervous system",
        "What does the central nervous system comprise of?": "The brain,the spinal cord, optic nerve and the retinas of the eyes",
        "What two main parts is the periperhal nervous system divided up into?":"The somatic and autonomic nervous system",
        "What is the autonomic system further divided into?":"The symapathetic and parasympathetic nervous systems",
        "What does the peripheral nervous system comprise of?":"The peripheral nervous system comproses all sensory and motor neurones outside the central nervous system",
        "What does the somatic nervous system control?":"It controls the volunatary movements of skeletal muscles (and also some reflex actions)",
        "How does the somatic nervous system control voluntary movements?":"This control involves sensory neurons from sense organs to CNS and motor neurons from CNS to muscles",
        "What is the autonomic nervous system (ANS) responsible for?":"The involuntary homeostatic control of many body functions(heart rate,body temperature and digestion)",
        "How does the ANS control body functions?":"It controls body functions using sensory neurons and motor neurons",
        "Give three examples of where motor neurons of the ANS may connect to?":"They may connect to smooth muscle (e.g. gut), cardiac muscle (e.g.pacemaker) or glands(e.g. adrenal gland)",
        "Describe how the ANS symapthetic and parasympathetic work together?":"They are opposing fuctions and are antagonistic",
        "List three differences between the sympathetic and the parasympathetic role?":"The symapthetic division prepares the body for action while the parasymathtice returns the body to rest.Symapathetic nerves speed the heart up while parasymathetic slow down.Sympathetic nerves slow down the rate of peristalsis while parasympathetic slows it down",
        "Describe how the sympathetic system arouses the body in preperation for action and use of energy during fight or flight?":"Increase of heart rate and blood pressure,blood supplies diverted away from gut and to the skeletal muscles, it involves the neurotransmitter noradreneline",
        "Describe how the parasympathetic system clams the body down after fight or flight response?":"Heart rate and blood pressure decrease, rate of persistaltic contractions in the digestive tract increase,blood is diverted to the intestines,it causes the body to conserve energy and it involves the neurotransmitter acetylcholine",




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
    