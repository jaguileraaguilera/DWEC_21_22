var movies = ["Reservoir Dogs", "Pulp Fiction", "Jackie Brown", 
              "Kill Bill", "Death Proof", "Inglourious Basterds"];

localStorage.setItem("quentinTarantino", JSON.stringify(movies));

var retrievedData = localStorage.getItem("quentinTarantino");

var movies2 = JSON.parse(retrievedData);