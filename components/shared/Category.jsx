import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const Category = ({ category, id, value }) => {
  return (
    <Select >
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Category" className='text-[#f5f5f5]'/>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="All" className="select-item p-regular-14">All</SelectItem>

          <SelectItem value={value} key={id} className="select-item p-regular-14">
            {category}
          </SelectItem>
      </SelectContent>
    </Select>
  )
}

export default Category
