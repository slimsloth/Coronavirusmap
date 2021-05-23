const accessToken =
  "pk.eyJ1Ijoic2xpbXNsb3RoIiwiYSI6ImNrb3c3eDljejAzMHAycW12c2J1NzM1MjgifQ.H7nWE3F6t1JP0AaUR418AQ";

export const mapServices = [
  {
    name: "OpenStreetMap",
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  },
  {
    name: "Mapbox",
    attribution:
      "Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>",
    url: `https://api.mapbox.com/styles/v1/slimsloth/ckow7eb3i09rl18ldra4m4wxf/tiles/256/{z}/{x}/{y}@2x?access_token=${accessToken}
    `,
  },
];
