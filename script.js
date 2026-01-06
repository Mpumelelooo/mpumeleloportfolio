  document.addEventListener('DOMContentLoaded', () => {
            
            // 1. Mobile Menu Toggle
            const mobileToggle = document.getElementById('mobile-toggle');
            const navMenu = document.getElementById('nav-menu');
            
            mobileToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                // Toggle icon animation could go here
            });

            // Close menu when clicking a link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                });
            });

            // 2. Scroll-Based Navigation Effect
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }, { passive: true });

            // 3. Intersection Observer for Reveal Animations
            const revealOptions = {
                threshold: 0.15,
                rootMargin: '0px 0px -50px 0px'
            };

            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        
                        const staggered = entry.target.querySelectorAll('.staggered-reveal');
                        staggered.forEach((el, index) => {
                            setTimeout(() => {
                                el.style.opacity = '1';
                                el.style.transform = 'translateY(0)';
                            }, index * 150);
                        });
                        // Once revealed, no need to observe again
                        revealObserver.unobserve(entry.target);
                    }
                });
            }, revealOptions);

            document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

            // 4. Subtle Parallax for Hero
            window.addEventListener('scroll', () => {
                const scrolled = window.scrollY;
                const heroH1 = document.querySelector('.hero h1');
                const eyebrow = document.querySelector('.hero-eyebrow');
                if (heroH1 && window.innerWidth > 768) {
                    heroH1.style.transform = `translateY(${scrolled * 0.15}px)`;
                    eyebrow.style.transform = `translateY(${scrolled * 0.05}px)`;
                    heroH1.style.opacity = `${1 - scrolled / 900}`;
                }
            }, { passive: true });

            // 5. Initial Load Trigger
            setTimeout(() => {
                document.querySelectorAll('.hero .reveal').forEach(el => el.classList.add('active'));
            }, 300);
        });

        console.log(
            "%c M. HLONGWANE %c 2026 STRATEGY & DEV ",
            "color: #fff; background: #4B3621; padding: 5px 10px; font-weight: bold; border-radius: 2px 0 0 2px;",
            "color: #4B3621; background: #FFDAB9; padding: 5px 10px; font-weight: bold; border-radius: 0 2px 2px 0;"
        );

         /**
         * Falling Code Background Effect
         */
        const initCodeBackground = () => {
            const canvas = document.getElementById('code-bg');
            const ctx = canvas.getContext('2d');
            
            let width, height;
            const codeSnippets = ['<div>', 'const', '=>', 'export', 'float', 'main()', '{ }', 'color:', 'flex', 'grid', 'async', 'await', '01'];
            let particles = [];

            const resize = () => {
                width = canvas.width = window.innerWidth;
                height = canvas.height = window.innerHeight;
            };

            class Particle {
                constructor() {
                    this.init();
                }
                init() {
                    this.x = Math.random() * width;
                    this.y = Math.random() * -height;
                    this.speed = 0.5 + Math.random() * 1.5;
                    this.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
                    this.fontSize = 10 + Math.random() * 12;
                    this.opacity = 0.1 + Math.random() * 0.3;
                }
                draw() {
                    ctx.fillStyle = `rgba(75, 56, 50, ${this.opacity})`;
                    ctx.font = `${this.fontSize}px monospace`;
                    ctx.fillText(this.text, this.x, this.y);
                    this.y += this.speed;

                    if (this.y > height) {
                        this.init();
                        this.y = -20;
                    }
                }
            }

            const setup = () => {
                resize();
                particles = Array.from({ length: 40 }, () => new Particle());
            };

            const animate = () => {
                ctx.clearRect(0, 0, width, height);
                particles.forEach(p => p.draw());
                requestAnimationFrame(animate);
            };

            window.addEventListener('resize', resize);
            setup();
            animate();
        };

        /**
         * Vanilla JavaScript Intersection Observer
         * Handles the subtle fade-in and slide-up of sections
         */
        const observeSections = () => {
            const options = {
                threshold: 0.15,
                rootMargin: "0px 0px -50px 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, options);

            document.querySelectorAll('section').forEach(section => {
                observer.observe(section);
            });
        };

        window.addEventListener('DOMContentLoaded', () => {
            initCodeBackground();
            observeSections();
        });