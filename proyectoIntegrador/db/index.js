const datos = {
    usuario: {
        nombre: 'Norberto Diaz',
        email: 'ndiaz@gmail.com',
        contrasena: 'Hola12345',
        fecha: '01/07/2000',
        documento: 42653097,
        foto: '/img/perfilfoto.jpg'
    },

    productos: [
        {
            nombre: 'Porsche 911 Carrera 1990',
            descripcion: 'El Porsche 911 Carrera de 1990 es un deportivo con un motor que rugía áspero y una cabina envolvente. El auto esta en perfecto estado, solo requiere cambio de frenos.',
            imagen: '/img/porsche.jpg',
            comentarios:[
                {
                    usuario: 'nico300',
                    texto: 'Buen producto',
                    imagenPerfil:''
                },
                {
                    usuario: 'juanceto09',
                    texto: 'Que nave',
                    imagenPerfil:''
                },
                {
                    usuario: 'fanautos',
                    texto: 'El auto de mis sueños',
                    imagenPerfil:''
                },
                {
                    usuario: 'pedro123',
                    texto: 'Pero que bicho...',
                    imagenPerfil:''
                },
                {
                    usuario: 'pablito',
                    texto: 'Pero que bicho...',
                    imagenPerfil:''
                },
            ]
        },
        {
            nombre: 'Mercedes Benz 300 SL 1954',
            descripcion: 'El Mercedes Benz 300 SL de 1954 es un ícono de la ingeniería automotriz, con su diseño distintivo y su motor potente. Este auto es una obra maestra que combina elegancia y rendimiento. Como nuevo, segundo dueño.',
            imagen: '/img/mercedes300sl.jpg',
            comentarios:[
                {
                    usuario: 'toui ',
                    texto: 'ayy que lindo',
                    imagenPerfil:''
                },
                {
                    usuario: 'johnlenon',
                    texto: 'que lo pario...',
                    imagenPerfil:''
                },
                {
                    usuario: 'lucashabib',
                    texto: 'que locura',
                    imagenPerfil:''
                },
                {
                    usuario: 'ruderoca',
                    texto: 'faa mi viejo tenia uno',
                    imagenPerfil:''
                },
            ]
        },
        {
            nombre: 'Maserati MC12 2004',
            descripcion: 'El Maserati MC12 de 2004 es un superdeportivo que combina un diseño aerodinámico con un motor V12 potente. Este auto es una obra maestra de la ingeniería automotriz, ofreciendo un rendimiento excepcional y una experiencia de conducción única.',
            imagen: '/img/mc12.jpg',
            comentarios:[
                {
                    usuario: 'matiromig',
                    texto: 'Precio?',
                    imagenPerfil:''
                },
                {
                    usuario: 'themoncho96',
                    texto: 'Increible',
                    imagenPerfil:''
                },
                {
                    usuario: 'ojodeindigo',
                    texto: 'Que motor tiene?',
                    imagenPerfil:''
                },
                {
                    usuario: 'Chilitatan',
                    texto: 'UFFFF!',
                    imagenPerfil:''
                },
            ]
        },
        {
            nombre: 'Jaguar E-Type 1963',
            descripcion: 'El Jaguar E-Type de 1963 es un ícono del diseño automotriz, conocido por su elegancia y rendimiento. Este auto combina un motor potente con una estética atemporal, ofreciendo una experiencia de conducción única.',
            imagen: '/img/jaguar.jpg',
            comentarios:[
                {
                    usuario: 'Felipe Zimer',
                    texto: 'Naa, increible',
                    imagenPerfil:''
                },
                {
                    usuario: 'Bauti Canoa',
                    texto: 'del mejor año',
                    imagenPerfil:''
                },
                {
                    usuario: 'beltran pt',
                    texto: 'de los mejores modelos!',
                    imagenPerfil:''
                },
                {
                    usuario: 'Kiruff45',
                    texto: 'ojala poder tener uno de esos',
                    imagenPerfil:''
                },
            ]
        },
        {
            nombre: 'Ferrari F40',
            descripcion: 'La Ferrari F40 es un superdeportivo icónico lanzado en 1987, diseñado para celebrar los 40 años de Ferrari. Con motor V8 biturbo, chasis liviano y diseño agresivo',
            imagen: '/img/f40.jpg',
            comentarios:[
                {
                    usuario: 'alan_pato',
                    texto: 'Mi auto favorito!',
                    imagenPerfil:''
                },
                {
                    usuario: 'nicopopi',
                    texto: 'Es realmente hermoso. Una obra de arte',
                    imagenPerfil:''
                },
                {
                    usuario: 'chama',
                    texto: 'Que lindo ese color rojo...',
                    imagenPerfil:''
                },
                {
                    usuario: 'leomessi',
                    texto: 'Yo tengo una de esas en barcelona',
                    imagenPerfil:''
                }
            ]
        },
        {
            nombre: 'Lamborghini Countach',
            descripcion: 'El Lamborghini Countach es un superdeportivo icónico lanzado en 1974, famoso por su diseño angular y puertas tipo tijera. Fue un símbolo de los años 80 y marcó el estilo de los Lamborghinis modernos.',
            imagen: '/img/countach.jpg',
            comentarios:[
                {
                    usuario: 'Frangomez',
                    texto: 'Ese es el auto que se uso en el Lobo de Wall Street?',
                    imagenPerfil:''
                },
                {
                    usuario: 'marcosgubi',
                    texto: 'Me gusta mas ferrar que lamborghini',
                    imagenPerfil:''
                },
                {
                    usuario: 'monchito',
                    texto: 'Lindo fierro che',
                    imagenPerfil:''
                },
                {
                    usuario: 'ramayo',
                    texto: 'Pfff. Hermoso',
                    imagenPerfil:''
                },
            ]
        },
        {
            nombre: 'Bugatti EB100',
            descripcion: 'El Bugatti EB110 es un superdeportivo de los 90 con motor V12 quadriturbo, tracción integral y carrocería de fibra de carbono. Ícono de su época, combina tecnología avanzada con diseño elegante.',
            imagen: '/img/bugattieb100.jpg',
            comentarios:[
                {
                    usuario: 'licha',
                    texto: 'Mi auto favorito de todos los tiempos. Lo deseo',
                    imagenPerfil:''
                },
                {
                    usuario: 'tomas999',
                    texto: 'Hermosa carroceria',
                    imagenPerfil:''
                },
                {
                    usuario: 'hola123',
                    texto: 'simplemente una obra de arte',
                    imagenPerfil:''
                },
                {
                    usuario: 'manugalu',
                    texto: 'A que velocidad llega?',
                    imagenPerfil:''
                },
                
            ]
        },
        {
            nombre: 'Lotus Espirit',
            descripcion: 'El Lotus Esprit es un deportivo británico de diseño angular y motor central, famoso por su ligereza y agilidad.',
            imagen: '/img/lotusespirit.jpg',
            comentarios:[
                {
                    usuario: 'Lopez',
                    texto: 'Lindo carro',
                    imagenPerfil:''
                },
                {
                    usuario: 'elperro',
                    texto: 'soy un perro',
                    imagenPerfil:''
                },
                {
                    usuario: 'tomastomytom',
                    texto: 'Hermoso. Mi abuelo tenia uno',
                    imagenPerfil:''
                },
                {
                    usuario: 'rudecindo',
                    texto: 'Me gusto mucho',
                    imagenPerfil:''
                },
            ]
        },
        {
            nombre: 'Jaguar XJ220',
            descripcion: 'El Jaguar XJ220 es un superdeportivo británico de los 90, conocido por su diseño elegante y su velocidad extrema. Con motor V6 biturbo y tracción trasera, fue uno de los autos más rápidos de su época. del producto 9',
            imagen: '/img/jaguarxj220.jpg',
            comentarios:[
                {
                    usuario: 'lucas tauzig',
                    texto: 'Que lindo auto',
                    imagenPerfil:''
                },
                {
                    usuario: 'pelon',
                    texto: 'Hermoso!',
                    imagenPerfil:''
                },
                {
                    usuario: 'el gusano',
                    texto: 'Con ese no tengo que saltar vallas, voy rapidisimo!',
                    imagenPerfil:''
                },
                {
                    usuario: 'thomas',
                    texto: 'Que pedazo de auto por dios',
                    imagenPerfil:''
                },
            ]
        },
        {
            nombre: 'BMW 507',
            descripcion: 'Es un roadster de lujo de los años ‘50, con diseño elegante y motor V8. Exclusivo y refinado, fue pensado para competir con los deportivos italianos y se convirtió en una joya codiciada por coleccionistas.',
            imagen: '/img/bmw507.jpg',
            comentarios:[
                {
                    usuario: 'The lord',
                    texto: 'Incredible car. Really amazing',
                    imagenPerfil:''
                },
                {
                    usuario: 'el chacal',
                    texto: 'que preciosidad',
                    imagenPerfil:''
                },
                {
                    usuario: 'carlitos',
                    texto: 'Esta bueno',
                    imagenPerfil:''
                },
                {
                    usuario: 'estupinian',
                    texto: 'me gusto este en particular',
                    imagenPerfil:''
                },
            ]
        },
    ]
}

module.exports = datos