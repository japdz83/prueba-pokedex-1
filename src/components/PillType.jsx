import React from 'react'
import Data from '../data/type'


const PillType = () => {
    const { typeItems } = Data;

    return (
        <>
            <div className="flex">
                <div className='box-pill-1'>
                    <p>All</p>
                </div>
                {typeItems.map((typeItem, index) => (

                    <div className="box-pill" key={index} >
                        <div className="img">
                            <img src={typeItem.cover} alt="Img Types" />
                        </div>
                        <div className="type-name">
                            <p>{typeItem.name}</p>
                        </div>
                    </div>

                ))}
            </div>
        </>
    )
}

export default PillType