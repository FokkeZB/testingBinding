function Sync(method, model, opts) {
  // console.log('- - - - - - - - -');
  // console.log('method: ', method);
  // console.log('- - - - - - - - -');
  // console.log('model: ', model);
  // console.log('- - - - - - - - -');
  // console.log('opts: ', opts.options);
  // console.log('- - - - - - - - -');

  /*
  @ callbackSuccess
  */
  function callbackSuccess(response){
    response = JSON.parse(response);
    // console.log('- - - - - - - -');
    // console.log('callbackSuccess: ', JSON.stringify(response));
    // console.log('- - - - - - - -');

    if(response.status != '0'){

      if(!response.Data.length) model.terminou = 1;

      if(!response.Data.length && !opts.options.paginando){
        response.Data[0] = { vazio: true, nomeVazio: 'Não possuímos nenhum evento\n perto de você no momento.' };
        model.terminou = 1;
      }

      opts.success(response.Data, response);

    }else{

      opts.error(model, { msg: response.msg });
    }
  }

  /*
  @ callbackError
  */
  function callbackError(error){
    console.error('- - - - - - - -');
    console.error('callbackError: ', JSON.stringify(error));
    console.error('- - - - - - - -');

    opts.error(model, { msg: (error.message) ? error.message : error.error });
  }

  if (Ti.Network.online) {

    new Alloy.Globals.HTTP({
      method: 'POST'
      , url: model.config.adapter.url
      , data: opts.options
    })
      .then(callbackSuccess)
        .catch(callbackError)
        ;

  } else {

    opts.error(model, { msg: 'Internet desconectada'});
  }
}

exports.sync = Sync;
