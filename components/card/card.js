import styles from './card.module.css'
import Option from '../option/option';
import { useState } from 'react';
import {AiOutlineCloseCircle, AiOutlineCheckCircle} from 'react-icons/ai'
import Button from '../button/button.js';
import Vector from '../../assets/adventure.png'
import Image from 'next/image'


const Card = ({option, answer, style, iconWrong, iconCheck}) => 
{
    return (
        <div className={styles.Card}>
            <div className={styles.Svg}>
                <Image src={Vector}/>
            </div>
            <h4>Kaula Lumpur is the capital of</h4>
            <div className={styles.CardBody}>
                <Option key={0} iconCheck={<AiOutlineCheckCircle/>} option="A" answer="Malaysia" style={{backgroundColor: '#60BF88', color: 'white', border: '2px solid #60BF88'}}/>
                <Option iconWrong={<AiOutlineCloseCircle/>} style={{backgroundColor: '#EA8282', color: 'white', border: '2px solid #EA8282'}} option="B" answer="Vietnam"/>
                <Option option="C" answer="Sweden"/>
                <Option option="D" answer="Austria"/>

            </div>
            <Button/>
        </div>
    )
}

export default Card;
