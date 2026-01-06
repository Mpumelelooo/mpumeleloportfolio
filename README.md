<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mpumelelo Hlongwane | Creative Technologist & Strategist</title>
    <!-- Elegant Typography: Jost for Sans, Playfair for high-end contrast -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet">
     <link rel="icon" type="image/x-icon" href="portfoliopictures/portpro2.jpeg">
    <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Falling Code Background -->
    <canvas id="code-bg"></canvas>


    <!-- Navigation -->
    <nav id="navbar">
        <div class="container nav-inner">
            <a href="#" class="logo">Mpumelelo Hlongwane</a>
            
            <div class="menu-toggle" id="mobile-toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div class="nav-links" id="nav-menu">
                <a href="#about">About</a>
                <a href="#expertise">Expertise</a>
                <a href="#work">Work</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <header class="hero">
        <div class="container hero-content">
            <h1 class="reveal">Mpumelelo Hlongwane <em>Creative Technologist</em> & Activation Strategist.</h1>
            <div class="hero-roles reveal">
                <span class="role-tag">Frontend Developer</span>
                <span class="role-tag">UI/UX Designer</span>
                <span class="role-tag">Qualified Filmmaker</span>
                <span class="role-tag">Graphic Designer</span>
                <span class="role-tag">Digital Growth Auditor</span>
            </div>
        </div>
    </header>

    <!-- About Section -->
    <section id="about" class="reveal">
        <div class="container about-grid">
            <div class="portrait-container">
                <div class="portrait-wrapper">
                    <!-- Placeholder as specified, keeping your img structure -->
                    <img src="portfoliopictures/portpro2.jpeg" alt="Mpumelelo Hlongwane" onerror="this.parentElement.innerHTML='<div style=\'height:100%; display:flex; align-items:center; justify-content:center; color:#666; font-size:0.7rem; letter-spacing:2px; text-transform:uppercase;\'>Portrait Placeholder</div>'">
                </div>
            </div>
            <div class="bio-text">
                <h2 class="section-title">Architecture of <em>Experience.</em></h2>
                <p>I’m a self taught Frontend Developer, UI/UX Designer, qualified Filmmaker, and Graphic Designer with a strong focus on creating digital experiences that balance visual excellence with real world functionality.</p>

                <p>My creative foundation in filmmaking shaped how I think about storytelling, emotion, and visual narrative, skills that naturally evolved into graphic design and brand identity work. Today, I combine this creative lens with technical expertise in frontend development and user centred design to build intuitive, responsive, and high impact digital products.</p>
                
                <p>Over time, my work expanded beyond execution into digital growth analysis and strategy. This led me into my role as a Digital Growth Auditor & Activation Strategist, where I diagnose digital ecosystems, identify growth gaps, and translate insights into clear, actionable execution plans that drive visibility, trust, and performance.</p>
    
            </div>
        </div>
    </section>

    <!-- Expertise Section -->
    <section id="expertise" class="reveal">
        <div class="container">
            <div class="section-header">
                <h2>Multidisciplinary <em>Expertise</em></h2>
                <p>A unique blend of technical development, strategic auditing, and visual storytelling.</p>
            </div>
            
            <div class="skills-grid">
                <div class="skill-category">
                    <h3>Development</h3>
                    <ul class="skill-list">
                        <li>Modern HTML5 & CSS3</li>
                        <li>Vanilla JS Architecture</li>
                        <li>Performance Optimization</li>
                        <li>Shopify & E-commerce</li>
                        <li>WordPress & Wix Studio</li>
                    </ul>
                </div>
                <div class="skill-category">
                    <h3>Design</h3>
                    <ul class="skill-list">
                        <li>UI/UX Design Systems</li>
                        <li>High-Fidelity Prototyping</li>
                        <li>Brand Identity Systems</li>
                        <li>Graphic Design</li>
                        <li>User Journey Mapping</li>
                    </ul>
                </div>
                <div class="skill-category">
                    <h3>Strategy</h3>
                    <ul class="skill-list">
                        <li>Digital Growth Auditing</li>
                        <li>Market Activation</li>
                        <li>Content Ecosystems</li>
                        <li>Performance Analysis</li>
                        <li>Execution Roadmaps</li>
                    </ul>
                </div>
                <div class="skill-category">
                    <h3>Creative</h3>
                    <ul class="skill-list">
                        <li>Cinematography</li>
                        <li>Post-Production</li>
                        <li>Visual Storytelling</li>
                        <li>Art Direction</li>
                        <li>Creative Strategy</li>
                    </ul>
                </div>
            </div>
        </div>

                    
                <div class="about-cta">
                    <button onclick="location.href='projectsxexperience.html'" class="btn">
      MY PROJECTS & EXPERIENCES
    </button>
                </div>
    </section>
  

    <!-- Strategy Section -->
    <section class="strategist-callout reveal">
        <div class="container strategist-inner">
            <h2>Strategy. <em>Then Activation.</em></h2>
            <div>
                <p>Beyond the pixel, I evaluate the ecosystem. As a Digital Growth Auditor, I help brands identify friction points in their digital customer journey and activate roadmaps that drive measurable authority.</p>
                <a href="#contact" class="btn" style="background: white; color: var(--accent-coffee);">Let's get to work</a>
            </div>
        </div>
    </section>

   
    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-grid">
                <div>
                    <div class="footer-logo">M. Hlongwane</div>
                    <p style="color: var(--text-muted); max-width: 300px;">Creative Technologist & Digital Strategist. Elevating digital ecosystems through intentional design and technical excellence.</p>
                </div>
                <div class="footer-links">
                    <h5>Navigation</h5>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#expertise">Expertise</a></li>
                        <li><a href="#work">Work</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h5>Connect</h5>
                    <ul>
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">GitHub</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <span>&copy; 2026 Designed by Mpumelelo Hlongwane</span>
                <span>South Africa &middot; </span>
            </div>
        </div>
    </footer>

   
   <script src="script.js"></script>
</body>
</html>
