//create form with js.
$("#form").submit(function(e){
    e.preventDefault();
    var form = $(this);
    var url = form.attr("action");
    var data = form.serialize();
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        success: function(data){
            if(data.code == 200){
                form.find(".form-message").html(data.message);
                form.find(".form-message").show();
                form.find(".form-message").delay(3000).fadeOut();
                }else{
                    form.find(".form-message").html(data.message);
                    form.find(".form-message").show();
                    form.find(".form-message").delay(3000).fadeOut();
                    }
                    }
                    });
                    });
                    