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
    return modalLinkContent
};

function add() {
    linkLogoLakers.classList.add("display")
    linkPLakers.classList.add("displayF")
    linkDuoLakers.classList.add("display")
}

function remove(){
    linkLogoLakers.classList.remove("display")
    linkPLakers.classList.remove("displayF")
    linkDuoLakers.classList.remove("display")

}


function icon(){
        const iconClose = document.createElement("i");
        iconClose.classList.add("fa")
        iconClose.classList.add("fa-times-circle")
        iconClose.classList.add("modal-link-close")
        iconClose.setAttribute("aria-hidden", "true")
        return iconClose
}

link.addEventListener("click", function(event){
    event.preventDefault();
    if(window.innerWidth >= 768){
        add();
        const modalLinkContent = modal();
        const iconClose = icon();
        modalLinkContent.appendChild(linkLogoLakers)
        modalLinkContent.appendChild(linkPLakers)
        modalLinkContent.appendChild(linkDuoLakers)
        icon()
        modalLinkContent.insertBefore(iconClose, linkLogoLakers);
    }
});
