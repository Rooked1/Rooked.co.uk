window.addEventListener("DOMContentLoaded", function() {
    //maybe change into 2 data objects and have img
    data={
        "What are Somatic Cells?":"Somatic cells are diploid cells and contain two sets of homologous  chromosomes.A somatic cell is any cell in the body other than cells involved in  reproduction (gametes).",
         "What are Diploid Cells?":"A Diploid cell contains two complete sets of chromosomes, one from each parent. Most cells in the human body are diploid.",
         "How many chromosomes do Diploid cells have?":"Diploid cells in humans have 23 pairs of homologous chromosomes.",
        "What happens to Diploid cells during cell division?":"During cell division the nucleus of a somatic cell divides by mitosis to  maintain the diploid chromosome number.", 
        "How do Somatic cells divide?":"Somatic cells divide by mitosis to form more somatic cells which  differentiate to form different body tissue types",
        "Are Mutations in somantic cells passed to offspring?":"They do not",
        "What are Germline cells?":"Germline cells are gametes (sperm and ova) and the stem cells that divide  to form gametes.", 
        "What 2 ways do the nucleus of Germline cells divide?":"The nucleus of germline cells divide by mitosis to produce more germline  cells (maintaining the chromosome number) or by meiosis to produce  haploid gametes.",
        "Descripe what happens in meiosis of a nucleus of a  Germline cell?":"In meiosis the nucleus of a germline cell undergoes two divisions, firstly  separating homologous chromosomes and secondly separating chromatids. • Haploid gametes contain 23 single chromosomes.",
        "Can mutations in Germline cells be passed on?":"Yes they can",
        "What is cellular differentation?":"Cellular differentiation is the process by which a cell develops more  specialised functions.",
        "How does cellular differentation occur?":"Cellular differentiation occurs by expressing only the genes characteristic of  that type of cell.Once a cell becomes differentiated, it only expresses the genes that  produce the proteins characteristic for that type of cell.",
        "Describe Stem cells?":"Stem cells are relatively unspecialised cells. Stem cells are able to continue to divide to produce more stem cells or cells  which will differentiate into specialised cells of one or more types.",
        "During embryological development what happens to unspecialised cells?":"During embryological development, the unspecialised cells of the early  embryo differentiate into cells with specialised functions. ",
        "Where are Embryonic stem cells found?":"Embryonic stem cells are found in the inner cell mass (epiblast) of the  blastocyst.",
        "What cell types can embryonic stem cells develop into?":"Embryonic stem cells are capable of developing into any of the body's cell  types (pluripotent)",
        "What is the function of adult stem cells?":"Tissue (adult) stem cells replenish differentiated cells that need to be  replaced.",
        "In what numbers are adult stem cells found?":"Tissue (adult) stem cells are found in very small numbers throughout the  body tissues.",
        "What do adult stem cells give rise to?":"Tissue (adult) stem cells give rise to a limited range of cell types typical of  the organ of which they are a part (multipotent). They have a limited  differentiation potential.or example, blood stem cells located in bone marrow can give rise to red  blood cells, platelets, phagocytes and lymphocytes.",
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
    