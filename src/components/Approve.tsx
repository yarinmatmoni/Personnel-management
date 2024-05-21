import { Modal } from "./index";
import { useOutletContext , useLocation ,useNavigate } from "react-router-dom";
import dangerIcon from '../assets/danger.svg';

export const Approve = () => {
  const navigate = useNavigate();
  const { state: person } = useLocation();
  const { removePerson } : {removePerson: (personId: string) => void} = useOutletContext();

  const onRemovePerson = () => {
    removePerson(person._id);
    navigate(-1);
  }
  
  if(!person) return;
  return (
    <Modal>
        <div className="approve-container">
            <div className="title">
                <img src={dangerIcon} alt="danger" />
                האם אתה  בטוח?
            </div>
            <p>
                {`האם למחוק את ${person.fullName}?`}
            </p>
            <div className="options">
                <button className="delete-btn" onClick={() => onRemovePerson()}>מחיקה</button>
                <button className="cancel-btn" onClick={() => navigate(-1) }>ביטול</button>
            </div>
        </div>
    </Modal>
  )
}
