// 🥰🤠🥳🥳💯💯
function getFormattedTime() {
  let now = new Date();
  // console.log(now); // OutPut => Wed Apr 20 2022 14:10:35 GMT+0300 (Eastern European Summer Time)
  now = new Date().toLocaleTimeString("en-us", {});
  // console.log(now); // OutPUt => 2:11:07 PM

  now = new Date().toLocaleTimeString("en-us", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
  // Feb, 06:45 PM >> this is gole
  // console.log(now); // OUTPUT => Apr 20, 02:12 PM
  const date = now.split(",")[0].split(" ");
  const time = now.split(",")[1];
  return `${date[1]} ${date[0]},${time}`; // output ===> 20 Apr, 02:20 PM
  // console.log(formattedTime);
}

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
      addItems(type, desc, value);
      resetForm();
    }
  });

function addItems(type, desc, value) {
  const collection = document.querySelector(".collection");

  const time = getFormattedTime();
  const newHtml = `
      <div class="item">
        <div class="item-description-time">
          <div class="item-description">
            <p>${desc}</p>
          </div>
          <div class="item-time">
            <p>${time}</p>
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

  addItemTols(type, desc, value, time);
}

function resetForm() {
  document.querySelector(".add__type").value = "+";
  document.querySelector(".add__description").value = "";
  document.querySelector(".add__value").value = "";
}

function getItemToLS() {
  let items = localStorage.getItem("items");
  if (items) {
    items = JSON.parse(items);
  } else {
    items = [];
  }
  return items;
}

function addItemTols(type, desc, value, time) {
  let items = getItemToLS();
  items.push({ type, desc, value, time });
  localStorage.setItem("items", JSON.stringify(items));
}
