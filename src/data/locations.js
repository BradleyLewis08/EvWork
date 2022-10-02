import { CHARGING_LEVELS, HARVARD_CHARGERS } from './chargers'


export const HARVARD_LOCATION = {
	chargers: HARVARD_CHARGERS,
	chargeLevels: CHARGING_LEVELS
}

const KRESEGE_LOCATION = {
	"latitude": 42.3577865,
	"longitude": -71.095897,
}

const MIT_LOCATION = {
	"latitude": 42.360091,
	"longitude": -71.09416,
}

const LOCATION_3 = {
	"latitude": 42.360091,
	"longitude": -71.09418,
}

export const LOCATIONS = [
	HARVARD_LOCATION,
	KRESEGE_LOCATION,
]

export const RECENT_LOCATIONS = [
	{
		"title": "540 Main St",
		"subtitle": "Brookline, MA"
	},
	{
		"title": "125 Western Ave",
		"subtitle": "Allston, MA"
	},
	{
		"title": "127 Western Ave",
		"subtitle": "Boston, MA"
	}
]
