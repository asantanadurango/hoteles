const { Component } = React;

// FROM COMPONENTS
import CardHotel from '../CardHotel/CardHotel'

// DATOS DE LOS HOTELES
import hotelsData from '../../info/data'
import { countries, prices, roomSizes } from '../../info/infoFilters';

class Main extends Component {

    render() {

        let [country, price, roomSize] = this.props.filters
        roomSize === roomSizes[1] && (roomSize = roomSizes[1])
        roomSize === roomSizes[2] && (roomSize = roomSizes[2])
        roomSize === roomSizes[3] && (roomSize = roomSizes[3])

        const countryDefault = countries[0]
        const priceDefault = prices[0]
        const roomSizeDefault = roomSizes[0]

        const verificationRoomSize = (num) => {
            if (roomSize === roomSizeDefault) {
                return roomSizeDefault
            } else {
                if (num > 0 && num < 11) { return roomSizes[1] }
                if (num > 10 && num < 21) { return roomSizes[2] }
                if (num > 20) { return roomSizes[3] }

            }
        }

        const verificationCountry = (criterion) => country === countryDefault ?countryDefault : criterion 

        const verificationPrice = (criterion) => price === priceDefault ?priceDefault.length : criterion

        const parseDate = (dateObj) => {
            const month = dateObj.getUTCMonth() + 1;
            const day = dateObj.getUTCDate();
            const year = dateObj.getUTCFullYear();
            return new Date(`${year}, ${month}, ${day} 00:00:01` )
           
        }

        const verificationDate = (fromD, toD) => {
            let [inputDate, outputDate] = this.props.dates
            inputDate === 0 && (inputDate = new Date().valueOf())
            outputDate === 0 && (outputDate = new Date().valueOf())
            
            const parseInp = parseDate(new Date(inputDate))
            const parseFrom = parseDate(new Date(fromD - 68400000))
            const parseTo = parseDate(new Date(toD - 68400000))
            const parseOut = parseDate(new Date(outputDate))
            return parseInp >= parseFrom && parseOut <= parseTo
        }

        const filterHotelData = _ =>hotelsData.filter(obj =>
                verificationDate(obj.availabilityFrom, obj.availabilityTo)
                && verificationCountry(obj.country) === country
                && verificationPrice(obj.price) === price.length
                && verificationRoomSize(obj.rooms) === roomSize)
        

        return (

            <main className='main'>
                {
                    filterHotelData().length < 1 ? 
                            (<h4 className='notFound'>En este momento no contamos con hoteles disponibles con estos cliterios... Lo sentimos</h4>)
                        : 
                   filterHotelData().map((obj) =>
                            <CardHotel
                                key={obj.slug}
                                hotelName={obj.name}
                                descrip={obj.description}
                                city={obj.city}
                                country={obj.country}
                                roomNumber={obj.rooms}
                                price={obj.price}
                                img={obj.photo}
                                slug={obj.slug}
                                cambiarText={this.cambiarText}
                            />)
                }
            </main>
        )
    }
}

export default Main;
