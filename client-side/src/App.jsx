import {Footer,Loader,NavBar,Service,Transaction,Welcome} from './components'
const App = () => {
  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <NavBar/>
        <Welcome/>
      </div>
    <Service/>
    <Transaction/>
    <Footer/>
    </div>
    )
}

export default App