import React from 'react'
import "./user.css";

const User = ({data}) => {
    // console.log(data);
    const fullName = `${data?.name?.first}` + ` ${data?.name?.last}`;
  return (
    <section className='user_section'>
      <div className="left_section">
        <img src={data?.picture?.large} alt={fullName} />

        <h2 className="user_name">{fullName}</h2>
      </div>
      <div className="right_section">
        <h2 className="info_text">User Info :-</h2>

        <div className="primary_user_info">
            <h2 className="right_user first">Name - <span>{fullName}</span></h2>
            <h2 className="right_user third">Age - <span>{data?.dob?.age}</span></h2>
        </div>

        <div className="primary_user_info">
            <h2 className="right_user second">Gender - <span>{data?.gender}</span></h2>
            <h2 className="right_user first">City - <span>{data?.location?.city}</span></h2>
        </div>

        <div className="primary_user_info">
            <h2 className="right_user second">State - <span>{data?.location?.state}</span></h2>
            <h2 className="right_user third">Country - <span>{data?.location?.country}</span></h2>
        </div>

        <div className="primary_user_info">
            <h2 className="right_user">Email - <span>{data?.email}</span></h2>
            <h2 className="right_user">Phone - <span>{data?.phone}</span></h2>
        </div>

        <div className="primary_user_info">
            <h2 className="right_user">Location - <span>{data?.location?.street?.name}</span></h2>
            <h2 className="right_user">Time-Zone - <span>{data?.location?.timezone?.description}</span></h2>
        </div>

        <div className="primary_user_info">
            <h2 className="right_user">ID - <span>{data?.login?.uuid}</span></h2>
            <h2 className="right_user">D.O.B - <span>{data?.dob?.date}</span></h2>
        </div>

        <img src="https://rukminim2.flixcart.com/image/850/1000/jxuq07k0/aquarium-substrate/g/x/f/st014-purple-stone-sky-original-imafg7cfz3gyyfdh.jpeg?q=90" alt="decor" />
      </div>
    </section>
  )
}

export default User
