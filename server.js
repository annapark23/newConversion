//modal - will show when cursor passes the viewport..but only once since I did not include a close button. 

var _ouibounce = ouibounce(document.getElementById('ouibounce-modal'), {
    aggressive: true,
    sensitivity: 40,
    timer: 0,
    callback: function() { 
        console.log('ouibounce fired!'); 
        $("#ouibounce-modal").show(); //triggers the modal to show after cursor passes viewport

// IP address AJAX call
        var queryURL = "http://ip-api.com/json/?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query";
        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
            console.log(response.city);
            console.log(queryURL);
            console.log(response.query);
            var string = ("wait! special offer for " + response.city + " residents...");
            var caps = string.toUpperCase();
            var location = $(".modal-title");
            location.append(caps);
        });
//flipclockjs 
        clock = new FlipClock($('.clock'), 3600, {
            clockFace: 'HourlyCounter',
            countdown: true
        });
    }
  });
  $('body').on('click', function() {
    $('#ouibounce-modal').hide();
  });
  $('#ouibounce-modal .modal-footer').on('click', function() {
    $('#ouibounce-modal').hide();
  });
  $('#ouibounce-modal .modal').on('click', function(e) {
    e.stopPropagation();
  });
