import "./Home.scss";

const Home: React.FC = () => {
  return (
    <div className="uk-section section uk-margin-large home" id="home">
      <div className="uk-container uk-container-small">
        <div className="content uk-flex">
          <div>
            <h2 className="hero uk-margin-remove-top">Abdul Shahid</h2>
            <h2 className="profession uk-margin-remove-top">
              Software Engineer
            </h2>
          </div>
          <div className="img-content">
            <div className="picture"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
