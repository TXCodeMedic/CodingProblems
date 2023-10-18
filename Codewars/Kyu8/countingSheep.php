function countSheep($arr) {
  $result = 0;
  for ($i = 0; $i < count($arr); ++$i) {
    if ($arr[$i] == true) {
      $result += 1;
    }
  }
    
  return $result;
}
