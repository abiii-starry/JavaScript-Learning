fetch("https://api.github.com/search/repositories?q=cypress-abc&sort=stars")
.then(function(response) {
    console.log(response.body);
});