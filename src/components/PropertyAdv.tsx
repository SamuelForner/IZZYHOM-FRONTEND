import { type } from '@testing-library/user-event/dist/type';
import React from 'react'
import style from '../style/PropertyAdv.module.css'

//4) Envoi des informations du composant parent vers le composant enfant avec l'aide des props

type HomeProps = {
    id : string,
    type : string,
    title : string,
    main_picture : string, 
    living_area : number,
    rooms_count : number,
    bedrooms_count : number | null, // Si le nombre de chambre est égal à 0, props= null
    address : { postal_code : string, city : string},
    is_furnished : boolean,
    full_rent_price : number
}

function PropertyAdv(props : HomeProps) {
    //console.log(props);/* => Nous recevons bien du composant parent le tableau d'objet
    //console.log(props.is_furnished) //La mention true ou false n'apparaît pas telle quelle (booleen) ci dessous nous la convertissons en screen pour la voir à l'écran
  
    return (
    <div>
        
        <div className={style.card}>
            <div className={style.textContainer}>
                <span className={style.title}>{props.title}</span>
                <img src={props.main_picture} alt={props.title} className={style.image}/>
                <div className={style.description}>
                    <p>Type de bien: {props.type}</p>
                    <p>Superficie: {props.living_area} m2</p>
                    <p>Nombre de chambre: {props.bedrooms_count}</p>
                    <p>Code postal: {props.address.postal_code}</p>
                    <p>Ville: {props.address.city}</p>
                    <p>Loué meublé: {String(props.is_furnished)}</p>
                    <p>Loyer mensuel (cc): {props.full_rent_price}€</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PropertyAdv