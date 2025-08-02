function containsDuplicate(nums) {
  const count = {};

  for (let num of nums) {
    //   if (count[num]) return true;
    console.log("num before: ", count[num]);

    count[num] = 1;
      if (count[num]) count[num]++;


    console.log("Added key:", num, "value:" + count[num]);

    console.log("state of " + num + ": ", count[num]);
  }


  return false;
}

arr = [2, 3, 4, 6, 5, 6, 7, 8, 8];

containsDuplicate(arr);