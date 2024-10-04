const txt = document.getElementById("textP");
let skills = ["JavaScript", "React", "TypeScript", "Angular"];
let constantLength = 0;
let count = 0;
skills.forEach(element => {
    if(element.length > constantLength) constantLength = element.length;
});
const blink = document.getElementById("blinker");
let isHidden = false;
setInterval(() => {
    if (!isHidden) {
        isHidden = true;
        blink.classList.add("hide-blink");
        blink.classList.remove("show-blink");
    } else {
        isHidden = false;
        blink.classList.add("show-blink");
        blink.classList.remove("hide-blink");
    }
}, 700)

function showSkills () {
for (let j = 0; j < skills.length; j++) {
    let skill = skills[j];
    setTimeout(() => {
        for (let i = 0; i < skill.length; i++) {
            setTimeout(() => {
                txt.innerText = txt.innerText + skill[i];
            }, 150 * i);
        }

        setTimeout(() => {
            for (let i = 0; i < skill.length; i++) {
                setTimeout(() => {
                    txt.innerText = txt.innerText.slice(0, - 1)
                }, 150 * i);
            }
        }, 200 * constantLength)
    }, 400 * constantLength * j)
}
count++;
}
showSkills();
setInterval( () => showSkills(), 15100)
