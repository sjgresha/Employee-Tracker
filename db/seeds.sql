INSERT INTO department (id, name) VALUES
(1, "Frontend"),
(2, "Kitchen"),
(3, "Maintenance");

INSERT INTO roles (id, title, hourly, department_id) VALUES
(1, 'Cashier', 15, 1),
(2, 'Bartender', 15, 1),
(3, 'Cashier Lead', 20, 1),
(4, 'Cook', 15, 2),
(5, 'Prep Cook', 18, 2),
(6, 'Driver', 15, 2),
(7, 'Dishwasher', 15, 3),
(8, 'Janitor', 15, 3);

INSERT INTO employee (id, first_name, last_name, roles_id, manager_id) VALUES
(1, "Billy", "Bob", 1, null),
(2, "Jason", "Born", 1, null),
(3, "Barbie", "Ken", 2, null),
(4, "Garry", "Snail", 3, 1),
(5, "Grim", "Reaper", 1, null),
(6, "Uncle", "Sam", 4, null),
(7, "Sakura", "Uchiha", 5, null),
(8, "Padme", "Skywalker", 4, null),
(9, "Ryan", "Renolds", 7, null),
(10, "Mister", "Beast", 8, null);