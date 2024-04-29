import { Modal } from "./index";
import { peopleService } from "../services/people.service";

export const CreatePerson = () => {
  return (
    <Modal>
      <form className="create-person">
        <div className="form-item">
          <label htmlFor="fullName">שם מלא:</label>
          <input type="text" name="fullName" id="fullName" />
        </div>
        <div className="form-item">
          <label htmlFor="phoneNumber">טלפון:</label>
          <input type="tel" name="phoneNumber" id="phoneNumber" />
        </div>
        <div className="form-item">
          <label htmlFor="address">כתובת:</label>
          <input type="text" name="address" id="address" />
        </div>
        {peopleService.getCreatePersonOptions().map((select) => (
          <div key={select.id} className="form-item">
            <label htmlFor={select.id}>{`${select.label}:`}</label>
            <select name={select.id} id={select.id}>
              <option disabled selected>
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
    </Modal>
  );
};
