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


var interests = (function(){

    this.showSpecializations = function () {
        var that = this;
        var element = document.querySelector('.interest-choice__spec-cards');
        var fragment = document.createDocumentFragment();
    
        for (let specialization of specializations) {
    
            //creates card with specialization
            let specCard = document.createElement('li');
            specCard.className = 'interest-choice__spec-card';
            let specName = document.createElement('h3');
            specName.innerText = specialization.name;
            specCard.appendChild(specName);
            
            let specTechNum = document.createElement('p');
            specTechNum.innerText = 'Technologii: ' +  this.getTechnologies(specialization.name).length;
            specCard.appendChild(specTechNum);
    
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
        specCards.addEventListener("click",this.selectSpecialization)
    
        //adds click event to button (only when active)
        let specButton = document.querySelector('.interest-choice__spec-button');
        specButton.addEventListener("click",this.displayTechnologies)
    },

    this.showTechnologies = function(){
        var element = document.querySelector('.interest-choice__tech-cards');
        var fragment = document.createDocumentFragment();    
    
        let allTechnologies = [];
    
        let selectedSpecializations = document.querySelectorAll('.interest-choice__spec-card--selected');
        for (let specialization of selectedSpecializations) {
            let specName= specialization.querySelector('h3').innerText;
            for (let technology of getTechnologies(specName)) {
                allTechnologies.push(technology)
            }
        }
    
        //get rid of repetiting technologies
        uniq = allTechnologies => [... new Set(allTechnologies)];
    
        for (let technologyName of allTechnologies){
            let technology = technologies.find( tech => tech.name ===technologyName);
          
           //creates card with technology
            let techCard = document.createElement('li');
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
         
         //adds click event to technologies
         let techCards = document.querySelector('.interest-choice__tech-cards');
         techCards.addEventListener("click",this.selectTechnology)
    
        //adds click event to button (only when active)
        let techButton = document.querySelector('.interest-choice__tech-button');
        techButton.addEventListener("click",this.displayTasks)
    },

    this.getTechnologies = function(spec) {
        tech=[];
        for (let technology of technologies) {
            if (technology.specializations.indexOf(spec)>-1){
                tech.push(technology.name);
            }
        }
        return tech;
    },

    this.selectSpecialization = function(e){
        if (e.target !==e.currentTarget){
            let spec = e.target.closest('.interest-choice__spec-card');
            spec.classList.toggle('interest-choice__spec-card--selected')
        }
        
        let specButton = document.querySelector('.interest-choice__spec-button')
        if (document.querySelectorAll('.interest-choice__spec-card--selected').length>0) {
            if (!specButton.classList.contains('interest-choice__spec-button--active')){
                specButton.classList.add('interest-choice__spec-button--active')
            }
        } else {
            if (specButton.classList.contains('interest-choice__spec-button--active')){
                specButton.classList.remove('interest-choice__spec-button--active')
            }  
        }
    },


    this.selectTechnology = function(e){
        if (e.target !==e.currentTarget){
            let tech = e.target.closest('.interest-choice__tech-card');
            tech.classList.toggle('interest-choice__tech-card--selected')
        }
        
        let techButton = document.querySelector('.interest-choice__tech-button')
        if (document.querySelectorAll('.interest-choice__tech-card--selected').length>0) {
            if (!techButton.classList.contains('interest-choice__tech-button--active')){
                techButton.classList.add('interest-choice__tech-button--active')
            }
        } else {
            if (techButton.classList.contains('interest-choice__tech-button--active')){
                techButton.classList.remove('interest-choice__tech-button--active')
            }  
        }
    },

    this.displayTechnologies = e => {
        if (e.target.closest('.interest-choice__spec-button--active')){
            this.showTechnologies();
            this.visibilityTechnologies();
            this.visibilitySpecializations();
        }
    },

    this.displayTasks= e => {
        if (e.target.closest('.interest-choice__tech-button--active')){
            this.visibilityTechnologies();
            this.visibilityTasks();
        }    
    },

    this.visibilityTechnologies=function(){
        window.scrollTo(0,0);
        let technologies = document.querySelector('.interest-choice__tech-choice');
        technologies.classList.toggle('interest-choice__tech-choice--hidden');
    },

    this.visibilitySpecializations=function(){
        window.scrollTo(0,0);
        let specializations = document.querySelector('.interest-choice__spec-choice');
        specializations.classList.toggle('interest-choice__spec-choice--hidden');
    },

    this.visibilityTasks=function(){
        window.scrollTo(0,0);
        let tasks = document.querySelector('.interest-choice__task-list');
        tasks.classList.toggle('interest-choice__task-list--hidden');
    },

    this.showSpecializations();
})()





