import "./Styles.scss";

const Home: React.FC = () => {
  return (
    <>
      <div className="uk-section section" id="home">
        <div className="uk-container uk-container-small">
          <h3 className="accentText">Hi, my name is</h3>
          <div className="content">
            <h2 className="hero uk-margin-remove-top">Shahid.</h2>
          </div>
          <p>
            I'm a software engineer specializing in full-stack web
            development(front-end heavy)
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
