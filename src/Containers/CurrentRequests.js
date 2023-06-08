import React from 'react'
import Card from '../Components/Card/Card'
import { cardData } from '../Components/Card/CardData'
import Stats from '../Components/Stats/Stats'

const CurrentRequests = () => {
  return (
    <div className='page_main'>
        <h1>You currently have 3 requests</h1>
        <div className='request_stats'>
            <Stats/>
            <div className='status_bar'>
                <div className='status received'>RECEIVED</div>
                <div className='status'>NEGOTIATING</div>
                <div className='status'>COMPLETED</div>
            </div>
        </div>
        <div className='request_details'>
            <Stats/>
            <div className='request_status'>completed</div>
            <div className='cards_container'>
                {cardData.length && cardData.map((item)=><Card data={item} key={item.id}/>)}
            </div>
        </div>
    </div>
  )
}

export default CurrentRequests