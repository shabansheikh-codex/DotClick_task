import React from 'react'

const Card = ({data}) => {
  return (
    <div className='card_main'>
        {data.rare && <div className='card_tag'>Rare Find</div>}
        <div className='card_image'>
            <img src={data.image} alt={data.name + + "image"}/>
        </div>
        <p className='name'>{data.name}</p>
        <div className='card_overlay'>
            <p className='distance'>{data.distance}</p>
            <div className='card_footer'>
                <div className='prices'>
                    <p>Singles: {data.singlePrice}</p>
                    <p>Doubles: {data.doublePrice}</p>
                </div>
                <div>
                    <button className='primary_btn' sizes="small">Book now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card