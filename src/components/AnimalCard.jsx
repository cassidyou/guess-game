
const Contact = (props) => {

  return (
    <div className='animal-card'>
      <img src={props.image} alt="" />
      <h2>{props.name}</h2>
      <h3>About {props.name}</h3>
      <ul>
        {props.facts && props.facts.map((fact, index) => (
         
         <li key={index}>{index + 1}. {fact}</li>

        ))}
        
      </ul>
    </div>
  )
}

export default Contact
