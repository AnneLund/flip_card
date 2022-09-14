import React from 'react'
import {useState, useEffect} from 'react'
import StyledCard from './Styled_Components/Styled_Card'
import Grid from './Styled_Components/Grid';

const Card = () => {

    //Jeg deklarerer to variabler med useState-hooken. Den første er til at fetche dataene med useEffect-hooken (Den sørger for at rende siden EFTER dataene er fetchet)
    //Min anden variabel sørger sørger for at opdaterer mine avatars når der klikkes på knappen. Den har jeg indsat som dependency array på min useEffect,
    //for at sikre at de kun bliver opdateret når min state ændres. (onClick)

    const [data, setData] = useState([])
    const [active, setActive] = useState(false)
   
    useEffect(() => {
    fetch('https://random-data-api.com/api/users/random_user?size=10')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
    console.log(data)
        })
     
    }, [active])


    const update = event => {
        setActive(state => !state);
      };

  return (
    <section>
    <Grid>
{data.map(user => {
            return(
                
<StyledCard key={user.id}>
    <div className='card'>
        <div className='front'>
        <figcaption>
   <h3>{user.first_name}</h3>
   <h5>{user.employment.title}</h5>     
    </figcaption> 
    <img src={user.avatar} alt="avatar"/>       
    </div> 
    <div className='back'>
        <h3>Address:</h3>
       <p>{user.address.street_address}</p> 
       <p>{user.address.city}</p>
       <p>{user.address.state}</p>
       <h3>Phone:</h3>
       <p>{user.phone_number}</p>
       <h3>Email:</h3>
       <p>{user.email}</p>
       <h3>Social insurance number:</h3>
       <p>{user.social_insurance_number}</p>
    </div>
    </div>
</StyledCard>

            )
        })}  
  
    </Grid>
    <div className='button'>
    <button onClick={update}>Hent ti nye avatars</button>
    </div>
    </section>
  )
}

export default Card;
