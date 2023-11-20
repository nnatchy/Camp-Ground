export default async function getBooking(id:string,token:string) {
	const response = await fetch(`http://localhost:5000/api/v1/bookings/${id}`, {
		method: 'GET',
		headers: {
			authorization: `Bearer ${token}`,
		},
		next: {tags: ['bookings']}
	})
	
	if(!response.ok) {
		throw new Error('Failed to fetch bookings')
	}
	return await response.json()
}