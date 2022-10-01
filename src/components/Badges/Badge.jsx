import React from 'react';
import { MDBBadge } from 'mdb-react-ui-kit';

export default function Badge() {
    return (
        <div>
            <h2>
                Example heading
                <MDBBadge className='ms-2'>NEW</MDBBadge>
            </h2>
        </div>
    );
}