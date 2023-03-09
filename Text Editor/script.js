    let optionsButtons = document.querySelectorAll('.option-button');
    let advancedOptionButton = document.querySelectorAll('.adv-option-button');
    let fontName = document.getElementById('fontName');
    let fontSizeRef = document.getElementById('fontSize');
    let writingArea = document.getElementById('text-input');
    let linkButton = document.getElementById('createLink');
    let alignButton = document.querySelectorAll('align');
    let spacingButtons = document.querySelectorAll('.spacing');
    let formatButtons = document.querySelectorAll('format');
    let scriptButtons = document.querySelectorAll('script');
    let textInput = document.getElementById('text-input');
    let switchBtn = document.getElementById('switchBtn');

    let fontList = [
        "Arial",
        "Verdana",
        "Times New Roman",
        "Garamond",
        "Georgia",
        "Courier New",
        "Cursive",
    ];

    const initializer = () =>{
        highlghter(alignButton, true);
        highlghter(spacingButtons, true);
        highlghter(formatButtons, false);
        highlghter(scriptButtons, true);

    fontList.map((value) =>{
        let option = document.createElement("option");
        option.value = value;
        option.innerHTML = value;
        fontName.appendChild(option)
    });

    for(let i=1; i<=7; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.innerHtml = i;
        fontSizeRef.appendChild(option);
    }

        fontSizeRef.value = 3;
    };

    const modifyText = (command,defaultUi, value) => {
        document.execCommand(command, defaultUi, value)
    };

    optionsButtons.forEach((button) => {
        button.addEventListener('click', () =>{
            modifyText(button.id, false, null);
        });
    });    

    advancedOptionButton.forEach((button) => {
        button.addEventListener('change', () =>{
            modifyText(button.id, false, button.value);
        });
    });    

    linkButton.addEventListener("click", () =>{
        let userLink = prompt('Enter a URL?',)
        if(/http/i.test(userLink)){
            modifyText(linkButton.id, false, userLink);
        }else {
            userLink = "https://" + userLink;
            modifyText(linkButton.id, false, userLink);
        }
    });

    const highlghter = (className, needsRemoval) =>{
        className.forEach((button) =>{
            button.addEventListener("click", () => {
                if(needsRemoval){
                    let alreadyActive = false;
                    if(button.classList.contains("active"));{
                        alreadyActive = true;
                    }
                
                    highlghterRemover(className);
                    if(!alreadyActive){
                        button.classList.add("active");
                    }
                } else {
                    button.classList.toggle("active");
                }
            });
        });
    };

    const highlghterRemover = (className) => {
        className.forEach((button) =>{
            button.classList.remove("active");
        });
    };


    switchBtn.addEventListener("click", function() {
        console.log('1');
        
        let computedStyle = window.getComputedStyle(textInput);
        
        if( computedStyle.backgroundColor === 'rgb(0, 0, 0)' ) {
            textInput.style.backgroundColor = "#7d698d";
            textInput.contentEditable = true;
            console.log('2');
        } else {
            textInput.style.backgroundColor = "black";
            textInput.contentEditable = false;
            textInput.value = "";
            console.log('3');
        }
    });
