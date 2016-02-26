$(document).ready(function (){
        if (!Modernizr.touch) {
            $(document.body).addClass('desktop-resize');
        }

            if (!navigator.userAgent.match(/iPad/i)) {
                $("head").after("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=no\" />");
            }
            //If iOS device, use direct App Store download link.
            if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
                    $("#download").attr("href", "https://itunes.apple.com/us/app/photo-editor-by-aviary/id527445936");
                    $("#downloadDescription").text("Get it on the App Store \u2192");
                    $("#downloadMobile").html("<img style='margin-top: 10px' src='" + cdnStatic + "/img/appstore2.png' />");
                    //$("#downloadMobile").html("<img src=\"" + cdnStatic + "/img/appstore2.png\" />");
                    $("#downloadMobile").attr("href", "https://itunes.apple.com/us/app/photo-editor-by-aviary/id527445936");
            }
            //If Android device, use direct Play Store download link and fix footer.
            else if (navigator.userAgent.match(/Android/i)) {
                    $("#download").attr("href", "https://play.google.com/store/apps/details?id=com.aviary.android.feather");
                    $("#downloadDescription").text("Get it on the Play Store \u2192");
                    $("#downloadMobile span").text("Get the App");
                    $("#downloadMobile").addClass('androidIcon');
                    $("#downloadMobile").attr("href", "https://play.google.com/store/apps/details?id=com.aviary.android.feather");
                    //$("footer").css({"position": "fixed"});
            }
            //Download links pop-up.
            else {
                    $("#download").click(function() {
                            $('.overlay').fadeIn();
                        $('.dialog').fadeIn();
                        $('.dialog').addClass('drop');
                    });
                    $(".overlay").click(function() {
                            $('.overlay').fadeOut();
                        $('.dialog').fadeOut();
                    });
            }
        });

        //Allow only numbers to be entered into phone-number box
        function isNumber(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                return false;
            }
            return true;
        }
        
        function toggleMenu(){
            $('.main').toggleClass("show");
            $('nav').toggleClass("show");
        }

        

