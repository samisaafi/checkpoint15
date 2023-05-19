import Profile from './profile/Profile';
import l1 from '../src/photos/sami.jpg';
function App() {
    // Function to handle the name

  const handleName = (name) => {
    alert(`Profile user name is ${name}`);
  };
  // Return the JSX representing the structure of the app

  return (
    <div className="App">
      <Profile
        fullName="Saafi Sami"
        bio="Student."
        profession="Full-stack developer"
        handleName={handleName}
      >
        <img src={l1} alt="photos" />

      </Profile>
    </div>
  );
}

export default App;
