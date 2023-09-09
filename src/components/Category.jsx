import { pb } from "@/api/pocketbase";
import { useEffect, useState, useId } from "react";



const readRecordList = await pb.collection('products').getFullList();



function Category({ title, className, placeholder, ...restProps }) {



  useEffect(() => {
    try {
      readRecordList;
    } catch (error) {
      throw new Error('error');
    }
  }, []);

  const [isOpen, setIsOpen] = useState(true);
  const onClick = () => {
    setIsOpen(!isOpen);
  };

  const id = useId();


  return (
    <>
      <label htmlFor={id}>{title}</label>
      <select id={id} className={className} style={{ display: isOpen ? "block" : "none" }} {...restProps}>
        <option className="line-400" >{placeholder}</option>
        {readRecordList.map((option) => (
          <option key={option.id} value={option.value}>
            {option.category}
          </option>
        ))}
      </select>
    </>
  );
};

export default Category;