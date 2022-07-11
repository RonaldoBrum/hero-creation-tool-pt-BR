Hooks.once('init', () => { 
	if(typeof Babele !== 'undefined') { 
		Babele.get().register({
			module: 'hero-creation-tool-pt-BR',
			lang: 'pt-BR',
			dir: 'lang'
		}); 
	}
});