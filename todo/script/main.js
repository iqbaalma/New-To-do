const main = () => {
  const titleInput = document.getElementById("title");
  const addList = document.getElementById("add");
  let clickCounter = 1;

  addList.addEventListener("click", () => {
    if (titleInput.value === "") {
      window.alert("Data tidak boleh kosong!");
    } else {
      const titleList = document.getElementById("titleList");
      const value = titleInput.value;

      titleList.innerHTML = "";
      titleList.innerHTML = `
            ${value}
        `;
    }
  });

  //   for (let i = 0; i < 10; i++) {
  //     console.log(i);
  //   }

  const accordionButton = document.querySelector(".custom-accordion-button");

  accordionButton.addEventListener("click", (event) => {
    clickCounter++;

    const accordionBody = document.querySelector(".custom-accordion-body");
    const accordionIcon = document.querySelector(
      ".custom-accordion-button > i"
    );

    if (clickCounter % 2 === 0) {
      //   console.log(clickCounter);
      accordionBody.style.maxHeight = "max-content";
      accordionIcon.setAttribute("class", "");
      accordionIcon.setAttribute("class", "bi bi-chevron-down");
    } else {
      accordionBody.style.maxHeight = "0";
      accordionIcon.setAttribute("class", "");
      accordionIcon.setAttribute("class", "bi bi-chevron-up");
    }
  });
};

export default main;