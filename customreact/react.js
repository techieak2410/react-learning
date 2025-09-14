function customrender(reactElement,doc){
    const domelement=document.createElement(reactElement.type)
    domelement.innerHTML=reactElement.children;
    for(const prop in reactElement.props){
        domelement.setAttribute(prop,reactElement.props[prop]);
    }
    doc.appendChild(domelement);
}




const reactElement={
    type:'a',
    props:{
        href:'https://gogle.com',
        target:'_blank'
    },
    children:'clixk me to enter google'
}


const doc=document.querySelector('#root');


customrender(reactElement,doc);
