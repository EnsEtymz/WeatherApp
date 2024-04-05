import BottomBar from "../components/BottomBar";
import TopBar from "../components/TopBar";

const Home = () => {
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <TopBar />
      <BottomBar />
    </div>
  );
};

export default Home;
