import NavBar from "./NavBar";
import SongCard from "./SongCard";
import "swiper/css";
import Popup from "./Popup";
import SongSubmission from "./SongSubmission";
import LoginForm from "./LoginForm";

const Home = ({ songs, getMusic }) => {
  return (
    <>
      <NavBar />
      <br></br>
      <br></br>
      <Popup btnText={"Sign Up"} btnPosition="right">
        <LoginForm />
      </Popup>
      <br></br>
      <SongCard songs={songs} />
      <br></br>
      <br></br>
      <br></br>
      <Popup btnText={"Submit A Song"} btnPosition="center">
        <SongSubmission getMusic={getMusic} />
      </Popup>
    </>
  );
};
export default Home;
