export default class Event {
    constructor(properties) {
        this.name = properties.name;
        this.date = properties.date;
        this.description = properties.description;
        this.imageUrl = properties.image_url;
        this.element = document.createElement('div');
        this.element.classList.add("event");

        this.createEvent();
    }

    createEvent = () => {
        this.element.innerHTML = `
       
        <img
          class="event-img"
          src="${this.imageUrl}"
          alt=""
        />
        <div class="event-info">
          <h2 class="event-name">
            ${this.name}
          </h2>
              <p class="event-date">${this.date}</p>
              <button class="more-btn">More</button>
        </div>
        `
        const main = document.querySelector('main');
        main.appendChild(this.element)
    }

}