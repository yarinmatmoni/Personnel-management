import { Modal } from "./index";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useOutletContext ,useParams } from "react-router-dom";
import { peopleService } from "../services/people.service";
import { PersonType } from "../types/types";

export const CreatePerson = () => {
  const navigate = useNavigate();
  const { addPerson }: { addPerson: (person: PersonType) => void } = useOutletContext();
  const {id} = useParams();
  const [editForm, setEditForm] = useState<PersonType>(peopleService.getDefaultForm());

  useEffect(() => {
    if(id) getPerson(id);
  } ,[]);

  const getPerson = async (personId: string) => {
    const person = await peopleService.getPerson(personId);
    if(person) setEditForm(person);
  }

  const handleOnChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value, name: fieldName,type } = event.target;
    setEditForm((prevForm) => ({ ...prevForm, [fieldName]: type === 'number' ? +value : value }));
  };

  const handleOnSubmit = () => {
    addPerson(editForm);
    navigate('/people');
  }

  return (
    <Modal>
      <div className="crate-person-container">
        <div className="title">{id ? 'עריכת פרטים' : 'הוספת אדם חדש'}</div>
        <form className="create-person">
          {peopleService.getInputs().map((input) => (
            <div key={input.name} className="form-item" >
              <label htmlFor={input.name}>{peopleService.getKeyLabel(input.name)}:</label>
              <input
                type={input.type}
                name={input.name}
                id={input.name}
                onChange={handleOnChange}
                value={editForm[input.name as keyof PersonType]}
              />
            </div>
          ))}
          {peopleService.getSelects().map((select) => (
            <div key={select.name} className="form-item">
              <label htmlFor={select.name}>{peopleService.getKeyLabel(select.name)}:</label>
              <select
                name={select.name}
                id={select.name}
                defaultValue=""
                onChange={handleOnChange}
              >
                <option disabled value="">
                  {editForm[select.name as keyof PersonType] ? editForm[select.name as keyof PersonType] :select.unselectedOption}
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
          <button className="save-btn" onClick={() => handleOnSubmit()}>
            שמירה
          </button>
          <button className="cancel-btn" onClick={() => navigate('/people')}>
            ביטול
          </button>
        </div>
      </div>
    </Modal>
  );
};
