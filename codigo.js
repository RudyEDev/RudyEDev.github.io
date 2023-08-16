const messages = [
    "Eres el proyecto nuevo que quiero empezar 😊",
    "Nuestro Amor es un BUCLE infinito sin CONDICIONES 😍😘",
    "Cada vez que te envio ese Ping, tu respuesta verifica nuestra conexion 🚀",
    "Eres el while infinito del que nunca quiero salir ❤",
    "Eres la exception en la que gasto horas de mi vida",
    "Eres el bucle que no quiero resolver!",
    "Ocupas la posicion 0 en mi corazon",
    "Eres el ';' que falta en mi codigo ❤"
  ];
  
  function showMessage() {
    const nameInput = document.getElementById("nameInput").value;
    if (nameInput.trim() !== "") {
      const message = getRandomMessage(nameInput);
      document.getElementById("message").innerHTML = ""; // Limpiamos el contenido previo
      document.getElementById("formCard").classList.add("d-none");
      document.getElementById("messageContainer").classList.remove("d-none");
  
      let i = 0;
      const typingEffect = setInterval(() => {
        document.getElementById("message").innerHTML += message.charAt(i);
        i++;
        if (i >= message.length) {
          clearInterval(typingEffect);
          animateHeart();
        }
      }, 100); // Ajusta la velocidad de escritura (más pequeño es más lento)
    }
  }
  
  function animateHeart() {
    const heartIcon = document.querySelector(".fa-heart");
    heartIcon.classList.add("animate__animated", "animate__heartBeat", "animate__repeat-3");
  }
  
  function resetForm() {
    document.getElementById("formCard").classList.remove("d-none");
    document.getElementById("messageContainer").classList.add("d-none");
    document.getElementById("nameInput").value = "";
  
    const heartIcon = document.querySelector(".fa-heart");
    heartIcon.classList.remove("animate__animated", "animate__heartBeat", "animate__repeat-3");
  }
  
  function getRandomMessage(name) {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return `${name}, ${messages[randomIndex]}`;
  }
  