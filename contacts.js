import "./contact.css"
function ContactDetails({name,num,mail,EditDetails,DelDetails}){
  
  return (
        <div className="cols">
      {/*<div className="col">{id}</div> */}
       <div className="col">{name}</div>
      <div className="col">{num}</div>
      <div className="col">{mail}</div>
      
      <div className="action-buttons">
        <button className="Edit" onClick={EditDetails}>📝 Edit</button>
        <button className="Del" onClick={DelDetails}>
          🗑️ Delete
        </button>
      </div>
    </div>
  );
   
}


export default ContactDetails;