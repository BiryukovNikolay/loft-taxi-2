import React from 'react';
import mapboxgl from 'mapbox-gl';

export default class Map extends React.Component {
    map = null;
    mapContainer = React.createRef();

    componentDidMount() {
      mapboxgl.accessToken = 'pk.eyJ1Ijoibmlrb2xheWJpcnl1a292IiwiYSI6ImNrb2JoanRpNzJ6Z2Yyb2x5em5pZmQ1c24ifQ.9joEFmwELRAyd9kxij0j_g';

      this.map = new mapboxgl.Map({
        container: this.mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [37.512602, 55.972004], // starting position
        zoom: 14
      });
    }
  
    componentWillUnmount() {
      this.map.remove();
    }
  
    render() {
      return <div className="map-wrapper">
                <div data-testid="map" className="map" ref={this.mapContainer} />
            </div>;
    }
}
