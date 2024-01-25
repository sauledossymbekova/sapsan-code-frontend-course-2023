import "./App.css";

import Photo from "./components/Photo";
import PhotoList from "./components/PhotoList";

function App() {

  return (
    <div className="App">
      <PhotoList />
      <Photo description='This is my cute cat' altText='cute cat' url="https://i.pinimg.com/736x/33/32/6d/33326dcddbf15c56d631e374b62338dc.jpg" />
      {/* <Photo description='Look at my friends dog' altText='cute dog' url="https://images.unsplash.com/photo-1615751072497-5f5169febe17?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D" /> */}
    </div>
  );
}

export default App;

// button.addEventListener('click', () => {})
// button.addEventListener('click', clickMe)

// styling:
// inline через style={{}}
// classname

// components +переиспользуемость

// Задание: создать компоненту с пропсами, 
// и переиспользовать эту компоненту с разными данными


// online-shopping
// movie website: netflix
// social networks: instagram, facebook

// 2 компоненты: прокидовать пропс через одного на другой, использовать стили