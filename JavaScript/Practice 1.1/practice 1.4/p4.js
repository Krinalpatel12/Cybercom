$(function(){
    var $personform = $("#person");
    if($personform.length){
        $personform.validate({
            rules:{
                name:{
                    required: true
                },
                email:{
                    required: true
                },
                from:{
                    required: true
                },
                
            },
            messages:{
                name:{
                    required: 'Please enter your name'
                },
                email:{
                    required:'Please enter your email'
                },
                from:{
                    required: 'Please enter your Place'
                },
               
            },
            submitHandler: function (form) {
                alert("Your details have been added successfully");
        
                // Now, submit the form
                form.submit();
              },
            
        })
    }
})