// TABS

const [...tabs] = document.getElementsByClassName("-tabs-_list_item");
const post = document.getElementsByClassName("-tabs-_post-item");

tabs.forEach(elt => {
    elt.addEventListener("click", ev => {
        tabs.forEach(e => e.classList.remove("active"));
        ev.target.classList.add("active");
        
        const menuItem = tabs.findIndex(item => item.classList.contains("active"));
        
        for (let i = 0; i < post.length; i++) {
            if (i === menuItem) {
                post[i].classList.toggle("shown", true);
            } else {
                post[i].classList.toggle("shown", false);
                post[i].classList.toggle("hidden", true);
            }
        }
    });
});


// FILTER

const [...option] = document.getElementsByClassName("-gallery-_filter_e");
const [...galleryItem] = document.getElementsByClassName("-gallery-_item");
const [...all] = document.getElementsByClassName("all");
const [...webDesign] = document.getElementsByClassName("web-design");
const [...graphicDesign] = document.getElementsByClassName("graphic-design");
const [...landingPages] = document.getElementsByClassName("landing-pages");
const [...wordpress] = document.getElementsByClassName("wordpress");


function compare (value) {
    all.forEach(elt => {
       let text = elt.getAttribute("class");
       let result = text.slice(0, 3);

       if (result === value) {
        galleryItem.forEach(e => e.style.display = "block");
    }
    });

    webDesign.forEach(elt => {
        let text = elt.getAttribute("class");
        let result = text.slice(19, 29);

        if (result === value) {
            galleryItem.forEach(e => e.style.display = "none");
            webDesign.forEach(e => e.style.display = "block");
        }
    });
    
    graphicDesign.forEach(elt => {
        let text = elt.getAttribute("class");
        let result = text.slice(19, 33);
        
        if (result === value) {
            galleryItem.forEach(e => e.style.display = "none");
            graphicDesign.forEach(e => e.style.display = "block");
        }
    });
    
    landingPages.forEach(elt => {
        let text = elt.getAttribute("class");
        let result = text.slice(19, 32);
        
        if (result === value) {
            galleryItem.forEach(e => e.style.display = "none");
            landingPages.forEach(e => e.style.display = "block");
        }
    });
    
    wordpress.forEach(elt => {
        let text = elt.getAttribute("class");
        let result = text.slice(19, 28);
        
        if (result === value) {
            galleryItem.forEach(e => e.style.display = "none");
            wordpress.forEach(e => e.style.display = "block");
        }
    });
}

option.forEach(elt => {
    elt.addEventListener("click" , ev => {
        option.forEach(e => e.classList.remove("option"));
        ev.target.classList.add("option")
        compare(ev.target.getAttribute("id"));
    });
    
})


// SLIDER

const [...trigger] = document.getElementsByClassName("-people-_switch_e");
const [...target] = document.getElementsByClassName("-people-_e");

const zero = document.getElementById("0");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");


function display (element, value, visibility) {
    if (value === "id" && visibility === false) {
        element.style.display = "none";
    } else if (value === "id" && visibility === true) {
        element.style.display = "flex";
    } else if (value === "class" && visibility === false) {
        element.forEach(elt => elt.style.display = "none");
    } else if (value === "class" && visibility === true) {
        element.forEach(elt => elt.style.display = "flex");
    } else if (value === "element" && visibility === false) {
        element.style.display = "none";
    } else if (value === "element" && visibility === true) {
        element.style.display = "flex";
    }    
}

function styleSetting (element, index, prop, value) {
    if (prop === "transition") {
        element[index].style.transition = value;
    } else if (prop === "transform") {
        element[index].style.transform = value;
    } else if (index === "css") {
        element.style.cssText = prop;
    } 
}

function findTargetSlide(value) {
    let result = value.getAttribute("id");
        return +result;
    }


function setAttr (elt) {
    return elt.classList.add("selected");
}

function removeAttrs (elt) {
    return elt.forEach(elt => elt.classList.remove("selected"));
}

function checkAttr (elt) {
    return elt.classList.contains("selected");
}

display(two, "id", true);

trigger.forEach(elt => elt.style.transition = "transform 0.6s");

styleSetting(trigger, 2, "transform", "translateY(-22%)");

setAttr(trigger[2]);

