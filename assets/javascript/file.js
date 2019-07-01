$('#search').on('click', function (e) {
    e.preventDefault();
    var userInput = $('#user-input').val()
    axios({
        url: "https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=CQBjbfAtYTJ9rknSsiu5pAmXPIaRYJZa&limit=" + userInput,
        method: "GET"
    })
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (err) {
            console.error(err)
        })
})
//create an array of topics
var topics = ["The Office", "Portlandia", "Parks and Recreation", "Always Sunny In Philadelphia"]
//create labeled buttons that will load gifs
//make it so if the user clicks on a gif it will play and if they click it again it will pause
//make a way so that the user and search for new gifs and they will load to the page
