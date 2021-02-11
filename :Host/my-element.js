class myElement extends HTMLElement {
    constructor(){
        super()
        /* Se agrega el shadow con le modo open para ver su contenido */
        this.attachShadow({ mode : 'open' })
    }

    getTemplate(){
        /* Se crea un template empaquetar el codigo en un solo elementos HTML */
        const template = document.createElement('template') 
        template.innerHTML = `
        <section>
        <h2>
            <slot name='title'></slot>
        </h2>
        <p>
            <slot name='desc'></slot>
        </p>
        <p>
            <slot name='otro'></slot>
        </p>
        </section>

        ${this.getStyle()}

        `
        return template
    }


    getStyle(){
        return `
            <style>
                :host {
                    display: inline-block;
                    width: 100%;
                    min-width: 300px;
                    max-width: 450px;
                    background: tomato;
                }

                :host(.blue){
                    background : blue;
                }

                :host([yellow]){
                    background : yellow;
                }

                :host([yellow]) p{
                    color: blue;
                }

                :host-context(span.content){
                    display: block;
                    max-width: 100%;
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