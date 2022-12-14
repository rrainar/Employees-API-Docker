const employees = [
  { name: "Annabel Pugi", title: "Intern", tribe: "Internstellar" },
  { name: "Egle Tannenberg", title: "Intern", tribe: "Internstellar" },
  { name: "Gloria Krieger", title: "Intern", tribe: "Internstellar" },
  { name: "Kristen Kuldmaa", title: "Intern", tribe: "Internstellar" },
  { name: "Maksim Ramazanov", title: "Intern", tribe: "Internstellar" },
  { name: "Rainar Razumovski", title: "Intern", tribe: "Internstellar" },
  { name: "Risto Vatsar", title: "Intern", tribe: "Internstellar" },
  { name: "Sakina Ibrahimova", title: "Intern", tribe: "Internstellar" },
  { name: "Sazzad Hossain", title: "Intern", tribe: "Internstellar" },
  { name: "Sirli Kont", title: "Intern", tribe: "Internstellar" },
  { name: "Mike", title: "Backend Developer", tribe: "Internstellar" },
  { name: "Zohaib Ahmed Butt", title: "Full Stack Developer", tribe: "Rigas" },
  { name: "Tiina Härm", title: "Senior Data Engineer", tribe: "Data" },
];

function createNewEmp(employee) {
  employees.push(employee);
}

function getAll(name, title, tribe) {
  const result = employees.filter(
    (employee) =>
      (name
        ? employee.name.toLowerCase().includes(name.toLowerCase())
        : true) &&
      (title ? employee.title === title : true) &&
      (tribe ? employee.tribe === tribe : true)
  );
  return result;
}

function getByIdEmployees(id) {
  return employees[id];
}


function deleteByIdEmployees(id) {
  employees.splice(id, 1);
}

function employeesReport() {
  // const cache = redis.get("employeesReport");
  // if (!cache) {
  //   return JSON.parse(cache);
  // }
  const query = await knex(EMP)
    .select(
      "employees.name as name",
      "employees.title as title",
      "tribes.name as tribe"
    )
    .innerJoin(TRI, "employees.tribe_id", "=", "tribes.id");
  const groupByTribe = query.reduce(function (group, employee) {
    const { tribe } = employee;
    group[tribe] = group[tribe] || [];
    group[tribe].push({ name: employee.name, title: employee.title });
    return group;
  }, Object.create(null));
  //redis.set("employeesReport", JSON.stringify(groupByTribe));
  return groupByTribe;
}

module.exports = {
  createNewEmp,
  getAll,
  getByIdEmployees,
  deleteByIdEmployees,
  employeesReport,

};
