import UserList from './components/UserList.jsx'
import UserForm from './components/UserForm.jsx'

const users = [
  {id: 1, name: 'Valeria', age: 28 },
  {id: 2, name: 'Carlos', age: 35 },
  {id: 3, name: 'Ana', age: 22 },
  {id: 4, name: 'Mateo', age: 41 },
  {id: 5, name: 'Beatriz', age: 30 },
  {id: 6, name: 'Dylan', age: 19 },
  {id: 7, name: 'Dafne', age: 22 },
]

function App() {
  return (
    <main>
      <h1>Dynamicore — Sección 1 (React)</h1>

      <section>
        <h2>Tarea 1: UserList</h2>
        <UserList users={users} />
      </section>
      
      <section>
        <h2>Tarea 2: UserForm</h2>
        <UserForm />
      </section>
    </main>
  )
}

export default App
