import "./App.css";

// Js+html=JSX
// function JS + html = component
// component начинается с большой буквы используется похоже как тэг
function Header() {
  const info = "Saule Dossymbekova";
  let url =
    "https://images.ctfassets.net/ub3bwfd53mwy/5WFv6lEUb1e6kWeP06CLXr/acd328417f24786af98b1750d90813de/4_Image.jpg?w=750";

  return (
    <div>
      {/* {} означают что вы обращаетесь к JS значению */}
      <h1>{info}</h1>
      <img width="200" src={url} alt="cute cat" />
    </div>
  );
}

// function SkillsList() {
//   const skills = ["JS", "HTML", "CSS", "React"]

//   return (
//     <div>
//       <h3>Skills</h3>
//       <ul>
//         <li>{skills[0]}</li>
//         <li>{skills[1]}</li>
//         <li>{skills[2]}</li>
//         <li>{skills[3]}</li>
//       </ul>
//     </div>
//   );
// }

function SkillsList() {
  const skills = ["JS", "HTML", "CSS", "React"];
  const arr = [
    {
      title: "Create user interfaces",
      description:
        "React lets you build user interfaces out of individual pieces called components.",
      url: "https://images.ctfassets.net/ub3bwfd53mwy/5WFv6lEUb1e6kWeP06CLXr/acd328417f24786af98b1750d90813de/4_Image.jpg?w=750"
    },
    {
      title: "Write components with",
      description: "React components are JavaScript functions.",
      url: "https://images.ctfassets.net/ub3bwfd53mwy/5WFv6lEUb1e6kWeP06CLXr/acd328417f24786af98b1750d90813de/4_Image.jpg?w=750"
    },
  ];
  // skills.map((skill) => console.log(skill));

  return (
    <div>
      <h3>Skills</h3>
      <ul>
        {skills.map((skill) => (
          <li>{skill}</li>
        ))}

        {skills.map((skill) => {
          return <li>{skill}</li>;
        })}
      </ul>

      {arr.map((element)=> <div>
        <h1>{element.title}</h1>
        <p>{element.description}</p>
        <img src={element.url} alt=""/>
      </div>)}
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <SkillsList />
    </div>
  );
}

export default App;

// создать две компоненты и как минимум в одном из них должен использоваться маппинг
