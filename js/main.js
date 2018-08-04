// Start Tinder Generator
var app = new Vue({
	el: '#tinderapp', //start vue here
	data: {
		genera: 'status',
		sesso: 'female',
		tipo: '',
		info: '',
		status: {
			female: {
				type: {
					fighetta: {
						like: {
							0: 'i cani',
							1: 'le auto',
							2: 'le moto',
							3: 'la gente positiva',
							4: 'sciare',
							5: 'l\'equitazione',
							6: 'bere spritz con gli amici',
							7: 'i veri UOMINI alfa',
							8: 'il sushi',
							9: 'crossfit'
						},
						dislike: {
							0: 'i fumatori',
							1: 'la gente superficiale',
							2: 'i tatuati',
							3: 'i narcisisti',
							4: 'quelli che fanno politica',
							5: 'quelli che non si lavano',
							6: 'i morti di figa',
							7: 'chi non ha gusto'
						},
						personality: {
							0: 'studio marketing',
							1: 'ho studiato economia',
							2: 'fashion blogger',
							3: 'globetrotter',
							4: 'trend setter',
							5: 'faccio la PR',
							6: 'mi hanno iscritto le mie amiche e non cerco storie di una notte',
							7: 'amo mettermi in gioco',
							8: 'sono una inguaribile ottimista',
							9: 'stylist'
						}
					},
					indie: {
						like: {
							0: 'stare in compagnia',
							1: 'chi mi stimola intellettualmente',
							2: 'la pole dance',
							3: 'lo yoga',
							4: 'la fitboxe',
							5: 'il vino',
							6: 'l\'avocado',
							7: 'i nerd',
							8: 'i tattoo',
							9: 'il moscow mule'
						},
						dislike: {
							0: 'i perditempo',
							1: 'i pollastri che vogliono sesso',
							2: 'la gente negativa',
							3: 'la gente che si piange addosso',
							4: 'i palestrati',
							5: 'i ragazzi che si fanno le sopracciglia',
							6: 'ragazzi depilati'
						},
						personality: {
							0: 'lunatica',
							1: 'socievole',
							2: 'studio lingue',
							3: 'scrittrice',
							4: 'blogger',
							5: 'nomade digitale',
							6: 'crescita personale',
							7: 'sono una grammar nazi',
							8: 'ho un carattere di merda'
						}
					},
					zozzetta: {
						like: {
							0: 'i gatti',
							1: 'bere alcolici tutta la sera',
							2: 'la politica',
							3: 'i piercing',
							4: 'divano e Netflix',
							5: 'i vecchi film in bianco e nero',
							6: 'bere birra',
							7: 'diversificare',
							8: 'il vino ronco',
							9: 'esagerare'
						},
						dislike: {
							0: 'no maiali',
							1: 'no gente che ostenta ricchezza',
							2: 'no morti di figa',
							3: 'no vegani'
						},
						personality: {
							0: 'ho studiato lettere e filosofia',
							1: 'lavoro per una ONG',
							2: 'sono una casinista',
							3: 'faccio la maestra',
							4: 'sono orgogliosa del mio corpo anche se non è perfetto'
						}
					},
					generico: {
						like: {
							0: 'cucinare',
							1: 'vivere',
							2: 'la trasparenza',
							3: 'la coerenza',
							4: 'la musica',
							5: 'ballare',
							6: 'l\'avventura',
							7: 'viaggiare',
							8: 'il cinema',
							9: 'l\'onestà'
						},
						dislike: {
							0: 'bassi',
							1: 'pelati',
							2: 'barba',
							3: 'one night stand',
							4: 'chi non parla',
							5: 'privi di intelligenza emotiva',
							6: 'no grillini'
						},
						personality: {
							0: 'sono alta',
							1: 'sono uscita da poco da una relazione',
							2: 'crepuscolare',
							3: 'decisamente curvy',
							4: 'diremo che ci siamo incontrati al supermercato'
						}
					}
				}
			}
		}
	},
	methods: {
		generateStatus: function() {
			var ilike = '',
				idislike = '',
				mypersonality = '',
				cat = this.getRandCat;
			
		},
		getRandCat: function() {
			var num = this.getRandomInt(3),
				cat = this.status.female.type;

			if(this.sesso === 'female') {
				switch(num) {
				    case 0:
				    	return cat.zozzetta;
				        break;
				    case 1:
				    	return cat.indie;
				        break;
				    default:
				    	return cat.fighetta;
				}
			}
		}
		getRandomInt: function(num) {
		  return Math.floor(Math.random() * Math.floor(num));
		}
	},
	mounted: function() {
		return true;
	}
});