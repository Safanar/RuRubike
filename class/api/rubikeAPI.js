var Login = require('./login/login.js');
var ViewOfBikeInfo = require('./viewOfBikeInfo/viewOfBikeInfo.js');
var ViewOfCarInfo = require('./viewOfCarInfo/viewOfCarInfo.js');
var Contact = require('./contact/contact.js');
var Bike = require('./bike/bike.js');
var Car = require('./bike/car.js');

class ruruBikeApi
{
	constructor(app,mongodb)
	{
		var that = this;
		this.login = new Login(app,mongodb,this);
		this.bike = new Bike(app,mongodb);
		this.car = new Car(app,mongodb);
		this.viewOfBikeInfo = new ViewOfBikeInfo(app,mongodb);
		this.viewOfCarInfo = new ViewOfCarInfo(app,mongodb);
		this.contact = new Contact(app,mongodb);
		this.apiAccess = {};
		this.apiAccess.login = function(id,password,callback) 
		{
			that.login.login(id,password,callback);
		}
		this.apiAccess.getContact = function(callback)
		{
			that.contact.getContact(callback);
		}
	}
}

module.exports = ruruBikeApi;
