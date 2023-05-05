class SketchPad {
    constructor(container,size=400) {
        // reference to the DOM
        this.canvas = document.createElement("canvas");
        
        // set size to input parameter 
        this.canvas.width = size;
        this.canvas.height = size;
        
        this.canvas.style = `
            background-color:white;
            box-shadow: 0px 0px 10px 2px black;
        `;

        // places the canvas element as a child element, inside the container
        container.appendChild(this.canvas);
    }
};