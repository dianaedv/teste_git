let uploadButton = document.getElementById("upload-button");
let chosenImage = document.getElementById("chosen-image");
let fileName = document.getElementById("file-name");

let toraxButton = document.getElementById("torax");
let processButton = document.getElementById("process-button");

uploadButton.disabled = true; 

toraxButton.addEventListener("click", function() {
    uploadButton.disabled = false;
    uploadButton.onchange = () => {
        let reader = new FileReader();
        reader.readAsDataURL(uploadButton.files[0]);
        reader.onload = () => {
            chosenImage.setAttribute("src",reader.result);
        }
        fileName.textContent = uploadButton.files[0].name;
    }
});


function displayToraxAval() {
    var p = document.getElementById("ptorax");
    p.style.display = "block";
    var c = document.getElementById("container");
    c.style.display = "block";  	  	 
  }

function displayToraxResult() {
    var p = document.getElementById("rtorax");
    p.style.display = "block";
    p.innerHTML = "Resultado para a imagem: "+fileName.textContent;  	 
}

/*
function displaySong1() {
    var p = document.createElement("p");
    var t = document.createTextNode("asdf");
    p.appendChild(t);
    document.body.appendChild(p);
  }
  
  .button {
    background-color: #8C6D09;
    color: white;
    padding: 16px 32px;
    display: inline-block;
    margin: 4px 2px;
    -webkit-transition-duration: 0.4s;
    // Safari
    transition-duration: 0.4s;
  }
  
  .button1 {
    background-color: #8C6D09;
    color: #FFF;
  }
  
  <button class=".button .button1" onClick="displaySong1()">Easy</button>
  */

  /*
  <!DOCTYPE html>
  <html>
    <script>
    var name = prompt("What's your name?");
    var lengthOfName = name.length
    p = document.createElement("p");
    p.innerHTML = "Your name is "+lengthOfName+" characters long.";
    document.body.appendChild(p);
    </script>
    <body>
    </body>
    </html>
    */