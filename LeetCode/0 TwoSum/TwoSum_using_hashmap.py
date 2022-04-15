class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        hashmap = {}
        for i in range(len(nums)):
            complement = target - nums[i]
            if complement in hashmap:
                return [i, hashmap[complement]]
            hashmap[nums[i]] = i #key will be set to the value of i, value is the its index

#hashmap: {2:0, 11:1, 15:2}

nums = [2,11,15,7]
target = 9
s = Solution()
answer = s.twoSum(nums, target)
print(answer)

        
# Time Complexity: O(n) We traverse the list containing n elements only once. Each lookup in the table costs only O(1) time.
# Space Complexity: O(n). The extra space required depends on the number of items stored in the hash table, which stores at most n elements. 
