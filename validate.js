$(document).ready(function(){

  var formHandler = function(event){

    iteration = [
    	{
    		regex: /\w+/,
    		value: "#desc",
    		error: '#desc-errors'
    	},
    	{
    		regex: /^\d+\.{0,1}\d{0,2}$/,
    		value: '#amount',
    		error: '#amount-errors'
    	},
    	{
    		regex: /^\d{16}$/,
    		value: '#CCN',
    		error: '#CCN-errors'
    	},
    	{
    		regex: /^\d{3}$/,
    		value: '#CCV',
    		error: '#CCV-errors'
    	},
    	{
    		regex: /^\d{2}\/\d{2}$/,
    		value: '#exp',
    		error: '#exp-errors'
    	},
    	{
    		regex: /^\w+ \w+$/,
    		value: '#CHname',
    		error: '#CHname-errors'
    	},
    	{
    		regex: /^\d+\.{0,1}\d{0,2}$/,
    		value: '#bAddr',
    		error: '#bAddr-errors'
    	},
    	{
    		regex: /^\d+\.{0,1}\d{0,2}$/,
    		value: '#EmailAddr',
    		error: '#EmailAddr-errors'
    	}
    ];

    for(var i = 0; i < iteration.length; i++){

    	if((iteration[i].regex).test($(iteration[i].value).val())){
    		$(iteration[i].error).text("All OK!");
    	} else {
    		$(iteration[i].error).text("Not OK!");
    	}

}


/*


    }

    if($("#desc").val() === ""){
      $("#desc-errors").text("Not OK!");
    } else {
      $("#desc-errors").text("All OK!");
    }

    //XXXX[.XX]
    var validPrice = /^\d+\.{0,1}\d{0,2}$/;
    var amount = $("#amount").val();
    if(validPrice.test(amount)){
      $("#amount-errors").text("All OK!");
    } else {
      $("#amount-errors").text("Not OK!");
    }


    var validCCN = /^\d{16}$/;
    var CCN = $("#CCN").val();
    if(validCCN.test(CCN)){
      $("#CCN-errors").text("All OK!");
    } else {
      $("#CCN-errors").text("Not OK!");
    }


*/
    event.preventDefault(); // prevents the page from reloading
  };

  $("form").submit(formHandler); // register a callback

});