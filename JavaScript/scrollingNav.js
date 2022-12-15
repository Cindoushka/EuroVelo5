const body = document.body;

let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset

  if (currentScroll <= 0 ) {
    body.classList.remove("scroll-up")
  } 

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up")
    body.classList.add("scroll-down")
  }

  if (currentScroll < 20 && body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-down")
    body.classList.add("scroll-up")
  }
  if (currentScroll > 1200 && !body.classList.contains("scrolldown")) {
      body.classList.add("scrolldown")
  }

  if (currentScroll < lastScroll && body.classList.contains("scrollup")) {
      body.classList.remove("scrollup")
      body.classList.add("scrolldown")
  }

  if (currentScroll > lastScroll && body.classList.contains("scrolldown")) {
    body.classList.remove("scrolldown")
    body.classList.add("scrollup")
  }
  lastScroll = currentScroll

  console.log(lastScroll)
})


