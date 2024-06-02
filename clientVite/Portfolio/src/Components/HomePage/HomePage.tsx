import { useEffect, useState } from "react";
import EdgeImage from "../../assets/me_img.png";
import "./homepage.css";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

function HomePage() {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));

  const AnimatedRecords = (value: number) => {
    const [animatedValue, setAnimatedValue] = useState(0);

    useEffect(() => {
      let start: number | null = null;
      const duration = 2000; // 1 second
      const initialValue = 0;

      const animate = (timestamp: number) => {
        if (start === null) start = timestamp;
        const progress = timestamp - start;
        const newValue = Math.min(
          initialValue + (value - initialValue) * (progress / duration),
          value
        );
        setAnimatedValue(newValue);

        if (progress < duration) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [value]);

    return (
      <div className="border border-light p-1 d-flex justify-content-center align-items-center">
        <div
          className="border border-light"
          style={{
            width: `${animatedValue}%`,
            height: "10px",
            backgroundColor: "white",
          }}
        ></div>
        <label className="d-flex justify-content-center align-items-center mx-2">
          {Math.round(animatedValue)}%
        </label>
      </div>
    );
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-12">
          <div className="border border-info text-light p-5 m-5">
            <span>Hello, my name is </span>
            <h2>Sarkheel Javed</h2>
            <section>
              I'm a full-stack developer specialised in frontend and backend
              development for scalable web apps.I have made a variety of Mern
              Stack Applications. Want to know how I may help your project?
              Check out my projects from my GitHub Profile.
            </section>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-12 d-sm-none d-lg-flex justify-content-center align-items-center">
          <div className="img_sectionCover">
            <div className=" img_column_div"></div>
            <img
              src={EdgeImage}
              className="img_column_img"
              alt="...."
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-3">
          <h1 className="text-center text-light">SKILLS</h1>
          <p className="text-light text-center">
            Below is a quick overview of my main technical skill sets and tools
            I use.
          </p>
          <p className="text-light text-center">EDUCATION</p>
          <p className="text-light text-center">
            D.A.E Specialized in Foundary Technology
            <section className="">
              (Goverment Swedish Pakistani Collage of Technology Gujrat.)
            </section>
          </p>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3 p-3">
                <div className="card_cover w-100 text-light m-2">
                  <label className="">HTML</label>
                  {AnimatedRecords(80)}
                </div>
                <div className="card_cover w-100 text-light m-2">
                  <label className="">CSS</label>
                  {AnimatedRecords(45)}
                </div>
                <div className="card_cover w-100 text-light m-2">
                  <label className="">BOOTSTRAP</label>
                  {AnimatedRecords(50)}
                </div>
                <div className="card_cover w-100 text-light m-2">
                  <label className="">MATERIAL UI</label>
                  {AnimatedRecords(40)}
                </div>
                <div className="card_cover w-100 text-light m-2">
                  <label className="">JAVASCRIPT</label>
                  {AnimatedRecords(50)}
                </div>
                <div className="card_cover w-100 text-light m-2">
                  <label className="">TYPESCRIPT</label>
                  {AnimatedRecords(70)}
                </div>
                <div className="card_cover w-100 text-light m-2">
                  <label className="">REACT.JS</label>
                  {AnimatedRecords(60)}
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3 p-3">
              <div className="card_cover w-100 text-light m-2">
                  <label className="">NODE.JS</label>
                  {AnimatedRecords(30)}
                </div>
                <div className="card_cover w-100 text-light m-2">
                  <label className="">EXPRESS.JS</label>
                  {AnimatedRecords(30)}
                </div>
                <div className="card_cover w-100 text-light m-2">
                  <label className="">MONGO DB</label>
                  {AnimatedRecords(30)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
