// upload data to backend
document.getElementById("uploadForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const aadhaar = document.getElementById("aadhaarUpload").value;
    const files = document.getElementById("fileInput").files;

    const formData = new FormData();
    formData.append('aadhaar', aadhaar);
    for(let i=0; i<files.length; i++){
        formData.append('files', files[i]);
    }

    fetch("http://127.0.0.1:5000/upload", {
        method: "POST",
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        alert("Uploaded Extract: " + JSON.stringify(data.history_extract));
    })
    .catch(err => console.log(err));
});

// search aadhaar + open fingerprint popup
function searchByAadhaar(){
    const aadhaar = document.getElementById("aadhaarInput").value;
    console.log("Searching Aadhaar:", aadhaar);
    document.getElementById("fingerModal").style.display = "block";

    // after fingerprint success, you can call a backend API to fetch patient history
    // e.g. fetch(`/search/${aadhaar}`)
}

function closeModal(){
    document.getElementById("fingerModal").style.display = "none";
}
