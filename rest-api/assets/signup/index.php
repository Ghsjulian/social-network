<?php
require_once __DIR__ . "/../../assets/auth/__ghs__.php";
require __DIR__ . "/signup.php";
/*
$signup = signup(
  [
    "name" => "Ghs kiomo",
    "email" => "78gh6dxx6xx@gmail.com",
    "password" => "234455",
    "image" => "",
  ],
  $ghs
);
echo json_encode($signup);
*/
$requestMethod = $_SERVER["REQUEST_METHOD"];
if ($requestMethod === "POST") {
  $data = json_decode(file_get_contents("php://input"), true);
  echo json_encode(signup($data, $ghs));
} else {
  echo json_encode([
    "type" => "error",
    "status" => "failed",
    "message" => "POST Request Available Only !",
  ]);
}
?>
