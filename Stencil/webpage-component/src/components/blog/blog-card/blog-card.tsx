import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: 'ni-blog-card',
  styleUrl: './blog-card.css',
  shadow: true
})

export class BlogCard {
  @Prop() imageSource: string;
  @Prop() link: string;
  @Prop() blogTitle: string;
  @Prop() date: string;

  render() {
    return (
      <main class='card'>
        <a href={this.link}>
          <figure class='cardImage'>
            <img src={this.imageSource} alt="Blog Image" />
          </figure>
        </a>
        <article class='cardText'>
          <p>{this.date}</p>
          <header>
            <a href={this.link}>                        
              <h2>{this.blogTitle}</h2>
            </a>
          </header>
        </article>
      </main>
    );
  }
}
