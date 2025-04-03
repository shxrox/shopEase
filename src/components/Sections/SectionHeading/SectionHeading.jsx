import React from 'react'

const SectionHeading = ({title}) => {
  return (
     <div className='flex flext-wrap px-10 my-5'>
          <div>
              
          </div>
          <p className='text-3xl'>{title}</p>
     </div> 
  )
}

SectionHeading.defaultProps = {

}

SectionHeading.propTypes={
    title:String
}

export default SectionHeading