// 🥰🤠🥳🥳💯💯

document
  .querySelector("#ewallet-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    // console.log(e);
    // console.log("Form Submitted");

    const type = document.querySelector(".add__type").value;
    const desc = document.querySelector(".add__description").value;
    const value = document.querySelector(".add__value").value;
    // console.log(type, desc, value);

    if (desc && value.length > 0) {
      addItems(desc, type, value);
      resetForm();
    }
  });

function addItems(desc, type, value) {
  const collection = document.querySelector(".collection");

  const newHtml = `
      <div class="item">
        <div class="item-description-time">
          <div class="item-description">
            <p>${desc}</p>
          </div>
          <div class="item-time">
            <p>25 Feb, 06:45 PM</p>
          </div>
        </div>
        <div class="item-amount ${
          type === "-" ? "expense-amount" : "income-amount"
        }">
          <p>${type}$${value}</p>
        </div>
      </div>
      `;

  //console.log(newHtml);
  // document.querySelector(".collection").innerHTML = innerHtml; // change all html
  collection.insertAdjacentHTML("afterbegin", newHtml);
}

function resetForm() {
  document.querySelector(".add__type").value = "+";
  document.querySelector(".add__description").value = "";
  document.querySelector(".add__value").value = "";
}
