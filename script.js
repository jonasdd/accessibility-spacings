var select = document.createElement('SELECT');
    var options = ["Reset", "Letter-spacing", "Line-height", "Espacement-p", "Word-spacing"];
    var domNode = document.querySelectorAll("body * ");

    options.forEach(function(element,key) {
      select[key] = new Option(element,key);
    });

    document.body.appendChild(select).setAttribute("id", "rgaaSelect");
    var selectnode = document.getElementById("rgaaSelect");
    var currentoption = selectnode.options[ selectnode.selectedIndex ].textContent;
    
    selectnode.setAttribute("style", "position: fixed; z-index: 20000; bottom:0");
    selectnode.addEventListener("change", function(){
      currentoption = selectnode.options[ selectnode.selectedIndex ].textContent;
      changetest();
    });

function changetest(){
    domNode.forEach(element => {
        if ((element.localName !== "script") && (element.offsetParent !== null) && (element.id !== "rgaaSelect")) {
            var compStyles = getComputedStyle(element);
            var currentfont = compStyles.getPropertyValue('font-size');   
            switch (currentoption) {
            case "Line-height":
                element.style.lineHeight = "calc(1.5 * "+currentfont+")";
                break;
            case "Letter-spacing":
                element.style.letterSpacing = "calc(0.12 * "+currentfont+")";
                break;
            case "Espacement-p":
                if (element.localName == "p"){
                element.style.marginBottom = "calc(2 * "+currentfont+")";
                }
                break;
            case "Word-spacing":
                element.style.wordSpacing = "calc(0.16 * "+currentfont+")";
                break;
            default:
                element.removeAttribute("style")
                break;
            }
        }
    });
}