<?php

function even_or_odd(int $n): string {
  $result = '';
  if ($n % 2 == 0) {
    $result = 'Even';
  } else {
    $result = 'Odd';
  }
  return $result; 
}
