var topics = ["The Office", "Portlandia", "Parks and Recreation", "Always Sunny In Philadelphia"]
var api = "https://api.giphy.com/v1/gifs/search?" 
var apiKey = "&api_key=CQBjbfAtYTJ9rknSsiu5pAmXPIaRYJZa"
var query ="q=the+office"
var limit ="&limit=5"
function setup () {
noCanvas();
var url = api + apiKey + query + limit;
loadJSON(url, gotData);
}
function gotData(data){
println(data.data[0].images.origional.url);
}
function draw(){

}
// var queryURL = "https://api.giphy.com/v1/gifs/search?q=&api_key="
// var apiKey = "CQBjbfAtYTJ9rknSsiu5pAmXPIaRYJZa"
$('#search').on('click', function (e) {
    e.preventDefault();
    var combined = api + query + apiKey + limit
    console.log(combined)
    var userInput = $('#user-input').val()
    axios({
        url: combined,
        method: "GET"
    })
        .then(function (response) {
            
           $('.container').append(JSON.stringify(response.data));
        })
        .catch(function (err) {
            console.error(err)
        })
})
//create an in itial array of topics

//function for displaying gifs
function renderButtons() {
//delete buttons before adding new gifs
$("#buttons-view").empty();
//loop through topics array
for (var i =0; i < topics.length; i++) {
//generate buttons for each topic in the array
var a = $("<button>");
//add a class
a.addClass("gifs");
//add data attribute with the value of the gif at index i
a.attribute("data-name".topics[i]);
//add text to buttons
a.text(topics[i]);
//adding button to html
$('.buttons-view').append(a);
}
}
$("#add-gif").on("click", function(event) {
event.preventDefault();
var gif = $("#gif-input").val().trim();
gifs.push(gifs);
renderButtons();
})
function gotData(data) {
    println(data.data[0].images.origional.url)
}

//create labeled buttons that will load gifs
//make it so if the user clicks on a gif it will play and if they click it again it will pause
//make a way so that the user and search for new gifs and they will load to the page
// "https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=CQBjbfAtYTJ9rknSsiu5pAmXPIaRYJZa&limit="