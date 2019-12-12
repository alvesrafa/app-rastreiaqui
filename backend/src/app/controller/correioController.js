const { rastro } = require('rastrojs');

exports.veriicarCodigo = (req,res,next)=> {
    let rastreio = rastrear(req.body.codigo);

    let objeto = rastreio.then(function(result){
        return res.send(result);
    })
    // res.send(rastrear(req.body.codigo))
}


async function rastrear(codigo) {

    return await rastro.track(codigo);

    return track;

};