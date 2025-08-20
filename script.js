

gsap.from(".profile h1",{
    y:80,
    duration:1,
    deley:0.5,
    stagger:0.15,
    opacity:0,
})
gsap.from(".profile-card ",{
    y:80,
    rotate:90,
    duration:2,
    deley:1,
    opacity:0,
    stagger:0.3
})
gsap.from(".profile-info ",{
    x:600,
    // rotate:360,
    duration:2,
    deley:1,
    opacity:0,
    stagger:0.3
})

gsap.to("#page1 h1",{
    transform:"translateX(-100%)",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        markers:false,
        start:"top 20%",
        end:"-100",
        scrub:2,
        pin:true
    }
})


    // **************************************************

 const images = document.querySelectorAll('.carousel img');
    let current = 0;

    function showNextImage() {
      images[current].classList.remove('active');
      current = (current + 1) % images.length;
      images[current].classList.add('active');
    }

    setInterval(showNextImage, 3000); // Change image every 3 seconds
    // ......................

    var main = document.querySelector("#main")
    var cursor = document.querySelector("#cursor")

    main.addEventListener("mousemove", function(elem){
        gsap.to(cursor,{
            x:elem.x,
            y:elem.y,
            duration:0.8,
        
        })
    })

    var profile = document.querySelector("#profilediv")
    profile.addEventListener("mouseenter", function(){
        cursor.innerHTML = "#Connect"
        gsap.to(cursor,{
            scale:6
        })
    })

    profile.addEventListener("mouseleave",function(){
        cursor.innerHTML = ""
         gsap.to(cursor,{
            scale:1
        })
    })

    // ***********************************************************

    const arrowBtn = document.getElementById("arrowBtn");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    // Scrolling down
    arrowBtn.style.transform = "rotate(180deg)";
  } else {
    // Scrolling up
    arrowBtn.style.transform = "rotate(0deg)";
  }

  lastScrollY = currentScrollY;
});

// ************************************************************
