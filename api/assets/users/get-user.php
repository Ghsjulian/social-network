<?php
require_once __DIR__ . "/../../assets/auth/__ghs__.php";

/*
$signup = login("78gh6dxx6xx@gmail.com", "234455", $ghs);
echo json_encode($signup);
*/
function get_user($col, $value, $ghs)
{
  $user = $ghs->__select_one__("SELECT * FROM users WHERE $col='$value'");
  if ($user) {
    $arr = [
      "user_id" => $user["user_id"],
      "user_name" => $user["user_name"],
      "user_email" => $user["user_email"],
      "user_status" => $user["user_status"],
      "user_login" => $user["user_login"],
      "user_img" => $user["user_img"],
    ];
    return $arr;
  } else {
    return [
      "code" => 403,
      "type" => "error",
      "status" => "failed",
      "message" => "Unauthorized User !",
    ];
  }
}
$requestMethod = $_SERVER["REQUEST_METHOD"];
if ($requestMethod === "POST") {
  $data = json_decode(file_get_contents("php://input"), true);
  if (isset($data["user_token"])) {
    echo json_encode(get_user("token", $data["user_token"], $ghs));
  } elseif ($data["user_id"]) {
    echo json_encode(get_user("user_id", $data["user_id"], $ghs));
  }
} else {
  echo json_encode([
    "code" => 500,
    "type" => "error",
    "status" => "failed",
    "message" => "Access Denied !",
  ]);
}

?>
