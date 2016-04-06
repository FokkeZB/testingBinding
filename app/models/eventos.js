exports.definition = {
	config: {
		adapter: {
			type: 'eventos'
			, url: Alloy.CFG.url + 'cupom_consulta.php'
			, collection_name : 'eventos'
			, idAttribute: 'id_evento'
		}
	},

	extendModel: function(Model){
		_.extend(Model.prototype, {
			/*
			@ Transform Model
			*/
			// parse: transformModel,
			transform:function(){
				console.log('- - - - - - - -');
				console.log('model: ', JSON.stringify(this));
				console.log('- - - - - - - -');

				var t = this.toJSON();
				t.nome = t.nomeVazio;

				return t;
			}
		});

		return Model;
	},

	extendCollection: function(Collection) {
    _.extend(Collection.prototype, {
			terminou: false
    }); // end extend

    return Collection;
  }
};
