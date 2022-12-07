import React from 'react';

const Table = ({data, config}) => {

    return (

            <table border={1}>
                <thead>
                    <tr>
                        {config.map((el) => (
                            <th>{el.label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                {data.map((el) => (
                    <tr key={el.id}>
                        {config.map((cf) => (
                            <td>{cf.key === 'name' ? el.name : cf.render(el)}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
    );
};

export default Table;