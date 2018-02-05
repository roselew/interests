var specializations = [
    {id:1,  name: 'Grafika i Interfejsy',          
            badges:[    {name: 'UI/UX Design',          courses: ['UI 1', 'UX 2','Design 3'], suggested: {name:'UI 1',desc:'Super kurs'}},
                        {name: 'Wektory i Ilustracje',  courses: ['Wektory1', 'Ilustracje2'], suggested: {name: 'Wektory1',desc:'Super kurs'}},
                        {name: 'Druk i DTP',            courses: ['Druk 1','DTP2','Druk i DTP 3'], suggested: {name: 'Druk i DTP 3',desc:'Super kurs'}},
                        {name: 'Concept Art',           courses: ['Concept1'], suggested: {name: 'Concept1',desc:'Super kurs'}},
                        {name: 'Grafika 3D',            courses: ['Grafika1D','Grafika2D','Grafika3D'], suggested: {name: 'Grafika3D',desc:'Super kurs'}},
                    ], 
            icon:'#grafika'
    },
    {id:2,  name: 'Programowanie',                 
            badges:[    
                {name: 'Front-end i Frameworki',        courses: ['Front-end1','Front-end2','Framework1','Framework2'], suggested: {name: 'Front-end1',desc:'Super kurs'}},
                {name: 'WordPress i CMSy',              courses: ['WordPress1','WordPress2'], suggested: {name: 'WordPress1',desc:'Super kurs'}},
                {name: 'PHP i Frameworki',              courses: ['PHP1','PHP2','PHP3'], suggested: {name: 'PHP1',desc:'Super kurs'}},
                {name: 'C# i ASP.NET',                  courses: ['C1','C2'], suggested: {name: 'C1',desc:'Super ku'}},
                {name: 'Java',                          courses: ['Java1','Java2','Java3'], suggested: {name: 'Java1',desc:'Super kurs'}},
                {name: 'Python',                        courses: ['Python1','Python2'], suggested: {name: 'Python1',desc:'Super kurs'}},
                {name: 'Swift i iOS',                   courses: ['Swift1','Swift2','Swift3'], suggested: {name: 'Swift1',desc:'Super kurs'}},
                {name: 'Game Development',              courses: ['Game1','Game2'], suggested: {name: 'Game1',desc:'Super kurs'}},
                {name: 'GO',                            courses: ['GO GO GO'], suggested: {name: 'GO GO GO',desc:'Super kurs'}},
                {name: 'Android z Kotlin',              courses: ['Android1','Android2'], suggested: {name: 'Android1',desc:'Super kurs'}},
            ], 
            icon:'#programowanie'
    },
    {id:3,  name: 'Marketing i Biznes',            
            badges:[    
                {name: 'Marketing w Social Media',      courses: ['Marketing1','Marketing2'], suggested: {name: 'Marketing1',desc:'Super kurs'}},
                {name: 'Startupy i Produkty',           courses: ['Startup1', 'Startup2','Produkty1'], suggested: {name: 'Startup1',desc:'Super kurs'}},
                {name: 'Freelance i Produktywność',     courses: ['Freelance1','Freelance2'], suggested: {name: 'Freelance1',desc:'Super kurs'}},
            ], 
            icon:'#promocja'},
    {id:4,  name: 'Wideo i Audio',
            badges:[
                {name: 'Montaż i Postprodukcja',        courses: ['Montaż1','Postprodukcja1','Postprodukcja3'], suggested: {name: 'Postprodukcja1',desc:'Super kurs'}},
                {name: 'Visual FX i Animacja',          courses: ['Visual FX1','Visual FX2'], suggested: {name: 'Visual FX1',desc:'Super kurs'}},
                {name: 'Audio',                         courses: ['Audio1','Audio2','Audio3'], suggested: {name: 'Audio1',desc:'Super kurs'}},
                {name: 'Produkcja filmów',              courses: ['Produkcja filmów1','Produkcja filmów2','Produkcja filmów3'], suggested: {name: 'Produkcja filmów1',desc:'Super kurs'}},
            ],
            icon:'#video'
    },
    {id:5,  name: 'Fotografia i Photoshop',       
            badges:[
                {name: 'Podstawy Fotografii',           courses: ['Fotografia 1','Fotografia2','Fotografia3'], suggested: {name: 'Fotografia1',desc:'Super kurs'}},
                {name: 'Fotografia Studyjna',           courses: ['Fotografia Studyjna'], suggested: {name: 'Fotografia Studyjna',desc:'Super kurs'}},
                {name: 'Fotografia Podróżnicza',        courses: ['Fotografia Podróżnicza'], suggested: {name: 'Fotografia Podróżnicza',desc:'Super kurs'}},
                {name: 'Obróbka Zdjęć i Retusz',        courses: ['Obróbka Zdjęć','Retusz'], suggested: {name: 'Retusz',desc:'Super kurs'}},
            ],
            icon:'#fotografia'
    },
]