trigger.forEach((elt, index, array) => {
    elt.addEventListener("click", () => {
        

        trigger.forEach(elt => elt.style.transform = "unset");
        styleSetting(array, index, "transform", "translateY(-22%)");

        
        if (index === findTargetSlide(zero) && checkAttr(array[index]) === false) {
            
            target.forEach(elt => {
                elt.style.transition = "transform 0.5s ease-in";
                elt.style.transform = "translate(200px)";
                setTimeout(() => elt.style.display = "none", 500);
            })
            
            setTimeout(() => display(zero, "id", true), 500);
            
            zero.style.transform = "translate(-200px)";
            
            setTimeout(() => {
                zero.style.transition = "transform 0.5s ease-in";
                zero.style.transform = "translate(1px)";
            }, 550);

        } else if (index === findTargetSlide(one) && checkAttr(array[index]) === false) {
            
            target.forEach(elt => {
                elt.style.transition = "transform 0.5s ease-in";
                elt.style.transform = "translate(200px)";
                setTimeout(() => elt.style.display = "none", 500);
            })
            
            setTimeout(() => display(one, "id", true), 500);
            
            one.style.transform = "translate(-200px)";
            
            setTimeout(() => {
                one.style.transition = "transform 0.5s ease-in";
                one.style.transform = "translate(1px)";
            }, 550);  
        } else if (index === findTargetSlide(two) && checkAttr(array[index]) === false) {
            
            target.forEach(elt => {
                elt.style.transition = "transform 0.5s ease-in";
                elt.style.transform = "translate(200px)";
                setTimeout(() => elt.style.display = "none", 500);
            })
            
            setTimeout(() => display(two, "id", true), 500);
            
            two.style.transform = "translate(-200px)";
            
            setTimeout(() => {
                two.style.transition = "transform 0.5s ease-in";
                two.style.transform = "translate(1px)";
            }, 550);  
        } else if (index === findTargetSlide(three) && checkAttr(array[index]) === false) {
            
            target.forEach(elt => {
                elt.style.transition = "transform 0.5s ease-in";
                elt.style.transform = "translate(200px)";
                setTimeout(() => elt.style.display = "none", 500);
            })
            
            setTimeout(() => display(three, "id", true), 500);
            
            three.style.transform = "translate(-200px)";
            
            setTimeout(() => {
                three.style.transition = "transform 0.5s ease-in";
                three.style.transform = "translate(1px)";
            }, 550);  
        }
        
        removeAttrs(array);
        setAttr(array[index])
        
    });
})

const leftClick = document.getElementById("left-click");
const rightClick = document.getElementById("right-click");
leftClick.style.outline = "none";
rightClick.style.outline = "none";


leftClick.addEventListener("click", (ev => {

        if (trigger[2].classList.contains("selected")) {
            trigger.forEach(e => e.style.transform = "unset")
            removeAttrs(trigger);
            trigger[1].style.transform = "translateY(-22%)";
            trigger[1].classList.add("selected");

            // ------------------------------------------

            target.forEach(elt => {
                elt.style.transition = "transform 0.5s ease-in";
                elt.style.transform = "translate(200px)";
                setTimeout(() => elt.style.display = "none", 500);
            })
            
            setTimeout(() => display(one, "id", true), 500);
            
            one.style.transform = "translate(-200px)";
            
            setTimeout(() => {
                one.style.transition = "transform 0.5s ease-in";
                one.style.transform = "translate(1px)";
            }, 550); 
            return;
        }


        if (trigger[3].classList.contains("selected")) {
            removeAttrs(trigger);
            trigger.forEach(e => e.style.transform = "unset")
            trigger[2].style.transform = "translateY(-22%)";
            trigger[2].classList.add("selected");

            // -------------------------------------

            target.forEach(elt => {
                elt.style.transition = "transform 0.5s ease-in";
                elt.style.transform = "translate(200px)";
                setTimeout(() => elt.style.display = "none", 500);
            })
            
            setTimeout(() => display(two, "id", true), 500);
            
            two.style.transform = "translate(-200px)";
            
            setTimeout(() => {
                two.style.transition = "transform 0.5s ease-in";
                two.style.transform = "translate(1px)";
            }, 550);
            return;
        }
            
        if (trigger[0].classList.contains("selected")) {
            trigger.forEach(e => e.style.transform = "unset")
            removeAttrs(trigger);
            trigger[3].style.transform = "translateY(-22%)";
            trigger[3].classList.add("selected");

            // -----------------------------------------------

            target.forEach(elt => {
                elt.style.transition = "transform 0.5s ease-in";
                elt.style.transform = "translate(200px)";
                setTimeout(() => elt.style.display = "none", 500);
            })
            
            setTimeout(() => display(three, "id", true), 500);
            
            three.style.transform = "translate(-200px)";
            
            setTimeout(() => {
                three.style.transition = "transform 0.5s ease-in";
                three.style.transform = "translate(1px)";
            }, 550);
            return;
        }
        
        if (trigger[1].classList.contains("selected")) {
            trigger.forEach(e => e.style.transform = "unset")
            removeAttrs(trigger);
            trigger[0].style.transform = "translateY(-22%)";
            trigger[0].classList.add("selected");

            // ------------------------------------------------------------
            target.forEach(elt => {
                elt.style.transition = "transform 0.5s ease-in";
                elt.style.transform = "translate(200px)";
                setTimeout(() => elt.style.display = "none", 500);
            })
            
            setTimeout(() => display(zero, "id", true), 500);
            
            zero.style.transform = "translate(-200px)";
            
            setTimeout(() => {
                zero.style.transition = "transform 0.5s ease-in";
                zero.style.transform = "translate(1px)";
            }, 550);
        }
}));

