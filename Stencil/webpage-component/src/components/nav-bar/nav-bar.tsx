
import { Component, Prop } from "@stencil/core";
import { h } from "@stencil/core";

import '@fortawesome/fontawesome-free/css/all.min.css';


//TODO: declares a new web component
@Component({
    tag: 'nate-nav-bar', // Creates tag "same naming convention as js components"
    styleUrl: './nav-bar.css', //Imports CSS styles
    //scoped: true, // Similar to the shadow DOM but doesn't rely on the actual shadow DOM
    shadow: true // Uses the Shadow DOM and automatically changes for older browsers

})

export class NavBar {
    // { reflect } <-- changes the attribute in the real DOM too, incase you need to mess with it outside of the component
    @Prop({ mutable:true }) isMainMenuOpen: boolean; //TODO: Declaring an attribute
    @Prop({ mutable:true }) isNestListItemOpen: boolean;


    toggleMenu() {
        this.isMainMenuOpen = !this.isMainMenuOpen; 
        if (!this.isMainMenuOpen) {
            this.isNestListItemOpen = false;
        }
    }
    toggleListItem() { this.isNestListItemOpen = !this.isNestListItemOpen; }


    //TODO: Main template construction area
    render() {

        let menuDown = null, nestedListItem = null;

        nestedListItem = (
            <div class={`nestListItem ${this.isNestListItemOpen ? "" : "hideListItem"}` } >
                <h3>General Contracting</h3>
                <ul>
                    <li><a href="">Kitchen Remodeling</a></li>
                    <li><a href="">Bathroom Remodeling</a></li>
                    <li><a href="">Decorative Panel Wall</a></li>
                    <li><a href="">Outdoor Living</a></li>
                    <li><a href="">Additional</a></li>
                    <li><a href="">Maintenance</a></li>
                </ul>
                <h3>Painting</h3>
                <ul>
                    <li><a href="">Kitchen Remodeling</a></li>
                    <li><a href="">Bathroom Remodeling</a></li>
                    <li><a href="">Decorative Panel Wall</a></li>
                    <li><a href="">Outdoor Living</a></li>
                    <li><a href="">Additional</a></li>
                    <li><a href="">Maintenance</a></li>
                </ul>
            </div>
        )

        menuDown = (
            <div class={`dropDownMenu ${this.isMainMenuOpen ? "sideDown" : ""} `}  >
                
                <span class="contactButton"><a href="">Contact us <i class="fas fa-arrow-right"></i>
                </a></span>
                <ul>
                    <li><a href="">Home</a></li>
                    <li>
                        <a onClick={() => this.toggleListItem()}>Services</a>
                        {nestedListItem}
                    </li>
                    <li><a href="">About us</a></li>
                    <li><a href="">Our Work</a></li>
                    <li><a href="">Testimonials</a></li>
                </ul>

            </div>
        )

        return (
            <nav>
                <main>
                    <figure><img src="https://speedy.uenicdn.com/e593fd58-da1a-490f-8995-4d98a46c7b1c/n200_54a/image/upload/v1690501073/business/e5fbedd2-a5d9-4605-96bc-c0ff06dcdfaa.png" alt="Company Logo" /></figure>
                    <ul class="mainMenu">
                        <li><a href="">Home</a></li>
                        <li><a>Services</a></li>
                        <li><a href="">About us</a></li>
                        <li><a href="">Our Work</a></li>
                        <li><a href="">Testimonials</a></li>
                    </ul>
                    <span class="contactButton"><button>CONTACT US</button></span>
                    <button class={`hamburgerButton ${this.isMainMenuOpen ? "change" : ""}`}  onClick={() => this.toggleMenu()}>
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                    </button>
                </main>
                {menuDown}
            </nav>
        )
    }

}