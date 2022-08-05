const tribes = [
    { name: "Internstellar", area: "Shared Expiriences" },
    { name: "Rigas", area: "Apps - Pre Sales" },
    { name: "Data Engineering", area: "Data" },
  ];



function getAllTribes(name, area) {
    const result = tribes.filter(
      (tribe) =>
        (name
          ? tribe.name.toLowerCase().includes(name.toLowerCase())
          : true) &&
        (area ? tribe.area === title : true)
    );
    return result;
  }

  function getByIdTribes(id) {
    return tribes[id];
  }


//   function employeesInTribesReport() {
//     const report = {};
//     for (employee of tribesModel.employees) {
//       if (employee.tribe in report) {
//         report[employee.tribe].push(employee);
//       } else {
//         report[employee.tribe] = [];
//         report[employee.tribe].push(employee);
//       }
//     }
  
//     return report;
//   }

  module.exports = {
    getAllTribes,
    getByIdTribes,
  
  };