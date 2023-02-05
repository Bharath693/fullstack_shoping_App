import React from 'react'

const AddCategoryTableList = (props) => {
  return (
    <div>
      <table className="w-full bg-gray-900 rounded-md">
        <thead>
          <tr className='border-b border-gray-800 text-left'>
            <th className="p-3 capitalize font-medium text-gray-500">Name</th>
            <th className="p-3 capitalize font-medium text-gray-500">Edit</th>
            <th className='p-3 capitalize font-medium text-gray-500'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.categoryDetails?.catrgories.map((item) => {
            // console.log(item)
            return (
              <tr key={item._id}>
                <td className="text-white p-3 capitalize">{item.name}</td>
                <td className='text-white p-3'><button>Edit</button></td>
                <td className='text-white p-3'><button>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default AddCategoryTableList