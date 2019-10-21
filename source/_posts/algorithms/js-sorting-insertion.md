---
title: Sorting Algorithms in JavaScript. Insertion Sort
categories:
  - Algorithms
tags:
  - Algorithms
  - JavaScript
  - Sorting
---

## Insertion Sort

Insertion sort algorithm in js can be presented as following code:
```js
function sort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                const temp = arr[i];
                arr.splice(i, 1);
                arr.splice(j, 0, temp);
                break;
            }
        }
    }

    return arr;
}
```

So we should:

Create two nested loops where inner loop up border is limited by outer loop variable. For each of array element pairs received by nested loops we should make exchange described by code:

```js
if (arr[i] < arr[j]) {
    const temp = arr[i];
    arr.splice(i, 1);
    arr.splice(j, 0, temp);
    break;
}
```

It has O(n^2) complexity.