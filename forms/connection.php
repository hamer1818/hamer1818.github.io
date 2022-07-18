<!--create database connection with mssql-->
<?php
$server = "localhost";
$user = "root";
$pass = "";
$database = "email";
$connection = mssql_connect($server, $user, $pass) or die("SQL server'a bağlanılmıyor $server");
mssql_select_db($database, $connection) or die("Veritabanı açılmadı $database");
?>


