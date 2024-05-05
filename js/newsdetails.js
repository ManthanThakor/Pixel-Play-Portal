function getQueryParams() {
    var params = {};
    var queryString = window.location.search.substring(1);
    var pairs = queryString.split('&');
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return params;
}

// Function to decode Base64 encoded data and populate news details
function populateNewsDetails() {
    var queryParams = getQueryParams();
    if (queryParams.data) {
        var encodedData = queryParams.data;
        var decodedData = JSON.parse(atob(encodedData));
        document.getElementById('news-details-img').src = decodedData.imageUrl;
        document.getElementById('news-details-title').textContent = decodedData.title;
        document.getElementById('news-details-subtitle').textContent = decodedData.subTitle;
        document.getElementById('news-details-description').textContent = decodedData.description;
    }
}

// Call the function to populate news details on page load
populateNewsDetails();