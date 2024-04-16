<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header(
  "Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
);
/*_________ __ghs__ _________*/
class __ghs__
{
  private $conn = false;
  private $result;
  private $secret_key;
  private $host;
  private $user;
  private $password;
  private $db_name;
  public function __construct()
  {
    if (!$this->conn) {
      $this->__get_config__();
      $connect = new mysqli(
        $this->host,
        $this->user,
        $this->password,
        $this->db_name
      );
      if ($connect->connect_error) {
        return $connect->connect_error;
      } else {
        $this->conn = $connect;
      }
    }
  }

  private function __get_config__()
  {
    $config = json_decode(
      file_get_contents(__DIR__ . "/../../assets/json/config.json"),
      true
    );
    $this->host = $config["db_info"]["host_name"];
    $this->user = $config["db_info"]["user_name"];
    $this->password = $config["db_info"]["password"];
    $this->db_name = $config["db_info"]["db_name"];
    $this->secret_key = $config["db_info"]["secret_key"];
  }
  /* For Checking If Connect Or Not */
  public function __is_connected__()
  {
    if ($this->conn) {
      return "Database Connected Successfully !";
    } else {
      return "Database Connected Failed !";
    }
  }

  /* ======= Database Methods ====== */
  public function __insert__($sql)
  {
    if ($sql) {
      $query = mysqli_query($this->conn, $sql);
      if ($query) {
        return true;
      } else {
        return false;
      }
    } else {
      return "Please Insert SQL Query!";
    }
  }
  public function __update__($sql)
  {
    if ($sql) {
      $query = mysqli_query($this->conn, $sql);
      if ($query) {
        return true;
      } else {
        return false;
      }
    } else {
      return "Please Insert SQL Query!";
    }
  }
  public function __select_all__($sql)
  {
    if ($sql) {
      $query = mysqli_query($this->conn, $sql);
      while ($data = mysqli_fetch_all($query, true)) {
        return $data;
      }
    } else {
      echo "Please Insert SQL Query!";
    }
  }
  public function __select_one__($sql)
  {
    if ($sql) {
      $query = mysqli_query($this->conn, $sql);
      if (mysqli_num_rows($query) > 0) {
        return mysqli_fetch_assoc($query);
      } else {
        return false;
      }
    } else {
      return "Please Insert SQL Query!";
    }
  }
  public function __delete__($sql)
  {
    if ($sql) {
      $query = mysqli_query($this->conn, $sql);
      if ($query) {
        return true;
      } else {
        return false;
      }
    } else {
      return "Please Insert SQL Query!";
    }
  }
  public function __is_exist__($sql)
  {
    if ($sql) {
      $query = mysqli_query($this->conn, $sql);
      if (mysqli_num_rows($query) > 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return "Please Insert SQL Query!";
    }
  }
  public function __login__($sql)
  {
    if ($sql) {
      $query = mysqli_query($this->conn, $sql);
      if (mysqli_num_rows($query) == 1) {
        return mysqli_fetch_assoc($query);
      } else {
        return false;
      }
    } else {
      return "Please Insert SQL Query!";
    }
  }
  public function __signup__($sql)
  {
    if ($sql) {
      $query = mysqli_query($this->conn, $sql);
      if ($query) {
        return true;
      } else {
        return false;
      }
    } else {
      return "Please Insert SQL Query!";
    }
  }
  public function __create_table__($sql)
  {
    if ($sql) {
      $query = mysqli_query($this->conn, $sql);
      if ($query) {
        return true;
      } else {
        return false;
      }
    }
  }
  public function __scape__($value)
  {
    return mysqli_real_escape_string($this->conn, $value);
  }
  /*    OTHER USEFUL METHODS    */
  /*    Creating Random String  */
  public function __get_string__($len = 8)
  {
    $random = openssl_random_pseudo_bytes($len);
    $hex = bin2hex($random);
    $string = substr($hex, 0, $len);
    return "__ghs__" . $string;
  }
  /* Creating Random Number Generator */
  public function __get_number__($len = 5)
  {
    $random = openssl_random_pseudo_bytes($len);
    $number = 0;
    for ($i = 0; $i < $len; $i++) {
      $number = $number * 10 + (ord($random[$i]) % 10);
    }
    return $number;
  }

  /*   Get Data Type   */
  public function __get_type__($var)
  {
    if (is_array($var)) {
      return "array";
    } elseif (is_object($var)) {
      return "object";
    } elseif (is_int($var)) {
      return "integer";
    } elseif (is_float($var)) {
      return "float";
    } elseif (is_string($var)) {
      return "string";
    } elseif (is_bool($var)) {
      return "boolean";
    } elseif (is_null($var)) {
      return "null";
    } elseif (is_resource($var)) {
      return "resource";
    } else {
      return "unknown";
    }
  }
  /*     Encrypt Any String    */
  public function __encrypt__($value)
  {
    if ($this->__get_type__($value) == "string") {
      $iv = openssl_random_pseudo_bytes(
        openssl_cipher_iv_length("aes-256-cbc")
      );
      $encrypted = openssl_encrypt(
        $value,
        "aes-256-cbc",
        $this->secret_key,
        0,
        $iv
      );
      return base64_encode($iv . $encrypted);
    } else {
      return "Send A String Which You Want To Encrypt.";
    }
  }
  /* Decrypt The Encrypted String  */

  public function __decrypt__($encrypted)
  {
    if ($this->__get_type__($encrypted) == "string") {
      $decoded = base64_decode($encrypted);
      $iv = substr($decoded, 0, openssl_cipher_iv_length("aes-256-cbc"));
      $encrypted = substr($decoded, openssl_cipher_iv_length("aes-256-cbc"));
      return openssl_decrypt(
        $encrypted,
        "aes-256-cbc",
        $this->secret_key,
        0,
        $iv
      );
    } else {
      return "Send A Encrypted String Which You Want To Decrypt.";
    }
  }
  /* Save Base64 Image String As Image */
  public function __save_image__($image, $img_name)
  {
    if ($image && $img_name) {
      $imageData = base64_decode(
        preg_replace("#^data:image/\w+;base64,#i", "", $image)
      );
      $path = __DIR__ . "/images/";
      try {
        if (!file_exists($path)) {
          mkdir($path, 0777, true);
        }
        if (file_put_contents($path . $img_name, $imageData)) {
          $upload_file = $path . $img_name;
          $image_size = getimagesize($upload_file);
          $image_size_in_bytes = $image_size[0] * $image_size[1] * 3;
          if ($image_size_in_bytes > 2000000) {
            unlink($upload_file);
            return false;
          } else {
            return true;
          }
        } else {
          return false;
        }
      } catch (Exception $e) {
        return $e;
      }
    } else {
      return "First Argument Image File Strings And Second Argument The Name Of The Image Which You Want To Save As.";
    }
  }
  /* CREATE JSON WEB TOKEN */
  public function __encode_jwt__($payload)
  {
    $header = [
      "alg" => "HS256",
      "typ" => "JWT",
    ];
    $headerEncoded = rtrim(
      strtr(base64_encode(json_encode($header)), "+/", "-_"),
      "="
    );
    // Payload Encoded
    $payloadEncoded = rtrim(
      strtr(base64_encode(json_encode($payload)), "+/", "-_"),
      "="
    );
    // Generate the signature
    $has_key = $headerEncoded . "." . $payloadEncoded . $this->secret_key;
    $signature = rtrim(
      strtr(base64_encode(hash_hmac("sha256", $has_key, true)), "+/", "-_"),
      "="
    );
    $JWT = $headerEncoded . "." . $payloadEncoded . "." . $signature;
    return $JWT;
  }

  public function __decode_jwt__($jwt)
  {
    // Split the JWT into its three parts
    $parts = explode(".", $jwt);
    // Decode the header and payload
    $header = json_decode(base64_decode(strtr($parts[0], "-_", "+/")), true);
    $payload = json_decode(base64_decode(strtr($parts[1], "-_", "+/")), true);

    $has_key = $parts[0] . "." . $parts[1] . $this->secret_key;
    // Verify the signature
    $signature = hash_hmac("sha256", $has_key, true);
    $signature = rtrim(strtr(base64_encode($signature), "+/", "-_"), "=");

    // Check if the signature is valid
    if ($signature === $parts[2]) {
      // Output the decoded JWT
      return $payload;
    } else {
      echo "Invalid signature";
    }
  }
  public function __validate__($arr)
  {
    if ($this->__get_type__($arr) == "array") {
      $result = [];
      foreach ($arr as $key => $value) {
        if (trim($arr[$key]) == "") {
          array_push($result, $key . " Is Required!");
        }
      }
      if (count($result) > 0) {
        echo json_encode([
          "code" => 403,
          "status" => "failed",
          "message" => $result,
        ]);
      } else {
        return true;
      }
    } else {
      return "The Argument Required An Array !";
    }
  }
  public function __create_sql__($arr, $table, $type, $condition = null)
  {
    if ($type == "INSERT") {
      $sql_1 = "INSERT INTO $table(";
      $sql_2 = "VALUES(";
      $main = "";
      foreach ($arr as $key => $value) {
        $scaped = trim($this->__scape__($arr[$key]));
        $sql_1 .= "`$key`,";
        $sql_2 .= "'$scaped',";
      }
      $sql_1 = trim($sql_1, ",") . ")";
      $sql_2 = trim($sql_2, ",") . ")";
      $main = $sql_1 . $sql_2;
      return $main;
    } elseif ($type == "UPDATE") {
      $sql_1 = "UPDATE $table SET ";
      $cond = "";
      $main = "";
      foreach ($arr as $key => $value) {
        $scaped = trim($this->__scape__($arr[$key]));
        $sql_1 .= "`$key`='$scaped',";
      }
      $sql_1 = trim($sql_1, ",");
      foreach ($condition as $key_con => $con) {
        $cond .= $key_con . "='$con',";
      }
      $main = $sql_1 . " WHERE " . trim($cond, ",");
      return $main;
    }
    /* ___Using Methods___
    __create_sql__($data, "users", "UPDATE", ["id" => 60]);
    */
  }
}

$ghs = new __ghs__();
?>
