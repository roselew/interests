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
    {name: 'UX/UI dla Stron WWW',           icon:'assets/text-document.svg',     specializations:['Web design','UX/UI dla Stron WWW']},
    {name: 'Photoshop i Illustrator',       icon:'assets/text-document.svg',     specializations:['Web design']},
    {name: 'Projektowanie UI',              icon:'assets/text-document.svg',     specializations:['Web design','UX/UI dla Stron WWW']},
    {name: 'Strony WWW bez kodowania',      icon:'assets/text-document.svg',     specializations:['Web design']},
    {name: 'Optymalizacja i RWD',           icon:'assets/text-document.svg',     specializations:['Web design','Front-End']},
    {name: 'Projektowanie graficzne',       icon:'assets/text-document.svg',     specializations:['Wektory i dtp']},
    {name: 'Typografia',                    icon:'assets/text-document.svg',     specializations:['Wektory i dtp']},
    {name: 'Photoshop',                     icon:'assets/text-document.svg',     specializations:['Wektory i dtp']},
    {name: 'Illustrator',                   icon:'assets/text-document.svg',     specializations:['Wektory i dtp']},
    {name: 'Prototypowanie',                icon:'assets/text-document.svg',     specializations:['UX/UI dla Stron WWW']},
    {name: '3D',                            icon:'assets/text-document.svg',     specializations:['Grafika i 3D']},
    {name: '3D i grafika',                  icon:'assets/text-document.svg',     specializations:['Grafika i 3D','Concept Art']},
    {name: 'Podstawy Tworzenia Stron',      icon:'assets/text-document.svg',     specializations:['Front-End']},
    {name: 'Client Side',                   icon:'assets/text-document.svg',     specializations:['Front-End']},
    {name: 'PHP',                           icon:'assets/text-document.svg',     specializations:['Back-End']},
    {name: 'Frameworki Back-End',           icon:'assets/text-document.svg',     specializations:['Back-End']},
    {name: '.NET',                          icon:'assets/text-document.svg',     specializations:['Back-End']},
    {name: 'Wordpress',                     icon:'assets/text-document.svg',     specializations:['Wordpress i CMS']},
    {name: 'Projektowanie na Mobile',       icon:'assets/text-document.svg',     specializations:['Mobile']},
    {name: 'Wideo',                         icon:'assets/text-document.svg',     specializations:['Wideo i Audio']},
    {name: 'Fotografia',                    icon:'assets/text-document.svg',     specializations:['Fotografia']},
    {name: 'Concept Art',                   icon:'assets/text-document.svg',     specializations:['Concept Art']},
    {name: 'Unity',                         icon:'assets/text-document.svg',     specializations:['Tworzenie gier']},
    {name: 'Facebook',                      icon:'assets/text-document.svg',     specializations:['Promocja i biznes']},
    {name: 'Google',                        icon:'assets/text-document.svg',     specializations:['Promocja i biznes']},
    {name: 'Linux',                         icon:'assets/text-document.svg',     specializations:['Serwery i administracja']},
    {name: 'AutoCAD',                       icon:'assets/text-document.svg',     specializations:['CAD i narzędzia']}
]


