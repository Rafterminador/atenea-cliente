["DOMContentLoaded", "resize"].forEach((evt) =>
  window.addEventListener(evt, function () {
    let pathname = window.location.pathname;
    if (pathname === "/register") {
      if (window.innerWidth >= 768) {
        window.location.href = "/";
      }
    } else if (pathname === "/login") {
      if (window.innerWidth >= 768) {
        window.location.href = "/";
      }
    } else if (pathname === "/restore/password") {
      if (window.innerWidth >= 768) {
        window.location.href = "/";
      }
    } else if (pathname === "/restore/check/email") {
      if (window.innerWidth >= 768) {
        window.location.href = "/";
      }
    } else if (pathname === "/reset/password") {
      if (window.innerWidth >= 768) {
        window.location.href = "/";
      }
    } else {
    }
  })
);
