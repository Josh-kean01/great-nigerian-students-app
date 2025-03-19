import Button from "../components/Button";
import NavigationBar from "../components/NavigationBar";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";
import avatar5 from "../assets/avatar5.png";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="p-3"
        style={{
          backgroundImage: `url('/herobg.png')`, // Replace with the correct image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <NavigationBar />

        <div
          className="container position-relative "
          style={{
            display: "grid",
            placeItems: "center",
            paddingBlock: "7rem",
            marginBottom: "2rem",
          }}
        >
          <div className="text-light text-center" style={{ zIndex: 1 }}>
            <h1 className="px-lg-5 rt" style={{ fontFamily: "cursive" }}>
              The Great Nigerian <br /> Students Platform
            </h1>
            <p className="py-3 px-lg-5 rt" style={{ fontFamily: "cursive" }}>
              GNS is a platform where ambitious students <br /> from different
              tertiary institutions get to meet and connect
            </p>
          </div>
          <div
            className="rounded-5 bg-white d-flex px-md-3 px-2"
            style={{ zIndex: 1 }}
          >
            <span className="m-auto">
              <i className="bi bi-search fs-5"></i>
            </span>
            <input
              className="p-2 p-md-3 border-0 outline-0 my-1"
              type="text"
              placeholder="Search for Institution"
              style={{ width: "35vw", fontSize: "15spx" }}
            />
            <span className="m-auto">
              <Button text="Search Now" px={3} py={2} />
            </span>
          </div>
          <div className="w-100">
            <img src={avatar1} alt="student1" className="floating-image img1" />
            <img src={avatar2} alt="student2" className="floating-image img2" />
            <img src={avatar3} alt="student3" className="floating-image img3" />
            <img src={avatar4} alt="student4" className="floating-image img4" />
            <img src={avatar5} alt="student5" className="floating-image img5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
