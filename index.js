function validasiPassword(password) {
  // Minimal 8 karakter, minimal 1 huruf besar, minimal 1 huruf kecil
  const regex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return regex.test(password);
}

const password = "Passw0rd";
if (validasiPassword(password)) {
  console.log(`Password "${password}" valid`);
} else {
  console.log(`Password "${password}" tidak valid`);
}
