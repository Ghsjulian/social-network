<?php
function session_user($token, $db)
{
  $sql = "SELECT * FROM users WHERE token='$token'";
  $Data = $db->__select_one__($sql);
  return [
    "user_id" => $Data["user_id"],
    "user_name" => $Data["user_name"],
    "user_email" => $Data["user_email"],
    "user_status" => $Data["user_status"],
    "user_login" => $Data["user_login"],
    "user_img" => $Data["user_img"],
  ];
}

function signup($data, $db)
{
  $message = "";
  $status = "";
  $token = "";
  $session = [];
  $user_name = trim($data["name"]);
  $user_email = trim($data["email"]);
  $user_pass = trim($data["password"]);
  $user_img = trim($data["image"]);
  $enc_password = sha1($user_pass);
  $img_name = $db->__get_string__(12) . ".jpg";

  if ($user_img === "") {
    $img_name = "default_user.png";
  } else {
    if (!$db->__save_image__($user_img, $img_name)) {
      return ["status" => "error", "message" => "Unsupported Image File !"];
    }
  }

  if ($user_name && $user_pass && $user_email) {
    $sql_1 = "SELECT * FROM users WHERE user_email = '$user_email'";
    if (!$db->__is_exist__($sql_1)) {
      $sql = "INSERT INTO `users`(`user_name`, `user_email`, `user_password`, `user_status`, `user_login`, `user_img`, `token`)
      VALUES('$user_name','$user_email','$enc_password','User','0','$img_name','')";
      $query = $db->__signup__($sql);
      if ($query) {
        $sql_2 = "SELECT * FROM users WHERE user_name='$user_name' AND user_email='$user_email'";
        $Data = $db->__select_one__($sql_2);
        $tok = $db->__encode_jwt__([
          "user_id" => $Data["user_id"],
          "user_name" => $Data["user_name"],
          "time" => time(),
        ]);
        $SQL_3 = "UPDATE users SET user_login='1', token='$tok' WHERE user_email='$user_email' AND user_password='$enc_password'";
        $product = $db->__insert__($SQL_3);
        $session = session_user($tok, $db);
        $token = $tok;
        $message = "Registration Successfully";
        $status = "success";
      } else {
        $message = "Registration error";
        $status = "error";
      }
    } else {
      $status = "error";
      $message = "User Already Registered With This Email";
    }
  } else {
    $message = "Fields Are Required !";
    $status = "error";
  }

  return [
    "status" => $status,
    "message" => $message,
    "token" => $token ? $token : "No Token",
    "data" => $session ? $session : [],
  ];
}

?>
