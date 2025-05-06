import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <nav className="navbar">
        <div className="container navbar-content">
          <Link to="/" className="logo">AquaTracker</Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="container">
          <h1>Track Your Daily Water Intake</h1>
          <p>Stay hydrated and healthy with our simple water tracking solution</p>
          <Link to="/signup" className="button">Get Started</Link>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <h3>Track Water Intake</h3>
              <p>Log your daily water consumption easily and efficiently</p>
            </div>
            <div className="feature-card">
              <h3>Set Reminders</h3>
              <p>Get notifications to help you stay on track with your hydration goals</p>
            </div>
            <div className="feature-card">
              <h3>View Progress</h3>
              <p>Monitor your hydration habits with simple progress tracking</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 AquaTracker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;