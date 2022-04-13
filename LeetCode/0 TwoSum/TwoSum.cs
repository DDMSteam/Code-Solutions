//version 1
public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        int[] result = new int[2];
        for (int i = 0; i < nums.Length - 1; i++ ) {
            for (int j = i + 1; j < nums.Length; j++) {
                if (nums[i] + nums[j] == target) {
                    result[0] = i;
                    result[1] = j;
                    return result;
                }
            }
        }
        return result;
    }
}

//version 2
public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        for (int i = 0; i < nums.Length - 1; i++ ) {
            for (int j = i + 1; j < nums.Length; j++) {
                if (nums[i] + nums[j] == target) {
                    return new int[] {i, j};
                }
            }
        }
        // In case there is no solution, we'll just return null
        return null;
    }
}