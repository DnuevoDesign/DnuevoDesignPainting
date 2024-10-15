class ServiceCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode:"open" });

        this.image;
        this.title;
        this.description;

        this.shadowRoot.innerHTML = `

            <style>
                html, 
                body {
                    margin: 0;
                }
                @media (max-width: 490px) {
                    .mainContainer {
                        box-sizing: border-box;

                        display: flex;
                        margin: 20px auto;
                        padding: 10px;
                        width: 90%;
                        height: 150px;
                        border: 2px solid #dadada;
                    }

                    .mainContainer span {

                        box-sizing: border-box;
                        align-self: center;
                        width: 30%;
                        height: 90%;

                        

                        img {
                            border-radius: 20%;
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .mainContainer article {
                        align-self: center;
                        width: 70%;
                        margin-left: 10px;



                        h2 {
                            margin: 5px 0px;
                            font-size: 19px;
                            font-weight: lighter;
                        }
                        p {
                            text-wrap: balance;
                            font-size: 12px;
                            margin: 0;
                            max-height: 90px;
                            overflow-y: auto;
                        }

                    }
                }
            </style>


            <main class="mainContainer">
                <span><img id="image" src="" alt="Content Image"></span>
                <article class="textContainer">
                    <h2 id="title">
                        
                    </h2>
                    <p id="description">
                        
                    </p>
                </article>
            </main>
        `

    }

    connectedCallback() {
        if (this.hasAttribute("image")) {
            this.image = this.getAttribute("image");
        }
        if (this.hasAttribute("title")) {
            this.title = this.getAttribute("title");
        }
        if (this.hasAttribute("description")) {
            this.description = this.getAttribute("description");
        }

        const setImage = this.shadowRoot.getElementById("image");
        const setTitle = this.shadowRoot.getElementById("title");
        const setDescription = this.shadowRoot.getElementById("description");

        setImage.src = this.image;
        setTitle.innerText = this.title;
        setDescription.innerText = this.description;
    }


}

customElements.define("nate-service-card", ServiceCard)