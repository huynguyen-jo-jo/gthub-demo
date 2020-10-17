

$(document).ready(function() {
    $('.btn-next').click(function(event) {
       var slide_sau = $('.active').next();
       if(slide_sau.length!=0){
          $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
             $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
          });
          slide_sau.addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
             $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
          });
       }else{
          $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
             $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
          });
          $('.slide-img:first-child').addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
             $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
          });
       }
    });
 });

 $(document).ready(function() {
    $('.chevron-next').click(function(event) {
       var slide_sau = $('.active').next();
       if(slide_sau.length!=0){
          $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
             $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
          });
          slide_sau.addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
             $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
          });
       }else{
          $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
             $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
          });
          $('.slide-img:first-child').addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
             $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
          });
       }
    });
 });

