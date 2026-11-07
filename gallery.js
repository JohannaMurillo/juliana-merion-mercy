(() => {
  'use strict';
  // The family confirmed that all chapel images show the same fifth-grade altar server graduation.
  // The Mass celebrated a year of weekly missionary teaching for children in lower grades.
  // Both music photographs show the fifth-grade music class final performance of Colombia Tierra Querida.
  // The Italy photograph and video show a third-grade English class country-and-cuisine project.
  // The candlelight video is a second-grade message to Sister Carmen Ligia.
  // Sport activity details remain to be supplied by the family.
  // First Communion photographs belong to a separate fourth-grade celebration.
  const memories = [
    {"id": "student-month", "type": "photo", "category": "school", "album": "blaine-recognition", "file": "blaine-student-month.webp", "width": 1350, "height": 1800, "portrait": true, "en": {"title": "Student of the Month", "description": "", "alt": "Juliana’s Student of the Month display at Blaine School."}, "es": {"title": "Estudiante del mes", "description": "", "alt": "Cartel de Juliana como estudiante del mes en Blaine."}},
    {"id": "perfect-attendance", "type": "photo", "category": "school", "album": "blaine-recognition", "file": "blaine-attendance.webp", "width": 1350, "height": 1800, "portrait": true, "en": {"title": "Perfect attendance", "description": "", "alt": "Juliana holding her certificate for perfect attendance and no lateness in September."}, "es": {"title": "Asistencia perfecta", "description": "", "alt": "Juliana con su certificado de asistencia perfecta y ninguna tardanza durante septiembre."}},
    {"id": "reading-growth", "type": "photo", "category": "school", "album": "blaine-reading", "file": "blaine-reading-growth.webp", "width": 1800, "height": 1350, "portrait": false, "en": {"title": "Reading growth recognition", "description": "", "alt": "Blaine certificate recognizing Juliana’s STAR Reading growth percentile of 72, awarded December 22, 2025."}, "es": {"title": "Reconocimiento al progreso en lectura", "description": "", "alt": "Certificado de Blaine por el progreso de Juliana en STAR Reading, con percentil de crecimiento 72, entregado el 22 de diciembre de 2025."}},
    {id:'blaine-greenfield-match',type:'video',category:'sport',album:'blaine-volleyball',
      file:'volleyball-blaine-greenfield.mp4',poster:'volleyball-blaine-greenfield.webp',captions:false,
      en:{title:'Five serves, five points',description:'Juliana on a five-point serving run against Albert M. Greenfield School.',alt:'Blaine and Albert M. Greenfield School playing volleyball in the gym.'},
      es:{title:'Cinco saques, cinco puntos',description:'Juliana en una racha de cinco puntos al saque contra Albert M. Greenfield School.',alt:'Blaine y Albert M. Greenfield School jugando voleibol en el gimnasio.'}},
    {"id": "temple-camp", "type": "photo", "category": "sport", "album": "blaine-volleyball", "file": "temple-volleyball-camp.webp", "width": 1800, "height": 1350, "portrait": false, "en": {"title": "Summer camp at Temple", "description": "", "alt": "Volleyball participants and coaches gathered beside the net at Temple."}, "es": {"title": "Campamento de verano en Temple", "description": "", "alt": "Participantes y entrenadores de voleibol junto a la red en Temple."}},
    {"id": "temple-portrait", "type": "photo", "category": "sport", "album": "blaine-volleyball", "file": "temple-volleyball-portrait.webp", "width": 1350, "height": 1800, "portrait": true, "en": {"title": "Her first year at camp", "description": "", "alt": "Juliana holding a volleyball outside a Temple University building, wearing her volleyball camp shirt."}, "es": {"title": "Su primer año en el campamento", "description": "", "alt": "Juliana con un balón frente a un edificio de Temple University, con la camiseta de su campamento de voleibol."}},
    {"id": "starlings", "type": "photo", "category": "sport", "album": "blaine-volleyball", "file": "philadelphia-starlings.webp", "width": 1800, "height": 1350, "portrait": false, "en": {"title": "Summer volleyball with The Philadelphia Starlings", "description": "", "alt": "An outdoor volleyball session with The Philadelphia Starlings."}, "es": {"title": "Voleibol de verano con The Philadelphia Starlings", "description": "", "alt": "Una sesión de voleibol al aire libre con The Philadelphia Starlings."}},
    {"id": "communion-1", "type": "photo", "category": "faith", "album": "first-communion", "file": "first-communion-01.webp", "width": 1600, "height": 1200, "en": {"title": "At the ceremony", "description": "", "alt": "Juliana in her white First Communion dress, kneeling beside a decorated chair."}, "es": {"title": "En la ceremonia", "description": "", "alt": "Juliana con su vestido blanco de Primera Comunión, arrodillada junto a una silla decorada."}},
    {"id": "communion-2", "type": "photo", "category": "faith", "album": "first-communion", "file": "first-communion-02.webp", "width": 1800, "height": 1013, "en": {"title": "Receiving Communion", "description": "", "alt": "Juliana receiving Communion during the celebration."}, "es": {"title": "Recibiendo la comunión", "description": "", "alt": "Juliana recibiendo la comunión durante la celebración."}},
    {"id": "communion-3", "type": "photo", "category": "faith", "album": "first-communion", "file": "first-communion-03.webp", "width": 1800, "height": 1350, "en": {"title": "During the Mass", "description": "", "alt": "Juliana and other children gathered during the First Communion Mass."}, "es": {"title": "Durante la misa", "description": "", "alt": "Juliana y otros niños reunidos durante la misa de Primera Comunión."}},
    {"id": "communion-4", "type": "photo", "category": "faith", "album": "first-communion", "file": "first-communion-04.webp", "width": 1800, "height": 1350, "en": {"title": "With the group", "description": "", "alt": "Children in white gathered together in front of blue and white curtains."}, "es": {"title": "Con el grupo", "description": "", "alt": "Niños vestidos de blanco reunidos frente a cortinas azules y blancas."}},
    {"id": "communion-5", "type": "photo", "category": "faith", "album": "first-communion", "file": "first-communion-05.webp", "width": 1800, "height": 1350, "en": {"title": "The celebration together", "description": "", "alt": "A wide view of the First Communion group and floral decorations."}, "es": {"title": "La celebración en comunidad", "description": "", "alt": "Una vista del grupo de Primera Comunión y los arreglos florales."}},
    {"id": "communion-6", "type": "photo", "category": "faith", "album": "first-communion", "file": "first-communion-06.webp", "width": 1350, "height": 1800, "en": {"title": "A portrait from the day", "description": "", "alt": "Juliana seated in her white dress beside a flower arrangement."}, "es": {"title": "Un retrato de ese día", "description": "", "alt": "Juliana sentada con su vestido blanco junto a un arreglo floral."}, "portrait": true},
    {"id": "communion-7", "type": "photo", "category": "faith", "album": "first-communion", "file": "first-communion-07.webp", "width": 1350, "height": 1800, "en": {"title": "In the garden", "description": "", "alt": "Juliana resting her hands on a wooden kneeler in a garden."}, "es": {"title": "En el jardín", "description": "", "alt": "Juliana apoyando las manos en un reclinatorio de madera en un jardín."}, "portrait": true},
    {"id": "communion-8", "type": "photo", "category": "faith", "album": "first-communion", "file": "first-communion-08.webp", "width": 1350, "height": 1800, "en": {"title": "A celebration to remember", "description": "", "alt": "Juliana beside a balloon arch and First Communion decorations."}, "es": {"title": "Un recuerdo de la celebración", "description": "", "alt": "Juliana junto a un arco de globos y decoraciones de Primera Comunión."}, "portrait": true},
    {"id": "communion-9", "type": "photo", "category": "faith", "album": "first-communion", "file": "first-communion-09.webp", "width": 1350, "height": 1800, "en": {"title": "With her candle", "description": "", "alt": "Juliana holding a decorated candle during her First Communion celebration."}, "es": {"title": "Con su vela", "description": "", "alt": "Juliana sosteniendo una vela decorada durante su Primera Comunión."}, "portrait": true},

    {id:'school-planet-video',type:'youtube',category:'school',album:'planet-care-contest',youtubeId:'9qH7MHTsTxw',
      en:{title:'School public speaking contest',description:'In first grade, Juliana won a school public speaking contest with a presentation on caring for the planet: responsible water use, planting, and recycling.',alt:'Juliana’s first-grade presentation about caring for the planet, published by her school.'},
      es:{title:'Concurso escolar de oratoria',description:'En primer grado, Juliana ganó un concurso escolar de oratoria con una presentación sobre el cuidado del planeta: el uso responsable del agua, la siembra y el reciclaje.',alt:'Presentación de Juliana en primer grado sobre el cuidado del planeta, publicada por su colegio.'}},
    {id:'school-italy-photo',type:'photo',category:'school',album:'italy-english-project',file:'italy-pizza-project.webp',portrait:true,width:1200,height:1600,
      en:{title:'Presenting pizza',description:'Juliana with the pizza she presented for a third-grade English class project about Italy and its cuisine.',alt:'Juliana wearing a chef’s hat and apron, holding an open pizza box beside a display about Italian food.'},
      es:{title:'Una exposición sobre la pizza',description:'Juliana con la pizza que presentó en una exposición de inglés de tercer grado sobre Italia y su gastronomía.',alt:'Juliana con gorro de chef y delantal, sosteniendo una caja de pizza abierta junto a una cartelera sobre comida italiana.'}},
    {id:'school-italy-video',type:'video',category:'school',album:'italy-english-project',file:'italy-pizza-presentation.mp4',poster:'italy-pizza-presentation-poster.webp',
      en:{title:'Her classroom presentation',description:'A video of Juliana’s presentation about pizza during the English class project on Italy and its cuisine.',alt:'Juliana presenting pizza to other children at a classroom display about Italy.'},
      es:{title:'Su exposición en clase',description:'Un video de la exposición de Juliana sobre la pizza durante el proyecto de inglés de Italia y su gastronomía.',alt:'Juliana presentando la pizza a otros niños junto a una exposición escolar sobre Italia.'}},
    {id:'faith-1',type:'photo',category:'faith',file:'faith-gathering-01.webp',
      en:{title:'At the celebration',description:'Students and a religious sister gathered for the graduation celebration.',alt:'Students with a religious sister at the fifth-grade altar server graduation celebration.'},
      es:{title:'El día de la celebración',description:'Estudiantes y una religiosa reunidos para la celebración.',alt:'Estudiantes con una religiosa durante la celebración de graduación de acólitos de quinto grado.'}},
    {id:'music-1',type:'photo',category:'music',file:'music-presentation-01.webp',
      en:{title:'The percussion ensemble',description:'Students performing together on percussion instruments.',alt:'Students playing percussion instruments during the fifth-grade music class final performance.'},
      es:{title:'El grupo de percusión',description:'Estudiantes interpretando juntos instrumentos de percusión.',alt:'Estudiantes tocando instrumentos de percusión en la presentación final de música de quinto grado.'}},
    {id:'faith-2',type:'photo',category:'faith',file:'faith-gathering-02.webp',
      en:{title:'Juliana’s speech at the graduation Mass',description:'Juliana encouraged her classmates to carry their faith forward and continue serving others as missionaries.',alt:'Juliana speaking during the fifth-grade altar server graduation Mass.'},
      es:{title:'El discurso de Juliana en la misa de graduación',description:'Juliana animó a sus compañeros a seguir viviendo su fe y sirviendo a los demás como misioneros.',alt:'Juliana hablando durante la misa de graduación de acólitos de quinto grado.'}},
    {id:'faith-3',type:'photo',category:'faith',file:'faith-gathering-03.webp',
      en:{title:'Students, families, and community',description:'A wider view of the chapel gathering.',alt:'The chapel community gathered for the fifth-grade altar server graduation.'},
      es:{title:'Estudiantes, familias y comunidad',description:'Una vista de la comunidad reunida en la capilla.',alt:'La comunidad reunida en la capilla para la graduación de acólitos de quinto grado.'}},
    {id:'family-1',type:'video',category:'faith',album:'velitas-message',file:'family-christmas.mp4',poster:'family-christmas-poster.webp',
      en:{title:'Message to Sister Carmen Ligia Ciro Montoya',description:'During Día de las Velitas, Juliana thanked Sister Carmen Ligia Ciro Montoya, a senior sister at La Presentación in Colombia, for supporting the community and wished her a Merry Christmas.',alt:'Juliana holding a candle beside Christmas decorations during her message.'},
      es:{title:'Mensaje a la hermana Carmen Ligia Ciro Montoya',description:'Juliana agradeció a la hermana Carmen Ligia Ciro Montoya, hermana mayor de La Presentación en Colombia, destacando su apoyo a la comunidad, y le deseó una feliz Navidad.',alt:'Juliana sosteniendo una vela junto a decoraciones de Navidad durante su mensaje.'}},
    {id:'faith-4',type:'photo',category:'faith',file:'faith-gathering-04.webp',
      en:{title:'A moment at the altar',description:'A student beside the priest during the Mass.',alt:'A student beside the priest during the altar server graduation Mass.'},
      es:{title:'Un momento en el altar',description:'Una estudiante junto al sacerdote durante la misa.',alt:'Una estudiante junto al sacerdote durante la misa de graduación de acólitos.'}},
    {id:'faith-5',type:'photo',category:'faith',file:'faith-gathering-05.webp',
      en:{title:'Together at the ceremony',description:'Students gathered near the priest during the celebration.',alt:'Students gathered near the priest at their altar server graduation celebration.'},
      es:{title:'Juntos en la ceremonia',description:'Estudiantes reunidos junto al sacerdote durante la celebración.',alt:'Estudiantes reunidos junto al sacerdote durante su graduación de acólitos.'}},
    {id:'music-2',type:'photo',category:'music',file:'music-presentation-02.webp',
      en:{title:'The class on stage',description:'A wider view of the group performance.',alt:'The fifth-grade music class together on stage during their final performance of Colombia Tierra Querida.'},
      es:{title:'La clase en el escenario',description:'Una vista de la interpretación grupal.',alt:'La clase de música de quinto grado en el escenario durante su presentación final de Colombia Tierra Querida.'}},
    {id:'faith-video',type:'video',category:'faith',file:'school-celebration.mp4',poster:'school-celebration-poster.webp',
      en:{title:'Scenes from the Mass',description:'The graduation celebration, on video.',alt:'Students and families attending the altar server graduation Mass.'},
      es:{title:'Escenas de la misa',description:'La celebración de graduación, en video.',alt:'Estudiantes y familias durante la misa de graduación de acólitos.'}}
  ];
  const labels = {
    en:{school:'School projects',faith:'Faith & community',music:'Music',sport:'Sport',family:'Family',photo:'Photograph',video:'Video',open:'View photograph',previous:'Previous photograph',next:'Next photograph',filters:'Filter memories',carousel:'carousel',slide:'slide',previousMemory:'Previous memory',nextMemory:'Next memory',chooseMemory:'Choose a memory',goToMemory:'Go to memory'},
    es:{school:'Proyectos escolares',faith:'Fe y comunidad',music:'Música',sport:'Deporte',family:'Familia',photo:'Fotografía',video:'Video',open:'Ver fotografía',previous:'Fotografía anterior',next:'Fotografía siguiente',filters:'Filtrar recuerdos',carousel:'carrusel',slide:'diapositiva',previousMemory:'Recuerdo anterior',nextMemory:'Recuerdo siguiente',chooseMemory:'Elegir un recuerdo',goToMemory:'Ir al recuerdo'}
  };
  const altarServerAlbum = {
    en:{eyebrow:'Faith & service · Grade 5',title:'Faith in action',description:'In fifth grade, Juliana and her classmates shared their faith with younger students. Every week for a year, they spoke about God and His commandments and told stories of faith. At their altar server graduation Mass, Juliana gave a speech encouraging her classmates to carry their faith forward and continue serving others as missionaries. During the Mass, she also offered grapes as a way to give thanks.'},
    es:{eyebrow:'Fe y servicio · Quinto grado',title:'La fe en acción',description:'En quinto grado, Juliana y sus compañeros compartieron su fe con los niños de grados inferiores. Cada semana, durante un año, les hablaron de Dios y sus mandamientos y les contaron historias de fe. En la misa de graduación de acólitos, Juliana dio un discurso en el que animó a sus compañeros a seguir viviendo su fe y sirviendo a los demás como misioneros. Durante la misa también presentó las uvas como ofrenda de agradecimiento.'}
  };
  const musicClassAlbum = {
    en:{eyebrow:'Music · Grade 5',title:'Colombia Tierra Querida',description:'Juliana and her classmates performed this Colombian song for their final music class presentation.'},
    es:{eyebrow:'Música · Quinto grado',title:'Colombia Tierra Querida',description:'Juliana y sus compañeros interpretaron esta canción colombiana en la presentación final de su clase de música.'}
  };
  const eventAlbums = [
    {"key": "blaine-recognition", "grade": 7, "category": "school", "id": "blaine-recognition", "headingId": "blaine-recognition-title", "copy": {"en": {"eyebrow": "Blaine · Grade 7", "title": "Recognized for her commitment", "description": "Named Student of the Month in seventh grade, Juliana was praised for her effort, participation, teamwork, and willingness to ask for help and take on challenges."}, "es": {"eyebrow": "Blaine · Séptimo grado", "title": "Un compromiso que se reconoce", "description": "Elegida estudiante del mes en séptimo grado, Juliana fue reconocida por su esfuerzo, participación, trabajo en equipo y disposición para pedir ayuda y asumir retos."}}},
    {"key": "blaine-reading", "grade": 7, "category": "school", "id": "blaine-reading", "headingId": "blaine-reading-title", "copy": {"en": {"eyebrow": "Blaine · Grade 7", "title": "Growing as a reader", "description": "On December 22, 2025, Blaine recognized her progress in STAR Reading. Her Student Growth Percentile of 72 reflects greater growth than approximately 72% of students in the same grade with similar prior scores."}, "es": {"eyebrow": "Blaine · Séptimo grado", "title": "Avanzando en lectura", "description": "El 22 de diciembre de 2025, Blaine reconoció su progreso en STAR Reading. Su percentil de crecimiento de 72 refleja un avance mayor que el de aproximadamente el 72 % de estudiantes del mismo grado con resultados anteriores similares."}}},
    {"key": "blaine-volleyball", "grade": 6, "category": "sport", "id": "blaine-volleyball", "headingId": "blaine-volleyball-title", "copy": {"en": {"eyebrow": "Sport · During her years at Blaine", "title": "Finding her place in volleyball", "description": "Juliana played with the Blaine volleyball team in school district tournaments. In the match against Albert M. Greenfield School, she served five times in a row, helping Blaine win a point on each serve. Her summer volleyball activities included Temple’s camp and a summer program with The Philadelphia Starlings."}, "es": {"eyebrow": "Deporte · Durante su etapa en Blaine", "title": "Un espacio para crecer en el voleibol", "description": "Juliana jugó con el equipo de voleibol de Blaine en los torneos del distrito escolar. En el partido contra Albert M. Greenfield School, encadenó cinco saques y su equipo ganó un punto en cada uno. En verano, Juliana participó en el campamento de voleibol de Temple y en el programa de verano de The Philadelphia Starlings."}}},
    {key:'planet-care-contest',grade:1,category:'school',id:'planet-care-contest',headingId:'planet-contest-album-title',copy:{
      en:{eyebrow:'Public speaking · Grade 1',title:'A voice for the planet',description:'Juliana won her school’s speaking contest with a message about responsible water use, planting, and recycling.'},
      es:{eyebrow:'Oratoria · Primer grado',title:'Una voz por el planeta',description:'Juliana ganó el concurso de oratoria de su colegio con un mensaje sobre el uso responsable del agua, la siembra y el reciclaje.'}
    }},
    {key:'velitas-message',grade:2,category:'faith',id:'velitas-message',headingId:'velitas-album-title',copy:{
      en:{eyebrow:'Faith & community · Grade 2',title:'Candlelight & gratitude',description:'During Día de las Velitas, Juliana thanked Sister Carmen Ligia Ciro Montoya, a senior sister at La Presentación in Colombia, for supporting the community and wished her a Merry Christmas.'},
      es:{eyebrow:'Fe y comunidad · Segundo grado',title:'Noche de las Velitas',description:'Juliana agradeció a la hermana Carmen Ligia Ciro Montoya, hermana mayor de La Presentación en Colombia, destacando su apoyo a la comunidad, y le deseó una feliz Navidad.'}
    }},
    {key:'italy-english-project',grade:3,category:'school',id:'italy-english-project',headingId:'italy-project-album-title',copy:{
      en:{eyebrow:'English class · Grade 3',title:'Italy in the classroom',description:'For a third-grade project on countries and their cuisines, Juliana’s class represented Italy. Students from every grade visited their booth, where Juliana explained the origins of pizza in English and offered samples for visitors to try. The exhibition gave her a chance to practice speaking English with students across her school.'},
      es:{eyebrow:'Clase de inglés · Tercer grado',title:'Italia en el aula',description:'En un proyecto de tercer grado sobre países y su gastronomía, la clase de Juliana representó a Italia. Estudiantes de todos los grados visitaron su estand, donde Juliana explicó en inglés el origen de la pizza y ofreció porciones para que la probaran. La exposición le dio la oportunidad de practicar el inglés con estudiantes de toda la escuela.'}
    }},
    {key:'first-communion',grade:4,category:'faith',id:'first-communion',headingId:'first-communion-album-title',copy:{
      en:{eyebrow:'Faith · Grade 4',title:'First Communion',description:'In fourth grade, Juliana attended preparation for her First Communion. It was a time to learn the meaning of the Eucharist and prepare to receive Jesus for the first time. That day marked an important step on the journey of faith she began at La Presentación.'},
      es:{eyebrow:'Fe · Cuarto grado',title:'Primera Comunión',description:'En cuarto grado, Juliana asistió a la preparación para su Primera Comunión. Fue un tiempo para aprender el sentido de la Eucaristía y prepararse para recibir a Jesús por primera vez. Ese día celebró un paso importante en el camino de fe que comenzó en La Presentación.'}
    }},
    {key:'faith',grade:5,category:'faith',id:'altar-server-graduation',headingId:'altar-server-album-title',copy:altarServerAlbum},
    {key:'music',grade:5,category:'music',id:'music-final-performance',headingId:'music-final-album-title',copy:musicClassAlbum}
  ];
  const gradeNames = {
    en:['','First grade','Second grade','Third grade','Fourth grade','Fifth grade','Sixth grade','Seventh grade','Eighth grade'],
    es:['','Primer grado','Segundo grado','Tercer grado','Cuarto grado','Quinto grado','Sexto grado','Séptimo grado','Octavo grado']
  };
  const grid = document.querySelector('#gallery-grid');
  const dialog = document.querySelector('#photo-dialog');
  const dialogImage = document.querySelector('#dialog-image');
  const status = document.querySelector('#gallery-status');
  let selectedCategory = 'all';
  let activePhotoId = null;
  let activePhotoGroup = null;
  const albumPositions = new Map();
  const language = () => document.documentElement.lang === 'es' ? 'es' : 'en';
  const visibleMemories = () => memories.filter(item => selectedCategory === 'all' || item.category === selectedCategory);
  const visiblePhotos = () => visibleMemories().filter(item => item.type === 'photo' && (!activePhotoGroup || (item.album || item.category) === activePhotoGroup));
  const asset = name => `./media/${name}`;
  function renderGallery() {
    const lang = language(), words = labels[lang], visible = visibleMemories();
    grid.querySelectorAll('video').forEach(video => video.pause());
    grid.replaceChildren();
    const photoCount = visible.filter(item => item.type === 'photo').length;
    const videoCount = visible.length - photoCount;
    status.textContent = lang === 'es'
      ? `${photoCount} ${photoCount === 1 ? 'foto' : 'fotos'} · ${videoCount} ${videoCount === 1 ? 'video' : 'videos'}`
      : `${photoCount} ${photoCount === 1 ? 'photograph' : 'photographs'} · ${videoCount} ${videoCount === 1 ? 'video' : 'videos'}`;
    document.querySelector('.gallery-filters').setAttribute('aria-label', words.filters);
    document.querySelectorAll('[data-filter]').forEach(button => {
      const count = button.dataset.filter === 'all' ? memories.length : memories.filter(item => item.category === button.dataset.filter).length;
      button.querySelector('small').textContent = count;
      button.hidden = count === 0;
    });
    const years = new Map();
    function schoolYear(grade) {
      if(grade === 7) grade = 6;
      if(years.has(grade)) return years.get(grade);
      const year = document.createElement('section');year.className = 'timeline-group';year.dataset.grade = grade;
      year.setAttribute('aria-labelledby',`timeline-grade-${grade}`);
      const header = document.createElement('div');header.className = 'timeline-grade';
      const marker = document.createElement('span');marker.className = 'grade-node';marker.textContent = grade === 6 ? '6–7' : grade;marker.setAttribute('aria-hidden','true');
      const heading = document.createElement('h3');heading.id = `timeline-grade-${grade}`;heading.textContent = grade === 6 ? (lang === 'es' ? 'Sexto y séptimo grado · Blaine' : 'Sixth & seventh grade · Blaine') : gradeNames[lang][grade];
      header.append(marker,heading);
      if(grade === 8) {const today = document.createElement('span');today.className = 'timeline-today';today.textContent = lang === 'es' ? 'Hoy' : 'Today';header.append(today);}
      year.append(header);grid.append(year);years.set(grade,year);return year;
    }
    const albumGrids = new Map();
    const albumMemories = new Map();
    for(const event of eventAlbums) {
      const items = visible.filter(item => (item.album || item.category) === event.key);
      if(!items.length) continue;
      albumMemories.set(event.key,items);
      const albumCopy = event.copy[lang];
      const album = document.createElement('section');
      album.className = 'memory-album';
      album.dataset.album = event.id;
      album.setAttribute('aria-labelledby',event.headingId);
      const header = document.createElement('div');
      header.className = 'album-header';
      const heading = document.createElement('div');
      const eyebrow = document.createElement('p');
      eyebrow.className = 'album-eyebrow';eyebrow.textContent = event.grade >= 6 ? albumCopy.eyebrow : albumCopy.eyebrow.split(' · ')[0];
      const title = document.createElement('h4');
      title.id = event.headingId;title.textContent = albumCopy.title;
      const count = document.createElement('p');
      count.className = 'album-count';
      const photoTotal = items.filter(item => item.type === 'photo').length;
      const videoTotal = items.length-photoTotal;
      const counts = [];
      if(photoTotal) counts.push(lang === 'es' ? `${photoTotal} ${photoTotal === 1 ? 'foto' : 'fotos'}` : `${photoTotal} ${photoTotal === 1 ? 'photograph' : 'photographs'}`);
      if(videoTotal) counts.push(`${videoTotal} ${videoTotal === 1 ? 'video' : 'videos'}`);
      count.textContent = counts.join(' · ');
      heading.append(eyebrow,title);header.append(heading,count);
      const description = document.createElement('p');
      description.className = 'album-description';description.textContent = albumCopy.description;
      const albumGrid = document.createElement('div');
      albumGrid.className = items.length === 1 ? 'album-grid album-grid-single' : (event.category === 'school' ? 'album-grid album-grid-school' : (items.length === 2 ? 'album-grid album-grid-pair' : 'album-grid'));
      albumGrids.set(event.key,albumGrid);
      album.append(header,description,albumGrid);
      schoolYear(event.grade).append(album);
    }
    for (const item of visible) {
      const text = item[lang], figure = document.createElement('figure');
      const albumKey = item.album || item.category;
      figure.className = 'portfolio-item media-card';
      figure.dataset.type = item.type;
      figure.dataset.memoryId = item.id;
      let media;
      if (item.type === 'photo') {
        media = document.createElement('button');
        media.type = 'button';media.className = item.portrait ? 'media-thumbnail media-portrait' : 'media-thumbnail';
        media.setAttribute('aria-label', `${words.open}: ${text.title}`);
        media.setAttribute('aria-haspopup','dialog');
        const image = document.createElement('img');
        image.src = asset(item.file);image.alt = text.alt;image.loading = 'lazy';image.decoding = 'async';image.width = item.width || 1800;image.height = item.height || 1013;
        const expand = document.createElement('span');
        expand.className = 'photo-open-icon';expand.textContent = '↗';expand.setAttribute('aria-hidden','true');
        media.append(image,expand);
        media.addEventListener('click', () => openPhoto(item.id));
      } else if(item.type === 'youtube') {
        media = document.createElement('div');media.className = 'youtube-media';
        const frame = document.createElement('div');frame.className = 'video-frame';
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube-nocookie.com/embed/${item.youtubeId}?rel=0&hl=${lang}`;
        iframe.title = text.title;
        iframe.loading = 'lazy';
        iframe.allow = 'encrypted-media; picture-in-picture; fullscreen';
        iframe.allowFullscreen = true;
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
        frame.append(iframe);
        const sourceLink = document.createElement('a');
        sourceLink.href = `https://www.youtube.com/watch?v=${item.youtubeId}`;
        sourceLink.target = '_blank';sourceLink.rel = 'noopener noreferrer';
        sourceLink.className = 'youtube-source-link';
        sourceLink.textContent = lang === 'es' ? 'Ver en YouTube ↗' : 'Watch on YouTube ↗';
        media.append(frame,sourceLink);
      } else {
        media = document.createElement('div');media.className = 'video-frame';
        const video = document.createElement('video');
        video.controls = true;video.playsInline = true;video.preload = 'none';video.poster = asset(item.poster);
        video.setAttribute('aria-label', text.description ? `${text.title}. ${text.description}` : text.title);
        const source = document.createElement('source');source.src = asset(item.file);source.type = 'video/mp4';
        const fallback = document.createElement('a');fallback.href = asset(item.file);fallback.textContent = lang === 'es' ? 'Abrir el video' : 'Open video';
        video.append(source,fallback);
        video.addEventListener('play', () => grid.querySelectorAll('video').forEach(other => {if(other !== video) other.pause();}));
        media.append(video);
        if(item.captions !== false) {
          const track = document.createElement('track');
          track.kind = 'subtitles';track.src = asset(item.file.replace('.mp4','-en.vtt'));
          track.srclang = 'en';track.label = 'English';track.default = lang === 'en';
          video.insertBefore(track,fallback);
          const captions = document.createElement('button');captions.type = 'button';captions.className = 'captions-toggle';
          captions.textContent = lang === 'es' ? 'CC · Subtítulos en inglés' : 'CC · English subtitles';
          let manuallyToggled = false;
          let playbackStarted = false;
          const setCaptions = enabled => {
            track.track.mode = enabled ? 'showing' : 'disabled';
            captions.setAttribute('aria-pressed', String(enabled));
          };
          setCaptions(lang === 'en');
          captions.addEventListener('click', () => {
            manuallyToggled = true;
            setCaptions(captions.getAttribute('aria-pressed') !== 'true');
          });
          video.addEventListener('play', () => {
            if (!manuallyToggled) setCaptions(lang === 'en');
            playbackStarted = true;
          }, { once: true });
          video.textTracks.addEventListener('change', () => {
            if (playbackStarted) captions.setAttribute('aria-pressed', String(track.track.mode === 'showing'));
          });
          figure.append(captions);
        }
      }
      const figcaption = document.createElement('figcaption');
      const copy = document.createElement('div'), category = document.createElement('p');
      category.className = 'memory-category';category.textContent = `${words[item.category]} · ${words[item.type === 'youtube' ? 'video' : item.type]}`;
      const title = document.createElement(albumGrids.has(albumKey) ? 'h5' : 'h4');title.className = 'memory-caption-title';title.textContent = text.title;
      const description = document.createElement('p');description.textContent = text.description;
      if(!albumGrids.has(albumKey)) copy.append(category);
      copy.append(title);
      if(text.description && !albumGrids.has(albumKey)) copy.append(description);
      figcaption.append(copy);figure.prepend(media);
      if(item.id !== 'perfect-attendance' && albumMemories.get(albumKey).length > 1) figure.append(figcaption);
      albumGrids.get(albumKey).append(figure);
    }
    for(const [key, albumGrid] of albumGrids) {
      const items = albumMemories.get(key);
      if(items.length > 1) makeCarousel(albumGrid,items,key,lang);
    }
    if(selectedCategory === 'all') {
      for(const grade of [6,8]) {
        const year = schoolYear(grade);year.classList.add('timeline-group-education');
        const note = document.createElement('div');note.className = 'timeline-school-note';
        const school = document.createElement('p');school.textContent = grade < 8 ? 'Blaine School' : 'Spring Garden School';
        const place = document.createElement('span');place.textContent = lang === 'es' ? 'Filadelfia, Estados Unidos' : 'Philadelphia, United States';
        const details = document.createElement('div');
        details.append(school);
        if(grade === 8) {
          const nextChapter = document.createElement('p');
          nextChapter.className = 'timeline-school-story';
          nextChapter.textContent = lang === 'es'
            ? 'Aquí se sigue escribiendo su historia, con nuevos aprendizajes y la ilusión de la etapa que está por comenzar.'
            : 'Here, her story continues to unfold as she learns new things and looks forward to the chapter ahead.';
          details.append(nextChapter);
        }
        note.append(details,place);year.insertBefore(note,year.children[1] || null);
      }
    }
    [...years.entries()].sort((a,b) => a[0]-b[0]).forEach(([,year]) => grid.append(year));
  }
  function makeCarousel(carousel,items,key,lang) {
    const words = labels[lang], slides = [...carousel.children];
    carousel.className = 'album-carousel';
    if(items.some(item => item.portrait)) carousel.classList.add('album-carousel-portrait');
    carousel.setAttribute('role','region');
    carousel.setAttribute('aria-roledescription',words.carousel);
    carousel.setAttribute('aria-labelledby',eventAlbums.find(event => event.key === key).headingId);
    const stage = document.createElement('div');stage.className = 'carousel-stage';
    slides.forEach((slide,index) => {
      slide.classList.add('carousel-slide');
      slide.id = `${key}-slide-${index+1}`;
      slide.setAttribute('role','group');
      slide.setAttribute('aria-roledescription',words.slide);
      slide.setAttribute('aria-label',`${index+1} / ${items.length}`);
      stage.append(slide);
    });
    const position = document.createElement('span');
    position.className = 'carousel-position';position.setAttribute('aria-hidden','true');
    const dots = document.createElement('div');
    dots.className = 'carousel-dots';dots.setAttribute('role','group');dots.setAttribute('aria-label',words.chooseMemory);
    const dotButtons = items.map((item,index) => {
      const button = document.createElement('button');
      button.type = 'button';button.className = 'carousel-dot';
      button.setAttribute('aria-label',`${words.goToMemory} ${index+1}: ${item[lang].title}`);
      button.setAttribute('aria-controls',slides[index].id);
      const dot = document.createElement('span');dot.setAttribute('aria-hidden','true');button.append(dot);
      button.addEventListener('click',() => showSlide(index));dots.append(button);
      return button;
    });
    const announcement = document.createElement('p');
    announcement.className = 'carousel-announcement';announcement.setAttribute('role','status');announcement.setAttribute('aria-live','polite');announcement.setAttribute('aria-atomic','true');
    const footer = document.createElement('div');footer.className = 'carousel-footer';
    const hint = document.createElement('p');hint.className = 'carousel-hint';hint.textContent = lang === 'es' ? 'Desliza para ver más' : 'Swipe to explore';
    footer.append(position,dots,hint);
    carousel.append(stage,footer,announcement);
    let index = Math.max(0,items.findIndex(item => item.id === albumPositions.get(key)));
    function showSlide(requestedIndex) {
      const nextIndex = (requestedIndex+items.length)%items.length;
      if(nextIndex !== index && slides[index].contains(document.activeElement)) dotButtons[nextIndex].focus({preventScroll:true});
      slides.forEach((slide,slideIndex) => {
        const hidden = slideIndex !== nextIndex;
        if(hidden) slide.querySelectorAll('video').forEach(video => video.pause());
        slide.hidden = hidden;
      });
      index = nextIndex;albumPositions.set(key,items[index].id);
      position.textContent = `${index+1} / ${items.length}`;
      dotButtons.forEach((button,dotIndex) => button.setAttribute('aria-current',String(dotIndex === index)));
      announcement.textContent = `${index+1} ${lang === 'es' ? 'de' : 'of'} ${items.length}: ${items[index][lang].title}`;
    }
    carousel.addEventListener('keydown',event => {
      if(event.target.closest('video,iframe') || event.altKey || event.ctrlKey || event.metaKey) return;
      if(event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();showSlide(index+(event.key === 'ArrowRight' ? 1 : -1));
      }
    });
    let touchStart = null, suppressClickUntil = 0;
    carousel.addEventListener('touchstart',event => {
      touchStart = event.touches.length === 1 && !event.target.closest('video,iframe,.carousel-dot')
        ? {x:event.touches[0].clientX,y:event.touches[0].clientY} : null;
    },{passive:true});
    carousel.addEventListener('touchend',event => {
      if(!touchStart || !event.changedTouches.length) return;
      const dx = event.changedTouches[0].clientX-touchStart.x, dy = event.changedTouches[0].clientY-touchStart.y;
      touchStart = null;
      if(Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)*1.3) {
        suppressClickUntil = performance.now()+450;showSlide(index+(dx < 0 ? 1 : -1));
      }
    },{passive:true});
    carousel.addEventListener('touchcancel',() => {touchStart = null;},{passive:true});
    carousel.addEventListener('click',event => {
      if(performance.now() < suppressClickUntil) {event.preventDefault();event.stopImmediatePropagation();}
    },true);
    showSlide(index);
  }
  function refreshPhoto() {
    const photos = visiblePhotos(), index = photos.findIndex(item => item.id === activePhotoId);
    if(index < 0) return;
    const item = photos[index], lang = language(), text = item[lang];
    dialogImage.src = asset(item.file);dialogImage.alt = text.alt;
    const title = document.querySelector('#dialog-title');
    title.textContent = text.title;
    title.classList.toggle('visually-hidden', item.id === 'perfect-attendance');
    document.querySelector('#dialog-description').textContent = text.description;
    document.querySelector('#dialog-position').textContent = `${index+1} / ${photos.length}`;
    document.querySelector('#previous-photo').setAttribute('aria-label', labels[lang].previous);
    document.querySelector('#next-photo').setAttribute('aria-label', labels[lang].next);
    document.querySelector('#previous-photo').hidden = photos.length < 2;
    document.querySelector('#next-photo').hidden = photos.length < 2;
  }
  function openPhoto(id) {
    activePhotoId = id;
    const item = memories.find(item => item.id === id);
    activePhotoGroup = item ? (item.album || item.category) : null;
    refreshPhoto();dialog.showModal();document.body.classList.add('lightbox-open');
  }
  function stepPhoto(direction) {
    const photos = visiblePhotos(), index = photos.findIndex(item => item.id === activePhotoId);
    activePhotoId = photos[(index+direction+photos.length)%photos.length].id;refreshPhoto();
  }
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    selectedCategory = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(other => other.setAttribute('aria-pressed',String(other === button)));
    renderGallery();
  }));
  document.querySelector('#close-photo').addEventListener('click', () => dialog.close());
  document.querySelector('#previous-photo').addEventListener('click', () => stepPhoto(-1));
  document.querySelector('#next-photo').addEventListener('click', () => stepPhoto(1));
  dialog.addEventListener('click', event => {if(event.target === dialog) dialog.close();});
  dialog.addEventListener('close', () => document.body.classList.remove('lightbox-open'));
  dialog.addEventListener('keydown', event => {
    if(event.key === 'ArrowRight') {event.preventDefault();stepPhoto(1);}
    if(event.key === 'ArrowLeft') {event.preventDefault();stepPhoto(-1);}
  });
  new MutationObserver(() => {renderGallery();if(dialog.open) refreshPhoto();}).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  renderGallery();
})();
