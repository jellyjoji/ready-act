import { useId, useContext, useState, useEffect } from 'react';
import { category } from '@/data/category';
import { AppContext } from '@/App';

function CategoryDropdown({ className, title }) {
  const { id } = useId();
  const { updateCreateRoomForm } = useContext(AppContext);
  const [selectedCategory, setSelectedCategory] = useState('전체');

  useEffect(() => {
    updateCreateRoomForm('category', selectedCategory);
  }, [selectedCategory]);

  return (
    <div>
      <label htmlFor={id}>{title}</label>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        id={id}
        className={className}
        name="category"
      >
        {category.map((list) => (
          <option key={list.title} value={list.title}>
            {list.title}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryDropdown;