fetch("https://catfact.ninja/breeds?limit=10")
    .then(res => res.json())
    .then(data => {
        console.log(data.data[0])
        for(let i=0;i<10;i++){
            console.log(i);
            console.log(data.data)
            $("#cat_card").html(
                " <h5 class='card-title cat_title'>" + data.data[i].breed + "</h5>" +
                "<h6 class='card-subtitle mb-2 text-muted'>" + data.data[i].country + "</h6>" +
                "<ul><li>Coat: " + data.data[i].coat + "</li> <li>" + data.data[i].pattern + "</li></ul>"
            )
        }
    })
    .catch(error => console.log("Error"))