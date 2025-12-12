const timelineData = [
    // --- DÉCADA 1900 ---
    {
        year: 1900,
        decade: 1900,  // <--- ¡ESTO FALTABA!
        month: 'Agosto',
        day: '8',
        title: 'Máximo Gómez regresa a Baní',
        desc: 'El Generalísimo Máximo Gómez, libertador de Cuba, es recibido con los brazos abiertos en su tierra natal, Baní.',
        img: '',
        pos: 'up'
    },
    {
        year: 1900,
        decade: 1900,
        month: '',
        day: '',
        title: 'Crisis Financiera de Jimenes',
        desc: 'El gobierno de Juan Isidro Jimenes enfrenta una grave crisis económica, recibiendo apenas ingresos de las aduanas.',
        img: '',
        pos: 'down'
    },
    {
        year: 1901,
        decade: 1900,
        month: '',
        day: '',
        title: 'Recuperación de Aduanas',
        desc: 'El Gobierno decide quitar el control de las aduanas a la empresa San Domingo Improvement Co.',
        img: '',
        pos: 'up'
    },
    {
        year: 1901,
        decade: 1900,
        month: 'Julio',
        day: '2',
        title: 'Fallece Concepción Bona',
        desc: 'Muere la patriota que bordó la primera bandera nacional.',
        img: '',
        pos: 'down'
    },
    {
        year: 1902,
        decade: 1900,
        month: 'Mayo',
        day: '2',
        title: 'Horacio derroca a Jimenes',
        desc: 'El general Horacio Vásquez desconoce el gobierno de Jimenes y se alza en armas desde Moca.',
        img: '',
        pos: 'up'
    },
    {
        year: 1902,
        decade: 1900,
        month: '',
        day: '',
        title: 'Nacen Bolos y Coludos',
        desc: 'Surgen los dos grandes bandos políticos: los "Bolos" (jimenistas) y los "Coludos" (horacistas).',
        img: '',
        pos: 'down'
    },
    {
        year: 1903,
        decade: 1900,
        month: 'Agosto',
        day: '11',
        title: 'Muerte de Hostos',
        desc: 'Fallece en Santo Domingo el insigne educador y filósofo Eugenio María de Hostos.',
        img: '',
        pos: 'up'
    },
    {
        year: 1904,
        decade: 1900,
        month: 'Febrero',
        day: '11',
        title: 'Bombardeo de Villa Duarte',
        desc: 'El crucero norteamericano "Newark" bombardea el sector de Villa Duarte.',
        img: '',
        pos: 'down'
    },
    {
        year: 1905,
        decade: 1900,
        month: '',
        day: '',
        title: 'Laudo Arbitral',
        desc: 'Un tribunal internacional fija la deuda con la Improvement, comprometiendo los ingresos aduanales.',
        img: '',
        pos: 'up'
    },
    {
        year: 1908,
        decade: 1900,
        month: 'Julio',
        day: '1',
        title: 'Ramón Cáceres Presidente',
        desc: 'Ramón Cáceres (Mon) asume la presidencia e inicia un periodo de pacificación y obras públicas.',
        img: '',
        pos: 'down'
    },
    {
        year: 1909,
        decade: 1900,
        month: '',
        day: '',
        title: 'Ferrocarril Moca-Santiago',
        desc: 'Inauguración del ramal del Ferrocarril Central Dominicano que une a Moca con Santiago.',
        img: '',
        pos: 'up'
    },

    // --- DÉCADA 1910 ---
    {
        year: 1911,
        decade: 1910, // Importante cambiar la década aquí
        month: 'Noviembre',
        day: '19',
        title: 'Magnicidio de Cáceres',
        desc: 'El presidente Ramón Cáceres es asesinado en la carretera de Haina.',
        img: '',
        pos: 'down'
    },
    {
        year: 1913,
        decade: 1910,
        month: '',
        day: '',
        title: 'Revolución del Ferrocarril',
        desc: 'Horacio Vásquez se levanta contra el gobierno de Bordas Valdez.',
        img: '',
        pos: 'up'
    },
    {
        year: 1916,
        decade: 1910,
        month: 'Mayo',
        day: '15',
        title: 'Ocupación Norteamericana',
        desc: 'Tropas de Estados Unidos desembarcan y ocupan el país iniciando 8 años de gobierno militar.',
        img: '',
        pos: 'down'
    },
    {
        year: 1916,
        decade: 1910,
        month: 'Julio',
        day: '3',
        title: 'Batalla de La Barranquita',
        desc: 'Patriotas dominicanos enfrentan heroicamente a los marines en Mao.',
        img: '',
        pos: 'up'
    },

    // --- DÉCADA 1920 ---
    {
        year: 1920,
        decade: 1920,
        month: 'Junio',
        day: '',
        title: 'Semana Patriótica',
        desc: 'Se celebra la "Semana Patriótica" para recaudar fondos exigiendo la desocupación.',
        img: '',
        pos: 'down'
    },
    {
        year: 1922,
        decade: 1920,
        month: 'Septiembre',
        day: '',
        title: 'Plan Hughes-Peynado',
        desc: 'Acuerdo que establece un gobierno provisional y la retirada de las tropas.',
        img: '',
        pos: 'up'
    },
    {
        year: 1924,
        decade: 1920,
        month: 'Julio',
        day: '12',
        title: 'Fin de la Ocupación',
        desc: 'Horacio Vásquez gana las elecciones y se restaura la soberanía nacional.',
        img: '',
        pos: 'down'
    },
    {
        year: 1927,
        decade: 1920,
        month: '',
        day: '',
        title: 'La Prolongación',
        desc: 'Vásquez extiende su mandato de 4 a 6 años, generando descontento.',
        img: '',
        pos: 'up'
    },
    {
        year: 1929,
        decade: 1920,
        month: 'Enero',
        day: '21',
        title: 'Tratado de Límites',
        desc: 'Firma del tratado que fija los límites fronterizos con Haití.',
        img: '',
        pos: 'down'
    },

    // --- DÉCADA 1930 ---
    {
        year: 1930,
        decade: 1930,
        month: 'Febrero',
        day: '23',
        title: 'Golpe de Estado',
        desc: 'Movimiento cívico-militar derroca a Horacio Vásquez; ascenso de Trujillo.',
        img: '',
        pos: 'up'
    },
    {
        year: 1930,
        decade: 1930,
        month: 'Septiembre',
        day: '3',
        title: 'Ciclón San Zenón',
        desc: 'Un devastador huracán destruye la ciudad de Santo Domingo.',
        img: '',
        pos: 'down'
    },
    {
        year: 1936,
        decade: 1930,
        month: 'Enero',
        day: '11',
        title: 'Ciudad Trujillo',
        desc: 'Se cambia el nombre de Santo Domingo por Ciudad Trujillo.',
        img: '',
        pos: 'up'
    },
    {
        year: 1937,
        decade: 1930,
        month: 'Octubre',
        day: '',
        title: 'Matanza de Haitianos',
        desc: 'Masacre conocida como "El Corte" en la zona fronteriza.',
        img: '',
        pos: 'down'
    }
];