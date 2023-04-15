"use strict";
const btns = document.querySelectorAll("#btn");
const cards = document.querySelectorAll(".card");
async function getData() {
  try {
    const res = await fetch("./data.json");
    const data = await res.json();
    useData(data);
  } catch (err) {
    console.error(err);
  }
}

function useData(data) {
  data.forEach((info) => {
    cards.forEach((card) => {
      btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          if (card.dataset.activity === info.title) {
            const currentTime = card.querySelector(".time");
            const previousTime = card.querySelector(".last");
            const timeFrames = Object.keys(info.timeframes);
            const currentTarget = e.target.textContent.toLowerCase();

            timeFrames.forEach((time) => {
              if (time === currentTarget) {
                currentTime.textContent = ` ${info.timeframes[currentTarget].current}hrs `;
                previousTime.textContent = ` ${
                  time === "daily"
                    ? "Yesterday"
                    : time === "weekly"
                    ? "Last Week"
                    : "Last Month"
                } - ${info.timeframes[currentTarget].previous}hrs `;
              }
            });
            {
            }
          }
        });
      });
    });
  });
}
getData();
