---
author: 咪路
handle: mirumodapon
avatar: auto
abstract: |
    [每日 Leetcode] 2515. Shortest Distance to Target String in a Circular Array
date: "2026-04-15T13:22:28"
tags: ["Leetcode", "C++"]
---

寫 Writeup 好累，所以就只丟程式碼了!

很我沒有挑難度寫，剛好的我想到的那天都是 Easy。

[傳送門](https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/description/)

## Solution

```cpp
class Solution {
public:
    int closestTarget(vector<string>& words, string target, int startIndex) {
        int size = words.size();
        int min = INT_MAX;

        for (int i = 0; i < size; ++i) {
            if (target != words[i]) {
                continue;
            }

            int d1 = (i + size - startIndex) % size;
            int d2 = size - d1;

            if (min > d1) {
                min = d1;
            }

            if (min > d2) {
                min = d2;
            }
        }

        return min == INT_MAX ? -1 : min;
    }
};
```
