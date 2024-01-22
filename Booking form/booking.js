$(function(){
    var $bookingform = $("#booking");
    if($bookingform.length){
        $bookingform.validate({
            rules:{
                name:{
                    required: true
                },
                email:{
                    required: true
                },
                destination:{
                    required: true
                },
                departuredate:{
                    required: true
                },
                returndate:{
                    required: true
                }
            },
            messages:{
                name:{
                    required: 'Please enter your name'
                },
                email:{
                    required:'Please enter your email'
                },
                destination:{
                    required: 'Please enter your destination'
                },
                departuredate:{
                    required: 'Please enter Date'
                },
                returndate:{
                    required:'Please enter Date'
                }
            }
        })
    }
})