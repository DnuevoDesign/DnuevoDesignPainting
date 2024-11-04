import { Component, h } from "@stencil/core";



@Component({
    tag: 'ni-review-box',
    styleUrl: './reviews-box.css',
    shadow: true
})

export class ReviewBox {




    render() {
        return(
            <main>
                <div>
                <article>
                    <p>
                        {/*userReview*/}
                    </p>
                </article>
                <figure>
                    <span>
                        <img src="" alt="User Profile Image" />
                        <img src="" alt="Review Site" />
                    </span>
                </figure>
                </div>
                <div>
                    
                    <h3>{/*userName*/}</h3>
                    <span><i>star</i></span>
                </div>
            </main>
        )
    }
}