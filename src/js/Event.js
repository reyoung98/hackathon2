export default class Event {
  constructor(properties) {
    this.id = properties.id;
    this.name = properties.name;
    this.date = properties.date;
    this.description = properties.description;
    this.imageUrl = properties.image_url;
    this.event = document.createElement("div");
    this.event.classList.add("event");
    this.modal = document.createElement("div");
    this.modal.classList.add("modal");

    this.createEvent();
    this.createModal();
    this.openModal();
    this.closeModal();
  }

  createModal = () => {
    this.modal.innerHTML = `
        <div class="modal-info">
        <h2 class="event__name">${this.name}</h2>
        <p class="event__date">${this.date}</p>
        <img
          class="event__image"
          src="${this.imageUrl}"
          alt="image"
        />
        <p class="description">${this.description}</p>
      </div>

      <div class="modal-form">
        <h2>Register!</h2>
        <form
          method="POST"
          action="https://test-api.codingbootcamp.cz/api/532f6503/events/${this.id}/registrations"
        >
          <label for="first_name">Name:</label> <br />
          <input type="text" name="first_name" id="first_name" /> <br />

          <label for="last_name">Surname:</label> <br />
          <input type="text" name="last_name" id="last_name" />

          <label for="email">Email:</label> <br />
          <br />
          <input type="email" name="email" id="email"/> <br />

          <label for="phone">Phone Number:</label> <br />
          <input type="tel" name="phone" id="phone"/> <br />

          <label for="age_check">I am over 18 </label>
          <input type="checkbox" name="age_check" id="age_check"/>
          <button type="submit" >Send</button>
        </form>
      </div>
      <div class="x-section">
            <button class="x-btn">X</button>
          </div>
        </div>
       
        `;
    const section = document.querySelector("section");
    section.appendChild(this.modal);

    const forms= document.querySelectorAll('form');
    for (let form of forms) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.sendData();
            console.log("sending data!")
        });
    }
    
  };

  createEvent = () => {
    this.event.innerHTML = `
       
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
        `;
    const main = document.querySelector("main");
    main.appendChild(this.event);
  };

  openModal = () => {

    const moreBtns = document.querySelectorAll(".more-btn");

    for (let i = 0; i < moreBtns.length; i++) {
        moreBtns[i].addEventListener("click", () => {
          if (i + 7 === this.id) {
            this.modal.classList.add("modal-visible");
          }
        });
      }
  }

  closeModal = () => {

    const xBtns = document.querySelectorAll(".x-btn");

    for (let i = 0; i < xBtns.length; i++) {
        xBtns[i].addEventListener("click", () => {
            console.log(this.modal);
            this.modal.classList.remove("modal-visible");
        });
      }
  }

  sendData = async () => {
    const url = `https://test-api.codingbootcamp.cz/api/532f6503/events/${this.id}/registrations`;
    const dataObject = {
        // data here

    };

    const postResponse = await fetch(url, {
        "method": "POST",
        "body": JSON.stringify(dataObject),
        "headers": {
            'Content-Type': 'application/json'
        }
    })

    const postReadableResponse = await postResponse.json()

    console.log(postReadableResponse);
  }

}
