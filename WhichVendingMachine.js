/**
 * Created by D on 3/4/2015.
 */
/*
 You are in a room with 100 vending machines, each one numbered 0 to 99. Each vending machine has 100 candy bars inside.
 For 99 of the vending machines, all of their candy bars weigh 100 grams, but one special machine has candy bars that
 weigh 101 grams.

 Candy bars you vend are put into a pile, but you can only weigh the pile at most 10 times.

 Determine the number of the machine with the heavy candy bars.
 In this kata, you must solve this puzzle by coding the solution in the function findSpecialIdx.

 The function takes a VendingMachines object; call it vms.

 To make the ith machine vend, run vms[i].vend(); i can range from 0 to 99
 To weigh the pile, run vms.weigh()
 The index of the special machine is random, and different for each VendingMachines object. The function must return the
 index of the machine with the heavy candy bars.
 */
function findSpecialIdx(vms) {
    var prediction = 100;
    var breakPoint = 50; //one higher than where it should weigh again
    var moveBy; //moves breakpoint
    var condition = 'not done'; //changes to int when finished
    var startIndex = 0;
    function setBreakPoint(direction, i){
        if (breakPoint - 1 ===  startIndex && (direction == 'down')){ //end game condition
            return startIndex; //index of vMachine that has heavy bars
        }
        moveBy = Math.ceil((breakPoint - startIndex) / 2);
        if (direction == 'up') {
            breakPoint += moveBy;
            startIndex = i + 1;
        } else {
            breakPoint -= moveBy;
        }
        return 'not done';
    }
    for (var i = 0 ; i < 100 ; i++) {
        vms[i].vend();
        if (i == breakPoint - 1) { //if at midpoint
            if (vms.weigh() != prediction) { //if there is a heavy candy bar in the newest set
                prediction += 1; //new candy bar in pile
                condition = setBreakPoint('down', i); //@end index
                i = startIndex - 1;
            } else {
                condition = setBreakPoint('up', i);
            }
        }
        if (condition != 'not done') {
            vms[condition].vend();
            return condition;
        }
        prediction += 100; //vms.weigh() weighs total pile so every iteration adds 100
    }
}