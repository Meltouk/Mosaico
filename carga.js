class Carga extends Phaser.Scene {
    constructor(){
        super("Carga");
    }
    preload(){
        // fondo de carga
        this.add.rectangle(
            this.scale.width / 2,
            this.scale.height / 2,
            this.scale.width,
            this.scale.height,
            0xdd2f4c  //SE CAMBIO EL COLOR DE FONDO DE CARGA
        );
        // texto
        let texto = this.add.text(
            this.scale.width / 2,
            this.scale.height / 2 - 50,
            "Cargando 0%",
            { fontSize: "30px", color: "#ffffff" }
        ).setOrigin(0.5);

        // barra fondo
        let barraFondo = this.add.rectangle(
            this.scale.width / 2,
            this.scale.height / 2,
            400,
            30,
            0xffffff
        );
        // barra progreso
        let barra = this.add.rectangle(
            this.scale.width / 2 - 200,
            this.scale.height / 2,
            0,
            30,
            0xff7b00  // se modifico el color de la barra de progreso 
        ).setOrigin(0, 0.5);
        // archivos a cargar
        this.load.image("paola", "1Imagen.jpg");  // se cargaron y cambiaron los nombres de las imagenes
        this.load.image("rana", "2Imagen.jpg");
        this.load.image("cat", "3Imagen.jpg");
        // progreso de carga
        this.load.on("progress", (valor) => {

            let porcentaje = parseInt(valor * 100);

            texto.setText("Cargando " + porcentaje + "%");

            barra.width = 400 * valor;

        });
    }
    create(){

        // esperar un poco antes de cambiar de escena
        this.time.delayedCall(1000, () => {  //se modifico el tiempo de espera para la siguiente escena 

            this.scene.start("Inicio");

        });

    }

}