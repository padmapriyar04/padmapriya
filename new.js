async function fetchdata() {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await response.json();
    return data;
    }

    setInterval(async function() {
        const data = await fetchdata();
        const secondElement = data["setup"];
        alert(secondElement)
        const thirdElement = data["punchline"];
        alert(thirdElement)
    }, 30000);
    const audio = document.getElementById("myAudio");
    setInterval(function() {
        audio.play();
    }, 30000); 

