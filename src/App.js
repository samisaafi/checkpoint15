import Profile from './profile/Profile';
import l1 from '../src/photos/sami.jpg';
function App() {
  const handleName = (name) => {
    alert(`Profile user name is ${name}`);
  };

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
