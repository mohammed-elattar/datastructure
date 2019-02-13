<?php
function stable_selection_sort(&$arr, $n)
{
    for($i = 0;$i<$n ;$i++){
        $low = $i;
        for($j=$i+1;$j<$n;$j++){
            if($arr[$j]<$arr[$i]){
               $low = $j;
            }
        }
        $temp = $arr[$low];
        while ($low>$i){
            $arr[$low] = $arr[$low-1];
            $low--;
        }
        $arr[$i] = $temp;
    }
}

// Driver Code
$arr = array(4, 5, 3, 2, 4, 1);
$len = count($arr);
stable_selection_sort($arr, $len);
var_dump($arr);
echo "Sorted array : \n";

for ($i = 0; $i < $len; $i++)
    echo $arr[$i] . " ";
