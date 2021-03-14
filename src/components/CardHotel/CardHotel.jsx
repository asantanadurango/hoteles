const CardHotel =({ hotelName, descrip, city, country, roomNumber, price, img, slug})=>{
        return (
            <article className= 'cardHotel'>
            
                <img  className='cardHotel__img' src={img} alt={slug} />
                <h1>{hotelName}</h1>
                <p>{descrip}</p>
                <p><i class="fas fa-globe-americas"></i>{`${city}, ${country}`}</p>
                <p>
                <span className='cardHotel__rommNumber--inline'><i class="fas fa-bed"></i>{roomNumber} Habitaciones</span>
                <span className='cardHotel__priceTag--inline' >{'$'.repeat(price)}</span>
                </p>
                <button className = 'cardHotel__btn' >Reservar</button>
            </article>
        ); 
    
}

export default CardHotel;