import { Component, h, Prop } from "@stencil/core";


@Component({
    tag: "ni-carousel-card",
    styleUrl: "./carousel-card.css"
})


export class CarouselCard {
    @Prop() numberStars: number;
    @Prop() siteLogo: string;


    render() {
        let ratingStars = [];

        for (let i = 0; i < this.numberStars; i++) {
            ratingStars.push(<i class="fa-solid fa-star star"></i>);
        }

        return (
            <main id="carouselCard">
                <span class="reviewSiteLogo"><img src={this.siteLogo} alt="Review Site Logo" /></span>
                <div class="starsContainer">
                    {ratingStars}
                </div>
                <p>({this.numberStars} out of 5)</p>
            </main>
        )
    }
}