rightClick.addEventListener("click", (ev => {

        if (trigger[1].classList.contains("selected")) {
            trigger.forEach(e => e.style.transform = "unset")
            removeAttrs(trigger);
            trigger[2].style.transform = "translateY(-22%)";
            trigger[2].classList.add("selected");

            // ------------------------------------------------------------
            
            target.forEach(elt => {
                elt.style.transition = "transform 0.5s ease-in";
                elt.style.transform = "translate(200px)";
                setTimeout(() => elt.style.display = "none", 500);
            })
            
            setTimeout(() => display(two, "id", true), 500);
            
            two.style.transform = "translate(-200px)";
            
            setTimeout(() => {
                two.style.transition = "transform 0.5s ease-in";
                two.style.transform = "translate(1px)";
            }, 550); 
            return;
        }

        if (trigger[0].classList.contains("selected")) {
            trigger.forEach(e => e.style.transform = "unset");
            removeAttrs(trigger);
            trigger[1].style.transform = "translateY(-22%)";
            // trigger[0].classList.remove("ready");
            trigger[1].classList.add("selected");


            // -----------------------------------------------
            
            target.forEach(elt => {
                elt.style.transition = "transform 0.5s ease-in";
                elt.style.transform = "translate(200px)";
                setTimeout(() => elt.style.display = "none", 500);
            })
            
            setTimeout(() => display(one, "id", true), 500);
            
            one.style.transform = "translate(-200px)";
            
            setTimeout(() => {
                one.style.transition = "transform 0.5s ease-in";
                one.style.transform = "translate(1px)";
            }, 550); 
            return;
        }

        if (trigger[3].classList.contains("selected")) {
            removeAttrs(trigger);
            trigger.forEach(e => e.style.transform = "unset")
            trigger[0].style.transform = "translateY(-22%)";
            trigger[0].classList.add("selected");
            // -------------------------------------

            target.forEach(elt => {
                elt.style.transition = "transform 0.5s ease-in";
                elt.style.transform = "translate(200px)";
                setTimeout(() => elt.style.display = "none", 500);
            })
            
            setTimeout(() => display(zero, "id", true), 500);
            
            zero.style.transform = "translate(-200px)";
            
            setTimeout(() => {
                zero.style.transition = "transform 0.5s ease-in";
                zero.style.transform = "translate(1px)";
            }, 550);
            return;
        }

        if (trigger[2].classList.contains("selected")) {
            trigger.forEach(e => e.style.transform = "unset")
            removeAttrs(trigger);
            trigger[3].style.transform = "translateY(-22%)";
            trigger[3].classList.add("selected");


            target.forEach(elt => {
                elt.style.transition = "transform 0.5s ease-in";
                elt.style.transform = "translate(200px)";
                setTimeout(() => elt.style.display = "none", 500);
            })
            
            setTimeout(() => display(three, "id", true), 500);
            
            three.style.transform = "translate(-200px)";
            
            setTimeout(() => {
                three.style.transition = "transform 0.5s ease-in";
                three.style.transform = "translate(1px)";
            }, 550);  
            return;
        }
        
}));