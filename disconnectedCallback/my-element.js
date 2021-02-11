class myElement extends HTMLElement {
    constructor() {
        super()
        /* Se agrega el shadow con le modo open para ver su contenido */
        this.attachShadow( { mode: 'open' } )
    }

    static get observedAttributes () {
        return ['title', 'desc']
    }

    attributeChangedCallback ( attr, olVal, newVal ) {
        if ( attr == 'title' ) {
            this.title = newVal
        }

        if ( attr == 'desc' ) {
            this.desc = newVal
        }
    }

    getTemplate () {
        /* Se crea un template empaquetar el codigo en un solo elementos HTML */
        const template = document.createElement( 'template' )
        template.innerHTML = `
         <section>
            <h2>${this.title}</h2>
            <p>${this.desc}</p>
         </section>

        ${this.getStyle()}

        `
        return template
    }


    getStyle () {
        return `
            <style>
                h2 {
                    color: red;
                }
            </style>
        `
    }

    render () {
        /* se coloca true para que clone todo el contenido */
        this.shadowRoot.appendChild( this.getTemplate().content.cloneNode( true ) )
    }

    connectedCallback () {
        this.render()
    }

    disconnectedCallback () {
        console.log( 'Adios' )
    }

}

customElements.define( 'my-element', myElement )

setTimeout( () => {
    document.querySelector( 'my-element' ).remove()
}, 1000 );