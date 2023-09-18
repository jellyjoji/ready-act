import React, { useId, forwardRef } from "react";
import { category } from '../../data/category';

function CategoryDropdown({ className, title, ...restProps }, ref) {
  // const [selectedCategory, setSelectedCategory] = useState("");
  const id = useId();

  return (
    <div >
      <label htmlFor={id}  >{title}</label>
      {/* value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} */}
      <select ref={ref} id={id} className={className} name="category" defaultValue="전체" {...restProps} >
        {category.map((list) => (
          <option key={list.title} value={list.title}>
            {list.title}
          </option>
        ))}
      </select>
    </div >
  );
};

export default forwardRef(CategoryDropdown);
