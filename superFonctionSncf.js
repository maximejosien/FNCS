async function getRailwayStations(address) {
  const SNCFRailwayReferentialResponse = fetch('https://ressources.data.sncf.com/api/records/1.0/search/?dataset=referentiel-gares-voyageurs&q=' + address);
  const responseJson = (await SNCFRailwayReferentialResponse).json();

  const railwayStations = (await responseJson).records.map(value => {
    return value.fields.pltf_commune_libellemin;
  });

  return [...new Set(await railwayStations)];
}

var b = getRailwayStations("Lille").then(data => {
  console.log(data);
});

