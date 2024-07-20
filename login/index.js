function bienvenida()
{
        var nom = document.getElementById('nombres').value;
        var ape = document.getElementById('apellidos').value;
        var email = document.getElementById('correo').value;
        var cont = document.getElementById('clave').value;

         //alert("Hola "+nom+" "+ape+" su registro a sido exitoso con el correo "+email);


    if (nom == nom.length ) 
        {
            //alert("error");
            Swal.fire({
                title: '¡Error!',
                text: 'Complete la primera casilla',
                icon: 'error',
                confirmButtonText: '¡Aceptar!'
            });
        }
    else if (ape == ape.length )
        {
        // alert("error");
            Swal.fire({
                title: '¡Error!',
                text: 'Complete la segunda casilla',
                icon: 'error',
                confirmButtonText: '¡Aceptar!'
            });
        }
    else if (email == email.length)
        {
            //alert("error");
            Swal.fire({
                title: '¡Error!',
                text: 'Complete la tercer casilla',
                icon: 'error',
                confirmButtonText: '¡Aceptar!'
            });
        }
    else if(cont == cont.length)
        {
            //alert("error")
            Swal.fire({
                title: '¡Error!',
                text: 'Complete la cuartaa casilla',
                icon: 'error',
                confirmButtonText: '¡Aceptar!'
            });
        }
    else
        {
            //alert("hola "+ nom)
            Swal.fire({
                title: '¡Complet!',
                text: 'Bienvenido',
                icon: 'success',
                confirmButtonText: '¡Aceptar!'
            });
        }
}

