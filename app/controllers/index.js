function reloadFunc(event){

}

function loadMore(event){

}

function openWin(){
  $.infinity.init($.list);

  $.eventosCollection.fetch({
    options: {
      lat: null
      , long: null
      , pagina: 1
    },

    add: false,

    success:function(col){
      console.log('- - - - - - - -');
      console.log('col: ', JSON.stringify(col));
      console.log('- - - - - - - -');
    },

    error:function(model, error){
      console.log('- - - - - - - -');
      console.log('error: ', error.msg);
      console.log('- - - - - - - -');
    }
  });
}

$.index.open();
