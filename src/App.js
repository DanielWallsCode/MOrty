import PersonajesList from './components/PersonajesList'

function App() {
  return (
    <div className='bg-dark text-white'>
      <h1 className='text-center display-1 py-4'>Rick and Morty</h1>
      {/* LISTA DE LOS PERSONAJES */}
      <PersonajesList/>
    </div>
  )
}

export default App