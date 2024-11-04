import { Component, h, Prop } from "@stencil/core";



@Component({
    tag: "ni-review-container",
    styleUrl: ".//review-container.css"
})

export class ReviewBox {
    @Prop() firstName: string;
    @Prop() lastName: string;
    @Prop() reviewText: string;
    @Prop() profileImage: string;
    @Prop() siteLogo: string
    @Prop() rating: number = 0;




    render() {
        let ratingStars = [];
    
        // Ensure that rating is a valid number
        let numStars = Math.max(0, Math.floor(this.rating)); // Ensure non-negative
    
        for (let i = 0; i < numStars; i++) {
            ratingStars.push(<i class="fa-solid fa-star star"></i>);
        }
    
        return (
            <main id="reviewBox">
                <div class="personalInfo">
                    <span class="profileImage"><img src={this.profileImage} alt="Profile Image" /></span>
                    <h3>{this.firstName}</h3>
                    <h3>{this.lastName}</h3>
                </div>
    
                <p>{this.reviewText}</p>
    
                <div class="reviewInfo">
                    <span>
                        {ratingStars}
                    </span>
                    <span><img src={this.siteLogo} alt="Review Site" /></span>
                </div>
            </main>
        );
    }
    
}