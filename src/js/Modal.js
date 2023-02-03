// export default class Modal {
//     constructor(properties) {
//         this.id = properties.id;
//         this.name = properties.name;
//         this.date = properties.date;
//         this.description = properties.description;
//         this.imageUrl = properties.image_url;
//         this.element = document.createElement('div');
//         this.element.classList.add("modal");

//         this.createModal();
//     }

//     createModal = () => {
//         this.element.innerHTML = `
//         <div class="modal-info">
//         <h2 class="event__name">${this.name}</h2>
//         <p class="event__date">${this.date}</p>
//         <img
//           class="event__image"
//           src="${this.image_url}"
//           alt="image"
//         />
//         <p class="description">${this.description}</p>
//       </div>

//       <div class="modal-form">
//         <h2>Register!</h2>
//         <form
//           method="POST"
//           action="https://test-api.codingbootcamp.cz/api/532f6503/events/${this.id}/registrations"
//         >
//           <label for="first_name">Name:</label> <br />
//           <input type="text" name="first_name" id="first_name" /> <br />

//           <label for="last_name">Surname:</label> <br />
//           <input type="text" name="last_name" id="last_name" />

//           <label for="email">Email:</label> <br />
//           <br />
//           <input type="email" name="email" id="email" /> <br />

//           <label for="phone">Phone Number:</label> <br />
//           <input type="tel" name="phone" id="phone" /> <br />

//           <label for="age_check">I am over 18 </label>
//           <input type="checkbox" name="age_check" id="age_check" />
//         </form>
//       </div>
       
//         `
//         const section = document.querySelector('section');
//         section.appendChild(this.element)
//     }

// }