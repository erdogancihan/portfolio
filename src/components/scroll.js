export const scroll = () => {
  let section = [];
  section = Array.from(document.querySelectorAll("section"));
  let scrollTop;
  let offset = 150;
  let skill = [];
  skill = Array.from(document.getElementsByClassName("skill"));
  window.addEventListener("scroll", () => {
    scrollTop = window.scrollY;
    section.map(s => {
      if (scrollTop > s.offsetTop - window.innerHeight + offset) {
       return s.classList.add("fadein");
      }
      return null;
    });
    
  });
  document.getElementById("skills").addEventListener("transitionend", () => {
    skill.map(s => {
     return s.classList.add("skill-animation");
    });
  });
  window.addEventListener("load",()=>{
    document.querySelector(".navbar").style.marginLeft=0
  })
};
