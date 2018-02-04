var specializations = [
    {id:1,  name: 'Grafika i Interfejsy',          
            badges:[    'UI/UX Design',
                        'Wektory i Ilustracje',
                        'Druk i DTP',
                        'Concept Art',
                        'Grafika 3D'
                    ], 
            icon:'#grafika'
    },
    {id:2,  name: 'Programowanie',                 
            badges:[    
                'Front-end i Frameworki',
                'WordPress i CMSy',
                'PHP i Frameworki', 
                'C# i ASP.NET',
                'Java',
                'Python',
                'Swift i iOS',
                'Game Development',
                'GO',
                'Android z Kotlin'
            ], 
            icon:'#programowanie'
    },
    {id:3,  name: 'Marketing i Biznes',            
            badges:[    
                'Marketing w Social Media',
                'Startupy i Produkty',
                'Freelance i Produktywność'
            ], 
            icon:'#promocja'},
    {id:4,  name: 'Wideo i Audio',
            badges:[
                'Montaż i Postprodukcja',
                'Visual FX i Animacja',
                'Audio',
                'Produkcja filmów'
            ],
            icon:'#video'
    },
    {id:5,  name: 'Fotografia i Photoshop',       
            badges:[
                'Podstawy Fotografii',
                'Fotografia Studyjna',
                'Fotografia Podróżnicza',
                'Obróbka Zdjęć i Retusz'
            ],
            icon:'#fotografia'
    },
]



const interestsModule = (function(){

    var userName;

    var userSpecializations = [];

    var userBadges = [];

    const setUserName = () => userName = document.querySelector('.interests__name').value;

    const getUserName = () => userName;

    const setUserSpecializations = () => userSpecializations = [...document.querySelectorAll('.interests__spec--selected')].map(x => x.querySelector('h3').innerText);

    const getUserSpecializtions = () =>  userSpecializations;

    const setUserBadges = () => userBadges = [...document.querySelectorAll('.interests__tech--selected')].map(x => x.querySelector('h3').innerText);

    const getUserBadges = () => userBadges;

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

                fragment.appendChild
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
                <h3> ${badge} </h3>
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
                    timer = setTimeout(resizeName, 1000)
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

    const appendBeginnerCourses = () =>{

        let coursePage = document.querySelector('.interests__courses')
        coursePage.querySelector('h2').innerHTML = 'Zacznij <span>Naukę!</span>';
        coursePage.querySelector('p.interests__subtitle').innerHTML = 'Oto lista najbardziej popularnych tematów w ramach <span>Specjalizacji</span>, które Cię interesują. Wybierz coś z tej listy i zacznij naukę:'
        
        let element = coursePage.querySelector('ul')
        let fragment = document.createDocumentFragment();  
        //  = document.createElement('template');
        // coursePage.innerHTML = `
        //     <h2>
        //     <p class='interests__subtitle'>
        //     <ul></ul>
        //     <button>Powrót</button>
        //     <button>Gotowe</button>
        //     <a href="wyszukiwarka.html" class="interests__skip">Pomiń profilowanie</a>
        // `;
        // fragment.appendChild(coursePage.content);
        // element.appendChild(fragment);
        pushSlide('-60%');



    }

    const appendAllCourses = () =>{
        let coursePage = document.querySelector('.interests__courses')
        coursePage.querySelector('h2').innerHTML = 'Od czego <span>zaczynasz?</span>';
        //coursePage.querySelector('p.interests__subtitle').innerHTML = 'Oto lista najbardziej popularnych tematów w ramach <span>Specjalizacji</span>, które Cię interesują. Wybierz coś z tej listy i zacznij naukę:'
        
        let element = coursePage.querySelector('ul')
        let fragment = document.createDocumentFragment();  
        //  = document.createElement('template');
        // coursePage.innerHTML = `
        //     <h2>
        //     <p class='interests__subtitle'>
        //     <ul></ul>
        //     <button>Powrót</button>
        //     <button>Gotowe</button>
        //     <a href="wyszukiwarka.html" class="interests__skip">Pomiń profilowanie</a>
        // `;
        // fragment.appendChild(coursePage.content);
        // element.appendChild(fragment);
        pushSlide('-60%');
    }

    const resizeName = () => {
        document.querySelector('.interests__name').classList.add('interests__name--shifted');
        document.querySelector('.interests__name-label').classList.add('interests__name-label--shifted');
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



