import { useState, useEffect } from 'react';

const baseUrl = "https://api.github.com/users";


const UseStateObject = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {

    const getUsers = async () => {
      try{
        const response = await fetch(`${baseUrl}`);
        const users = await response.json();
        setUsers(users);
      }catch(error){
        console.log(error);
      }
    }

    getUsers();
  }, []);

  console.log(users);

  return (
    <>
      <h3>Github Users</h3>
      <ul className='users'>
        {users.map((user) => {
          
          const {id, login, avatar_url, html_url} = user;

          return (
            <li key={id}>
              <img src={avatar_url}/>
              <div>
              <h5>{login}</h5>
              <a href={html_url}>Profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  );

};

export default UseStateObject;
