const { rastro } = require('rastrojs');

exports.veriicarCodigo = (req,res,next)=> {
    console.log(req.params.codigo)
    let codigo = req.params.codigo.replace(/\s/g, '').toUpperCase()
    console.log(codigo)
    let rastreio = rastrear(codigo);

    let objeto = rastreio.then(function(result){
        console.log(result)
        return res.send(result);
    })
    // res.send(rastrear(req.body.codigo))
}


async function rastrear(codigo) {

    return await rastro.track(codigo);

    return track;

};