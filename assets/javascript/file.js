var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=CQBjbfAtYTJ9rknSsiu5pAmXPIaRYJZa&limit=5");
xhr.done(function(data) { console.log("success got data", data); });

// var topics  = ["The Office", "Portlandia", "Parks and Recreation", "Always Sunny In Philadelphia", ""]