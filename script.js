
    const helloParagraph = document.querySelector("#name");
    
    const userName = prompt("What is your name?");
    console.log(`${userName} is browsing the website`);
    
    helloParagraph.innerHTML = `Hello ${userName}! Quis autem vel eum iure reprehenderit qui in ea volupalate velit esse quah neil molesatia vel illum quie diloroem eum velit esse quam nihil consequator quie in ea el`;


    document.querySelectorAll(".carousel").forEach(carousel => {
        const blogs = carousel.querySelectorAll(".blogContainer");
        const buttonsHtml = Array.from(blogs, () => {
            return `<span class="carouselButton"></span>`;
        });

        carousel.insertAdjacentHTML("beforeend", `
        <div class="carouselNav">
            ${ buttonsHtml.join("") }
        </div>
        `);

        const buttons = carousel.querySelectorAll(".carouselButton");

        buttons.forEach((button, i) => {
            button.addEventListener("click", () => {
                // unselect all the items
                blogs.forEach(item => item.classList.remove("carouselItemSelected"));
                buttons.forEach(button => button.classList.remove("carouselButtonSelected"));

                blogs[i].classList.add("carouselItemSelected");
                button.classList.add("carouselButtonSelected");
            });
        });

        blogs[0].classList.add("carouselItemSelected");
        buttons[0].classList.add("carouselButtonSelected");
    });