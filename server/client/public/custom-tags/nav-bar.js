class NavBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.shadowRoot.innerHTML = `
            <style>
                @media (min-width: 768px) {
   
                    /* TOP CONTAINER*/
                    .contactInfo {
                        box-sizing: border-box;

                        display: flex;
                        justify-content: space-between;

                        background-color: #091057;
                    }.contactInfo span {
                        display: flex;
                        align-items: center;
                        
                        margin: 0px 50px;

                        height: 100px;

                        a {
                            text-decoration: none;
                            color: #DBD3D3;
                            font-weight: 600;
                        }
                    }


                    .contactInfo span:nth-child(1) {
                        a {
                            font-size: 25px;
                        }
                    }.contactInfo span:nth-child(2) {
                        
                        a {
                            color: #091057;
                            background-color: #DBD3D3;

                            padding: 20px;

                            font-size: 20px;

                            border-radius: 5px;

                            box-shadow: 2px 2px 2px 1px #ffffffb6;

                        }
                        a:hover {
                            background-color: #091057;
                            color: #DBD3D3;
                            border: 3px solid #DBD3D3;
                            box-shadow: 0 0 10px 1px #ffffffb6;
                        }
                    }

                    /* MIDDLE CONTAINER */
                    .middleContainer {
                        background-color: #024CAA;

                        display: flex;
                        justify-content: center;

                        position: relative;

                        padding: 0 20px;


                    }
                    .hamburgerButton {
                        display: none;
                    }
    
                    .navbar-list {
                        ul {
                            display: flex;
                            justify-content: space-evenly;

                            list-style: none;
                            
                            background-color: #DBD3D3;

                            margin: 0;
                            padding: 20px 0px;

                            li {
                                padding: 5px;

                                transition: padding 500ms ease-out;
                            }
                            li:hover {
                                border-radius: 2px;
                                padding: 15px;

                                transition: padding 500ms ease-in;

                            }
                            a {
                                color: #024CAA;
                                font-size: 2vw;
                                font-weight: 600;
                                text-decoration: none;
                            }
                        }
                    }

                    .currentPage {
                        border-bottom: 3.5px solid #024CAA;
                    }
                }


                @media (min-width: 490px) and (max-width: 768px) {

                    /* TOP CONTAINER*/
                    .contactInfo {
                        box-sizing: border-box;

                        display: flex;
                        justify-content: space-between;

                        background-color: #091057;
                    }.contactInfo span {
                        display: flex;
                        align-items: center;
                        
                        margin: 0px 50px;

                        height: 100px;

                        a {
                            text-decoration: none;
                            color: #DBD3D3;
                            font-weight: 600;
                        }
                    }

                    .contactInfo span:nth-child(1) {
                        a {
                            font-size: 25px;
                        }
                    }.contactInfo span:nth-child(2) {
                        
                        a {
                            color: #091057;
                            background-color: #DBD3D3;

                            padding: 20px;

                            font-size: 20px;

                            border-radius: 5px;

                            box-shadow: 2px 2px 2px 1px #ffffffb6;

                        }
                        a:hover {
                            background-color: #091057;
                            color: #DBD3D3;
                            border: 3px solid #DBD3D3;
                            box-shadow: 0 0 10px 1px #ffffffb6;



                        }
                    }

                    /* MIDDLE CONTAINER */
                    .middleContainer {
                        background-color: #024CAA;

                        display: flex;
                        justify-content: center;

                        position: relative;

                        padding: 0 20px;


                    }
                    .hamburgerButton {
                        display: none;
                    }
                    
                    .navbar-list {
                        ul {
                            display: flex;
                            justify-content: space-evenly;

                            list-style: none;
                            
                            background-color: #DBD3D3;

                            margin: 0;
                            padding: 20px 0px;

                            li {
                                padding: 5px;

                                transition: padding 500ms ease-out;
                            }
                            li:hover {
                                border-radius: 2px;
                                padding: 15px;

                                transition: padding 500ms ease-in;

                            }
                            a {
                                color: #024CAA;
                                font-size: 3.5vw;
                                font-weight: 600;
                                text-decoration: none;

                            }
                        }
                    }

                    .currentPage {
                        border-bottom: 3.5px solid #024CAA;
                    }

                }

                @media (max-width: 490px) {
                    .contactInfo {
                        box-sizing: border-box;
                        display: flex;
                        justify-content: space-between;

                        background-color: #091057;

                        span {
                            display: flex;
                            align-items: center;
                            height: 80px;
                        }

                        a {
                            text-decoration: none;

                            color: #DBD3D3;
                        }
                    }
                    .contactInfo span:nth-child(1) {
                        margin-left: 10px;
                        
                        a {
                            font-size: 21px;
                            font-weight: 600;
                        }
                    }
                    .contactInfo span:nth-child(2) {
                        margin-right: 20px;
                        a {
                            font-size: 18px;
                            font-weight: 600;
                            color: #091057;
                            padding: 15px;
                            background-color: #DBD3D3;
                            border-radius: 10px;

                            box-shadow: 2px 2px 2px 1px #ffffffb6;

                        }
                    }


                    .middleContainer {
                        background-color: #024CAA;

                        display: flex;
                        justify-content: space-between;

                        span, 
                        button {
                            margin: 18px 15px;
                        }
                    }
                    
                    .navbar-list {
                        background-color: #DBD3D3;
                        overflow: hidden;

                        height: 250px;
                        transition: height 500ms ease-in;

                        

                        ul {
                            list-style-type: none;
                            padding: 5px 0px 5px 15px;
                            margin: 0;
                            li {
                                margin: 25px 0px;

                                a {
                                color: #024CAA;
                                text-decoration: none;
                                padding: 10px 20px;
                                
                                font-size: 25px;
                                font-weight: 600;
                            
                            
                                }
                            }
                        }
                    }


                    .collapse {
                        transition: height 500ms ease-out;
                        height: 0;
                    }

                    /***** HAMBURGER BUTTON *****/
                    .hamburgerButton {

                        border: 1px solid black;
                        background-color: #DBD3D3;
                        border-radius: 5px;
                        cursor: pointer;
                        display: inline-block;

                        box-shadow: 1px 1px 8px 2px #ffffff9a;
                    }.bar1,
                    .bar2,
                    .bar3 {
                        width: 35px;
                        height: 3.5px;
                        border-radius: 2px;
                        background-color: black;
                        margin: 6px;


                        transition: 200ms;
                    }.change  .bar1 {
                        transform: translate(0, 9px) rotate(-45deg);
                    }
                    .change .bar2 {
                        transform: translate(0, 0px) rotate(45deg);
                    }
                    .change .bar3 {
                        transform: translate(0, -9px) rotate(45deg);
                    }
                }
            </style>

            <nav class='mainNavBar'>

                <div class="contactInfo">
                    <span><a href="tel:8883835134">Call at: (888)383-5134</a></span>
                    <span><a href="">CONTACT</a></span>
                </div>

                <div class="middleContainer">
                    <span>
                        <img src="https://speedy.uenicdn.com/e593fd58-da1a-490f-8995-4d98a46c7b1c/n200_54a/image/upload/v1690501073/business/e5fbedd2-a5d9-4605-96bc-c0ff06dcdfaa.png" alt="Company Logo" />
                    </span>
                    <button class="hamburgerButton">
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                    </button>
                </div>

                <div class="navbar-list collapse ">
                    <ul>
                        <li><a href="/" class="currentPage">HOME</a></li>
                        <li><a href="/#service">SERVICE</a></li>
                        <li><a href="/#gallery">OUR WORK</a></li>
                        <li><a href="/#testimonial">TESTIMONIAL</a></li>
                    </ul>
                </div>

            </nav>
        `
        

    }

    connectedCallback() {
        this.button = this.shadowRoot.querySelector(".hamburgerButton")
        this.display = this.shadowRoot.querySelector(".navbar-list");


        this.button.addEventListener("click", this._transformButton.bind(this))

        
    }

    _transformButton() {
        this.button.classList.toggle("change");
        this._dropDownMenu();

    }
    _dropDownMenu() {
        this.display.classList.toggle("collapse")
    }
}

customElements.define("nate-nav-bar", NavBar);