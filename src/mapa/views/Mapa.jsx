import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON, Popup, Marker } from "react-leaflet";

let defaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [-3, -76]
})
export const Mapa = () => {
    const [geojsonData, setGeojsonData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://usc1.contabostorage.com/d069ea98e2df4b0e9e99b1e7b2ca9a58:pruebasceluweb/jsonciudad/medellin.geojson");
                const data = await response.json();
                setGeojsonData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            {geojsonData && (
                <MapContainer
                    center={[6.245220909754232, -75.57881294350398]}
                    zoom={11}
                    // scrollWheelZoom={false}
                    className='mapa'
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <GeoJSON
                        data={geojsonData}
                        style={{ fillColor: 'green', weight: 1, opacity: 1, color: 'white', fillOpacity: 0.7 }}>
                        <Marker position={[6.245220909754232, -75.57881294350398]} icon={defaultIcon}>
                            <Popup>
                                Un vistazo a <br /> Los barrios de Medellín.
                            </Popup>
                        </Marker>
                    </GeoJSON>
                </MapContainer>
            )}
        </>
    )
}
