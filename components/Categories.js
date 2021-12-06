import React from 'react'
import {useState,  useEffect} from 'react'
import {getCategories} from '../lib/api.js'
import Link from 'next/link';

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
      .then((categories)=> setCategories(categories))
  }, []);

 
  console.log('categories::', categories)
  return (
    <div className="mb-4 mt-4">
      <h5 className="text-left">Categories</h5>
        {categories.map((category)=> (
          <Link key={category._id} href={`/category/${category.slug.current}`}>
            <span className="cursor-pointer block lead"> {category.name} </span>
          </Link>
    ))}
  </div>
  )
}


export default Categories;
