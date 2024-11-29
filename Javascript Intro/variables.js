function varScoping() {
    var x = 1;
  
    if (true) {
      var x = 2;    
      console.log(x); // will print 2   
    }
  
    console.log(x); // will print 2
  }
  
  function letScoping() {
    console.log(x);
    var x = 1;
  
    if (true) {
      let x = 2;      
      console.log(x); // will print 2
      
    }
  
    console.log(x); // will print 1
  }
  