const interestsModule = (function(){

    var userName;

    var userSpecializations = [];

    var userBadges = [];

    var userCourse;

    const setUserName = () => userName = document.querySelector('.interests__name').value;

    const getUserName = () => userName;

    const setUserSpecializations = () => userSpecializations = [...document.querySelectorAll('.interests__spec--selected')].map(x => x.querySelector('h3').innerText);

    const getUserSpecializtions = () =>  userSpecializations;

    const setUserBadges = () => userBadges = [...document.querySelectorAll('.interests__badge--selected')].map(x => x.querySelector('h3').innerText);

    const getUserBadges = () => userBadges;

    const setUserCourse = (e) => e.target.querySelector('h3').textContent;

    const getUserCourse = () => userCourse;

    const getAllSpecializations = () => specializations;

    const appendSpecializations = () => {

        var element = document.querySelector('.interests__specs ul');
        var fragment = document.createDocumentFragment();
    
        for (let specialization of getAllSpecializations()) {
            
            //creates template with li with specialization card
            let specCard = createSpecCard(specialization);
            
            //appends specialization card to specialization choice fragment
            fragment.appendChild(specCard.content);
        }

        //appends specialization choice fragment to html
        element.appendChild(fragment);
    
    };

    const createSpecCard = specialization => {
        let specCard = document.createElement('template');
        specCard.innerHTML = `
            <li class='interests__spec interests__spec${specialization.id}'>
                <h3> ${specialization.name} </h3>
                <p> Odznak: ${specialization.badges.length} </p>
                <svg width="auto" height="150px">
                    <use xlink:href=" ${specialization.icon} "</use>
                </svg>
                <svg class="interests__tick" width="auto" height="150px">
                    <use xlink:href="#tick"</use>
                </svg>
            </li>
        `;
        return specCard;
    }

    const appendBadges = () => {

        //deletes all technologies, otherwise they are doubled when going back
        clearBadges();

        let element = document.querySelector('.interests__badges-list');
        let fragment = document.createDocumentFragment();   
        let selectedSpecializations = getUserSpecializtions();

        for (let specialization of getAllSpecializations()){
            if (selectedSpecializations.indexOf(specialization.name)>-1){

                let fragUl = document.createElement('ul');

                for (let badge of specialization.badges){
                    
                    //creates template with li with technology card
                    let badgeCard = createBadgeCard(badge,specialization.id);
                    
                    //appends technology card to technology choice fragment
                    fragUl.appendChild(badgeCard.content);
                }
                //appends technology choice fragment to html
                fragment.appendChild(fragUl);      

            }
        }    

        element.appendChild(fragment) 
    

    };

    const createBadgeCard = (badge, specId) => {
        let badgeCard = document.createElement('template');
        badgeCard.innerHTML =  `
            <li class='interests__badge interests__badge${specId}'>
                <h3> ${badge.name} </h3>
                <p> Odznak: </p>
                <svg class="interests__tick" width="auto" height="150px">
                    <use xlink:href="#tick"</use>
                </svg>
            </li>
        `;
        return badgeCard;
    }
    

    const clearBadges = () => {
        let badgeList = document.querySelector('.interests__badges-list');
        while (badgeList.firstChild) {
            badgeList.removeChild(badgeList.firstChild);
        }
    }

    const addEvents = () => {

        //adds click event to specialization cards
        document.querySelector('.interests__specs ul')
                .addEventListener("click", () => { selectCard(event, 'spec')} );
    
        //adds click event to technology cards
        document.querySelector('.interests__badges-list')
                .addEventListener("click", () => { selectCard(event, 'badge')} );

        //adds click event to technology cards
        document.querySelector('.interests__courses-list')
                .addEventListener("click", ()=> { 
                    setUserCourse;
                    pushSlide('-80%');
                } );


        //adds click event to show/hide all button
        document.querySelector('.interests__spec-lbl')
                .addEventListener("click", () => { selectAllCards(event, 'spec') });

        //adds click event to show/hide all button
        document.querySelector('.interests__badge-lbl')
                .addEventListener("click", () => { selectAllCards(event, 'badge') });        


        //adds click event to button go to technologies (only when active)
        document.querySelector('.interests__spec-btn')
                .addEventListener("click", displayBadges);

        //adds click event to button go to tasks (only when active)
        document.querySelector('.interests__badge-btn')
                .addEventListener("click", displayTasks);

        //adds click event to button go to tasks (only when active)
        document.querySelector('.interests__courses-btn')
                .addEventListener("click", () =>{
                    pushSlide('-80%')
                });

                
        //adds click event to back button to specializations
        document.querySelector('.interests__badge-back')
                .addEventListener("click", ()=> {
                    document.querySelector('.interests__badges-footer').classList.remove('interests__badges-footer--active')
                    //show sepcializations  page
                    pushSlide('0%');
                });

        //adds click event to back button to technologies
        document.querySelector('.interests__task-back')
                .addEventListener("click", () => {
                    //show sepcializations  page
                    pushSlide('-20%');
                });

        //adds click event to back button to technologies
        document.querySelector('.interests__courses-back')
        .addEventListener("click", () => {
            //show sepcializations  page
            pushSlide('-40%');
        });
        
        let timer = null;
        document.querySelector('.interests__name')
                .addEventListener("keydown", ()=>{
                    clearTimeout(timer); 
                    timer = setTimeout(resizeName, 500)
                })

        document.querySelector('.interests__name')
                .addEventListener("keyup",  resizeName2)


                
        document.querySelector('.interests__goals ul li:nth-child(1)')
                .addEventListener("click", ()=> {
                    appendBeginnerCourses();
                })

        document.querySelector('.interests__goals ul li:nth-child(2)')
                .addEventListener("click", ()=> {
                    appendAllCourses();
                })


    }


    const resizeName2 = (e) => {
        e.target.setAttribute('size',e.target.value.length)
    }

    const appendAllCourses = () =>{


        let coursePage = document.querySelector('.interests__courses')
        coursePage.querySelector('h2').innerHTML = 'Od czego <span>zaczynasz?</span>';
        // coursePage.querySelector('p.interests__subtitle').innerHTML = 'Oto lista najbardziej popularnych tematów w ramach <span>Specjalizacji</span>, które Cię interesują. Wybierz coś z tej listy i zacznij naukę:'
        
        let element = document.querySelector('.interests__courses-list')
        
        //firstly clear courses list
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }

        let fragment = document.createDocumentFragment();  

        for (let specialization of getAllSpecializations()){
            if (getUserSpecializtions().indexOf(specialization.name)>-1){
                let fragUl = document.createElement('ul');
                fragUl.classList.add('interests__courses-all')

                for (let badge of specialization.badges){
                    if (getUserBadges().indexOf(badge.name)>-1){
                        for (let course of badge.courses){
                            //creates template with li with technology card
                            let courseCard = document.createElement('template');

                            courseCard.innerHTML = `
                                <li class="interests__courses-all${specialization.id}">
                                    <h3>${course}</h3>
                                    <p>15godzin</p>
                                </li>
                            `;                         
                            //appends technology card to technology choice fragment
                            fragUl.appendChild(courseCard.content);
                        }                            
                        //appends technology choice fragment to html
                        fragment.appendChild(fragUl);    
                    }
                }
            }
        }
        element.appendChild(fragment);

        pushSlide('-60%');



    }

    const appendBeginnerCourses = () =>{
        let coursePage = document.querySelector('.interests__courses')
        coursePage.querySelector('h2').innerHTML = 'Zacznij <span>Naukę!</span>';
        coursePage.querySelector('p.interests__subtitle').innerHTML = 'Oto lista najbardziej popularnych tematów w ramach <span>Specjalizacji</span>, które Cię interesują. Wybierz coś z tej listy i zacznij naukę:'
        
        let element = document.querySelector('.interests__courses-list')
        //firstly clear courses list
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }

        let fragment = document.createDocumentFragment();  

        for (let specialization of getAllSpecializations()){
            if (getUserSpecializtions().indexOf(specialization.name)>-1){
                let fragUl = document.createElement('ul');
                fragUl.classList.add('interests__courses-best')

                for (let badge of specialization.badges){
                    if (getUserBadges().indexOf(badge.name)>-1){

                            let courseCard = document.createElement('template');

                            courseCard.innerHTML = `
                                <li class="interests__courses-best${specialization.id}">
                                    <h3>${badge.suggested.name}</h3>
                                    <p>${badge.suggested.desc}</p>
                                </li>
                            `;                         
                            //appends technology card to technology choice fragment
                            fragUl.appendChild(courseCard.content);
                        }                            
                        //appends technology choice fragment to html
                        fragment.appendChild(fragUl);    
               }
            }
        }
        element.appendChild(fragment);

        pushSlide('-60%');


    }

    const resizeName = () => {
        document.querySelector('.interests__name').classList.add('interests__name--shifted');
        document.querySelector('.interests__name-label').classList.add('interests__name-label--shifted');
        document.querySelector('.interests').classList.remove('interests--noScroll');
    }

    const selectCard =  (e, elem) => {

        // toggles class selected for card with sepcialization/technology
        if (e.target !==e.currentTarget){
            let card = e.target.closest('.interests__'+elem);
            card.classList.toggle('interests__'+elem+'--selected')
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
                if (elem =='badge') {
                    document.querySelector('.interests__badges-footer').classList.add('interests__badges-footer--active')
                }
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
                if (elem =='badge') {
                    document.querySelector('.interests__badges-footer').classList.add('interests__badges-footer--active')
                }
            }
        }
            
        //changes label from select all to unselect all and vice versa
        e.target.classList.toggle(selectedLabel);

    };

 
    const displayBadges = e => {

        //check if button is active
        if (e.target.closest('.interests__spec-btn--active')){
            //stores user name;
            setUserName();
            document.querySelector('.interests__goals h2').innerHTML=getUserName() + ', <span>określ swój cel!</span>';
            //stores selected specializations
            setUserSpecializations();
            //appends technologies from selected specializations to HTML
            appendBadges();
            //scroll horizontaly
            pushSlide('-20%');
        }
    };


    const displayTasks= e => {

        //checks if button is active
        if (e.target.closest('.interests__badge-btn--active')){
            //stores selected technologies
            setUserBadges();
            //scroll horizontaly
            pushSlide('-40%');
        }   
    };



    //toggles class --hidden for given element with className
    const pushSlide = size => {
        //scroll to the very top
        window.scrollTo(0,0);
        document.querySelector('.interests').style.transform="translateX("+size+")"; 
    };

    const init = () => {
        appendSpecializations();
        addEvents(); 
    }


    return {
        init: init,
        getUserSpecializtions: getUserSpecializtions,
        getUserBadges: getUserBadges
    }


})()

interestsModule.init()



