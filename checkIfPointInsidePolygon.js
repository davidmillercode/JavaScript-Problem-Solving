//NOT FINISHED
//for a point to be in a polygon there must be points on the lines where x/y is greater and less
//look at triangles and see if any triangle contains
//Return true if point is inside poly, and false if it is not
function pointInPoly(poly, point) {
    var distanceArr =[]; //contains distance each poly point is from test point
    var closestTwo = [1000000000000000000000, 100000000000000000000000000]; //closest two points on poly
    poly.forEach(function(pt, index){
        distanceArr.push(Math.abs(pt[0]-point[0]) + Math.abs(pt[1] - point[1]));
    });
    distanceArr.forEach(function(dist){ //get two smallest numbers
        if (dist < closestTwo[0]){ //2nd smallest num
            if (dist < closestTwo[1]){ //smallest num
                closestTwo[0] = closestTwo[1];
                closestTwo[1] = dist;
            } else closestTwo[0] = dist;
        }
    });
    closestTwo[0] = distanceArr.indexOf(closestTwo[0]);
    closestTwo[1] = distanceArr.indexOf(closestTwo[1]);
    var thirdPt = []; //final point to form triangle
    var horizontalCent = ((closestTwo[0][0] - point[0]) * (closestTwo[1][0] - point[0]) < 0);
    poly.forEach(function(polyPt){
       if (horizontalCent){

       }
    });


}
