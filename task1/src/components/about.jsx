import React from 'react';
import './components.css'
import './about.css';

const about = () => {
  return (
    <div className="about-container">
      <h1>About ITC, IIT Bombay</h1>

      <section>
        <h2>Who We Are</h2>
        <p>
          The <strong>Institute Technical Council (ITC)</strong> is the student-led body responsible
          for driving the entire tech ecosystem at IIT Bombay. We are the central hub for all things
          technology — organizing events, enabling learning, managing technical clubs, and fostering
          a culture of innovation.
        </p>
        <p>
          We work closely with students, professors, alumni, and industry leaders to make sure tech at IIT Bombay stays relevant, challenging, and exciting.
        </p>
      </section>

      <section>
        <h2>Our Mission</h2>
        <p><strong>Make tech accessible, meaningful, and exciting for every student at IIT Bombay.</strong></p>
        <ul>
          <li>Help students explore and master different areas of tech.</li>
          <li>Connect students with mentors, peers, and experts.</li>
          <li>Provide exposure through competitions, internships, and collaborations.</li>
          <li>Promote interdisciplinary problem-solving.</li>
          <li>Encourage collaboration, innovation, and self-driven learning.</li>
        </ul>
      </section>

      <section>
        <h2>What We Do</h2>

        <h3>💡 Flagship Events</h3>
        <ul>
          <li><strong>Technovation</strong> – problem-solving + pitching challenge.</li>
          <li><strong>IndustryX</strong> – speaker series with tech experts.</li>
          <li><strong>Tech Weekend</strong> – workshops, showcases, and live sessions.</li>
        </ul>

        <h3>🤝 Inter-IIT Participation</h3>
        <p>
          We coordinate IIT Bombay’s participation in the <strong>Inter-IIT Tech Meet</strong>,
          where students compete in tech domains like AI, robotics, aerospace, and more.
        </p>

        <h3>🔬 Clubs & Technical Teams</h3>
        <p>
          We support over a dozen clubs across fields like robotics, AI/ML, electronics, blockchain, and bioengineering.
        </p>

        <h3>🧠 Skill-Building Initiatives</h3>
        <p>
          Coding bootcamps, resume workshops, open-source sprints, alumni tech talks — for all levels.
        </p>

        <h3>🌐 Community and Culture</h3>
        <p>
          We run hackathons, game nights, and fun digital recreations like our <strong>GatherTown Convocation</strong>.
        </p>
      </section>

      <section>
        <h2>Why It Matters</h2>
        <p>
          At IIT Bombay, students are builders, solvers, and dreamers. ITC ensures they have the tools and support to pursue bold ideas — from space tech to national-award-winning startups.
        </p>
      </section>

      <section>
        <h2>Join Us</h2>
        <p>
          ITC is built by students, for students. Got an idea? Want to build, lead, or change something? You're welcome here.
        </p>
        <p><strong>This is your space to build. Let’s make something great.</strong></p>
      </section>
    </div>
  );
};

export default about;
