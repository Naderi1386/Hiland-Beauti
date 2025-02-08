import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression, LatLngTuple } from "leaflet";

interface CompanyMapPropsType {
  x: number;
  y: number;
}

const CompanyMap = ({ x, y }: CompanyMapPropsType) => {
  const position = [x, y];

  return (
    <div style={{ width: "100%", height: "400px" }}>
      {" "}
      <MapContainer center={position as LatLngExpression} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position as LatLngExpression}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default CompanyMap;
