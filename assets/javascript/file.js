var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
xhr.done(function(data) { console.log("success got data", data); });

// var topics  = ["The Office", "Portlandia", "Parks and Recreation", "Always Sunny In Philadelphia", ""]