import React,{ useState } from 'react';
import AddCategory from './Add_caterories/AddCategory';
import CreateCategory from './CreateCategory/CreateCategory';
import "./CategoryMain.scss"

const CategoryMain = () => {
  const [displayCategory, setDisplayCategory] = useState("addCategory");
  
  return (
    <div className='CategoryMain'>
      {displayCategory === "addCategory" 
      ? 
      <AddCategory setDisplayCategory={setDisplayCategory} />
      : 
      <CreateCategory setDisplayCategory={setDisplayCategory} />
      }
     
      
    </div>
  )
}

export default CategoryMain