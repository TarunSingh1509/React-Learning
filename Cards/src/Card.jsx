import React from 'react'
import { useEffect,useState } from 'react'

function Card() {
  const [users, setUsers] = useState([])
  const fetchUsers = async () => {
    let response = await fetch('https://dummyjson.com/products')
    let data = await response.json()
    setUsers(data.products)
    console.log(data.products)
  }
  useEffect(() => {
    fetchUsers()
    
  },[])
  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {users.map((user) => (
        <div key={user.id} style={{ border: '10px solid black', padding: '10px', margin: '10px', width: '300px', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexDirection: 'column', display: 'flex' }}>
          <img src={user.images[0]} alt="Card Image" style={{ width: '100%', height: '250px' }} />
          <h1>{user.title}</h1>
          <p>{user.description}</p>
        </div>))}
      </div>
    </>
  )
}

export default Card
