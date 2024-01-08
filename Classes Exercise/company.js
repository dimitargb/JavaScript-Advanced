class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department) {
            throw new Error("Invalid input!");
        }
        if (salary < 0) {
            throw new Error("Invalid input!");
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }

        this.departments[department].push({ name, salary, position });
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDepartment = "";
        let bestDepartmentSalarySum = 0;
        let bestDepartmentEmployeeCount = 0;

        for (const department in this.departments) {
            let departmentSalarySum = 0;
            let departmentEmployeeCount = this.departments[department].length;

            for (const employee of this.departments[department]) {
                departmentSalarySum += employee.salary;
            }

            const departmentAverageSalary =
                departmentSalarySum / departmentEmployeeCount;
            if (
                departmentAverageSalary > bestDepartmentSalarySum ||
                !bestDepartment
            ) {
                bestDepartment = department;
                bestDepartmentSalarySum = departmentAverageSalary;
                bestDepartmentEmployeeCount = departmentEmployeeCount;
            }
        }

        const result = [
            `Best Department is: ${bestDepartment}`,
            `Average salary: ${bestDepartmentSalarySum.toFixed(2)}`,
        ];

        this.departments[bestDepartment].sort((a, b) => {
            if (a.salary === b.salary) {
                return a.name.localeCompare(b.name);
            }
            return b.salary - a.salary;
        });

        for (const employee of this.departments[bestDepartment]) {
            result.push(
                `${employee.name} ${employee.salary} ${employee.position}`
            );
        }

        return result.join("\n");
    }
}