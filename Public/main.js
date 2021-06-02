// La creacion de dicha variable es con el fin que el frontend
// pueda conectarse con el backend
var socket = io.connect('http://localhost:3002',{'forceNew':true});

socket.on('message',function(data){
    console.log(data);
});

function render(data){
    var html= `<div>
                    <strong>${data.autor}</strong>
                    <em>${data.texto}</em>
               </div>`;

    document.getElementById('message').innerHTML=html;
};