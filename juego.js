class Juego extends Phaser.Scene {

    constructor(){
        super("Juego");
    }
    create(){
        this.cameras.main.setBackgroundColor("#19795c");
        // TEXTO OCULTO DETRAS
        this.add.text(
            this.scale.width / 2,
            this.scale.height / 2,
            "TE GUSTAN LOS GATOS", // SE MODIFICO EL TEXTO
            {
                fontSize: "80px", // SE AGRANDO EL TEXTO
                color: "#ff41aa" // SE CAMBIO EL COLOR DEL TEXTO
            }
        ).setOrigin(0.5);

        // VARIABLES DE PUNTOS
        this.puntos = 0;
        // TEXTO DE PUNTOS
        this.textoPuntos = this.add.text(
            20,
            20,
            "Puntos del juego: 0",
            {
                fontSize: "28px",
                color: "#ffffff",
                 backgroundColor: "#1d3807",
                padding: { x: 10, y: 5 }
            }
        ); 
        // GRUPO DE IMAGENES
        this.cubierta = this.add.group();

        // ARREGLO DE IMAGENES POSIBLES
        this.imagenesJuego = [
            "paola", //se cambiaron los nombres
            "rana",
            "cat"
        ];
// TAMAÑO DE LAS CELDAS
let tamaño = 300;
// calcular columnas y filas
let columnas = Math.floor(this.scale.width / tamaño);
let filas = Math.floor(this.scale.height / tamaño);
// calcular espacio sobrante para centrar
let offsetX = (this.scale.width - (columnas * tamaño)) / 2;
let offsetY = (this.scale.height - (filas * tamaño)) / 2;
// CREAR CUADRICULA CENTRADA
for (let x = 0; x < columnas; x++){

    for (let y = 0; y < filas; y++){

        let imagenRandom = Phaser.Utils.Array.GetRandom(this.imagenesJuego);
        let posX = offsetX + x * tamaño + tamaño / 2;
        let posY = offsetY + y * tamaño + tamaño / 1.5;
        let img = this.add.image(posX, posY, imagenRandom);
        img.setDisplaySize(tamaño, tamaño);
        img.setInteractive();

        this.cubierta.add(img);
                // EVENTO CLICK
                img.on("pointerdown", () => {

                    // SISTEMA DE PUNTOS
                    if (img.texture.key === "paola"){
                        this.puntos += 1;
                    }
                    if (img.texture.key === "rana"){
                        this.puntos += 2;
                    }
                    if (img.texture.key === "cat"){
                        this.puntos += 3;
                    }
                    // ACTUALIZAR TEXTO
                    this.textoPuntos.setText("Puntos del juego: " + this.puntos);
                    // ANIMACION DE DESAPARECER
                    this.tweens.add({
                        targets: img,
                        scale: 0,
                        duration: 200,
                        onComplete: () => {
                            img.destroy();
                    // VERIFICAR SI YA NO QUEDAN
                    if (this.cubierta.countActive(true) === 0){
                        this.add.text(
                            this.scale.width / 2,
                            120,
                            "GANASTE 🎉",
                            {
                                fontSize: "40px",
                                color: "#ffffff"
                            }
                        ).setOrigin(0.5);
                    }
                }      
                      })
                
                });
            }
        }
        // BOTON REINICIAR
        let botonReiniciar = this.add.text(
            this.scale.width - 180, // SE MODIFICO LA POSICIÓN Y ESCALA DEL BOTÓN
            20,
            "Reiniciar",
            {
                fontSize: "24px",
                backgroundColor: "#2c631c", // se cambio el color del botón 
                color: "#ffffff",
                padding: { x: 5, y: 3 }
            }
        );

        botonReiniciar.setInteractive();

        botonReiniciar.on("pointerdown", () => {

            this.scene.restart();

        });
    }
}