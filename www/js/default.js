/**
 * Created by Andy, Esvin , Mark on 4/19/15.
 */

// <<------------ Index ---------------->>
$(document).on("pagecreate", "#index", function() {
    $("#validation_error").hide();
    $("#empty_field_error").hide();

    // Ajax Call
    $("#login_btn").on("click", processLogin);
    function processLogin() {
        $.ajax({
            type: "get",
            url: "js/validateLogin.js",
            success: function(data) {
                console.log(data);
            }
        });
    }
});

// <<------------ Main ---------------->>
$(document).on("pagecreate", "#main", function() {
    $("#logout").on("click", function() {
        window.location = "index.html";
    });
});

// <<------------ Upload ---------------->>
$(document).on("pagecreate", "#upload", function() {
    $("#capture").on("click", function() {
        //navigator.device.capture.captureImage();
        navigator.camera.getPicture(success)
    });

    function success() {
        alert("Photo Uploaded!");
    }
    function fail() {
        alert("Uploading error!")
    }

    $('#send-to-server').click(function(){
        console.log('Begin upload...');
        //alert(window.location);

    });

    /*$("#send-to-server").on("click", function() {
        var image = "/Users/esvin/Pictures/gt3.jpg";
        //var image = document.getElementById("image");
        var serverUrl = encodeURI("http://localhost/UploadServer/index.php");
        var opts = new FileUploadOptions();
        opts.fileKey = "file";
        opts.filename = image.substr(image.lastIndexOf("/")+1);
        opts.mimeType = "image/jpeg";

        var params = new Object();
        params.value1 = "test";
        params.value2 = "param";

        opts.params = params;

        var ft = new FileTransfer();
        ft.upload(image, serverUrl, success, fail, opts);
    });*/
});
