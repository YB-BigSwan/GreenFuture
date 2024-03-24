import "../styles/about.css";

function About() {
  return (
    <div className="about-container">
      <div className="header-container">
        <div className="header-content">
          <h1 className="page-title">About the Community</h1>
          <p className="community-description">
            GreenFuture was inspired by Aalto University to create GreenFuture
            to enable Education for Sustainable Development (ESD) and Global
            Citizenship Education (GCED).
            <br />
            <br />
          </p>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="people standing together"
        className="about-us-img"
      />

      <div className="main-content">
        <p>
          Aalto University is an institution in Finland, renowned for its
          multidisciplinary approach to education, research, and innovations.
          The University actively works towards achieving the United Nations
          Sustainable Development Goals (SDGs), through research across various
          disciplines. Aalto University contributes to addressing global
          challenges such as climate change, inequality, and education for
          sustainable development, making a tangible impact globally.
          <br />
          <br />
          Green Future is an innovative e-learning platform empowering
          individuals to become champions of sustainability. We offer engaging
          courses on climate action, environmental stewardship, and global
          citizenship. Our mission is to make sustainability education
          accessible and transformative for learners of all ages, driving
          real-world impact. Through our freemium model, institutional
          partnerships, and corporate training programs, we aim to build a
          global community driving positive environmental change.
        </p>
      </div>
    </div>
  );
}

export default About;
