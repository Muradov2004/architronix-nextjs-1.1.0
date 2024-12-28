import Link from 'next/link';
import React from 'react';

const DropDownMenu = ({ dropDownList, parentId ,setSelectedSubCategory,setSelectedCategory,setTitle}) => {

    const handleSubCategorySelect =(name)=>{
        setTitle(name)
        setSelectedSubCategory(name);
        setSelectedCategory(null)
    }
  return (
    <div
      className={`relative z-auto flex max-h-0 py-0 overflow-hidden transition-all duration-500 group-hover:max-h-[300px] group-hover:py-5`}
      style={{ backgroundColor: 'var(--primary)' }} // Burada arka plan rengi CSS değişkeni ile tanımlandı
    >
      <ul className="min-w-60 px-6">
        {dropDownList.slice(0, 7).map(({ id, name,path, projects }) => {
          return (
            <li key={id} className="leading-10">
              <button
                href={path}
                data-id={parentId}
                className="dropdown-item text-secondary-foreground text-base font-medium inline-block relative after:transition-all after:duration-700 after:absolute after:left-0 after:bottom-0 after:contents-[''] after:w-0 after:h-[2px] after:bg-secondary after:hover:w-full"
                onClick={() => handleSubCategorySelect(name)}
                
              >
                {name}
              </button>
            </li>
          );
        })}
      </ul>

      {dropDownList.length > 7 && (
        <ul className="min-w-52 px-6 relative after:absolute after:top-0 after:-left-5 after:contents-[''] after:bg-primary_rgba after:w-[2px] after:h-full">
          {dropDownList.slice(7, 12).map(({ id, name, path,projects }) => {
            return (
              <li key={id} className="leading-10">
                <button
                  href={path}
                  data-id={parentId}
                  className="dropdown-item text-secondary-foreground text-xl font-medium inline-block relative after:transition-all after:duration-700 after:absolute after:left-0 after:bottom-0 after:contents-[''] after:w-0 after:h-[2px] after:bg-secondary after:hover:w-full"
                  onClick={() => onSubCategorySelect(name, projects)}
                >
                  {name}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default DropDownMenu;
