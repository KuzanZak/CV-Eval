const link = document.getElementById("loisirs-link");


link.addEventListener("click", function(event){
    event.preventDefault()
    const modalLink = modal()
    modalLink.firstElementChild.innerHTML = '<i class="fa fa-times-circle modal-link-close" aria-hidden="true"></i>';
})

function modal(){
    const modalLink = document.createElement("div");
    modalLink.classList.add("modal-link")
    modalLink.id = "modal-link";

    const modalLinkContent = document.createElement("div");
    modalLinkContent.classList.add("modal-link-content")
    modalLink.appendChild(modalLinkContent);
    document.getElementById("loisirs").insertBefore(modalLink, document.getElementById("loisirs-content"));
    
    modalLink.addEventListener("click", function(event) {
        if (event.target.classList.contains("modal-link-close")) this.remove();
        console.log("click")
    })
    return modalLink
};