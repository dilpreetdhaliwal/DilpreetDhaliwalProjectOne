

// WELCOME PROMPT
    const helloParagraph = document.querySelector("#name");
    
    const userName = prompt("Welcome to the website, please enter your name");
    console.log(`${userName} is browsing the website`);
    
    helloParagraph.innerHTML = `Hello ${userName}! Quis autem vel eum iure reprehenderit qui in ea volupalate velit esse quah neil molesatia vel illum quie diloroem eum velit esse quam nihil consequator quie in ea el`;


// BLOG CAROUSEL 
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

        // pick beginning position 
        blogs[0].classList.add("carouselItemSelected");
        buttons[0].classList.add("carouselButtonSelected");
    });

// DROP DOWN ABOUT SECTION
    const aboutContainer = document.querySelector("#about");
    let isClicked = true;

    let showOrHide = () => {
        if(isClicked){
            aboutContainer.style.display = "flex";
            isClicked = false;
        }else{
            aboutContainer.style.display = "none";
            isClicked = true;
        }
        
    };