import { useEffect, useState } from "react";
import { useParams , useNavigate } from 'react-router-dom';
import { Modal } from "./index";
import { PersonType } from "../types/types";
import { peopleService } from "../services/people.service";
import profileIcon from '../assets/profile.svg';
import professionalIcon from '../assets/award.svg';

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
            <div className="person-info">
                <div className="info-section">
                    <div className="title">
                        <img src={profileIcon} alt="profile" />
                        מידע אישי
                    </div>
                    <div className="personal-info">
                        <div className="info-item">{person.fullName}</div>
                        <div className="info-item">{person.personalNumber}</div>
                        <div className="info-item">{person.address}</div>
                        <div className="info-item">{person.phoneNumber}</div>
                    </div>
                </div>
                <div className="info-section">
                    <div className="role-info">
                        <div className="title">
                            <img src={professionalIcon} alt="professional" />
                            מידע מקצועי
                        </div>
                        <div className="info-item">{person.role}</div>
                        <div className="info-item">{person.division}</div>
                        <div className="info-item">{person.class}</div>
                    </div>
                </div>
            </div>
            <div className="options">
                <button className="cancel-btn" onClick={() => navigate(-1)}>ביטול</button>
            </div>
        </div>
    </Modal>
  )
}
