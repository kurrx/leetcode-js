/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
function findItinerary(tickets) {
  function postOrderDFS(airport) {
    if (flights.has(airport)) {
      const airportFlights = flights.get(airport)
      while (airportFlights.length) {
        postOrderDFS(airportFlights.pop())
      }
    }
    result.push(airport)
  }

  // Build graph
  const flights = new Map()
  for (const [from, to] of tickets) {
    if (!flights.has(from)) flights.set(from, [])
    flights.get(from).push(to)
  }

  // Sort each airport flights by lexical order
  flights.forEach(airportFlights => {
    airportFlights.sort((a, b) => (a === b ? 0 : a < b ? 1 : -1))
  })

  const result = []
  postOrderDFS('JFK')
  result.reverse()
  return result
}
