<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

function bubbleSort(&$arr)
{
  $n = sizeof($arr);
  $swap = false;
  for ($i = 0;$i < $n;$i++) {
    for ($j = 0; $j < $n - $i - 1; $j++) {
      if ($arr[$j] > $arr[$j + 1]) {
        $temp = $arr[$j];
        $arr[$j] = $arr[$j + 1];
        $arr[$j + 1] = $temp;
        $swap = true;
      }
    }
    if(!$swap){
    break;
    }
  }
  }
  $arr = array(64, 34, 25, 12, 22, 11, 90);
  bubbleSort($arr);

var_dump($arr);

