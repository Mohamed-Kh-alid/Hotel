
$(document).ready(function(){

  
    
   

    $(window).scroll(function(){
        let x= $(window).scrollTop();
        if(x>450){
            $('body .up').css('display','block')
        }else{
            $('body .up').css('display','none')
        }

        
    })
    
    $(window).scroll(function(){
        let x= $(window).scrollTop();
        if(x>120){
            
            $('body .second-group h1').slideDown(800,function(){
            $('body .second-group .content .row .card').eq(0).slideDown(800)
            $('body .second-group .content .row .card').eq(1).slideDown(800)
            $('body .second-group .content .row .card').eq(2).slideDown(800)
            $('body .second-group .content .row .card').eq(3).slideDown(800 ,function(){
            $('body .second-group .content .row .card').eq(4).slideDown(800)
            $('body .second-group .content .row .card').eq(5).slideDown(800)
            $('body .second-group .content .row .card').eq(6).slideDown(800)
            $('body .second-group .content .row .card').eq(7).slideDown(800)
            })
            })
            
            

        }

        if(x>1600){
            $('body .third-group .component .container .row .about-1').css({
                'opacity': '1'
            },1000)

            $('body .third-group .component .container .row .about-2').css({
                'opacity': '1'
            },1000)

            $('body .third-group .component .container .row .about-3').css({
                'opacity': '1'
            },1000)

            $('body .third-group .component .container .row .about-4').css({
                'opacity': '1'
            },1000)
        
        }
        
    })

   

  
    

    new WOW().init();
   
})




var scroll = new SmoothScroll('a[href*="#"]');


