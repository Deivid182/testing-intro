
import { useState, useEffect } from "react"

const Users = () => {

  const [users, setUsers] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        setUsers(data.map((user: { name: string }) => user.name))
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
        }
      }
    }

    fetchUsers()
  }, [])

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => <li key={user}>{user}</li>)}
      </ul>
      {error && <p className="error">{error}</p>}
    </div>
  )
}

export default Users