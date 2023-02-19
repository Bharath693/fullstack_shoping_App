import * as dispatcher from '../store/dispatchers'
import { connect } from 'react-redux';
import Category from '../Category';
import "./CreateCategory.scss";

const CreateCategory = () => {
  
  return (
    <div className='CreateCategory'>
      <Category title="Create Category" btnLabel="Create Category"/>
    </div>
  )
}

export default connect(null,dispatcher)(CreateCategory)