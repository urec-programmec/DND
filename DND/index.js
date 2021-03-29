$(document).ready(function () {


//#region map
    var map = [[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 18, 18, 18, 18, 18, 18, 18, -1, -1, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 19, 19, 19, -1, -1, -1, -1, -1, -1], [-1, 1, 1, 1, 1, 1, -1, -1, -1, -1, 3, 3, 3, 3, 3, 3, 3, 3, -1, -1, -1, -1, -1, -1, -1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, -1, -1, -1, -1, -1, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 19, 19, 19, 19, 19, 19, 19, -1, -1], [-1, 1, 1, 1, 1, 1, -1, -1, -1, -1, 3, 3, 3, 3, 3, 3, 3, 3, 3, -1, -1, -1, -1, -1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, -1, -1, -1, -1, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 0, 0, 0, 0, -1, -1, -1, -1, -1, 19, 19, 19, 19, 19, 19, 19, -1, -1], [-1, 1, 1, 1, -1, -1, -1, -1, -1, -1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, -1, -1, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 0, 0, 0, 0, -1, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, -1, -1], [-1, 1, 1, 1, -1, -1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 4, 4, 4, 4, 4, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, -1, -1, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, -1, -1, -1, 0, 0, -1, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, -1, -1], [-1, 1, 1, 1, -1, -1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, -1, -1, -1, -1, -1, 4, 4, 4, 4, 4, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1, 4, 4, 4, 4, 4, 4, 4, 0, 0, 18, 18, 18, 18, 18, 18, 18, 18, 18, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, 18, 18, 18, 18, -1, 18, 18, 18, 18, 18, 18, 18, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, -1], [-1, 0, 0, -1, -1, -1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, -1, -1, -1, -1, -1, -1, 4, 4, 4, -1, -1, -1, 6, 6, 6, 6, 6, -1, -1, -1, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, -1, -1, 18, 18, 18, 18, 18, 18, 18, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 18, 18, 18, 18, 18, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, 19, 19, 19, 19, 19, 19, 19, 19, -1], [-1, 0, 0, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, 3, 3, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6, 6, 6, 6, 6, 6, 6, -1, -1, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, -1, -1, 18, 18, 18, 18, 18, -1, -1, -1, -1, -1, -1, -1, 0, 0, 17, 17, 17, 17, 17, 17, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 20, 20, 20, 20, 20, -1, -1, -1, -1, 19, 19, 19, 19, 19, 19, 19, -1], [-1, 0, 0, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6, 6, 6, 6, 6, 6, 6, -1, -1, 0, 0, -1, -1, 4, 4, 4, 4, 4, 4, -1, -1, -1, 18, 18, 18, -1, -1, -1, -1, -1, -1, -1, -1, 17, 17, 17, 17, 17, 17, 17, 17, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 0, 19, 19, 19, 19, 19, 19, 19, -1], [-1, 0, 0, -1, 2, 2, 2, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, -1, -1, -1, 0, 0, -1, -1, 4, 4, 4, 4, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 0, 19, 19, 19, 19, 19, 19, 19, -1], [-1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, -1, -1, -1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, -1, -1, -1, 7, 7, -1, -1, 4, 4, 4, 4, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, -1, -1, 19, 19, 19, 19, 19, 19, 19, -1], [-1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, -1, -1, 7, 7, -1, -1, 4, 4, 4, 4, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 20, 20, 20, 20, 20, 20, 20, 20, 20, -1, 19, 19, 19, 19, 19, 19, 19, -1, -1], [-1, -1, -1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, -1, -1, 7, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, -1, -1, -1, -1, -1, 22, 22, 22, 22, 22, 22, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 20, 20, 20, 20, -1, 19, 19, 19, 19, 19, 19, 19, -1, -1], [-1, -1, -1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, -1, -1, -1, 5, 5, 5, 5, -1, -1, -1, -1, -1, -1, 6, 6, 6, 6, 6, 6, 6, 6, -1, -1, -1, 7, 7, 7, 7, 7, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, 17, 17, 17, 17, 17, 17, 17, 17, -1, -1, -1, -1, -1, -1, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, -1, -1, -1, -1, -1, -1, -1, -1, 20, 20, 20, 20, -1, 0, 0, -1, 19, 19, 19, -1, -1, -1], [-1, -1, -1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, -1, -1, -1, 5, 5, 5, 5, 5, -1, -1, -1, -1, -1, -1, 6, 6, 6, 6, 6, 6, -1, -1, -1, -1, 7, 7, 7, 7, 7, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, 17, 17, 17, 17, 17, 17, 17, -1, -1, -1, -1, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, -1, -1, -1, -1, -1, 20, 20, 20, 20, 20, 20, 20, -1, 19, 19, 19, -1, -1, -1], [-1, -1, -1, 2, 2, -1, 0, 0, -1, 2, 2, 2, 2, -1, -1, -1, -1, 5, 5, 5, 5, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 7, 7, 7, 7, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, 0, 0, 17, 17, 17, -1, -1, -1, -1, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, -1, -1, -1, 20, 20, 20, 20, 20, 20, 20, -1, 19, 19, 19, -1, -1, -1], [-1, -1, -1, -1, -1, -1, 0, 0, -1, 2, 2, 2, 2, -1, -1, -1, -1, 5, 5, 5, 5, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 7, 7, 7, 7, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, 22, 22, 22, 22, 22, 22, 22, 22, 22, -1, -1, -1, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, -1, -1, -1, 20, 20, 20, 20, 20, 20, 20, -1, 19, 19, 19, -1, -1, -1], [-1, -1, -1, -1, -1, 10, 10, 10, -1, 2, 2, 2, 2, -1, -1, -1, -1, -1, 5, 5, 5, -1, -1, -1, -1, -1, -1, -1, 8, 8, 8, 8, 8, 8, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 16, 16, 16, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 22, 22, 22, 22, 22, 22, 22, -1, -1, 20, 20, 20, 20, 20, 20, 20, -1, 19, 19, 19, -1, -1, -1], [-1, -1, -1, -1, -1, 10, 10, 10, -1, 2, 2, 2, 2, -1, -1, -1, -1, -1, 5, 5, 5, -1, 5, 5, -1, -1, -1, -1, 8, 8, 8, 8, 8, 8, 8, 8, 8, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, 16, 16, 16, 16, 16, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, 22, 22, 22, 22, 22, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 22, 22, 22, 22, 22, 22, -1, -1, 20, 20, -1, 20, 20, 20, 20, -1, -1, 19, 19, -1, -1, -1], [0, 0, 0, 0, 0, 10, 10, 10, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, 5, 5, 5, 5, 5, 5, 5, 5, -1, -1, -1, -1, 8, 8, 8, 8, 8, 8, 8, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1, 16, 16, 16, 16, 16, 16, 16, 16, 16, -1, -1, -1, 0, 0, 0, 0, 22, 22, 22, 22, 22, 22, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 22, 22, -1, -1, -1, -1, -1, -1, 22, 22, 22, 22, 22, -1, -1, 20, 20, -1, 20, 20, 20, 20, -1, -1, 0, 0, -1, -1, -1], [0, 0, 0, 0, 0, 10, 10, 10, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, 5, 5, 5, 5, 5, 5, 5, 5, -1, -1, -1, -1, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, -1, -1, -1, -1, -1, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, -1, -1, 0, 0, 0, 0, 22, 22, 22, 22, 22, 22, -1, -1, -1, -1, -1, -1, -1, -1, -1, 22, 22, 22, 22, -1, -1, -1, -1, -1, 22, 22, 22, 22, 22, -1, -1, 0, 0, -1, 20, 20, 20, 20, -1, -1, 0, 0, -1, -1, -1], [0, 0, 0, 0, 0, 10, 10, 10, 10, -1, -1, 0, 0, -1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, -1, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0, 16, 16, 16, 16, 16, 16, 16, -1, 16, 16, 16, 16, -1, -1, -1, -1, -1, -1, 22, 22, 22, 22, 22, 22, -1, -1, -1, -1, -1, -1, -1, -1, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1], [-1, -1, -1, -1, -1, 10, 10, 10, 10, -1, -1, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, -1, -1, -1, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0, 16, 16, 16, 16, 16, 16, -1, -1, -1, 16, 16, 16, -1, -1, -1, -1, -1, -1, -1, 22, 22, 22, 22, -1, -1, -1, -1, -1, -1, -1, -1, -1, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1, 28, 28, -1, -1, -1], [-1, -1, -1, -1, -1, 10, 10, 10, 10, -1, -1, 0, 0, 0, 5, 5, 5, 5, 5, 5, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, 8, 8, 8, 8, 8, 8, 8, 8, 8, -1, -1, -1, -1, -1, 16, 16, 16, 16, -1, -1, -1, -1, 16, 16, 16, 16, -1, -1, -1, -1, -1, -1, 22, 22, 22, 22, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 22, 22, 22, 22, -1, -1, -1, -1, 22, 22, 22, 22, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, 28, 28, 28, 28, 28, -1, -1], [0, 0, 0, 0, 0, 10, 10, 10, 10, -1, -1, -1, -1, -1, 5, 5, 5, 5, 0, 0, -1, -1, -1, -1, -1, -1, 9, 9, 9, 9, -1, -1, 8, 8, 8, 8, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, 16, 16, 16, 16, 16, -1, -1, -1, 16, 16, 16, 16, 16, 16, -1, -1, -1, -1, 22, 22, 22, 22, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 22, 22, -1, -1, -1, 22, 22, 22, 22, 22, 22, -1, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, 28, 28, 28, 28, 28, -1, -1], [0, 0, 0, 0, 0, 10, 10, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, 27, 27, -1, -1, 9, 9, 9, 9, -1, -1, 8, 8, 8, 8, 8, -1, -1, -1, 15, 15, 15, 15, -1, -1, 16, 16, 16, 16, 16, 16, -1, -1, -1, 16, 16, 16, 16, 16, -1, -1, -1, -1, 22, 22, 22, 22, 22, 22, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 22, 22, 22, 22, 22, 22, -1, -1, 0, 0, 0, 0, 0, -1, -1, -1, 28, 28, 28, 28, 28, 28, 28, -1, -1], [0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 27, 27, 27, 27, -1, -1, 9, 9, 9, 9, 9, 0, 8, 8, 8, 8, 8, -1, -1, 15, 15, 15, 15, 15, -1, -1, -1, -1, 16, 16, 16, 16, -1, -1, -1, -1, -1, 16, 16, 16, 16, -1, -1, -1, -1, -1, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, -1, -1, -1, -1, -1, -1, 22, 22, 22, 22, 22, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, 28, 28, 28, 28, 28, 28, 28, 28, -1], [0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 11, 11, -1, -1, -1, -1, 27, 27, 27, 27, 27, 27, -1, -1, 9, 9, 9, 9, 9, 0, 8, 8, -1, 0, 0, 0, 0, 15, 15, 15, 15, 15, 15, -1, -1, -1, -1, -1, 16, 16, 16, -1, -1, -1, -1, 16, 16, 16, 16, 0, 0, 0, -1, -1, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, -1, -1, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, 28, 28, 28, 28, 28, 28, 28, 28, 28, -1], [0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 11, 11, 11, 11, -1, -1, 27, 27, 27, 27, 27, 27, -1, -1, 9, 9, 9, 9, 9, -1, 8, 8, -1, 0, 0, 0, 0, 15, 15, 15, 15, 15, 15, -1, -1, -1, -1, -1, 16, 16, 16, 16, -1, -1, -1, -1, 16, 16, 16, 0, 0, 0, -1, -1, -1, -1, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, -1, -1, -1, -1, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, 28, 28, 28, 28, 28, 28, 28, 28, 28, -1], [0, 0, -1, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, -1, -1, -1, 27, 27, 27, 27, 27, -1, -1, -1, -1, 9, 9, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, 15, 15, 15, 15, 15, -1, -1, -1, -1, -1, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, -1, 0, 0, -1, -1, -1, -1, -1, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, -1, -1, -1, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, 28, 28, 28, 28, 28, 28, 28, 28, 28, -1], [0, 0, 0, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, -1, -1, -1, 27, 27, 27, 27, 27, -1, -1, -1, -1, 9, 9, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, -1, -1, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, 22, 22, 22, 22, 22, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, -1, -1, -1, 24, 24, 24, -1, -1, -1, -1, 28, 28, 28, 28, 28, 28, 28, -1], [0, 0, 0, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 0, 0, 0, 27, 27, 27, 27, 27, -1, -1, -1, -1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, -1, -1, -1, 14, 14, 14, 14, 14, 14, 14, -1, -1, -1, -1, -1, -1, -1, -1, 16, 16, 16, -1, -1, -1, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, -1, -1, -1, -1, 24, 24, 24, 24, 24, -1, -1, -1, -1, 28, 28, 28, 28, 28, 28, 28, -1], [-1, -1, -1, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 0, 0, 0, 27, 27, 27, 27, 27, -1, -1, -1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 14, 14, 14, 14, 14, 14, 14, 14, 14, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, -1, 0, 0, 0, 24, 24, 24, 24, 24, -1, -1, -1, -1, -1, -1, 28, 28, 28, 28, 28, -1], [-1, -1, -1, -1, -1, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, -1, -1, -1, 27, 27, 27, 27, 27, -1, -1, -1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 14, 14, 14, 14, 14, 14, 14, 14, 14, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, 21, 21, -1, -1, -1, -1, -1, 25, 25, -1, -1, -1, -1, 0, 0, 0, 24, 24, 24, 24, -1, -1, -1, -1, -1, -1, -1, 28, 28, 28, 28, 28, -1], [-1, -1, -1, -1, -1, 11, 11, 11, -1, -1, -1, -1, 11, 11, 11, 11, -1, -1, -1, 27, 27, 27, 27, 27, -1, -1, -1, -1, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9, -1, -1, -1, 14, 14, 14, 14, 14, 14, 14, 14, 14, -1, -1, -1, -1, 26, 26, 26, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, -1, -1, -1, 21, 21, 21, 21, 21, -1, -1, -1, 25, 25, 25, 25, -1, -1, -1, 0, 0, -1, -1, 24, 24, 24, -1, -1, -1, -1, -1, -1, -1, 28, 28, 28, 28, 28, -1], [-1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, 0, 11, 11, -1, -1, -1, 27, 27, 27, 27, 27, 27, 27, 27, 0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9, -1, -1, -1, 14, 14, 14, 14, 14, 14, 14, 14, 14, -1, -1, -1, 26, 26, 26, 26, 26, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, -1, -1, 21, 21, 21, 21, 21, 21, -1, -1, -1, 25, 25, 25, 25, -1, -1, -1, 0, 0, -1, -1, -1, 0, 0, -1, -1, 23, 23, 23, -1, -1, -1, 28, 28, 28, 28, -1], [-1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, 27, 27, 27, 27, 27, 27, 27, 27, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 14, 14, 14, 14, 14, 14, -1, -1, 26, 26, 26, 26, 26, 26, 26, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, 21, 21, 21, 21, 21, 21, -1, -1, -1, 25, 25, 25, 25, 25, -1, -1, 0, 0, -1, -1, -1, 0, 0, -1, 23, 23, 23, 23, 23, 23, -1, 28, 28, 28, 28, -1], [-1, 12, 12, 12, 12, 12, 12, 12, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, 27, 27, 27, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 14, 14, 14, 14, 14, -1, -1, -1, 26, 26, 26, 26, 26, 26, 26, -1, -1, -1, -1, -1, -1, -1, -1, 25, 25, 25, -1, -1, -1, 21, 21, 21, 21, -1, -1, -1, -1, -1, 25, 25, 25, 25, -1, -1, 0, 0, -1, -1, -1, 0, 0, -1, 23, 23, 23, 23, 23, 23, -1, -1, 0, 0, -1, -1], [-1, 12, 12, 12, 12, 12, 12, 12, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, 26, 26, 26, 26, -1, -1, -1, -1, -1, -1, -1, 14, 14, 14, 14, 14, 14, 0, 0, 0, 26, 26, 26, 26, 26, 26, 26, 26, -1, -1, -1, -1, -1, -1, 25, 25, 25, 25, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 25, 25, 25, 25, 0, 0, 0, 0, -1, -1, -1, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 0, 0, 0, -1, -1], [-1, 12, 12, 12, 12, 12, 12, 12, -1, -1, 12, 12, -1, 0, 0, 0, 13, 13, 13, 13, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, 26, 26, 26, 26, 26, 26, 26, -1, -1, -1, -1, -1, 14, 14, 14, 14, 14, 14, 0, 0, 0, 26, 26, 26, 26, 26, 26, 26, 26, -1, -1, -1, -1, -1, 25, 25, 25, 25, 25, 25, 25, -1, -1, -1, -1, -1, -1, -1, -1, -1, 25, 25, 25, 25, 25, 0, 0, 0, 0, -1, -1, -1, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 0, 0, 0, -1, -1], [-1, 12, 12, 12, 12, 12, 12, 12, -1, -1, 12, 12, -1, 0, 0, 0, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, -1, 0, 0, 26, 26, 26, 26, 26, 26, 26, 26, -1, -1, -1, -1, -1, 14, 14, 14, 14, 14, -1, -1, -1, 26, 26, 26, 26, 26, 26, 26, 26, -1, -1, -1, -1, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, -1, -1, 25, 25, 25, 25, 25, -1, -1, -1, -1, -1, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, -1, -1, -1, -1, -1, -1, -1], [-1, -1, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, -1, -1, -1, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 0, 0, 26, 26, 26, 26, 26, 26, 26, 26, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 26, 26, 26, 26, 26, 26, 26, 26, 26, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, -1, -1, -1, -1, -1, -1, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, 12, 12, 12, 12, 12, 12, 12, 12, 12, -1, -1, -1, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 0, 0, -1, 26, 26, 26, 26, 26, 26, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 0, 0, 0, 0, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, 12, 12, 12, 12, 12, 12, 12, 12, 12, -1, -1, -1, -1, 13, 13, 13, 13, 13, 13, 13, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, 26, 26, 26, 26, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, -1, -1, -1, -1, -1, 25, 25, 25, 25, 25, 25, -1, -1, -1, -1, -1, -1, 25, 25, 25, 25, 25, 25, 25, 25, 0, 0, 0, 0, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, 12, 12, 12, 12, 12, 12, 12, 12, 12, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, -1, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, -1, -1, -1, -1, -1, -1, -1, -1, -1, 25, 25, 25, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 23, 23, 23, 23, 23, 23, 23, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, 12, 12, 12, 12, 12, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 23, 23, 23, 23, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]

//#endregion

    window.defaultWidth = window.innerWidth;
    window.onresize = function () {

        let x = (window.defaultWidth / window.innerWidth).toFixed(2);

        for (let i of document.getElementsByClassName("lamp2")) {
            i.style.transform = "scale(" + 1 / x + ")";
        }

        for (let i in lamps) {
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

    function interfaceMoveOut() {
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

    function interfaceMoveOut2() {
        let interfase = $("#interface2"),
            flag = interfase.css("display") == "none" ? false : true;
        if (flag) {
            interfase.hide(1000);
            $("#button-interface2").animate({
                right: "6%",
                top: "2%"
            })
        } else {
            interfase.show("slow");
            interfase.css("display", "flex");
            $("#button-interface2").animate({
                right: "0%",
                top: "1.5%"
            });
        }
    }

    function closeWindow() {
        PENDING = false;
        $(".pop-container-block").height(650);
        // what = "info";
        // // console.log($("#content-explanation-info"));
        // if ($("#content-explanation-info").text() == "")
        //     what = "input";        

        if (whatnow == "info") {
            $("#pop-container-info").hide(750);
            $("#content-explanation-info").html("");
            $("#content-actions-info").html("");
        } else if (whatnow == "input") {
            $("#pop-container-input").hide(750);
            $("#content-explanation-input").html("");
            $("#content-actions-input").html("");
        } else {
            $("#pop-container-get").hide(750);
            $("#content-explanation-get").html("");
            $("#content-actions-get").html("");
        }
        whatnow = "";

        if(NEED_CLOSE_IDEA){
            NEED_CLOSE_IDEA = false;

            if (SHOWINFO.length != 0 && COUNT_ROOMS >= 5)
                showIdeaX("come_to_rooms_if_open");
            else 
                showIdeaX("come_to_rooms");
        }

        if (GET_RESOURSE){
            GET_RESOURSE = false;
            if (INVENTORY["sand"] > 0 && INVENTORY["powred"] > 0 && INVENTORY["wick"] > 0 && IDEAS_COUNTS["get_all_resourse"].current == 0)
                showIdeaX("get_all_resourse")
            else 
                showIdeaX("get_resourse")
        }
    }

    function eventInfo(options) {
        whatnow = "info";

        PENDING = true;
        let content = $("#content-explanation-info"),
            actions = $("#content-actions-info");

        if ("main" in options && "head" in options["main"]) {
            let P = document.createElement("P");
            P.textContent = options["main"]["head"];
            content.append(P);
            $(".pop-container-block").height(350);
            $(".pop-container-block").width("38%");

            if ("main" in options["main"]){
                P = document.createElement("P");
                P.textContent = options["main"]["main"];
                content.append(P);
            }
            if ("ps" in options){
                $(".pop-container-block").height(650);
                for (let i = 0; i < options["ps"].length; i++){
                    let P = document.createElement("P");
                    P.textContent = options["ps"][i];
                    content.append(P);
                }
            }
            if ("px" in options){
                // $(".pop-container-block").width(750);
                $(".pop-container-block").height(650);
                for (let i = 0; i < options["px"].length; i++){
                    let P = document.createElement("P");
                    P.textContent = options["px"][i];
                    P.classList.add("zero-margin");
                    content.append(P);
                }
            }

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

    function eventGet(options) {
        whatnow = "get";

        PENDING = true;

        let content = $("#content-explanation-get"),
            actions = $("#content-actions-get");


        let P = document.createElement("P");
        P.textContent = options["main"]["head"];
        content.append(P);

        $(".pop-container-block").width("55%");
        $(".pop-container-block").height("min-content");

        P = document.createElement("img");
        P.className = "tasks";
        P.src = options["main"]["main"];
        P.style.height = "100%";
        P.style.width = "auto";
        let D = document.createElement("div");
        D.style.width = "100%";
        D.appendChild(P);
        content.append(D);

        let text = document.createElement("input");
        text.type = "text";
        text.id = "text_get";
        text.className = "textblock";
        // text.placeholder = "Хочешь яблочко - сруби яблоню.";
        text.placeholder = "...твой правильный ответ...";
        actions.append(text);

        let button = document.createElement("button");
        button.textContent = options["buttons"][0]["text"];
        button.className = "interface-button-action";
        button.onclick = options["buttons"][0]["func"];
        button.id = "button_get"
        actions.append(button);

        $("#pop-container-get").show(750);
    }

    function eventInput(options) {
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
        P.textContent = "(введи 5 последних пройденных комнат и сбежишь)";
        content.append(P);
        content.append(document.createElement("hr"));

        // P = document.createElement("P");
        // P.textContent = options["main"]["main"];
        // content.append(P);
        $(".pop-container-block-input").width("55%");
        $(".pop-container-block-input").height("min-content");

        P = document.createElement("img");
        P.className = "tasks";
        P.src = options["main"]["main"];
        P.style.height = "100%";
        P.style.width = "auto";
        let D = document.createElement("div");
        D.style.width = "100%";
        D.appendChild(P);
        content.append(D);


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
        button.id = "kill-monster";
        actions.append(button);

        actions.append(document.createElement("hr"));

        text = document.createElement("input");
        text.type = "text";
        text.id = "text2";
        text.className = "textblock";
        text.placeholder = "Введи 5 последних комнат через пробел чтобы сбежать";
        actions.append(text);

        button = document.createElement("button");
        button.textContent = options["buttons"][1]["text"];
        button.className = "interface-button-action";
        button.onclick = options["buttons"][1]["func"];
        button.id = "GO";
        actions.append(button);


        $("#pop-container-input").show(750);
    }

    function move(code) {
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
        }, SPEED);

        let x = size * heroX + deltaX < ($(window).width() - 125 / (window.defaultWidth / window.innerWidth).toFixed(2)) ?
            size * heroX + deltaX : ($(window).width() - 125 / (window.defaultWidth / window.innerWidth).toFixed(2)),

            y = size * heroY + 18 < ($(window).height() - 125 / (window.defaultWidth / window.innerWidth).toFixed(2)) ?
                size * heroY + 18 : ($(window).height() - 125 / (window.defaultWidth / window.innerWidth).toFixed(2));

        $("#circle").animate({
            left: x,
            top: y
        }, SPEED);

        $("#circle2").animate({
            left: x,
            top: y
        }, SPEED);


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

    function heroMoveTo(x, y) {
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

    function checkTorchs() {
        for (let i in lamps) {
            for (let s = 0; s < SAND.length; s++) {
                if (Math.sqrt((SAND[s]["x"] - lamps[i][2]) * (SAND[s]["x"] - lamps[i][2]) + (SAND[s]["y"] - lamps[i][3]) * (SAND[s]["y"] - lamps[i][3])) <= 7)
                    SAND[s]["div"].style.opacity = 1;
            }
            for (let s = 0; s < WICK.length; s++) {
                if (Math.sqrt((WICK[s]["x"] - lamps[i][2]) * (WICK[s]["x"] - lamps[i][2]) + (WICK[s]["y"] - lamps[i][3]) * (WICK[s]["y"] - lamps[i][3])) <= 7)
                    WICK[s]["div"].style.opacity = 1;
            }
            for (let s = 0; s < POWRED.length; s++) {
                if (Math.sqrt((POWRED[s]["x"] - lamps[i][2]) * (POWRED[s]["x"] - lamps[i][2]) + (POWRED[s]["y"] - lamps[i][3]) * (POWRED[s]["y"] - lamps[i][3])) <= 7) {
                    POWRED[s]["div"].style.opacity = 1;
                    // console.log(POWRED[s]["div"]);
                }
            }
        }
    }

    function checkKey(e) {
        // console.log(e.keyCode);

        if (PENDING && e.keyCode == 27 && $("#content-explanation-input").text() == "")
            closeWindow();

        if (PENDING)
            return null;

        if (e.keyCode == 67) {
            COUNT_ROOMS = 0;
            clearAll();
            return null;
        }

        if (e.keyCode == 86) {
            interfaceMoveOut();
            return null;
        }

        if (e.keyCode == '90') {
            putTorch();
            return null;

        }

        if (e.keyCode == '88') {
            getTorch();
            return null;
        }

        if (e.keyCode == '32') {
            putTNT();
            return null;
        }

        if (e.keyCode == '8') {
            getTNT();
            return null;
        }

        if (e.keyCode == '66') {

            alert("Ваши результаты на текущий момент:\nСчёт: " + (localStorage.result === "null" ? 0 : localStorage.result) + "\nКоличество шагов: " + STEPS + "\nВерных ответов: " + RIGHT_ANSWERS + "\nНеверных ответов: " + WRONG_ANSWERS + "\nСмертей: " + DIES + "\nРешённые задачи: " + TASKS.join(", "));
            return null;
        }

        // if (e.keyCode == '78') {
        //     UNBANG();
        //     return null;
        // }

        if (e.keyCode == '188') {
            SPEED = 100;
            return null;
        }

        if (e.keyCode == '190') {
            SPEED = 0;
            return null;
        }

        if (e.keyCode == '191') {
            interfaceMoveOut2();
            return null;
        }

        // console.log($("#hero").position().left);
        if (e.keyCode == '38' && map[heroY - 1][heroX] == -1 || e.keyCode == '40' && map[heroY + 1][heroX] == -1 || e.keyCode == '37' && map[heroY][heroX - 1] == -1 || e.keyCode == '39' && map[heroY][heroX + 1] == -1 || heroX == 0 && e.keyCode == '37') {
            return null;
        }


        // if (!onkeypressDown)
        //     return null;

        // else {
        //     onkeypressDown = false;
        //     onkeypressUp = true;
        // }

        e = e || window.event;
        map[heroY][heroX] = room;

        let isgone = true;
        if (e.keyCode == '37' || e.keyCode == '38' || e.keyCode == '39' || e.keyCode == '40')
            isgone = move(e.keyCode);

        let behind = 100;
        let sandX = 0;
        let wickX = 0;
        let powredX = 0

        if (isgone[0]) {
            // console.log(room);
            STEPS ++;

            if(room == -10){                            
                if (KABOOM == true)
                    showIdeaX("first_room_end");
                else 
                    showIdeaX("first_room_start");
            }

            if (STEPS >= 250 && IDEAS_COUNTS["step_100"].current == 0){
                showIdeaX("step_100");
            }

            if (STEPS % 130 == 0)
                showIdeaX("speed");

            if (Math.random() < 0.05)
                showIdeaX("inventory");


            if (Math.random() < 0.05)
                showIdeaX("room22");

            // come_to_rooms_if_open


            for (let i = 0; i < VARRIORS_CURRENT.length; i++) {

                behind = Math.sqrt((heroX - VARRIORS_CURRENT[i]["x"]) * (heroX - VARRIORS_CURRENT[i]["x"]) + (heroY - VARRIORS_CURRENT[i]["y"]) * (heroY - VARRIORS_CURRENT[i]["y"]));
                if (behind <= 6){
                    VARRIORS_CURRENT[i]["div"].style.opacity = (6 - behind) / 6
                    if (behind <= 4 && behind > 3)
                        showIdeaX("find_monster");
                }   
                else
                    VARRIORS_CURRENT[i]["div"].style.opacity = 0;

                if (behind <= 2.5) {
                    attack(VARRIORS_CURRENT[i]);
                    break;
                }
            }

            for (let i = 0; i < SAND.length; i++) {
                sandX = Math.sqrt((heroX - SAND[i]["x"]) * (heroX - SAND[i]["x"]) + (heroY - SAND[i]["y"]) * (heroY - SAND[i]["y"]));
                if (sandX <= 7){
                    SAND[i]["div"].style.opacity = (7 - sandX) / 7;
                    if (sandX <= 4 && sandX > 3)
                        showIdeaX("find_resourse");
                }
                else
                    SAND[i]["div"].style.opacity = 0;


                checkTorchs();

                if (sandX == 0 && behind > 2.5) {
                    getResourse(SAND[i]);
                    break;
                }
            }

            for (let i = 0; i < WICK.length; i++) {
                wickX = Math.sqrt((heroX - WICK[i]["x"]) * (heroX - WICK[i]["x"]) + (heroY - WICK[i]["y"]) * (heroY - WICK[i]["y"]));
                if (wickX <= 7){
                    WICK[i]["div"].style.opacity = (7 - wickX) / 7;
                    if (wickX <= 4 && wickX > 3)
                        showIdeaX("find_resourse");
                }
                else
                    WICK[i]["div"].style.opacity = 0;

                checkTorchs();

                if (wickX == 0 && behind > 2.5) {
                    getResourse(WICK[i]);
                    break;
                }
            }

            for (let i = 0; i < POWRED.length; i++) {
                powredX = Math.sqrt((heroX - POWRED[i]["x"]) * (heroX - POWRED[i]["x"]) + (heroY - POWRED[i]["y"]) * (heroY - POWRED[i]["y"]));
                if (powredX <= 7){
                    POWRED[i]["div"].style.opacity = (7 - powredX) / 7;
                    if (powredX <= 4 && powredX > 3)
                        showIdeaX("find_resourse");
                }
                else
                    POWRED[i]["div"].style.opacity = 0;

                checkTorchs();

                if (powredX == 0 && behind > 2.5) {
                    getResourse(POWRED[i]);
                    break;
                }
            }

            let promptDistance =  Math.sqrt((heroX - promptX) * (heroX - promptX) + (heroY - promptY + 0.5) * (heroY - promptY + 0.5)); 
            if (promptDistance <= 10)
                $("#prompt").css({opacity:((10 - promptDistance)/ 10)});
            else
                $("#prompt").css({opacity:0});

            if (promptDistance <= 3 && behind > 2.5) {
                eventInfo({
                    "main": {
                        "head": "...нацарапанная надпись на стене..."                    
                    },
                    "buttons": [{
                        "text": "Продолжить путешествие",
                        "func": closeWindow
                    }],
                    "ps": [
                        "(возьми у наставника ГЛАВНЫЙ КВЕСТ)",
                        "",
                        "",
                        "...оружие установлено в комнате, номер которой - Священное число!..",                        
                        "",
                        "",
                        "...проклятье! Священное число этого народа недоступно для воспроизведения, его нельзя написать, и его никто не знает!",                        
                        "...но! Его можно вычислить!..",                      
                    ],
                    "px":[  
                        "[...если подземелья образуют граф...]",
                        "[...и выделить из него минимальное остовное дерево...]",
                        "[...то его сумма, разделенная на 6...]",                        
                        "[...будет священным числом!]",                        
                    ]
                });                
            }

        }

        if (isgone[1]) {                   

            if (room == 10)
                MOVE = [10];


            else if (room != 0 && MOVE.length > 1 && MOVE[MOVE.length - 2] == room) {
                MOVE.pop(MOVE.length);
                if (COUNT_ROOMS > 0)
                    COUNT_ROOMS --;
                // MOVE.pop(MOVE.length);
            } else if (room != 0 && (MOVE.length != 0 && MOVE[MOVE.length - 1] != room || MOVE.length == 0)){
                MOVE.push(room);
                COUNT_ROOMS ++;
            }

            if (room in SHOWINFO && behind > 2.5 && sandX != 0 && wickX != 0 && powredX != 0){
                sayAbout();               
                NEED_CLOSE_IDEA = true;
            }
            else if (SHOWINFO.length == 0 && COUNT_ROOMS >= 5){
                showIdeaX("come_to_rooms_if_close")
            }
        }
    }

    function putTorch() {
        // console.log(room);
        if (room > 0 && !(room in lamps) && torchs > 0) {
            torchs--;
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

    function getTorch() {
        if (room in lamps) {
            torchs++;
            lamps[room][0].remove();
            lamps[room][1].remove();

            delete lamps[room];
            $("#count-item-torch").text(torchs);
        }
    }

    function sayAbout() {
        if (room != 0)
            eventInfo({
                "main": {
                    "head": "Вы вошли в комнату номер " + String(room) + ".",
                    "main": ROOMS[room - 1]  
                },
                "buttons": [{
                    "text": "Окей...",
                    "func": closeWindow
                }, {
                    "text": "Больше не показывать",
                    "func": function () {
                        if (room in SHOWINFO)
                            delete SHOWINFO[room];
                        closeWindow();
                    }
                }],
                "ps": ["","{ important info: }"],        
                "px": ROOMS_INFO[room - 1]
            });
        else
            eventInfo({
                "main": {
                    "head": "Вы находитесь в коридоре номер " + parseInt(Math.random() * 28 + 1) + ".",
                    "main": "Выбирайтесь из этого междумирья, здесь стены искажают пространство. Как скоро они исказят и вас до неузнаваемости?..",
                },
                "buttons": [{
                    "text": "Окей...",
                    "func": closeWindow
                }]
            });
    }

    function clearAll(){
        if (SHOWINFO.length != 0){
            $("#clearAll").text("Показывай снова информацию о комнатах");
            SHOWINFO = [];
            eventInfo({
                "main": {
                    "head": "ОТКЛЮЧЕНИЕ УВЕДОМЛЕНИЙ",                    
                },
                "buttons": [{
                    "text": "Окей...",
                    "func": closeWindow
                }],
                "ps": [
                        "",
                        "Счастливого пути на просторах сёрфинга по комнатам. Напомним пару правил в дорогу",
                        ""
                    ],
                "px": [
                    "1) Не забывай о монстрах. Налететь на них очень просто (чисто из опыта)",
                    "2) Ты всегда можешь включить ускорение [ клавиша > ] и быстрее бегать",
                    "3) Ты всегда можешь вернуться к обычному режиму скорости [ клавиша < ]",
                    "4) Мы ещё увидимся. Тебе ещё понадобятся уведомления. Обещаем."

                ]
            });
        }
        else {
            $("#clearAll").text("Не показывай информацию о комнатах");
            SHOWINFO = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
            eventInfo({
                "main": {
                    "head": "ВКЛЮЧЕНИЕ УВЕДОМЛЕНИЙ",                    
                },
                "buttons": [{
                    "text": "...конечно...",
                    "func": closeWindow
                }],
                "ps" : [
                    "",
                    "Вот мы и увиделись. Мы же предупреждали.",
                    "",                    
                ],
                "px": [
                    "1) Раз ты снова с нами, держи лайфхак. Включение / выключение уведомлений - [ клавиша С ]",
                    "2) Надеемся, ты знаешь теперь что делать",
                    "3) Если нет - вот тебе подсказка. Ответ на всё - номер 22.",                
                    "Ищи."
                ]
            });
        }
    }

    function takeXYbyRoom(room) {
        let vars = [];
        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[0].length; j++) {
                if (map[i][j] == room) {
                    vars.push([j, i]);
                }
            }
        }
        let rand = parseInt(Math.random() * vars.length);

        return [vars[rand][0], vars[rand][1]];
    }

    function addVarrior() {
        if (VARRIORS_GLOBAL.length != 0) {

            // let newroom = 1;
            let newroom = parseInt(Math.random() * 28 + 1);
            while (newroom in lamps || newroom == room || VARRIORS_IN.indexOf(newroom) != -1)
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
            div.style.left = xVar * size - size / 2 + "px";
            div.style.top = yVar * size - size / 2 + "px";
            div.style.height = size * 2 + "px";
            div.style.width = size * 2 + "px";
            div.id = "varrior" + newroom;


            varrior["div"] = div;

            $("#varriors").append(div);
            VARRIORS_CURRENT.push(varrior);
        }
    }

    function addResourse(name, task, answer, number) {
        let newroom = parseInt(Math.random() * 28 + 1);
        while (newroom == 22 || newroom == room || VARRIORS_IN.indexOf(newroom) != -1 || SAND_IN.indexOf(newroom) != -1 || WICK_IN.indexOf(newroom) != -1 || POWRED_IN.indexOf(newroom) != -1)
            newroom = parseInt(Math.random() * 28 + 1);

        let XY = takeXYbyRoom(newroom);

        let xVar = XY[0];
        let yVar = XY[1];

        let resourse = {
            "name": name,
            "task": task,
            "answer": answer,
            "prize": {
                "sand": 0,
                "powred": 0,
                "wick": 0,
                "tnt": 0
            },
            "x": xVar,
            "y": yVar,
            "div": "",
            "room": newroom, 
            "number" : number
        };

        let div = document.createElement("div");
        div.className = name;
        div.style.left = xVar * size - size / 2 + "px";
        div.style.top = yVar * size - size / 2 + "px";
        div.style.height = size * 2 + "px";
        div.style.width = size * 2 + "px";
        div.id = name + newroom;
        resourse["div"] = div;

        if (name == "sand") {
            resourse["prize"]["sand"] = 1;
            $("#sands").append(div);
            SAND.push(resourse);
            SAND_IN.push(newroom);
        } else if (name == "wick") {
            resourse["prize"]["wick"] = 1;
            $("#wicks").append(div);
            WICK.push(resourse);
            WICK_IN.push(newroom);
        } else if (name == "powred") {
            resourse["prize"]["powred"] = 1;
            $("#powreds").append(div);
            POWRED.push(resourse);
            POWRED_IN.push(newroom);
        }

        // console.log(SAND_IN);
        // console.log(WICK_IN);
        // console.log(POWRED_IN);
    }

    function resetTimer(timer) {
        clearInterval(timer);
        TIME_TO_KILL = 300;
    }

    function endThisVar(message, x, y, timer, kill) {
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

    function die(varrior, timer, KILL){
        for (let i in lamps) {
            lamps[i][0].remove();
            lamps[i][1].remove();
        }
        torchs = 5;
        lamps = {};
        // delete lamps[room];
        $("#count-item-torch").text(torchs);
        MOVE = [];
        DIES ++;
        showIdeaX("died");

        endThisVar("Ты УМЕР!", heroStartX, heroStartY, timer, KILL);
        updateInventory(varrior["prize"], "inverted");
    }

    function attack(varrior) {
        let timer = setInterval(() => {
            TIME_TO_KILL--;
            $("#maintext").text(MONSTER_ATTACK + " (до смерти < " + TIME_TO_KILL + " секунд)");
        }, 1000);

        let KILL = setTimeout(() => {
            die(varrior, timer, KILL);        
        }, TIME_TO_KILL * 1000);


        eventInput({
            "main": {
                "head": MONSTER_ATTACK,
                "main": varrior["task"],
            },
            "buttons": [{
                "text": "Умри, монстр!",
                "func": function () {
                    if (countTrys > 0) {
                        if ($("#text").val() == varrior["answer"] || $("#text").val() == "secretkey") {
                            VARRIORS_CURRENT.splice(VARRIORS_CURRENT.indexOf(varrior), 1);
                            VARRIORS_IN.splice(VARRIORS_IN.indexOf(varrior["room"]), 1)
                            addVarrior();
                            varrior["div"].remove();

                            RIGHT_ANSWERS ++;
                            TASKS.push(varrior["number"]);
                            endThisVar("Ты ПОБЕДИЛ!", heroX, heroY, timer, KILL)
                            updateInventory(varrior["prize"], "direct");
                            KILL_MOBS ++;

                            if (KILL_MOBS == 1 || KILL_MOBS == 2 || KILL_MOBS == 3){
                                setTimeout(() => {

                                    let task1 = [];
                                    if (KILL_MOBS == 1)
                                        task1 = [
                                            "",
                                            "Задача о нахождении минимального остовного дерева",
                                            "",
                                            "Есть N комнат, которые необходимо соединить переходами, так, чтобы можно было добраться из любой комнаты в любую другую (напрямую или через другие комнаты).",
                                            "Имеются переходы между заданными парами комнат и известна длина каждого перехода",
                                            "",
                                            "Найти самый короткий путь, который включает все комнаты",
                                
                                            ]; 
                                    else if (KILL_MOBS == 2)
                                        task1 = ["","1) Выберем в графе G ребро минимальной длины. Вместе с инцидентными ему двумя вершинами оно образует подграф G2 графа G. Положим I:=2.",
                                            "2) Если I=N(G), то задача решена и Gi – искомое минимальное остовное дерево графа G. Иначе переходим к шагу 3)",
                                            "3) Строим граф Gi+1. Для этого добавим к графу Gi новое ребро минимальной длины из оставшихся, которое инцидентно какой-либо вершине графа Gi и одновременно вершине, не содержащейся в Gi. Вместе с этим ребром включаем в Gi+1 и эту инцидентную ему вершину. Присваиваем I:=I+1 и переходим к шагу 2)"];                                        
                                    else if (KILL_MOBS == 3)
                                        task1 = [                                                    
                                                    "",
                                                    "Tckb gjlptvtkmz - ‘nj dthibys uhfaf? f gtht[jls - h`,hf uhfaf? njulf dtcf ht,th - ‘nj rjkbxtcndj rktnjr d rf;ljv bp cjjndtncnde.ob[ gtht[jljd/",
                                                    "Dgthtl? cxbnfnm rktnjxrb/", 
                                                    "Bkb ytvyjuj gjlevfnm b dcgjvybnm///"
                                                ]

                                    eventInfo({
                                        "main": {
                                            "head": "Подсказка " + KILL_MOBS + " (возьми у наставника)"
                                        },
                                        "buttons": [{
                                            "text": "Продолжить путешествие",
                                            "func": closeWindow
                                        }],
                                        "ps":task1                                                                            
                                    });
                                }, 1100);
                            }
                            
                            
                            // console.log(VARRIORS_CURRENT);
                        } else {
                            countTrys--;
                            // let P = document.createElement("P");
                            // "kill-monster"
                            WRONG_ANSWERS ++;
                            let die_message = "" 
                            if (countTrys != 0)
                                die_message = "НЕВЕРНО! Пытайся ещё " + countTrys + " раз!";
                            else{
                                die_message = "Ты умрёшь.";                                
                                die(varrior, timer, KILL); 
                            }
                            $("#kill-monster").text(die_message); 
                            // P.classList.add("zero-margin");
                            // $("#content-explanation-input").append(P);
                        }
                    }
                }
            },
                {
                    "text": "Убегай!",
                    "func": function () {
                        if (MOVE.slice(MOVE.length - 5 < 0 ? 0 : MOVE.length - 5, MOVE.length).join(" ") == $("#text2").val() || $("#text2").val() == "turn and burn") {

                            endThisVar("Ты СБЕЖАЛ!", MOVES_5[MOVES_5.length - 1][0], MOVES_5[MOVES_5.length - 1][1], timer, KILL);

                            MOVES_5 = [[heroX, heroY], [heroX, heroY], [heroX, heroY]];
                        } else {
                            $("#GO").text(["Пробуй ещё...", "Да не там ты шёл!", "Ты опять не прав. Снова, да.", "В такси бы тебя убили. Нет.", "Путь не верный.", "...there is not correct way, try again..."][parseInt(Math.random() * 6)]);

                        }
                    }
                }]
        });
    }

    function updateInventory(from, direction) {
        if (direction == "direct") {
            // console.log("add");
            // console.log("sand - (from) " + INVENTORY["sand"] + " - (to) " + from["sand"]);
            // console.log("wick - (from) " + INVENTORY["wick"] + " - (to) " + from["wick"]);
            // console.log("powred - (from) " + INVENTORY["powred"] + " - (to) " + from["powred"]);            

            INVENTORY["sand"] += from["sand"];
            INVENTORY["wick"] += from["wick"];
            INVENTORY["powred"] += from["powred"];
            TNT += from["tnt"];

        } else if (direction == "inverted") {
            // console.log("remove");
            // console.log("sand - (from) " + from["sand"] + " - (to) " + INVENTORY["sand"]);
            // console.log("wick - (from) " + from["wick"] + " - (to) " + INVENTORY["wick"]);
            // console.log("powred - (from) " + from["powred"] + " - (to) " + INVENTORY["powred"]);

            from["sand"] += INVENTORY["sand"]
            from["wick"] += INVENTORY["wick"];
            from["powred"] += INVENTORY["powred"];
            from["tnt"] +=  TNT % 2 == 0 ? TNT / 2 : (TNT - 1) / 2;
            INVENTORY["sand"] = 0;
            INVENTORY["wick"] = 0;
            INVENTORY["powred"] = 0;
            TNT -= from["tnt"];
        }

        $("#count-item-sand").text(INVENTORY["sand"]);
        $("#count-item-wick").text(INVENTORY["wick"]);
        $("#count-item-powred").text(INVENTORY["powred"]);
        $("#count-item-tnt").text(TNT);

    }

    function getResourse(resourse) {
        // console.log(resourse["name"]);
        eventGet({
            "main": {
                "head": "Шахта по добыче " + (resourse["name"] == "sand" ? "ПЕСКА!" : (resourse["name"] == "wick" ? "НИТЕЙ!" : "ПОРОХА!")) + " (чтобы добыть - реши задачу)",
                "main": resourse["task"],
            },
            "buttons": [{
                "text": "Добыть!",
                "func": function () {
                    // console.log(resourse["answer"]);
                    if (resourse["answer"] == $("#text_get").val() || $("#text_get").val() == "supersecretkey") {
                        updateInventory(resourse["prize"], "direct");
                        if (resourse["name"] == "sand") {
                            SAND.splice(SAND.indexOf(resourse), 1);
                            SAND_IN.splice(SAND_IN.indexOf(resourse["room"]), 1);
                        } else if (resourse["name"] == "wick") {
                            WICK.splice(WICK.indexOf(resourse), 1);
                            WICK_IN.splice(WICK_IN.indexOf(resourse["room"]), 1);
                        } else {
                            POWRED.splice(POWRED.indexOf(resourse), 1);
                            POWRED_IN.splice(POWRED_IN.indexOf(resourse["room"]), 1);
                        }
                        resourse["div"].remove();
                        GET_RESOURSE = true;
                        RIGHT_ANSWERS ++;
                        TASKS.push(resourse["number"]);
                        endThisVar("Ресурс получен!", heroX, heroY, null, null);


                    } else {
                        WRONG_ANSWERS ++;
                        $("#button_get").text(["У тебя ошибка в рассчётах.", "Отвечаю! У тебя ошибка в рассчётах!", "Ты опять не прав. Снова, да.", "Это не тот ответ", "Будь ты учёным, тебя бы сожгли.", "...there is not correct answer, try again..."][parseInt(Math.random() * 6)]);
                    }
                }
            }]
        });
    }

    function craftTNT() {
        if (INVENTORY["sand"] > 0 && INVENTORY["wick"] > 0 && INVENTORY["powred"] > 0) {
            INVENTORY["sand"]--;
            INVENTORY["wick"]--;
            INVENTORY["powred"]--;

            TNT++;
            if (TNT == 1)
                showIdeaX("kaboom");
            if (TNT == 7)
                showIdeaX("kaboom7");

            

            $("#count-item-tnt").text(TNT);
            $("#count-item-sand").text(INVENTORY["sand"]);
            $("#count-item-wick").text(INVENTORY["wick"]);
            $("#count-item-powred").text(INVENTORY["powred"]);
        }
    }

    function putTNT() {
        if (TNT > 0 && room > 0 && (!(room in TNTS) && ROOMS_WITH_TNT > 0 || room in TNTS)) {
            for (let i in TNTS) {
                for (let j = 0; j < TNTS[i].length; j++)
                    if (TNTS[i][j][1] == heroX && TNTS[i][j][2] == heroY)
                        return null;
            }

            TNT--;

            let div = document.createElement("div");
            div.className = "tnt";
            div.style.left = heroX * size - size / 2 + "px";
            div.style.top = heroY * size - size / 2 + "px";
            div.style.height = size * 2 + "px";
            div.style.width = size * 2 + "px";
            div.id = "tnt_" + heroX + "_" + heroY;
            $("#tnts").append(div);


            if (room in TNTS) {
                TNTS[room].push([div, heroX, heroY]);
            } else {
                ROOMS_WITH_TNT--;
                TNTS[room] = [[div, heroX, heroY]];
            }

            // $("#count-item-room").text(ROOMS_WITH_TNT);
            $("#count-item-tnt").text(TNT);

        }
    }

    function getTNT() {
        if (room in TNTS) {
            TNT++;
            TNTS[room][TNTS[room].length - 1][0].remove();

            if (TNTS[room].length == 1) {
                delete TNTS[room];
                ROOMS_WITH_TNT++;
            } else
                TNTS[room].splice(TNTS[room].length - 1, 1);

            // $("#count-item-room").text(ROOMS_WITH_TNT);
            $("#count-item-tnt").text(TNT);
        }
    }

    function BANG() {
        let tnts = []
        for (let i in TNTS) {
            for (let j = 0; j < TNTS[i].length; j++) {
                // TNTS[i][j].push(i);
                tnts.push(TNTS[i][j]);
            }
        }

        if (tnts.length == 0 || BOOM != null)
            return null;

        CURRENT_TIME_TO_GONE = TIME_TO_GONE;
        let x = 0;
        prepare = setInterval(() => {
            for (let i = 0; i < tnts.length; i++) {
                if (Math.random() >= 0.5) {
                    tnts[i][0].classList.add("tnt1");
                    // if ("tnt2" in tnts[i][0].classList)
                    tnts[i][0].classList.remove("tnt2");                    
                    // "source/tnt.png"; //"center / contain no-repeat url(\"source/tnt2.png\")";
                } else {
                    tnts[i][0].classList.add("tnt2");
                    // if ("tnt1" in tnts[i][0].classList)
                    tnts[i][0].classList.remove("tnt1");
                    // tnts[i][0].style.backgroundImage = "source/tnt2.png"; //"center / contain no-repeat url(\"source/tnt.png\")";
                }
            }
            if (x == 0) {
                CURRENT_TIME_TO_GONE--;
                $("#count-item-time").text(CURRENT_TIME_TO_GONE);
                x = 1;
            } else {
                x = 0;
            }

        }, 500);

        showIdeaX("kaboom_start");
        KABOOM = true;

        BOOM = setTimeout(() => {

            
            clearInterval(prepare);
            tnts = 0
            for (let i in TNTS) {
                tnts += TNTS[i].length;
            }
            if (tnts != 0)
                destroyAll();

        }, TIME_TO_GONE * 1000);
    }

    function destroyAll() {
        console.log("Конец");

        let result = 0;

        let rms = ""
        for (let i in TNTS){
            result += TNTS[i].length * ROOM_MEAN[i];
            rms += "[" + String(TNTS[i].length) + " x " + String(ROOM_MEAN[i]) + "] + ";
        }

        rms = rms.substring(0, rms.length - 3);

        if (room != -10){
            result -= 5;
            rms += " - 5";
        }

        if (localStorage.result == "null"){
            localStorage.result = result;
            localStorage.steps = STEPS;
            localStorage.wrong = WRONG_ANSWERS;
            localStorage.right = RIGHT_ANSWERS;
            localStorage.die = DIES;
            localStorage.tasks = TASKS.join(", ");
            localStorage.rms = rms;
        }

        document.getElementById("videoPlayer").style.zIndex = "200";
        $("#videoPlayer").animate({opacity: '1'}, 700);
        document.getElementById("videoPlayer").play();
        setTimeout(() => {
            $("#videoPlayer").animate({opacity: '0'}, 700);
            setTimeout(() => {
                for (let i in TNTS) {
                    for (let j = 0; j < TNTS[i].length; j++) {
                        TNTS[i][j][0].remove();
                    }
                }
                TNTS = {};
                KABOOM = false;
                document.getElementById("videoPlayer").style.zIndex = "-1";
                window.open('result.html');
                
            }, 700);
        }, 13000);
    }

    function UNBANG() {
        if (typeof (BOOM) != "undefined" && BOOM !== null) {
            clearTimeout(BOOM);
            BOOM = null;
            KABOOM = false;

            CURRENT_TIME_TO_GONE = 0;
            $("#count-item-time").text(CURRENT_TIME_TO_GONE);

            showIdeaX("kaboom_end");
        }
        if (typeof (prepare) != "undefined" && prepare !== null) {
            clearInterval(prepare);
            prepare = null;
        }
    }

    function showIdea(forwhat, sec, important, options){

        if (IDEAS != null && !important){
            return null;
        }
        else if (IDEAS != null && important){
            clearTimeout(closeInfo);
            $("#idea-left").html("");
            $("#idea-left").animate({zIndex: -1}, 0);
            $("#idea-left").animate({opacity: '0'}, 0);

            $("#idea-right").html("");
            $("#idea-right").animate({zIndex: -1}, 0);
            $("#idea-right").animate({opacity: '0'}, 0);

            $("#idea-left-fon").animate({zIndex: -1}, 0);
            $("#idea-left-fon").animate({opacity: '0'}, 0);

            $("#idea-right-fon").animate({zIndex: -1}, 0);
            $("#idea-right-fon").animate({opacity: '0'}, 0);
        }
            
        
        if (forwhat == null)
            forwhat = heroX <= 54 ? "right" : "left";                

        IDEAS = forwhat;        

        let idea = $("#idea-" + forwhat);
        let ideafon = $("#idea-" + forwhat + "-fon");
         
        if ("head" in options){
            let P = document.createElement("P");
            P.textContent = options["head"];
            // P.classList.add("zero-margin");
            idea.append(P);
        }
        if ("idea" in options){
            for (let i = 0; i < options["idea"].length; i++){
                P = document.createElement("P");
                P.innerHTML = options["idea"][i];
                P.classList.add("zero-margin");
                P.classList.add("idea-content");
                idea.append(P);
            }
        }

        idea.animate({zIndex: 14}, 0);
        idea.animate({opacity: '1'}, 1300);
        ideafon.animate({zIndex: 13}, 0);
        ideafon.animate({opacity: '0.5'}, 1300);        
        closeInfo = setTimeout(() => {            
            idea.animate({opacity: '0', zIndex: -1}, 1300);
            ideafon.animate({opacity: '0', zIndex: -1}, 1300);               
            setTimeout(() => {
                IDEAS = null;
                idea.html("");
            }, 1300);  
        }, sec * 1000);
    
    }

    function showIdeaX(field){
        if (IDEAS_COUNTS[field].current < IDEAS_COUNTS[field].max && (IDEAS == null || IDEAS_COUNTS[field].important)){
            IDEAS_COUNTS[field].current ++;
            showIdea(null, IDEAS_COUNTS[field].time, IDEAS_COUNTS[field].important, {
                "head": IDEAS_COUNTS[field].head,
                "idea": IDEAS_COUNTS[field].count_values == 1 ? IDEAS_COUNTS[field].values[0] : IDEAS_COUNTS[field].values[IDEAS_COUNTS[field].current - 1]
            });
        }

    }

    var heroX = 1,
        heroY = 21,
        heroStartX = 1,
        heroStartY = 21,
        size = $(window).width() / 108,
        deltaX = size / 4,
        deltaY = size / 2 - size * 2,
        room = -10,
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
        SHOWINFO = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
        VARRIORS_IN = [],
        countTrys = 5,
        MOVES_5 = [[heroX, heroY], [heroX, heroY], [heroX, heroY]],
        TIME_TO_GONE = 100,
        CURRENT_TIME_TO_GONE = 0;
    BOOM = null,
        prepare = null,
        SPEED = 100;

    ROOMS = ["1. Внушительная комната была погружена во мрак освещающими её настенными свечами, на стенах были белые меловые рисунки, смятые листы бумаги перемешивались со старыми изорванными книгами беспорядочно раскиданными по комнате. Настенные часы не работали, но с них сыпалась галька, в конце комнаты красовалась нарисованная дверь. ",
        "2. Не определённых размеров комната была погружена во мрак освещающими её биолюминисцентными грибами, стены которой были выложены старыми бетонными панелями, разлитые чернила и пара писчих перьев лежали в углу комнаты. Несколько маленьких тумбочек были расставлены близ углов комнаты.",
        "3. Очень большая комната с едва освещающими её биолюминисцентными грибами, нежно жёлтые обои украшали стены этой комнаты, почти что пустая комната привлекала внимание старой стеной за которой, слышался стук... Несколько маленьких тумбочек были расставлены близ углов комнаты.",
        "4. Очень маленькая комната в полумраке которой было еле видно освещающей её лампой накаливания, в комнате была кровь окропившая стены алыми каплями, среди множества книг, полок и шкафов выделялась книга, большая советская энциклопедия... Настенные часы не работали, но с них сыпалась галька.",
        "5. Не определённых размеров комната была погружена во мрак освещающей её свечкой, стены которой были покрыты старыми серовато-зелёными облупленными обоями, пол комнаты встретил вас густыми зарослями высокой травы.",
        "6. Миниатюрная комната с тускло освещающей её биолюминисцентной лампой, стены которой были покрыты старыми серовато-зелёными облупленными обоями, клубы земли разбросанные по углам разносили затхлый запах болота пронизывающий всю комнату.",
        "7. Маленькая комната с слабо освещающим её поломанным торшером, стены которой были выложены старыми досками, по полу валялись ветки и ещё не увядшие листья.",
        "8. Комната с слабо освещающей её напольной лампой, по полу валялись ветки и ещё не увядшие листья.",
        "9. Комната с ярко освещающей её лампой, стены которой были выложены старыми бетонными панелями, смятые листы бумаги перемешивались со старыми изорванными книгами беспорядочно раскиданными по комнате.",
        "10. Комната с едва освещающими её кипой полу затухших свечей, старые потрескавшиеся стены были усеяны каплями чёрной краски, разные плакаты завешивали часть комнаты.",
        "11. Комната в полумраке которой было еле видно освещающей её лампой, стены которой были выложены старыми досками.",
        "12. Комната с еле освещающими её кипой полу затухших свечей, стены которой были выложены старыми досками, весь пол комнаты устилали пара тряпок.",
        "13. Не большая комната погруженая во мрак.",
        "14. Внушительная комната с потухшей свечкой, в комнате была кровь окропившая стены алыми каплями.",
        "15. Очень маленькая комната в полумраке которой было еле видно освещающей её лампой накаливания, в комнате была кровь окропившая стены алыми каплями, среди множества книг, полок и шкафов выделялась книга, большая советская энциклопедия...",
        "16. Миниатюрная комната с тускло освещающей её биолюминисцентной лампой, стены которой были покрыты старыми серовато-зелёными облупленными обоями, клубы земли разбросанные по углам разносили затхлый запах болота пронизывающий всю комнату.",
        "17. Внушительная комната с потухшей свечкой, в комнате была кровь окропившая стены алыми каплями.",
        "18. Комната с едва освещающими её кипой полу затухших свечей, старые потрескавшиеся стены были усеяны каплями чёрной краски, разные плакаты завешивали часть комнаты.",
        "19. Миниатюрная комната с тускло освещающей её биолюминисцентной лампой, стены которой были покрыты старыми серовато-зелёными облупленными обоями, клубы земли разбросанные по углам разносили затхлый запах болота пронизывающий всю комнату.",
        "20. Не определённых размеров комната была погружена во мрак освещающей её свечкой, стены которой были покрыты старыми серовато-зелёными облупленными обоями, пол комнаты встретил вас густыми зарослями высокой травы.",
        "21. Внушительная комната с потухшей свечкой, в комнате была кровь окропившая стены алыми каплями.",
        "22. Комната с еле освещающей её старой люстрой, стены украшали новая заплетённая паутина.",
        "23. Комната с тускло освещающими её свечами, стены которой были выложены старыми досками.",
        "24. Маленькая комната с не сильно освещающей её биолюминисцентной лампой.",
        "25. Комната с слабо освещающей её напольной лампой, по полу валялись ветки и ещё не увядшие листья.",
        "26. Не определённых размеров комната с еле освещающими её свечами, стены которой были покрыты старыми серовато-зелёными облупленными обоями.",
        "27. Внушительная комната была погружена во мрак освещающими её настенными свечами, на стенах были белые меловые рисунки, смятые листы бумаги перемешивались со старыми изорванными книгами беспорядочно раскиданными по комнате.",
        "28. Очень маленькая комната в полумраке которой было еле видно освещающими её высшими силами, стены украшали новые заплетённые паутиной обои, по всем стенам и потолку висели сломанные лампы и фонарики, Много странных усыпанных по комнате камней привлекали ваше внимание."],


    ROOMS_INFO = [
        [
            "{ way_1_2 = 12 }",    
        ],
        [
            "{ way_2_1 = 12 }",
            "{ way_2_3 = 6 }",
            "{ way_2_5 = 12 }",
            "{ way_2_10 = 4 }",
        ],
        [
            "{ way_3_2 = 6 }",
            "{ way_3_4 = 8 }",
        ],
        [
            "{ way_4_3 = 8 }",
            "{ way_4_6 = 4 }",
            "{ way_4_7 = 10 }",
            "{ way_4_18 = 4 }",
        ],
        [
            "{ way_5_2 = 12 }",
            "{ way_5_6 = 4 }",
            "{ way_5_9 = 8 }",
            "{ way_5_27 = 6 }",
        ],
        [
            "{ way_6_5 = 4 }",
            "{ way_6_4 = 4 }",
        ],
        [
            "{ way_7_4 = 10 }",
            "{ way_7_8 = 6 }",
        ],
        [
            "{ way_8_7 = 6 }",
            "{ way_8_9 = 2 }",
            "{ way_8_15 = 8 }",
            "{ way_8_16 = 8 }",
        ],
        [
            "{ way_9_5 = 8 }",
            "{ way_9_8 = 2 }",
            "{ way_9_14 = 4 }",
            "{ way_9_27 = 8 }",
        ],
        [
            "{ way_10_2 = 4 }",
            "{ way_10_11 = 24 }",                        
        ],
        [
            "{ way_11_10 = 24 }",
            "{ way_11_12 = 4 }",
            "{ way_11_13 = 13 }",
            "{ way_11_27 = 6 }",
        ],
        [
            "{ way_12_11 = 4 }",
            "{ way_12_13 = 52 }",
            "{ way_12_26 = 52 }",
            
        ],
        [
            "{ way_13_11 = 13 }",
            "{ way_13_12 = 52 }",
            "{ way_13_26 = 6 }",
            "{ way_13_27 = 4 }",            
        ],
        [
            "{ way_14_9 = 4 }",
            "{ way_14_15 = 2 }",
            "{ way_14_26 = 6 }",
        ],
        [
            "{ way_15_8 = 8 }",
            "{ way_15_14 = 2 }",   
        ],
        [
            "{ way_16_8 = 8 }",
            "{ way_16_17 = 24 }",
            "{ way_16_25 = 34 }",
        ],
        [
            "{ way_17_16 = 24 }",
            "{ way_17_18 = 6 }",
            "{ way_17_22 = 16 }",
        ],
        [
            "{ way_18_4 = 4 }",
            "{ way_18_17 = 6 }",
            "{ way_18_20 = 14 }",
        ],
        [
            "{ way_19_20 = 4 }",
            "{ way_19_28 = 6 }",
        ],
        [
            "{ way_20_18 = 14 }",
            "{ way_20_19 = 4 }",
            "{ way_20_25 = 50 }",
        ],
        [
            "{ way_21_22 = 4 }",
        ],
        [
            "{ way_22_21 = 4 }",
            "{ way_22_17 = 16 }",
        ],
        [
            "{ way_23_24 = 6 }",
            "{ way_23_25 = 8 }",
            "{ way_23_28 = 8 }",
        ],
        [
            "{ way_24_23 = 6 }",
            "{ way_24_25 = 22 }",
        ],
        [
            "{ way_25_23 = 8 }",
            "{ way_25_24 = 22 }",
            "{ way_25_26 = 8 }",
        ],
        [
            "{ way_26_12 = 52 }",
            "{ way_26_13 = 6 }",
            "{ way_26_14 = 6 }",
            "{ way_26_25 = 8 }",
        ],
        [
            "{ way_27_5 = 6 }",
            "{ way_27_9 = 8 }",
            "{ way_27_11 = 6 }",
            "{ way_27_13 = 4 }",
        ],
        [
            "{ way_28_19 = 6 }",
            "{ way_28_23 = 8 }",
        ],
        
    ]

    TNTS = {};

    ROOMS_WITH_TNT = 28;

    MONSTER_ATTACK = "МОНСТР АТАКУЕТ ТЕБЯ",
        TIME_TO_KILL = 300,

        INVENTORY = {
            "sand": 0,
            "powred": 0,
            "wick": 0
        },

        ROOM_MEAN = {
            1: 4,
            2: 5,
            3: 4,
            4: 4,
            5: 6,
            6: 5,
            7: 4,
            8: 5,
            9: 6,
            10: 5,
            11: 6,
            12: 5,
            13: 6,
            14: 5,
            15: 4,
            16: 4,
            17: 7,
            18: 3,
            19: 2,
            20: 3,
            21: 1,
            22: 2,
            23: 3,
            24: 3,
            25: 4,
            26: 5,
            27: 7,
            28: 2
        },
        TASKS = [], 

        SAND = [],
        WICK = [],
        POWRED = [],
        SAND_IN = [],
        WICK_IN = [],
        POWRED_IN = [],

        TNT = 0,
        RESULT = -555,
        DIES = 0,
        // promptX = heroX + 7,
        // promptY = heroY,
        
        
        promptX = 77,
        promptY = 23,
        
        STEPS = 0,

        KABOOM = false,

        closeInfo = null,
        NEED_CLOSE_IDEA = false;

        KILL_MOBS = 0,
        IDEAS = null,
        IDEAS_TIME = 10,
        COUNT_ROOMS = 0,
        GET_RESOURSE = false,
        WRONG_ANSWERS = 0,
        RIGHT_ANSWERS = 0,
        IDEAS_COUNTS = {
            first_room_start: {
                current:0,
                max:3,  
                count_values:1,
                head: "Приветствуем в подземелье!",                              
                values:[["Используй стрелки, чтобы ходить","&nbsp;", "вверх", "⇑", "влево ⇐&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⇒ вправо", "⇓", "вниз"]],
                time: 8.5,
                important: false
            },
            first_room_end: {
                current:0,
                max:1,
                count_values:1,   
                head: "ВАША МИССИЯ ВЫПОЛНЕНА!",                                    
                values:[["Вы вернулись к кораблю живым.", "", "Теперь жизнь на этой планете в безопасности","", "Ожидай взрыва, боец.", "", "Вселенная тебя не забудет"]],
                time: 10,
                important: true
            },
            step_100: {
                current:0,
                max:1,
                count_values:1,  
                head: "Освещение. Факела.",                                     
                values:[["Если в подземелье слишком темно - ставь ФАКЕЛА","", "Они подсвечивают ресурсы вблизи и карту","", "В каждой комнате можно установить лишь 1 факел", "","У тебя всего 5 факелов","","","Установить факел ——> 🅉", "Забрать факел ——> 🅇"]],
                time: 12,
                important: false
            },
            come_to_rooms: {
                current:0,
                max:3,
                count_values:3, 
                head: "Комнаты.",                                      
                values:[
                    ["Комнат всего 28","", "У каждой комнаты есть свой НОМЕР","", "Если вы стоите в комнате, всегда можно узнать информацию о ней (в инвентаре)", "", "<———"],
                    ["В каждой комнате имеется ШАХТА с каким-то РЕСУРСОМ", "", "Шахта может располагаться В ЛЮБОМ месте комнаты", "", "Пустые шахты пропадают с карты"],
                    ["Где-то в комнатах есть монстры (всего не больше 10)", "", "Каждый момент на карте 5 монстров", "", "При убийстве монстра, на карте появляется новый", "", "Монстры не появляются в комнатах с факелами"]                    
                ],
                time: 13,
                important: false
            },
            come_to_rooms_if_open: {
                current:0,
                max:2,
                count_values:1,  
                head: "Отключение уведомлений",                                     
                values:[["— можно ОТКЛЮЧИТЬ справку в комнате","", "— для этого нажмите \"БОЛЬШЕ НЕ ПОКАЗЫВАТЬ\" при входе в комнату", "", "— или отключить во всех комнатах - в инвентаре \"НЕ ПОКАЗЫВАТЬ ИНФОРМАЦИЮ О КОМНАТАХ\"", "", "", "Вкл / откл ——> 🄲"]],
                time: 12,
                important: true
            },
            come_to_rooms_if_close: {
                current:0,
                max:2,
                count_values:1,       
                head: "Включение уведомлений",                                
                values:[["— можете ВКЛЮЧИТЬ справку о комнатах","", "— для этого нажмите \"ПОКАЗАТЬ ИНФОРМАЦИЮ О КОМНАТАХ\" в инвентаре (внизу)", "", "", "Вкл / откл ——> 🄲"]],
                time: 10,
                important: false
            },
            find_resourse: {
                current:0,
                max:3,
                count_values:1,      
                head: "Ресурсы.",                                 
                values:[["Вы недалеко от ШАХТЫ.", "", "Если встать на шахту, - сможете добыть РЕСУРС.", "", "Ресурсов три:", "— ПЕСОК", "— ПОРОХ", "— НИТЬ", "", "Каждая шахта даёт 1 ед. ресурса", "Факела подсвечивают ресурсы"]],
                time: 8,
                important: false
            },
            get_resourse: {
                current:0,
                max:3,
                count_values:1,      
                head: "Вы получили РЕСУРС!",                                 
                values:[["Откройте инвентарь:", "Кнопка ИНВЕНТАРЯ - в левом верхнем углу.","", "", "<<<=============", "","", "Там расположены ваши РЕСУРСЫ, ФАКЕЛА и ДИНАМИТЫ", "", "Собирайте больше, пойдём дальше!"]],
                time: 10,
                important: true
            },
            get_all_resourse: {
                current:0,
                max:1,
                count_values:1,         
                head: "Вы собрали КОМПЛЕКТ ресурсов!",                              
                values:[["У вас есть всё необходимое для ДИНАМИТА", "", "Откройте инвентарь:","", "", "<<<=============", "","", "Изготовьте ваш первый ДИНАМИТ!"]],
                time: 10,
                important: true
            },
            find_monster: {
                current:0,
                max:3,
                count_values:1,   
                head: "Рядом МОНСТР!",                                    
                values:[["Вы наткнулись на МОНСТРА!", "<—————————————————>", "За убийство вы получите РЕСУРСЫ", "<——————————>","Если умрёте - ПОТЕРЯЕТЕ ВСЁ", "<—————————————————>", "Время на убийство ограничено (5 минут)", ]],
                time: 10,
                important: true
            },
            died: {
                current:0,
                max:1,
                count_values:3,  
                head: "Вы УМЕРЛИ",                                     
                values:[["Гайд по мертвяку:", "", "1) Не паниковать.", "2) Проверить РЕСУРСЫ (их больше нет).", "3) Дорешать предыдущую задачу.", "4) Пойти и убить МОНСТРА.", "", "5) РЕСУРСЫ вернутся! (и даже немного больше)"]],
                time: 10,
                important: true
            },
            speed: {
                current:0,
                max:5,
                count_values:1,    
                head: "Хочешь ходить БЫСТРЕЕ?",                                   
                values:[["Быстрее ———> ⍄", "", "Медленнее ———> ⍃"]],
                time: 6,
                important: false
            },
            kaboom: {
                current:0,
                max:1,
                count_values:1,    
                head: "Поздравляем! Теперь ты боеспособен!",                                   
                values:[["Боец!", "", "Оружие свободы теперь в твоих руках!", "Осталось ещё 9","", "Удачи."]],
                time: 0,
                important: true
            },
            kaboom7: {
                current:0,
                max:1,
                count_values:1,    
                head: "Ты в шаге от ПОБЕДЫ.",                                   
                values:[["Боец!", "", "Отправляйся в комнату 22", "Там находится ПОСЛЕДНЯЯ МИССИЯ","", "(комната 22 - в середине подземелья, добраться - только через 17)"]],
                time: 0,
                important: true
            },
            kaboom_start: {
                current:0,
                max:100,
                count_values:1,    
                head: "WARNING!",                                   
                values:[["Включена финальная стадия игры!","", "Покинуть помещение!", "", "(вернитесь в начало, ко входу в поздемелье)"]],
                time: 10,
                important: true
            },
            kaboom_end: {
                current:0,
                max:100,
                count_values:1,    
                head: "NORMAL",                                   
                values:[["Процесс самоуничтожения остановлен.","", "Миссия продолжается.", "", "(дальнейшее пребывание в подземелье не представляет опасности)"]],
                time: 7,
                important: true
            },
            inventory: {
                current:0,
                max:3,
                count_values:1,    
                head: "Инвентарь.",                                   
                values:[["Основной ИНВЕНТАРЬ - слева вверху", "", "<<<=============","Вкл / откл ——> 🅅", "", "", "Дополнительный - СПРАВКА - справа вверху", "=============>>>", "Вкл / откл ——> [/]"]],
                time: 7,
                important: false
            },
            room22: {
                current:0,
                max:3,
                count_values:1,    
                head: "Случайная информация",                                   
                values:[["Побывайте в комнате 22!", "", "Комната находится в середине подземелий", "", "Это главный квест игры!"]],
                time: 10,
                important: false
            },
        };
        

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
        function () {
            interfaceMoveOut();
        }
    );

    $("#button-interface2").click(
        function () {
            interfaceMoveOut2();
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

    $("#craftTNT").click(craftTNT);

    $("#getTNT").click(getTNT);

    $("#putTNT").click(putTNT);

    $("#bang").click(BANG);
    $("#unbang").click(UNBANG);

    $("#speed").click(() => {SPEED = 100});
    $("#xspeed").click(() => {SPEED = 0});


    $("#count-item-torch").text(torchs);
    $("#count-item-tnt").text(TNT);

    $("#prompt").css({left: (promptX * size + deltaX), top: ((promptY + 0.5) * size + deltaY)});
    $("#prompt").height(size * 2);
    $("#prompt").width(size);


//#region VARRIORS init

    VARRIORS_GLOBAL.push(
        {
            "task": "tasks/5.jpg",
            "answer": "Anna the princess of Arendelle",
            "prize": {
                "sand": 1,
                "powred": 0,
                "wick": 0,
                "tnt": 0
            },
            "x": -1,
            "y": -1,
            "div": "",
            "room": 0,
            "number": 5
        });
    VARRIORS_GLOBAL.push(
        {
            "task": "tasks/9.jpg",
            "answer": "11",
            "prize": {
                "sand": 0,
                "powred": 1,
                "wick": 0,
                "tnt": 0
            },
            "x": -1,
            "y": -1,
            "div": "",
            "room": 0,
            "number": 9
        });
    VARRIORS_GLOBAL.push(
        {
            "task": "tasks/24.jpg",
            "answer": "15",
            "prize": {
                "sand": 0,
                "powred": 0,
                "wick": 1,
                "tnt": 0
            },
            "x": -1,
            "y": -1,
            "div": "",
            "room": 0,
            "number": 24
        });
    VARRIORS_GLOBAL.push(
        {
            "task": "tasks/15.jpg",
            "answer": "javascript",
            "prize": {
                "sand": 1,
                "powred": 0,
                "wick": 1,
                "tnt": 0
            },
            "x": -1,
            "y": -1,
            "div": "",
            "room": 0,
            "number": 15
        });
    VARRIORS_GLOBAL.push(
        {
            "task": "tasks/19.jpg",
            "answer": "86",
            "prize": {
                "sand": 0,
                "powred": 1,
                "wick": 1,
                "tnt": 0
            },
            "x": -1,
            "y": -1,
            "div": "",
            "room": 0,
            "number": 19
        });
    VARRIORS_GLOBAL.push(
        {
            "task": "tasks/20.jpg",
            "answer": "493753",
            "prize": {
                "sand": 1,
                "powred": 1,
                "wick": 0,
                "tnt": 0
            },
            "x": -1,
            "y": -1,
            "div": "",
            "room": 0,
            "number": 20
        });
    VARRIORS_GLOBAL.push(
        {
            "task": "tasks/25.jpg",
            "answer": "-6",
            "prize": {
                "sand": 0,
                "powred": 0,
                "wick": 0,
                "tnt": 0
            },
            "x": -1,
            "y": -1,
            "div": "",
            "room": 0,
            "number": 25
        });
    VARRIORS_GLOBAL.push(
        {
            "task": "tasks/30.jpg",
            "answer": "+ *",
            "prize": {
                "sand": 1,
                "powred": 1,
                "wick": 1,
                "tnt": 0
            },
            "x": -1,
            "y": -1,
            "div": "",
            "room": 0,
            "number": 30
        });
    VARRIORS_GLOBAL.push(
        {
            "task": "tasks/35.jpg",
            "answer": "14",
            "prize": {
                "sand": 0,
                "powred": 1,
                "wick": 0,
                "tnt": 0
            },
            "x": -1,
            "y": -1,
            "div": "",
            "room": 0,
            "number": 35
        });
    VARRIORS_GLOBAL.push(
        {
            "task": "tasks/37.jpg",
            "answer": "33",
            "prize": {
                "sand": 2,
                "powred": 0,
                "wick": 0,
                "tnt": 0
            },
            "x": -1,
            "y": -1,
            "div": "",
            "room": 0, 
            "number": 37
        });


//#endregion   

//#region RESOURSE init 
    addResourse("sand", "tasks/1.jpg", "2 4", 1);
    addResourse("sand", "tasks/4.jpg", "victor is ours", 4);
    addResourse("sand", "tasks/10.jpg", "21", 10);
    addResourse("sand", "tasks/13.jpg", "GЭGЭ~8GЭGЭ88GЭЭ~88", 13);
    addResourse("sand", "tasks/16.jpg", "jquery", 16);
    addResourse("sand", "tasks/12.jpg", "a1111111111", 12);
    addResourse("sand", "tasks/26.jpg", "немец", 26);
    addResourse("sand", "tasks/31.jpg", "15", 31);
    addResourse("sand", "tasks/34.jpg", "allok", 34);

    addResourse("wick", "tasks/2.jpg", "13", 2);
    addResourse("wick", "tasks/6.jpg", "Elsa the queen of Arendelle", 6);
    addResourse("wick", "tasks/7.jpg", "2 3 6 3 2 13 15", 7);
    addResourse("wick", "tasks/14.jpg", "22", 14);
    addResourse("wick", "tasks/17.jpg", "noqvz", 17);
    addResourse("wick", "tasks/23.jpg", "2", 23);
    addResourse("wick", "tasks/27.jpg", "Иванов", 27);
    addResourse("wick", "tasks/32.jpg", "- + -", 32);
    addResourse("wick", "tasks/36.jpg", "36", 36);

    addResourse("powred", "tasks/3.jpg", "think better", 3);
    addResourse("powred", "tasks/8.jpg", "687", 8);
    addResourse("powred", "tasks/11.jpg", "70", 11);
    addResourse("powred", "tasks/18.jpg", "8", 18);
    addResourse("powred", "tasks/21.jpg", "0402", 21);
    addResourse("powred", "tasks/22.jpg", "-2", 22);
    addResourse("powred", "tasks/28.jpg", "Ирина", 28);
    addResourse("powred", "tasks/33.jpg", "+ + -", 33);
    addResourse("powred", "tasks/29.jpg", "Петров", 29);
    
//#endregion
        // console.log("ok")
    for (let i in [1, 1, 1, 1, 1])
        addVarrior();

    map[22][0] = -10;
    map[22][1] = -10;
    map[22][2] = -10;
    map[22][3] = -10;
    map[22][4] = -10;

    map[21][0] = -10;
    map[21][1] = -10;
    map[21][2] = -10;
    map[21][3] = -10;
    map[21][4] = -10;

    map[20][0] = -10;
    map[20][1] = -10;
    map[20][2] = -10;
    map[20][3] = -10;
    map[20][4] = -10;

    localStorage.result = "null";
    localStorage.steps = "0";
    localStorage.wrong = "0";
    localStorage.right = "0";
    localStorage.die = "0";
    localStorage.tasks = "null";
    localStorage.rms = "null";
    

    showIdeaX("first_room_start");
     
});


