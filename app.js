const flow = document.getElementById("wrap");
const alignContents = document.getElementById("aContens");
const alignItems = document.getElementById("aItems");

const container = document.getElementById("container");

flow.addEventListener("click",(e)=>{
    const valor = e.target.value;
    switch(valor){
        case "row":
            container.style.flexFlow = valor
        break;
        case "column":
            container.style.flexFlow = valor
        break;
        case "wrap":
            container.style.flexFlow = valor
        break;
        case "nowrap":
            container.style.flexFlow = valor
        break;
        case "row wrap":
            container.style.flexFlow = valor
        break;
        case "column wrap":
            container.style.flexFlow = valor
        break;
    }
})
alignContents.addEventListener("click",(e)=>{
    /* if(container.style.flexWrap != "" || container.style.flexFlow != ""){
        container.style.width = "100px";
    } */
    
    const valor = e.target.value;
    switch (valor) {
        case "flex-start":
            container.style.alignContent = valor;
        break;
        case "flex-end":
            container.style.alignContent = valor;
        break;
        case "center":
            container.style.alignContent = valor;
        break;
        case "space-between":
            container.style.alignContent = valor;
        break;
        case "space-around":
            container.style.alignContent = valor;
        break;
        case "stretch":
            container.style.alignContent = valor;
        break;
        default:
    }
})
alignItems.addEventListener("click",(e)=>{
    const valor = e.target.value;
    switch (valor) {
        case "flex-start":
            container.style.alignItems = valor;
        break;
        case "flex-end":
            container.style.alignItems = valor;
        break;
        case "center":
            container.style.alignItems = valor;
        break;
        case "space-between":
            container.style.alignItems = valor;
        break;
        case "space-around":
            container.style.alignItems = valor;
        break;
        case "stretch":
            container.style.alignItems = valor;
        break;
        default:
    }
})