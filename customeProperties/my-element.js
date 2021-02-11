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
                    --primary-color : #777;
                    --secondary-color : #922;
                    --size-title: 5rem;
                    --size-text: 2rem;
                }

                section {
                    background: var(--primary-color);
                }

                section>h2 {
                    color : var(--secondary-color);
                    font-size : var(--size-title);
                }

                section>p {
                    color : var(--secondary-color);
                    font-size : var(--size-text);
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