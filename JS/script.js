function scrollToSection(sectionId){
  const target = document.getElementById(sectionId);
  target.scrollIntoView({
    behavior: "smooth"
  });
}