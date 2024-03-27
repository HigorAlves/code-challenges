import Axios from 'axios';

const http = Axios.create({
	baseURL: 'https://swapi.dev/api/starships/',
	timeout: 6000,
});

const getShips = async () => {
	let hasNext = false;
	let page = 1;
	const ships: any[] = [];

	do {
		await http.get(`?page=${page}`).then((result) => {
			if (result.data.next) {
				hasNext = true;
				page++;
			} else {
				hasNext = false;
			}

			result.data.results.map((ship: any) => {
				const consumables = ship.consumables.split(' ');
				let time = 0;

				switch (consumables[1]) {
				case 'day':
					case 'days':
					time = parseInt(consumables[0]) * 24;
					break;
					case 'week':
				case 'weeks':
						time = parseInt(consumables[0]) * 168;
					break;
					case 'month':
					case 'months':
					time = parseInt(consumables[0]) * 730;
					break;
					case 'year':
				case 'years':
						time = parseInt(consumables[0]) * 8760;
						break;
				default:
						time = 0;
					break;
				}

				if (ship.MGLT != 'unknown') {
					ships.push({ mglt: ship.MGLT, consumables: time, name: ship.name });
				}
			});
		});
	} while (hasNext);

	return ships;
};

export { getShips };
