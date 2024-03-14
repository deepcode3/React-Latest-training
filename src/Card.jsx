import profilePic from "./assets/profile.png"
function Card() {
    return(
   <div className="card">
    <img className="card-image" src={profilePic} alt="profile-pic"></img>
    <h2 className="card-title">Deep style</h2>
    <p className="card-image">Ilike to keep learning FE even though iam not good at it</p>
   </div>
    );
  }
  
  export default Card
  