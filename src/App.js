import Navbar from './Navbar'
import Swagger from './Swagger'
import Steps from './Steps'

function App() {
  return (
    <>
      <Navbar />
      <div className="app-container">
         <Swagger />
         <Steps />
      </div>
    </>
   
  );
}

export default App;
