window.addEventListener("DOMContentLoaded", function () {
  console.log(window.location.pathname);
  let pathname = window.location.pathname;
  if (pathname === "/registro/usuario") {
    if (window.innerWidth > 768) {
      window.location.href = "/";
    }
  } else if (pathname === "/login") {
    if (window.innerWidth > 768) {
      window.location.href = "/";
    }
  } else if (pathname === "/olvide-password") {
    if (window.innerWidth > 768) {
      window.location.href = "/";
    }
  } else if (pathname === "/verificacion") {
    if (window.innerWidth > 768) {
      window.location.href = "/";
    }
  } else if (pathname === "/restablecer-password") {
    if (window.innerWidth > 768) {
      window.location.href = "/";
    }
  } else {
  }
});
