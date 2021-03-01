import React from 'react';
import {connect} from 'react-redux';

import { MapContainer, TileLayer, Marker, useMap, ZoomControl, } from 'react-leaflet'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css'

import CardItem from './CardItem'
import InputForm from './InputForm'



function Map(props){
    //to be replaced by GeoJSON values
    const countryEnum = {
        india : { lat: 20.5937, lng: 78.9629},
        usa : { lat: 37.0902, lng: -95.7129},
        uk : { lat: 55.3781, lng: -3.4360},
    }
    
    Object.freeze(countryEnum);

    let defaultValue = { lat:0, lng: 0 }

    const [state,setState] = React.useState(defaultValue)

    React.useEffect(() => {
        setState(countryEnum[props.country])
    },[props.country])
    
    function ChangeMapView({ coords }) {
        const map = useMap();
        map.setView([coords.lat, coords.lng], map.getZoom());
        return null;
      }


    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });
    
    L.Marker.prototype.options.icon = DefaultIcon;



    return(
        <>
        <div style={{position: 'absolute', }}>
                  <div style={{position: 'relative', top: '13px', zIndex: '999', }}>
          <InputForm />
          </div>
          <div style={{position: 'relative', top: '198px', left: '13px', zIndex: '999',}}>
          <CardItem />
          </div>
        </div>
        <MapContainer style={{height:'70vh', width: '100%'}} center={state} zoom={4.2} zoomControl={false} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* conditional render coz default country state in the redux store is set to '' 
                and for some reason this component picks up that undefined value (initial render) despite 
                having a local state with lat:0, lng:0 */}
            {state && <ChangeMapView coords={ state } />}
            <ZoomControl position="topright"/>
            {state && <Marker position={state}>
            </Marker>}
        </MapContainer>
        </>
        )
}


const MapStateToProps = store => ({
    country : store.region.country
})

export default connect(MapStateToProps)(Map);
