function startClassify(){
    navigator.mediaDevices.getUserMedia({audio:true});
    Classifier=ml5.soundClassifier("https://storage.googleapis.com/tm-model/93tdWI-6d/model.json",modelready);
}
function modelready(){
    Classifier.classify(telltheresult);
}
function telltheresult(errors,results){
    document.getElementById("result_label").innerHTML="I CAN HEAR "+results[0].label;
    document.getElementById("result_confidence").innerHTML="I am confident "+(results[0].confidence*100).toFixed(2)+"%";
 Blackpink=document.getElementById("Blackpink");
 Bts=document.getElementById("Bts");
 Cat=document.getElementById("Cat");
          if (results[0].label=="BLACKPINK"){
              Blackpink.src="BLACKPINK-GIF-HOW YOU LIKE THAT.gif";
              Bts.src="BTS-POSTER-BUTTER.jfif";
              Cat.src="CAT-POSTER.jfif";
            }else  if (results[0].label=="BTS"){
                Blackpink.src="BLACKPINK-POSTER-HOW YOU LIKE THAT.jfif";
                Bts.src="BTS-GIF-BUTTER.gif";
                Cat.src="CAT-POSTER.jfif";
            }
        else if (results[0].label=="CAT"){
            Blackpink.src="BLACKPINK-POSTER-HOW YOU LIKE THAT.jfif";
            Bts.src="BTS-POSTER-BUTTER.jfif";
            Cat.src="CAT-GIF.gif";
        }
        else if(results[0].label=="Background Noise"){
            Blackpink.src="BLACKPINK-POSTER-HOW YOU LIKE THAT.jfif";
            Bts.src="BTS-POSTER-BUTTER.jfif";
            Cat.src="CAT-POSTER.jfif";
        }
    }
        

