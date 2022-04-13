

#version 1
# class Solution:
#     def twoSum(self, nums: List[int], target: int) -> List[int]:
#         for i in range(len(nums)):
#             for j in range(i + 1, len(nums)):
#                 if nums[j] == target - nums[i]:
#                     return [i, j]

#version 2
class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        for p1 in range(len(nums)): #initialize pointer position at the 0th indices of the array and iterate through the entire length of the array
            for p2 in range(p1 + 1, len(nums)): #initialize pointer position at the 1st indices of the array (the index right next too p1) and iterate through the entire length of the array
                if  nums[p1] + nums[p2] == target: #2 + 7 = 9 compare the values of the both pointers current position in the for loop and check if the both add up to the target value
                    return [p1, p2] #return the current indices of p1 and p2 

# [ 2, 11, 15, 7]
#  p1, p2   <-- initialize position in the array

#nums = [2,7,11,15]
nums = [2,11,15,7]
target = 9
s = Solution()
answer = s.twoSum(nums, target)
print(answer)