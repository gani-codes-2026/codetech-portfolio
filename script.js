* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', sans-serif;
  background: #0a0a0a;
  color: #fff;
  line-height: 1.6;
  overflow-x: hidden;
}

/* Navigation */
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5%;
  position: fixed;
  width: 100%;
  background: rgba(10, 10, 10, 0.95);
  z-index: 1000;
  backdrop-filter: blur(10px);
}

nav h2 {
  color: #00ffcc;
  font-size: 1.8rem;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 30px;
}

nav a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: 0.3s;
}

nav a:hover {
  color: #00ffcc;
}

/* Hero */
#hero {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, #1a1a2e, #0f0f1e);
}

.hero-content h1 {
  font-size: 4.8rem;
  margin-bottom: 10px;
}

.hero-content span {
  color: #00ffcc;
}

.hero-content h3 {
  font-size: 2rem;
  color: #bbbbbb;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 1.3rem;
  max-width: 700px;
  margin: 0 auto 30px;
  color: #ccc;
}

.hero-content button {
  padding: 16px 45px;
  font-size: 1.2rem;
  background: transparent;
  color: #00ffcc;
  border: 2px solid #00ffcc;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.4s;
}

.hero-content button:hover {
  background: #00ffcc;
  color: #000;
  transform: scale(1.1);
}

/* Sections */
section {
  padding: 120px 5%;
}

h2 {
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 60px;
  color: #00ffcc;
}

/* Skills & Projects */
.skills-grid, .projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.skill-card, .project-card {
  background: #1a1a2e;
  padding: 35px 25px;
  border-radius: 20px;
  text-align: center;
  transition: all 0.4s;
  border: 1px solid #333;
}

.skill-card:hover, .project-card:hover {
  transform: translateY(-15px);
  border-color: #00ffcc;
  box-shadow: 0 20px 40px rgba(0, 255, 204, 0.15);
}

.project-card a {
  display: inline-block;
  margin-top: 15px;
  padding: 10px 25px;
  background: #00ffcc;
  color: #000;
  text-decoration: none;
  border-radius: 50px;
  font-weight: bold;
}

/* Contact */
#contact {
  text-align: center;
}

.btn {
  display: inline-block;
  padding: 16px 40px;
  background: #00ffcc;
  color: #000;
  text-decoration: none;
  border-radius: 50px;
  font-weight: bold;
  margin-top: 20px;
}

.btn:hover {
  transform: scale(1.08);
}
