import { Component, h, Prop } from "@stencil/core";


@Component ({
    tag: "ni-about-us-card",
    styleUrl: "./about-us-card.css",
    shadow: true
})

export class Card {
    @Prop() image: string;
    @Prop() cardTitle: string;
    @Prop() cardDescription: string;




    render() {
        return (
            <main class="aboutCard">
                <article>
                    <img src={this.image} alt="About Us Image" />
                    <h3>{this.cardTitle}</h3>
                    <p>{this.cardDescription}</p>
                </article>
            </main>
        )
    }
}