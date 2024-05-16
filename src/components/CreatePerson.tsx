import { Modal } from "./index";
import { ChangeEvent, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { peopleService } from "../services/people.service";
import { PersonType } from "../types/types";

export const CreatePerson = () => {
  const navigate = useNavigate();
  const { addPerson }: { addPerson: (person: PersonType) => void } = useOutletContext();
  const [editForm, setEditForm] = useState(peopleService.getDefaultForm());

  const handleOnChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value, name: fieldName } = event.target;
    setEditForm((prevForm) => ({ ...prevForm, [fieldName]: value }));
  };

  return (
    <Modal>
      <form className="create-person">
        <div className="form-item">
          <label htmlFor="fullName">שם מלא:</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-item">
          <label htmlFor="phoneNumber">טלפון:</label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-item">
          <label htmlFor="address">כתובת:</label>
          <input
            type="text"
            name="address"
            id="address"
            onChange={handleOnChange}
          />
        </div>
        {peopleService.getCreatePersonOptions().map((select) => (
          <div key={select.name} className="form-item">
            <label htmlFor={select.name}>{`${select.label}:`}</label>
            <select
              name={select.name}
              id={select.name}
              defaultValue=""
              onChange={handleOnChange}
            >
              <option disabled value="">
                {select.unselectedOption}
              </option>
              {select.options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
      </form>
      <div className="options">
        <button className="save-btn" onClick={() => addPerson(editForm)}>
          שמירה
        </button>
        <button className="cancel-btn" onClick={() => navigate(-1)}>
          ביטול
        </button>
      </div>
    </Modal>
  );
};
