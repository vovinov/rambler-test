import React, {Component} from 'react';
import { withRouter } from 'react-router';

import Layout from '../Layout';
import Navigation from '../../components/Navigation';

import data from '../../data.json';

import {getCardById} from "../../services"

class Card extends Component {  
    
    state = {
        id: null,
        card: undefined
    }

    componentDidMount() { 
        const card = getCardById(this.props.match.params.id);
        this.setState({
            card: card[0],
            id: parseInt(card[0].id, 10)
        })
    }  
    
    componentDidUpdate(prevProps, prevState) { 
        if (this.state.id !== prevState.id) {
            const card = getCardById(this.props.match.params.id);
            this.setState({
                card: card[0],
                id: parseInt(card[0].id, 10)
            })     
        }
    }  
    
    renderCard(card) {

        const {surname, name, avatar_url, birth_date, phone_number, email, description, links} = card;

        return (
            <div className="card">
                <div className="card__avatar card__block">
                    <img className="card__img" src={avatar_url} alt="avatar" />
                     <p className="card__title card__title--surname">{surname}</p>  
                     <p className="card__title card__title--name">{name}</p>  
                </div>
                <div className="card__info card__block">
                    <p className="card__subheading">Информация</p>
                    <ul className="card__list">
                        <li className="card__item">
                            <span className="card__subheading card__subheading--margin">Дата:</span>
                            <span>{birth_date}</span>
                        </li>
                        <li className="card__item">
                            <span className="card__subheading card__subheading--margin">Номер:</span>
                            <span>{phone_number}</span>
                        </li>
                        <li className="card__item">
                            <span className="card__subheading card__subheading--margin">Email:</span>
                            <span>{email}</span>
                        </li>
                    </ul>
                </div>
                <div className="card__description card__block">
                    <p className="card__subheading">Немного о себе:</p>
                    <div className="card__text">
                        {description.length > 0 && 
                            description.map((text, idx) => {
                                return (
                                <div key={idx}>
                                    <span>{text}</span>
                                    {description.length !== idx + 1 && <div className="card__separator"></div>}  
                                </div>
                                )
                            }) 
                        }
                    </div>
                </div>
                <ul className="card__links card__block"> 
                    {links.map((link, idx) => {
                        return (
                            <li className="card__link" key={idx}>
                                <a className="card__url" href={link.url}>{link.name ? link.name : link.url}</a>
                            </li>
                        )
                    })                       
                    }                          
                </ul>
            </div>
        )
    }

    incId = () => {
        this.setState((state) => {
            return {
                id: state.id + 1
            }
        })
    }   
    
    decId = () => {
        this.setState((state) => {
            return {
                id: state.id - 1
            }
        })
    } 

    render() {

        const {history} = this.props;

        const {id, card} = this.state;
       
        return (
            <Layout>
                <section>
                    <div className="section-row">
                        <h2 className="section__title">Карточка участника</h2>
                        <div className="section__line section__line--button"></div>
                        <button className="section__button" onClick={() => history.push("/rambler-test")}>Вернуться</button>
                    </div>
                    {card && this.renderCard(card)}
                    <Navigation 
                        id={parseInt(id, 10)}
                        data={data} 
                        incId={() => this.incId()}    
                        decId={() => this.decId()}>
                    </Navigation>    
                </section>
            </Layout>
        )
    }
}

export default withRouter(Card)

