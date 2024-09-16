import React ,{memo} from 'react';


function List({changeword}) {
  console.log('child component re-rendered');

  return (
    <div>
      word Change :{changeword()}
    </div>
  );
}

export default memo(List);      
// here we use memo -- memo said that if the props provide to this components are change then i render else i remain constant