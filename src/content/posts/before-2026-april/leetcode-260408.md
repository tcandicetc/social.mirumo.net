---
author: 咪路
handle: mirumodapon
avatar: auto
abstract: |
    [每日 Leetcode] 3653. XOR After Range Multiplication Queries I
date: "2026-04-08T23:59:15"
tags: ["Leetcode", "C++"]
---

準備跑路的我，好像需要開始刷點 Leetcode 了！

[傳送門](https://leetcode.com/problems/xor-after-range-multiplication-queries-i/description/)

## Problem

給你一個整數陣列 `nums`，還有一堆操作 `queries`，每個 query 長 `queries[i] = [l, r, k, v]`。

然後題目給了一系列的操作：
1. 從 `index = l` 開始
2. 每次加 `k`，直到超過 `r`
3. 每次迴圈就：
    ```
    nums[index] = (nums[index] * v) % (1e9 + 7)
    ```

最後回傳 `nums` 所有數值的 `XOR`。


## Solution

```cpp
class Solution {
public:
    static constexpr int mod = 1e9 + 7;
    inline static int xorAfterQueries(vector<int>& nums, vector<vector<int>>& queries) {
        
        for (vector<int>& query : queries) {
            int idx = query[0];

            while (idx <= query[1]) {
                long n = (long)nums[idx] * query[3];
                nums[idx] = n % mod;

                idx += query[2];
            }

        }

        int result = 0;

        for (int num : nums) {
            result ^= num;
        }

        return result;
    }
};
```

## Write up

OK! 妥妥的就是把演算法直接寫在題目裡了！最大的問題應該就是數值操作可能會有 overflow 的問題了。

先什麼都不處理看看結果

```cpp
class Solution {
public:
    int xorAfterQueries(vector<int>& nums, vector<vector<int>>& queries) {
        for (vector<int> query : queries) {
            int idx = query[0];

            while (idx <= query[1]) {
                nums[idx] = ((long)nums[idx] * query[3]) % (1e9 + 7);
                idx += query[2];
            }
        }

        int result = 0;

        for (int num : nums) {
            result ^= num;
        }

        return result;
    }
};
```

果然 overflow 了，那加上 `long` (?

```cpp
class Solution {
public:
    int xorAfterQueries(vector<int>& nums, vector<vector<int>>& queries) {
        for (vector<int> query : queries) {
            int idx = query[0];

            while (idx <= query[1]) {
                nums[idx] = ((long)nums[idx] * query[3]) % (1e9 + 7);
                idx += query[2];
            }
        }

        int result = 0;

        for (int num : nums) {
            result ^= num;
        }

        return result;
    }
};
```

好的！過了...

後來研究了一下其他人的 code，有幾個可以改善的地方：

1. inline 建議編譯器將函數展開，消除函數呼叫的 overhead（push/pop stack frame）。
2. 在迴圈當中用 Reference，防止每次迴圈都重新建立新的變數。
