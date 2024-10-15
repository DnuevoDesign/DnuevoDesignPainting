class CarouselCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.site;
        this.rating;

        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
            <style>


                @media (max-width: 490px) {
                    #carouselCard {

                        width: 100px;
                        
                        margin: 10px 15px;
                    }

                    .reviewSiteLogo {
                        display: inline-block;
                        width: 100%;
                        height: 60px;
                        
                        img {
                            width: 100%;
                            height:100%;
                        }
                    }
                    
                    .starsContainer {
                        display: flex;
                        justify-content:center;
                    }
                }
            </style>


            <main id="carouselCard">
                <span class="reviewSiteLogo"><img id="siteLogo" src="" alt="Review Site Logo" /></span>
                <div class="starsContainer">
                </div>
                <p></p>
            </main>
        `
    }

    connectedCallback() {
        if (this.hasAttribute("siteLogo")) {
            this.site = this.getAttribute("siteLogo");
        }
        if (this.hasAttribute("rating")) {
            this.rating = this.getAttribute("rating");
        }

        this._createStars();
        this._setLogo();
    }


    _setLogo() {
        const image = this.shadowRoot.querySelector("#siteLogo")
        image.src = this.site
    }
    _createStars() {
        let numberOfStars = parseInt(this.rating) || 0;
        
        const container = this.shadowRoot.querySelector(".starsContainer")
        container.innerHTML = ""        

        for (let i = 0; i < numberOfStars; i++) {
            const star = document.createElement("span");
            star.innerHTML = `<i class="fa-solid fa-star" style="color: gold;";></i>`
            container.appendChild(star);
        }
    }
}

customElements.define("nate-carousel-card", CarouselCard);


