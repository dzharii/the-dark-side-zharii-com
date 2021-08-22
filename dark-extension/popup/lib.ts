namespace Force {
    export function findAll<T extends HTMLElement>(cssSelector: string): T[] {
        return Array.from(document.querySelectorAll(cssSelector));
    }

    export function findOne<T extends HTMLElement>(cssSelector: string): T {
        const nodes = findAll<T>(cssSelector);
        if (nodes.length === 0) {
            throw new Error(`findOne element with cssSelector=${cssSelector} was not found`);
        }
        return nodes[0];
    }


    function createElement<T extends HTMLElement>(tagName: keyof HTMLElementTagNameMap, text?: string, attrs?: Record<string, any>): T {
        const el = document.createElement(tagName) as T;
        if (typeof text === 'string') {
            el.textContent = text;
        }
        if (typeof attrs === 'object' && attrs !== null) {
            for (let [key, val] of Object.entries(attrs)) {
                (el as any)[key] = val;
            }
        }
        return el;
    }
}
