$.ajax({
    url: "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=CQBjbfAtYTJ9rknSsiu5pAmXPIaRYJZa&limit=5",
    method: "GET"
}).then(function(response){
    console.log(response);
})
// var topics  = ["The Office", "Portlandia", "Parks and Recreation", "Always Sunny In Philadelphia", ""]