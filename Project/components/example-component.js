class exampleComponent extends HTMLElement {

    constructor(){
        super()
        this.attachShadow({ mode : 'open' })
    }



    static get observedAttributes(){
        return ['title' , 'desc']
    }

    attributeChangedCallback(attr , olVal , newVal){
        if (attr == 'title') {
            this.title = newVal
        }

        if (attr == 'desc') {
            this.desc = newVal
        }
    }

    getTemplate(){
        /* Se crea un template empaquetar el codigo en un solo elementos HTML */
        const template = document.createElement('template') 
        template.innerHTML = `
         <section>
            <h2>${this.title}</h2>
            <p>${this.desc}</p>
         </section>

        ${this.getStyle()}

        `
        return template
    }


    getStyle(){
        return `
            <style>
                h2 {
                    color: red;
                }
            </style>
        `
    }

    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }

    connectedCallback(){
        this.render()
    }

}

customElements.define('example-component', exampleComponent)