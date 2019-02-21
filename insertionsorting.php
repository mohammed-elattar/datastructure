<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
function insertionSort(&$arr, $n)
{
  for($i=1;$i<$n;$i++){
    $needle = $arr[$i];
    for($j=$i-1;($j>=0&&$arr[$j]>$needle);$j--){
      $arr[$j+1] = $arr[$j];
    }
    $arr[$j+1] = $needle;
  }
}
$arr = array(12, 11, 13, 5, 6);
$n = sizeof($arr);
insertionSort($arr, $n);
var_dump($arr);
