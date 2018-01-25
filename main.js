var specializations = [
    {name: 'Web design',                icon:'#camera-digital'},
    {name: 'Wektory i dtp',             icon:'#camera-digital'},
    {name: 'Grafika i 3D',              icon:'#camera-digital'},
    {name: 'Front-End',                 icon:'#camera-digital'},
    {name: 'Back-End',                  icon:'#camera-digital'},
    {name: 'Wordpress i CMS',           icon:'#camera-digital'},
    {name: 'Mobile',                    icon:'#camera-digital'},
    {name: 'Wideo i Audio',             icon:'#camera-digital'},
    {name: 'Fotografia',                icon:'#camera-digital'},
    {name: 'Concept Art',               icon:'#camera-digital'},
    {name: 'Tworzenie gier',            icon:'#camera-digital'},
    {name: 'Promocja i biznes',         icon:'#camera-digital'},
    {name: 'Serwery i administracja',   icon:'#camera-digital'},
    {name: 'CAD i narzędzia',           icon:'#camera-digital'}
]

var technologies = [
    {name: 'UX/UI dla Stron WWW',           icon:'#text-document',     specializations:['Web design','UX/UI dla Stron WWW']},
    {name: 'Photoshop i Illustrator',       icon:'#text-document',     specializations:['Web design']},
    {name: 'Projektowanie UI',              icon:'#text-document',     specializations:['Web design','UX/UI dla Stron WWW']},
    {name: 'Strony WWW bez kodowania',      icon:'#text-document',     specializations:['Web design']},
    {name: 'Optymalizacja i RWD',           icon:'#text-document',     specializations:['Web design','Front-End']},
    {name: 'Projektowanie graficzne',       icon:'#text-document',     specializations:['Wektory i dtp']},
    {name: 'Typografia',                    icon:'#text-document',     specializations:['Wektory i dtp']},
    {name: 'Photoshop',                     icon:'#text-document',     specializations:['Wektory i dtp']},
    {name: 'Illustrator',                   icon:'#text-document',     specializations:['Wektory i dtp']},
    {name: 'Prototypowanie',                icon:'#text-document',     specializations:['UX/UI dla Stron WWW']},
    {name: '3D',                            icon:'#text-document',     specializations:['Grafika i 3D']},
    {name: '3D i grafika',                  icon:'#text-document',     specializations:['Grafika i 3D','Concept Art']},
    {name: 'Podstawy Tworzenia Stron',      icon:'#text-document',     specializations:['Front-End']},
    {name: 'Client Side',                   icon:'#text-document',     specializations:['Front-End']},
    {name: 'PHP',                           icon:'#text-document',     specializations:['Back-End']},
    {name: 'Frameworki Back-End',           icon:'#text-document',     specializations:['Back-End']},
    {name: '.NET',                          icon:'#text-document',     specializations:['Back-End']},
    {name: 'Wordpress',                     icon:'#text-document',     specializations:['Wordpress i CMS']},
    {name: 'Projektowanie na Mobile',       icon:'#text-document',     specializations:['Mobile']},
    {name: 'Wideo',                         icon:'#text-document',     specializations:['Wideo i Audio']},
    {name: 'Fotografia',                    icon:'#text-document',     specializations:['Fotografia']},
    {name: 'Concept Art',                   icon:'#text-document',     specializations:['Concept Art']},
    {name: 'Unity',                         icon:'#text-document',     specializations:['Tworzenie gier']},
    {name: 'Facebook',                      icon:'#text-document',     specializations:['Promocja i biznes']},
    {name: 'Google',                        icon:'#text-document',     specializations:['Promocja i biznes']},
    {name: 'Linux',                         icon:'#text-document',     specializations:['Serwery i administracja']},
    {name: 'AutoCAD',                       icon:'#text-document',     specializations:['CAD i narzędzia']}
]

