import { Modal } from "./index";
import { useOutletContext , useLocation ,useNavigate } from "react-router-dom";

export const Approve = () => {
  const navigate = useNavigate();
  const { state: person } = useLocation();
  const { removePerson } : {removePerson: (personId: string) => void} = useOutletContext();

  const onRemovePerson = () => {
    removePerson(person._id);
    navigate(-1);
  }
  
  return (
    <Modal>
        <div className="approve-container">
            <div className="title">האם אתה  בטוח?</div>
            <p>{`אתה עומד למחוק את ${person.fullName} האם אתה בטוח?`}</p>
            <div className="options">
                <button onClick={() => onRemovePerson()}>מחיקה</button>
                <button onClick={() => navigate(-1) }>ביטול</button>
            </div>
        </div>
    </Modal>
  )
}
