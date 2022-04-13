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
// [2,11,15,7]
//  p1,p2   <-- initialize position in the array

public class Solution {
    public int[] TwoSum(int[] nums, int target) {             
        for (int p1 = 0; p1 < nums.Length; p1++ ) { //initialize pointer position at the 0th indices of the array and iterate through the entire length of the array
            for (int p2 = p1 + 1; p2 < nums.Length; p2++) { //initialize pointer position at the 1st indices of the array (the index right next too p1) and iterate through the entire length of the array. This for loop will iterate through the entire are first then, the for loop before it will iterate, then the 2nd nested for will iterate through the remaining indices.
                if (nums[p1] + nums[p2] == target) { //2 + 7 = 9 compare the values of the both pointers current position in the for loop and check if the both add up to the target value
                    return new int[] {p1, p2}; //create a new array storing int values and return the current indices of p1 and p2 
                }
            }
        }
        // In case there is no solution, we'll just return null (edge case to factor in if there is no solution)
        return null;
    }
}

//Time complexity is O(n²) because of two nested for loops. 