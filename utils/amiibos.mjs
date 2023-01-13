let amiibos = []; // container

export async function getAllAmiibos(out) {
    out.innerHTML = "Loading...";

    const apiURL = "https://www.amiiboapi.com/api/amiibo/";
    fetch(apiURL)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data["amiibo"]);
            amiibos = data["amiibo"]; // Fill container
            listAmiibos(amiibos, out);
        });
}


/* template literal*/
function listAmiibos(amiibos, out) {
    let output = "";
    for (let amiibo of amiibos) {
        // console.log(amiibo);

        output += `
        <details>
            <summary>${amiibo.name}</summary>
            <img src="${amiibo.image}" alt="${amiibo.name}" height="100">
            <ul>
                <li>Name: ${amiibo.name}</li>
                <li>Character: ${amiibo["character"]}</li>
                <li>Series: ${amiibo["amiiboSeries"]}</li>
                <li>GameSeries: ${amiibo["gameSeries"]}</li>
                <li>Type: ${amiibo.type}</li>
                <li>ID: ${amiibo.head} ${amiibo["tail"]}</li>
            </ul>
        </details>`;
    }
    out.innerHTML = output;
}


/* filter out the amiibos based the search that includes the different options */
export function filterAmiibos(str, out, options) {
    // console.log({str, out, options, amiibos});

    const result = amiibos.filter((amiibo) => {
        // console.log(str, amiibo["character"]);
        // return amiibo["character"].toLowerCase().includes(str.toLowerCase());

        let characterHit = amiibo["character"].toLowerCase().includes(str.toLowerCase());
        if (characterHit) return true;
        if (options.nameOpt && amiibo["name"].toLowerCase().includes(str.toLowerCase())) return true;
        if (options.gameSeriesOpt && amiibo["gameSeries"].toLowerCase().includes(str.toLowerCase())) return true;
        if (options.amiiboSeriesOpt && amiibo["amiiboSeries"].toLowerCase().includes(str.toLowerCase())) return true;
    });

    listAmiibos(result, out);
}