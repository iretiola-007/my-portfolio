/* terminal typing intro */

const lines = document.querySelectorAll('.terminal-line');
let lineIndex = 0;

function typeLine(){

  if(lineIndex >= lines.length) return;

  const el = lines[lineIndex];
  const text = el.dataset.text;

  let i = 0;

  function typeChar(){

    if(i < text.length){
      el.textContent += text.charAt(i);
      i++;
      setTimeout(typeChar,30);
    }

    else{
      lineIndex++;
      setTimeout(typeLine,400);
    }

  }

  typeChar();
}

typeLine();


/* Terminal commands */

const input = document.getElementById("terminal-input");
const output = document.getElementById("terminal-output");

const commands = {
  help: "commands: help, about, projects, skills, contact, kyv",
  about: "I'm a developer who enjoys building experimental tools and web projects.",
  projects: "Kyvera, BME Nigeria, Bug Bounty Hunter",
  skills: "HTML, CSS, JavaScript, Python",
  contact: "email: abisigairetiola@gmail.com"
};

input.addEventListener("keydown", function(e){

  if(e.key === "Enter"){

    const value = input.value.trim().toLowerCase();

    const line = document.createElement("p");
    line.textContent = "$ " + value;
    output.appendChild(line);

    if(value === "kyv"){

      const cmd = document.createElement("p");
      cmd.textContent = "$ kyv run hello_de.kyv";
      output.appendChild(cmd);

      const res = document.createElement("p");
      res.textContent = "Hello, I'm Iretiola 👋";
      output.appendChild(res);

    } 
    else{

      const response = document.createElement("p");
      response.textContent = commands[value] || "command not found";
      output.appendChild(response);

    }

    input.value = "";

  }

});



const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }

  });

});

document.querySelectorAll('.fade').forEach(el => observer.observe(el));


/* skill bar */

const bars = document.querySelectorAll(".progress");

const skillObserver = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      const bar = entry.target;
      bar.style.width = bar.dataset.width;

    }

  });

});

bars.forEach(bar => skillObserver.observe(bar));


const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {

  navLinks.classList.toggle("nav-open");
  hamburger.classList.toggle("active");

});


/* cursor glow */

const glow = document.getElementById("cursor-glow");

let mouseX = 0;
let mouseY = 0;

let glowX = 0;
let glowY = 0;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateGlow(){

  glowX += (mouseX - glowX) * 0.1;
  glowY += (mouseY - glowY) * 0.1;

  glow.style.left = glowX + "px";
  glow.style.top = glowY + "px";

  requestAnimationFrame(animateGlow);
}

animateGlow();



