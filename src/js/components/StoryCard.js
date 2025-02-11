import { LitElement, html, css } from "lit";

class StoryCard extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      description: { type: String },
      photoUrl: { type: String },
      createdAt: { type: String },
    };
  }

  static get styles() {
    return css`
      .card {
        border: 1px solid #ddd;
        border-radius: 12px;
        overflow: hidden;
        margin-bottom: 1.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }

      img {
        width: 100%;
        height: 250px;
        object-fit: cover;
      }

      .card-body {
        padding: 1.5rem;
        background-color: #fff;
      }

      .card:hover {
        transform: scale(1.05);
        transition: transform 0.3s ease;
      }
    `;
  }

  render() {
    return html`
      <div class="card">
        <img src="${this.photoUrl}" alt="${this.name}" />
        <div class="card-body">
          <h5>${this.name}</h5>
          <p>${this.description}</p>
          <p><small>${new Date(this.createdAt).toLocaleDateString()}</small></p>
        </div>
      </div>
    `;
  }
}

customElements.define("story-card", StoryCard);
