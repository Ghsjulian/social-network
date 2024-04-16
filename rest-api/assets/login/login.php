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
function login($email, $password, $db)
{
  $status = "";
  $message = "";
  $token = "";
  $session = null;
  $user_email = trim($email);
  $user_pass = trim($password);
  $enc_password = sha1($user_pass);
  if ($user_email && $password) {
    $sql = "SELECT user_email,user_password FROM users WHERE user_email='$user_email' AND user_password='$enc_password'";
    $query = $db->__login__($sql);
    if ($query) {
      $sql2 = "SELECT * FROM users WHERE user_email='$user_email' AND user_password='$enc_password'";
      $Data = $db->__select_one__($sql2);
      $tok = $db->__encode_jwt__([
        "user_id" => $Data["user_id"],
        "user_name" => $Data["user_name"],
        "time" => time(),
      ]);
      $SQL_3 = "UPDATE users SET user_login='1', token='$tok' WHERE user_email='$user_email' AND user_password='$enc_password'";
      $product = $db->__insert__($SQL_3);
      $session = session_user($tok, $db);
      $token = $tok;
      $status = "success";
      $message = "Login Successfully";
    } else {
      $status = "error";
      $message = "Login Failed, Invalid Credentials";
    }
  } else {
    $status = "error";
    $message = "All Fields Are Required!";
  }
  return [
    "token" => $token ? $token : "",
    "data" => $session ? $session : "",
    "status" => $status,
    "message" => $message,
  ];
}

?>
