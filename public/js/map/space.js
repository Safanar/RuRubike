import {map} from '../react/index'

export default class Space{
  constructor(map,space,index){
    this.space = space;
    this.icon = {
      url: 'http://www.regencysecureparking.co.uk/images/128px-Parking_icon.png', // url
      scaledSize: new google.maps.Size(40, 40), // scaled size
    };
    this.marker = new google.maps.Marker({
      map: map.googleMap,
      position: {lat: parseFloat(space.location.latitude), lng: parseFloat(space.location.longitude)},
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
          if(Space.currentInfowindow!=undefined)Space.currentInfowindow.close();
          infowindow.open(this.marker.get('map'), this.marker);
          Space.currentInfowindow = infowindow;
          Space.panorama = map.googleMap.getStreetView();
          Space.panorama.setPosition({ lat: this.marker.getPosition().lat(), lng: this.marker.getPosition().lng()});
          Space.panorama.setPov(({
            heading: 265,
            pitch: 0
          }));
          $('#streetview').click(()=>{Space.panorama.setVisible(true);});
          $('#closebut').click(()=>{Space.currentInfowindow.close();});
        }.bind(this));
    }.bind(this));
  }*/
}

Space.panorama = null;
Space.currentInfowindow = null;
