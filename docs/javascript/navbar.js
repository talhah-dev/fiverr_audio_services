const dynamic_navbar = document.getElementById("navbar");

dynamic_navbar.innerHTML = `
<nav id="navbar" class="absolute top-0 left-0 w-full z-40 transition-all duration-500 bg-black/0">
  <div class="md:max-w-[85%] mx-auto flex justify-between items-center w-full lg:p-5 p-3 lg:h-[116px] h-24">
    <div class="flex w-full items-center justify-between xl:gap-32 gap-20">
      <a data-aos="fade-right" href="/index.html" class="flex items-center justify-center lg:justify-start" aria-label="Go to home">
         <img src="/docs/assets/images/logo.png" alt="Company logo" class="h-20 md:h-20 w-auto"> 
        <!--  <span class="text-lg uppercase tracking-[0.2em] font-medium text-zinc-300">Audio Services</span> -->
        <span class="sr-only">Home</span>
      </a>

      <div class="flex items-center gap-5">
        <div data-aos="fade-left" class="lg:flex items-center gap-10 hidden">
          <ul id="navbarLinks" class="lg:flex hidden items-center text-zinc-100 gap-10">
            <li><a href="/index.html" class="hover:opacity-60 tracking-wide transition-all duration-500">Home</a></li>
            <li><a href="/about.html" class="hover:opacity-60 tracking-wide transition-all duration-500">About</a></li>
            <li><a href="/services.html" class="hover:opacity-60 tracking-wide transition-all duration-500">Services</a></li>
            <li><a href="/contact.html" class="hover:opacity-60 tracking-wide transition-all duration-500">Contact</a></li>
            <li><a href="/book.html" class="hover:opacity-60 tracking-wide transition-all duration-500">Booking</a></li>
          </ul>
        </div>
      </div>

      <!-- Desktop CTA -->
      <div data-aos="fade-left" class="lg:flex hidden items-center gap-3">
        <a href="/book.html"
           class="w-full md:w-auto tracking-wider py-2 px-7 bg-zinc-100 text-center text-black rounded-sm border border-zinc-100 hover:opacity-70 transition-all duration-500">
          Book Now
        </a>
      </div>

      <!-- Mobile menu button -->
      <button data-aos="fade-left" id="mobileMenuBtn"
              class="lg:!hidden text-zinc-200 text-2xl cursor-pointer mr-2"
              aria-label="Open menu" aria-controls="mobileMenu" aria-expanded="false">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>
  </div>
</nav>

<!-- MOBILE MENU -->
<div id="mobileMenu"
     class="fixed left-0 top-0 bg-black text-zinc-100 w-0 overflow-hidden h-screen z-50 transition-all duration-500">
  <div class="flex items-end justify-end p-5">
    <button class="mobileMenuCloseBtn z-50 text-zinc-200 text-xl cursor-pointer" aria-label="Close menu">
      <i class="fa-solid fa-x"></i>
    </button>
  </div>

  <div class="p-6">
    <ul class="flex relative z-50 flex-col gap-7">
      <li><a href="/index.html" class="mobileMenuCloseBtn hover:opacity-60 tracking-wide transition-all duration-500 text-nowrap">Home</a></li>
      <li><a href="/about.html" class="mobileMenuCloseBtn hover:opacity-60 tracking-wide transition-all duration-500 text-nowrap">About</a></li>
      <li><a href="/services.html" class="mobileMenuCloseBtn hover:opacity-60 tracking-wide transition-all duration-500 text-nowrap">Services</a></li>
      <li><a href="/contact.html" class="mobileMenuCloseBtn hover:opacity-60 tracking-wide transition-all duration-500 text-nowrap">Contact</a></li>
      <li><a href="/book.html" class="mobileMenuCloseBtn hover:opacity-60 tracking-wide transition-all duration-500 text-nowrap">Booking</a></li>
    </ul>

    <div class="mt-5 flex flex-col gap-3">
      <a href="/book.html"
         class="w-full tracking-wider inline-flex items-center justify-center py-3 px-7 text-base font-medium text-center text-black rounded-sm border-2 border-zinc-800 bg-zinc-100 hover:opacity-70 transition-all text-nowrap duration-500">
        Book Now
      </a>
      <a href="/contact.html"
         class="w-full tracking-wider inline-flex items-center justify-center py-3 px-7 text-base font-medium text-center text-white rounded-sm border-2 border-zinc-800 hover:opacity-70 transition-all duration-500">
        Contact
      </a>
    </div>
  </div>
</div>
<div class="lg:h-24 h-20"></div>
`

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuCloseBtns = document.querySelectorAll(".mobileMenuCloseBtn");

mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.style.width = "100%";
});

mobileMenuCloseBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        mobileMenu.style.width = "0";
    });
});