const interestsModule = (function(){

    var userSpecializations = [];

    var userTechnologies = [];

    const setUserSpecializations = () => userSpecializations = [...document.querySelectorAll('.interests__spec--selected')].map(x => x.querySelector('h3').innerText);

    const getUserSpecializtions = () =>  userSpecializations;

    const setUserTechnologies = () => userTechnologies = [...document.querySelectorAll('.interests__tech--selected')].map(x => x.querySelector('h3').innerText);

    const getUserTechnologies = () => userTechnologies;

    const getAllSpecializations = () => specializations;

    const getAllTechnologies = () => technologies; 

    const appendSpecializations = () => {

        var element = document.querySelector('.interests__specs ul');
        var fragment = document.createDocumentFragment();
    
        for (let specialization of getAllSpecializations()) {
    
            //creates card with specialization
            let specCard = document.createElement('li');
            specCard.className = 'interests__spec';
            //name of specialization
            let specName = document.createElement('h3');
            specName.innerText = specialization.name;
            specCard.appendChild(specName);
            //number of technologies avaiable
            let specTechNum = document.createElement('p');
            specTechNum.innerText = 'Technologii: ' +  getTechnologies(specialization.name).length;
            specCard.appendChild(specTechNum);
            //specialization icon 
            let specIcon = document.createElementNS("http://www.w3.org/2000/svg",'svg');
            specIcon.setAttribute('width','50px');
            specIcon.setAttribute('height','50px');
            let specUse = document.createElementNS("http://www.w3.org/2000/svg",'use');
            specUse.classList.add('proba');
            specUse.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', specialization.icon)
            specIcon.appendChild(specUse);
            specCard.appendChild(specIcon);
    
            // let specIcon = document.createElement('img');
            // specIcon.src = specialization.icon;
            // specCard.appendChild(specIcon);
    
            //appends specialization card to specialization choice fragment
            fragment.appendChild(specCard);
    
        }
    
        //appends specialization choice fragment to html
        element.appendChild(fragment);
    
    };

    const appendTechnologies = () => {

        var element = document.querySelector('.interests__techs ul');
        var fragment = document.createDocumentFragment();    

        //deletes all technologies, otherwise they are doubled when going back
        clearTechnologies();

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
            techCard.className = 'interests__tech';
            //name of technology
            let techName = document.createElement('h3');
            techName.innerText = technology.name;
            techCard.appendChild(techName);
            // number of courses (DO ZROBIENIA!!!)
            let techCourseNum = document.createElement('p');
            techCourseNum.innerText = 'Kursów: ';
            techCard.appendChild(techCourseNum);
            //technology icon
            let techIcon = document.createElementNS("http://www.w3.org/2000/svg",'svg');
            techIcon.setAttribute('width','50px');
            techIcon.setAttribute('height','50px');
            let techUse = document.createElementNS("http://www.w3.org/2000/svg",'use');
            techUse.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', technology.icon)
            techIcon.appendChild(techUse);
            techCard.appendChild(techIcon);

            // let techIcon = document.createElement('img');
            // techIcon.src = technology.icon;
            // techCard.appendChild(techIcon);
    
            //appends technology card to technology choice fragment
            fragment.appendChild(techCard);
        }
    
        //appends technology choice fragment to html
        element.appendChild(fragment);      

    };

    const clearTechnologies = () => {
        let techCards = document.querySelector('.interests__techs ul');
        while (techCards.firstChild) {
            techCards.removeChild(techCards.firstChild);
        }
    }

    const addEvents = () => {

        //adds click event to specialization cards
        document.querySelector('.interests__specs ul')
                .addEventListener("click", () => { selectCard(event, 'spec')} );
    
        //adds click event to technology cards
        document.querySelector('.interests__techs ul')
                .addEventListener("click", () => { selectCard(event, 'tech')} );


        //adds click event to show/hide all button
        document.querySelector('.interests__spec-lbl')
                .addEventListener("click", () => { selectAllCards(event, 'spec') });

        //adds click event to show/hide all button
        document.querySelector('.interests__tech-lbl')
                .addEventListener("click", () => { selectAllCards(event, 'tech') });        


        //adds click event to button go to technologies (only when active)
        document.querySelector('.interests__spec-btn')
                .addEventListener("click", displayTechnologies);

        //adds click event to button go to tasks (only when active)
        document.querySelector('.interests__tech-btn')
                .addEventListener("click", displayTasks);


        //adds click event to back button to specializations
        document.querySelector('.interests__tech-back')
                .addEventListener("click", ()=> {
                    //show sepcializations  page
                    toogleVisibility('specs');
                    //hide technologies page
                    toogleVisibility('techs');
                });

        //adds click event to back button to technologies
        document.querySelector('.interests__task-back')
                .addEventListener("click", () => {
                    //show technologies page
                    toogleVisibility('techs');
                    //hide task page
                    toogleVisibility('tasks');
                });


    }

    const stopHiding = () => {
        document.querySelector('.interests__techs').style.opacity="1";
        document.querySelector('.interests__tasks').style.opacity = "1"
    }

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

 
    const selectCard =  (e, elem) => {

        // toggles class selected for card with sepcialization/technology
        if (e.target !==e.currentTarget){
            let tech = e.target.closest('.interests__'+elem);
            tech.classList.toggle('interests__'+elem+'--selected')
        }

        //button to go further        
        let goButton = document.querySelector('.interests__'+elem+'-btn');
        let activeButton = 'interests__'+elem+'-btn--active';
        // label to select / unselect all
        let labelToSelect = document.querySelector('.interests__'+elem+'-lbl');
        let selectedLabel = 'interests__'+elem+'-lbl--selected';
        //all cards with tech/spec
        let allCards = document.querySelectorAll('.interests__'+elem);
        //all selected cards with tech/spec
        let selectedCards = document.querySelectorAll('.interests__'+elem+'--selected');

        // activates/inactivates button to go further
        if (selectedCards.length>0) {
            // there are some cards selected and button was inactive before - activate button
            if (!goButton.classList.contains(activeButton)){
                goButton.classList.add(activeButton)
            }
            //check if all technologies are selected then changes label select all to unselect all
            if (selectedCards.length==allCards.length) {
                if (!labelToSelect.classList.contains(selectedLabel)){
                    labelToSelect.classList.add(selectedLabel)
                }
            }
        } else {
            //there are none cards selected and button was active bere - inactivate button
            if (goButton.classList.contains(activeButton)){
                goButton.classList.remove(activeButton)
            }  
            //changes label select all to unselect all
            if (labelToSelect.classList.contains(selectedLabel)){
                labelToSelect.classList.remove(selectedLabel)
            }
        }
    };

    const selectAllCards = (e,elem) => {
        
        //button to go further  
        let goButton = document.querySelector('.interests__'+elem+'-btn')
        let activeButton = 'interests__'+elem+'-btn--active';
        // label to select / unselect all       
        let labelToSelect = document.querySelector('.interests__'+elem+'-lbl');
        let selectedLabel = 'interests__'+elem+'-lbl--selected';
        //all selected cards with tech/spec
        let selectedCard = 'interests__'+elem+'--selected';        

        //if label was selected we need to unselect all cards
        if ( e.target.classList.contains(selectedLabel)){

            [... document.querySelectorAll('.interests__'+elem)].forEach(x => {
                if (x.classList.contains(selectedCard)){
                    x.classList.remove(selectedCard)
                }
            });

            // inactivates button to go further
            if (goButton.classList.contains(activeButton)){
                goButton.classList.remove(activeButton)
            }

        //if label was NOT selected we need to select all cards
        } else {
            
            [... document.querySelectorAll('.interests__'+elem)].forEach(x => {
                if (!x.classList.contains(selectedCard)){
                    x.classList.add(selectedCard)
                }
            });

            // activates button to go further
            if (!goButton.classList.contains(activeButton)){
                goButton.classList.add(activeButton)
            }
        }
            
        //changes label from select all to unselect all and vice versa
        e.target.classList.toggle(selectedLabel);

    };

 
    const displayTechnologies = e => {

        //check if button is active
        if (e.target.closest('.interests__spec-btn--active')){
            //stores selected specializations
            setUserSpecializations();
            //appends technologies from selected specializations to HTML
            appendTechnologies();
            //show technologies page
            toogleVisibility('techs');
            //hide sepcializations page
            toogleVisibility('specs');
        }
    };


    const displayTasks= e => {

        //checks if button is active
        if (e.target.closest('.interests__tech-btn--active')){
            //stores selected technologies
            setUserTechnologies();
            //hide technologies page
            toogleVisibility('techs');
            //show tasks page
            toogleVisibility('tasks');
        }   
    };

    //toggles class --hidden for given element with className
    const toogleVisibility = className => {
        //scroll to the very top
        window.scrollTo(0,0);
        let elem = document.querySelector('.interests__'+className);
        elem.classList.toggle('interests__'+className+'--hidden');
    };

    const init = () => {
        appendSpecializations();
        addEvents(); 
        setTimeout(stopHiding,1000);
    }


    return {
        init: init,
        getUserSpecializtions: getUserSpecializtions,
        getUserTechnologies: getUserTechnologies
    }


})()

interestsModule.init()



