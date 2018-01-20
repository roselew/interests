var specializations = [
    {name: 'Web design',                icon:'assets/camera-digital.svg'},
    {name: 'Wektory i dtp',             icon:'assets/camera-digital.svg'},
    {name: 'UX i UI',                   icon:'assets/camera-digital.svg'},
    {name: 'Grafika i 3D',              icon:'assets/camera-digital.svg'},
    {name: 'Front-End',                 icon:'assets/camera-digital.svg'},
    {name: 'Back-End',                  icon:'assets/camera-digital.svg'},
    {name: 'Wordpress i CMS',           icon:'assets/camera-digital.svg'},
    {name: 'Mobile',                    icon:'assets/camera-digital.svg'},
    {name: 'Wideo i Audio',             icon:'assets/camera-digital.svg'},
    {name: 'Fotografia',                icon:'assets/camera-digital.svg'},
    {name: 'Concept Art',               icon:'assets/camera-digital.svg'},
    {name: 'Tworzenie gier',            icon:'assets/camera-digital.svg'},
    {name: 'Promocja i biznes',         icon:'assets/camera-digital.svg'},
    {name: 'Serwery i administracja',   icon:'assets/camera-digital.svg'},
    {name: 'CAD i narzędzia',           icon:'assets/camera-digital.svg'}
]

var technologies = [
    {name: 'UX/UI dla Stron WWW',           icon:'assets/',     specializations:['Web design','UX/UI dla Stron WWW']},
    {name: 'Photoshop i Illustrator',       icon:'assets/',     specializations:['Web design']},
    {name: 'Projektowanie UI',              icon:'assets/',     specializations:['Web design','UX/UI dla Stron WWW']},
    {name: 'Strony WWW bez kodowania',      icon:'assets/',     specializations:['Web design']},
    {name: 'Optymalizacja i RWD',           icon:'assets/',     specializations:['Web design','Front-End']},
    {name: 'Projektowanie graficzne',       icon:'assets/',     specializations:['Wektory i dtp']},
    {name: 'Typografia',                    icon:'assets/',     specializations:['Wektory i dtp']},
    {name: 'Photoshop',                     icon:'assets/',     specializations:['Wektory i dtp']},
    {name: 'Illustrator',                   icon:'assets/',     specializations:['Wektory i dtp']},
    {name: 'Prototypowanie',                icon:'assets/',     specializations:['UX/UI dla Stron WWW']},
    {name: '3D',                            icon:'assets/',     specializations:['Grafika i 3D']},
    {name: '3D i grafika',                  icon:'assets/',     specializations:['Grafika i 3D','Concept Art']},
    {name: 'Podstawy Tworzenia Stron',      icon:'assets/',     specializations:['Front-End']},
    {name: 'Client Side',                   icon:'assets/',     specializations:['Front-End']},
    {name: 'PHP',                           icon:'assets/',     specializations:['Back-End']},
    {name: 'Frameworki Back-End',           icon:'assets/',     specializations:['Back-End']},
    {name: '.NET',                          icon:'assets/',     specializations:['Back-End']},
    {name: 'Wordpress',                     icon:'assets/',     specializations:['Wordpress i CMS']},
    {name: 'Projektowanie na Mobile',       icon:'assets/',     specializations:['Mobile']},
    {name: 'Wideo',                         icon:'assets/',     specializations:['Wideo i Audio']},
    {name: 'Fotografia',                    icon:'assets/',     specializations:['Fotografia']},
    {name: 'Concept Art',                   icon:'assets/',     specializations:['Concept Art']},
    {name: 'Unity',                         icon:'assets/',     specializations:['Tworzenie gier']},
    {name: 'Facebook',                      icon:'assets/',     specializations:['Promocja i biznes']},
    {name: 'Google',                        icon:'assets/',     specializations:['Promocja i biznes']},
    {name: 'Linux',                         icon:'assets/',     specializations:['Serwery i administracja']},
    {name: 'AutoCAD',                       icon:'assets/',     specializations:['CAD i narzędzia']}
]

function showSpecializations(){
    var element = document.querySelector('.interest-choice__spec-cards');
    var fragment = document.createDocumentFragment();

    for (let specialization of specializations) {

        //creates card with specialization
        let specCard = document.createElement('div');
        specCard.className = 'interest-choice__spec-card';
        let specName = document.createElement('h3');
        specName.innerText = specialization.name;
        specCard.appendChild(specName);
        
        let specTechNum = document.createElement('p');
        specTechNum.innerText = 'Technologii: ' +  getTechnologies(specialization.name).length;
        specCard.appendChild(specTechNum);

        let specIcon = document.createElement('img');
        specIcon.src = specialization.icon;
        specCard.appendChild(specIcon);

        //appends specialization card to specialization choice fragment
        fragment.appendChild(specCard);

    }

    //appends specialization choice fragment to html
    element.appendChild(fragment);
}

function showTechnologies(){
    var element = document.querySelector('.interest-choice__tech-cards');
    var fragment = document.createDocumentFragment();    

    let allTechnologies = [];
    for (let specialization of specializations) {
        for (let technology of getTechnologies(specialization.name)) {
            allTechnologies.push(technology)
        }
    }

    //get rid of repetiting technologies
    uniq = allTechnologies => [... new Set(allTechnologies)];

    for (let technologyName of allTechnologies){
        let technology = technologies.find( tech => tech.name ===technologyName);
      
       //creates card with technology
        let techCard = document.createElement('div');
        techCard.className = 'interest-choice__tech-card';
        let techName = document.createElement('h3');
        techName.innerText = technology.name;
        techCard.appendChild(techName);

        let techCourseNum = document.createElement('p');
        techCourseNum.innerText = 'Kursów: ';
        techCard.appendChild(techCourseNum);

        let techIcon = document.createElement('img');
        techIcon.src = technology.icon;
        techCard.appendChild(techIcon);

        //appends technology card to technology choice fragment
        fragment.appendChild(techCard);
    }

     //appends technology choice fragment to html
     element.appendChild(fragment);             

}


function getTechnologies(spec){
    tech=[];
    for (let technology of technologies) {
        if (technology.specializations.indexOf(spec)>-1){
            tech.push(technology.name);
        }
    }
    return tech;
}






showSpecializations();
showTechnologies();