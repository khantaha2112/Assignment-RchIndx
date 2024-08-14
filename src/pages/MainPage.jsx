import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import InsideTopBar from "../components/InsideTopBar";
import LeftBar from "../components/LeftBar";
import MainView from "../components/MainView";
import MailInsideMainPage from "../components/MailInsideMainPage";

const MainPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedComponent, setSelectedComponent] = useState(null);
  console.log(location);

  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");
  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
    }
    if (token) {
      localStorage.setItem("token", `Bearer ${token}`);
    }
  }, [token]);

  const handleClick = (path) => {
    setSelectedComponent(path);
  };
  if (selectedComponent === null) {
    return (
      <div className="h-screen w-screen dark:bg-black bg-white pl-14">
        <LeftBar onMenuItemClick={handleClick} />
        <InsideTopBar />
        <MainView />
      </div>
    );
  }

  return (
    <div className="h-screen w-screen dark:bg-black bg-white pl-14">
      <LeftBar onMenuItemClick={handleClick} />
      <InsideTopBar />
      <div>
        {selectedComponent == "/" && <MainView />}
        {selectedComponent == "/search" && <MainView />}
        {selectedComponent == "/mail" && <MainView />}
        {selectedComponent == "/send" && <MainView />}
        {selectedComponent == "/stack" && <MainView />}
        {selectedComponent == "/inbox" && <MailInsideMainPage />}
        {selectedComponent === "/stacks" && <MainView />}
      </div>
    </div>
  );
};

export default MainPage;
