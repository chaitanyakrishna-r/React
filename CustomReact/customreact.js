function customRender(reactElement,container){
    // const domElement= document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute ('href',reactElement.Props.href)
    // domElement.setAttribute('target',reactElement.Props.target)
    // container.appendChild(domElement)



    const domElement= document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.Props) {
        if (prop === "children")  continue
        domElement.setAttribute(prop,reactElement.Props[prop])
            
        }
        container.appendChild(domElement)
    }


const reactElement ={
    type:'a',
    Props:{
        href:"https://google.com",
        target: '_blank'
    },
    children:'click me to visit google'
}

const mainContainer = document.querySelector("#root")


customRender (reactElement,mainContainer)