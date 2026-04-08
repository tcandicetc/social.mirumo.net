---
author: 咪路
handle: mirumodapon
avatar: auto
abstract: |
    [每日 Leetcode] 3653. XOR After Range Multiplication Queries I
date: "2026-04-10T20:35:32"
tags: ["Leetcode", "C++"]
---

完蛋！每日都不每日了。

[傳送門](https://leetcode.com/problems/minimum-distance-between-three-equal-elements-i/description)

## Problem

會拿到一個整數陣列 `nums`。

要從裡面選三個不同的索引 (i, j, k)，而且要滿足這三個位置的數值相等，也就是：
```
nums[i] == nums[j] == nums[k]
```

在所有符合條件的數組裡，找出「距離最小」的那一組，並回傳那個最小值。

距離就是兩兩相差的總和：
```
abs(nums[i] - nums[j]) + abs(nums[i] - nums[k]) + abs(nums[j] - nums[k])
```

## Solution

```cpp
class Solution {
public:
    int minimumDistance(vector<int>& nums) {
        map<int, vector<int>> m;

        for (int i = 0; i < nums.size(); ++i) {
            m[nums[i]].push_back(i);
        }

        int result = INT_MAX;
        for (auto p = m.begin(); p != m.end(); ++p) {
            int size = p->second.size();

            if (size >= 3) {
                for (int i = 0; i < size - 2; ++i) {
                    int value = p->second[i + 2] - p->second[i];

                    if (value < result) {
                        result = value;
                    }
                }
            }
        }

        if (result == INT_MAX) {
            return -1;
        }

        return result << 1;
    }
};
```

## Writeup

今天剛好是 Easy 的題目，然後也沒有多想，幾乎一次就過了，所以就留 Code 就好了 XD
