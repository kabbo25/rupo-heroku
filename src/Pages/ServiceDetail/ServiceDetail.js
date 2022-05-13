// import React from 'react';
// import { Link, useParams } from 'react-router-dom';

// const ServiceDetail = () => {
//     const { serviceId } = useParams();
//     return (
//         <div>
//             <h2>Welcome to detail: {serviceId}</h2>
//             <div className='text-center'>
//                 <Link to="/checkout">
//                     <button className='btn btn-primary'>Proceed Checkout</button>
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default ServiceDetail;





import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `https://guarded-sands-71170.herokuapp.com/product/${serviceId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));

    }, [])

    return (
        <div>
            <h2>You are about to book: {service.name}</h2>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;