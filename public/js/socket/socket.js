import io from 'socket.io-client'
export default class Socket{
	constructor(map){
		this.socket = io.connect();
		this.map = map;

		var spaces =[
			{location : {latitude : 24.795942 ,longitude : 120.996966} },
			{location : {latitude : 24.795879 ,longitude : 120.997068} },
			{location : {latitude : 24.795403 ,longitude : 120.997534} },
			{location : {latitude : 24.795335 ,longitude : 120.997614} }
		]
		this.map.setSpaces(spaces);
		
		this.socket.on('log', function (log) {
			console.log(log);
		});
		this.socket.on('bikes',(response)=>{
			var bikes = response.result;
			this.map.setBikes(bikes);
		});
	}
}
