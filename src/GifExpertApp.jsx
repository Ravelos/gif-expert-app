import { useState } from "react"
import {AddCategory , GifGrid} from './components/'

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState( [ 'One Punch' ] );
    
    const onAddCategory = (NewCategory) => {
        if( categories.includes(NewCategory)) return;
        setCategories([ NewCategory, ...categories]);  
    }

    return (
      <>
        <AddCategory onNewCategory={(event) => onAddCategory(event)} />

        <h1>GifExpertApp</h1>

        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </>
    );
}