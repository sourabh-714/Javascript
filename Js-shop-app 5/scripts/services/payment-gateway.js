function payNow(total){
    


var options = {
    "key": "rzp_test_SRAmq63Pf30PNE", // Enter the Key ID generated from the Dashboard
    "amount": total, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Brain Mentors",
    "description": "Test Transaction",
    "image": "https://yt3.ggpht.com/ytc/AMLnZu9CySLblH4lWksX00d0i1FjB8dMrfbh1uXM0qi9pA=s900-c-k-c0x00ffffff-no-rj",
   
    "handler": function (response)   {
        console.log('Payment Handler Called *************** ',response);
        if(response){
            //alert("Payment Done SuccessFully....");
            location.href = 'payment.html';
        }
        // AFTER TRANSACTION IS COMPLETE YOU WILL GET THE RESPONSE HERE.
    },
    "prefill": {
        "name": "Ram Kumar",
        "email": "ramkumar@gmail.com",
        "contact": "9999999999"
    },
    "notes": {
        "address": "BrainMentors Pvt Ltd"
    },
    "theme": {
        "color": "#3399cc"
    }
};
var rzp1 = new Razorpay(options);
rzp1.open();

}
