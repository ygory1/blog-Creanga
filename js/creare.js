const titleInput = document.getElementById('titlul');
const imgInput = document.getElementById('link-img');
const longInput = document.getElementById('desc-lung');
const shortInput = document.getElementById('desc-scurt');
const createBtn = document.getElementById('creare-btn');
const form = document.getElementById('creare-form');

createBtn.onclick = function(e) {

    e.preventDefault();

    if (form.checkValidity() == false) {
        form.reportValidity();
    } else {

        let data = new Date();

        let postare = {
            title: titleInput.value,
            img: imgInput.value,
            short: shortInput.value,
            long: longInput.value,
            likes: [],
            username: user.displayName,
            created: data.getTime()
        }

        form.reset();

        postariDb.add(postare).then(function() {
            alert("Postarea a fost adaugata !");
            window.location = "postari.html"
        });
        
        
    }
}

auth.onAuthStateChanged(function(fuser) {
    if(isAdmin() == false) {
        window.location = "../index.html";
    }
})

// titlul
// imagine url
// descriere pe scurt
// textul postarii

// likes -> []
// createdTimeStamp   1231451230541
// username
