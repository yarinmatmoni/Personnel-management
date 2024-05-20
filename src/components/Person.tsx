import {useNavigate} from 'react-router-dom';
import { PersonType } from "../types/types";
import deleteIcon from '../assets/delete.svg';

export const Person = ({
  person,
  index
}: {
  person: PersonType,
  index: number,
}) => {
  const navigate = useNavigate();

  return (
    <div className="person">
      <img src={deleteIcon} alt="delete" className='delete-icon' onClick={() => navigate(`/people/approve` , {state: { _id: person._id, fullName: person.fullName }})}/>
      <div className="number">{index + 1}.</div>
      <div className="person-details">
        <div className="personal-data">
          <div className="full-name">
            <span className="field-name">שם:</span>
            {person.fullName}
          </div>
          <div className="phone-number">
            <span className="field-name">טלפון:</span>
            {person.phoneNumber}
          </div>
        </div>
        <div className="professional-data">
          <div className="division">
            <span className="field-name">מחלקה:</span>
            {person.division}
          </div>
          <div className="class">
            <span className="field-name">כיתה:</span>
            {person.class}
          </div>
          <div className="role">
            <span className="field-name">תפקיד:</span>
            {person.role}
          </div>
        </div>
      </div>
      <button onClick={() => navigate(`/people/details/${person._id}`)}>לפרטים</button>
    </div>
  );
};
