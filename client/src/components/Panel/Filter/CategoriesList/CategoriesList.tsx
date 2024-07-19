import { useSelector, useDispatch } from 'react-redux';
import { categories, Category } from '../../../../assets/constants/categories';

import {
  addCategory,
  deleteCategory 
} from '../../../../redux/reducers/filter_reducer/actions/actions';
import { State } from '../../../../redux/combine_reducers';
import './CategoriesList.css';

const CategoriesList = () => {
  const dispatch = useDispatch();
  const selectedCategories = useSelector((state: State) => state.filter_state.categories);

  function isSelected(category: string): boolean {
    if (selectedCategories.findIndex((el) => el.text === category) == -1) {
      return false;
    }

    return true;
  }

  function changeActive(category: Category): void {
    if (isSelected(category.text)) {
      dispatch(deleteCategory(category));
      return;
    }

    dispatch(addCategory(category));
  }

  return (
    <div className="categories_list">
      <div>
        {categories.map((category, index) => (
          <div
            className={
              isSelected(category.text) || selectedCategories.length == 0
                ? 'active_category'
                : undefined
            }
            key={index}
            onClick={() => changeActive(category)}
          >
            <img src={category.icon} title={category.text} />
            <p>{category.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;
