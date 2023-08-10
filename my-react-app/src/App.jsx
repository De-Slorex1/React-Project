import './App.css';
import Navbar from './component/Context/Navbar';
import ShortCircuit from './component/FalsyTruthy';
import NewUser from './component/NewList';
import ToggleBtn from './component/Toggle';
import FetchApi from './component/UseEffectAPI';
import Login from './component/User';
import CheckBox from './component/checkbox';
import FormInput from './component/form';
import StyledComp from './component/runStyles';
import Select from './component/select';


const App = () => {
  return (
    <div className="App">
      <StyledComp />
      <Navbar />
      <FetchApi />
      <ShortCircuit />
      <ToggleBtn />
      <Login />
      <FormInput />
      <NewUser />
      <CheckBox />
      <Select />
    </div>
  )
}

/*const Book = () => {
  return (
    <div>
      <Title />
      <Author />
      <Image />
    </div>
  )
}

const Title = () => <h1>This is the Book Title</h1>
const Author = () => <h1>This is the Book Author</h1>
const Image = () => <div><img src={Image1} width='200px' height='120px' alt='Design' /></div>*/

export default App
