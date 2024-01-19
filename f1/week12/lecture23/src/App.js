// custom component
function Header() {
  // JS часть компоненты пишется ВНЕ return
  let url =
    "https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg";
  let info = "Saule Dossymbekova";

  // html часть комопненты пишется в return
  return (
    <div>
      <img
        // все что пишется в {} это JS
        src={url}
        alt="cute cat"
        width="200"
      />
      <h3>{info}</h3>
    </div>
  );
}

// Неэффективное решение
// function List() {
//   let skills = ["Js", "Html", "Css"];

//   return (
//     <ol>
//       <li>{skills[0]}</li>
//       <li>{skills[1]}</li>
//       <li>{skills[2]}</li>
//     </ol>
//   );
// }

function SkillList() {
  let skills = ["Js", "Html", "Css"];
  // skills.map((skill) => )

  return (
    <div>
      <h3>Skills</h3>
      <ol>
        {skills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ol>
    </div>
  );
}

// PhotoList
let arr = [{title: "", url: ""}, {title: "", url: ""}]

function App() {
  return (
    <div>
      {/* ctrl / или cmd / для комментария */}
      {/* Шапка моего сайта */}
      <Header />
      {/* Список моих навыков: */}
      <h5>Skills</h5>
      <SkillList />
      <SkillList />
    </div>
  );
}
// JSX=Js+html

export default App;

// СОЗДАТЬ ДВЕ КОМПОНЕНТЫ, как минимум в одной должно использоваться маппинг