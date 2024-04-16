<?php
require_once __DIR__ . "/assets/auth/__ghs__.php";

$url = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
$requestMethod = $_SERVER["REQUEST_METHOD"];

$isError = false;
$file = __DIR__ . "/assets/json/config.json";
$config = json_decode(file_get_contents($file), true);
foreach ($config["routes"] as $path => $value) {
  if ($path === $url) {
    $isError = true;
    require_once __DIR__ . $value;
    break;
  } 
}
if (!$isError) {
  echo json_encode([
    "code" => 404,
    "status" => "failed",
    "type" => "error",
    "message" => "URL Doesn't Exist !",
  ]);
}
?>
