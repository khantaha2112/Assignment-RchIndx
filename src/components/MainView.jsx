import axios from "axios";
import { useEffect } from "react";
import { MAIL_LOGO_URL } from "../assets/assest";

function MainView() {
  useEffect(() => {
    async function call() {
      const token = localStorage.getItem("token");
      await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/reset", {
        headers: {
          Authorization: token,
        },
      });
    }
    call();
  }, []);

  return (
    <div className="dark:text-white text-[#5B5F66] bg-[#ECEFF3] dark:bg-black flex justify-center items-center h-screen flex-col border">
      <div>
        <img src={MAIL_LOGO_URL} alt="Illustration" />
      </div>
      <div className="text-2xl my-8">
        It’s the beginning of a legendary sales pipeline
      </div>
      <div className="dark:text-[#9E9E9E] text-[#5B5F66]">
        When you have inbound E-mails you’ll see them here
      </div>
    </div>
  );
}

export default MainView;
