import AppProviders from './providers/app-providers'
import './App.css'
import MuiMode from './components/mui/mui-mode'

function App() {

  return (
    <AppProviders>
      <div className='App'>
        {/* <Application /> */}
        {/* <Counter /> */}
        <MuiMode />
      </div>
    </AppProviders>
  )
}

export default App

