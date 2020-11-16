import React, { useCallback, useEffect, useState } from 'react';
import Card from '../components/organisms/Card'
import TicketsService from '../services/tickets.service';
// import { Container } from './styles';

function _test_() {

    const [searchFly, setData] = useState([]);

    const _test = {
        adults: 1,
        children: 0,
        currencyCode: "BRL",
        departureDate: "2021-01-10",
        destinationCode: "MAD",
        infants: 0,
        max: 5,
        originCode: "NYC",
        returnDate: "2021-01-20"
    }
    
    const ticketService = new TicketsService();

   const request = useCallback(
        async() => {
            const response = await ticketService.ticketsSearch(_test);
            console.log(response.data)
            setData(response.data)
   },[_test, ticketService])

return (
    <div>
    <button onClick={request}>buscar</button>
    {searchFly.map(fly =>(
        <Card key={fly.id} fly={fly} />
    ))}
    </div>
);
}

export default _test_;

