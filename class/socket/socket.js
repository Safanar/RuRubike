var tool = require('../tool.js');
class SocketIO
{
	constructor(httpServer,mongodb)
	{
		var that = this;
		this.mongoDataBase = mongodb;
		this.io = require('socket.io').listen(httpServer);
		this.io.sockets.on('connection',function(socket){

			socket.emit("log","connection success");

			var getBikesInterval =  setInterval(function() 
			{
				if(that.mongoDataBase.MongoDatabase != null)
				{
					that.mongoDataBase.getBikes(function(err,data) 
					{
						if(err)
						{
							socket.emit('bikes',tool.dberror());
						}
						else
						{
							//success and transport the data to the front-end
							socket.emit('bikes',tool.result(data,1));
						}
					});
				}
			},1000);
			
			var getCarsInterval =  setInterval(function() 
			{
				if(that.mongoDataBase.MongoDatabase != null)
				{
					that.mongoDataBase.getCars(function(err,data) 
					{
						if(err)
						{
							socket.emit('cars',tool.dberror());
						}
						else
						{
							//success and transport the data to the front-end
							socket.emit('cars',tool.result(data,1));
						}
					});
				}
			},1000);

			socket.on('disconnect',function() 
			{
				clearInterval(getBikesInterval);
				clearInterval(getCarsInterval);
			});
		});
	}
}

module.exports = SocketIO;
