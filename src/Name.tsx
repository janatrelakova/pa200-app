import React from 'react';
import { useParams } from 'react-router-dom';

export const Name = () => {
    const { id } = useParams();

    return (
        <span>Hi {id}</span>
    )
}