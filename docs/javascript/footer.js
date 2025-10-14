const footer = document.getElementById('footer')
footer.innerHTML = `
    <footer id="footer" class="bg-black text-zinc-100 border-t border-white/10">
  <div class="md:max-w-[85%] mx-auto px-4 sm:px-6 md:py-16 py-12">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">
      <div class="md:col-span-4" data-aos="fade-up">
        <a href="/index.html" class="inline-flex items-center gap-3">
          <!-- <img src="/docs/assets/images/logo.png" alt="Company logo" class="h-10 w-auto"> -->
          <span class="text-lg uppercase tracking-[0.2em] font-medium text-zinc-300">Audio Services</span>
        </a>
        <p class="mt-4 text-zinc-300 max-w-sm">Mobile recording for theatre, panels, and live events. Clean dialogue, discreet setup, clear delivery.</p>
        <div class="mt-6 flex flex-wrap gap-3">
          <a href="/book.html" class="inline-flex items-center rounded-sm border border-zinc-100 bg-zinc-100 text-black px-5 py-2.5 text-sm tracking-wide hover:opacity-80 transition">Book Now<i class="fa-solid fa-arrow-right ml-2"></i></a>
          <a href="/services.html" class="inline-flex items-center rounded-sm border border-white/15 px-5 py-2.5 text-sm tracking-wide hover:bg-white/5 transition">View Services</a>
        </div>
      </div>

      <nav class="md:col-span-2" aria-label="Footer navigation" data-aos="fade-up" data-aos-delay="50">
        <h3 class="text-sm font-semibold text-zinc-200">Site</h3>
        <ul class="mt-4 space-y-3 text-zinc-300">
          <li><a href="/index.html" class="hover:opacity-80 transition">Home</a></li>
          <li><a href="/about.html" class="hover:opacity-80 transition">About</a></li>
          <li><a href="/services.html" class="hover:opacity-80 transition">Services</a></li>
          <li><a href="/book.html" class="hover:opacity-80 transition">Booking</a></li>
          <li><a href="/contact.html" class="hover:opacity-80 transition">Contact</a></li>
        </ul>
      </nav>

      <div class="md:col-span-3" data-aos="fade-up" data-aos-delay="100">
        <h3 class="text-sm font-semibold text-zinc-200">Packages</h3>
        <ul class="mt-4 space-y-3 text-zinc-300">
          <li><a href="/services.html#theatre" class="hover:opacity-80 transition">Theatre Recording</a></li>
          <li><a href="/services.html#events" class="hover:opacity-80 transition">Corporate & Events</a></li>
          <li><a href="/book.html?cat=theatre" class="hover:opacity-80 transition">Request Theatre</a></li>
          <li><a href="/book.html?cat=events" class="hover:opacity-80 transition">Request Events</a></li>
        </ul>
      </div>

      <div class="md:col-span-3" data-aos="fade-up" data-aos-delay="150">
        <h3 class="text-sm font-semibold text-zinc-200">Contact</h3>
        <ul class="mt-4 space-y-3 text-zinc-300">
          <li class="flex items-start gap-3"><i class="fa-solid fa-envelope mt-1 text-zinc-400"></i><a href="mailto:hello@example.com" class="hover:opacity-80 transition">hello@example.com</a></li>
          <li class="flex items-start gap-3"><i class="fa-solid fa-phone mt-1 text-zinc-400"></i><a href="tel:+00000000000" class="hover:opacity-80 transition">+00 000 000 000</a></li>
          <li class="flex items-start gap-3"><i class="fa-solid fa-location-dot mt-1 text-zinc-400"></i><span>City, Country</span></li>
        </ul>
        <div class="mt-5 flex items-center gap-4">
          <a href="#" aria-label="Instagram" class="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-white/15 hover:bg-white/5 transition"><i class="fa-brands fa-instagram"></i></a>
          <a href="#" aria-label="Facebook" class="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-white/15 hover:bg-white/5 transition"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#" aria-label="LinkedIn" class="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-white/15 hover:bg-white/5 transition"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>

    <div class="mt-10 h-px bg-white/10"></div>

    <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
      <p class="text-sm text-zinc-400">© 2025 Audio Services. All rights reserved.</p>
      <div class="sm:ml-auto flex items-center gap-5 text-sm">
        <a href="/privacy.html" class="text-zinc-400 hover:text-zinc-200 transition">Privacy</a>
        <span class="text-white/20">|</span>
        <a href="/terms.html" class="text-zinc-400 hover:text-zinc-200 transition">Terms</a>
      </div>
    </div>
  </div>
</footer>

`

// const year = new Date().getFullYear()
// const copyright = document.getElementById('copyright').innerHTML = year