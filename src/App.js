import "./styles.css";

export default function App() {
  const skillArr = [
    { name: "React", level: "advanced", background: "red" },
    { name: "React Native", level: "advanced", background: "yellow" },
    { name: "HTML", level: "intermediate", background: "blue" },
    { name: "CSS", level: "intermediate", background: "orange" },
    { name: "JavaScript", level: "intermediate", background: "lightblue" },
    { name: "Redux", level: "beginner", background: "green" }
  ];
  return (
    <div className="container">
      <img src="Images/069.jpg" alt="profile" />
      <div className="description">
        <h2>Harsit Agrawal</h2>
        <p>
          Software Developer with 2+ years of experience, can join immediately
          with working knowledge in React and React-Native. Also have past
          experience in android.
        </p>
        {skillArr.map((skill) => {
          return (
            <div
              className="skill"
              style={{ background: `${skill.background}` }}
            >
              {skill.name}
              {skill.level === "advanced"
                ? " 💪🏻"
                : skill.level === "intermediate"
                ? " ✌🏻"
                : " 👶🏻"}
            </div>
          );
        })}
      </div>
    </div>
  );
}
