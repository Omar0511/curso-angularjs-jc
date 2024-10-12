// Definición del módulo de AngularJS
angular.module('appCuaderno', [])
// Definición del controlador
.controller('AlumnosController',  function ($scope) {
    $scope.alumnos = [
        {
            nombre: "Omar",
            telefono: "1234567890",
            curso: "angular.js"
        },
        {
            nombre: "Sofia",
            telefono: "9876543210",
            curso: "java"
        },
        {
            nombre: "Luis",
            telefono: "0987654321",
            curso: "php"
        },
        {
            nombre: "Juan",
            telefono: "7654321098",
            curso: "javascript"
        }
    ];

    $scope.save = function () {
        $scope.alumnos.push({
            nombre: $scope.nuevoAlumno.nombre,
            telefono: $scope.nuevoAlumno.telefono,
            curso: $scope.nuevoAlumno.curso
        });
    }
});


// Confiltro
// .controller('AlumnosController', ['filterFilter'],  function ($scope) {
//     $scope.alumnos = [
//         {
//             nombre: "Omar",
//             telefono: "1234567890",
//             curso: "angular.js"
//         },
//         {
//             nombre: "Sofia",
//             telefono: "9876543210",
//             curso: "java"
//         },
//         {
//             nombre: "Luis",
//             telefono: "0987654321",
//             curso: "php"
//         },
//         {
//             nombre: "Juan",
//             telefono: "7654321098",
//             curso: "javascript"
//         }
//     ];
//     this.filteredArray = filterFilter(this.array, 'e');
// });

