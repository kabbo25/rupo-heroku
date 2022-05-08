import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, description, price, quantity, suppliername } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img className='w-100' src={"https://i.ibb.co/wc3QtxB/img-1.jpg"} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>Description:<small>{description}</small></p>
            <p>Quantity:<small>{quantity}</small></p>
            <p>SupplierName:<small>{suppliername}</small></p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'>Buy: {name}</button>
        </div>
    );
};

export default Service;