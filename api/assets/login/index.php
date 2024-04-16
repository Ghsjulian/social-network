<?php
require_once __DIR__ . "/../../assets/auth/__ghs__.php";
require __DIR__ . "/login.php";

/*
$signup = login("78gh6dxx6xx@gmail.com", "234455", $ghs);
echo json_encode($signup);
*/

$requestMethod = $_SERVER["REQUEST_METHOD"];
if ($requestMethod === "POST") {
  $data = json_decode(file_get_contents("php://input"), true);
  $email = $data["email"];
  $password = $data["password"];
  echo json_encode(login($email, $password, $ghs));
} else {
  echo json_encode([
    "type" => "error",
    "status" => "failed",
    "message" => "Access Denied !",
  ]);
}

?>
