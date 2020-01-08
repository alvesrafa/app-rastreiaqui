const { rastro } = require('rastrojs');

export default async function rastrear(codigo) {

    const track = await rastro.track(codigo);

    console.log(track);

};

