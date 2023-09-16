import Swal from 'sweetalert2'
export default async function Alert(title , icon) {
  return (
    <>
      {
        Swal.fire({
          position: 'top-start',
          icon: icon,
          title: title,
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        })
      }
    </>
  )
}