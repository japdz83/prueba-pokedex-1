import React from 'react'
import Data from '../data/type'


const PillType = () => {
    const { typeItems } = Data;

    return (
        <>
            <div className="flex">
                {typeItems.map((typeItem, index) => (

                    <div className="box-pill" key={index} style={{
                        // backgroundColor: (typeItem.color),
                    }}>
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