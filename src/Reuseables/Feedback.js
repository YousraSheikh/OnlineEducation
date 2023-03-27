import "../App.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import logo from "../Assests/logo.jpg";

function Feedback() {
  return (
    <>
      <OwlCarousel className="owl-theme bg-green" loop margin={10} nav items={1} >
        <div className="item flex justify-center flex-col gap-4 items-center w-full">
          <img src={logo} alt="logo" className="image mt-3" />
          <p className="w-[95%] text-center text-[17px] md:w-[700px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <p className="font-bold">David Anderson</p>
        </div>
        <div className="item flex justify-center flex-col gap-4 items-center w-full ">
          <img src={logo} alt="logo" className="image mt-3" />
          <p className="w-[95%] text-center md:w-[700px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
          <p>David Anderson</p>
        </div>
        <div className="item flex justify-center flex-col gap-4 items-center w-full ">
          <img src={logo} alt="logo" className="image mt-3" />
          <p className="w-[95%] text-center md:w-[700px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
          <p>David Anderson</p>
        </div>
        
      </OwlCarousel>
    </>
  );
}

export default Feedback;