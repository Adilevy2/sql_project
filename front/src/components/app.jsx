import { Routes, Route} from 'react-router-dom'
import Header from './navBar'

import Main from './main'
import Courses from './courses';
import MyCourses from './myCourses';
function App() {

  return (
    <div className="App">
        <Header/>
      <Routes className='fixed'>

      <Route path='/' element={<Main/>}></Route>
      <Route path='/courses' element={<Courses/>}></Route>
      <Route path='/myCourses' element={<MyCourses/>}></Route>

        
      </Routes>
    </div>
  )
}

export default App
