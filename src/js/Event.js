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
    // this.createModal();
    this.openModal();
    this.closeModal();
  }

  createModal = () => {
    this.modal.innerHTML = `
        <div class="modal-info">
        <h2 class="event__name">${this.name}</h2>
        <p class="event__date">${this.date}</p>
        <img
          class="modal-image"
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
          <label for="first_name">Name *</label> <br />
          <input type="text" name="first_name" id="first_name" /> <br />

          <label for="last_name">Surname *</label> <br />
          <input type="text" name="last_name" id="last_name" />

          <label for="email">Email *</label> <br />
        
          <input type="email" name="email" id="email"/> <br />

          <label for="phone">Phone Number</label> <br />
          <input type="tel" name="phone" id="phone"/> <br />

          <div class="check">
          <label for="age_check">I am over 18 *</label>
          <input type="checkbox" name="age_check" id="age_check"/>
          </div>
          <button type="submit" >Send</button>
        </form>
      </div>
      <div class="x-section">
            <button class="x-btn">X</button>
          </div>
        </div>
       
        `;
    // Append Modal inside the section

    const section = document.querySelector("section");
    section.appendChild(this.modal);

    // Select Close Button and add event listener

    const xBtn = this.modal.querySelector(".x-btn");
    console.log(xBtn);
    xBtn.addEventListener("click", this.closeModal);

    //  Select the Form and add event listener type Submit to it
    // Prevent default, trigger sendData(form) function with form as an argument

    const form = this.modal.querySelector("form");
    // console.log(form);
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.sendData(form);
      console.log("sending data!");
    });
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
    // const moreBtns = document.querySelectorAll(".more-btn");

    // for (let i = 0; i < moreBtns.length; i++) {
    //   moreBtns[i].addEventListener("click", () => {
    //     if (i + 7 === this.id) {
    //       this.modal.classList.add("modal-visible");
    //       this.createModal();
    //     }
    //   });
    // }

    //

    const moreBtn = this.event.querySelector(".more-btn");
    moreBtn.addEventListener("click", () => {
      this.modal.classList.add("modal-visible");
      this.createModal();
    });
  };

  closeModal = () => {
    // const section = document.querySelector('section');
    // console.log(section)
    // section.removeChild(this.modal);
    this.modal.classList.remove("modal-visible");
  };

  sendData = async (form) => {
    const nameValue = form.querySelector("#first_name").value;
    console.log(nameValue);
    const lastName = form.querySelector("#last_name").value;
    const emailValue = form.querySelector("#email").value;
    const phoneValue = form.querySelector("#phone").value;

    const url = `https://test-api.codingbootcamp.cz/api/532f6503/events/${this.id}/registrations`;
    const dataObject = {
      name: nameValue,
      surname: lastName,
      email: emailValue,
      phone: phoneValue,
    };

    const postResponse = await fetch(url, {
      method: "POST",
      body: JSON.stringify(dataObject),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const postReadableResponse = await postResponse.json();

    console.log(postReadableResponse);
  };
}
