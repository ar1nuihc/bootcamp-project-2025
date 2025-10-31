export default function Home() {
  return (
    <main>
      <h1 className="page-title">Hello World!</h1>
      <div className="about">
        <div className="about-image">
          <img
            src="/siamese.jpg"
            alt="picture of a siamese cat"
            width="300"
            height="300"
          />
        </div>
        <div className="about-text">
          <p>
            Hello my name is <strong>Aron Chiu</strong>! Some of my favorite
            things are: 
            <em>
               cats, video games, sports, and <strong>doomscrolling</strong>
            </em>
          </p>
        </div>
      </div>
    </main>
  );
}
