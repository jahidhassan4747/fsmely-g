const members = document.querySelectorAll(".family-stack .member");
let index = 0;

setInterval(() => {
  members[index].classList.remove("active");

  index = (index + 1) % members.length;

  members[index].classList.add("active");
}, 5000); // 5 seconds