const interestsModule = (function(){

    var userSpecializations = [];

    var userTechnologies = [];

    const setUserSpecializations = () => userSpecializations = [...document.querySelectorAll('.interest-choice__spec-card--selected')].map(x => x.querySelector('h3').innerText);

    const getUserSpecializtions = () =>  userSpecializations;

    const setUserTechnologies = () => userTechnologies = [...document.querySelectorAll('.interest-choice__tech-card--selected')].map(x => x.querySelector('h3').innerText);

    const getUserTechnologies = () => userTechnologies;

    const getAllSpecializations = () => specializations;

    const getAllTechnologies = () => technologies; 

    const appendSpecializations = () => {

        var element = document.querySelector('.interest-choice__spec-cards');
        var fragment = document.createDocumentFragment();
    
        for (let specialization of getAllSpecializations()) {
    
            //creates card with specialization
            let specCard = document.createElement('li');
            specCard.className = 'interest-choice__spec-card';
            //name of specialization
            let specName = document.createElement('h3');
            specName.innerText = specialization.name;
            specCard.appendChild(specName);
            //number of technologies avaiable
            let specTechNum = document.createElement('p');
            specTechNum.innerText = 'Technologii: ' +  getTechnologies(specialization.name).length;
            specCard.appendChild(specTechNum);
            //specialization icon 
            let specIcon = document.createElement('img');
            specIcon.src = specialization.icon;
            specCard.appendChild(specIcon);
    
            //appends specialization card to specialization choice fragment
            fragment.appendChild(specCard);
    
        }
    
        //appends specialization choice fragment to html
        element.appendChild(fragment);
    
        //adds click event to specializations
        let specCards = document.querySelector('.interest-choice__spec-cards');
        specCards.addEventListener("click", selectSpecialization)
    
        //adds click event to button (only when active)
        let specButton = document.querySelector('.interest-choice__spec-button');
        specButton.addEventListener("click", displayTechnologies)
    };

    const appendTechnologies = () => {

        var element = document.querySelector('.interest-choice__tech-cards');
        var fragment = document.createDocumentFragment();    

        let selectedSpecializations = getUserSpecializtions();

        //takes all available technologies from selected specializations
        let allTechnologies = selectedSpecializations.map( x => getTechnologies(x)).join(',').split(',');

        // let allTechnologies = [];
        // for (let specialization of selectedSpecializations) {
        //     for (let technology of this.getTechnologies(specialization)) {
        //         allTechnologies.push(technology)
        //     }
        // }
    
        //get rid of repetiting technologies (technology can be in 2 specizalizations)
        uniq = allTechnologies => [... new Set(allTechnologies)];
    
        for (let technologyName of allTechnologies){
            let technology = getAllTechnologies().find( tech => tech.name ===technologyName);
          
           //creates card with technology
            let techCard = document.createElement('li');
            techCard.className = 'interest-choice__tech-card';
            //name of technology
            let techName = document.createElement('h3');
            techName.innerText = technology.name;
            techCard.appendChild(techName);
            // number of courses (DO ZROBIENIA!!!)
            let techCourseNum = document.createElement('p');
            techCourseNum.innerText = 'Kursów: ';
            techCard.appendChild(techCourseNum);
            //technology icon
            let techIcon = document.createElement('img');
            techIcon.src = technology.icon;
            techCard.appendChild(techIcon);
    
            //appends technology card to technology choice fragment
            fragment.appendChild(techCard);
        }
    
         //appends technology choice fragment to html
         element.appendChild(fragment);    
         
         //adds click event to technologies
         let techCards = document.querySelector('.interest-choice__tech-cards');
         techCards.addEventListener("click", selectTechnology)
    
        //adds click event to button (only when active)
        let techButton = document.querySelector('.interest-choice__tech-button');
        techButton.addEventListener("click", displayTasks)
    };

    //retruns technologies from given specification name (spec)
    const getTechnologies = spec => {
        let tech=[];
        for (let technology of getAllTechnologies()) {
            if (technology.specializations.indexOf(spec)>-1){
                tech.push(technology.name);
            }
        }
        return tech;
    };

    const selectSpecialization =  e => {

        // toggles class selected for spec-card
        if (e.target !==e.currentTarget){
            let spec = e.target.closest('.interest-choice__spec-card');
            spec.classList.toggle('interest-choice__spec-card--selected')
        }

        // activates/inactivates button to go further
        let specButton = document.querySelector('.interest-choice__spec-button')
        let activeClass = 'interest-choice__spec-button--active';

        if (document.querySelectorAll('.interest-choice__spec-card--selected').length>0) {
            // there are some spec-cards selected and button was inactive before - activate button
            if (!specButton.classList.contains(activeClass)){
                specButton.classList.add(activeClass)
            }
        } else {
            //there are none spec-cards selected and button was active bere - inactivate button
            if (specButton.classList.contains(activeClass)){
                specButton.classList.remove(activeClass)
            }  
        }
    };


    const selectTechnology =  e => {

        // toggles class selected for tech-card
        if (e.target !==e.currentTarget){
            let tech = e.target.closest('.interest-choice__tech-card');
            tech.classList.toggle('interest-choice__tech-card--selected')
        }
        
        // activates/inactivates button to go further
        let techButton = document.querySelector('.interest-choice__tech-button')
        let activeClass = 'interest-choice__tech-button--active';

        if (document.querySelectorAll('.interest-choice__tech-card--selected').length>0) {
            // there are some tech-cards selected and button was inactive before - activate button
            if (!techButton.classList.contains(activeClass)){
                techButton.classList.add(activeClass)
            }
        } else {
            //there are none tech-cards selected and button was active bere - inactivate button
            if (techButton.classList.contains(activeClass)){
                techButton.classList.remove(activeClass)
            }  
        }
    };

    const displayTechnologies = e => {

        //check if button is active
        if (e.target.closest('.interest-choice__spec-button--active')){
            //stores selected specializations
            setUserSpecializations();
            //appends technologies from selected specializations to HTML
            appendTechnologies();
            //show technologies page
            toogleVisibility('tech-choice');
            //hide sepcializations page
            toogleVisibility('spec-choice');
        }
    };

    const displayTasks= e => {

        //checks if button is active
        if (e.target.closest('.interest-choice__tech-button--active')){
            //stores selected technologies
            setUserTechnologies();
            //hide technologies page
            toogleVisibility('tech-choice');
            //show tasks page
            toogleVisibility('task-list');
        }   
    };

    //toggles class --hidden for given element with className
    const toogleVisibility = className => {
        //scroll to the very top
        window.scrollTo(0,0);
        let elem = document.querySelector('.interest-choice__'+className);
        elem.classList.toggle('interest-choice__'+className+'--hidden');
    };


    return {
        init: appendSpecializations,
        getUserSpecializtions: getUserSpecializtions,
        getUserTechnologies: getUserTechnologies
    }


})()

interestsModule.init()



