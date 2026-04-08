---
author: 咪路
handle: mirumodapon
avatar: auto
abstract: |
    [每日 Leetcode] 3488. Closest Equal Element Queries
date: "2026-04-16T13:43:38"
tags: ["Leetcode", "C++"]
---

效能寫得好爛 QAQ

[傳送門](https://leetcode.com/problems/closest-equal-element-queries/submissions/1980839296)

## Solution

```
class Solution {
  public:
    vector<int> solveQueries(vector<int> &nums, vector<int> &queries) {
        vector<int> results;
        map<int, vector<int>> pos;
        int size = nums.size();

        for (int i = 0; i < size; ++i) {
            pos[nums[i]].push_back(i);
        }

        for (auto &_p : pos) {
            auto &p = _p.second;

            p.insert(p.begin(), p.back() - size);
            p.push_back(p[1] + size);
        }

        for (int query : queries) {
            int cur = nums[query];
            vector<int> &p = pos[cur];

            if (p.size() <= 3) {
                results.push_back(-1);
                continue;
            }

            auto it = lower_bound(p.begin(), p.end(), query);
            int index = distance(p.begin(), it);

            results.push_back(min(p[index + 1] - query, query - p[index - 1]));
        }

        return results;
    }
};
```
