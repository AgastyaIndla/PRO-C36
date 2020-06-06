class Form {
    constructor(){
        this.button = createButton('Save');
        this.button.style('width','80px');
        this.button.style('height','50px');
        this.button.style('font-size','20px');
        this.button.style('background-color','yellow');
    }

    display(){
        this.button.position(1100,650);
    }

}