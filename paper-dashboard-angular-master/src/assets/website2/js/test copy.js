var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

$(document).ready(function () {
    
 $('.error_message').hide();
    $("#registerPatient").submit(function (event) {
        //   alert("submitted");
        event.preventDefault();
        $('.error_message').hide();
        var name = $("input#name").val();
        var surname = $("input#surname").val();
        var title = $("input#title").val();
        var email = $("input#email").val();
        var password = $("input#password").val();
        var medical_aid = $("input#medical_aid").val();
        var medical_name = $("input#medical_name").val();
        var address = $("input#address").val();
        var idno = $("input#idno").val();
        var cell = $("input#cell").val();
        if (name == "") {
            $("label#name_error").show();
            $("input#name").focus();
        }
        if (surname == "") {
            $("label#surname_error").show();
            $("input#surname").focus();
        }
        if (title == "") {
            $("label#title_error").show();
            $("input#title").focus();
        }
        if (email == "") {
            $("label#email_error").show();
            $("input#email").focus();
        }
        if (password == "") {
            $("label#password_error").show();
            $("input#password").focus();
        }
        if (medical_aid == "") {
            $("label#medical_aid_error").show();
            $("input#medical_aid").focus();
        }
        if (medical_name == "") {
            $("label#medical_name_error").show();
            $("input#medical_name").focus();
        }
        if (address == "") {
            $("label#address_error").show();
            $("input#address").focus();
        }
        if (idno == "") {
            $("label#idno_error").show();
            $("input#idno").focus();
        }
        if (cell == "") {
            $("label#cell_error").show();
            $("input#cell").focus();
        } else {

            $.ajax({
                type: "POST",
                url: "http://localhost:5001/api/v1/patient",
                data: {
                    name: name,
                    surname: surname,
                    title: title,
                    email: email,
                    password: password,
                    medical_aid: medical_aid,
                    address: address,
                    medical_name: medical_name,
                    idno: idno,
                    cell: cell,
                },
                success: function (data) {
                     $(location).attr('href', 'login.html')
                },
                error: function (data) {
                $('#error').html( data.responseJSON.message); 

                }, 
            });
        }

    });
    $("#loginPatient").submit(function (event) {
    event.preventDefault();
       // $('.error').hide();
        var email = $(this).find('.email').val();
        var password = $(this).find('.password').val();
            $.ajax({
                type: "POST",
                url: "http://localhost:5001/api/v1/patient/login",
                data: {
                    
                    email: email,
                    password: password,
                    
                },
                success: function (data) {
                    patientDashboard();
                  // $(location).attr('href', 'patients.html')
//console.log(data.data.token)
                        },
                        error: function (data) {
                            $('.error_message1').html(data.responseJSON.message); 
                },
            });

    });
    
   $(document).on('click', '.edit_allocation', function () {
     //  const self = $(this);
      // $(this).text('Sending...');
       $.ajax({
           type: 'GET',
           headers: {
               'Authentication': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMwLCJ0eXBlIjoicCIsImlhdCI6MTU5NzA3NzUyMywiZXhwIjoxNTk3ODc3NTIzfQ._8Lbn0ExppzdP2itYDgaE_OKA0aG8kqNkVaebMbdXgc'
            //    $('meta[name="csrf-token"]').attr('content')
           },
        //    url: `/emaillog/${self.attr('id')}/resend`,
                   url: `http://localhost:5001/api/v1/doctor`,

           dataType: 'json',
           data: {
              // id: self.attr('id')
           },
           success: function (data) {
              // if (data.success) {
                //    notify(res.message);
                console.log(data)
             //  }
           },
           error: function () {},
        //    complete: function () {
        //        self.html('Resend <i class="fa fa-send-o"></i>');
        //    }
       });
   });


});

function patientDashboard() {
   // console.log("SibaTest")
   // var filterDate = $('.infobiplog-calender .date-value').text().split('-');
    //console.log(filterDate)
    $.ajax({
        type: 'GET',
        headers: {
               'Authentication': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMwLCJ0eXBlIjoicCIsImlhdCI6MTU5NzA3NzUyMywiZXhwIjoxNTk3ODc3NTIzfQ._8Lbn0ExppzdP2itYDgaE_OKA0aG8kqNkVaebMbdXgc'
        },
        url: 'http://localhost:5001/api/v1/doctor',
        dataType: 'json',
        data: {
         //   from: filterDate[0],
         //   to: filterDate[1]
        },
        success: function (data) {
            console.log("SibaTest33")
           // clickATelLogsTable(res);
        },
        error: function () {
           // $('#clickatell-logs').html('<p style="text-align:center">No records available.</p>');
        },
    });
}
window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var
            period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate),
                period);
        }
    }
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


//lOGIN /rEG fORM
$('.message a').click(function () {
    $('form').animate({
        height: "toggle",
        opacity: "toggle"
    }, "slow");
});

