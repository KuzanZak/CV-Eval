const link = document.getElementById("loisirs-link");


link.addEventListener("click", function(event){
    event.preventDefault()
    const modalLink = modal()
    console.log(modalLink)
})

function modal(){
    const modalLink = document.createElement("div");
    modalLink.classList.add("modal-link")
    modalLink.id = "modal-link";

    const modalLinkContent = document.createElement("div");
    modalLinkContent.classList.add("modal-link-content")
    modalLink.appendChild(modalLinkContent);
    document.getElementById("loisirs").insertBefore(modalLink, document.getElementById("loisirs-content"));
    return modalLink
};