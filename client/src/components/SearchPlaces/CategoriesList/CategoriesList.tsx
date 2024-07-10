import { categoriesList } from './data';
import './CategoriesList.css';

const CategoriesList = () => {
  return (
    <div className="categories_list">
      <div>
        {categoriesList.map((category, index) => (
          <div key={index}>
            <img src={category.icon} title={category.text} /> <p>{category.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;
