const link = document.getElementById("loisirs-link");
const linkLogoLakers = document.getElementById("modal-link-img");
const linkDuoLakers = document.getElementById("modal-link-img2");
const linkPLakers = document.getElementById("modal-link-p");

function modal(){
    const modalLink = document.createElement("div");
    modalLink.classList.add("modal-link")
    modalLink.id = "modal-link";

    const modalLinkContent = document.createElement("div");
    modalLinkContent.classList.add("modal-link-content")
    modalLink.appendChild(modalLinkContent);
    document.getElementById("loisirs").insertBefore(modalLink, document.getElementById("loisirs-content"));
    
    modalLink.addEventListener("click", function(event) {
        if (event.target.classList.contains("modal-link-close")) {
            remove()
            this.remove();
        }
    })
    return modalLink
};

function add() {
    linkLogoLakers.classList.add("display")
    linkPLakers.classList.add("display")
    linkDuoLakers.classList.add("display")
}

function remove(){
    linkLogoLakers.classList.remove("display")
    linkPLakers.classList.remove("display")
    linkDuoLakers.classList.remove("display")

}

link.addEventListener("click", function(event){
    event.preventDefault();
    add();
    const modalLink = modal();
    modalLink.firstElementChild.innerHTML = '<i class="fa fa-times-circle modal-link-close" aria-hidden="true"></i>';
})
