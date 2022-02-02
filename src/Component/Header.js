import '../App.css'
import meme from './meme.jpg'
function Header() {
  return (
    <header>
      <img
        src={meme}
        alt='Entrance Pic'
      />
      <h1 style={{color :'purple'}}>Create Your Own Memes</h1>
    </header>
  );
}
export default Header;