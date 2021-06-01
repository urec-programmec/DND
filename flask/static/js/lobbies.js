$('#profile-open').on("click", () => {
    if (! $('#profile').hasClass('profile-open')){
        $('#profile').addClass('profile-open');
    }
    else{
        $('#profile').removeClass('profile-open');
    }
}); 

setTimeout(() => $('body').addClass('blur'), 200);
