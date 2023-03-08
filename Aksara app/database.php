<?php
// koneksi ke database
$servername = "localhost/127.0.0.1";
$username = "username";
$password = "password";
$dbname = "form_masssage";

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Cek koneksi
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// kode PHP untuk membaca data dari tabel database
$sql = "SELECT * FROM namatabel";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
  // kode HTML untuk menampilkan data dari database
  while($row = mysqli_fetch_assoc($result)) {
    echo "Nama: " . $row["nama"]. " - Email: " . $row["email"]. "<br>";
    echo "Pesan: " . $row["text"]. ;
  }
} else {
  echo "Tidak ada data";
}

mysqli_close($conn);
?>
