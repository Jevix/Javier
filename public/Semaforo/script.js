document.addEventListener("DOMContentLoaded", function() {
    const semaforos = {
        sv1: document.querySelector("#sentido-vehicular-1"),
        sv2: document.querySelector("#sentido-vehicular-2"),
        sv3: document.querySelector("#sentido-vehicular-3"),
        sv4: document.querySelector("#sentido-vehicular-4")
    };

    function crearSemaforoControl(id) {
        const luces = {
            rojo: semaforos[id].querySelector(".rojo"),
            amarillo: semaforos[id].querySelector(".amarillo"),
            verde: semaforos[id].querySelector(".verde")
        };

        let estadoActual = "rojo";
        let intervalID = null;

        function intermitente() {
            switch (estadoActual) {
                case "rojo":
                    luces.rojo.classList.remove("encendido");
                    luces.amarillo.classList.add("encendido");
                    estadoActual = "amarillo";
                    break;
                case "amarillo":
                    luces.amarillo.classList.remove("encendido");
                    //luces.verde.classList.add("encendido");
                    estadoActual = "verde";
                    break;
                case "verde":
                    luces.verde.classList.remove("encendido");
                    //luces.rojo.classList.add("encendido");
                    estadoActual = "rojo";
                    break;
            }
        }

        return {
            start: function() {
                if (intervalID === null) {
                    intervalID = setInterval(intermitente, 500);
                }
            },
            stop: function() {
                clearInterval(intervalID);
                intervalID = null;
            }
        };
    }

    const grupos = ["sv1-sv3", "sv2-sv4", "sv3-sv2", "sv1-sv4"];

    function mostrarGrupo(grupoId) {
        grupos.forEach(id => {
            const grupo = document.getElementById(id);
            console.log (grupo);
            grupo.style.display = (id === grupoId) ? "block" : "none"; // Cambiar el estilo de visualización
        });
    }
    window.mostrarGrupo = mostrarGrupo;

    crearSemaforoControl("sv1").start();
    crearSemaforoControl("sv2").start();
    crearSemaforoControl("sv3").start();
    crearSemaforoControl("sv4").start();
});
