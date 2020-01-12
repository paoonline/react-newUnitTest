import React from 'react';

const dataList = (props) => (
    props.data.map((res, i) => (
        <ul key={res + i}>
            <li>
                {res.productName}
            </li>
        </ul>
    ))
)

export default dataList