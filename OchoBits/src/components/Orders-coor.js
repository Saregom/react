

const Orders = () =>{

    return(
        <>
            <div className="container main-orders-coor">
                <h1>Commercial Advisor Orders</h1>
                <h1 className="alert2">There aren't orders</h1>
                <div className="div-table div-table-ord">
                    <table className="table table-ord-coor">
                        <thead>
                            <tr>
                                <th>Identification</th>
                                <th>Name</th>
                                <th>E-mail</th>
                                <th>Date</th>
                                <th>#Order</th>
                                <th>Status</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
                <h1 className="details"></h1>
                <div className="div-table">
                    <table className="table table-ord-details-coor">
                        <thead></thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>
        </>
    )
}