import {map} from '../react/index'

export default class Space{
  constructor(map,space,index){
    this.Car = Car;
    this.icon = {
      url: 'https://s-media-cache-ak0.pinimg.com/originals/7e/0f/a8/7e0fa8e40440ec3409ee08eb747126cc.jpg', // url
      scaledSize: new google.maps.Size(20, 20), // scaled size
    };
    this.marker = new google.maps.Marker({
      map: map.googleMap,
      position: {lat: parseFloat(Car.location.latitude), lng: parseFloat(Car.location.longitude)},
      icon: this.icon,
      customInfo: this.index
    });
    //this.attachSecretMessage = this.attachSecretMessage.bind(this);
  }

  /*attachSecretMessage() {
    $.post('/viewOfBikeInfo',{action:'bikeInfo',json:this.bike},function (Content) {
      var infowindow = new google.maps.InfoWindow({
        content: Content
      });
      this.marker.addListener('click', function() {
          if(Car.currentInfowindow!=undefined)Car.currentInfowindow.close();
          infowindow.open(this.marker.get('map'), this.marker);
          Car.currentInfowindow = infowindow;
          Car.panorama = map.googleMap.getStreetView();
          Car.panorama.setPosition({ lat: this.marker.getPosition().lat(), lng: this.marker.getPosition().lng()});
          Car.panorama.setPov(({
            heading: 265,
            pitch: 0
          }));
          $('#streetview').click(()=>{Car.panorama.setVisible(true);});
          $('#closebut').click(()=>{Car.currentInfowindow.close();});
        }.bind(this));
    }.bind(this));
  }*/
}

Car.panorama = null;
Car.currentInfowindow = null;
