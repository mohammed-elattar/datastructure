<?php
function selection_sort(&$arr, $n)
{
    for($i = 0;$i < $n;$i++){
        $low = $i;
        for($j = $i+1;$j<$n;$j++){
            if($arr[$j]<$arr[$low]){
                $low = $j;
            }
        }
        if($arr[$low] < $arr[$i]){
            $temp = $arr[$i];
            $arr[$i] = $arr[$low];
            $arr[$low] = $temp;
        }
    }
}

// Driver Code
$arr = array(4, 5, 3, 2, 4, 1);
$len = count($arr);
selection_sort($arr, $len);
echo "Sorted array : \n";

for ($i = 0; $i < $len; $i++)
    echo $arr[$i] . " ";
