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
        <div className="form-item">
          <label htmlFor="role">תפקיד:</label>
          <select name="role" id="role">
            <option value="" disabled selected>
              בחר תפקיד
            </option>
            {peopleService.getRoleOptions().map((role, index) => (
              <option key={`${role}_${index}`} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
        <div className="form-item">
          <label htmlFor="division">מחלקה:</label>
          <select name="division" id="division">
            <option value="" disabled selected>
              בחר מחלקה
            </option>
            {peopleService.getDivisionOptions().map((division, index) => (
              <option key={`${division}_${index}`} value={division}>
                {division}
              </option>
            ))}
          </select>
        </div>
        <div className="form-item">
          <label htmlFor="class">כיתה:</label>
          <select name="class" id="class">
            <option value="" disabled selected>
              בחר כיתה
            </option>
            {peopleService.getClassOptions().map((classOption, index) => (
              <option key={`${classOption}_${index}`} value={classOption}>
                {classOption}
              </option>
            ))}
          </select>
        </div>
      </form>
    </Modal>
  );
};
