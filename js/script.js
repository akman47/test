var testEndPoint = function(){
    var apiUrl = "http://api.citybik.es/v2/networks";
    var foodApiUrl = "https://api.edamam.com/search";
    var apiUrl2 = "https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken"

    fetch (apiUrl2).
        then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
        })
}

testEndPoint ();