class myElement extends HTMLElement {
    constructor(){
        super()
        /* Se agrega el shadow con le modo open para ver su contenido */
        this.attachShadow({ mode : 'open' })
        this.title = this.getAttribute('title')
        this.desc = this.getAttribute('desc')
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
        /* se coloca true para que clone todo el contenido */
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }

    connectedCallback(){
        this.render()
    }
}

customElements.define('my-element', myElement)