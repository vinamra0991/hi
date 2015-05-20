/**
 * Created by vinamra.misra on 20/04/15.
 */
document.observe("dom:loaded", function () {


});


var HI = function () {
    function resetPassword() {
        var modalBody = $$('#modal-body')[0],
            modalFooter = $$('#modal-footer')[0];

        if (modalBody && modalFooter) {
            modalBody.update('<p>An email with instructions to change your password has been sent.' +
            'Please check your spam folder if you do not find the message in your inbox.</p>');
            jQuery('#modal-body').removeClass('col-lg-6 col-lg-offset-3');
            jQuery('#modal-body').addClass('col-lg-10 col-lg-offset-1');
            modalFooter.update('<button type="button" class="btn btn-default" data-dismiss="modal" onclick="HI.initializeResetPasswordPopup();">OK</button>')
        }
    };

    function initializeResetPasswordPopup() {
        // Setting on click on Forgot password button
        var forgotPassword = document.getElementById('forgot-password');
        if (forgotPassword) {
            forgotPassword.onclick = function () {
                var modalBody = $$('#modal-body')[0],
                    modalFooter = $$('#modal-footer')[0];

                if (modalBody && modalFooter) {
                    modalBody.update('<input id="resetpassword" type="text" class="form-control" name="email" placeholder="Please enter your email."/>');
                    modalFooter.update('<button type="button" class="btn btn-default" id="reset-password" onclick="HI.resetPassword()">Reset Password</button>');
                    jQuery('#modal-body').removeClass('col-lg-10 col-lg-offset-1');
                    jQuery('#modal-body').addClass('col-lg-6 col-lg-offset-3');
                }
            };
        }
    };

    function showContent(id){

        var arr = ['customer', 'partner', 'internal'];

        arr.forEach(function(el){
                jQuery('#'+el).css('display', 'none');
            }
        );

        jQuery('#'+id).css('display','block');
        jQuery('#' + id + '-row').hide();
        jQuery('#' + id + '-row').fadeIn('slow');

    }

    return Object.freeze({
        resetPassword: resetPassword,
        initializeResetPasswordPopup: initializeResetPasswordPopup,
        showContent: showContent
    });
}();



