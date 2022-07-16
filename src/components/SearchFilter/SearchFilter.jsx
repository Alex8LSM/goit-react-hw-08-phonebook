import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/phonebook/phonebookActions';
import s from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const findContact = name => {
    dispatch(filterContact(name.toLowerCase()));
  };

  return (
    <div className={s.contactForm}>
      <label className={s.inputLabel}>
        Find contact by name
        <input
          className={s.input}
          type="text"
          value={filter}
          onChange={e => findContact(e.target.value)}
          required
        />
      </label>
    </div>
  );
};

export default Filter;
