function validatefrom(){
    // validation for required
     // validation for required
     var fname=document.getElementById("fName").value;
      if(fname == ""){
          document.getElementById("fnamereq").style.display = "inline";
      }
      else{
          document.getElementById("fnamereq").style.display = "none";
      }

      // validation for email
      var emaireq=document.getElementById("email").value;
    
      if(emaireq == ""){
          document.getElementById("emaireq").style.display = "inline";
      }
      else{
          document.getElementById("emaireq").style.display = "none";
      }

      // validation for email valid form
      var emaireq=document.getElementById("email").value;
       var epatrn= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emaireq);
        
      if(epatrn){
          
          document.getElementById("emailvalform").style.display = "none";
      }
      else{
        
          document.getElementById("emailvalform").style.display = "inline";
      }

      //validation for phone number
      var emaireq=document.getElementById("mobno").value;
    
    if(emaireq == ""){
        document.getElementById("mobreq").style.display = "inline";
    }
    else{
        document.getElementById("mobreq").style.display = "none";
    }

  //   validation for phone valid form
       var mobreq=document.getElementById("mobno").value;
       var mobptr= /^[0-9]{2}[0-9]{4}[0-9]{4}$/.test(mobreq);
        
      if(mobptr){
          
          document.getElementById("mobvalform").style.display = "none";
      }
      else{
        
          document.getElementById("mobvalform").style.display = "inline";
      }


      //validation for chack box
      var checkreq=document.getElementsByName("foot");
        var checklen=checkreq.length; 
    if( checkreq == ""){
          
          document.getElementById("gamereq").style.display = "inline";
      }
      else{
          
          document.getElementById("gamereq").style.display = "none";
      }
       
      //validation for check box atleast one
      var checkreq=document.getElementsByName('foot');
        var checklen=checkreq.length; 

        for(var x=0; x<=checklen; x++){
          if( (checkreq[0]).checked == true || (checkreq[1]).checked == true || (checkreq[2]).checked == true ){
          
          document.getElementById("gameform").style.display = "none";
          }
      else{
        
          document.getElementById("gameform").style.display = "inline";
      }
      }
       
      // //valid for radio button
      
      var genreq=document.getElementsByName('gender');
        var genlen=genreq.length; 

        for(var x=0; x<=genlen; x++){
          if( ( genreq[0]).checked == true || ( genreq[1]).checked == true ){
          
          document.getElementById("genderform").style.display = "none";
          }
      else{
        
          document.getElementById("genderform").style.display = "inline";
      }
      }
  }               

