import React, { useEffect } from 'react'

const Relocate = (props) => {

  let  urls = "";
  urls = props.here;
  useEffect(() => {
    window.location.href = "https://www.google.com/";
  }, urls);
  

  return (
    <div>Please Wait...</div>
  )
}

export default Relocate