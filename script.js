
      // Theme Toggle Functionality
      const themeToggle = document.getElementById('themeToggle');
      const themeToggleMobile = document.getElementById('themeToggleMobile');
      const themeIcon = document.getElementById('themeIcon');
      const themeIconMobile = document.getElementById('themeIconMobile');
      const body = document.body;

      // Mobile Menu Toggle Functionality
      const menuToggle = document.getElementById('menuToggle');
      const closeMenu = document.getElementById('closeMenu');
      const mobileMenu = document.getElementById('mobileMenu');
      const menuOverlay = document.getElementById('menuOverlay');

      // Check for saved theme preference or default to 'dark'
      const currentTheme = localStorage.getItem('theme') || 'dark';
      
      // Apply saved theme on page load
      if (currentTheme === 'light') {
        body.classList.add('light-mode');
        themeIcon.classList.remove('ri-sun-line');
        themeIcon.classList.add('ri-moon-line');
        themeIconMobile.classList.remove('ri-sun-line');
        themeIconMobile.classList.add('ri-moon-line');
      }

      // Toggle theme function
      function toggleTheme() {
        body.classList.toggle('light-mode');
        
        if (body.classList.contains('light-mode')) {
          themeIcon.classList.remove('ri-sun-line');
          themeIcon.classList.add('ri-moon-line');
          themeIconMobile.classList.remove('ri-sun-line');
          themeIconMobile.classList.add('ri-moon-line');
          localStorage.setItem('theme', 'light');
        } else {
          themeIcon.classList.remove('ri-moon-line');
          themeIcon.classList.add('ri-sun-line');
          themeIconMobile.classList.remove('ri-moon-line');
          themeIconMobile.classList.add('ri-sun-line');
          localStorage.setItem('theme', 'dark');
        }
      }

      // Open mobile menu function
      function openMenu() {
        mobileMenu.classList.add('active');
        menuOverlay.classList.add('active');
        menuToggle.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent body scroll
      }

      // Close mobile menu function
      function closeMenuFunc() {
        mobileMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        menuToggle.classList.remove('active');
        document.body.style.overflow = ''; // Restore body scroll
      }

      // Add event listeners
      themeToggle.addEventListener('click', toggleTheme);
      themeToggleMobile.addEventListener('click', toggleTheme);
      menuToggle.addEventListener('click', openMenu);
      closeMenu.addEventListener('click', closeMenuFunc);
      menuOverlay.addEventListener('click', closeMenuFunc);

      // Close mobile menu when clicking on a link
      const mobileMenuLinks = mobileMenu.querySelectorAll('a');
      mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMenuFunc);
      });
    