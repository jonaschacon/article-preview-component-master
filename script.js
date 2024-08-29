const icon = document.querySelector('.icon');
const profile = document.querySelector(".profile");
const share1 = document.querySelector(".share1");
const profileCard = document.querySelector(".profile-card");

profile.style.display = 'flex';
share1.style.display = "none"

icon.addEventListener("click", () => {
    if (window.innerWidth < 700) {
        if (profile.style.display == "flex") {
            profile.style.display = "none";
            share1.style.display = "flex";
            profileCard.style.backgroundColor = "#48556a";
        } else {
            profile.style.display = "flex";
            share1.style.display = "none";
            profileCard.style.backgroundColor = "#ffffff";
        }
        
    }
    
})

window.addEventListener("resize", () => {
    if (window.innerWidth > 700) {
        share1.style.display = "none";
        profile.style.display = "flex";
        profileCard.style.backgroundColor = "#ffffff";
    }
})