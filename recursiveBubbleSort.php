<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
function recursiveBubbleSort(&$arr,$n){
  if($n==1){
    return;
  }
  for($i=0;$i<$n-1;$i++){
    if($arr[$i]>$arr[$i+1]){
      $temp = $arr[$i];
      $arr[$i] = $arr[$i+1];
      $arr[$i+1] = $temp;
    }
  }
  recursiveBubbleSort($arr,$n -1);
}

$arr = array(64, 34, 25, 12, 22, 11, 90);
$n = count($arr);
recursiveBubbleSort($arr,$n);

var_dump($arr);
