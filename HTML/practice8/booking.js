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
                from:{
                    required: true
                },
                destination:{
                    required: true
                },
                Passenger:{
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
                from:{
                    required: 'Please enter your Place'
                },
                destination:{
                    required: 'Please enter your destination'
                },
                Passenger:{
                    required: 'Please enter your numbere of Passenger'
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