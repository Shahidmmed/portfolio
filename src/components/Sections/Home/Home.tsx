import "./Home.scss";

const Home: React.FC = () => {
  return (
    <>
      <div className="uk-section section uk-margin-large" id="home">
        <div className="uk-container uk-container-small">
          <h3 className="accentText">Hi, my name is </h3>
          <div className="content">
            <h2 className="hero uk-margin-remove-top">Abdul Shahid,</h2>
            <h2 className="profession uk-margin-remove-top">
              Software Engineer
            </h2>
          </div>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default Home;
