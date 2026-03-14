class Inicio extends Phaser.Scene {

    constructor(){
        super("Inicio");
    }

    create(){

        // fondo
        this.cameras.main.setBackgroundColor("#19795c");  // se cambio el color del background 

        // titulo
        this.add.text(
            this.scale.width / 2, //AQUI SE ESCALA Y ACOMODA EL TEXTO DENTRO DE LA ESCENA 
            this.scale.height / 2 - 150,
            "DESCUBRE EL TEXTO", // SE MODIFICO EL TEXTO
            {
                fontSize: "60px", //SE CAMBIO EL TAMAÑO DEL TEXTO
                color: "#fffb00"
            }
        ).setOrigin(0.5);

        // instrucciones
        this.add.text(
            this.scale.width / 2,
            this.scale.height / 2 - 40,
            "Elimina las imagenes para descubrir el mensaje", //SE CAMBIO EL TEXTO 
            {
                fontSize: "22px",
                align: "center",
                color: "#ffffff" 
            }
        ).setOrigin(0.5);

        // boton jugar
        let boton = this.add.text(
            this.scale.width / 2,
            this.scale.height / 2 + 80,
            "INICIO", //SE CAMBIO EL TEXTO DE JUGAR A INICIO
            {
                fontSize: "32px",
                color: "#ffffff",
                backgroundColor: "#7fdb63", // SE CAMBIO EL COLOR DEL BOTON DE INICIO 
                padding: { x: 30, y: 30 } // SE PUSO MAS GRANDE EL BOTON DE JUGAR
            }
        ).setOrigin(0.5);

        boton.setInteractive();

        boton.on("pointerdown", () => {
            this.scene.start("Juego");
        });

        // efecto hover
        boton.on("pointerover", () => {
            boton.setStyle({ color: "#ff0000" }); // SE CAMBIO EL COLOR DEL EFECTO CUANDO ESTA EL CURSOR 
        });

        boton.on("pointerout", () => {
            boton.setStyle({ color: "#100cff" });  // SE CAMBIO EL COLOR DEL EFECTO CUANDO NO ESTA EL CURSOR 
        });

    }

}