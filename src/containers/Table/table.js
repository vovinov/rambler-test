import React from 'react';
import { useHistory } from "react-router-dom";
import Layout from '../Layout';

import data from '../../data.json';

const Table = () => {

    const history = useHistory();

    return (
        <Layout>
            <section>            
                <div className="section-row">
                    <h2 className="section__title">Участники</h2>
                    <div className="section__line"></div>
                </div>
                <table className="table">
                    <thead>
                        <tr className="table__heading">
                            <th className="table__cell table__cell--heading table__cell--surname">Фамилия</th>
                            <th className="table__cell table__cell--heading table__cell--name">Имя</th>
                            <th className="table__cell table__cell--heading table__cell--email">Email</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data.map((man) => {
                            const {id, surname, name, email} = man;
                            return (
                                <tr className="table__row" onClick={() => history.push(`/card/${id}`)} key={id}>
                                    <td className="table__cell table__cell--surname">{surname}</td>
                                    <td className="table__cell table__cell--name">{name}</td>
                                    <td className="table__cell table__cell--email">{email}</td>
                                    <td className="table__cell table__cell--right table__cell--button">
                                        <button className="table__button" onClick={() => history.push(`/card/${man.id}`)}>Посмотреть</button>
                                    </td>
                                </tr>  
                            )
                        })} 
                    </tbody>
                </table>
            </section>
        </Layout>
    )
}

export default Table
