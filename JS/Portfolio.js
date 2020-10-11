$(function(){
                
    $(".links").on("mouseover", function(){
          $(this).css({backgroundColor: "#28A745"});
          $(this).css({color: "white"});
          $(this).css({textDecoration: "none"});
    });
      
    $(".links").on("mouseout", function(){
          $(this).css({backgroundColor: ""});
          $(this).css({color: "#28A745"});

    });
                 
    
  });
      
$(function(){
    $("#dButton").on("mouseover", function(){
        $(this).css({backgroundColor: "#DC3545"});
        $(this).css({color: "white"});
        $(this).css({textDecoration: "none"});
  });
    
     $("#dButton").on("mouseout", function(){
          $(this).css({backgroundColor: ""});
          $(this).css({color: "#DC3545"});

    });
    
      
  });

