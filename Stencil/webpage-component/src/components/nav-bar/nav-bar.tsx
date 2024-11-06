
import { Component, Prop } from "@stencil/core";
import { h } from "@stencil/core";




//TODO: declares a new web component
@Component({
    tag: 'nate-nav-bar', // Creates tag "same naming convention as js components"
    styleUrl: './nav-bar.css', //Imports CSS styles
    //scoped: true, // Similar to the shadow DOM but doesn't rely on the actual shadow DOM
    shadow: false // Uses the Shadow DOM and automatically changes for older browsers

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
                <h3>Painting</h3>
                <ul>
                    <li><a href="https://dnuevodesign.com/public/pages/painting-services/residential-interior.html">Residential Interior Painting</a></li>
                    <li><a href="https://dnuevodesign.com/public/pages/painting-services/commercial-painting.html">Commercial Painting</a></li>
                    <li><a href="https://dnuevodesign.com/public/pages/painting-services/residential-exterior.html">Residential Exterior Painting</a></li>
                    <li><a href="https://dnuevodesign.com/public/pages/painting-services/re-finish-cabinets.html">Re-Finished Cabinets</a></li>
                    <li><a href="https://dnuevodesign.com/public/pages/painting-services/stain-finish.html">Stain Finish</a></li>
                    <li><a href="https://dnuevodesign.com/public/pages/painting-services/power-washing.html">Power Washing</a></li>
                    <li><a href="https://dnuevodesign.com/public/pages/painting-services/epoxy-floor.html">Epoxy Flooring</a></li>
                </ul>
            </div>
        )

        menuDown = (
            <div class={`dropDownMenu ${this.isMainMenuOpen ? "sideDown" : ""} `}  >
                
                <span class="contactButton"><a href="https://dnuevodesign.com/public/pages/contact.html">Contact us <i class="fas fa-arrow-right"></i></a></span>
                <ul>
                    <li><a href="">Home</a></li>
                    <li>
                        <a onClick={() => this.toggleListItem()}>Services</a>
                        {nestedListItem}
                    </li>
                    <li><a href="">Our Work</a></li>
                    <li><a href="">Testimonials</a></li>
                </ul>

            </div>
        )

        return (
            <nav>
                <div id="callToAction">
                    <h2><span>Holiday Sale</span> 10% OFF any purchase over 5 thousand</h2>
                </div>
                <main>
                    <figure><img src="https://speedy.uenicdn.com/e593fd58-da1a-490f-8995-4d98a46c7b1c/n200_54a/image/upload/v1690501073/business/e5fbedd2-a5d9-4605-96bc-c0ff06dcdfaa.png" alt="Company Logo" /></figure>
                    <ul class="mainMenu">
                        <li><a href="/">Home</a></li>
                        <li><a href="#about">Services</a></li>
                        <li><a href="#gallery">Our Work</a></li>
                        <li><a href="#reviews">Reviews</a></li>
                    </ul>
                    <a class="contactButton"><button type="button" class="btn btn-outline-secondary btn-lg">Contact Us</button></a>
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