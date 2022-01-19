import React from 'react';

const CourseInfo = ({id, onClickHandler, title}) => {
  const handleOnClick = () => onClickHandler();

  return (
    <div>
      <p>{title}</p>
      <button>Usuń kurs</button>
    </div>
  )
}

export default CourseInfo;