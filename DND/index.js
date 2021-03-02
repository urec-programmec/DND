$(document).ready(function () {

    
//#region map
    var map = [[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 18, 18, 18, 18, 18, 18, 18, -1, -1, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 19, 19, 19, -1, -1, -1, -1, -1, -1], [-1, 1, 1, 1, 1, 1, -1, -1, -1, -1, 3, 3, 3, 3, 3, 3, 3, 3, -1, -1, -1, -1, -1, -1, -1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, -1, -1, -1, -1, -1, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 19, 19, 19, 19, 19, 19, 19, -1, -1], [-1, 1, 1, 1, 1, 1, -1, -1, -1, -1, 3, 3, 3, 3, 3, 3, 3, 3, 3, -1, -1, -1, -1, -1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, -1, -1, -1, -1, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 0, 0, 0, 0, -1, -1, -1, -1, -1, 19, 19, 19, 19, 19, 19, 19, -1, -1], [-1, 1, 1, 1, -1, -1, -1, -1, -1, -1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, -1, -1, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 0, 0, 0, 0, -1, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, -1, -1], [-1, 1, 1, 1, -1, -1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 4, 4, 4, 4, 4, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, -1, -1, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, -1, -1, -1, 0, 0, -1, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, -1, -1], [-1, 1, 1, 1, -1, -1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, -1, -1, -1, -1, -1, 4, 4, 4, 4, 4, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1, 4, 4, 4, 4, 4, 4, 4, 0, 0, 18, 18, 18, 18, 18, 18, 18, 18, 18, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, 18, 18, 18, 18, -1, 18, 18, 18, 18, 18, 18, 18, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, -1], [-1, 0, 0, -1, -1, -1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, -1, -1, -1, -1, -1, -1, 4, 4, 4, -1, -1, -1, 6, 6, 6, 6, 6, -1, -1, -1, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, -1, -1, 18, 18, 18, 18, 18, 18, 18, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 18, 18, 18, 18, 18, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, 19, 19, 19, 19, 19, 19, 19, 19, -1], [-1, 0, 0, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, 3, 3, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6, 6, 6, 6, 6, 6, 6, -1, -1, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, -1, -1, 18, 18, 18, 18, 18, -1, -1, -1, -1, -1, -1, -1, 0, 0, 17, 17, 17, 17, 17, 17, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 20, 20, 20, 20, 20, -1, -1, -1, -1, 19, 19, 19, 19, 19, 19, 19, -1], [-1, 0, 0, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6, 6, 6, 6, 6, 6, 6, -1, -1, 0, 0, -1, -1, 4, 4, 4, 4, 4, 4, -1, -1, -1, 18, 18, 18, -1, -1, -1, -1, -1, -1, -1, -1, 17, 17, 17, 17, 17, 17, 17, 17, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 0, 19, 19, 19, 19, 19, 19, 19, -1], [-1, 0, 0, -1, 2, 2, 2, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, -1, -1, -1, 0, 0, -1, -1, 4, 4, 4, 4, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 0, 19, 19, 19, 19, 19, 19, 19, -1], [-1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, -1, -1, -1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, -1, -1, -1, 7, 7, -1, -1, 4, 4, 4, 4, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, -1, -1, 19, 19, 19, 19, 19, 19, 19, -1], [-1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, -1, -1, 7, 7, -1, -1, 4, 4, 4, 4, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 20, 20, 20, 20, 20, 20, 20, 20, 20, -1, 19, 19, 19, 19, 19, 19, 19, -1, -1], [-1, -1, -1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, -1, -1, 7, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, -1, -1, -1, -1, -1, 22, 22, 22, 22, 22, 22, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 20, 20, 20, 20, -1, 19, 19, 19, 19, 19, 19, 19, -1, -1], [-1, -1, -1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, -1, -1, -1, 5, 5, 5, 5, -1, -1, -1, -1, -1, -1, 6, 6, 6, 6, 6, 6, 6, 6, -1, -1, -1, 7, 7, 7, 7, 7, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, 17, 17, 17, 17, 17, 17, 17, 17, -1, -1, -1, -1, -1, -1, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, -1, -1, -1, -1, -1, -1, -1, -1, 20, 20, 20, 20, -1, 0, 0, -1, 19, 19, 19, -1, -1, -1], [-1, -1, -1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, -1, -1, -1, 5, 5, 5, 5, 5, -1, -1, -1, -1, -1, -1, 6, 6, 6, 6, 6, 6, -1, -1, -1, -1, 7, 7, 7, 7, 7, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, 17, 17, 17, 17, 17, 17, 17, -1, -1, -1, -1, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, -1, -1, -1, -1, -1, 20, 20, 20, 20, 20, 20, 20, -1, 19, 19, 19, -1, -1, -1], [-1, -1, -1, 2, 2, -1, 0, 0, -1, 2, 2, 2, 2, -1, -1, -1, -1, 5, 5, 5, 5, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 7, 7, 7, 7, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, 0, 0, 17, 17, 17, -1, -1, -1, -1, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, -1, -1, -1, 20, 20, 20, 20, 20, 20, 20, -1, 19, 19, 19, -1, -1, -1], [-1, -1, -1, -1, -1, -1, 0, 0, -1, 2, 2, 2, 2, -1, -1, -1, -1, 5, 5, 5, 5, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 7, 7, 7, 7, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, 22, 22, 22, 22, 22, 22, 22, 22, 22, -1, -1, -1, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, -1, -1, -1, 20, 20, 20, 20, 20, 20, 20, -1, 19, 19, 19, -1, -1, -1], [-1, -1, -1, -1, -1, 10, 10, 10, -1, 2, 2, 2, 2, -1, -1, -1, -1, -1, 5, 5, 5, -1, -1, -1, -1, -1, -1, -1, 8, 8, 8, 8, 8, 8, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 16, 16, 16, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 22, 22, 22, 22, 22, 22, 22, -1, -1, 20, 20, 20, 20, 20, 20, 20, -1, 19, 19, 19, -1, -1, -1], [-1, -1, -1, -1, -1, 10, 10, 10, -1, 2, 2, 2, 2, -1, -1, -1, -1, -1, 5, 5, 5, -1, 5, 5, -1, -1, -1, -1, 8, 8, 8, 8, 8, 8, 8, 8, 8, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, 16, 16, 16, 16, 16, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, 22, 22, 22, 22, 22, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 22, 22, 22, 22, 22, 22, -1, -1, 20, 20, -1, 20, 20, 20, 20, -1, -1, 19, 19, -1, -1, -1], [0, 0, 0, 0, 0, 10, 10, 10, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, 5, 5, 5, 5, 5, 5, 5, 5, -1, -1, -1, -1, 8, 8, 8, 8, 8, 8, 8, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1, 16, 16, 16, 16, 16, 16, 16, 16, 16, -1, -1, -1, 0, 0, 0, 0, 22, 22, 22, 22, 22, 22, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 22, 22, -1, -1, -1, -1, -1, -1, 22, 22, 22, 22, 22, -1, -1, 20, 20, -1, 20, 20, 20, 20, -1, -1, 0, 0, -1, -1, -1], [0, 0, 0, 0, 0, 10, 10, 10, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, 5, 5, 5, 5, 5, 5, 5, 5, -1, -1, -1, -1, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, -1, -1, -1, -1, -1, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, -1, -1, 0, 0, 0, 0, 22, 22, 22, 22, 22, 22, -1, -1, -1, -1, -1, -1, -1, -1, -1, 22, 22, 22, 22, -1, -1, -1, -1, -1, 22, 22, 22, 22, 22, -1, -1, 0, 0, -1, 20, 20, 20, 20, -1, -1, 0, 0, -1, -1, -1], [0, 0, 0, 0, 0, 10, 10, 10, 10, -1, -1, 0, 0, -1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, -1, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0, 16, 16, 16, 16, 16, 16, 16, -1, 16, 16, 16, 16, -1, -1, -1, -1, -1, -1, 22, 22, 22, 22, 22, 22, -1, -1, -1, -1, -1, -1, -1, -1, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1], [-1, -1, -1, -1, -1, 10, 10, 10, 10, -1, -1, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, -1, -1, -1, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0, 16, 16, 16, 16, 16, 16, -1, -1, -1, 16, 16, 16, -1, -1, -1, -1, -1, -1, -1, 22, 22, 22, 22, -1, -1, -1, -1, -1, -1, -1, -1, -1, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1, 28, 28, -1, -1, -1], [-1, -1, -1, -1, -1, 10, 10, 10, 10, -1, -1, 0, 0, 0, 5, 5, 5, 5, 5, 5, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, 8, 8, 8, 8, 8, 8, 8, 8, 8, -1, -1, -1, -1, -1, 16, 16, 16, 16, -1, -1, -1, -1, 16, 16, 16, 16, -1, -1, -1, -1, -1, -1, 22, 22, 22, 22, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 22, 22, 22, 22, -1, -1, -1, -1, 22, 22, 22, 22, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, 28, 28, 28, 28, 28, -1, -1], [0, 0, 0, 0, 0, 10, 10, 10, 10, -1, -1, -1, -1, -1, 5, 5, 5, 5, 0, 0, -1, -1, -1, -1, -1, -1, 9, 9, 9, 9, -1, -1, 8, 8, 8, 8, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, 16, 16, 16, 16, 16, -1, -1, -1, 16, 16, 16, 16, 16, 16, -1, -1, -1, -1, 22, 22, 22, 22, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 22, 22, -1, -1, -1, 22, 22, 22, 22, 22, 22, -1, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, 28, 28, 28, 28, 28, -1, -1], [0, 0, 0, 0, 0, 10, 10, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, 27, 27, -1, -1, 9, 9, 9, 9, -1, -1, 8, 8, 8, 8, 8, -1, -1, -1, 15, 15, 15, 15, -1, -1, 16, 16, 16, 16, 16, 16, -1, -1, -1, 16, 16, 16, 16, 16, -1, -1, -1, -1, 22, 22, 22, 22, 22, 22, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 22, 22, 22, 22, 22, 22, -1, -1, 0, 0, 0, 0, 0, -1, -1, -1, 28, 28, 28, 28, 28, 28, 28, -1, -1], [0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 27, 27, 27, 27, -1, -1, 9, 9, 9, 9, 9, 0, 8, 8, 8, 8, 8, -1, -1, 15, 15, 15, 15, 15, -1, -1, -1, -1, 16, 16, 16, 16, -1, -1, -1, -1, -1, 16, 16, 16, 16, -1, -1, -1, -1, -1, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, -1, -1, -1, -1, -1, -1, 22, 22, 22, 22, 22, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, 28, 28, 28, 28, 28, 28, 28, 28, -1], [0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 11, 11, -1, -1, -1, -1, 27, 27, 27, 27, 27, 27, -1, -1, 9, 9, 9, 9, 9, 0, 8, 8, -1, 0, 0, 0, 0, 15, 15, 15, 15, 15, 15, -1, -1, -1, -1, -1, 16, 16, 16, -1, -1, -1, -1, 16, 16, 16, 16, 0, 0, 0, -1, -1, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, -1, -1, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, 28, 28, 28, 28, 28, 28, 28, 28, 28, -1], [0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 11, 11, 11, 11, -1, -1, 27, 27, 27, 27, 27, 27, -1, -1, 9, 9, 9, 9, 9, -1, 8, 8, -1, 0, 0, 0, 0, 15, 15, 15, 15, 15, 15, -1, -1, -1, -1, -1, 16, 16, 16, 16, -1, -1, -1, -1, 16, 16, 16, 0, 0, 0, -1, -1, -1, -1, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, -1, -1, -1, -1, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, 28, 28, 28, 28, 28, 28, 28, 28, 28, -1], [0, 0, -1, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, -1, -1, -1, 27, 27, 27, 27, 27, -1, -1, -1, -1, 9, 9, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, 15, 15, 15, 15, 15, -1, -1, -1, -1, -1, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, -1, 0, 0, -1, -1, -1, -1, -1, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, -1, -1, -1, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, 28, 28, 28, 28, 28, 28, 28, 28, 28, -1], [0, 0, 0, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, -1, -1, -1, 27, 27, 27, 27, 27, -1, -1, -1, -1, 9, 9, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, -1, -1, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, 22, 22, 22, 22, 22, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, -1, -1, -1, 24, 24, 24, -1, -1, -1, -1, 28, 28, 28, 28, 28, 28, 28, -1], [0, 0, 0, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 0, 0, 0, 27, 27, 27, 27, 27, -1, -1, -1, -1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, -1, -1, -1, 14, 14, 14, 14, 14, 14, 14, -1, -1, -1, -1, -1, -1, -1, -1, 16, 16, 16, -1, -1, -1, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, -1, -1, -1, -1, 24, 24, 24, 24, 24, -1, -1, -1, -1, 28, 28, 28, 28, 28, 28, 28, -1], [-1, -1, -1, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 0, 0, 0, 27, 27, 27, 27, 27, -1, -1, -1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 14, 14, 14, 14, 14, 14, 14, 14, 14, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, -1, 0, 0, 0, 24, 24, 24, 24, 24, -1, -1, -1, -1, -1, -1, 28, 28, 28, 28, 28, -1], [-1, -1, -1, -1, -1, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, -1, -1, -1, 27, 27, 27, 27, 27, -1, -1, -1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 14, 14, 14, 14, 14, 14, 14, 14, 14, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, 21, 21, -1, -1, -1, -1, -1, 25, 25, -1, -1, -1, -1, 0, 0, 0, 24, 24, 24, 24, -1, -1, -1, -1, -1, -1, -1, 28, 28, 28, 28, 28, -1], [-1, -1, -1, -1, -1, 11, 11, 11, -1, -1, -1, -1, 11, 11, 11, 11, -1, -1, -1, 27, 27, 27, 27, 27, -1, -1, -1, -1, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9, -1, -1, -1, 14, 14, 14, 14, 14, 14, 14, 14, 14, -1, -1, -1, -1, 26, 26, 26, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, -1, -1, -1, 21, 21, 21, 21, 21, -1, -1, -1, 25, 25, 25, 25, -1, -1, -1, 0, 0, -1, -1, 24, 24, 24, -1, -1, -1, -1, -1, -1, -1, 28, 28, 28, 28, 28, -1], [-1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, 0, 11, 11, -1, -1, -1, 27, 27, 27, 27, 27, 27, 27, 27, 0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9, -1, -1, -1, 14, 14, 14, 14, 14, 14, 14, 14, 14, -1, -1, -1, 26, 26, 26, 26, 26, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, -1, -1, 21, 21, 21, 21, 21, 21, -1, -1, -1, 25, 25, 25, 25, -1, -1, -1, 0, 0, -1, -1, -1, 0, 0, -1, -1, 23, 23, 23, -1, -1, -1, 28, 28, 28, 28, -1], [-1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, 27, 27, 27, 27, 27, 27, 27, 27, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 14, 14, 14, 14, 14, 14, -1, -1, 26, 26, 26, 26, 26, 26, 26, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, 21, 21, 21, 21, 21, 21, -1, -1, -1, 25, 25, 25, 25, 25, -1, -1, 0, 0, -1, -1, -1, 0, 0, -1, 23, 23, 23, 23, 23, 23, -1, 28, 28, 28, 28, -1], [-1, 12, 12, 12, 12, 12, 12, 12, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, 27, 27, 27, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 14, 14, 14, 14, 14, -1, -1, -1, 26, 26, 26, 26, 26, 26, 26, -1, -1, -1, -1, -1, -1, -1, -1, 25, 25, 25, -1, -1, -1, 21, 21, 21, 21, -1, -1, -1, -1, -1, 25, 25, 25, 25, -1, -1, 0, 0, -1, -1, -1, 0, 0, -1, 23, 23, 23, 23, 23, 23, -1, -1, 0, 0, -1, -1], [-1, 12, 12, 12, 12, 12, 12, 12, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, 26, 26, 26, 26, -1, -1, -1, -1, -1, -1, -1, 14, 14, 14, 14, 14, 14, 0, 0, 0, 26, 26, 26, 26, 26, 26, 26, 26, -1, -1, -1, -1, -1, -1, 25, 25, 25, 25, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 25, 25, 25, 25, 0, 0, 0, 0, -1, -1, -1, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 0, 0, 0, -1, -1], [-1, 12, 12, 12, 12, 12, 12, 12, -1, -1, 12, 12, -1, 0, 0, 0, 13, 13, 13, 13, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, 26, 26, 26, 26, 26, 26, 26, -1, -1, -1, -1, -1, 14, 14, 14, 14, 14, 14, 0, 0, 0, 26, 26, 26, 26, 26, 26, 26, 26, -1, -1, -1, -1, -1, 25, 25, 25, 25, 25, 25, 25, -1, -1, -1, -1, -1, -1, -1, -1, -1, 25, 25, 25, 25, 25, 0, 0, 0, 0, -1, -1, -1, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 0, 0, 0, -1, -1], [-1, 12, 12, 12, 12, 12, 12, 12, -1, -1, 12, 12, -1, 0, 0, 0, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, -1, 0, 0, 26, 26, 26, 26, 26, 26, 26, 26, -1, -1, -1, -1, -1, 14, 14, 14, 14, 14, -1, -1, -1, 26, 26, 26, 26, 26, 26, 26, 26, -1, -1, -1, -1, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, -1, -1, 25, 25, 25, 25, 25, -1, -1, -1, -1, -1, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, -1, -1, -1, -1, -1, -1, -1], [-1, -1, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, -1, -1, -1, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 0, 0, 26, 26, 26, 26, 26, 26, 26, 26, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 26, 26, 26, 26, 26, 26, 26, 26, 26, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, -1, -1, -1, -1, -1, -1, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, 12, 12, 12, 12, 12, 12, 12, 12, 12, -1, -1, -1, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 0, 0, -1, 26, 26, 26, 26, 26, 26, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 0, 0, 0, 0, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, 12, 12, 12, 12, 12, 12, 12, 12, 12, -1, -1, -1, -1, 13, 13, 13, 13, 13, 13, 13, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, 26, 26, 26, 26, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, -1, -1, -1, -1, -1, 25, 25, 25, 25, 25, 25, -1, -1, -1, -1, -1, -1, 25, 25, 25, 25, 25, 25, 25, 25, 0, 0, 0, 0, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, 12, 12, 12, 12, 12, 12, 12, 12, 12, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, -1, -1, -1, -1, -1, -1, -1, -1, -1, 25, 25, 25, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 23, 23, 23, 23, 23, 23, 23, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, 12, 12, 12, 12, 12, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 23, 23, 23, 23, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]

//#endregion

    window.defaultWidth = window.innerWidth;
    window.onresize = function () {

        let x = (window.defaultWidth / window.innerWidth).toFixed(2);

        for (let i of document.getElementsByClassName("lamp2")){
            i.style.transform = "scale(" + 1 / x + ")";                
        }   

        for (let i in lamps){
            lamps[i][0].css({left: (lamps[i][2] * size + deltaX) / x, top: (lamps[i][3] * size + deltaY) / x});
            lamps[i][1].css({left: (lamps[i][2] * size + deltaX) / x, top: (lamps[i][3] * size + deltaY) / x});

            lamps[i][0].height(250 / x);
            lamps[i][0].width(250 / x);

            lamps[i][0].css({marginTop: -125 / x, marginLeft: -125 / x});
        }
       
        document.getElementById("hero").style.transform = "scale(" + 1 / x + ")";
        document.getElementById("hero").style.left = (heroX * size + deltaX) / x + "px";
        document.getElementById("hero").style.top = (heroY * size + deltaY) / x + "px";
        

        document.getElementById("icon-button-interface").style.transform = "scale(" + 1 / x + ")";

        
        $("#circle").height(250 / x);
        $("#circle").width(250 / x);
        $("#circle").css({left: (heroX * size + deltaX) / x, top: (heroY * size + deltaY) / x});        
        $("#circle").css({marginTop: -125 / x, marginLeft: -125 / x});

        $("#circle2").css({left: (heroX * size + deltaX) / x, top: (heroY * size + deltaY) / x});
    }    

    function interfaceMoveOut(event) {
        let interfase = $("#interface"),
            flag = interfase.css("display") == "none" ? false : true;
        if (flag) {
            interfase.hide(1000);
            $("#button-interface").animate({
                left: "6%",
                top: "2%"
            })
        } else {
            interfase.show("slow");
            interfase.css("display", "flex");
            $("#button-interface").animate({
                left: "1.5%",
                top: "1.5%"
            });
        }
    }

    function closeWindow(){
        PENDING = false;
        // what = "info";
        // // console.log($("#content-explanation-info"));
        // if ($("#content-explanation-info").text() == "")
        //     what = "input";        

        if (whatnow == "info"){
            $("#pop-container-info").hide(750);
            $("#content-explanation-info").html("");
            $("#content-actions-info").html("");
        }
        else if (whatnow == "input"){
            $("#pop-container-input").hide(750);
            $("#content-explanation-input").html("");
            $("#content-actions-input").html("");
        }
        else {
            $("#pop-container-get").hide(750);
            $("#content-explanation-get").html("");
            $("#content-actions-get").html("");
        }
        whatnow = "";
    }

    function eventInfo(options){
        whatnow = "info";

        PENDING = true;
        let content = $("#content-explanation-info"),
            actions = $("#content-actions-info");

        if ("main" in options && "head" in options["main"] && "main" in options["main"]) {
            let P = document.createElement("P");
            P.textContent = options["main"]["head"];
            content.append(P);
            P = document.createElement("P");
            P.textContent = options["main"]["main"];
            content.append(P);

        }
        if ("buttons" in options) {
            for (let elem of options["buttons"]) {
                let button = document.createElement("button");
                button.textContent = elem["text"];
                button.className = "interface-button-action";
                button.onclick = elem["func"];
                actions.append(button);
            }
        }
        $("#pop-container-info").show(750);
    }

    function eventGet(options){
        whatnow = "get";

        PENDING = true;

        let content = $("#content-explanation-get"),
            actions = $("#content-actions-get");

        
        let P = document.createElement("P");
        P.textContent = options["main"]["head"];
        content.append(P);
        P = document.createElement("P");
        P.textContent = options["main"]["main"];
        content.append(P);

        let text = document.createElement("input");
        text.type = "text";
        text.id = "text_get";
        text.className = "textblock";
        text.placeholder = "Хочешь яблочко - сруби яблоню.";
        actions.append(text);

        let button = document.createElement("button");
        button.textContent = options["buttons"][0]["text"];
        button.className = "interface-button-action";
        button.onclick = options["buttons"][0]["func"];
        button.id = "button_get"
        actions.append(button);

        $("#pop-container-get").show(750);
    }

    function eventInput(options){
        whatnow = "input";

        PENDING = true;
        let content = $("#content-explanation-input"),
            actions = $("#content-actions-input");
        
        let P = document.createElement("P");
        P.id = "maintext";
        P.textContent = options["main"]["head"];
        content.append(P);
        
        content.append(document.createElement("hr"));
        P = document.createElement("P");
        P.textContent = "(введи последовательность комнат от начала до сюда и убежишь)";
        content.append(P);
        content.append(document.createElement("hr"));

        P = document.createElement("P");
        P.textContent = options["main"]["main"];
        content.append(P);
        
        let text = document.createElement("input");
        text.type = "text";
        text.id = "text";
        text.className = "textblock";
        text.placeholder = "Вводи скорей ответ, дурень!";
        actions.append(text);

        let button = document.createElement("button");
        button.textContent = options["buttons"][0]["text"];
        button.className = "interface-button-action";
        button.onclick = options["buttons"][0]["func"];        
        actions.append(button);

        actions.append(document.createElement("hr"));

        text = document.createElement("input");
        text.type = "text";
        text.id = "text2";
        text.className = "textblock";
        text.placeholder = "...через пробел...";
        actions.append(text);

        button = document.createElement("button");
        button.textContent = options["buttons"][1]["text"];
        button.className = "interface-button-action";
        button.onclick = options["buttons"][1]["func"];
        button.id = "GO";
        actions.append(button);


        $("#pop-container-input").show(750);
    }

    function move(code){
        let xx = heroX;
        let yy = heroY;

        if (code == '38') {
            if ($("#hero").position().top >= 0 && map[heroY - 1][heroX] != -1) {
                heroY -= 1;
                $(".hero").css("background", "url('source/" + "back.png" + "') no-repeat");
            }
        } else if (code == '40') {
            if ($("#hero").position().top <= $(window).height() && map[heroY + 1][heroX] != -1) {
                heroY += 1;
                $(".hero").css("background", "url('source/" + "front.png" + "') no-repeat");
            }
        } else if (code == '37') {
            if ($("#hero").position().left - size / 2 >= 0 && map[heroY][heroX - 1] != -1) {
                heroX -= 1;
                $(".hero").css("background", "url('source/" + "left.png" + "') no-repeat");
            }
        } else if (code == '39') {
            if ($("#hero").position().left + size / 2 <= $(window).width() && map[heroY][heroX + 1] != -1) {
                heroX += 1;
                $(".hero").css("background", "url('source/" + "right.png" + "') no-repeat");
            }
        } 

        if (xx == heroX && yy == heroY)
            return [false, false];

        inlastroom = inroom

        if (map[heroY][heroX] > 0)
            inroom = true;
        else
            inroom = false;

        room = map[heroY][heroX];
        map[heroY][heroX] = "x";

        $("#hero").animate({
            top: size * heroY + deltaY,
            left: size * heroX + deltaX
        }, 100);

        let x = size * heroX + deltaX < ($(window).width() - 125 / (window.defaultWidth / window.innerWidth).toFixed(2)) ?
            size * heroX + deltaX : ($(window).width() - 125 / (window.defaultWidth / window.innerWidth).toFixed(2)),

            y = size * heroY + 18 < ($(window).height() - 125 / (window.defaultWidth / window.innerWidth).toFixed(2)) ?
                size * heroY + 18 : ($(window).height() - 125 / (window.defaultWidth / window.innerWidth).toFixed(2));

        $("#circle").animate({
            left: x,
            top: y
        }, 100);

        $("#circle2").animate({
            left: x,
            top: y
        }, 100);

       
        MOVES_5[2] = MOVES_5[1];
        MOVES_5[1] = MOVES_5[0];
        MOVES_5[0] = [xx, yy];

        return [true, !inlastroom && inroom];
    }

    function ck(e) {
        if (e.keyCode == '37' || e.keyCode == '38' || e.keyCode == '39' || e.keyCode == '40') {
            if (onkeypressUp) {
                onkeypressUp = false;
                onkeypressDown = true;
            }
        }
    }

    function heroMoveTo(x, y){
        $("#hero").offset({
            top: size * y + deltaY,
            left: size * x + deltaX
        })
        $("#circle").offset({
            top: size * y - 109,
            left: size * x + deltaX - 125
        })
        $("#circle2").offset({
            top: size * y - 109,
            left: size * x + deltaX - 125
        })

        map[heroY][heroX] = room;
        room = map[y][x];
        map[y][x] = "x";
        heroX = x;
        heroY = y;
    }

    function checkKey(e) {
        // console.log(e.keyCode);

        if(PENDING && e.keyCode == 27 && $("#content-explanation-input").text() == "")
            closeWindow();
        
        if(PENDING)
            return null;

        if(e.keyCode == 67)
            clearAll();


        if (e.keyCode == '90') {            
            putTorch();
            return null;            

        } else if (e.keyCode == '88') {
            getTorch();  
            return null;         
        }


        if (!onkeypressDown)
            return null;

        else {
            onkeypressDown = false;
            onkeypressUp = true;
        }

        e = e || window.event;
        map[heroY][heroX] = room;

        let isgone = true;
        if (e.keyCode == '37' || e.keyCode == '38' || e.keyCode == '39' || e.keyCode == '40') 
            isgone = move(e.keyCode);

        let behind = 0;
        let sandX = 0;
        let wickX = 0;
        let powredX = 0

        if (isgone[0]){
            
            for (let i = 0; i < VARRIORS_CURRENT.length; i++){

                behind = Math.sqrt((heroX - VARRIORS_CURRENT[i]["x"]) * (heroX - VARRIORS_CURRENT[i]["x"]) + (heroY - VARRIORS_CURRENT[i]["y"]) * (heroY - VARRIORS_CURRENT[i]["y"]));
                if (behind <= 5)
                    VARRIORS_CURRENT[i]["div"].style.opacity = (5 - behind) / 5
                else 
                    VARRIORS_CURRENT[i]["div"].style.opacity = 0;

                if (behind <= 3){
                    attack(VARRIORS_CURRENT[i]);
                    break;
                }
            }

            for (let i = 0; i < SAND.length; i++){
                sandX = Math.sqrt((heroX - SAND[i]["x"]) * (heroX - SAND[i]["x"]) + (heroY - SAND[i]["y"]) * (heroY - SAND[i]["y"]));
                if (sandX <= 7)
                    SAND[i]["div"].style.opacity = (7 - sandX) / 7;
                else 
                    SAND[i]["div"].style.opacity = 0;

                if (sandX  == 0){
                    getResourse(SAND[i]);
                    break;
                }
            }

            for (let i = 0; i < WICK.length; i++){
                wickX = Math.sqrt((heroX - WICK[i]["x"]) * (heroX - WICK[i]["x"]) + (heroY - WICK[i]["y"]) * (heroY - WICK[i]["y"]));
                if (wickX <= 7)
                    WICK[i]["div"].style.opacity = (7 - wickX) / 7;
                else 
                    WICK[i]["div"].style.opacity = 0;

                if (wickX  == 0){
                    getResourse(WICK[i]);
                    break;
                }
            }

            for (let i = 0; i < POWRED.length; i++){
                powredX = Math.sqrt((heroX - POWRED[i]["x"]) * (heroX - POWRED[i]["x"]) + (heroY - POWRED[i]["y"]) * (heroY - POWRED[i]["y"]));
                if (powredX <= 7)
                    POWRED[i]["div"].style.opacity = (7 - powredX) / 7;
                else 
                    POWRED[i]["div"].style.opacity = 0;

                if (powredX  == 0){
                    getResourse(POWRED[i]);
                    break;
                }
            }

        }

        if (isgone[1]){
            if(room == 10)
                MOVE = [10];

            else if (room != 0 && MOVE.length > 1 && MOVE[MOVE.length - 2] == room){
                MOVE.pop(MOVE.length);
                // MOVE.pop(MOVE.length);
            }
            else if (room != 0 && (MOVE.length != 0 && MOVE[MOVE.length - 1] != room || MOVE.length == 0))
                MOVE.push(room);

            if (room in SHOWINFO && behind > 3 && sandX != 0 && wickX != 0 && powredX != 0)
                sayAbout();
        }     
    }

    function putTorch(){
        if (room != 0 && !(room in lamps) && torchs > 0){
            torchs --;
            var lamp1 = $("#circle").clone(),
                lamp2 = $("#circle2").clone();

            lamp1.attr('id', "lamp_" + heroX + "_" + heroY);
            lamp2.attr('id', "lamp2_" + heroX + "_" + heroY);     
            
            lamp1.addClass("lamp1");
            lamp2.addClass("lamp2");

            lamp1.appendTo("body");
            lamp2.appendTo("body");
            lamp2.css("background", "url('source/lamp.png') no-repeat");

            lamps[room] = [lamp1, lamp2, heroX, heroY];
            $("#count-item-torch").text(torchs);
        }
    }

    function getTorch(){
        if (room in lamps){
            torchs ++;
            lamps[room][0].remove();
            lamps[room][1].remove();

            delete lamps[room];
            $("#count-item-torch").text(torchs);
        }
    }

    function sayAbout(){
        if (room != 0)
            eventInfo({
                "main": {
                    "head": "Вы вошли в комнату номер " + String(room) + ".", 
                    "main":"Будьте начеку... Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, molestiae.",
                },
                "buttons": [{
                    "text": "Окей...",
                    "func": closeWindow
                },{
                    "text": "Больше не показывать",
                    "func": function (){
                        if (room in SHOWINFO)
                            delete SHOWINFO[room];
                        closeWindow();
                    }
                }]
            });
        else 
            eventInfo({
                "main": {
                    "head": "Вы находитесь в коридоре номер " + parseInt(Math.random() * 28 + 1) + ".", 
                    "main":"Выбирайтесь из этого междумирья, здесь стены искажают пространство. Как скоро они исказят и вас до неузнаваемости?..",
                },
                "buttons": [{
                    "text": "Окей...",
                    "func": closeWindow
                }]
            });
    }

    function clearAll(){
        if (SHOWINFO.length != 0){
            SHOWINFO = [];
            eventInfo({
                "main": {
                    "head": "XAXAXA",
                    "main":"БОЛЬШЕ ТЫ НИЧЕГО НЕ УЗНАЕШЬ, ГЛУПЕЦ-ГОЛУБЕЦ!",
                },
                "buttons": [{
                    "text": "Окей...",
                    "func": closeWindow
                }]
            });
        }
    }

    function takeXYbyRoom(room){
        let vars = [];
        for (let i = 0; i < map.length; i ++){
            for (let j = 0; j < map[0].length; j ++){
                if (map[i][j] == room){
                    vars.push([j, i]);
                }
            }    
        }
        let rand = parseInt(Math.random() * vars.length);

        return [vars[rand][0], vars[rand][1]];
    }

    function addVarrior(){
        if (VARRIORS_GLOBAL.length != 0) {
            let newroom = parseInt(Math.random() * 28 + 1);
            while (newroom in lamps || newroom == room ||  VARRIORS_IN.indexOf(newroom) != -1)
                newroom = parseInt(Math.random() * 28 + 1);
            
            VARRIORS_IN.push(newroom);

            let XY = takeXYbyRoom(newroom);

            let xVar = XY[0];
            let yVar = XY[1];

            let varrior = VARRIORS_GLOBAL.pop();
            varrior["room"] = newroom;
            varrior["x"] = xVar;
            varrior["y"] = yVar;

            let div = document.createElement("div");
            div.className = "varrior";
            div.style.left = xVar * size + "px";
            div.style.top = yVar * size + "px";
            div.style.height = size + "px";
            div.style.width = size + "px";
            div.id = "varrior" + newroom;
            
            
            varrior["div"] = div;

            $("#varriors").append(div);
            VARRIORS_CURRENT.push(varrior);
        }   
    }

    function addResourse(name, task, answer){
        let newroom = parseInt(Math.random() * 28 + 1);
        while (newroom == room || VARRIORS_IN.indexOf(newroom) != -1 || SAND_IN.indexOf(newroom) != -1 || WICK_IN.indexOf(newroom) != -1 || POWRED_IN.indexOf(newroom) != -1)
            newroom = parseInt(Math.random() * 28 + 1);

        let XY = takeXYbyRoom(newroom);

        let xVar = XY[0];
        let yVar = XY[1];

        let resourse = {
            "name":name,
            "task": task,
            "answer": answer,
            "prize":{
                "sand":0,
                "powred":0,
                "wick":0},
            "x":xVar,
            "y":yVar,
            "div":"",
            "room":newroom
        };

        let div = document.createElement("div");
        div.className = name;
        div.style.left = xVar * size + "px";
        div.style.top = yVar * size + "px";
        div.style.height = size + "px";
        div.style.width = size + "px";
        div.id = name + newroom;
        resourse["div"] = div;

        if (name == "sand"){
            resourse["prize"]["sand"] = 1;
            $("#sands").append(div);
            SAND.push(resourse);
            SAND_IN.push(newroom);
        }
        else if (name == "wick"){
            resourse["prize"]["wick"] = 1;
            $("#wicks").append(div);
            WICK.push(resourse);
            WICK_IN.push(newroom);
        }
        else if (name == "powred"){
            resourse["prize"]["powred"] = 1;
            $("#powreds").append(div);
            POWRED.push(resourse);
            POWRED_IN.push(newroom);
        }

        // console.log(SAND_IN);
        // console.log(WICK_IN);
        // console.log(POWRED_IN);
    }

    function resetTimer(timer){
        clearInterval(timer);
        TIME_TO_KILL = 60;
    }

    function endThisVar(message, x, y, timer, kill){
        heroMoveTo(x, y);

        countTrys = 5;

        let P = document.createElement("P");
        P.textContent = message;

        if (timer == null)
            $("#content-explanation-get").append(P);
        else 
            $("#content-explanation-input").append(P);

        $(".interface-button-action").attr("disabled", true);
        resetTimer(timer);
        clearTimeout(kill);
        setTimeout(() => {                 
            closeWindow();
            $(".interface-button-action").attr("disabled", false);
        }, 1000);
    }

    function attack(varrior){
        let timer = setInterval(() => {
            TIME_TO_KILL --;
            $("#maintext").text(MONSTER_ATTACK + " (до смерти < " + TIME_TO_KILL + " секунд)");
        }, 1000);

        let KILL = setTimeout(() => {
                        
            for (let i in lamps) {
                lamps[i][0].remove();
                lamps[i][1].remove();
            }
            torchs = 5;
            lamps = {};
            // delete lamps[room];
            $("#count-item-torch").text(torchs);
            MOVE = [];
                    
            endThisVar("Ты УМЕР!", heroStartX, heroStartY, timer, KILL);
            updateInventory(varrior["prize"],"inverted");

        }, TIME_TO_KILL * 1000);

        
        eventInput({
            "main": {
                "head": MONSTER_ATTACK,
                "main": varrior["task"],
            },
            "buttons": [{
                "text": "Умри, монстр!",
                "func": function() {
                        if (countTrys > 0){
                            if ($("#text").val() == varrior["answer"]){
                                VARRIORS_CURRENT.splice(VARRIORS_CURRENT.indexOf(varrior), 1);
                                VARRIORS_IN.splice(VARRIORS_IN.indexOf(varrior["room"]), 1)
                                addVarrior();
                                varrior["div"].remove();
                                
                                endThisVar("Ты ПОБЕДИЛ!", heroX, heroY, timer, KILL)
                                updateInventory(varrior["prize"],"direct");

                                console.log(VARRIORS_CURRENT);
                            }
                            else {
                                countTrys --;
                                let P = document.createElement("P");
                                if (countTrys != 0)
                                    P.textContent = "Неверно! Пытайся ещё " + countTrys + " раз!";
                                else 
                                    P.textContent = "Ты умрёшь.";
                                $("#content-explanation-input").append(P);
                            }
                        }
                    }
                },
                {
                    "text": "Убегай!",
                    "func": function(){
                        if (MOVE.join(" ") == $("#text2").val()){

                            endThisVar("Ты СБЕЖАЛ!", MOVES_5[MOVES_5.length - 1][0], MOVES_5[MOVES_5.length - 1][1], timer, KILL);

                            MOVES_5 = [[heroX, heroY], [heroX, heroY], [heroX, heroY]];                           
                        }
                        else {
                            $("#GO").text(["Пробуй ещё...", "Да не там ты шёл!", "Ты опять не прав. Снова, да.", "В такси бы тебя убили. Нет.", "Путь не верный.", "...there is not correct way, try again..."][parseInt(Math.random() * 6)]);

                        }                            
                    }                  
                }]
        });  
    }

    function updateInventory(from, direction){
        if (direction == "direct"){
            // console.log("add");
            // console.log("sand - (from) " + INVENTORY["sand"] + " - (to) " + from["sand"]);
            // console.log("wick - (from) " + INVENTORY["wick"] + " - (to) " + from["wick"]);
            // console.log("powred - (from) " + INVENTORY["powred"] + " - (to) " + from["powred"]);            

            INVENTORY["sand"] += from["sand"];
            INVENTORY["wick"] += from["wick"];
            INVENTORY["powred"] += from["powred"];
            
        }
        else if (direction == "inverted"){
            // console.log("remove");
            // console.log("sand - (from) " + from["sand"] + " - (to) " + INVENTORY["sand"]);
            // console.log("wick - (from) " + from["wick"] + " - (to) " + INVENTORY["wick"]);
            // console.log("powred - (from) " + from["powred"] + " - (to) " + INVENTORY["powred"]);

            from["sand"] += INVENTORY["sand"]
            from["wick"] += INVENTORY["wick"];
            from["powred"] += INVENTORY["powred"];
            INVENTORY["sand"] = 0;
            INVENTORY["wick"] = 0;
            INVENTORY["powred"] = 0;
        }

        $("#count-item-sand").text(INVENTORY["sand"]);
        $("#count-item-wick").text(INVENTORY["wick"]);
        $("#count-item-powred").text(INVENTORY["powred"]);        
    }

    function getResourse(resourse){
        // console.log(resourse["name"]);
        eventGet({
                "main": {
                    "head": "Шахта по добыче " + (resourse["name"] == "sand" ? "ПЕСКА!" : (resourse["name"] == "wick" ? "НИТЕЙ!" : "ПОРОХА!")), 
                    "main": resourse["task"],
                },
                "buttons": [{
                    "text": "Добыть!",
                    "func": function(){
                        // console.log(resourse["answer"]);
                        if(resourse["answer"] == $("#text_get").val()){
                            updateInventory(resourse["prize"], "direct");
                            if (resourse["name"] == "sand"){
                                SAND.splice(SAND.indexOf(resourse), 1);
                                SAND_IN.splice(SAND_IN.indexOf(resourse["room"]), 1);                                
                            }
                            else if (resourse["name"] == "wick"){
                                WICK.splice(WICK.indexOf(resourse), 1);
                                WICK_IN.splice(WICK_IN.indexOf(resourse["room"]), 1);
                            }
                            else {
                                POWRED.splice(POWRED.indexOf(resourse), 1);
                                POWRED_IN.splice(POWRED_IN.indexOf(resourse["room"]), 1);
                            } 
                            resourse["div"].remove();
                            endThisVar("Ресурс получен!", heroX, heroY, null, null);
                        }
                        else {
                            $("#button_get").text(["У тебя ошибка в рассчётах.", "Отвечаю! У тебя ошибка в рассчётах!", "Ты опять не прав. Снова, да.", "Это не тот ответ", "Будь ты учёным, тебя бы сожгли.", "...there is not correct answer, try again..."][parseInt(Math.random() * 6)]);
                        }
                    }
                }]
            });
    }

    // враг подошёл -> 2 кнопки - сбежать и убить
    // храним массив путей
    // храним общий массив мобов (без х, у) и текущий {
    // х, у, задача, ответ чтобы убить, награда за убийство
    // }
    // мут - лишение факелов, перенос в начало, отбирание всего инвентаря 

    
    // мы подошли к ресурсу -> 1 поле и 1 кнопка - ввод и проверить
    // храним массив ресурсов {
    // x, y, что даёт, задача, правильный ответ, решено или нет
    // }
    // 

    // мы подошли к точке получения информации -> 
    // получить информацию о лабиринте, телепортироваться
    // храним массив точек {
    // х, у, куда телепортируется, информация, правильный ответ
    // }

    var heroX = 1,
    heroY = 21,
    heroStartX = 1,
    heroStartY = 21,
    size = $(window).width() / 108,
    deltaX = size / 4,
    deltaY = size / 2 - size * 2,
    room = -1,
    inroom = false,
    onkeypressUp = false,
    onkeypressDown = true,
    lamps = {},
    torchs = 5,
    PENDING = false,
    whatnow = "",
    VARRIORS_GLOBAL = [],
    VARRIORS_CURRENT = [],
    MOVE = [],
    SHOWINFO = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
    VARRIORS_IN = [],
    countTrys = 5,
    MOVES_5 = [[heroX, heroY], [heroX, heroY], [heroX, heroY]],
    
    MONSTER_ATTACK = "МОНСТР АТАКУЕТ ТЕБЯ",
    TIME_TO_KILL = 60,
    
    INVENTORY = {
        "sand":0,
        "powred":0,
        "wick":0
    },
    
    SAND = [],
    WICK = [],
    POWRED = [],
    SAND_IN = [],
    WICK_IN = [],
    POWRED_IN = [];

    //Скрытие pop-container при клике за область экрана.
    $("#pop-container-info").bind("click", function (e) {
        if ($(e.target).attr("id") == "pop-container-info")
            closeWindow();
    })

    $("#pop-container-get").bind("click", function (e) {
        if ($(e.target).attr("id") == "pop-container-get")
            closeWindow();
    })

    // $("#pop-container-input").bind("click", function (e) {
    //     if ($(e.target).attr("id") == "pop-container-input")
    //         closeWindow();
    // })

    $("#button-interface").click(
        function (e) {
            interfaceMoveOut(e);
        }
    );

    //Скрытие pop-container при клике на крестик.
    $(".popup-container-close").click(() => {        
        closeWindow();
    })
    

    heroMoveTo(heroX, heroY);
    document.onkeydown = checkKey;
    document.onkeyup = ck;

    
    $("#putTorch").click(putTorch);
    $("#getTorch").click(getTorch);
    
    $("#sayAbout").click(sayAbout);

    $("#clearAll").click(clearAll);

    
    $("#count-item-torch").text(torchs);


//#region VARRIORS init

VARRIORS_GLOBAL.push(
    {"taks":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aliquam facilis praesentium quibusdam rerum ipsa distinctio facere sit optio obcaecati.",
    "answer":"1",
    "prize": {
        "sand":1,
        "powred":0,
        "wick":0},
    "x": -1,
    "y": -1,
    "div":"",
    "room":0});
VARRIORS_GLOBAL.push(
    {"taks":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aliquam facilis praesentium quibusdam rerum ipsa distinctio facere sit optio obcaecati.",
    "answer":"1",
    "prize": {
        "sand":0,
        "powred":1,
        "wick":0},
    "x": -1,
    "y": -1,
    "div":"",
    "room":0});
VARRIORS_GLOBAL.push(
    {"taks":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aliquam facilis praesentium quibusdam rerum ipsa distinctio facere sit optio obcaecati.",
    "answer":"1",
    "prize": {
        "sand":0,
        "powred":0,
        "wick":1},
    "x": -1,
    "y": -1,
    "div":"",
    "room":0});
VARRIORS_GLOBAL.push(
    {"taks":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aliquam facilis praesentium quibusdam rerum ipsa distinctio facere sit optio obcaecati.",
    "answer":"1",
    "prize": {
        "sand":1,
        "powred":0,
        "wick":1},
    "x": -1,
    "y": -1,
    "div":"",
    "room":0});
VARRIORS_GLOBAL.push(
    {"taks":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aliquam facilis praesentium quibusdam rerum ipsa distinctio facere sit optio obcaecati.",
    "answer":"1",
    "prize": {
        "sand":0,
        "powred":1,
        "wick":1},
    "x": -1,
    "y": -1,
    "div":"",
    "room":0});
VARRIORS_GLOBAL.push(
    {"taks":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aliquam facilis praesentium quibusdam rerum ipsa distinctio facere sit optio obcaecati.",
    "answer":"1",
    "prize": {
        "sand":1,
        "powred":1,
        "wick":0},
    "x": -1,
    "y": -1,
    "div":"",
    "room":0});
VARRIORS_GLOBAL.push(
    {"taks":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aliquam facilis praesentium quibusdam rerum ipsa distinctio facere sit optio obcaecati.",
    "answer":"1",
    "prize": {
        "sand":0,
        "powred":0,
        "wick":0},
    "x": -1,
    "y": -1,
    "div":"",
    "room":0});
VARRIORS_GLOBAL.push(
    {"taks":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aliquam facilis praesentium quibusdam rerum ipsa distinctio facere sit optio obcaecati.",
    "answer":"1",
    "prize": {
        "sand":1,
        "powred":1,
        "wick":1},
    "x": -1,
    "y": -1,
    "div":"",
    "room":0});
VARRIORS_GLOBAL.push(
    {"taks":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aliquam facilis praesentium quibusdam rerum ipsa distinctio facere sit optio obcaecati.",
    "answer":"1",
    "prize": {
        "sand":0,
        "powred":1,
        "wick":0},
    "x": -1,
    "y": -1,
    "div":"",
    "room":0});
VARRIORS_GLOBAL.push(
    {"taks":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aliquam facilis praesentium quibusdam rerum ipsa distinctio facere sit optio obcaecati.",
    "answer":"1",
    "prize": {
        "sand":2,
        "powred":0,
        "wick":0},
    "x": -1,
    "y": -1,
    "div":"",
    "room":0});


//#endregion


    for (let i in [1, 1, 1, 1, 1])
        addVarrior();

//#region RESOURSE init 
    addResourse("sand", "1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sapiente.", 2);
    addResourse("sand", "2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sapiente.", 2);
    addResourse("sand", "3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sapiente.", 2);
    addResourse("sand", "4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sapiente.", 2);
    addResourse("sand", "5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sapiente.", 2);
    addResourse("sand", "6. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sapiente.", 2);
    addResourse("sand", "7. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sapiente.", 2);
    
    addResourse("wick", "11. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sapiente.", 2);
    addResourse("wick", "12. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sapiente.", 2);
    addResourse("wick", "13. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sapiente.", 2);
    addResourse("wick", "14. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sapiente.", 2);
    addResourse("wick", "15. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sapiente.", 2);
    addResourse("wick", "16. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sapiente.", 2);
    addResourse("wick", "17. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sapiente.", 2);
    
    addResourse("powred", "21. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sapiente.", 2);
    addResourse("powred", "22. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sapiente.", 2);
    addResourse("powred", "23. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sapiente.", 2);
    addResourse("powred", "24. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sapiente.", 2);
    addResourse("powred", "25. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sapiente.", 2);
    addResourse("powred", "26. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sapiente.", 2);
    addResourse("powred", "27. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sapiente.", 2);
    
//#endregion
    
// console.log(VARRIORS_CURRENT)        
});


