import { useEffect, useState } from "react";
import { useParams , useNavigate } from 'react-router-dom';
import { Modal } from "./index";
import { PersonType } from "../types/types";
import { peopleService } from "../services/people.service";

export const PersonDetails = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [person,setPerson] = useState<PersonType>();    
 
  useEffect(() => {
    loadPerson();
  },[]);

  const loadPerson = async () => {
    if(!id) return;
    try{
        const person = await peopleService.getPerson(id);
        setPerson(person);
    }catch(error){
        console.log(error);
    }
  }

  if(!person) return;
  return (
    <Modal>
        <div className="details">
           <div className="title">פרטים נוספים</div>
           <div className="details-container">
                {Object.entries(person).filter(([key]) => key !== '_id').map(([key, value]) => (
                    <div className="info-item" key={key}>
                        <label htmlFor={key}>{peopleService.getKeyLabel(key)}:</label>
                        <input type="text" id={key} value={value} readOnly />
                    </div>
                ))}
           </div>
            <div className="options">
                <button className="edit-btn" onClick={() => navigate(`/people/create/${person._id}`)}>עריכה</button>
                <button className="cancel-btn" onClick={() => navigate(-1)}>חזרה</button>
            </div>
        </div>
    </Modal>
  )
}
