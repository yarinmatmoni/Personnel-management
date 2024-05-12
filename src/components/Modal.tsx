import { useNavigate } from "react-router-dom";

export const Modal = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  return (
    <div className="modal">
      <div className="modal-container">
        {children}
        <div className="options">
          <button className="save-btn">שמירה</button>
          <button className="cancel-btn" onClick={() => navigate(-1)}>
            ביטול
          </button>
        </div>
      </div>
    </div>
  );
};
