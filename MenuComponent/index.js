import Component from "../webponents/Component.js";

/**
 * Represents the Menu component.
 * @extends Component
 */
class Menu extends Component {
    /**
     * The URL of the Menu component.
     * @type {string}
     */
    static url = import.meta.url;

    /**
     * The tag name of the Menu component.
     * @type {string}
     */
    static tagName = 'wp-menu';

    /**
     * The template file for the Menu component. (optional)
     * @type {string}
     */
    // static templateUrl = 'index.tpl';
	static styleUrl = "style.css";

    constructor() {
        super();
    }

    /**
     * Called when the Menu component is connected to the DOM.
     * @override
     */
    connectedCallback() {
        super.connectedCallback();
        // const container = this.shadowRoot.appendChild(document.createElement('div'));
        // container.classList.add('menu');
        // const slot = container.appendChild(document.createElement('slot'));
        this.shadowRoot.appendChild(document.createElement('slot'));
        return;
    }

    /**
     * Event handlers for the Menu component.
     * @type {Object}
     */
    evt = {
        ".selector": {
            /**
             * Event handler for the specified event.
             * @param {Event} e - The event object.
             */
            eventName: (e) => {
                // Event handler logic
            },
        },
    };
	slotEvt = {
		"": (e) => {
			console.log(this, 'Unnamed slot changed');
		},
		"name": (e) => {
			console.log(this, 'Slot "name" changed');
		}
	};

    /**
     * The observed attributes for the Menu component.
     * @type {Object}
     */
    static observableAttributes = {
        'attribute': {
            /**
             * Setter function for the 'attribute' attribute.
             * @param {any} value - The new value of the attribute.
             */
            set: function (value) {
                // Setter logic
            },
        },
    };
}

/**
 * Represents the MenuItem component.
 * @extends Component
 */
export default class MenuItem extends Component {
    /**
     * The URL of the MenuItem component.
     * @type {string}
     */
    static url = import.meta.url;

    /**
     * The tag name of the MenuItem component.
     * @type {string}
     */
    static tagName = 'wp-menu-item';

    /**
     * The template file for the MenuItem component. (optional)
     * @type {string}
     */
    // static templateUrl = 'index.tpl';
	static styleUrl = "item.css";

    constructor() {
        super();
    }

    /**
     * Called when the MenuItem component is connected to the DOM.
     * @override
     */
    connectedCallback() {
        super.connectedCallback();
        const container = this.shadowRoot;
        // const container = this.shadowRoot.appendChild(document.createElement('div'));
        // container.classList.add('menu-item');
        if (this.hasAttribute('label')) {
            container.appendChild(document.createTextNode(this.getAttribute('label')));
        } 
        // const slot = container.appendChild(document.createElement('slot'));
        this.shadowRoot.appendChild(document.createElement('slot'));

        return;
    }

    /**
     * Event handlers for the MenuItem component.
     * @type {Object}
     */
    evt = {
        ".selector": {
            /**
             * Event handler for the specified event.
             * @param {Event} e - The event object.
             */
            eventName: (e) => {
                // Event handler logic
            },
        },
    };
	slotEvt = {
		"": (e) => {
			console.log(this, 'Unnamed slot changed');
		},
		"name": (e) => {
			console.log(this, 'Slot "name" changed');
		}
	};

    /**
     * The observed attributes for the MenuItem component.
     * @type {Object}
     */
    static observableAttributes = {
        'attribute': {
            /**
             * Setter function for the 'attribute' attribute.
             * @param {any} value - The new value of the attribute.
             */
            set: function (value) {
                // Setter logic
            },
        },
    };
}

/**
 * Initializes the Menu component.
*/
Menu.init();
/**
 * Initializes the MenuItem component.
*/
MenuItem.init();

