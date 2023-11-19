export interface BookingItem {
	name: string;
	surname: string;
	cid: string;
	hospitalLocation: string;
	vaccineDate: string;
}

export interface RegisterUser {
	name:string;
	email:string;
	tel:string;
	password:string;
}

export interface CampItem {
    id: string;
    name: string;
	address: string;
	district: string;
	province: string;
	postalCode: string;
	tel: string;
    picture: string
}

// export interface CampJson {
//     count: number
//     data: CampItem[]
// }