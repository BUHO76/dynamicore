import UserList from './components/UserList.jsx'
import UserForm from './components/UserForm.jsx'

// Datos de ejemplo para la Tarea 1 (lista de usuarios con nombre y edad)
const users = [
  { name: 'Valeria', age: 28 },
  { name: 'Carlos', age: 35 },
  { name: 'Ana', age: 22 },
  { name: 'Mateo', age: 41 },
  { name: 'Beatriz', age: 30 },
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
