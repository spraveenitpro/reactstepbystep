import React from 'react'

function Order({ fishes, order }) {
    const orderIds = Object.keys(order)

    //console.log(orderIds)
    return (
        <>
            <div className="order-wrap">
                <h2>Order</h2>
                {orderIds}
            </div>
        </>
    )
}

export default Order
