// TODO: add code here
window.addEventListener("load", function(){
    let container = document.getElementById("container");
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            json.sort((a, b) => a.hoursInSpace - b.hoursInSpace);
            container.innerHTML += `<p>Number of Astronauts: ${json.length}</p>`;
            for (let i = 0; i < json.length; i++) {
                //TODO: green active text, sort and count astronauts
                container.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li class="active">Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills.join(", ")}</li>
                        </ul>
                    </div>
                <img class="avatar" src=${json[i].picture}>
                </div>`

                let activeArray = document.getElementsByClassName("active");
                for (let i = 0; i < activeArray.length; i++) {
                    if (json[i].active === true) {
                        activeArray[i].style.color = "green";
                    }
                }
            }
        });
    });
});