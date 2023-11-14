import { AppContext } from '@/App';
import { category } from '@/data/category';
import { useContext, useEffect, useState } from 'react';

function Category({ value, className, ...restProps }) {
  const { updateCreateRoomForm } = useContext(AppContext);
  const [selectedCategory, setSelectedCategory] = useState(value = "⛳️ 전체");

  useEffect(() => {
    updateCreateRoomForm('category', selectedCategory);
  }, [selectedCategory]);

  return (
    <div>
      <label htmlFor="category">
        카테고리
      </label>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        id="category"
        className={className}
        name="category"
        {...restProps}
      >
        {category.map((list) => (
          <option key={list.icon} value={list.icon}>
            {list.icon}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Category;
