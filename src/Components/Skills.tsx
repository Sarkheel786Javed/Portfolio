import { useEffect, useState } from "react";
import "./Skills.scss";


const skills = [
  { language: "HTML", percentage: 80 },
  { language: "CSS", percentage: 45 },
  { language: "BOOTSTRAP", percentage: 50 },
  { language: "MATERIAL UI", percentage: 40 },
  { language: "JAVASCRIPT", percentage: 50 },
  { language: "TYPESCRIPT", percentage: 70 },
  { language: "REACT.JS", percentage: 60 },
  { language: "NODE.JS", percentage: 30 },
  { language: "EXPRESS.JS", percentage: 30 },
  { language: "MONGO DB", percentage: 30 },
];

const CircularProgress = (tag: any, value: any) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    let start: any = null;
    const duration = 2000;

    const animate = (timestamp: any) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const newValue = Math.min((value * progress) / duration, value);
      setAnimatedValue(newValue);
      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return (
    <div className="col d-flex justify-content-center align-items-center ">
      <div
        className="circular-progress"
        style={{
          background: `conic-gradient(rgb(22, 37, 53) ${animatedValue * 3.6}deg, grey 0)`,
        }}
      >
        <div className="inner-circle bg-warning ">
          <div className="percentage">{Math.round(animatedValue)}%</div>
          <div className="tag">{tag}</div>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-center align-items-center p-2">
          <h1 className="mt-3"> My Skills</h1>
        </div>
        {skills.map((data) => (
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 col-xxl-3 d-flex justify-content-center align-items-center p-2">
           
              {CircularProgress(data.language, data.percentage)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
